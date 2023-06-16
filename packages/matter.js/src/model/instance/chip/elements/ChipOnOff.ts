/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0006, name: "OnOff",
    description: "On/Off",
    details: "Attributes and commands for switching devices between 'On' and 'Off' states.",
    children: [
        AttributeElement({
            id: 0x0000, name: "OnOff", type: "bool",
            conformance: "M", default: true, quality: "P"
        }),

        AttributeElement({
            id: 0x4000, name: "GlobalSceneControl", type: "bool",
            conformance: "O", default: true
        }),

        AttributeElement({
            id: 0x4001, name: "OnTime", type: "uint16",
            access: "RW", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x4002, name: "OffWaitTime", type: "uint16",
            access: "RW", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x4003, name: "StartUpOnOff", type: "OnOffStartUpOnOff",
            access: "RW VM", conformance: "O", quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "Off",
            conformance: "M", direction: "request"
        }),

        CommandElement({
            id: 0x0001, name: "On",
            conformance: "M", direction: "request"
        }),

        CommandElement({
            id: 0x0002, name: "Toggle",
            conformance: "M", direction: "request"
        }),

        CommandElement({
            id: 0x0040, name: "OffWithEffect",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "EffectIdentifier", type: "OnOffEffectIdentifier",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "EffectVariant", type: "uint8",
                    conformance: "M"
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
                    name: "OnOffControl", type: "OnOffControl",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OnTime", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OffWaitTime", type: "uint16",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OnOffStartUpOnOff", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Off",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "On",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "TogglePreviousOnOff",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OnOffEffectIdentifier", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "DelayedAllOff",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "DyingLight",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OnOffDelayedAllOffEffectVariant", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "FadeToOffIn0P8Seconds",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "NoFade",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "50PercentDimDownIn0P8SecondsThenFadeToOffIn12Seconds",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OnOffDyingLightEffectVariant", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "20PercenterDimUpIn0P5SecondsThenFadeToOffIn1Second",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OnOffControl", type: "map8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "AcceptOnlyWhenOn",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OnOffFeature", type: "map32",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Lighting",
                    conformance: "M"
                })
            ]
        })
    ]
}));
