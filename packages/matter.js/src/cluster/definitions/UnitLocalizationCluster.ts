/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { BitFlags, TypeFromPartialBitSchema, BitFlag } from "../../schema/BitmapSchema.js";
import { extendCluster, ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { GlobalAttributes, WritableAttribute, AccessLevel, Cluster } from "../../cluster/Cluster.js";
import { TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";

/**
 * Unit Localization
 *
 * Nodes should be expected to be deployed to any and all regions of the world. These global regions may have differing
 * preferences for the units in which values are conveyed in communication to a user. As such, Nodes that visually or
 * audibly convey measurable values to the user need a mechanism by which they can be configured to use a user’s
 * preferred unit.
 *
 * Use this factory function to create a UnitLocalization cluster supporting a specific set of features.  Include each
 * {@link UnitLocalizationCluster.Feature} you wish to support.
 *
 * @param features a list of {@link UnitLocalizationCluster.Feature} to support
 * @returns a UnitLocalization cluster with specified features enabled
 * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.5
 */
export function UnitLocalizationCluster<T extends UnitLocalizationCluster.Feature[]>(...features: [ ...T ]) {
    const cluster = Cluster({
        ...UnitLocalizationCluster.Metadata,
        supportedFeatures: BitFlags(UnitLocalizationCluster.Metadata.features, ...features),
        ...UnitLocalizationCluster.BaseComponent
    });
    extendCluster(cluster, UnitLocalizationCluster.TemperatureUnitComponent, { temperatureUnit: true });
    return cluster as unknown as UnitLocalizationCluster.Type<BitFlags<typeof UnitLocalizationCluster.Metadata.features, T>>;
};

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.5.5.1
 */
export const enum TempUnitEnum {
    Fahrenheit = 0,
    Celsius = 1,
    Kelvin = 2
};

export namespace UnitLocalizationCluster {
    /**
     * These are optional features supported by UnitLocalizationCluster.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.5.4
     */
    export enum Feature {
        /**
         * TemperatureUnit
         *
         * The Node can be configured to use different units of temperature when conveying values to a user.
         */
        TemperatureUnit = "TemperatureUnit"
    };

    export type Type<T extends TypeFromPartialBitSchema<typeof Metadata.features>> = 
        typeof Metadata
        & { attributes: GlobalAttributes<typeof Metadata.features> }
        & { supportedFeatures: T }
        & typeof BaseComponent
        & (T extends { temperatureUnit: true } ? typeof TemperatureUnitComponent : {});

    /**
     * UnitLocalization cluster metadata.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.5
     */
    export const Metadata = ClusterMetadata({
        id: 0x2d,
        name: "UnitLocalization",
        revision: 1,

        features: {
            /**
             * TemperatureUnit
             *
             * The Node can be configured to use different units of temperature when conveying values to a user.
             */
            temperatureUnit: BitFlag(0)
        }
    });

    /**
     * A UnitLocalizationCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({});

    /**
     * A UnitLocalizationCluster supports these elements if it supports feature TemperatureUnit.
     */
    export const TemperatureUnitComponent = ClusterComponent({
        attributes: {
            /**
             * The TemperatureUnit attribute SHALL indicate the unit for the Node to use only when conveying
             * temperature in communication to the user. If provided, this value SHALL take priority over any unit
             * implied through the ActiveLocale Attribute.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.5.6.1
             */
            temperatureUnit: WritableAttribute(
                0,
                TlvNullable(TlvEnum<TempUnitEnum>()),
                { persistent: true, default: null, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            )
        }
    });

    /**
     * This cluster supports all UnitLocalization features.  It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export const Complete = Cluster({ ...Metadata, attributes: { ...TemperatureUnitComponent.attributes } });
};
