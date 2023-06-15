/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0008, name: "LevelControl",
    description: "Level Control",
    details: "Attributes and commands for controlling devices that can be set to a level between fully 'On' and fully 'Off.'",
    children: [
        AttributeElement({
            id: 0x0000, name: "CurrentLevel", base: "uint8",
            conformance: "M", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0001, name: "LevelControlRemainingTime", base: "uint16",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0002, name: "MinimumLevel", base: "uint8",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0003, name: "MaximumLevel", base: "uint8",
            conformance: "O", default: 254
        }),

        AttributeElement({
            id: 0x0004, name: "CurrentFrequency", base: "uint16",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0005, name: "MinFrequency", base: "uint16",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0006, name: "MaxFrequency", base: "uint16",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0010, name: "OnOffTransitionTime", base: "uint16",
            access: "RW", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0011, name: "OnLevel", base: "uint8",
            access: "RW", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0012, name: "OnTransitionTime", base: "uint16",
            access: "RW", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0013, name: "OffTransitionTime", base: "uint16",
            access: "RW", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0014, name: "DefaultMoveRate", base: "uint8",
            access: "RW", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x000f, name: "Options", base: "LevelControlOptions",
            access: "RW", conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x4000, name: "StartUpCurrentLevel", base: "uint8",
            access: "RW VM", conformance: "O", quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "MoveToLevel",
            conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "Level", base: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", base: "uint16",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "OptionsMask", base: "LevelControlOptions",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", base: "LevelControlOptions",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "Move",
            conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "MoveMode", base: "MoveMode",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Rate", base: "uint8",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "OptionsMask", base: "LevelControlOptions",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", base: "LevelControlOptions",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "Step",
            conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "StepMode", base: "StepMode",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "StepSize", base: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", base: "uint16",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "OptionsMask", base: "LevelControlOptions",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", base: "LevelControlOptions",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "Stop",
            conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "OptionsMask", base: "LevelControlOptions",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", base: "LevelControlOptions",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "MoveToLevelWithOnOff",
            conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "Level", base: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", base: "uint16",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "OptionsMask", base: "LevelControlOptions",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", base: "LevelControlOptions",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "MoveWithOnOff",
            conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "MoveMode", base: "MoveMode",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Rate", base: "uint8",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "OptionsMask", base: "LevelControlOptions",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", base: "LevelControlOptions",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0006, name: "StepWithOnOff",
            conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "StepMode", base: "StepMode",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "StepSize", base: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", base: "uint16",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "OptionsMask", base: "LevelControlOptions",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", base: "LevelControlOptions",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0007, name: "StopWithOnOff",
            conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "OptionsMask", base: "LevelControlOptions",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", base: "LevelControlOptions",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0008, name: "MoveToClosestFrequency",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "Frequency", base: "uint16",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "LevelControlFeature", base: "map32",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "OnOff",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Lighting",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Frequency",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "MoveMode", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Up",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Down",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "StepMode", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Up",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Down",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "LevelControlOptions", base: "map8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "ExecuteIfOff",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "CoupleColorTempToLevel",
                    conformance: "M"
                })
            ]
        })
    ]
}));
