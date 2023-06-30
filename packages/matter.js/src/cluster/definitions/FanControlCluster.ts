/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlag } from "../../schema/BitmapSchema.js";
import { WritableAttribute, Attribute, AccessLevel, FixedAttribute } from "../../cluster/Cluster.js";
import { TlvEnum, TlvUInt8, TlvBitmap } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * This attribute SHALL indicate the current speed mode of the fan. This
 * attribute MAY be written by the client to indicate a new speed mode of the
 * fan. This attribute SHALL be set to one of the values in the table below.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.1
 */
export const enum FanMode {
    /**
     * Setting the attribute value to Off SHALL set the values of these
     * attributes to 0 (zero):
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.1.1
     */
    Off = 0,

    Low = 1,
    Medium = 2,
    High = 3,
    On = 4,

    /**
     * Setting the attribute value to Auto SHALL set the values of these
     * attributes to null:
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.1.3
     */
    Auto = 5,

    Smart = 6
};

/**
 * This indicates the fan speed ranges that SHALL be supported.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.2
 */
export const enum FanModeSequence {
    OffLowMedHigh = 0,
    OffLowHigh = 1,
    OffLowMedHighAuto = 2,
    OffLowHighAuto = 3,
    OffOnAuto = 4,
    OffOn = 5
};

/**
 * This attribute is a bitmap that indicates what rocking motions the server
 * supports. The bitmap is shown in the table below.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.8
 */
export const RockSupport = TlvBitmap(TlvUInt8, {
    RockLeftRight: BitFlag(0),
    RockUpDown: BitFlag(1),
    RockRound: BitFlag(2)
});

/**
 * This attribute is a bitmap that indicates the current active fan rocking
 * motion settings. Each bit SHALL only be set to 1, if the corresponding bit
 * in the RockSupport attribute is set to 1, otherwise a status code of
 * CONSTRAINT_ERROR SHALL be returned.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.9
 */
export const RockSetting = TlvBitmap(TlvUInt8, {
    RockLeftRight: BitFlag(0),
    RockUpDown: BitFlag(1),
    RockRound: BitFlag(2)
});

/**
 * This attribute is a bitmap that indicates what wind modes the server
 * supports. At least one wind mode bit SHALL be set. The bitmap is shown in
 * the table below.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.10
 */
export const WindSupport = TlvBitmap(TlvUInt8, {
    SleepWind: BitFlag(0),
    NaturalWind: BitFlag(1)
});

/**
 * This attribute is a bitmap that indicates the current active fan wind
 * feature settings. Each bit SHALL only be set to 1, if the corresponding bit
 * in the WindSupport attribute is set to 1, otherwise a status code of
 * CONSTRAINT_ERROR SHALL be returned.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.11
 */
export const WindSetting = TlvBitmap(TlvUInt8, {
    SleepWind: BitFlag(0),
    NaturalWind: BitFlag(1)
});

export namespace FanControlCluster {
    export const id = 514;
    export const name = "FanControl";
    export const revision = 1;

    export const featureMap = {
        /**
         * MultiSpeed
         *
         * 1-100 speeds
         */
        SPD: BitFlag(0),

        /**
         * Auto
         *
         * Automatic mode supported for fan speed
         */
        AUT: BitFlag(1),

        /**
         * Rocking
         *
         * Rocking movement supported
         */
        RCK: BitFlag(2),

        /**
         * Wind
         *
         * Wind emulation supported
         */
        WND: BitFlag(3)
    };

    const Base = {
        attributes: {
            /**
             * This attribute SHALL indicate the current speed mode of the fan.
             * This attribute MAY be written by the client to indicate a new
             * speed mode of the fan. This attribute SHALL be set to one of the
             * values in the table below.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.1
             */
            fanMode: WritableAttribute(0, TlvEnum<FanMode>(), { persistent: true }),

            /**
             * This indicates the fan speed ranges that SHALL be supported.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.2
             */
            fanModeSequence: WritableAttribute(1, TlvEnum<FanModeSequence>(), { persistent: true, default: 2 }),

            /**
             * This attribute SHALL indicate the speed setting for the fan.
             * This attribute MAY be written by the client to indicate a new
             * fan speed. If the client writes null to this attribute, the
             * attribute value SHALL NOT change. If this is set to 0, the
             * server SHALL set the FanMode attribute value to Off.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.3
             */
            percentSetting: WritableAttribute(2, TlvNullable(TlvUInt8)),

            /**
             * This attribute SHALL indicate the actual currently operating fan
             * speed, or zero to indicate that the fan is off. See Section
             * 4.4.6.3.1 for more details.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.4
             */
            percentCurrent: Attribute(3, TlvUInt8, { readAcl: AccessLevel.View })
        }
    };

    const SPD = {
        attributes: {
            /**
             * This attribute SHALL indicate that the fan has one speed (value
             * of 1) or the maximum speed, if the fan is capable of multiple
             * speeds.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.5
             */
            speedMax: FixedAttribute(4, TlvUInt8, { default: 1, readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL indicate the speed setting for the fan.
             * This attribute MAY be written by the client to indicate a new
             * fan speed. If the client writes null to this attribute, the
             * attribute value SHALL NOT change. If this is set to 0, the
             * server SHALL set the FanMode attribute value to Off. Please see
             * the Section 4.4.6.6.1 for details on other values.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.6
             */
            speedSetting: WritableAttribute(5, TlvNullable(TlvUInt8)),

            /**
             * This attribute SHALL indicate the actual currently operating fan
             * speed, or zero to indicate that the fan is off.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.7
             */
            speedCurrent: Attribute(6, TlvUInt8, { readAcl: AccessLevel.View })
        }
    };

    const RCK = {
        attributes: {
            /**
             * This attribute is a bitmap that indicates what rocking motions
             * the server supports. The bitmap is shown in the table below.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.8
             */
            rockSupport: FixedAttribute(7, RockSupport, { readAcl: AccessLevel.View }),

            /**
             * This attribute is a bitmap that indicates the current active fan
             * rocking motion settings. Each bit SHALL only be set to 1, if the
             * corresponding bit in the RockSupport attribute is set to 1,
             * otherwise a status code of CONSTRAINT_ERROR SHALL be returned.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.9
             */
            rockSetting: WritableAttribute(8, RockSetting)
        }
    };

    const WND = {
        attributes: {
            /**
             * This attribute is a bitmap that indicates what wind modes the
             * server supports. At least one wind mode bit SHALL be set. The
             * bitmap is shown in the table below.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.10
             */
            windSupport: FixedAttribute(9, WindSupport, { readAcl: AccessLevel.View }),

            /**
             * This attribute is a bitmap that indicates the current active fan
             * wind feature settings. Each bit SHALL only be set to 1, if the
             * corresponding bit in the WindSupport attribute is set to 1,
             * otherwise a status code of CONSTRAINT_ERROR SHALL be returned.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.11
             */
            windSetting: WritableAttribute(10, WindSetting)
        }
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        features: featureMap,

        supportedFeatures: {
            SPD: true,
            AUT: true,
            RCK: true,
            WND: true
        },

        elements: [
            Base,
            SPD,
            RCK,
            WND
        ]
    });
};