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
            access: "RW", default: 0
        }),

        AttributeElement({
            id: 0x0001, name: "IdentifyType", base: "enum8",
            default: 0
        }),

        CommandElement({
            id: 0x0000, name: "Identify",
            access: "R M", direction: "request",
            children: [
                DatatypeElement({
                    name: "IdentifyTime", base: "uint16"
                })
            ]
        }),

        CommandElement({
            id: 0x0040, name: "TriggerEffect",
            access: "R M", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "EffectIdentifier", base: "IdentifyEffectIdentifier"
                }),

                DatatypeElement({
                    name: "EffectVariant", base: "IdentifyEffectVariant"
                })
            ]
        }),

        DatatypeElement({
            name: "IdentifyIdentifyType", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "None"
                }),

                DatatypeElement({
                    id: 0x0001, name: "VisibleLight"
                }),

                DatatypeElement({
                    id: 0x0002, name: "VisibleLed"
                }),

                DatatypeElement({
                    id: 0x0003, name: "AudibleBeep"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Display"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Actuator"
                })
            ]
        }),

        DatatypeElement({
            name: "IdentifyEffectIdentifier", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Blink"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Breathe"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Okay"
                }),

                DatatypeElement({
                    id: 0x000b, name: "ChannelChange"
                }),

                DatatypeElement({
                    id: 0x00fe, name: "FinishEffect"
                }),

                DatatypeElement({
                    id: 0x00ff, name: "StopEffect"
                })
            ]
        }),

        DatatypeElement({
            name: "IdentifyEffectVariant", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Default"
                })
            ]
        })
    ]
}));
