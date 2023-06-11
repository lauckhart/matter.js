/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0003, name: "Identify",
    description: "Identify",
    details: "Attributes and commands for putting a device into Identification mode (e.g. flashing a light).",
    children: [
        AttributeElement({
            id: 0x0000, name: "identifyTime", base: "uint16",
            access: { rw: "W" }, conformance: [ "M" ], value: "0x0"
        }),

        AttributeElement({
            id: 0x0001, name: "identifyType", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ], value: "0x0"
        }),

        CommandElement({
            id: 0x0000, name: "Identify",
            access: { rw: "R", writePriv: "M" }, conformance: [ "M" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "identifyTime", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "identifyTime", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0040, name: "TriggerEffect",
            access: { rw: "R", writePriv: "M" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "effectIdentifier", base: "IdentifyEffectIdentifier",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "effectIdentifier", base: "IdentifyEffectIdentifier",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "effectVariant", base: "IdentifyEffectVariant",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "effectVariant", base: "IdentifyEffectVariant",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "IdentifyIdentifyType", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "none",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "none",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "visibleLight",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "visibleLight",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "visibleLed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "visibleLed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "audibleBeep",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "audibleBeep",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "display",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "display",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "actuator",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                }),

                DatatypeElement({
                    name: "actuator",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                })
            ]
        }),

        DatatypeElement({
            name: "IdentifyEffectIdentifier", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "blink",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "blink",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "breathe",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "breathe",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "okay",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "okay",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "channelChange",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0B"
                }),

                DatatypeElement({
                    name: "channelChange",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0B"
                }),

                DatatypeElement({
                    name: "finishEffect",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0xFE"
                }),

                DatatypeElement({
                    name: "finishEffect",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0xFE"
                }),

                DatatypeElement({
                    name: "stopEffect",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0xFF"
                }),

                DatatypeElement({
                    name: "stopEffect",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0xFF"
                })
            ]
        }),

        DatatypeElement({
            name: "IdentifyEffectVariant", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "default",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "default",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                })
            ]
        })
    ]
}));
