/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { ClusterElement, AttributeElement, EventElement } from "../../index.js";

Matter.children.push(ClusterElement({
    id: 0x0045, name: "BooleanState",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "StateValue", base: "bool",
            access: "R V", conformance: "M", constraint: "", default: {}, quality: "P",
            details: "This represents a Boolean state.",
            xref: { section: "1.7.4.1", document: "cluster", version: "1.1" }
        }),

        EventElement({
            id: 0x0000, name: "StateChange",
            access: "V", conformance: "O", priority: "info",
            details: "This event SHALL be generated when the StateValue attribute changes.",
            xref: { section: "1.7.5.1", document: "cluster", version: "1.1" }
        })
    ]
}))
