/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ActionContext } from "#behavior/context/ActionContext.js";
import { Transition } from "#behavior/Transition.js";
import { ColorControlServer } from "#behaviors/color-control";
import { GeneralDiagnosticsBehavior } from "#behaviors/general-diagnostics";
import { OnOffServer } from "#behaviors/on-off";
import { GeneralDiagnostics } from "#clusters/general-diagnostics";
import { LevelControl } from "#clusters/level-control";
import { Endpoint } from "#endpoint/index.js";
import { RootEndpoint } from "#endpoints/root";
import { AsyncObservable, cropValueRange, Logger, MaybePromise } from "#general";
import { Val } from "#protocol";
import { StatusCode, StatusResponseError, TypeFromPartialBitSchema } from "#types";
import { LevelControlBehavior } from "./LevelControlBehavior.js";

const logger = Logger.get("LevelControlServer");

const LevelControlLogicBase = LevelControlBehavior.with(LevelControl.Feature.OnOff, LevelControl.Feature.Lighting);

/**
 * This is the default server implementation of {@link LevelControlBehavior}.
 *
 * This implementation includes all features of {@link LevelControl.Cluster} and implements all mandatory commands. The
 * On-Off Feature is automatically turned on as defined by the matter specification.
 * You should use {@link LevelControlServer.with} to specialize the class for the features your implementation supports.
 *
 * This default implementation also handles the OnOff cluster dependency and the ColorControl dependency as defined by
 * the Matter specification automatically.
 *
 * This implementation ignores by default all transition times and sets the level immediately. Alternatively, you can
 * set the `managedTransitionTimeHandling` state attribute to true to have matter.js manage transition times by
 * changing the level value step-wise every second. This might be an intermediate solution if you develop
 * independently of defined hardware.
 *
 * If you develop for a specific hardware you should extend the {@link LevelControlServer} class and implement the
 * following methods to natively use device features to correctly support the transition times. For this the default
 * implementation uses special protected methods which are used by the real commands and are only responsible for the
 * actual value change logic. The benefit of this structure is that basic data validations and options checks are
 * already done, and you can focus on the actual hardware interaction:
 *
 * * {@link LevelControlServerLogic.moveToLevelLogic} Logic to move the value to a defined level with a transition time
 * * {@link LevelControlServerLogic.moveLogic} Logic to move the value up or down with a defined rate
 * * {@link LevelControlServerLogic.stepLogic} Logic to step the value up or down with a defined step size and transition
 * * {@link LevelControlServerLogic.stopLogic} Logic to stop any currently running transitions
 * * {@link LevelControlServerLogic.handleOnOffChange} Logic to handle dimming to onLevel when device got turned on by connected OnOff cluster
 *
 * If you extend this implementation you may use:
 *
 * * {@link LevelControlServerLogic.setLevel} to set the level attribute including automatic handling of the onoff dependency
 * * {@link Internal#transitionEndTime} to set the remaining time attribute when Lighting feature is enabled
 *
 * All overridable methods may be implemented sync or async by returning a Promise.
 */
export class LevelControlServerLogic extends LevelControlLogicBase {
    declare protected internal: LevelControlServerLogic.Internal;
    declare state: LevelControlServerLogic.State;
    declare events: LevelControlServerLogic.Events;

    /** Returns the minimum level, including feature specific fallback value handling. */
    get minLevel() {
        return this.state.minLevel ?? (this.features.lighting ? 1 : 0);
    }

    /** Returns the maximum level, including feature specific fallback value handling. */
    get maxLevel() {
        return this.state.maxLevel ?? 0xfe;
    }

    /**
     * The current level value as number.
     * Throws an StatusResponse Error when null!
     */
    get currentLevel(): number {
        if (this.state.currentLevel === null) {
            throw new StatusResponseError(
                "The currentLevel value is null, so we cannot operate on it.",
                StatusCode.Failure,
            );
        }
        return this.state.currentLevel;
    }

