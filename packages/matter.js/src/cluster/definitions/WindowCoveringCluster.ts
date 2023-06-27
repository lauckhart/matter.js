/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, FixedAttribute, AccessLevel, OptionalFixedAttribute, OptionalAttribute, Attribute, WritableAttribute, Command, TlvNoResponse, OptionalCommand } from "../../cluster/Cluster.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { TlvEnum, TlvUInt16, TlvBitmap, TlvUInt8 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";

/**
 * The Type attribute identifies the type of window covering being controlled
 * by this endpoint and SHALL be set to one of the non-reserved values in the
 * table below.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.1
 */
export const enum Type {
    Rollershade = 0,
    Rollershade2Motor = 1,
    RollershadeExterior = 2,
    RollershadeExterior2Motor = 3,
    Draperycurtain = 4,
    Awning = 5,
    Shutter = 6,
    TiltBlindTiltOnly = 7,
    TiltBlindLiftTilt = 8,
    ProjectorScreen = 9,
    Unknown = 255
};

/**
 * The ConfigStatus attribute makes configuration and status information
 * available. To change settings, devices SHALL write to the Mode attribute of
 * the Window Covering Settings Attribute Set. The behavior causing the setting
 * or clearing of each bit is vendor specific. See table below for details on
 * each bit.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.8
 */
export const ConfigStatus = TlvBitmap(TlvUInt8, {
    Operational: BitFlag(1),
    OnlineReserved: BitFlag(2),
    LiftMovementReversed: BitFlag(4),
    LiftPositionAware: BitFlag(8),
    TiltPositionAware: BitFlag(16),
    LiftEncoderControlled: BitFlag(32),
    TiltEncoderControlled: BitFlag(64)
});

/**
 * The OperationalStatus attribute keeps track of currently ongoing operations
 * and applies to all type of devices. See below for details about the meaning
 * of individual bits.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.15
 */
export const OperationalStatus = TlvBitmap(TlvUInt8, {
    Global: BitFlag(3),
    Lift: BitFlag(12),
    Tilt: BitFlag(48)
});

/**
 * The EndProductType attribute identifies the product type in complement of
 * the main category indicated by the Type attribute. The window covering SHALL
 * set this value to one of the values in the table below.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.16
 */
export const enum EndProductType {
    RollerShade = 0,
    RomanShade = 1,
    BalloonShade = 2,
    WovenWood = 3,
    PleatedShade = 4,
    CellularShade = 5,
    LayeredShade = 6,
    LayeredShade2D = 7,
    SheerShade = 8,
    TiltOnlyInteriorBlind = 9,
    InteriorBlind = 10,
    VerticalBlindStripCurtain = 11,
    InteriorVenetianBlind = 12,
    ExteriorVenetianBlind = 13,
    LateralLeftCurtain = 14,
    LateralRightCurtain = 15,
    CentralCurtain = 16,
    RollerShutter = 17,
    ExteriorVerticalScreen = 18,
    AwningTerracePatio = 19,
    AwningVerticalScreen = 20,
    TiltOnlyPergola = 21,
    SwingingShutter = 22,
    SlidingShutter = 23,
    Unknown = 255
};

/**
 * The Mode attribute allows configuration of the Window Covering, such as:
 * reversing the motor direction, placing the Window Covering into calibration
 * mode, placing the motor into maintenance mode, disabling the network, and
 * disabling status LEDs. See below for details.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.21
 */
export const Mode = TlvBitmap(TlvUInt8, {
    MotorDirectionReversed: BitFlag(1),
    CalibrationMode: BitFlag(2),
    MaintenanceMode: BitFlag(4),
    LedFeedback: BitFlag(8)
});

/**
 * The SafetyStatus attribute reflects the state of the safety sensors and the
 * common issues preventing movements. By default for nominal operation all
 * flags are cleared (0). A device might support none, one or several bit flags
 * from this attribute (all optional). See below for details about the meaning
 * of individual bits.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.22
 */
export const SafetyStatus = TlvBitmap(TlvUInt16, {
    /**
     * Tampering detected on sensors or any other safety equipment. Ex: a
     * device has been forcedly moved without its actuator(s).
     */
    TamperDetection: BitFlag(1),

    /**
     * Communication failure to sensors or other safety equipment.
     */
    FailedCommunication: BitFlag(2),

    /**
     * Device has failed to reach the desired position. e.g. with Position
     * Aware device, time expired before TargetPosition is reached.
     */
    PositionFailure: BitFlag(3),

    /**
     * Motor(s) and/or electric circuit thermal protection activated.
     */
    ThermalProtection: BitFlag(16),

    /**
     * An obstacle is preventing actuator movement.
     */
    ObstacleDetected: BitFlag(32),

    /**
     * Device has power related issue or limitation e.g. device is running w/
     * the help of a backup battery or power might not be fully available at
     * the moment.
     */
    Power: BitFlag(64),

    /**
     * Local safety sensor (not a direct obstacle) is preventing movements
     * (e.g. Safety EU Standard EN60335).
     */
    StopInput: BitFlag(128),

    /**
     * Mechanical problem related to the motor(s) detected.
     */
    MotorJammed: BitFlag(256),

    /**
     * PCB, fuse and other electrics problems.
     */
    HardwareFailure: BitFlag(512),

    /**
     * Actuator is manually operated and is preventing actuator movement (e.g.
     * actuator is disengaged/decoupled).
     */
    ManualOperation: BitFlag(1024),

    /**
     * Protection is activated.
     */
    Protection: BitFlag(2048)
});

