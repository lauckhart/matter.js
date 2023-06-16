/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, EventElement, DatatypeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0045, name: "BooleanState",
    description: "Boolean State",
    details: "This cluster provides an interface to a boolean state called StateValue.",
    children: [
        AttributeElement({
            id: 0x0000, name: "StateValue", type: "bool",
            conformance: "M", quality: "P"
        }),

        EventElement({
            id: 0x0000, name: "StateChange",
            conformance: "M", priority: "info",
            children: [
                DatatypeElement({
                    name: "StateValue", type: "bool",
                    conformance: "M"
                })
            ]
        })
    ]
}));