    override initialize() {
        // As a virtual attribute remaining time change only emits when we do so manually.  This works out well because
        // as a continuous value it should only emit under limited circumstances defined by spec
        //
        // We disable normal "quieter" suppression so it always emits when we emit manually
        this.events.remainingTime$Changed.quiet.config = {
            suppressionEnabled: false,
        };

        // Current level change reports use standard "quieter" rate of 1s. but spec mandates emit in a few other cases.
        // One of which is transition to/from null which we handle here
        this.events.currentLevel$Changed.on((value, oldValue) => {
            // Spec mandates emit when level changes to/from null
            if ((value === null || oldValue === null) && value !== oldValue) {
                this.events.currentLevel$Changed.quiet.emitNow();
            }
        });

        if (this.features.lighting) {
            if (this.state.currentLevel === 0) {
                logger.warn(
                    `The currentLevel value of ${this.state.currentLevel} is invalid according to Matter specification. The value must not be 0.`,
                );
            }
            if (this.minLevel !== 1) {
                logger.warn(
                    `The minLevel value of ${this.minLevel} is invalid according to Matter specification. The value should be 1.`,
                );
            }
            if (this.maxLevel !== 0xfe) {
                logger.warn(
                    `The maxLevel value of ${this.maxLevel} is invalid according to Matter specification. The value should be 254.`,
                );
            }

            if (this.#getBootReason() !== GeneralDiagnostics.BootReason.SoftwareUpdateCompleted) {
                const startUpLevelValue = this.state.startUpCurrentLevel ?? null;
                const currentLevelValue = this.state.currentLevel;
                let targetLevelValue: number | null;
                switch (startUpLevelValue) {
                    case 0:
                        targetLevelValue = this.minLevel;
                        break;
                    case null:
                        targetLevelValue = currentLevelValue;
                        break;
                    default:
                        targetLevelValue = startUpLevelValue;
                        break;
                }
                if (targetLevelValue !== currentLevelValue) {
                    this.state.currentLevel = asIntOrNull(targetLevelValue);
                }
            }
        }

        if (this.features.onOff && this.agent.has(OnOffServer)) {
            this.reactTo(this.agent.get(OnOffServer).events.onOff$Changed, this.handleOnOffChange);
        }
    }

    /**
     * Default command implementation.
     *
     * After checking input we the {@link moveToLevelLogic} method to set the level.  To replace the default logic,
     * override {@link moveToLevelLogic} which also implements {@link moveToLevelWithOnOff}.
     */
    override moveToLevel({ level, transitionTime, optionsMask, optionsOverride }: LevelControl.MoveToLevelRequest) {
        const effectiveOptions = this.#calculateEffectiveOptions(optionsMask, optionsOverride);
        if (!this.#optionsAllowExecution(effectiveOptions)) {
            return;
        }

        this.#assertLevelValue(level);

        return this.moveToLevelLogic(level, transitionTime, false, effectiveOptions);
    }

    /**
     * Default command implementation.
     *
     * To replace this logic, override {@link moveToLevelLogic} whicih also implements {@link moveToLevel}.
     */
    override moveToLevelWithOnOff({ level, transitionTime }: LevelControl.MoveToLevelRequest) {
        this.#assertLevelValue(level);

        return this.moveToLevelLogic(level, transitionTime, true);
    }

