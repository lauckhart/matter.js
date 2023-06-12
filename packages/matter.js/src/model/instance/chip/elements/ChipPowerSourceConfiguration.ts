/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x002e, name: "PowerSourceConfiguration",
    description: "Power Source Configuration",
    details: "This cluster is used to describe the configuration and capabilities of a Device's power system.",
    children: [
        AttributeElement({
            id: 0x0000, name: "Sources", base: "list",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "uint8"
                })
            ]
        })
    ]
}));
