/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0300, name: "ColorControl",
    classification: "application", description: "Color Control",
    children: [
        {
            tag: "command", id: 0x0000, name: "MoveToHue",
            access: "O", conformance: "HS", direction: "request", response: "status",
            details: "The MoveToHue command SHALL have the following data fields",
            xref: { document: "cluster", section: "3.2.11.4" },
            children: [
                {
                    tag: "datatype", name: "Hue",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "Direction",
                    conformance: "M", type: "HueDirection"
                },

                {
                    tag: "datatype", name: "TransitionTime",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "OptionsMask",
                    conformance: "M", type: "map8"
                },

                {
                    tag: "datatype", name: "OptionsOverride",
                    conformance: "M", type: "map8"
                }
            ]
        },

        {
            tag: "command", id: 0x0001, name: "MoveHue",
            access: "O", conformance: "HS", direction: "request", response: "status",
            details: "The MoveHue command SHALL have the following data fields",
            xref: { document: "cluster", section: "3.2.11.5" },
            children: [
                {
                    tag: "datatype", name: "MoveMode",
                    conformance: "M", type: "HueMoveMode"
                },

                {
                    tag: "datatype", name: "Rate",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "OptionsMask",
                    conformance: "M", type: "map8"
                },

                {
                    tag: "datatype", name: "OptionsOverride",
                    conformance: "M", type: "map8"
                }
            ]
        },

        {
            tag: "command", id: 0x0002, name: "StepHue",
            access: "O", conformance: "HS", direction: "request", response: "status",
            details: "The StepHue command SHALL have the following data fields",
            xref: { document: "cluster", section: "3.2.11.6" },
            children: [
                {
                    tag: "datatype", name: "StepMode",
                    conformance: "M", type: "HueStepMode"
                },

                {
                    tag: "datatype", name: "StepSize",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "TransitionTime",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "OptionsMask",
                    conformance: "M", type: "map8"
                },

                {
                    tag: "datatype", name: "OptionsOverride",
                    conformance: "M", type: "map8"
                }
            ]
        },

        {
            tag: "command", id: 0x0003, name: "MoveToSaturation",
            access: "O", conformance: "HS", direction: "request", response: "status",
            details: "The MoveToSaturation command SHALL have the following data fields",
            xref: { document: "cluster", section: "3.2.11.7" },
            children: [
                {
                    tag: "datatype", name: "Saturation",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "TransitionTime",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "OptionsMask",
                    conformance: "M", type: "map8"
                },

                {
                    tag: "datatype", name: "OptionsOverride",
                    conformance: "M", type: "map8"
                }
            ]
        },

        {
            tag: "command", id: 0x0004, name: "MoveSaturation",
            access: "O", conformance: "HS", direction: "request", response: "status",
            details: "The MoveSaturation command SHALL have the following data fields",
            xref: { document: "cluster", section: "3.2.11.8" },
            children: [
                {
                    tag: "datatype", name: "MoveMode",
                    conformance: "M", type: "SaturationMoveMode"
                },

                {
                    tag: "datatype", name: "Rate",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "OptionsMask",
                    conformance: "M", type: "map8"
                },

                {
                    tag: "datatype", name: "OptionsOverride",
                    conformance: "M", type: "map8"
                }
            ]
        },

        {
            tag: "command", id: 0x0005, name: "StepSaturation",
            access: "O", conformance: "HS", direction: "request", response: "status",
            details: "The StepSaturation command SHALL have the following data fields",
            xref: { document: "cluster", section: "3.2.11.9" },
            children: [
                {
                    tag: "datatype", name: "StepMode",
                    conformance: "M", type: "SaturationStepMode"
                },

                {
                    tag: "datatype", name: "StepSize",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "TransitionTime",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "OptionsMask",
                    conformance: "M", type: "map8"
                },

                {
                    tag: "datatype", name: "OptionsOverride",
                    conformance: "M", type: "map8"
                }
            ]
        },

        {
            tag: "command", id: 0x0006, name: "MoveToHueAndSaturation",
            access: "O", conformance: "HS", direction: "request", response: "status",
            details: "The MoveToHueAndSaturation command SHALL have the following data " +
                     "fields",
            xref: { document: "cluster", section: "3.2.11.10" },
            children: [
                {
                    tag: "datatype", name: "Hue",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "Saturation",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "TransitionTime",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "OptionsMask",
                    conformance: "M", type: "map8"
                },

                {
                    tag: "datatype", name: "OptionsOverride",
                    conformance: "M", type: "map8"
                }
            ]
        },

        {
            tag: "command", id: 0x0007, name: "MoveToColor",
            access: "O", conformance: "X, Y", direction: "request", response: "status",
            details: "The MoveToColor command SHALL have the following data fields",
            xref: { document: "cluster", section: "3.2.11.11" },
            children: [
                {
                    tag: "datatype", name: "ColorX",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "ColorY",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "TransitionTime",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "OptionsMask",
                    conformance: "M", type: "map8"
                },

                {
                    tag: "datatype", name: "OptionsOverride",
                    conformance: "M", type: "map8"
                }
            ]
        },

        {
            tag: "command", id: 0x0008, name: "MoveColor",
            access: "O", conformance: "X, Y", direction: "request", response: "status",
            details: "The MoveColor command SHALL have the following data fields",
            xref: { document: "cluster", section: "3.2.11.12" },
            children: [
                {
                    tag: "datatype", name: "RateX",
                    conformance: "M", type: "int16"
                },

                {
                    tag: "datatype", name: "RateY",
                    conformance: "M", type: "int16"
                },

                {
                    tag: "datatype", name: "OptionsMask",
                    conformance: "M", type: "map8"
                },

                {
                    tag: "datatype", name: "OptionsOverride",
                    conformance: "M", type: "map8"
                }
            ]
        },

        {
            tag: "command", id: 0x0009, name: "StepColor",
            access: "O", conformance: "X, Y", direction: "request", response: "status",
            details: "The StepColor command SHALL have the following data fields",
            xref: { document: "cluster", section: "3.2.11.13" },
            children: [
                {
                    tag: "datatype", name: "StepX",
                    conformance: "M", type: "int16"
                },

                {
                    tag: "datatype", name: "StepY",
                    conformance: "M", type: "int16"
                },

                {
                    tag: "datatype", name: "TransitionTime",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "OptionsMask",
                    conformance: "M", type: "map8"
                },

                {
                    tag: "datatype", name: "OptionsOverride",
                    conformance: "M", type: "map8"
                }
            ]
        },

        {
            tag: "command", id: 0x000a, name: "MoveToColorTemperature",
            access: "O", conformance: "CT", direction: "request", response: "status",
            details: "The MoveToColorTemperature command SHALL have the following data " +
                     "fields",
            xref: { document: "cluster", section: "3.2.11.14" },
            children: [
                {
                    tag: "datatype", name: "ColorTemperatureMireds",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "TransitionTime",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "OptionsMask",
                    conformance: "M", type: "map8"
                },

                {
                    tag: "datatype", name: "OptionsOverride",
                    conformance: "M", type: "map8"
                }
            ]
        },

        {
            tag: "command", id: 0x0040, name: "EnhancedMoveToHue",
            access: "O", conformance: "EHUE", direction: "request", response: "status",
            details: "The EnhancedMoveToHue command allows lamps to be moved in a smooth " +
                     "continuous transition from their current hue to a target hue",
            xref: { document: "cluster", section: "3.2.11.15" }
        },

        {
            tag: "command", id: 0x0041, name: "EnhancedMoveHue",
            access: "O", conformance: "EHUE", direction: "request", response: "status",
            details: "The EnhancedMoveHue command allows lamps to be moved in a continuous " +
                     "stepped transition from their current hue to a target hue",
            xref: { document: "cluster", section: "3.2.11.16" }
        },

        {
            tag: "command", id: 0x0042, name: "EnhancedStepHue",
            access: "O", conformance: "EHUE", direction: "request", response: "status",
            details: "The EnhancedStepHue command allows lamps to be moved in a stepped " +
                     "transition from their current hue to a target hue, resulting in a " +
                     "linear transition through XY space",
            xref: { document: "cluster", section: "3.2.11.17" }
        },

        {
            tag: "command", id: 0x0043, name: "EnhancedMoveToHueAndSaturation",
            access: "O", conformance: "EHUE", direction: "request", response: "status",
            details: "The EnhancedMoveToHueAndSaturation command allows lamps to be moved in" +
                     " a smooth continuous transition from their current hue to a target hue" +
                     " and from their current saturation to a target saturation",
            xref: { document: "cluster", section: "3.2.11.18" }
        },

        {
            tag: "command", id: 0x0044, name: "ColorLoopSet",
            access: "O", conformance: "CL", direction: "request", response: "status",
            details: "The Color Loop Set command allows a color loop to be activated such " +
                     "that the color lamp cycles through its range of hues",
            xref: { document: "cluster", section: "3.2.11.19" }
        },

        {
            tag: "command", id: 0x0047, name: "StopMoveStep",
            access: "O", conformance: "HS | X, Y | CT", direction: "request", response: "status",
            details: "The StopMoveStep command is provided to allow MoveTo and Step commands" +
                     " to be stopped. (Note this automatically provides symmetry to the " +
                     "Level Control cluster",
            xref: { document: "cluster", section: "3.2.11.20" }
        },

        {
            tag: "command", id: 0x004b, name: "MoveColorTemperature",
            access: "O", conformance: "CT", direction: "request", response: "status",
            details: "The MoveColorTemperature command allows the color temperature of a " +
                     "lamp to be moved at a specified rate",
            xref: { document: "cluster", section: "3.2.11.21" }
        },

        {
            tag: "command", id: 0x004c, name: "StepColorTemperature",
            access: "O", conformance: "CT", direction: "request", response: "status",
            details: "The StepColorTemperature command allows the color temperature of a " +
                     "lamp to be stepped with a specified step size",
            xref: { document: "cluster", section: "3.2.11.22" }
        },

        {
            tag: "attribute", id: 0x0000, name: "ColorControlCurrentHue",
            conformance: "O", default: undefined, quality: "P", type: "uint8"
        },

        {
            tag: "attribute", id: 0x0001, name: "ColorControlCurrentSaturation",
            conformance: "O", default: undefined, quality: "P", type: "uint8"
        },

        {
            tag: "attribute", id: 0x0002, name: "ColorControlRemainingTime",
            conformance: "O", default: undefined, type: "uint16"
        },

        {
            tag: "attribute", id: 0x0003, name: "ColorControlCurrentX",
            conformance: "O", default: 24939, quality: "P", type: "uint16"
        },

        {
            tag: "attribute", id: 0x0004, name: "ColorControlCurrentY",
            conformance: "O", default: 24701, quality: "P", type: "uint16"
        },

        {
            tag: "attribute", id: 0x0005, name: "ColorControlDriftCompensation",
            conformance: "O", type: "enum8"
        },

        {
            tag: "attribute", id: 0x0006, name: "ColorControlCompensationText",
            conformance: "O", type: "string"
        },

        {
            tag: "attribute", id: 0x0007, name: "ColorControlColorTemperature",
            conformance: "O", default: 250, quality: "P", type: "uint16"
        },

        {
            tag: "attribute", id: 0x0008, name: "ColorControlColorMode",
            conformance: "M", default: 1, type: "enum8"
        },

        {
            tag: "attribute", id: 0x000f, name: "ColorControlOptions",
            access: "RW", conformance: "M", default: undefined, type: "map8"
        },

        {
            tag: "attribute", id: 0x0010, name: "ColorControlNumberOfPrimaries",
            conformance: "M", quality: "X", type: "uint8"
        },

        {
            tag: "attribute", id: 0x0011, name: "ColorControlPrimary1X",
            conformance: "O", type: "uint16"
        },

        {
            tag: "attribute", id: 0x0012, name: "ColorControlPrimary1Y",
            conformance: "O", type: "uint16"
        },

        {
            tag: "attribute", id: 0x0013, name: "ColorControlPrimary1Intensity",
            conformance: "O", quality: "X", type: "uint8"
        },

        {
            tag: "attribute", id: 0x0015, name: "ColorControlPrimary2X",
            conformance: "O", type: "uint16"
        },

        {
            tag: "attribute", id: 0x0016, name: "ColorControlPrimary2Y",
            conformance: "O", type: "uint16"
        },

        {
            tag: "attribute", id: 0x0017, name: "ColorControlPrimary2Intensity",
            conformance: "O", quality: "X", type: "uint8"
        },

        {
            tag: "attribute", id: 0x0019, name: "ColorControlPrimary3X",
            conformance: "O", type: "uint16"
        },

        {
            tag: "attribute", id: 0x001a, name: "ColorControlPrimary3Y",
            conformance: "O", type: "uint16"
        },

        {
            tag: "attribute", id: 0x001b, name: "ColorControlPrimary3Intensity",
            conformance: "O", quality: "X", type: "uint8"
        },

        {
            tag: "attribute", id: 0x0020, name: "ColorControlPrimary4X",
            conformance: "O", type: "uint16"
        },

        {
            tag: "attribute", id: 0x0021, name: "ColorControlPrimary4Y",
            conformance: "O", type: "uint16"
        },

        {
            tag: "attribute", id: 0x0022, name: "ColorControlPrimary4Intensity",
            conformance: "O", quality: "X", type: "uint8"
        },

        {
            tag: "attribute", id: 0x0024, name: "ColorControlPrimary5X",
            conformance: "O", type: "uint16"
        },

        {
            tag: "attribute", id: 0x0025, name: "ColorControlPrimary5Y",
            conformance: "O", type: "uint16"
        },

        {
            tag: "attribute", id: 0x0026, name: "ColorControlPrimary5Intensity",
            conformance: "O", quality: "X", type: "uint8"
        },

        {
            tag: "attribute", id: 0x0028, name: "ColorControlPrimary6X",
            conformance: "O", type: "uint16"
        },

        {
            tag: "attribute", id: 0x0029, name: "ColorControlPrimary6Y",
            conformance: "O", type: "uint16"
        },

        {
            tag: "attribute", id: 0x002a, name: "ColorControlPrimary6Intensity",
            conformance: "O", quality: "X", type: "uint8"
        },

        {
            tag: "attribute", id: 0x0030, name: "ColorControlWhitePointX",
            access: "RW VM", conformance: "O", type: "uint16"
        },

        {
            tag: "attribute", id: 0x0031, name: "ColorControlWhitePointY",
            access: "RW VM", conformance: "O", type: "uint16"
        },

        {
            tag: "attribute", id: 0x0032, name: "ColorControlColorPointRX",
            access: "RW VM", conformance: "O", type: "uint16"
        },

        {
            tag: "attribute", id: 0x0033, name: "ColorControlColorPointRY",
            access: "RW VM", conformance: "O", type: "uint16"
        },

        {
            tag: "attribute", id: 0x0034, name: "ColorControlColorPointRIntensity",
            access: "RW VM", conformance: "O", quality: "X", type: "uint8"
        },

        {
            tag: "attribute", id: 0x0036, name: "ColorControlColorPointGX",
            access: "RW VM", conformance: "O", type: "uint16"
        },

        {
            tag: "attribute", id: 0x0037, name: "ColorControlColorPointGY",
            access: "RW VM", conformance: "O", type: "uint16"
        },

        {
            tag: "attribute", id: 0x0038, name: "ColorControlColorPointGIntensity",
            access: "RW VM", conformance: "O", quality: "X", type: "uint8"
        },

        {
            tag: "attribute", id: 0x003a, name: "ColorControlColorPointBX",
            access: "RW VM", conformance: "O", type: "uint16"
        },

        {
            tag: "attribute", id: 0x003b, name: "ColorControlColorPointBY",
            access: "RW VM", conformance: "O", type: "uint16"
        },

        {
            tag: "attribute", id: 0x003c, name: "ColorControlColorPointBIntensity",
            access: "RW VM", conformance: "O", quality: "X", type: "uint8"
        },

        {
            tag: "attribute", id: 0x400d, name: "ColorControlTemperatureLevelMinMireds",
            conformance: "O", type: "uint16"
        },

        {
            tag: "attribute", id: 0x4010, name: "StartUpColorTemperatureMireds",
            access: "RW VM", conformance: "O", quality: "X", type: "uint16"
        },

        {
            tag: "datatype", name: "ColorControlFeature",
            conformance: "M", type: "map32",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "HueAndSaturation",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "EnhancedHue",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "ColorLoop",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "Xy",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0010, name: "ColorTemperature",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "HueDirection",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "ShortestDistance",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "LongestDistance",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Up",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "Down",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "HueMoveMode",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Stop",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Up",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "Down",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "HueStepMode",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "Up",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "Down",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "SaturationMoveMode",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Stop",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Up",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "Down",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "SaturationStepMode",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "Up",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "Down",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "ColorMode",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "CurrentHueAndCurrentSaturation",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "CurrentXAndCurrentY",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "ColorTemperature",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "ColorCapabilities",
            conformance: "M", type: "map16",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "HueSaturationSupported",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "EnhancedHueSupported",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "ColorLoopSupported",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "XyAttributesSupported",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0010, name: "ColorTemperatureSupported",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "ColorLoopUpdateFlags",
            conformance: "M", type: "map8",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "UpdateAction",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "UpdateDirection",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "UpdateTime",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "UpdateStartHue",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "ColorLoopAction",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Deactivate",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "ActivateFromColorLoopStartEnhancedHue",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "ActivateFromEnhancedCurrentHue",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "ColorLoopDirection",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "DecrementHue",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "IncrementHue",
                    conformance: "M"
                }
            ]
        }
    ]
});