/**
 * The GoToLiftValue command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.4
 */
export const GoToLiftValueRequest = TlvObject({ LiftValue: TlvField(0, TlvUInt16) });

/**
 * The GoToLiftPercentage command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.5
 */
export const GoToLiftPercentageRequest = TlvObject({
    LiftPercentageValue: TlvOptionalField(0, TlvUInt8),
    LiftPercent100ThsValue: TlvOptionalField(1, TlvUInt16)
});

/**
 * The GoToTiltValue command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.6
 */
export const GoToTiltValueRequest = TlvObject({ TiltValue: TlvField(0, TlvUInt16) });

/**
 * The GoToTiltPercentage command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.7
 */
export const GoToTiltPercentageRequest = TlvObject({
    TiltPercentageValue: TlvOptionalField(0, TlvUInt8),
    TiltPercent100ThsValue: TlvOptionalField(1, TlvUInt16)
});

export namespace WindowCoveringCluster {
    /**
     * Window Covering
     *
     * Provides an interface for controlling and adjusting automatic window
     * coverings.
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `WindowCovering.with()` and a list of
     * supported features.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3
     */
    export const Complete = Cluster({
        id: 0x102,
        name: "WindowCovering",
        revision: 1,

        features: {
            LF: BitFlag(0),
            TL: BitFlag(1),
            PALF: BitFlag(2),
            ABS: BitFlag(3),
            PATL: BitFlag(4)
        },

        attributes: {
            /**
             * The Type attribute identifies the type of window covering being
             * controlled by this endpoint and SHALL be set to one of the
             * non-reserved values in the table below.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.1
             */
            type: FixedAttribute(0, TlvEnum<Type>(), { readAcl: AccessLevel.View }),

            /**
             * The PhysicalClosedLimitLift attribute identifies the maximum
             * possible encoder position possible (in centimeters) to position
             * the height of the window covering Lift.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.2
             */
            physicalClosedLimitLift: OptionalFixedAttribute(1, TlvUInt16, { readAcl: AccessLevel.View }),

            /**
             * The PhysicalClosedLimitTilt attribute identifies the maximum
             * possible encoder position possible (tenth of a degrees) to
             * position the angle of the window covering Tilt.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.3
             */
            physicalClosedLimitTilt: OptionalFixedAttribute(2, TlvUInt16, { readAcl: AccessLevel.View }),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5
             */
            currentPositionLift1: OptionalAttribute(3, TlvNullable(TlvUInt16), { persistent: true, default: null, readAcl: AccessLevel.View }),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5
             */
            currentPositionTilt1: OptionalAttribute(4, TlvNullable(TlvUInt16), { persistent: true, default: null, readAcl: AccessLevel.View }),

            /**
             * The NumberOfActuationsLift attribute identifies the total number
             * of lift/slide actuations applied to the Window Covering since
             * the device was installed.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.6
             */
            numberOfActuationsLift: OptionalAttribute(5, TlvUInt16, { persistent: true, readAcl: AccessLevel.View }),

            /**
             * The NumberOfActuationsTilt attribute identifies the total number
             * of tilt actuations applied to the Window Covering since the
             * device was installed.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.7
             */
            numberOfActuationsTilt: OptionalAttribute(6, TlvUInt16, { persistent: true, readAcl: AccessLevel.View }),

            /**
             * The ConfigStatus attribute makes configuration and status
             * information available. To change settings, devices SHALL write
             * to the Mode attribute of the Window Covering Settings Attribute
             * Set. The behavior causing the setting or clearing of each bit is
             * vendor specific. See table below for details on each bit.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.8
             */
            configStatus: Attribute(7, ConfigStatus, { persistent: true, default: 3, readAcl: AccessLevel.View }),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5
             */
            currentPositionLiftPercentage1: OptionalAttribute(8, TlvNullable(TlvUInt8), { scene: true, persistent: true, default: null, readAcl: AccessLevel.View }),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5
             */
            currentPositionTiltPercentage1: OptionalAttribute(9, TlvNullable(TlvUInt8), { scene: true, persistent: true, default: null, readAcl: AccessLevel.View }),

            /**
             * The OperationalStatus attribute keeps track of currently ongoing
             * operations and applies to all type of devices. See below for
             * details about the meaning of individual bits.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.15
             */
            operationalStatus: Attribute(10, OperationalStatus, { readAcl: AccessLevel.View }),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5
             */
            targetPositionLiftPercent100Ths2: OptionalAttribute(11, TlvNullable(TlvUInt16), { scene: true, default: null, readAcl: AccessLevel.View }),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5
             */
            targetPositionTiltPercent100Ths2: OptionalAttribute(12, TlvNullable(TlvUInt16), { scene: true, default: null, readAcl: AccessLevel.View }),

            /**
             * The EndProductType attribute identifies the product type in
             * complement of the main category indicated by the Type attribute.
             * The window covering SHALL set this value to one of the values in
             * the table below.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.16
             */
            endProductType: FixedAttribute(13, TlvEnum<EndProductType>(), { readAcl: AccessLevel.View }),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5
             */
            currentPositionLiftPercent100Ths1: OptionalAttribute(14, TlvNullable(TlvUInt16), { persistent: true, default: null, readAcl: AccessLevel.View }),

            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5
             */
            currentPositionTiltPercent100Ths1: OptionalAttribute(15, TlvNullable(TlvUInt16), { persistent: true, default: null, readAcl: AccessLevel.View }),

            /**
             * The InstalledOpenLimitLift attribute identifies the Open Limit
             * for Lifting the Window Covering whether position (in
             * centimeters) is encoded or timed.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.17
             */
            installedOpenLimitLift: OptionalAttribute(16, TlvUInt16, { persistent: true, readAcl: AccessLevel.View }),

            /**
             * The InstalledClosedLimitLift attribute identifies the Closed
             * Limit for Lifting the Window Covering whether position (in
             * centimeters) is encoded or timed.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.18
             */
            installedClosedLimitLift: OptionalAttribute(17, TlvUInt16, { persistent: true, default: 65535, readAcl: AccessLevel.View }),

            /**
             * The InstalledOpenLimitTilt attribute identifies the Open Limit
             * for Tilting the Window Covering whether position (in tenth of a
             * degree) is encoded or timed.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.19
             */
            installedOpenLimitTilt: OptionalAttribute(18, TlvUInt16, { persistent: true, readAcl: AccessLevel.View }),

            /**
             * The InstalledClosedLimitTilt attribute identifies the Closed
             * Limit for Tilting the Window Covering whether position (in tenth
             * of a degree) is encoded or timed.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.20
             */
            installedClosedLimitTilt: OptionalAttribute(19, TlvUInt16, { persistent: true, default: 65535, readAcl: AccessLevel.View }),

            /**
             * The Mode attribute allows configuration of the Window Covering,
             * such as: reversing the motor direction, placing the Window
             * Covering into calibration mode, placing the motor into
             * maintenance mode, disabling the network, and disabling status
             * LEDs. See below for details.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.21
             */
            mode: WritableAttribute(23, Mode, { persistent: true, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }),

            /**
             * The SafetyStatus attribute reflects the state of the safety
             * sensors and the common issues preventing movements. By default
             * for nominal operation all flags are cleared (0). A device might
             * support none, one or several bit flags from this attribute (all
             * optional). See below for details about the meaning of individual
             * bits.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.22
             */
            safetyStatus: OptionalAttribute(26, SafetyStatus, { readAcl: AccessLevel.View })
        },

        commands: {
            /**
             * Upon receipt of this command, the Window Covering will adjust
             * its position so the physical lift/slide and tilt is at the
             * maximum open/up position. This will happen as fast as possible.
             * The server attributes SHALL be updated as follows:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.1
             */
            upOrOpen: Command(0, TlvNoArguments, 0, TlvNoResponse),

            /**
             * Upon receipt of this command, the Window Covering will adjust
             * its position so the physical lift/slide and tilt is at the
             * maximum closed/down position. This will happen as fast as
             * possible. The server attributes supported SHALL be updated as
             * follows:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.2
             */
            downOrClose: Command(1, TlvNoArguments, 1, TlvNoResponse),

            /**
             * Upon receipt of this command, the Window Covering will stop any
             * adjusting to the physical tilt and lift/slide that is currently
             * occurring. The server attributes supported SHALL be updated as
             * follows:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.3
             */
            stopMotion: Command(2, TlvNoArguments, 2, TlvNoResponse),

            /**
             * The GoToLiftValue command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.4
             */
            goToLiftValue: OptionalCommand(4, GoToLiftValueRequest, 4, TlvNoResponse),

            /**
             * The GoToLiftPercentage command SHALL have the following data
             * fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.5
             */
            goToLiftPercentage: OptionalCommand(5, GoToLiftPercentageRequest, 5, TlvNoResponse),

            /**
             * The GoToTiltValue command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.6
             */
            goToTiltValue: OptionalCommand(7, GoToTiltValueRequest, 7, TlvNoResponse),

            /**
             * The GoToTiltPercentage command SHALL have the following data
             * fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.7
             */
            goToTiltPercentage: OptionalCommand(8, GoToTiltPercentageRequest, 8, TlvNoResponse)
        }
    });
};