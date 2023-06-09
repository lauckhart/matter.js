/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0029, name: "OtaSoftwareUpdateProvider",
    classification: "node",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F"
        }),

        CommandElement({
            id: 0x0000, name: "QueryImage",
            conformance: "M", direction: "request", response: "QueryImageResponse",
            xref: { section: "11.19.6.5", document: "core", version: "1.1" }
        }),

        CommandElement({
            id: 0x0001, name: "QueryImageResponse",
            conformance: "M", direction: "response",
            xref: { section: "11.19.6.5", document: "core", version: "1.1" }
        }),

        CommandElement({
            id: 0x0002, name: "ApplyUpdateRequest",
            conformance: "M", direction: "request", response: "ApplyUpdateResponse",
            xref: { section: "11.19.6.5", document: "core", version: "1.1" }
        }),

        CommandElement({
            id: 0x0003, name: "ApplyUpdateResponse",
            conformance: "M", direction: "response",
            xref: { section: "11.19.6.5", document: "core", version: "1.1" }
        }),

        CommandElement({
            id: 0x0004, name: "NotifyUpdateApplied",
            conformance: "M", direction: "request", response: "status",
            xref: { section: "11.19.6.5", document: "core", version: "1.1" }
        })
    ]
}))