    /**
     * Default "MoveToLevel" logic.
     *
     * When a transition time is not null the implementation uses a step based logic to manage the move. It also checks
     * if the level is within min/max range and sets the level accordingly. We use {@link setLevel} to set the level and
     * handle the on/off state if the method is called via a "WithOnOff" command variant.
     *
     * @param level Level to set
     * @param transitionTime transition time
     * @param withOnOff true if the method is called by a "WithOnOff" command variant
     * @param options Options for the command
     */
    protected moveToLevelLogic(
        level: number,
        transitionTime: number | null,
        withOnOff: boolean,
        options: TypeFromPartialBitSchema<typeof LevelControl.Options> = {},
    ) {
        // Determine effective transition time
        const transitionTimeValue = transitionTime ?? this.state.onOffTransitionTime ?? null;

        // Adjust target level
        level = cropValueRange(level, this.minLevel, this.maxLevel);

        // If we should move to the new level as fast as possible ...
        if (
            !this.state.managedTransitionTimeHandling ||
            transitionTimeValue === null ||
            transitionTimeValue === 0 ||
            this.currentLevel === level
        ) {
            return this.setLevel(level, withOnOff, options);
        }

        // Else calculate a rate by second and manage the transition
        const effectiveRate = ((level - this.currentLevel) / transitionTimeValue) * 10;
        return this.#initiateTransition(effectiveRate, withOnOff, level, options);
    }

    /**
     * Default command implementation.
     *
     * After checking input we use {@link moveLogic} method to set the level.
     *
     * To replace default behavior, override {@link moveLogic} which also implements {@link moveWithOnOff}.
     */
    override move({ moveMode, rate, optionsMask, optionsOverride }: LevelControl.MoveRequest) {
        const effectiveOptions = this.#calculateEffectiveOptions(optionsMask, optionsOverride);
        if (!this.#optionsAllowExecution(effectiveOptions)) {
            return;
        }

        return this.moveLogic(moveMode, rate, false, effectiveOptions);
    }

    /**
     * Default command implementation.
     *
     * We use {@link moveLogic} method to set the level.
     *
     * To replace default behavior, override {@link moveLogic} which also implements {@link move}.
     */
    override moveWithOnOff({ moveMode, rate }: LevelControl.MoveRequest) {
        return this.moveLogic(moveMode, rate, true);
    }

