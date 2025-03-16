/**
 * @license
 * Copyright 2022-2025 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Agent } from "#endpoint/Agent.js";
import { Endpoint } from "#endpoint/Endpoint.js";
import { Diagnostic, Logger, MaybePromise, ObserverGroup, Time, Timer } from "#general";
import { Behavior } from "./Behavior.js";
import { ClusterEvents } from "./cluster/ClusterEvents.js";
import { BehaviorBacking } from "./internal/BehaviorBacking.js";

const logger = Logger.get("Transition");

/**
 * Attribute transition management.
 *
 * This utility supports updates of one or more attributes of a single behavior when the change occurs gradually over
 * time.
 *
 * Implementation notes:
 *
 * - You may extended this class to replace default timer-driven transition management
 * - Managed transitions occur in small time increments, currently 100 ms. by default
 * - To improve consistency, values such as end time, min/max, etc. update every iteration based on current state
 * - Internal time keeping uses ms but published values are scaled based on configuration
 * - Internal values are floats but rounded to integers when published
 * - Supports correct semantics for LVL & CC "remaining time", will need additional options for PCC "remaining duration"
 */
export class Transitions<B extends Behavior> {
    #endpoint: Endpoint;
    #timer?: Timer;
    #config: Transitions.Configuration<B>;
    #outstandingTick?: MaybePromise<void>;
    #outstandingRemainingTimeUpdate?: MaybePromise<void>;
    #staticRemainingTime = 0;
    #propertyStates = {} as Record<string, Transitions.PropertyState<B>>;
    #observers?: ObserverGroup;
    #instrumentedProperties?: Set<string>;

    constructor(endpoint: Endpoint, config: Transitions.Configuration<B>) {
        this.#config = config;
        this.#endpoint = endpoint;
    }

