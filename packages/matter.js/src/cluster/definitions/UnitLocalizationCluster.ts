/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlag } from "../../schema/BitmapSchema.js";
import { WritableAttribute, AccessLevel } from "../../cluster/Cluster.js";
import { TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.5.5.1
 */
export const enum TlvTempUnitEnum {
    Fahrenheit = 0,
    Celsius = 1,
    Kelvin = 2
};

export namespace UnitLocalizationCluster {
    export const id = 0x2d;
    export const name = "UnitLocalization";
    export const revision = 1;

    export const featureMap = {
        /**
         * TemperatureUnit
         *
         * The Node can be configured to use different units of temperature when conveying values to a user.
         */
        temperatureUnit: BitFlag(0)
    };

    const TemperatureUnit = {
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
                TlvNullable(TlvEnum<TlvTempUnitEnum>()),
                { persistent: true, default: null, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            )
        }
    };

    const Base = {};

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        features: featureMap,
        supportedFeatures: { temperatureUnit: true },
        elements: [ TemperatureUnit, Base ]
    });
};