    /**
     * Default implementation of the "Move" commands.
     *
     * When move rate is null and there is no default move rate, we move to to the min or max level directly. Otherwise
     * we apply step logic and increase or decrease by step size for every step.
     *
     * We use {@link setLevel} to set the level and handle the on/off state if invoked via the "WithOnOff" command
     * variant.
     *
     * @param moveMode Mode (Up/Down) of the move action
     * @param rate Rate of the move action, null if no rate is provided and the default should be used
     * @param withOnOff true if the method is called by a *WithOnOff command
     * @param options Options for the command
     */
    protected moveLogic(
        moveMode: LevelControl.MoveMode,
        rate: number | null,
        withOnOff: boolean,
        options: TypeFromPartialBitSchema<typeof LevelControl.Options> = {},
    ) {
        if (rate === 0) {
            throw new StatusResponseError(`Illegal move rate of 0`, StatusCode.InvalidCommand);
        }

        const effectiveRate = rate ?? this.state.defaultMoveRate ?? null;
        if (!this.state.managedTransitionTimeHandling || effectiveRate === null || effectiveRate === 0) {
            // If null rate is requested and also no default rate is set, we should move as fast as possible, so we set
            // to min/max value directly. If effectiveRate is 0 then defaultMoveRate is and we just ignore the command.
            const level =
                effectiveRate === 0
                    ? this.currentLevel
                    : moveMode === LevelControl.MoveMode.Up
                      ? this.maxLevel
                      : this.minLevel;
            this.stopLogic();
            return this.setLevel(level, withOnOff, options);
        }

        return this.#initiateTransition(
            effectiveRate * (moveMode === LevelControl.MoveMode.Up ? 1 : -1),
            withOnOff,
            undefined,
            options,
        );
    }

    /**
     * Default command implementation.
     *
     * After checking options we use {@link stepLogic} to set the level.
     *
     * To replace default beahavior, override {@link stepLogic} which also implements {@link stepWithOnOff}.
     */
    override step({ stepMode, stepSize, transitionTime, optionsMask, optionsOverride }: LevelControl.StepRequest) {
        const effectiveOptions = this.#calculateEffectiveOptions(optionsMask, optionsOverride);
        if (!this.#optionsAllowExecution(effectiveOptions)) {
            return;
        }
        return this.stepLogic(stepMode, stepSize, transitionTime, false, effectiveOptions);
    }

    /**
     * Default command implementation.
     *
     * To replace default beahavior, override {@link stepLogic} which also implements {@link step}.
     */
    override stepWithOnOff({ stepMode, stepSize, transitionTime }: LevelControl.StepRequest) {
        return this.stepLogic(stepMode, stepSize, transitionTime, true);
    }

    /**
     * Default step implementation.
     *
     * When transition time is null, we move immediately to the min or max level. Otherwise we increase or decrease the
     * level by the step size for each step.
     *
     * We use {@link setLevel} to set the level and handle the on/off state if invoked via the "WithOnOff" command
     * variant.
     *
     * @param stepMode Mode (Up/Down) of the step action
     * @param stepSize Size of the step action
     * @param transitionTime Time of the step action in 10th of a second
     * @param withOnOff true if the method is called by a *WithOnOff command
     * @param options Options for the command
     */
    protected stepLogic(
        stepMode: LevelControl.StepMode,
        stepSize: number,
        transitionTime: number | null,
        withOnOff: boolean,
        options: TypeFromPartialBitSchema<typeof LevelControl.Options> = {},
    ) {
        const targetLevel = cropValueRange(
            stepMode === LevelControl.StepMode.Up ? this.currentLevel + stepSize : this.currentLevel - stepSize,
            this.minLevel,
            this.maxLevel,
        );

        if (!this.state.managedTransitionTimeHandling || transitionTime === null || transitionTime === 0) {
            // If null/0 transitionTime is requested we should move as fast as possible, so we set to min/max value directly
            this.stopLogic();
            return this.setLevel(targetLevel, withOnOff, options);
        }

        const effectiveRate = (stepSize / transitionTime) * 10 * (stepMode === LevelControl.StepMode.Up ? 1 : -1);

        return this.#initiateTransition(effectiveRate, withOnOff, targetLevel, options);
    }

    override stop({ optionsMask, optionsOverride }: LevelControl.StopRequest) {
        const effectiveOptions = this.#calculateEffectiveOptions(optionsMask, optionsOverride);
        if (!this.#optionsAllowExecution(effectiveOptions)) {
            return;
        }

        return this.stopLogic(effectiveOptions);
    }

    override stopWithOnOff(request: LevelControl.StopRequest) {
        return this.stop(request);
    }

    /**
     * Default stop logic. This aborts any level transition currently underway and sets the remaining time to 0.
     */
    protected stopLogic(_options: TypeFromPartialBitSchema<typeof LevelControl.Options> = {}): MaybePromise<void> {
        this.#transition.stop();
    }

    /**
     * This default logic sets the level including the handing of the on/off state if invoked via a "WithOnOff" command
     * variant.
     *
     * We check if the level is at minLevel; if the device is on we turn off the device.  If the level is above the
     * minLevel and the device is off we turn on the device.
     *
     * @param level Level which is set by the command
     * @param withOnOff true if the method is called by a *WithOnOff command
     * @param options Options for the command
     */
    protected setLevel(
        level: number,
        withOnOff: boolean,
        options: TypeFromPartialBitSchema<typeof LevelControl.Options> = {},
    ): MaybePromise<void> {
        const onOffServer =
            this.features.onOff && withOnOff && this.agent.has(OnOffServer) ? this.agent.get(OnOffServer) : undefined;

        if (onOffServer !== undefined && level === this.minLevel && onOffServer.state.onOff) {
            const offPromise = onOffServer.off();
            return MaybePromise.then(offPromise, () => {
                this.state.currentLevel = asIntOrNull(level);
            });
        }

        this.state.currentLevel = asIntOrNull(level);

        let colorSyncResult;
        // Sync color temperature with level if the feature is enabled and the option is set
        if (this.features.lighting && options.coupleColorTempToLevel && this.agent.has(ColorControlServer)) {
            colorSyncResult = this.agent.get(ColorControlServer).syncColorTemperatureWithLevel(level);
        }

        if (onOffServer !== undefined && level > this.minLevel && !onOffServer.state.onOff) {
            return MaybePromise.then(colorSyncResult, () => onOffServer.on());
        } else {
            return colorSyncResult;
        }
    }

    #calculateEffectiveOptions(
        optionsMask: TypeFromPartialBitSchema<typeof LevelControl.Options>,
        optionsOverride: TypeFromPartialBitSchema<typeof LevelControl.Options>,
    ): TypeFromPartialBitSchema<typeof LevelControl.Options> {
        const options = this.state.options ?? {};
        return {
            executeIfOff: optionsMask.executeIfOff ? optionsOverride.executeIfOff : options.executeIfOff,
            coupleColorTempToLevel: this.features.lighting
                ? optionsMask.coupleColorTempToLevel
                    ? optionsOverride.coupleColorTempToLevel
                    : options.coupleColorTempToLevel
                : false,
        };
    }

    #optionsAllowExecution(options: TypeFromPartialBitSchema<typeof LevelControl.Options>) {
        return (
            options.executeIfOff ||
            !this.features.onOff ||
            !this.agent.has(OnOffServer) ||
            this.agent.get(OnOffServer).state.onOff
        );
    }

    #assertLevelValue(level: number) {
        if (level < this.minLevel) {
            throw new StatusResponseError(
                `The level value of ${level} is invalid. It must be greater or equal to ${this.minLevel}.`,
                StatusCode.ConstraintError,
            );
        }
        if (level > this.maxLevel) {
            throw new StatusResponseError(
                `The level value of ${level} is invalid. It must be less or equal to ${this.maxLevel}.`,
                StatusCode.ConstraintError,
            );
        }
    }

    /**
     * Implement mandatory interaction with the OnOff cluster on the same endpoint when "OnOff" feature is enabled
     *
     * By default we set the current level to the onLevel value when the device is turned on.
     *
     * Other fading up/down logic required by the {@link MatterSpecification.v12.Cluster} §1.6.4.1.1 needs to be
     * implemented in a specialized implementation if needed.
     *
     * @param onOff The new onOff state
     */
    protected handleOnOffChange(onOff: boolean) {
        if (!onOff || this.state.onLevel === null) {
            return;
        }
        this.state.currentLevel = this.state.onLevel;
    }

    #initiateTransition(
        changePerSecond: number,
        withOnOff: boolean,
        targetLevel?: number,
        options: TypeFromPartialBitSchema<typeof LevelControl.Options> = {},
    ) {
        this.#transition.start(
            "currentLevel",
            changePerSecond,
            targetLevel,
            withOnOff ? this.asyncCallback(resetLevel) : undefined,
        );

        if (withOnOff) {
            return resetLevel.apply(this);
        }

        // We use setLevel at the beginning and end of transitions to implement on/off behavior
        function resetLevel(this: LevelControlServerLogic) {
            this.setLevel(this.currentLevel, withOnOff, options);
        }
    }

    #getBootReason() {
        const rootEndpoint = this.endpoint.ownerOfType(RootEndpoint);
        if (rootEndpoint !== undefined && rootEndpoint.behaviors.has(GeneralDiagnosticsBehavior)) {
            return rootEndpoint.stateOf(GeneralDiagnosticsBehavior).bootReason;
        }
    }

    override async [Symbol.asyncDispose]() {
        if (this.internal.transition) {
            await this.internal.transition.close();
        }
        await super[Symbol.asyncDispose]?.();
    }

    get #transition() {
        return LevelControlServerLogic.transitionFor(this.endpoint);
    }
}

