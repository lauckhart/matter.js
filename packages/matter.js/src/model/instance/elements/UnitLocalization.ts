/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x002d, name: "UnitLocalization",
    classification: "node", description: "Unit Localization",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "TemperatureUnit",
            access: "RW", conformance: "TEMP", default: undefined, quality: "X N", type: "TempUnitEnum",
            details: "The TemperatureUnit attribute SHALL indicate the unit for the Node to " +
                     "use only when conveying temperature in communication to the user. If " +
                     "provided, this value SHALL take priority over any unit implied through" +
                     " the ActiveLocale Attribute",
            xref: { document: "core", section: "11.5.6.1" }
        },

        {
            tag: "datatype", name: "TempUnitEnum",
            conformance: "M", type: "enum8",
            details: "This data type is derived from enum8",
            xref: { document: "core", section: "11.5.5.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Fahrenheit",
                    conformance: "M",
                    xref: { document: "core", section: "11.5.5.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "Celsius",
                    conformance: "M",
                    xref: { document: "core", section: "11.5.5.1" }
                },

                {
                    tag: "datatype", id: 0x0002, name: "Kelvin",
                    conformance: "M",
                    xref: { document: "core", section: "11.5.5.1" }
                }
            ]
        },

        {
            tag: "datatype", name: "TempUnitEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Fahrenheit",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Celsius",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Kelvin",
                    conformance: "M"
                }
            ]
        }
    ]
});
