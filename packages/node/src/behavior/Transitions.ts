/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Agent } from "#endpoint/Agent.js";
import { Endpoint } from "#endpoint/Endpoint.js";
import { Diagnostic, Logger, MaybePromise, Time, Timer } from "#general";
import { Behavior } from "./Behavior.js";
import { ClusterEvents } from "./cluster/ClusterEvents.js";

const logger = Logger.get("Transition");

/**
 * Attribute transition management.
 *
 * This utility supports updates of one or more attributes of a single behavior when the change occurs gradually over
 * time.
 *
 * Implementation notes:
 *
 * - Transitions occur in small time increments, currently 100 ms. by default
 * - To improve consistency, values such as end time, min/max, etc. update every iteration based on current state
 * - Internal time keeping uses ms but published values are scaled based on configuration
 * - Internal values are floats but rounded to integers when published
 * - Supports correct semantics for LVL & CC "remaining time", will need additional options for PCC "remaining duration"
 */
export class Transitions<T extends Behavior.Type> {
    #endpoint: Endpoint;
    #type: Behavior.Type;
    #timer?: Timer;
    #config: Transitions.Configuration;
    #transitioning = {} as Record<Transitions.AttrOf<T>, AttrState<T>>;
    #outstandingTick?: MaybePromise<void>;
    #outstandingRemainingTimeUpdate?: MaybePromise<void>;
    #staticRemainingTime = 0;

    constructor(endpoint: Endpoint, type: T, config: Transitions.Configuration) {
        this.#config = config;
        this.#endpoint = endpoint;
        this.#type = type;
    }

    /**
     * Initiate transition of an attribute.
     */
    start(transition: Transitions.Transition<T>) {
        const { name, owner, changePerS } = transition;
        let { targetValue } = transition;

        this.stop(name);

        // Handle immediate transition
        if (!this.#config.manageTransitions || !changePerS) {
            if (targetValue === undefined || targetValue === null) {
                return;
            }

            if (transition.min !== undefined && targetValue < transition.min) {
                targetValue = transition.min;
            } else if (transition.max !== undefined && targetValue > transition.max) {
                targetValue = transition.max;
            }

            (owner.state as Record<Transitions.AttrOf<T>, number>)[name] = targetValue;
            return;
        }

        const remainingTimeBeforeStart = this.remainingTime;

        const currentValue = (owner.state as Record<Transitions.AttrOf<T>, number>)[name];

        this.#transitioning[name] = {
            ...transition,
            currentValue,
            changePerMs: changePerS / 1000,
            prevStepAt: Time.nowMs(),
        };

        logger.info(
            this.#logPrefix,
            "Transitioning",
            Diagnostic.strong(name),
            Diagnostic.dict({
                from: currentValue,
                to: targetValue,
                rate: `${changePerS.toPrecision(3)}/s`,
            }),
        );

