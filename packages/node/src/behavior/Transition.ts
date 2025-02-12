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
 */
export class Transition<B extends Behavior> {
    #endpoint: Endpoint;
    #type: Behavior.Type;
    #timer?: Timer;
    #config: Transition.Configuration<B>;
    #transitioning = {} as Record<keyof B["state"], AttrState>;
    #outstandingTick?: MaybePromise<void>;
    #outstandingRemainingTimeUpdate?: MaybePromise<void>;

    constructor(owner: B, config: Transition.Configuration<B>) {
        this.#config = config;
        this.#endpoint = owner.endpoint;
        this.#type = owner.constructor as Behavior.Type;
    }

    /**
     * Initiate transition of an attribute.
     */
    start(name: keyof B["state"], changePerS: number, targetValue?: number) {
        this.stop(name);

        const remainingTimeBeforeStart = this.remainingTimeS;

        this.#transitioning[name] = {
            changePerS,
            targetValue,
            lastStepAtS: Time.nowMs() / 1000,
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
        }

        const { remainingTimeEvent } = this.#config;
        if (!remainingTimeEvent) {
            return;
        }

        if (this.#outstandingRemainingTimeUpdate || this.remainingTimeS - remainingTimeBeforeStart < 1) {
            return;
        }

        this.#outstandingRemainingTimeUpdate = this.#endpoint.act("remaining-time-update", agent => {
            remainingTimeEvent.emit(this.remainingTimeS, -1, agent.context);
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
     * Determine time remaining in transition.
     *
     * This is computed dynamically based on the longest running individual attribute transition.
     */
    get remainingTimeS() {
        let remainingTimeS = 0;
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

            const attrRemainingTime = Math.abs((currentValue - targetValue) / state.changePerS);
            if (attrRemainingTime > remainingTimeS) {
                remainingTimeS = attrRemainingTime;
            }
        }

        return remainingTimeS;
    }

    #step() {
        if (this.#outstandingTick) {
            return;
        }

        // Apply updates and/or handle end of transition
        const promise = Promise.resolve(this.#endpoint.act("transition", agent => this.#stepWithAgent(agent)))
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
            });
    }

    #stepError(name: keyof B["state"], message: string) {
        logger.warn(this.#logPrefix, "Not transitioning", Diagnostic.strong(name), "because", message);
        this.stop(name);
    }

    async #stepWithAgent(agent: Agent) {
        const nowS = Time.nowMs() / 1000;

        const updates = {} as Record<keyof B["state"], number>;
        const behavior = agent.get(this.#type);

        // Obtain exclusive lock
        agent.context.transaction.addResourcesSync(behavior);
        await agent.context.transaction.begin();

        const values = behavior.state as Record<string, undefined | null | number>;

        let finished: undefined | Set<string>;

        // Compute updated values for all transitioning attributes
        for (const name in this.#transitioning) {
            const currentValue = values[name];
            if (typeof currentValue !== "number") {
                this.#stepError(name, "current value is not numeric");
                continue;
            }

            const state = this.#transitioning[name];

            // Determine the unclamped next value
            const secondsSinceLastStep = nowS - state.lastStepAtS;
            let nextValue = state.changePerS * secondsSinceLastStep;

            const { targetValue, targetDescription } = this.#determineTargetValue(name, state);

            // Clamp nextValue to valid range
            if (state.changePerS < 0) {
                if (targetValue !== undefined && Math.round(nextValue) < targetValue) {
                    nextValue = targetValue;
                }
            } else if (state.changePerS > 0) {
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

            updates[name] = nextValue;

            // Handle transition completion
            if (nextValue === targetValue) {
                logger.debug(this.#logPrefix, "Transition of", Diagnostic.strong(name), "finished");

                this.stop(name);

                if (finished === undefined) {
                    finished = new Set();
                }
                finished?.add(name);
                continue;
            }

            state.lastStepAtS = nowS;
        }

        const state = behavior.state as Record<string, number>;

        for (const key in updates) {
            state[key] = updates[key];
        }

        await agent.context.transaction.commit();

        if (Object.keys(this.#transitioning).length) {
            return;
        }

        // Transition is finished.  Emit remaining time of zero per specification
        this.#config.remainingTimeEvent?.emit(0, -1, agent.context);

        // Per the specification, force emit any Q attributes that have finished transition
        for (const name in finished) {
            const event = (behavior.events as unknown as Record<string, ClusterEvents.ChangedObservable<any>>)[
                `${name}$Changed`
            ];

            if (event?.isQuieter) {
                event.quiet.emitNow();
            }
        }

        // Invoke any configured finish callback
        const callbackPromise = MaybePromise.catch(
            () => this.#config.onFinish?.apply(this),
            error => {
                logger.error(this.#logPrefix, "Unhandled error in finish callback:", error);
            },
        );

        if (callbackPromise) {
            await callbackPromise;
        }
    }

    #determineTargetValue(name: keyof B["state"], state: AttrState) {
        let { targetValue } = state;
        let targetDescription = "target value";

        // Determine the actual target value and clamp nextValue to valid range
        if (state.changePerS < 0) {
            const minValue = this.#config.attributes[name]?.min;

            if (targetValue === undefined || (minValue !== undefined && targetValue < minValue)) {
                targetDescription = "min value";
                targetValue = minValue;
            }
        } else if (state.changePerS > 0) {
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

    get #logPrefix() {
        return Diagnostic.squash(`Transition `, Diagnostic.strong(`${this.#endpoint}#${this.#type.name}`), `:`);
    }
}

/**
 * Internal state related to actively transitioning attributes.
 */
interface AttrState {
    changePerS: number;
    targetValue?: number;
    lastStepAtS: number;
}

export namespace Transition {
    export const DEFAULT_STEP_INTERVAL_MS = 100;

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
        manageTransitions?: boolean;

        /**
         * Additional configuration that applies to specific attributes.
         */
        attributes: Partial<Record<keyof T["state"], AttributeConfiguration>>;

        /**
         * The internal tick rate for transitions.
         *
         * This is the smallest time increment between value adjustments.
         *
         * Defaults to {@link DEFAULT_STEP_INTERVAL_MS}.
         */
        stepIntervalMs?: number;

        /**
         * An observable associated with the "remaining time" value.
         *
         * If present, the {@link Transition} forces an emit under conditions defined in spec for the "RemainingTime"
         * attribute of Level Control & Color Control clusters.
         *
         * This should also support Valve Configuration & Control cluster's "RemainingDuration" attribute with
         * additional options to support small variations in logic.
         */
        remainingTimeEvent?: ClusterEvents.ChangedObservable;

        /**
         * Invoked after transition completes.
         */
        onFinish?: () => MaybePromise<void>;
    }

    /**
     * Attribute-specific configuration.
     */
    export interface AttributeConfiguration {
        /**
         * A lower bounds on the transition value.
         */
        min?: number | undefined;

        /**
         * An upper bounds on the transition value.
         */
        max?: number | undefined;
    }
}
