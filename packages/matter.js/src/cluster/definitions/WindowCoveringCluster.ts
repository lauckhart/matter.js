/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlag, BitFlags } from "../../schema/BitmapSchema.js";
import { FixedAttribute, AccessLevel, Attribute, WritableAttribute, OptionalAttribute, Command, TlvNoResponse, OptionalFixedAttribute, OptionalCommand } from "../../cluster/Cluster.js";
import { TlvEnum, TlvUInt8, TlvBitmap, TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvObject, TlvOptionalField, TlvField } from "../../tlv/TlvObject.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * The Type attribute identifies the type of window covering being controlled by this endpoint and SHALL be set to one
 * of the non-reserved values in the table below.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.1
 */
export const enum TlvType {
    Rollershade = 0,
    Rollershade2Motor = 1,
    RollershadeExterior = 2,
    RollershadeExterior2Motor = 3,
    Drapery = 4,
    Awning = 5,
    Shutter = 6,
    TiltBlindTiltOnly = 7,
    TiltBlindLift = 8,
    ProjectorScreen = 9,
    Unknown = 255
};

/**
 * The ConfigStatus attribute makes configuration and status information available. To change settings, devices SHALL
 * write to the Mode attribute of the Window Covering Settings Attribute Set. The behavior causing the setting or
 * clearing of each bit is vendor specific. See table below for details on each bit.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.8
 */
export const TlvConfigStatusBits = {
    operational: BitFlag(1),
    onlineReserved: BitFlag(2),
    liftMovementReversed: BitFlag(4),
    liftPositionAware: BitFlag(8),
    tiltPositionAware: BitFlag(16),
    liftEncoderControlled: BitFlag(32),
    tiltEncoderControlled: BitFlag(64)
};

export const TlvConfigStatus = TlvBitmap(TlvUInt8, TlvConfigStatusBits);

/**
 * The OperationalStatus attribute keeps track of currently ongoing operations and applies to all type of devices. See
 * below for details about the meaning of individual bits.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.15
 */
export const TlvOperationalStatusBits = { global: BitFlag(3), lift: BitFlag(12), tilt: BitFlag(48) };

export const TlvOperationalStatus = TlvBitmap(TlvUInt8, TlvOperationalStatusBits);

/**
 * The EndProductType attribute identifies the product type in complement of the main category indicated by the Type
 * attribute. The window covering SHALL set this value to one of the values in the table below.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.16
 */
export const enum TlvEndProductType {
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
    AwningTerrace = 19,
    AwningVerticalScreen = 20,
    TiltOnlyPergola = 21,
    SwingingShutter = 22,
    SlidingShutter = 23,
    Unknown = 255
};

/**
 * The Mode attribute allows configuration of the Window Covering, such as: reversing the motor direction, placing the
 * Window Covering into calibration mode, placing the motor into maintenance mode, disabling the network, and disabling
 * status LEDs. See below for details.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.21
 */
export const TlvModeBits = {
    motorDirectionReversed: BitFlag(1),
    calibrationMode: BitFlag(2),
    maintenanceMode: BitFlag(4),
    ledFeedback: BitFlag(8)
};

export const TlvMode = TlvBitmap(TlvUInt8, TlvModeBits);

/**
 * The SafetyStatus attribute reflects the state of the safety sensors and the common issues preventing movements. By
 * default for nominal operation all flags are cleared (0). A device might support none, one or several bit flags from
 * this attribute (all optional). See below for details about the meaning of individual bits.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.22
 */
export const TlvSafetyStatusBits = {
    /**
     * Tampering detected on sensors or any other safety equipment. Ex: a device has been forcedly moved without its
     * actuator(s).
     */
    tamperDetection: BitFlag(1),

    /**
     * Communication failure to sensors or other safety equipment.
     */
    failedCommunication: BitFlag(2),

    /**
     * Device has failed to reach the desired position. e.g. with Position Aware device, time expired before
     * TargetPosition is reached.
     */
    positionFailure: BitFlag(3),

    /**
     * Motor(s) and/or electric circuit thermal protection activated.
     */
    thermalProtection: BitFlag(16),

    /**
     * An obstacle is preventing actuator movement.
     */
    obstacleDetected: BitFlag(32),

    /**
     * Device has power related issue or limitation e.g. device is running w/ the help of a backup battery or power
     * might not be fully available at the moment.
     */
    power: BitFlag(64),

    /**
     * Local safety sensor (not a direct obstacle) is preventing movements (e.g. Safety EU Standard EN60335).
     */
    stopInput: BitFlag(128),

    /**
     * Mechanical problem related to the motor(s) detected.
     */
    motorJammed: BitFlag(256),

    /**
     * PCB, fuse and other electrics problems.
     */
    hardwareFailure: BitFlag(512),

    /**
     * Actuator is manually operated and is preventing actuator movement (e.g. actuator is disengaged/decoupled).
     */
    manualOperation: BitFlag(1024),

    /**
     * Protection is activated.
     */
    protection: BitFlag(2048)
};

