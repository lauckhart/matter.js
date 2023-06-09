/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0006, name: "OnOff",
    description: "On/Off",
    details: "Attributes and commands for switching devices between 'On' and 'Off' states.",
    children: [
        AttributeElement({
            id: 0x0000, name: "OnOff", base: "OnOff",
            access: { rw: "R" }, conformance: [ "M" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x4000, name: "GlobalSceneControl", base: "GlobalSceneControl",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x4001, name: "OnTime", base: "OnTime",
            access: { rw: "W" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x4002, name: "OffWaitTime", base: "OffWaitTime",
            access: { rw: "W" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x4003, name: "StartUpOnOff", base: "StartUpOnOff",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        CommandElement({
            id: 0x0000, name: "Off", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request"
        }),

        CommandElement({
            id: 0x0001, name: "On", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request"
        }),

        CommandElement({
            id: 0x0002, name: "Toggle", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request"
        }),

        CommandElement({
            id: 0x0040, name: "OffWithEffect", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "EffectIdentifier", base: "OnOffEffectIdentifier",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "EffectIdentifier", base: "OnOffEffectIdentifier",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "EffectVariant", base: "int8u",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "EffectVariant", base: "int8u",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0041, name: "OnWithRecallGlobalScene", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request"
        }),

        CommandElement({
            id: 0x0042, name: "OnWithTimedOff", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "OnOffControl", base: "OnOffControl",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "OnOffControl", base: "OnOffControl",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "OnTime", base: "int16u",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "OnTime", base: "int16u",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "OffWaitTime", base: "int16u",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "OffWaitTime", base: "int16u",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}));
