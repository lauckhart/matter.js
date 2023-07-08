/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClusterMetadata, ClusterComponent, extendCluster } from "../../cluster/ClusterFactory.js";
import { BitFlag, TypeFromPartialBitSchema, BitFlags } from "../../schema/BitmapSchema.js";
import { WritableAttribute, AccessLevel } from "../../cluster/Cluster.js";
import { TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.5.5.1
 */
export const enum TlvTempUnitEnum {
    Fahrenheit = 0,
    Celsius = 1,
    Kelvin = 2
};

/**
 * Standard UnitLocalization cluster properties.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.5
 */
export const UnitLocalizationMetadata = ClusterMetadata({
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
         * The TemperatureUnit attribute SHALL indicate the unit for the Node to use only when conveying temperature in
         * communication to the user. If provided, this value SHALL take priority over any unit implied through the
         * ActiveLocale Attribute.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.5.6.1
         */
        temperatureUnit: WritableAttribute(
            0,
            TlvNullable(TlvEnum<TlvTempUnitEnum>()),
            { persistent: true, default: null, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
        )
    }
});

export type UnitLocalizationCluster<T extends TypeFromPartialBitSchema<typeof UnitLocalizationMetadata.features>> = 
    typeof UnitLocalizationMetadata
    & { supportedFeatures: T }
    & typeof BaseComponent
    & (T extends { temperatureUnit: true } ? typeof TemperatureUnitComponent : {});

export function UnitLocalizationCluster<T extends (keyof typeof UnitLocalizationMetadata.features)[]>(...features: [ ...T ]) {
    const cluster = {
        ...UnitLocalizationMetadata,
        supportedFeatures: BitFlags(UnitLocalizationMetadata.features, ...features),
        ...BaseComponent
    };
    extendCluster(cluster, TemperatureUnitComponent, { temperatureUnit: true });
    
    return cluster as unknown as UnitLocalizationCluster<BitFlags<typeof UnitLocalizationMetadata.features, T>>;
};