export namespace LevelControlServerLogic {
    export class Internal {
        /**
         * Transition management.
         */
        transition?: Transition<LevelControlServerLogic>;

        /**
         * Notification of successful transition completion.
         */
        onFinish?: () => MaybePromise<void>;
    }

    export class State extends LevelControlLogicBase.State {
        /**
         * The default implementation always set the target level immediately and so ignores all transition times
         * requested or configured.
         *
         * Set this to true to manage transition changes using {@link Transition}.  You should only use this if your
         * hardware doesn't support transition management on its own.
         */
        managedTransitionTimeHandling = false;

        /**
         * If transition management is disabled you may specify this as the "end time" for transitions.  The remaining
         * time attribute will then report correctly.
         */
        transitionEndTimeMs = undefined;

        /**
         * When managing transitions, this is the interval at which steps occur in ms.
         */
        transitionStepIntervalMs = 100;

        [Val.properties](endpoint: Endpoint) {
            const transition = transitionFor(endpoint);

            return {
                set remainingTime(value: number) {
                    transition.remainingTime = value;
                },

                get remainingTime() {
                    return transition.remainingTime;
                },
            };
        }
    }

    export class Events extends LevelControlLogicBase.Events {
        transitionEndTime$Changed = AsyncObservable<[value: number, oldValue: number, context: ActionContext]>();
    }

