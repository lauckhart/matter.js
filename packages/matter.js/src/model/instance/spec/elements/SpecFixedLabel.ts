/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0040, name: "FixedLabel",
    classification: "endpoint",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", constraint: "min 1", default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", default: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "LabelList", base: "list",
            access: "R V", default: "empty", quality: "N",
            xref: { document: "core", section: "9.8.4", version: "1.1" },
            children: [
                DatatypeElement({
                    name: "entry", base: "LabelStruct"
                })
            ]
        })
    ]
}));
