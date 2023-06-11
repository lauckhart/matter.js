/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x002d, name: "UnitLocalization",
    description: "Unit Localization",
    details: "Nodes should be expected to be deployed to any and all regions of the world. These global regions may have differing preferences for the units in which values are conveyed in communication to a user. As such, Nodes that visually or audibly convey measurable values to the user need a mechanism by which they can be configured to use a user’s preferred unit.",
    children: [
        AttributeElement({
            id: 0x0000, name: "temperatureUnit", base: "TempUnitEnum",
            access: { rw: "W" }, conformance: [ "O" ]
        }),

        DatatypeElement({
            name: "TempUnitEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "fahrenheit",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "fahrenheit",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "celsius",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "celsius",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "kelvin",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "kelvin",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                })
            ]
        }),

        DatatypeElement({
            name: "UnitLocalizationFeature", base: "map32",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "temperatureUnit",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "temperatureUnit",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                })
            ]
        })
    ]
}));