    /**
     * Iterate over all active transitions.
     */
    [Symbol.iterator]() {
        return Object.values(this.#propertyStates)[Symbol.iterator]();
    }

    /**
     * Get iteration state for a specific property.
     */
    stateOf(name: Transitions.PropertyOf<B>): Transitions.PropertyState<B> | undefined {
        return this.#propertyStates[name];
    }

    /**
     * Initiate transition of an attribute.
     */
    start(transition: Transitions.Transition<B>) {
        const { name, owner, changePerS } = transition;
        let { targetValue } = transition;

        this.stop(name);

        const currentValue = (owner.state as Record<string, number>)[name];

        if (currentValue === targetValue) {
            return;
        }

        // Handle immediate transition
        if (!this.#config.manageTransitions || !changePerS) {
            if (targetValue === undefined || targetValue === null) {
                return;
            }

            const { min, max } = this.#config.properties[name] ?? {};
            if (min !== undefined && targetValue < min) {
                targetValue = min;
            } else if (max !== undefined && targetValue > max) {
                targetValue = max;
            }

            logger.info(this.#logPrefix, "Set", Diagnostic.strong(name), "to", Diagnostic.strong(targetValue));

            this.transitionImmediately(owner, name, targetValue);
            return;
        }

        const remainingTimeBeforeStart = this.remainingTime;

        this.#instrumentProperty(name);

        const attr: Transitions.PropertyState<B> = {
            name,
            configuration: transition,
            currentValue,
            changePerMs: changePerS / 1000,
            prevStepAt: Time.nowMs() - (this.#config.stepIntervalMs ?? Transitions.DEFAULT_STEP_INTERVAL_MS),
        };

        this.#propertyStates[name] = attr;

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

        this.transitionGradually(attr);

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
     * Immediately change to a target value.
     *
     * The default implementation updates the local state value.
     */
    protected transitionImmediately(owner: B, name: Transitions.PropertyOf<B>, targetValue: number) {
        (owner.state as Record<string, number>)[name] = targetValue;
    }

    /**
     * Initiate gradual transition to a target value.
     *
     * The default implementation starts a timer to drive transitions over time.
     */
    protected transitionGradually(_attr: Transitions.PropertyState<B>) {
        if (this.#timer === undefined) {
            this.#timer = Time.getPeriodicTimer(
                `transition-${this.#endpoint}-${this.#config.type.name}`,
                this.#config.stepIntervalMs ?? Transitions.DEFAULT_STEP_INTERVAL_MS,
                this.#step.bind(this),
            );

            this.#timer.start();

            // Perform first step immediately
            this.#step();
        }
    }

    /**
     * Stop transition of one or all attributes.
     */
    stop(name?: Transitions.PropertyOf<B>) {
        if (name === undefined) {
            this.#propertyStates = {} as Record<any, any>;
        } else {
            if (!(name in this.#propertyStates)) {
                return;
            }

            delete this.#propertyStates[name];

            if (Object.keys(this.#propertyStates).length) {
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
        if (this.#observers) {
            this.#observers.close();
            this.#observers = undefined;
        }
        this.#instrumentedProperties = undefined;
    }

    /**
     * Terminate a transition that has completed successfully.
     */
    protected finish(name: Transitions.PropertyOf<B>) {
        const state = this.#propertyStates[name];
        if (state === undefined) {
            return;
        }

        this.stop(name);

        // TODO - move logic here
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

        for (const name in this.#propertyStates) {
            const attrState = this.#propertyStates[name];
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

    #stepError(name: string, message: string) {
        logger.warn(this.#logPrefix, "Not transitioning", Diagnostic.strong(name), "because", message);
        this.stop(name as Transitions.PropertyOf<B>);
    }

    async #stepWithAgent(agent: Agent) {
        const now = Time.nowMs();

        const behavior = agent.get(this.#config.type) as B;
        const state = behavior.state as Record<string, number>;

        // Obtain exclusive lock
        agent.context.transaction.addResourcesSync(behavior);
        await agent.context.transaction.begin();

        let finished: undefined | Set<{ name: string; onFinish?: () => MaybePromise<void> }>;

        // Compute updated values for all transitioning attributes
        for (const name in this.#propertyStates) {
            const attrState = this.#propertyStates[name];

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
            const callbackPromise = attrState.configuration.onStep?.call(behavior, nextValue);
            if (callbackPromise !== undefined) {
                await callbackPromise;
            }

            // Handle transition completion
            if (nextValue === targetValue) {
                logger.debug(this.#logPrefix, "Transition of", Diagnostic.strong(name), "finished");

                this.stop(name as Transitions.PropertyOf<B>);

                if (finished === undefined) {
                    finished = new Set();
                }
                finished?.add({ name, onFinish: attrState.configuration.onFinish });

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

        if (Object.keys(this.#propertyStates).length) {
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

    #determineTargetValue(state: Transitions.PropertyState<B>) {
        let { name, targetValue } = state.configuration;
        let targetDescription = "target value";

        // Determine the actual target value and clamp nextValue to valid range
        if (state.changePerMs < 0) {
            const minValue = this.#config.properties[name]?.min;

            if (targetValue === undefined || (minValue !== undefined && targetValue < minValue)) {
                targetDescription = "min value";
                targetValue = minValue;
            }
        } else if (state.changePerMs > 0) {
            const maxValue = this.#config.properties[name]?.max;

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
        return Diagnostic.squash(Diagnostic.strong(`${this.#endpoint}#${this.#config.type.name}`), `:`);
    }

    #externalTimeOf(ms: number) {
        return Math.round(ms / (this.#config.externalTimeUnitMs ?? Transitions.DEFAULT_EXTERNAL_TIME_UNIT_MS));
    }

    #internalTimeOf(externalUnits: number) {
        return externalUnits * (this.#config.externalTimeUnitMs ?? Transitions.DEFAULT_EXTERNAL_TIME_UNIT_MS);
    }

    /**
     * We add event handlers for any property we transition.  If the property reaches the target value we end the
     * transition.
     *
     * This allows us to detect "end of transition" independent of the means of transition.
     */
    #instrumentProperty(name: Transitions.PropertyOf<B>) {
        if (this.#instrumentedProperties === undefined) {
            this.#instrumentedProperties = new Set();
        }

        if (this.#instrumentedProperties.has(name)) {
            return;
        }

        this.#instrumentedProperties.add(name);

        const event = (
            this.#endpoint.eventsOf(this.#config.type) as unknown as Record<
                string,
                ClusterEvents.ChangedObservable<any> | undefined
            >
        )[`${name}$Changed`];
        if (!event) {
            return;
        }

        if (!this.#observers) {
            this.#observers = new ObserverGroup();
        }

        this.#observers.on(event, newValue => {
            const state = this.#propertyStates[name];
            if (state === undefined) {
                return;
            }

            const targetValue = this.#determineTargetValue(state);

            if (newValue === targetValue) {
                this.finish(name);
            }
        });
    }
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
    export interface Configuration<B extends Behavior> {
        /**
         * The behavior type this configuration applies to.
         */
        readonly type: Behavior.Type & { new (agent: Agent, backing: BehaviorBacking): B };

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

        /**
         * The state properties that support transition.
         */
        readonly properties: Partial<Record<PropertyOf<B>, PropertyConfiguration>>;
    }

    /**
     * Configures a state property to support transitions.  This is typically an attribute but we support transition of
     * any numeric property.
     */
    export interface PropertyConfiguration {
        /**
         * A lower bound on the transition value.
         */
        readonly min?: number | undefined;

        /**
         * An upper bound on the transition value.
         */
        readonly max?: number | undefined;
    }

    export type PropertyOf<B extends Behavior> = keyof {
        [N in string & keyof B["state"]]: B[N] extends number | null | undefined ? true : never;
    };

    /**
     * Configuration for transition of a specific attribute.
     */
    export interface Transition<B extends Behavior> {
        /**
         * The attribute to transition.
         */
        readonly name: PropertyOf<B>;

        /**
         * The behavior instance requesting transition.
         */
        readonly owner: B;

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
         * Invoked every time the transitioning value changes before committing the mutating transaction.
         */
        onStep?: (this: B, value: number) => MaybePromise<void>;

        /**
         * Invoked every when the transition completes successfully.
         */
        onFinish?: (this: B) => MaybePromise<void>;
    }

    /**
     * Internal state related to actively transitioning attributes.
     */
    export interface PropertyState<B extends Behavior> {
        /**
         * The property name.
         */
        name: string;

        /**
         * Configuration for any active transition.
         */
        configuration: Transition<B>;

        /**
         * The current value for the transition.
         *
         * We track separately from canonical value because we transition using floats but values are typically integers
         * and this allows us to avoid rounding errors.
         */
        currentValue: number;

        /**
         * The change in value per millisecond.
         */
        changePerMs: number;

        /**
         * The time of the last step.
         */
        prevStepAt: number;
    }
}
