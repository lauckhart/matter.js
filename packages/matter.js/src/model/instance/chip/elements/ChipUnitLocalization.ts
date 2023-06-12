/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x002d, name: "UnitLocalization",
    description: "Unit Localization",
    details: "Nodes should be expected to be deployed to any and all regions of the world. These global regions may have differing preferences for the units in which values are conveyed in communication to a user. As such, Nodes that visually or audibly convey measurable values to the user need a mechanism by which they can be configured to use a user’s preferred unit.",
    children: [
        AttributeElement({
            id: 0x0000, name: "TemperatureUnit", base: "TempUnitEnum",
            access: "RW", conformance: "O"
        }),

        DatatypeElement({
            name: "TempUnitEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Fahrenheit"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Celsius"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Kelvin"
                })
            ]
        }),

        DatatypeElement({
            name: "UnitLocalizationFeature", base: "map32",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "TemperatureUnit"
                })
            ]
        })
    ]
}));
