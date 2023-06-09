/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0509, name: "KeypadInput",
    description: "Keypad Input",
    details: "This cluster provides an interface for controlling a device like a TV using action commands such as UP, DOWN, and SELECT.",
    children: [
        CommandElement({
            id: 0x0000, name: "SendKey", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request", response: "SendKeyResponse",
            children: [
                DatatypeElement({
                    name: "KeyCode", base: "CecKeyCode",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "KeyCode", base: "CecKeyCode",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "SendKeyResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "KeypadInputStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Status", base: "KeypadInputStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}));
