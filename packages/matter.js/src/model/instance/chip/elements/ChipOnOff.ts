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
            default: true, quality: "P"
        }),

        AttributeElement({
            id: 0x4000, name: "GlobalSceneControl", base: "bool",
            conformance: "O", default: true
        }),

        AttributeElement({
            id: 0x4001, name: "OnTime", base: "uint16",
            access: "RW", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x4002, name: "OffWaitTime", base: "uint16",
            access: "RW", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x4003, name: "StartUpOnOff", base: "OnOffStartUpOnOff",
            access: "RW VM", conformance: "O", quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "Off",
            direction: "request"
        }),

        CommandElement({
            id: 0x0001, name: "On",
            direction: "request"
        }),

        CommandElement({
            id: 0x0002, name: "Toggle",
            direction: "request"
        }),

        CommandElement({
            id: 0x0040, name: "OffWithEffect",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "EffectIdentifier", base: "OnOffEffectIdentifier"
                }),

                DatatypeElement({
                    name: "EffectVariant", base: "uint8"
                })
            ]
        }),

        CommandElement({
            id: 0x0041, name: "OnWithRecallGlobalScene",
            conformance: "O", direction: "request"
        }),

        CommandElement({
            id: 0x0042, name: "OnWithTimedOff",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "OnOffControl", base: "OnOffControl"
                }),

                DatatypeElement({
                    name: "OnTime", base: "uint16"
                }),

                DatatypeElement({
                    name: "OffWaitTime", base: "uint16"
                })
            ]
        }),

        DatatypeElement({
            name: "OnOffStartUpOnOff", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Off"
                }),

                DatatypeElement({
                    id: 0x0001, name: "On"
                }),

                DatatypeElement({
                    id: 0x0002, name: "TogglePreviousOnOff"
                })
            ]
        }),

        DatatypeElement({
            name: "OnOffEffectIdentifier", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "DelayedAllOff"
                }),

                DatatypeElement({
                    id: 0x0001, name: "DyingLight"
                })
            ]
        }),

        DatatypeElement({
            name: "OnOffDelayedAllOffEffectVariant", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "FadeToOffIn0P8Seconds"
                }),

                DatatypeElement({
                    id: 0x0001, name: "NoFade"
                }),

                DatatypeElement({
                    id: 0x0002, name: "50PercentDimDownIn0P8SecondsThenFadeToOffIn12Seconds"
                })
            ]
        }),

        DatatypeElement({
            name: "OnOffDyingLightEffectVariant", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "20PercenterDimUpIn0P5SecondsThenFadeToOffIn1Second"
                })
            ]
        }),

        DatatypeElement({
            name: "OnOffControl", base: "map8",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "AcceptOnlyWhenOn"
                })
            ]
        }),

        DatatypeElement({
            name: "OnOffFeature", base: "map32",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Lighting"
                })
            ]
        })
    ]
}));
