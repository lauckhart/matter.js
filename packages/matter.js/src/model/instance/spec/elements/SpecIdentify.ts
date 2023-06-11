/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0003, name: "Identify",
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
            id: 0x0000, name: "IdentifyTime", base: "uint16",
            access: "RW VO", conformance: "M", value: "0",
            details: "This attribute specifies the remaining length of time, in seconds, that the endpoint will continue to identify itself.",
            xref: { section: "1.2.5.1", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "IdentifyType", base: "enum8",
            access: "R V", conformance: "M*", constraint: "desc", value: "0",
            details: "This attribute specifies how the identification state is presented to the user. This field SHALL contain one of the values listed below:",
            xref: { section: "1.2.5.2", document: "cluster", version: "1.1" }
        })
    ]
}));
