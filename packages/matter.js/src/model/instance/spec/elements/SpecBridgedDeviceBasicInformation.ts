/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../SpecMatter.js";
import { ClusterElement, AttributeElement, EventElement } from "../../../elements/index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0039, name: "BridgedDeviceBasicInformation",
    classification: "endpoint",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: "min 1", default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F"
        }),

        EventElement({
            id: 0x0000, name: "StartUp",
            conformance: "O", priority: "critical",
            xref: { document: "core", section: "9.13.5", version: "1.1" }
        }),

        EventElement({
            id: 0x0001, name: "ShutDown",
            conformance: "O", priority: "critical",
            xref: { document: "core", section: "9.13.5", version: "1.1" }
        }),

        EventElement({
            id: 0x0002, name: "Leave",
            conformance: "O", priority: "critical",
            xref: { document: "core", section: "9.13.5", version: "1.1" }
        }),

        EventElement({
            id: 0x0003, name: "ReachableChanged",
            conformance: "M", priority: "critical",
            details: "This event SHALL be generated when there is a change in the Reachable attribute. Its purpose is to provide an indication towards interested parties that the reachability of a bridged device (over the non-Matter network) has changed, so they MAY take appropriate action.",
            xref: { document: "core", section: "9.13.5.1", version: "1.1" }
        })
    ]
}));