    export declare const ExtensionInterface: {
        moveToLevelLogic(
            level: number,
            transitionTime: number | null,
            withOnOff: boolean,
            options: TypeFromPartialBitSchema<typeof LevelControl.Options>,
        ): MaybePromise<void>;
        moveLogic(
            moveMode: LevelControl.MoveMode,
            rate: number | null,
            withOnOff: boolean,
            options: TypeFromPartialBitSchema<typeof LevelControl.Options>,
        ): MaybePromise<void>;
        stepLogic(
            stepMode: LevelControl.StepMode,
            stepSize: number,
            transitionTime: number | null,
            withOnOff: boolean,
            options: TypeFromPartialBitSchema<typeof LevelControl.Options>,
        ): MaybePromise<void>;
        stopLogic(options: TypeFromPartialBitSchema<typeof LevelControl.Options>): MaybePromise<void>;
        setLevel(
            level: number,
            withOnOff: boolean,
            options: TypeFromPartialBitSchema<typeof LevelControl.Options>,
        ): MaybePromise<void>;
        setRemainingTime(remainingTime: number): void;
        handleOnOffChange(onOff: boolean): void;
    };

    /**
     * Access transition management for the level control behavior of a specific endpoint.
     */
    export function transitionFor(endpoint: Endpoint) {
        const internal = endpoint.behaviors.internalsOf(LevelControlServerLogic);
        const state = endpoint.stateOf(LevelControlServerLogic);

        if (internal.transition === undefined) {
            internal.transition = new Transition(endpoint, LevelControlServerLogic, {
                remainingTimeEvent: endpoint.eventsOf(LevelControlServerLogic).remainingTime$Changed,

                get manageTransitions() {
                    return state.managedTransitionTimeHandling;
                },

                get transitionEndTimeMs() {
                    return state.transitionEndTimeMs;
                },

                get stepIntervalMs() {
                    return state.transitionStepIntervalMs;
                },

                attributes: {
                    currentLevel: {
                        get min() {
                            return state.minLevel;
                        },
                        get max() {
                            return state.maxLevel;
                        },
                    },
                },

                onFinish() {
                    return internal.onFinish?.();
                },
            });
        }

        return internal.transition;
    }
}

// We had turned on some more features to provide the default implementation, but export the cluster with default
// Features again.
export class LevelControlServer extends LevelControlServerLogic.with(LevelControl.Feature.OnOff) {}

function asIntOrNull(value: number | null) {
    if (value === null) {
        return null;
    }

    return Math.round(value);
}
