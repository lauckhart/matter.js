/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0300, name: "ColorControl",
    description: "Color Control",
    details: "Attributes and commands for controlling the color properties of a color-capable light.",
    children: [
        AttributeElement({
            id: 0x0000, name: "ColorControlCurrentHue", base: "uint8",
            access: "R", conformance: "O", default: 0, quality: "P"
        }),

        AttributeElement({
            id: 0x0001, name: "ColorControlCurrentSaturation", base: "uint8",
            access: "R", conformance: "O", default: 0, quality: "P"
        }),

        AttributeElement({
            id: 0x0002, name: "ColorControlRemainingTime", base: "uint16",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0003, name: "ColorControlCurrentX", base: "uint16",
            access: "R", conformance: "O", default: 24939, quality: "P"
        }),

        AttributeElement({
            id: 0x0004, name: "ColorControlCurrentY", base: "uint16",
            access: "R", conformance: "O", default: 24701, quality: "P"
        }),

        AttributeElement({
            id: 0x0005, name: "ColorControlDriftCompensation", base: "enum8",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0006, name: "ColorControlCompensationText", base: "string",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0007, name: "ColorControlColorTemperature", base: "uint16",
            access: "R", conformance: "O", default: 250, quality: "P"
        }),

        AttributeElement({
            id: 0x0008, name: "ColorControlColorMode", base: "enum8",
            access: "R", conformance: "M", default: 1
        }),

        AttributeElement({
            id: 0x000f, name: "ColorControlOptions", base: "map8",
            access: "W", conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0010, name: "ColorControlNumberOfPrimaries", base: "uint8",
            access: "R", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0011, name: "ColorControlPrimary1X", base: "uint16",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0012, name: "ColorControlPrimary1Y", base: "uint16",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0013, name: "ColorControlPrimary1Intensity", base: "uint8",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0015, name: "ColorControlPrimary2X", base: "uint16",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0016, name: "ColorControlPrimary2Y", base: "uint16",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0017, name: "ColorControlPrimary2Intensity", base: "uint8",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0019, name: "ColorControlPrimary3X", base: "uint16",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x001a, name: "ColorControlPrimary3Y", base: "uint16",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x001b, name: "ColorControlPrimary3Intensity", base: "uint8",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0020, name: "ColorControlPrimary4X", base: "uint16",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0021, name: "ColorControlPrimary4Y", base: "uint16",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0022, name: "ColorControlPrimary4Intensity", base: "uint8",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0024, name: "ColorControlPrimary5X", base: "uint16",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0025, name: "ColorControlPrimary5Y", base: "uint16",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0026, name: "ColorControlPrimary5Intensity", base: "uint8",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0028, name: "ColorControlPrimary6X", base: "uint16",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0029, name: "ColorControlPrimary6Y", base: "uint16",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x002a, name: "ColorControlPrimary6Intensity", base: "uint8",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0030, name: "ColorControlWhitePointX", base: "uint16",
            access: "W VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x0031, name: "ColorControlWhitePointY", base: "uint16",
            access: "W VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x0032, name: "ColorControlColorPointRX", base: "uint16",
            access: "W VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x0033, name: "ColorControlColorPointRY", base: "uint16",
            access: "W VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x0034, name: "ColorControlColorPointRIntensity", base: "uint8",
            access: "W VM", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0036, name: "ColorControlColorPointGX", base: "uint16",
            access: "W VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x0037, name: "ColorControlColorPointGY", base: "uint16",
            access: "W VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x0038, name: "ColorControlColorPointGIntensity", base: "uint8",
            access: "W VM", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x003a, name: "ColorControlColorPointBX", base: "uint16",
            access: "W VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x003b, name: "ColorControlColorPointBY", base: "uint16",
            access: "W VM", conformance: "O"
        }),

        AttributeElement({
            id: 0x003c, name: "ColorControlColorPointBIntensity", base: "uint8",
            access: "W VM", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x400d, name: "ColorControlTemperatureLevelMinMireds", base: "uint16",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x4010, name: "StartUpColorTemperatureMireds", base: "uint16",
            access: "W VM", conformance: "O", quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "MoveToHue",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "Hue", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Direction", base: "HueDirection",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsMask", base: "map8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", base: "map8",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "MoveHue",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "MoveMode", base: "HueMoveMode",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Rate", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsMask", base: "map8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", base: "map8",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "StepHue",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "StepMode", base: "HueStepMode",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "StepSize", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsMask", base: "map8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", base: "map8",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "MoveToSaturation",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "Saturation", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsMask", base: "map8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", base: "map8",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "MoveSaturation",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "MoveMode", base: "SaturationMoveMode",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Rate", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsMask", base: "map8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", base: "map8",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "StepSaturation",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "StepMode", base: "SaturationStepMode",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "StepSize", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsMask", base: "map8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", base: "map8",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0006, name: "MoveToHueAndSaturation",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "Hue", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Saturation", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsMask", base: "map8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", base: "map8",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0007, name: "MoveToColor",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ColorX", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "ColorY", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsMask", base: "map8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", base: "map8",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0008, name: "MoveColor",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "RateX", base: "int16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "RateY", base: "int16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsMask", base: "map8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", base: "map8",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0009, name: "StepColor",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "StepX", base: "int16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "StepY", base: "int16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsMask", base: "map8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", base: "map8",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x000a, name: "MoveToColorTemperature",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "ColorTemperatureMireds", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "TransitionTime", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsMask", base: "map8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OptionsOverride", base: "map8",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ColorControlFeature", base: "map32",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "HueAndSaturation",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "EnhancedHue",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "ColorLoop",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Xy",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "ColorTemperature",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "HueDirection", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "ShortestDistance",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "LongestDistance",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Up",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Down",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "HueMoveMode", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Stop",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Up",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Down",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "HueStepMode", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Up",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Down",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "SaturationMoveMode", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Stop",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Up",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Down",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "SaturationStepMode", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Up",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Down",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ColorMode", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "CurrentHueAndCurrentSaturation",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "CurrentXAndCurrentY",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ColorTemperature",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ColorCapabilities", base: "map16",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "HueSaturationSupported",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "EnhancedHueSupported",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "ColorLoopSupported",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "XyAttributesSupported",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "ColorTemperatureSupported",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ColorLoopUpdateFlags", base: "map8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "UpdateAction",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "UpdateDirection",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "UpdateTime",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "UpdateStartHue",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ColorLoopAction", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Deactivate",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "ActivateFromColorLoopStartEnhancedHue",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ActivateFromEnhancedCurrentHue",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ColorLoopDirection", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "DecrementHue",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "IncrementHue",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
