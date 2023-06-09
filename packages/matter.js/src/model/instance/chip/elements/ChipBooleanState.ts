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
            id: 0x0000, name: "StateValue", base: "StateValue",
            access: { rw: "R" }, conformance: [ "M" ], quality: { reportable: true }
        }),

        EventElement({
            id: 0x0000, name: "StateChange", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "StateValue", base: "boolean",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "StateValue", base: "boolean",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}));