export const TlvSafetyStatus = TlvBitmap(TlvUInt16, TlvSafetyStatusBits);

/**
 * The GoToLiftPercentage command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.5
 */
export const TlvGoToLiftPercentageRequest = TlvObject({
    liftPercentageValue: TlvOptionalField(0, TlvUInt8),
    liftPercent100ThsValue: TlvOptionalField(1, TlvUInt16)
});

/**
 * The GoToTiltPercentage command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.7
 */
export const TlvGoToTiltPercentageRequest = TlvObject({
    tiltPercentageValue: TlvOptionalField(0, TlvUInt8),
    tiltPercent100ThsValue: TlvOptionalField(1, TlvUInt16)
});

/**
 * The GoToLiftValue command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.4
 */
export const TlvGoToLiftValueRequest = TlvObject({ liftValue: TlvField(0, TlvUInt16) });

/**
 * The GoToTiltValue command SHALL have the following data fields:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.6
 */
export const TlvGoToTiltValueRequest = TlvObject({ tiltValue: TlvField(0, TlvUInt16) });

export namespace WindowCoveringCluster {
    export const id = 0x102;
    export const name = "WindowCovering";
    export const revision = 1;

    export const featureMap = {
        /**
         * Lift
         *
         * Lift Control and behavior for lifting/sliding window coverings
         */
        lift: BitFlag(0),

        /**
         * Tilt
         *
         * Tilt Control and behavior for tilting window coverings
         */
        tilt: BitFlag(1),

        /**
         * PositionAwareLift
         *
         * Position Aware lift control is supported.
         */
        positionAwareLift: BitFlag(2),

        /**
         * AbsolutePosition
         *
         * Absolute positioning is supported.
         */
        absolutePosition: BitFlag(3),

        /**
         * PositionAwareTilt
         *
         * Position Aware tilt control is supported.
         */
        positionAwareTilt: BitFlag(4)
    };

