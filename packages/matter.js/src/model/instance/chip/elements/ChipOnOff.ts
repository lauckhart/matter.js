/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0006, name: "OnOff",
    description: "On/Off",
    details: "Attributes and commands for switching devices between 'On' and 'Off' states.",
    children: [
        AttributeElement({
            id: 0x0000, name: "OnOff", base: "bool",
            access: "R", conformance: "M", default: true, quality: "P"
        }),

        AttributeElement({
            id: 0x4000, name: "GlobalSceneControl", base: "bool",
            access: "R", conformance: "O", default: true
        }),

        AttributeElement({
            id: 0x4001, name: "OnTime", base: "uint16",
            access: "W", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x4002, name: "OffWaitTime", base: "uint16",
            access: "W", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x4003, name: "StartUpOnOff", base: "OnOffStartUpOnOff",
            access: "W VM", conformance: "O", quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "Off",
            access: "R", conformance: "M", direction: "request"
        }),

        CommandElement({
            id: 0x0001, name: "On",
            access: "R", conformance: "M", direction: "request"
        }),

        CommandElement({
            id: 0x0002, name: "Toggle",
            access: "R", conformance: "M", direction: "request"
        }),

        CommandElement({
            id: 0x0040, name: "OffWithEffect",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "EffectIdentifier", base: "OnOffEffectIdentifier",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "EffectVariant", base: "uint8",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0041, name: "OnWithRecallGlobalScene",
            access: "R", conformance: "O", direction: "request"
        }),

        CommandElement({
            id: 0x0042, name: "OnWithTimedOff",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "OnOffControl", base: "OnOffControl",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OnTime", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OffWaitTime", base: "uint16",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OnOffStartUpOnOff", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Off",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "On",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "TogglePreviousOnOff",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OnOffEffectIdentifier", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "DelayedAllOff",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "DyingLight",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OnOffDelayedAllOffEffectVariant", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "FadeToOffIn0P8Seconds",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "NoFade",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "50PercentDimDownIn0P8SecondsThenFadeToOffIn12Seconds",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OnOffDyingLightEffectVariant", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "20PercenterDimUpIn0P5SecondsThenFadeToOffIn1Second",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OnOffControl", base: "map8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "AcceptOnlyWhenOn",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OnOffFeature", base: "map32",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Lighting",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
