/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0300, name: "ColorControl",
    description: "Color Control",
    details: "Attributes and commands for controlling the color properties of a color-capable light.",
    children: [
        AttributeElement({
            id: 0x0000, name: "ColorControlCurrentHue", type: "uint8",
            conformance: "O", default: 0, quality: "P"
        }),

        AttributeElement({
            id: 0x0001, name: "ColorControlCurrentSaturation", type: "uint8",
            conformance: "O", default: 0, quality: "P"
        }),

        AttributeElement({
            id: 0x0002, name: "ColorControlRemainingTime", type: "uint16",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0003, name: "ColorControlCurrentX", type: "uint16",
            conformance: "O", default: 24939, quality: "P"
        }),

        AttributeElement({
            id: 0x0004, name: "ColorControlCurrentY", type: "uint16",
            conformance: "O", default: 24701, quality: "P"
        }),

        AttributeElement({
            id: 0x0005, name: "ColorControlDriftCompensation", type: "enum8",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0006, name: "ColorControlCompensationText", type: "string",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0007, name: "ColorControlColorTemperature", type: "uint16",
            conformance: "O", default: 250, quality: "P"
        }),

        AttributeElement({
            id: 0x0008, name: "ColorControlColorMode", type: "enum8",
            conformance: "M", default: 1
        }),

        AttributeElement({
            id: 0x000f, name: "ColorControlOptions", type: "map8",
            access: "RW", conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0010, name: "ColorControlNumberOfPrimaries", type: "uint8",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0011, name: "ColorControlPrimary1X", type: "uint16",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0012, name: "ColorControlPrimary1Y", type: "uint16",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0013, name: "ColorControlPrimary1Intensity", type: "uint8",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0015, name: "ColorControlPrimary2X", type: "uint16",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0016, name: "ColorControlPrimary2Y", type: "uint16",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0017, name: "ColorControlPrimary2Intensity", type: "uint8",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0019, name: "ColorControlPrimary3X", type: "uint16",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x001a, name: "ColorControlPrimary3Y", type: "uint16",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x001b, name: "ColorControlPrimary3Intensity", type: "uint8",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0020, name: "ColorControlPrimary4X", type: "uint16",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0021, name: "ColorControlPrimary4Y", type: "uint16",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0022, name: "ColorControlPrimary4Intensity", type: "uint8",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0024, name: "ColorControlPrimary5X", type: "uint16",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0025, name: "ColorControlPrimary5Y", type: "uint16",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0026, name: "ColorControlPrimary5Intensity", type: "uint8",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0028, name: "ColorControlPrimary6X", type: "uint16",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0029, name: "ColorControlPrimary6Y", type: "uint16",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x002a, name: "ColorControlPrimary6Intensity", type: "uint8",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0030, name: "ColorControlWhitePointX", type: "uint16",
            access: "RW VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x0031, name: "ColorControlWhitePointY", type: "uint16",
            access: "RW VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x0032, name: "ColorControlColorPointRX", type: "uint16",
            access: "RW VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x0033, name: "ColorControlColorPointRY", type: "uint16",
            access: "RW VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x0034, name: "ColorControlColorPointRIntensity", type: "uint8",
            access: "RW VM", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0036, name: "ColorControlColorPointGX", type: "uint16",
            access: "RW VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x0037, name: "ColorControlColorPointGY", type: "uint16",
            access: "RW VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x0038, name: "ColorControlColorPointGIntensity", type: "uint8",
            access: "RW VM", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x003a, name: "ColorControlColorPointBX", type: "uint16",
            access: "RW VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x003b, name: "ColorControlColorPointBY", type: "uint16",
            access: "RW VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x003c, name: "ColorControlColorPointBIntensity", type: "uint8",
            access: "RW VM", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x400d, name: "ColorControlTemperatureLevelMinMireds", type: "uint16",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x4010, name: "StartUpColorTemperatureMireds", type: "uint16",
            access: "RW VM", conformance: "O", quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "MoveToHue",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "Hue", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Direction", type: "HueDirection",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsMask", type: "map8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", type: "map8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "MoveHue",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "MoveMode", type: "HueMoveMode",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Rate", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsMask", type: "map8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", type: "map8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "StepHue",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "StepMode", type: "HueStepMode",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "StepSize", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsMask", type: "map8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", type: "map8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "MoveToSaturation",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "Saturation", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsMask", type: "map8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", type: "map8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "MoveSaturation",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "MoveMode", type: "SaturationMoveMode",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Rate", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsMask", type: "map8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", type: "map8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "StepSaturation",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "StepMode", type: "SaturationStepMode",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "StepSize", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsMask", type: "map8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", type: "map8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0006, name: "MoveToHueAndSaturation",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "Hue", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Saturation", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsMask", type: "map8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", type: "map8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0007, name: "MoveToColor",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ColorX", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ColorY", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsMask", type: "map8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", type: "map8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0008, name: "MoveColor",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "RateX", type: "int16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "RateY", type: "int16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsMask", type: "map8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", type: "map8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0009, name: "StepColor",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "StepX", type: "int16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "StepY", type: "int16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsMask", type: "map8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", type: "map8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x000a, name: "MoveToColorTemperature",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ColorTemperatureMireds", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsMask", type: "map8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", type: "map8",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ColorControlFeature", type: "map32",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "HueAndSaturation",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "EnhancedHue",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "ColorLoop",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Xy",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "ColorTemperature",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "HueDirection", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "ShortestDistance",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "LongestDistance",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Up",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Down",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "HueMoveMode", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Stop",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Up",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Down",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "HueStepMode", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Up",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Down",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "SaturationMoveMode", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Stop",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Up",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Down",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "SaturationStepMode", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Up",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Down",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ColorMode", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "CurrentHueAndCurrentSaturation",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "CurrentXAndCurrentY",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ColorTemperature",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ColorCapabilities", type: "map16",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "HueSaturationSupported",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "EnhancedHueSupported",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "ColorLoopSupported",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "XyAttributesSupported",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "ColorTemperatureSupported",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ColorLoopUpdateFlags", type: "map8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "UpdateAction",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "UpdateDirection",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "UpdateTime",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "UpdateStartHue",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ColorLoopAction", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Deactivate",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "ActivateFromColorLoopStartEnhancedHue",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ActivateFromEnhancedCurrentHue",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ColorLoopDirection", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "DecrementHue",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "IncrementHue",
                    conformance: "M"
                })
            ]
        })
    ]
}));