    const Base = {
        attributes: {
            /**
             * The Type attribute identifies the type of window covering being controlled by this endpoint and SHALL be
             * set to one of the non-reserved values in the table below.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.1
             */
            type: FixedAttribute(0, TlvEnum<TlvType>(), { readAcl: AccessLevel.View }),

            /**
             * The ConfigStatus attribute makes configuration and status information available. To change settings,
             * devices SHALL write to the Mode attribute of the Window Covering Settings Attribute Set. The behavior
             * causing the setting or clearing of each bit is vendor specific. See table below for details on each bit.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.8
             */
            configStatus: Attribute(
                7,
                TlvConfigStatus,
                {
                    persistent: true,
                    default: BitFlags(TlvConfigStatusBits, "Operational", "OnlineReserved"),
                    readAcl: AccessLevel.View
                }
            ),

            /**
             * The OperationalStatus attribute keeps track of currently ongoing operations and applies to all type of
             * devices. See below for details about the meaning of individual bits.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.15
             */
            operationalStatus: Attribute(10, TlvOperationalStatus, { readAcl: AccessLevel.View }),

            /**
             * The EndProductType attribute identifies the product type in complement of the main category indicated by
             * the Type attribute. The window covering SHALL set this value to one of the values in the table below.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.16
             */
            endProductType: FixedAttribute(13, TlvEnum<TlvEndProductType>(), { readAcl: AccessLevel.View }),

            /**
             * The Mode attribute allows configuration of the Window Covering, such as: reversing the motor direction,
             * placing the Window Covering into calibration mode, placing the motor into maintenance mode, disabling
             * the network, and disabling status LEDs. See below for details.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.21
             */
            mode: WritableAttribute(
                23,
                TlvMode,
                { persistent: true, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The SafetyStatus attribute reflects the state of the safety sensors and the common issues preventing
             * movements. By default for nominal operation all flags are cleared (0). A device might support none, one
             * or several bit flags from this attribute (all optional). See below for details about the meaning of
             * individual bits.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.22
             */
            safetyStatus: OptionalAttribute(26, TlvSafetyStatus, { readAcl: AccessLevel.View })
        },

        commands: {
            /**
             * Upon receipt of this command, the Window Covering will adjust its position so the physical lift/slide
             * and tilt is at the maximum open/up position. This will happen as fast as possible. The server attributes
             * SHALL be updated as follows:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.1
             */
            upOrOpen: Command(0, TlvNoArguments, 0, TlvNoResponse),

            /**
             * Upon receipt of this command, the Window Covering will adjust its position so the physical lift/slide
             * and tilt is at the maximum closed/down position. This will happen as fast as possible. The server
             * attributes supported SHALL be updated as follows:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.2
             */
            downOrClose: Command(1, TlvNoArguments, 1, TlvNoResponse),

            /**
             * Upon receipt of this command, the Window Covering will stop any adjusting to the physical tilt and
             * lift/slide that is currently occurring. The server attributes supported SHALL be updated as follows:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.3
             */
            stopMotion: Command(2, TlvNoArguments, 2, TlvNoResponse)
        }
    };

    const LiftAndPositionAwareLift = {
        attributes: {
            /**
             * The PhysicalClosedLimitLift attribute identifies the maximum possible encoder position possible (in
             * centimeters) to position the height of the window covering Lift.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.2
             */
            physicalClosedLimitLift: OptionalFixedAttribute(1, TlvUInt16, { readAcl: AccessLevel.View }),

            /**
             * The CurrentPositionLift attribute identifies the actual Lift position (in centimeters) of the window
             * covering from the fully-open position.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.4
             */
            currentPositionLift: OptionalAttribute(
                3,
                TlvNullable(TlvUInt16.bound({ min: "InstalledOpenLimitLift", max: "InstalledClosedLimitLift" })),
                { persistent: true, default: null, readAcl: AccessLevel.View }
            ),

            /**
             * The CurrentPositionLiftPercentage attribute identifies the actual position as a percentage from 0% to
             * 100% with 1% default step. This attribute is equal to CurrentPositionLiftPercent100ths attribute divided
             * by 100.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.11
             */
            currentPositionLiftPercentage: OptionalAttribute(
                8,
                TlvNullable(TlvUInt8.bound({ min: 0, max: 100 })),
                { scene: true, persistent: true, default: null, readAcl: AccessLevel.View }
            )
        },

        commands: {
            /**
             * The GoToLiftPercentage command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.5
             */
            goToLiftPercentage: Command(5, TlvGoToLiftPercentageRequest, 5, TlvNoResponse)
        }
    };

    const TiltAndPositionAwareTilt = {
        attributes: {
            /**
             * The PhysicalClosedLimitTilt attribute identifies the maximum possible encoder position possible (tenth
             * of a degrees) to position the angle of the window covering Tilt.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.3
             */
            physicalClosedLimitTilt: OptionalFixedAttribute(2, TlvUInt16, { readAcl: AccessLevel.View }),

            /**
             * The CurrentPositionTilt attribute identifies the actual Tilt position (in tenth of an degree) of the
             * window covering from the fully-open position.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.5
             */
            currentPositionTilt: OptionalAttribute(
                4,
                TlvNullable(TlvUInt16.bound({ min: "InstalledOpenLimitTilt", max: "InstalledClosedLimitTilt" })),
                { persistent: true, default: null, readAcl: AccessLevel.View }
            ),

            /**
             * The CurrentPositionTiltPercentage attribute identifies the actual position as a percentage from 0% to
             * 100% with 1% default step. This attribute is equal to CurrentPositionTiltPercent100ths attribute divided
             * by 100.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.12
             */
            currentPositionTiltPercentage: OptionalAttribute(
                9,
                TlvNullable(TlvUInt8.bound({ min: 0, max: 100 })),
                { scene: true, persistent: true, default: null, readAcl: AccessLevel.View }
            )
        },

        commands: {
            /**
             * The GoToTiltPercentage command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.7
             */
            goToTiltPercentage: Command(8, TlvGoToTiltPercentageRequest, 8, TlvNoResponse)
        }
    };

    const Lift = {
        attributes: {
            /**
             * The NumberOfActuationsLift attribute identifies the total number of lift/slide actuations applied to the
             * Window Covering since the device was installed.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.6
             */
            numberOfActuationsLift: OptionalAttribute(5, TlvUInt16, { persistent: true, readAcl: AccessLevel.View }),

            /**
             * The TargetPositionLiftPercent100ths attribute identifies the position where the Window Covering Lift
             * will go or is moving to as a percentage.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.13
             */
            targetPositionLiftPercent100Ths: OptionalAttribute(
                11,
                TlvNullable(TlvUInt16.bound({ min: 0, max: 10000 })),
                { scene: true, default: null, readAcl: AccessLevel.View }
            ),

            /**
             * The CurrentPositionLiftPercent100ths attribute identifies the actual position as a percentage with a
             * minimal step of 0.01%. E.g Max 10000 equals 100.00%.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.9
             */
            currentPositionLiftPercent100Ths: OptionalAttribute(
                14,
                TlvNullable(TlvUInt16.bound({ min: 0, max: 10000 })),
                { persistent: true, default: null, readAcl: AccessLevel.View }
            ),

            /**
             * The InstalledOpenLimitLift attribute identifies the Open Limit for Lifting the Window Covering whether
             * position (in centimeters) is encoded or timed.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.17
             */
            installedOpenLimitLift: OptionalAttribute(
                16,
                TlvUInt16.bound({ min: 0, max: 65534 }),
                { persistent: true, readAcl: AccessLevel.View }
            ),

            /**
             * The InstalledClosedLimitLift attribute identifies the Closed Limit for Lifting the Window Covering
             * whether position (in centimeters) is encoded or timed.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.18
             */
            installedClosedLimitLift: OptionalAttribute(
                17,
                TlvUInt16.bound({ min: 0, max: 65534 }),
                { persistent: true, readAcl: AccessLevel.View }
            )
        },

        commands: {
            /**
             * The GoToLiftPercentage command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.5
             */
            goToLiftPercentage: OptionalCommand(5, TlvGoToLiftPercentageRequest, 5, TlvNoResponse)
        }
    };

    const Tilt = {
        attributes: {
            /**
             * The NumberOfActuationsTilt attribute identifies the total number of tilt actuations applied to the
             * Window Covering since the device was installed.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.7
             */
            numberOfActuationsTilt: OptionalAttribute(6, TlvUInt16, { persistent: true, readAcl: AccessLevel.View }),

            /**
             * The TargetPositionTiltPercent100ths attribute identifies the position where the Window Covering Tilt
             * will go or is moving to as a percentage.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.14
             */
            targetPositionTiltPercent100Ths: OptionalAttribute(
                12,
                TlvNullable(TlvUInt16.bound({ min: 0, max: 10000 })),
                { scene: true, default: null, readAcl: AccessLevel.View }
            ),

            /**
             * The CurrentPositionTiltPercent100ths attribute identifies the actual position as a percentage with a
             * minimal step of 0.01%. E.g Max 10000 equals 100.00%.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.10
             */
            currentPositionTiltPercent100Ths: OptionalAttribute(
                15,
                TlvNullable(TlvUInt16.bound({ min: 0, max: 10000 })),
                { persistent: true, default: null, readAcl: AccessLevel.View }
            ),

            /**
             * The InstalledOpenLimitTilt attribute identifies the Open Limit for Tilting the Window Covering whether
             * position (in tenth of a degree) is encoded or timed.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.19
             */
            installedOpenLimitTilt: OptionalAttribute(
                18,
                TlvUInt16.bound({ min: 0, max: 65534 }),
                { persistent: true, readAcl: AccessLevel.View }
            ),

            /**
             * The InstalledClosedLimitTilt attribute identifies the Closed Limit for Tilting the Window Covering
             * whether position (in tenth of a degree) is encoded or timed.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.5.20
             */
            installedClosedLimitTilt: OptionalAttribute(
                19,
                TlvUInt16.bound({ min: 0, max: 65534 }),
                { persistent: true, readAcl: AccessLevel.View }
            )
        },

        commands: {
            /**
             * The GoToTiltPercentage command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.7
             */
            goToTiltPercentage: OptionalCommand(8, TlvGoToTiltPercentageRequest, 8, TlvNoResponse)
        }
    };

    const LiftAndAbsolutePosition = {
        commands: {
            /**
             * The GoToLiftValue command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.4
             */
            goToLiftValue: OptionalCommand(4, TlvGoToLiftValueRequest, 4, TlvNoResponse)
        }
    };

    const TiltAndAbsolutePosition = {
        commands: {
            /**
             * The GoToTiltValue command SHALL have the following data fields:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 5.3.6.6
             */
            goToTiltValue: OptionalCommand(7, TlvGoToTiltValueRequest, 7, TlvNoResponse)
        }
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        features: featureMap,

        supportedFeatures: {
            lift: true,
            tilt: true,
            positionAwareLift: true,
            absolutePosition: true,
            positionAwareTilt: true
        },

        elements: [
            Base,
            LiftAndPositionAwareLift,
            TiltAndPositionAwareTilt,
            Lift,
            Tilt,
            LiftAndAbsolutePosition,
            TiltAndAbsolutePosition
        ]
    });
};