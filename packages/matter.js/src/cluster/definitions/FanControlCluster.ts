/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { BitFlags, TypeFromPartialBitSchema, BitFlag } from "../../schema/BitmapSchema.js";
import { extendCluster, ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { GlobalAttributes, WritableAttribute, AccessLevel, Attribute, FixedAttribute, Cluster } from "../../cluster/Cluster.js";
import { TlvEnum, TlvUInt8, TlvBitmap } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";

/**
 * Fan Control
 *
 * An interface for controlling a fan in a heating/cooling system.
 *
 * Use this factory function to create a FanControl cluster supporting a specific set of features.  Include each
 * {@link FanControlCluster.Feature} you wish to support.
 *
 * @param features a list of {@link FanControlCluster.Feature} to support
 * @returns a FanControl cluster with specified features enabled
 * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4
 */
export function FanControlCluster<T extends FanControlCluster.Feature[]>(...features: [...T]) {
    const cluster = Cluster({
        ...FanControlCluster.Metadata,
        supportedFeatures: BitFlags(FanControlCluster.Metadata.features, ...features),
        ...FanControlCluster.BaseComponent
    });
    extendCluster(cluster, FanControlCluster.MultiSpeedComponent, { multiSpeed: true });
    extendCluster(cluster, FanControlCluster.RockingComponent, { rocking: true });
    extendCluster(cluster, FanControlCluster.WindComponent, { wind: true });
    return cluster as unknown as FanControlCluster.Type<BitFlags<typeof FanControlCluster.Metadata.features, T>>;
}

/**
 * This attribute SHALL indicate the current speed mode of the fan. This attribute MAY be written by the client to
 * indicate a new speed mode of the fan. This attribute SHALL be set to one of the values in the table below.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.1
 */
export const enum FanMode {
    /**
     * Setting the attribute value to Off SHALL set the values of these attributes to 0 (zero):
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.1.1
     */
    Off = 0,

    Low = 1,
    Medium = 2,
    High = 3,
    On = 4,

    /**
     * Setting the attribute value to Auto SHALL set the values of these attributes to null:
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.1.3
     */
    Auto = 5,

    Smart = 6
}

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
}

/**
 * This attribute is a bitmap that indicates what rocking motions the server supports. The bitmap is shown in the table
 * below.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.8
 */
export const TlvRockSupportBits = { rockLeftRight: BitFlag(0), rockUpDown: BitFlag(1), rockRound: BitFlag(2) };

export const TlvRockSupport = TlvBitmap(TlvUInt8, TlvRockSupportBits);

/**
 * This attribute is a bitmap that indicates the current active fan rocking motion settings. Each bit SHALL only be set
 * to 1, if the corresponding bit in the RockSupport attribute is set to 1, otherwise a status code of CONSTRAINT_ERROR
 * SHALL be returned.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.9
 */
export const TlvRockSettingBits = { rockLeftRight: BitFlag(0), rockUpDown: BitFlag(1), rockRound: BitFlag(2) };

export const TlvRockSetting = TlvBitmap(TlvUInt8, TlvRockSettingBits);

/**
 * This attribute is a bitmap that indicates what wind modes the server supports. At least one wind mode bit SHALL be
 * set. The bitmap is shown in the table below.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.10
 */
export const TlvWindSupportBits = { sleepWind: BitFlag(0), naturalWind: BitFlag(1) };

export const TlvWindSupport = TlvBitmap(TlvUInt8, TlvWindSupportBits);

/**
 * This attribute is a bitmap that indicates the current active fan wind feature settings. Each bit SHALL only be set
 * to 1, if the corresponding bit in the WindSupport attribute is set to 1, otherwise a status code of CONSTRAINT_ERROR
 * SHALL be returned.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.11
 */
export const TlvWindSettingBits = { sleepWind: BitFlag(0), naturalWind: BitFlag(1) };

export const TlvWindSetting = TlvBitmap(TlvUInt8, TlvWindSettingBits);

export namespace FanControlCluster {
    /**
     * These are optional features supported by FanControlCluster.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.5
     */
    export enum Feature {
        /**
         * MultiSpeed
         *
         * 1-100 speeds
         */
        MultiSpeed = "MultiSpeed",

        /**
         * Auto
         *
         * Automatic mode supported for fan speed
         */
        Auto = "Auto",

        /**
         * Rocking
         *
         * Rocking movement supported
         */
        Rocking = "Rocking",

        /**
         * Wind
         *
         * Wind emulation supported
         */
        Wind = "Wind"
    }

    export type Type<T extends TypeFromPartialBitSchema<typeof Metadata.features>> =
        typeof Metadata
        & { attributes: GlobalAttributes<typeof Metadata.features> }
        & { supportedFeatures: T }
        & typeof BaseComponent
        & (T extends { multiSpeed: true } ? typeof MultiSpeedComponent : {})
        & (T extends { rocking: true } ? typeof RockingComponent : {})
        & (T extends { wind: true } ? typeof WindComponent : {});

