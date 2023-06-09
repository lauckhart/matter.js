/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0050, name: "ModeSelect",
    description: "Mode Select",
    details: "Attributes and commands for selecting a mode from a list of supported options.",
    children: [
        AttributeElement({
            id: 0x0000, name: "ModeDescription", base: "Description",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0001, name: "StandardNamespace", base: "StandardNamespace",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0002, name: "SupportedModes", base: "SupportedModes",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0003, name: "CurrentMode", base: "CurrentMode",
            access: { rw: "R" }, conformance: [ "M" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x0004, name: "StartUpMode", base: "StartUpMode",
            access: { rw: "W" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0005, name: "OnMode", base: "OnMode",
            access: { rw: "W" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        CommandElement({
            id: 0x0000, name: "ChangeToMode", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "NewMode", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NewMode", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}));
