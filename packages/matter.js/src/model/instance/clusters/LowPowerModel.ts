/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { ClusterElement, AttributeElement, CommandElement } from "../../index.js";

Matter.children.push(ClusterElement({
    id: 0x0508, name: "LowPower",
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

        CommandElement({
            id: 0x0000, name: "Sleep",
            access: "O", conformance: "M", direction: "request", response: "status",
            details: "This command shall put the device into low power mode.",
            xref: { section: "1.9.3.1", document: "cluster", version: "1.1" }
        })
    ]
}))
