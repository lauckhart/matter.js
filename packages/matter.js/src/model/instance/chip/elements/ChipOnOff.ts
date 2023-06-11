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
            id: 0x0000, name: "onOff", base: "bool",
            access: { rw: "R" }, conformance: [ "M" ], quality: { reportable: true }, value: "0"
        }),

        AttributeElement({
            id: 0x4000, name: "globalSceneControl", base: "bool",
            access: { rw: "R" }, conformance: [ "O" ], value: "1"
        }),

        AttributeElement({
            id: 0x4001, name: "onTime", base: "uint16",
            access: { rw: "W" }, conformance: [ "O" ], value: "0"
        }),

        AttributeElement({
            id: 0x4002, name: "offWaitTime", base: "uint16",
            access: { rw: "W" }, conformance: [ "O" ], value: "0"
        }),

        AttributeElement({
            id: 0x4003, name: "startUpOnOff", base: "OnOffStartUpOnOff",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        CommandElement({
            id: 0x0000, name: "Off",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request"
        }),

        CommandElement({
            id: 0x0001, name: "On",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request"
        }),

        CommandElement({
            id: 0x0002, name: "Toggle",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request"
        }),

        CommandElement({
            id: 0x0040, name: "OffWithEffect",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "effectIdentifier", base: "OnOffEffectIdentifier",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "effectIdentifier", base: "OnOffEffectIdentifier",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "effectVariant", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "effectVariant", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0041, name: "OnWithRecallGlobalScene",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request"
        }),

        CommandElement({
            id: 0x0042, name: "OnWithTimedOff",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "onOffControl", base: "OnOffControl",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "onOffControl", base: "OnOffControl",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "onTime", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "onTime", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "offWaitTime", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "offWaitTime", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "OnOffStartUpOnOff", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "off",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "off",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "on",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "on",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "togglePreviousOnOff",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "togglePreviousOnOff",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                })
            ]
        }),

        DatatypeElement({
            name: "OnOffEffectIdentifier", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "delayedAllOff",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "delayedAllOff",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "dyingLight",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "dyingLight",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                })
            ]
        }),

        DatatypeElement({
            name: "OnOffDelayedAllOffEffectVariant", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "fadeToOffIn0P8Seconds",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "fadeToOffIn0P8Seconds",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "noFade",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "noFade",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "50PercentDimDownIn0P8SecondsThenFadeToOffIn12Seconds",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "50PercentDimDownIn0P8SecondsThenFadeToOffIn12Seconds",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                })
            ]
        }),

        DatatypeElement({
            name: "OnOffDyingLightEffectVariant", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "20PercenterDimUpIn0P5SecondsThenFadeToOffIn1Second",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "20PercenterDimUpIn0P5SecondsThenFadeToOffIn1Second",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                })
            ]
        }),

        DatatypeElement({
            name: "OnOffControl", base: "map8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "acceptOnlyWhenOn",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "acceptOnlyWhenOn",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                })
            ]
        }),

        DatatypeElement({
            name: "OnOffFeature", base: "map32",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "lighting",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "lighting",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                })
            ]
        })
    ]
}));
