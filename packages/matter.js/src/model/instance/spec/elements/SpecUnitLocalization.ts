/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../SpecMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../elements/index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x002d, name: "UnitLocalization",
    classification: "node",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", type: "uint16",
            access: "R V", conformance: "M", constraint: "min 1", default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", type: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "TEMP",
                    description: "The Node can be configured to use different units of temperature when conveying values to a user.",
                    xref: { document: "core", section: "11.5.4", version: "1.1" }
                })
            ]
        }),

        AttributeElement({
            id: 0x0000, name: "TemperatureUnit", type: "TempUnitEnum",
            access: "RW VM", conformance: "TEMP", default: "null", quality: "X N",
            details: "The TemperatureUnit attribute SHALL indicate the unit for the Node to " +
                     "use only when conveying temperature in communication to the user. If " +
                     "provided, this value SHALL take priority over any unit implied through" +
                     " the ActiveLocale Attribute",
            xref: { document: "core", section: "11.5.6.1", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "TempUnitEnum", type: "enum8",
            details: "This data type is derived from enum8",
            xref: { document: "core", section: "11.5.5.1", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Fahrenheit",
                    conformance: "M",
                    xref: { document: "core", section: "11.5.5.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "Celsius",
                    conformance: "M",
                    xref: { document: "core", section: "11.5.5.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "Kelvin",
                    conformance: "M",
                    xref: { document: "core", section: "11.5.5.1", version: "1.1" }
                })
            ]
        })
    ]
}));
