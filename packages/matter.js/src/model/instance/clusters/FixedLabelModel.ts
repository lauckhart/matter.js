/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { ClusterElement, AttributeElement } from "../../index.js";

Matter.children.push(ClusterElement({
    id: 0x0040, name: "FixedLabel",
    classification: "endpoint",
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
            id: 0x0000, name: "LabelList", base: "list[LabelStruct]",
            access: "R V", conformance: "M", constraint: "", default: "empty", quality: "N",
            xref: { section: "9.8.4", document: "core", version: "1.1" }
        })
    ]
}))
