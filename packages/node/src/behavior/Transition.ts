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
export class Transition<B extends Behavior> {
    #endpoint: Endpoint;
    #type: Behavior.Type;
    #timer?: Timer;
    #config: Transition.Configuration<B>;
    #transitioning = {} as Record<keyof B["state"], AttrState>;
    #outstandingTick?: MaybePromise<void>;
    #outstandingRemainingTimeUpdate?: MaybePromise<void>;
    #staticRemainingTime = 0;

    constructor(endpoint: Endpoint, type: Behavior.Type, config: Transition.Configuration<B>) {
        this.#config = config;
        this.#endpoint = endpoint;
        this.#type = type;
    }

    /**
     * Initiate transition of an attribute.
     */
    start(name: keyof B["state"], changePerS: number, targetValue?: number, onFinish?: () => MaybePromise<void>) {
        if (this.#config.manageTransitions === false) {
            return;
        }

        this.stop(name);

        const remainingTimeBeforeStart = this.remainingTime;

        this.#transitioning[name] = {
            changePerMs: changePerS / 1000,
            targetValue,
            lastStepAt: Time.nowMs(),
            onFinish,
        };

        logger.info(
            this.#logPrefix,
            "Transitioning",
            Diagnostic.strong(name),
            Diagnostic.dict({
                target: targetValue,
                rate: `${changePerS.toPrecision(3)}/s`,
            }),
        );

        if (this.#timer === undefined) {
            this.#timer = Time.getPeriodicTimer(
                `transition-${this.#endpoint}-${this.#type.name}`,
                this.#config.stepIntervalMs ?? Transition.DEFAULT_STEP_INTERVAL_MS,
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
    stop(name?: keyof B["state"]) {
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

        // We only get here if all transitions are stopped
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
        const values = this.#endpoint.stateOf(this.#type) as Record<string, undefined | null | number>;

        for (const name in this.#transitioning) {
            const currentValue = values[name];
            if (typeof currentValue !== "number") {
                continue;
            }

            const state = this.#transitioning[name];
            const { targetValue } = this.#determineTargetValue(name, state);
            if (targetValue === undefined) {
                continue;
            }

            const attrRemainingTime = Math.abs((currentValue - targetValue) / state.changePerMs);
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

    #stepError(name: keyof B["state"], message: string) {
        logger.warn(this.#logPrefix, "Not transitioning", Diagnostic.strong(name), "because", message);
        this.stop(name);
    }

    async #stepWithAgent(agent: Agent) {
        const now = Time.nowMs();

        const updates = {} as Record<keyof B["state"], number>;
        const behavior = agent.get(this.#type);

        // Obtain exclusive lock
        agent.context.transaction.addResourcesSync(behavior);
        await agent.context.transaction.begin();

        const values = behavior.state as Record<string, undefined | null | number>;

        let finished: undefined | Set<{ name: string; onFinish?: () => MaybePromise<void> }>;

        // Compute updated values for all transitioning attributes
        for (const name in this.#transitioning) {
            const currentValue = values[name];
            if (typeof currentValue !== "number") {
                this.#stepError(name, "current value is not numeric");
                continue;
            }

            const attrState = this.#transitioning[name];

            // Determine the unclamped next value
            const msSinceLastStep = now - attrState.lastStepAt;
            let nextValue = currentValue + attrState.changePerMs * msSinceLastStep;

            const { targetValue, targetDescription } = this.#determineTargetValue(name, attrState);

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

            updates[name] = Math.round(nextValue);

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

            attrState.lastStepAt = now;
        }

        Object.assign(values, updates);

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

                const promise = this.#invokeFinishCallback(attr);
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
        const callbackPromise = this.#invokeFinishCallback(this.#config);
        if (callbackPromise) {
            await callbackPromise;
        }
    }

    #determineTargetValue(name: keyof B["state"], state: AttrState) {
        let { targetValue } = state;
        let targetDescription = "target value";

        // Determine the actual target value and clamp nextValue to valid range
        if (state.changePerMs < 0) {
            const minValue = this.#config.attributes[name]?.min;

            if (targetValue === undefined || (minValue !== undefined && targetValue < minValue)) {
                targetDescription = "min value";
                targetValue = minValue;
            }
        } else if (state.changePerMs > 0) {
            const maxValue = this.#config.attributes[name]?.max;

            if (targetValue === undefined || (maxValue !== undefined && targetValue < maxValue)) {
                targetDescription = "min value";
                targetValue = maxValue;
            }
        }

        return {
            targetDescription,
            targetValue,
        };
    }

    #invokeFinishCallback({ onFinish }: { onFinish?: () => MaybePromise<void> }) {
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
        return Math.round(ms / (this.#config.externalTimeUnitMs ?? Transition.DEFAULT_EXTERNAL_TIME_UNIT_MS));
    }

    #internalTimeOf(externalUnits: number) {
        return externalUnits * (this.#config.externalTimeUnitMs ?? Transition.DEFAULT_EXTERNAL_TIME_UNIT_MS);
    }
}

/**
 * Internal state related to actively transitioning attributes.
 */
interface AttrState {
    changePerMs: number;
    targetValue?: number;
    lastStepAt: number;
    onFinish?: () => MaybePromise<void>;
}

export namespace Transition {
    export const DEFAULT_STEP_INTERVAL_MS = 100;
    export const DEFAULT_EXTERNAL_TIME_UNIT_MS = 100;

    /**
     * Transition configuration.
     *
     * The {@link Transition} accesses this configuration on-demand so values that change after initial construction
     * will affect ongoing behavior.
     */
    export interface Configuration<T extends Behavior> {
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
         * Additional configuration that applies to specific attributes.
         */
        readonly attributes: Partial<Record<keyof T["state"], AttributeConfiguration>>;

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
         * If present, the {@link Transition} forces an emit under conditions defined in spec for the "RemainingTime"
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
     * Attribute-specific configuration.
     */
    export interface AttributeConfiguration {
        /**
         * A lower bounds on the transition value.
         */
        readonly min?: number | undefined;

        /**
         * An upper bounds on the transition value.
         */
        readonly max?: number | undefined;
    }
}
