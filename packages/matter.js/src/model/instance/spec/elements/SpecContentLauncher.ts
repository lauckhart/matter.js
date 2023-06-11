/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x050a, name: "ContentLauncher",
    classification: "application",
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
            id: 0x0000, name: "AcceptHeader", base: "list[string]",
            access: "R V", conformance: "UP", constraint: "max 100[max 1024]", value: "empty", quality: "N",
            details: "This list provides list of content types supported by the Video Player or Content App in the form of entries in the HTTP \"Accept\" request header.",
            xref: { section: "6.7.3.1", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "SupportedStreamingProtocols", base: "map32",
            access: "R V", conformance: "UP", constraint: "", value: "0", quality: "N",
            details: "This attribute provides information about supported streaming protocols.",
            xref: { section: "6.7.3.2", document: "cluster", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "StatusEnum", base: "enum8",
            details: "StatusEnum Data Type is derived from enum8.",
            xref: { section: "6.7.5.1", document: "cluster", version: "1.1" }
        })
    ]
}));
