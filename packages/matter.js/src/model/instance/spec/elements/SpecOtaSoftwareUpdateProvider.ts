/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../index.js";
import { ClusterElement, AttributeElement, CommandElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0029, name: "OtaSoftwareUpdateProvider",
    classification: "node",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", constraint: "min 1", default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", default: 0, quality: "F"
        }),

        CommandElement({
            id: 0x0000, name: "QueryImage",
            direction: "request", response: "QueryImageResponse",
            xref: { document: "core", section: "11.19.6.5", version: "1.1" }
        }),

        CommandElement({
            id: 0x0001, name: "QueryImageResponse",
            direction: "response",
            xref: { document: "core", section: "11.19.6.5", version: "1.1" }
        }),

        CommandElement({
            id: 0x0002, name: "ApplyUpdateRequest",
            direction: "request", response: "ApplyUpdateResponse",
            xref: { document: "core", section: "11.19.6.5", version: "1.1" }
        }),

        CommandElement({
            id: 0x0003, name: "ApplyUpdateResponse",
            direction: "response",
            xref: { document: "core", section: "11.19.6.5", version: "1.1" }
        }),

        CommandElement({
            id: 0x0004, name: "NotifyUpdateApplied",
            direction: "request", response: "status",
            xref: { document: "core", section: "11.19.6.5", version: "1.1" }
        })
    ]
}));
