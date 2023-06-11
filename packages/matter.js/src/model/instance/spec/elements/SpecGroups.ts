/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0004, name: "Groups",
    classification: "endpoint",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, value: 4, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", value: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "NameSupport", base: "map8",
            access: "R V", conformance: "M", constraint: "desc", value: "0", quality: "F",
            details: "This attribute provides legacy, read-only access to whether the Group Names feature is supported. The most significant bit, bit 7, SHALL be equal to bit 0 of the FeatureMap attribute. All other bits SHALL be 0.",
            xref: { section: "1.3.6.1", document: "cluster", version: "1.1" }
        })
    ]
}));
