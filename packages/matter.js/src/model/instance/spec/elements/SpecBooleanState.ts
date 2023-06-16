/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../SpecMatter.js";
import { ClusterElement, AttributeElement, EventElement } from "../../../elements/index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0045, name: "BooleanState",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", type: "uint16",
            access: "R V", conformance: "M", constraint: "min 1", default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", type: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "StateValue", type: "bool",
            access: "R V", conformance: "M", default: false, quality: "P",
            details: "This represents a Boolean state",
            xref: { document: "cluster", section: "1.7.4.1", version: "1.1" }
        }),

        EventElement({
            id: 0x0000, name: "StateChange",
            access: "V", conformance: "O", priority: "info",
            details: "This event SHALL be generated when the StateValue attribute changes",
            xref: { document: "cluster", section: "1.7.5.1", version: "1.1" }
        })
    ]
}));
