/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, OptionalWritableAttribute } from "../../cluster/Cluster.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";

/**
 * This data type is derived from enum8.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.5.5.1
 */
export const enum TempUnitEnum {
    Fahrenheit = 0,
    Celsius = 1,
    Kelvin = 2
};

export namespace UnitLocalizationCluster {
    /**
     * Unit Localization
     *
     * Nodes should be expected to be deployed to any and all regions of the
     * world. These global regions may have differing preferences for the units
     * in which values are conveyed in communication to a user. As such, Nodes
     * that visually or audibly convey measurable values to the user need a
     * mechanism by which they can be configured to use a user’s preferred unit.
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `UnitLocalization.with()` and a list of
     * supported features.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.5
     */
    export const Complete = Cluster({
        id: 0x2d,
        name: "UnitLocalization",
        revision: 1,
        features: { TEMP: BitFlag(0) },

        attributes: {
            /**
             * The TemperatureUnit attribute SHALL indicate the unit for the
             * Node to use only when conveying temperature in communication to
             * the user. If provided, this value SHALL take priority over any
             * unit implied through the ActiveLocale Attribute.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.5.6.1
             */
            temperatureUnit: OptionalWritableAttribute(0, TlvNullable(TlvEnum<TempUnitEnum>()), { persistent: true, default: null })
        }
    });
};