/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0008, name: "LevelControl",
    description: "Level Control",
    details: "Attributes and commands for controlling devices that can be set to a level between fully 'On' and fully 'Off.'",
    children: [
        AttributeElement({
            id: 0x0000, name: "CurrentLevel", base: "uint8",
            access: "R", conformance: "M", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0001, name: "LevelControlRemainingTime", base: "uint16",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0002, name: "MinimumLevel", base: "uint8",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0003, name: "MaximumLevel", base: "uint8",
            access: "R", conformance: "O", default: 254
        }),

        AttributeElement({
            id: 0x0004, name: "CurrentFrequency", base: "uint16",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0005, name: "MinFrequency", base: "uint16",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0006, name: "MaxFrequency", base: "uint16",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0010, name: "OnOffTransitionTime", base: "uint16",
            access: "W", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0011, name: "OnLevel", base: "uint8",
            access: "W", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0012, name: "OnTransitionTime", base: "uint16",
            access: "W", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0013, name: "OffTransitionTime", base: "uint16",
            access: "W", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0014, name: "DefaultMoveRate", base: "uint8",
            access: "W", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x000f, name: "Options", base: "LevelControlOptions",
            access: "W", conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x4000, name: "StartUpCurrentLevel", base: "uint8",
            access: "W VM", conformance: "O", quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "MoveToLevel",
            access: "R", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "Level", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", base: "uint16",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "OptionsMask", base: "LevelControlOptions",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", base: "LevelControlOptions",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "Move",
            access: "R", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "MoveMode", base: "MoveMode",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Rate", base: "uint8",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "OptionsMask", base: "LevelControlOptions",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", base: "LevelControlOptions",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "Step",
            access: "R", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "StepMode", base: "StepMode",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "StepSize", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", base: "uint16",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "OptionsMask", base: "LevelControlOptions",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", base: "LevelControlOptions",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "Stop",
            access: "R", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "OptionsMask", base: "LevelControlOptions",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", base: "LevelControlOptions",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "MoveToLevelWithOnOff",
            access: "R", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "Level", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", base: "uint16",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "OptionsMask", base: "LevelControlOptions",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", base: "LevelControlOptions",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "MoveWithOnOff",
            access: "R", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "MoveMode", base: "MoveMode",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Rate", base: "uint8",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "OptionsMask", base: "LevelControlOptions",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", base: "LevelControlOptions",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0006, name: "StepWithOnOff",
            access: "R", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "StepMode", base: "StepMode",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "StepSize", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", base: "uint16",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "OptionsMask", base: "LevelControlOptions",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", base: "LevelControlOptions",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0007, name: "StopWithOnOff",
            access: "R", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "OptionsMask", base: "LevelControlOptions",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", base: "LevelControlOptions",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0008, name: "MoveToClosestFrequency",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "Frequency", base: "uint16",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "LevelControlFeature", base: "map32",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "OnOff",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Lighting",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Frequency",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "MoveMode", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Up",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Down",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "StepMode", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Up",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Down",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "LevelControlOptions", base: "map8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "ExecuteIfOff",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "CoupleColorTempToLevel",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
