/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../SpecMatter.js";
import { ClusterElement, AttributeElement } from "../../../elements/index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0301, name: "BallastConfiguration",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", type: "uint16",
            access: "R V", conformance: "M", constraint: "min 1", default: 4, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", type: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F"
        })
    ]
}));
