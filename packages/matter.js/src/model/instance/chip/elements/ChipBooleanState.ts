/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, EventElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0045, name: "BooleanState",
    description: "Boolean State",
    details: "This cluster provides an interface to a boolean state called StateValue.",
    children: [
        AttributeElement({
            id: 0x0000, name: "stateValue", base: "bool",
            access: { rw: "R" }, conformance: [ "M" ], quality: { reportable: true }
        }),

        EventElement({
            id: 0x0000, name: "StateChange",
            access: { rw: "R" }, conformance: [ "M" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "stateValue", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "stateValue", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}));
