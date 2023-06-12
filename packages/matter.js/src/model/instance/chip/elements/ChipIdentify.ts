/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0003, name: "Identify",
    description: "Identify",
    details: "Attributes and commands for putting a device into Identification mode (e.g. flashing a light).",
    children: [
        AttributeElement({
            id: 0x0000, name: "IdentifyTime", base: "uint16",
            access: "W", conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0001, name: "IdentifyType", base: "enum8",
            access: "R", conformance: "M", default: 0
        }),

        CommandElement({
            id: 0x0000, name: "Identify",
            access: "R M", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "IdentifyTime", base: "uint16",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0040, name: "TriggerEffect",
            access: "R M", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "EffectIdentifier", base: "IdentifyEffectIdentifier",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "EffectVariant", base: "IdentifyEffectVariant",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "IdentifyIdentifyType", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "None",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "VisibleLight",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "VisibleLed",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "AudibleBeep",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Display",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Actuator",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "IdentifyEffectIdentifier", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Blink",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Breathe",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Okay",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000b, name: "ChannelChange",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x00fe, name: "FinishEffect",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x00ff, name: "StopEffect",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "IdentifyEffectVariant", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Default",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