        if (this.#timer === undefined) {
            this.#timer = Time.getPeriodicTimer(
                `transition-${this.#endpoint}-${this.#type.name}`,
                this.#config.stepIntervalMs ?? Transitions.DEFAULT_STEP_INTERVAL_MS,
                this.#step.bind(this),
            );
            this.#timer.start();
        }

        const { remainingTimeEvent } = this.#config;
        if (!remainingTimeEvent) {
            return;
        }

        if (this.#outstandingRemainingTimeUpdate || this.remainingTime - remainingTimeBeforeStart < 1) {
            return;
        }

        this.#outstandingRemainingTimeUpdate = this.#endpoint.act("remaining-time-update", agent => {
            remainingTimeEvent.emit(this.remainingTime, -1, agent.context);
        });
    }

    /**
     * Stop transition of one or all attributes.
     */
    stop(name?: Transitions.AttrOf<T>) {
        if (name === undefined) {
            this.#transitioning = {} as Record<any, any>;
        } else {
            if (!(name in this.#transitioning)) {
                return;
            }

            delete this.#transitioning[name];

            if (Object.keys(this.#transitioning).length) {
                // Other transitions are ongoing
                return;
            }
        }

        // We only get here if all transitions have stopped
        if (this.#timer) {
            this.#timer.stop();
            this.#timer = undefined;
        }
    }

    /**
     * Free resources.
     */
    async close() {
        this.stop();

        if (this.#outstandingTick) {
            await this.#outstandingTick;
        }
        if (this.#outstandingRemainingTimeUpdate) {
            await this.#outstandingRemainingTimeUpdate;
        }
    }

    /**
     * Set the static version of remaining time used when transition management is disabled.
     */
    set remainingTime(value: number) {
        this.#staticRemainingTime = this.#internalTimeOf(value);
    }

    /**
     * Determine time remaining in transition in (possibly fractional) seconds.
     *
     * This is computed dynamically based on the longest running individual attribute transition.
     */
    get remainingTime() {
        if (this.#config.manageTransitions === false) {
            if (this.#config.transitionEndTimeMs !== undefined) {
                const remaining = this.#config.transitionEndTimeMs - Time.nowMs();
                if (remaining < 0) {
                    return 0;
                }
                return this.#externalTimeOf(remaining);
            }

            return this.#externalTimeOf(this.#staticRemainingTime);
        }

        let remainingTime = 0;

        for (const name in this.#transitioning) {
            const attrState = this.#transitioning[name];
            const { targetValue } = this.#determineTargetValue(attrState);
            if (targetValue === undefined) {
                continue;
            }

            const attrRemainingTime = Math.abs((attrState.currentValue - targetValue) / attrState.changePerMs);
            if (attrRemainingTime > remainingTime) {
                remainingTime = attrRemainingTime;
            }
        }

        return this.#externalTimeOf(remainingTime);
    }

    #step() {
        // Skip steps when callbacks overrun the tick interval
        if (this.#outstandingTick) {
            return;
        }

        // Apply updates and/or handle end of transition
        const promise = (this.#outstandingTick = Promise.resolve(
            this.#endpoint.act("transition", agent => this.#stepWithAgent(agent)),
        )
            .catch(error => {
                logger.error(
                    this.#logPrefix,
                    "Aborting transition due to unhandled error during step management:",
                    error,
                );
                this.stop();
            })
            .finally(() => {
                if (this.#outstandingTick === promise) {
                    this.#outstandingTick = undefined;
                }
            }));
    }

    #stepError(name: Transitions.AttrOf<T>, message: string) {
        logger.warn(this.#logPrefix, "Not transitioning", Diagnostic.strong(name), "because", message);
        this.stop(name);
    }

    async #stepWithAgent(agent: Agent) {
        const now = Time.nowMs();

        const behavior = agent.get(this.#type) as InstanceType<T>;
        const state = behavior.state as Record<string, number>;

        // Obtain exclusive lock
        agent.context.transaction.addResourcesSync(behavior);
        await agent.context.transaction.begin();

        let finished: undefined | Set<{ name: string; onFinish?: () => MaybePromise<void> }>;

        // Compute updated values for all transitioning attributes
        for (const name in this.#transitioning) {
            const attrState = this.#transitioning[name];

            const { currentValue } = attrState;
            if (typeof currentValue !== "number") {
                this.#stepError(name, "value is not numeric");
                continue;
            }

            // Determine the unclamped next value
            const msSinceLastStep = now - attrState.prevStepAt;
            let nextValue = currentValue + attrState.changePerMs * msSinceLastStep;

            const { targetValue, targetDescription } = this.#determineTargetValue(attrState);

            // Clamp nextValue to valid range
            if (attrState.changePerMs < 0) {
                if (targetValue !== undefined && Math.round(nextValue) < targetValue) {
                    nextValue = targetValue;
                }
            } else if (attrState.changePerMs > 0) {
                if (targetValue !== undefined && Math.round(nextValue) > targetValue) {
                    nextValue = targetValue;
                }
            } else {
                // This shouldn't happen
                this.#stepError(name, "rate is zero");
                continue;
            }

            // If there is no target value and no min/max value it is a configuration error and we do not step as this
            // would be inifinite
            if (targetValue === undefined) {
                this.#stepError(name, `there is no target value or ${targetDescription}`);
                continue;
            }

            attrState.currentValue = nextValue;
            state[name] = Math.round(nextValue);

            // Invoke step callback, if any
            const callbackPromise = attrState.onStep?.call(behavior, nextValue);
            if (callbackPromise !== undefined) {
                await callbackPromise;
            }

            // Handle transition completion
            if (nextValue === targetValue) {
                logger.debug(this.#logPrefix, "Transition of", Diagnostic.strong(name), "finished");

                this.stop(name);

                if (finished === undefined) {
                    finished = new Set();
                }
                finished?.add({ name, onFinish: attrState.onFinish });

                continue;
            }

            attrState.prevStepAt = now;
        }

        await agent.context.transaction.commit();

        // Invoke per-attribute finish callbacks and, per the specification, force emit any Q attributes that have
        // finished transition
        if (finished) {
            for (const attr of finished) {
                const event = (behavior.events as unknown as Record<string, ClusterEvents.ChangedObservable<any>>)[
                    `${attr.name}$Changed`
                ];

                if (event?.isQuieter) {
                    event.quiet.emitNow();
                }

                const promise = this.#invokeFinishCallback(attr.onFinish?.bind(behavior));
                if (promise !== undefined) {
                    await promise;
                }
            }
        }

        if (Object.keys(this.#transitioning).length) {
            return;
        }

        // Transition is finished.  Emit remaining time of zero per specification
        this.#config.remainingTimeEvent?.emit(0, -1, agent.context);

        // Invoke any configured global finish callback
        const callbackPromise = this.#invokeFinishCallback(this.#config.onFinish);
        if (callbackPromise) {
            await callbackPromise;
        }
    }

    #determineTargetValue(state: AttrState<T>) {
        let { targetValue } = state;
        let targetDescription = "target value";

        // Determine the actual target value and clamp nextValue to valid range
        if (state.changePerMs < 0) {
            const minValue = state.min;

            if (targetValue === undefined || (minValue !== undefined && targetValue < minValue)) {
                targetDescription = "min value";
                targetValue = minValue;
            }
        } else if (state.changePerMs > 0) {
            const maxValue = state.max;

            if (targetValue === undefined || (maxValue !== undefined && targetValue > maxValue)) {
                targetDescription = "min value";
                targetValue = maxValue;
            }
        }

        return {
            targetDescription,
            targetValue,
        };
    }

    #invokeFinishCallback(onFinish?: () => MaybePromise<void>) {
        if (!onFinish) {
            return;
        }

        return MaybePromise.catch(
            () => onFinish?.apply(this),
            error => {
                logger.error(this.#logPrefix, "Unhandled error in onFinish callback:", error);
            },
        );
    }

    get #logPrefix() {
        return Diagnostic.squash(Diagnostic.strong(`${this.#endpoint}#${this.#type.name}`), `:`);
    }

    #externalTimeOf(ms: number) {
        return Math.round(ms / (this.#config.externalTimeUnitMs ?? Transitions.DEFAULT_EXTERNAL_TIME_UNIT_MS));
    }

    #internalTimeOf(externalUnits: number) {
        return externalUnits * (this.#config.externalTimeUnitMs ?? Transitions.DEFAULT_EXTERNAL_TIME_UNIT_MS);
    }
}

