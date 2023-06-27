/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, WritableAttribute, Attribute, AccessLevel, OptionalFixedAttribute, OptionalWritableAttribute, OptionalAttribute } from "../../cluster/Cluster.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { TlvEnum, TlvUInt8, TlvBitmap } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";

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
    /**
     * Fan Control
     *
     * An interface for controlling a fan in a heating/cooling system.
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `FanControl.with()` and a list of
     * supported features.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4
     */
    export const Complete = Cluster({
        id: 0x202,
        name: "FanControl",
        revision: 1,

        features: {
            MULTISPEED: BitFlag(0),
            AUTO: BitFlag(1),
            ROCKING: BitFlag(2),
            WIND: BitFlag(3)
        },

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
            percentCurrent: Attribute(3, TlvUInt8, { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL indicate that the fan has one speed (value
             * of 1) or the maximum speed, if the fan is capable of multiple
             * speeds.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.5
             */
            speedMax: OptionalFixedAttribute(4, TlvUInt8, { default: 1, readAcl: AccessLevel.View }),

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
            speedSetting: OptionalWritableAttribute(5, TlvNullable(TlvUInt8)),

            /**
             * This attribute SHALL indicate the actual currently operating fan
             * speed, or zero to indicate that the fan is off.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.7
             */
            speedCurrent: OptionalAttribute(6, TlvUInt8, { readAcl: AccessLevel.View }),

            /**
             * This attribute is a bitmap that indicates what rocking motions
             * the server supports. The bitmap is shown in the table below.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.8
             */
            rockSupport: OptionalFixedAttribute(7, RockSupport, { readAcl: AccessLevel.View }),

            /**
             * This attribute is a bitmap that indicates the current active fan
             * rocking motion settings. Each bit SHALL only be set to 1, if the
             * corresponding bit in the RockSupport attribute is set to 1,
             * otherwise a status code of CONSTRAINT_ERROR SHALL be returned.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.9
             */
            rockSetting: OptionalWritableAttribute(8, RockSetting),

            /**
             * This attribute is a bitmap that indicates what wind modes the
             * server supports. At least one wind mode bit SHALL be set. The
             * bitmap is shown in the table below.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.10
             */
            windSupport: OptionalFixedAttribute(9, WindSupport, { readAcl: AccessLevel.View }),

            /**
             * This attribute is a bitmap that indicates the current active fan
             * wind feature settings. Each bit SHALL only be set to 1, if the
             * corresponding bit in the WindSupport attribute is set to 1,
             * otherwise a status code of CONSTRAINT_ERROR SHALL be returned.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.11
             */
            windSetting: OptionalWritableAttribute(10, WindSetting)
        }
    });
};