/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { ActionContext } from "#behavior/context/ActionContext.js";
import { Transitions } from "#behavior/Transitions.js";
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
     *
     * Throws a StatusResponse Error when null.
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

        // Wire in logic triggered by level changes
        this.events.currentLevel$Changed.on((value, oldValue) => {
            // Spec mandates emit when level changes to/from null
            if ((value === null || oldValue === null) && value !== oldValue) {
                this.events.currentLevel$Changed.quiet.emitNow();
            }
        });

        // Configure transition management
        this.initializeTransitions();

        // Configure lighting feature
        if (this.features.lighting) {
            this.initializeLighting();
        }

        // Configure on/off feature
        if (this.features.onOff && this.agent.has(OnOffServer)) {
            this.initializeOnOff();
        }
    }

    /**
     * Initialize transition management.
     *
     * We manage transitions using {@link Transitions} if
     * {@link LevelControlServerLogic.State#managedTransitionTimeHandling} is true.
     */
    protected initializeTransitions() {
        const { endpoint } = this;
        const readOnlyState = endpoint.stateOf(LevelControlServerLogic);
        this.internal.transition = new Transitions(this.endpoint, LevelControlServerLogic, {
            remainingTimeEvent: this.events.remainingTime$Changed,

            get manageTransitions() {
                return readOnlyState.managedTransitionTimeHandling;
            },

            get transitionEndTimeMs() {
                return readOnlyState.transitionEndTimeMs;
            },

            get stepIntervalMs() {
                return readOnlyState.transitionStepIntervalMs;
            },
        });
    }

    /**
     * Initialize lighting features.
     *
     * This only applies if the Level Control cluster has the "LT" feature enabled.
     */
    protected initializeLighting() {
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

    /**
     * Initialize On/Off cluster integration.
     *
     * This only applies if the Level Control cluster has the "OO" feature enabled.
     */
    protected initializeOnOff() {
        this.reactTo(this.agent.get(OnOffServer).events.onOff$Changed, this.handleOnOffChange);
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
     * if the level is within min/max range and sets the level accordingly.
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

        if (this.currentLevel === level) {
            return;
        }

        // If we should move to the new level as fast as possible ...
        if (!this.state.managedTransitionTimeHandling || transitionTimeValue === null || transitionTimeValue === 0) {
            this.setLevel(level, withOnOff, options);
            return;
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
            this.setLevel(level, withOnOff, options);
            return;
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
            // If null/0 transitionTime is requested we should move as fast as possible, so we set to min/max value
            // directly
            this.setLevel(targetLevel, withOnOff, options);
            return;
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
        this.internal.transition?.stop();
    }

    /**
     * Set level immediately, terminating any ongoing transition.
     */
    setLevel(
        newLevel: number,
        withOnOff: boolean,
        options: TypeFromPartialBitSchema<typeof LevelControl.Options> = {},
    ) {
        this.stopLogic();
        this.state.currentLevel = newLevel;
        this.couple(withOnOff, options);
    }

    /**
     * Instrument the current transaction to couple state values of other clusters with the level.
     *
     * This handles of on/off state in the On/Off cluster and color temperature in the Color Control cluster.
     *
     * The default impelmentation installs transaction participants to perform synchronization before the transaction
     * commits.
     */
    protected couple(
        withOnOff: boolean,
        options: TypeFromPartialBitSchema<typeof LevelControl.Options> = {},
        targetLevel?: number,
    ) {
        // Couple with On/Off state
        if (this.features.onOff && withOnOff && this.agent.has(OnOffServer)) {
            if (targetLevel === undefined) {
                targetLevel = this.currentLevel;
            }

            if (targetLevel === this.minLevel) {
                // When moving to off, coupling occurs at end of transaction
                this.context.transaction.addParticipants({
                    preCommit: () => {
                        if (this.currentLevel === this.minLevel) {
                            const onOff = this.agent.get(OnOffServer);
                            if (onOff.state.onOff) {
                                onOff.state.onOff = false;
                                return true;
                            }
                        }

                        return false;
                    },
                });
            } else {
                // When moving toward on, coupling has immediate affect (this is required by CHIP tests)
                const onOff = this.agent.get(OnOffServer);
                if (!onOff.state.onOff) {
                    onOff.state.onOff = true;

                    // Ensure we move to "on" level before initiating any transition
                    this.handleOnOffChange(true);
                }
            }
        }

        // Couple with ColorControl temp
        if (this.features.lighting && options.coupleColorTempToLevel && this.agent.has(ColorControlServer)) {
            this.context.transaction.addParticipants({
                preCommit: () => {
                    const colorControl = this.agent.get(ColorControlServer);
                    const prevTemp = colorControl.mireds;

                    colorControl.syncColorTemperatureWithLevel(this.currentLevel);

                    return colorControl.mireds !== prevTemp;
                },
            });
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
        changePerS: number | null | undefined,
        withOnOff: boolean,
        targetLevel?: number,
        options: TypeFromPartialBitSchema<typeof LevelControl.Options> = {},
    ) {
        this.couple(withOnOff, options, targetLevel);

        const { endpoint } = this;

        this.internal.transition?.start({
            name: "currentLevel",
            owner: this,
            changePerS,
            targetValue: targetLevel,

            onStep() {
                this.couple(withOnOff, options, targetLevel);
            },

            get min() {
                return endpoint.stateOf(LevelControlServerLogic).minLevel;
            },

            get max() {
                return endpoint.stateOf(LevelControlServerLogic).maxLevel;
            },
        });
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
            this.internal.transition = undefined;
        }
        await super[Symbol.asyncDispose]?.();
    }
}

export namespace LevelControlServerLogic {
    export class Internal {
        /**
         * Transition management.
         */
        transition?: Transitions<typeof LevelControlServerLogic>;
    }

    export class State extends LevelControlLogicBase.State {
        /**
         * The default implementation always set the target level immediately and so ignores all transition times
         * requested or configured.
         *
         * Set this to true to manage transition changes using {@link Transitions}.  You should only use this if your
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
            return {
                set remainingTime(value: number) {
                    const transition = endpoint.behaviors.internalsOf(LevelControlServerLogic).transition;
                    if (transition) {
                        transition.remainingTime = value;
                    }
                },

                get remainingTime() {
                    return endpoint.behaviors.internalsOf(LevelControlServerLogic).transition?.remainingTime ?? 0;
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
        couple(withOnOff: boolean, options: TypeFromPartialBitSchema<typeof LevelControl.Options>): MaybePromise<void>;
        setRemainingTime(remainingTime: number): void;
        handleOnOffChange(onOff: boolean): void;
    };
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