    /**
     * FanControl cluster metadata.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4
     */
    export const Metadata = ClusterMetadata({
        id: 0x202,
        name: "FanControl",
        revision: 1,

        features: {
            /**
             * MultiSpeed
             *
             * 1-100 speeds
             */
            multiSpeed: BitFlag(0),

            /**
             * Auto
             *
             * Automatic mode supported for fan speed
             */
            auto: BitFlag(1),

            /**
             * Rocking
             *
             * Rocking movement supported
             */
            rocking: BitFlag(2),

            /**
             * Wind
             *
             * Wind emulation supported
             */
            wind: BitFlag(3)
        }
    });

    /**
     * A FanControlCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute SHALL indicate the current speed mode of the fan. This attribute MAY be written by the
             * client to indicate a new speed mode of the fan. This attribute SHALL be set to one of the values in the
             * table below.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.1
             */
            fanMode: WritableAttribute(
                0,
                TlvEnum<FanMode>(),
                { persistent: true, default: 0, readAcl: AccessLevel.View, writeAcl: AccessLevel.Operate }
            ),

            /**
             * This indicates the fan speed ranges that SHALL be supported.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.2
             */
            fanModeSequence: WritableAttribute(
                1,
                TlvEnum<FanModeSequence>(),
                { persistent: true, default: 2, readAcl: AccessLevel.View, writeAcl: AccessLevel.Operate }
            ),

            /**
             * This attribute SHALL indicate the speed setting for the fan. This attribute MAY be written by the client
             * to indicate a new fan speed. If the client writes null to this attribute, the attribute value SHALL NOT
             * change. If this is set to 0, the server SHALL set the FanMode attribute value to Off.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.3
             */
            percentSetting: WritableAttribute(
                2,
                TlvNullable(TlvUInt8.bound({ max: 100 })),
                { default: 0, readAcl: AccessLevel.View, writeAcl: AccessLevel.Operate }
            ),

            /**
             * This attribute SHALL indicate the actual currently operating fan speed, or zero to indicate that the fan
             * is off. See Section 4.4.6.3.1 for more details.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.4
             */
            percentCurrent: Attribute(3, TlvUInt8.bound({ max: 100 }), { default: 0, readAcl: AccessLevel.View })
        }
    });

    /**
     * A FanControlCluster supports these elements if it supports feature MultiSpeed.
     */
    export const MultiSpeedComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute SHALL indicate that the fan has one speed (value of 1) or the maximum speed, if the fan
             * is capable of multiple speeds.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.5
             */
            speedMax: FixedAttribute(4, TlvUInt8.bound({ min: 1, max: 100 }), { default: 1, readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL indicate the speed setting for the fan. This attribute MAY be written by the client
             * to indicate a new fan speed. If the client writes null to this attribute, the attribute value SHALL NOT
             * change. If this is set to 0, the server SHALL set the FanMode attribute value to Off. Please see the
             * Section 4.4.6.6.1 for details on other values.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.6
             */
            speedSetting: WritableAttribute(
                5,
                TlvNullable(TlvUInt8),
                { default: 0, readAcl: AccessLevel.View, writeAcl: AccessLevel.Operate }
            ),

            /**
             * This attribute SHALL indicate the actual currently operating fan speed, or zero to indicate that the fan
             * is off.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.7
             */
            speedCurrent: Attribute(6, TlvUInt8, { default: 0, readAcl: AccessLevel.View })
        }
    });

    /**
     * A FanControlCluster supports these elements if it supports feature Rocking.
     */
    export const RockingComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute is a bitmap that indicates what rocking motions the server supports. The bitmap is shown
             * in the table below.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.8
             */
            rockSupport: FixedAttribute(7, TlvRockSupport, { readAcl: AccessLevel.View }),

            /**
             * This attribute is a bitmap that indicates the current active fan rocking motion settings. Each bit SHALL
             * only be set to 1, if the corresponding bit in the RockSupport attribute is set to 1, otherwise a status
             * code of CONSTRAINT_ERROR SHALL be returned.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.9
             */
            rockSetting: WritableAttribute(8, TlvRockSetting, { readAcl: AccessLevel.View, writeAcl: AccessLevel.Operate })
        }
    });

    /**
     * A FanControlCluster supports these elements if it supports feature Wind.
     */
    export const WindComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute is a bitmap that indicates what wind modes the server supports. At least one wind mode
             * bit SHALL be set. The bitmap is shown in the table below.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.10
             */
            windSupport: FixedAttribute(9, TlvWindSupport, { readAcl: AccessLevel.View }),

            /**
             * This attribute is a bitmap that indicates the current active fan wind feature settings. Each bit SHALL
             * only be set to 1, if the corresponding bit in the WindSupport attribute is set to 1, otherwise a status
             * code of CONSTRAINT_ERROR SHALL be returned.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 4.4.6.11
             */
            windSetting: WritableAttribute(10, TlvWindSetting, { readAcl: AccessLevel.View, writeAcl: AccessLevel.Operate })
        }
    });

    /**
     * This cluster supports all FanControl features.  It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export const Complete = Cluster({
        ...Metadata,

        attributes: {
            ...BaseComponent.attributes,
            ...MultiSpeedComponent.attributes,
            ...RockingComponent.attributes,
            ...WindComponent.attributes
        }
    });
}
