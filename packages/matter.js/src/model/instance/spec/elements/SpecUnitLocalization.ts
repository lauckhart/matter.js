/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x002d, name: "UnitLocalization",
    classification: "node",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, value: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", value: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "TemperatureUnit", base: "TempUnitEnum",
            access: "RW VM", conformance: "TEMP", value: "null", quality: "X N",
            details: "The TemperatureUnit attribute SHALL indicate the unit for the Node to use only when conveying temperature in communication to the user. If provided, this value SHALL take priority over any unit implied through the ActiveLocale Attribute.",
            xref: { section: "11.5.6.1", document: "core", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "TempUnitEnum", base: "enum8",
            details: "This data type is derived from enum8.",
            xref: { section: "11.5.5.1", document: "core", version: "1.1" }
        })
    ]
}));