/**
 * Internal state related to actively transitioning attributes.
 */
interface AttrState<T extends Behavior.Type> extends Transitions.Transition<T> {
    currentValue: number;
    changePerMs: number;
    prevStepAt: number;
}

export namespace Transitions {
    export const DEFAULT_STEP_INTERVAL_MS = 100;
    export const DEFAULT_EXTERNAL_TIME_UNIT_MS = 100;

    /**
     * A valid transitionable attribute name for the specified type.
     */
    export type AttrOf<T extends Behavior.Type> = keyof {
        [K in keyof InstanceType<T>["state"]]: T[K] extends number | undefined | null ? true : never;
    };

    /**
     * Transition configuration.
     *
     * The {@link Transitions} accesses this configuration on-demand so values that change after initial construction
     * will affect ongoing behavior.
     */
    export interface Configuration {
        /**
         * If this is false we do not manage transitions and "remaining time" behaves like a normal static value.
         *
         * Default is true.
         */
        readonly manageTransitions?: boolean;

        /**
         * Milliseconds-per external time unit.  Defaults to 100 which is appropriate for CC & LVL "remaining time"
         * attribute that is defined as 10ths of a second.
         */
        readonly externalTimeUnitMs?: number;

        /**
         * The internal tick rate for transitions.
         *
         * This is the smallest time increment between value adjustments.
         *
         * Defaults to {@link DEFAULT_STEP_INTERVAL_MS}.
         */
        readonly stepIntervalMs?: number;

        /**
         * The end time for a transition if transition management is disabled.
         */
        readonly transitionEndTimeMs?: number;

        /**
         * An observable associated with the "remaining time" value.
         *
         * If present, the {@link Transitions} forces an emit under conditions defined in spec for the "RemainingTime"
         * attribute of Level Control & Color Control clusters.
         *
         * This should also support Valve Configuration & Control cluster's "RemainingDuration" attribute with
         * additional options to support small variations in logic.
         */
        readonly remainingTimeEvent?: ClusterEvents.ChangedObservable;

        /**
         * Invoked after transition completes.
         */
        readonly onFinish?: () => MaybePromise<void>;
    }

    /**
     * Configuration for transition of a specific attribute.
     */
    export interface Transition<T extends Behavior.Type> {
        /**
         * The attribute to transition.
         */
        readonly name: Transitions.AttrOf<T>;

        /**
         * The behavior instance requesting transition.
         */
        readonly owner: InstanceType<T>;

        /**
         * The amount to change the attribute per second.
         */
        readonly changePerS?: number | null;

        /**
         * The target value for the transition.  If undefined, transitions to the min/max value.  If no min or max is
         * defined and no target value is supplied the transition will not run.
         */
        readonly targetValue?: number;

        /**
         * A lower bound on the transition value.
         */
        readonly min?: number | undefined;

        /**
         * An upper bound on the transition value.
         */
        readonly max?: number | undefined;

        /**
         * Invoked every time the transitioning value changes before committing the mutating transaction.
         */
        onStep?: (this: InstanceType<T>, value: number) => MaybePromise<void>;

        /**
         * Invoked every when the transition completes successfully.
         */
        onFinish?: (this: InstanceType<T>) => MaybePromise<void>;
    }
}
