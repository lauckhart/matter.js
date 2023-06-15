/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0003, name: "Identify",
    description: "Identify",
    details: "Attributes and commands for putting a device into Identification mode (e.g. flashing a light).",
    children: [
        AttributeElement({
            id: 0x0000, name: "IdentifyTime", base: "uint16",
            access: "RW", conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0001, name: "IdentifyType", base: "enum8",
            conformance: "M", default: 0
        }),

        CommandElement({
            id: 0x0000, name: "Identify",
            access: "R M", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "IdentifyTime", base: "uint16",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0040, name: "TriggerEffect",
            access: "R M", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "EffectIdentifier", base: "IdentifyEffectIdentifier",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "EffectVariant", base: "IdentifyEffectVariant",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "IdentifyIdentifyType", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "None",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "VisibleLight",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "VisibleLed",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "AudibleBeep",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Display",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Actuator",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "IdentifyEffectIdentifier", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Blink",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Breathe",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Okay",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000b, name: "ChannelChange",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x00fe, name: "FinishEffect",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x00ff, name: "StopEffect",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "IdentifyEffectVariant", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Default",
                    conformance: "M"
                })
            ]
        })
    ]
}));
