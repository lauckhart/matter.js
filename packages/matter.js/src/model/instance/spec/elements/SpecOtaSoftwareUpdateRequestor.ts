/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x002a, name: "OtaSoftwareUpdateRequestor",
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
            id: 0x0000, name: "DefaultOtaProviders", base: "list[ProviderLocationStruct]",
            access: "RW F VA", conformance: "M", constraint: "desc", value: "[]",
            xref: { section: "11.19.7.5", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "UpdatePossible", base: "bool",
            access: "R V", conformance: "M", value: "True",
            xref: { section: "11.19.7.5", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "UpdateState", base: "UpdateStateEnum",
            access: "R V", conformance: "M", value: "Unknown",
            xref: { section: "11.19.7.5", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "UpdateStateProgress", base: "uint8",
            access: "R V", conformance: "M", constraint: "0 to 100", value: "null", quality: "X",
            xref: { section: "11.19.7.5", document: "core", version: "1.1" }
        })
    ]
}));
