/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "ColorControl", id: 0x300, classification: "application",
    description: "Color Control",
    details: "Attributes and commands for controlling the color properties of a color-capable light",
    xref: { document: "cluster", section: "3.2" },
    children: [
        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            children: [
                {
                    tag: "datatype", name: "HS", id: 0x0,
                    description: "Supports color specification via hue/saturation.",
                    xref: { document: "cluster", section: "3.2.5" }
                },

                {
                    tag: "datatype", name: "EHUE", id: 0x1, description: "Enhanced hue is supported.",
                    xref: { document: "cluster", section: "3.2.5" }
                },

                {
                    tag: "datatype", name: "CL", id: 0x2, description: "Color loop is supported.",
                    xref: { document: "cluster", section: "3.2.5" }
                },

                {
                    tag: "datatype", name: "XY", id: 0x3, description: "Supports color specification via XY.",
                    xref: { document: "cluster", section: "3.2.5" }
                },

                {
                    tag: "datatype", name: "CT", id: 0x4, description: "Supports specification of color temperature.",
                    xref: { document: "cluster", section: "3.2.5" }
                }
            ]
        },

        {
            tag: "attribute", name: "ColorControlCurrentHue", id: 0x0, type: "uint8", conformance: "O",
            quality: "P"
        },

        {
            tag: "attribute", name: "ColorControlCurrentSaturation", id: 0x1, type: "uint8", conformance: "O",
            quality: "P"
        },

        {
            tag: "attribute", name: "ColorControlRemainingTime", id: 0x2, type: "uint16", conformance: "O"
        },

        {
            tag: "attribute", name: "ColorControlCurrentX", id: 0x3, type: "uint16", conformance: "O",
            default: 24939, quality: "P"
        },

        {
            tag: "attribute", name: "ColorControlCurrentY", id: 0x4, type: "uint16", conformance: "O",
            default: 24701, quality: "P"
        },

        {
            tag: "attribute", name: "ColorControlDriftCompensation", id: 0x5, type: "enum8", conformance: "O"
        },

        {
            tag: "attribute", name: "ColorControlCompensationText", id: 0x6, type: "string", conformance: "O"
        },

        {
            tag: "attribute", name: "ColorControlColorTemperature", id: 0x7, type: "uint16", conformance: "O",
            default: 250, quality: "P"
        },

        {
            tag: "attribute", name: "ColorControlColorMode", id: 0x8, type: "enum8", conformance: "M",
            default: 1
        },

        {
            tag: "attribute", name: "ColorControlOptions", id: 0xf, type: "map8", access: "RW",
            conformance: "M",
            children: [
                {
                    tag: "datatype", name: "ExecuteIfOff", id: 0x1, conformance: "M"
                }
            ]
        },

        {
            tag: "attribute", name: "ColorControlNumberOfPrimaries", id: 0x10, type: "uint8", conformance: "M",
            quality: "X"
        },

        {
            tag: "attribute", name: "ColorControlPrimary1X", id: 0x11, type: "uint16", conformance: "O"
        },

        {
            tag: "attribute", name: "ColorControlPrimary1Y", id: 0x12, type: "uint16", conformance: "O"
        },

        {
            tag: "attribute", name: "ColorControlPrimary1Intensity", id: 0x13, type: "uint8", conformance: "O",
            quality: "X"
        },

        {
            tag: "attribute", name: "ColorControlPrimary2X", id: 0x15, type: "uint16", conformance: "O"
        },

        {
            tag: "attribute", name: "ColorControlPrimary2Y", id: 0x16, type: "uint16", conformance: "O"
        },

        {
            tag: "attribute", name: "ColorControlPrimary2Intensity", id: 0x17, type: "uint8", conformance: "O",
            quality: "X"
        },

        {
            tag: "attribute", name: "ColorControlPrimary3X", id: 0x19, type: "uint16", conformance: "O"
        },

        {
            tag: "attribute", name: "ColorControlPrimary3Y", id: 0x1a, type: "uint16", conformance: "O"
        },

        {
            tag: "attribute", name: "ColorControlPrimary3Intensity", id: 0x1b, type: "uint8", conformance: "O",
            quality: "X"
        },

        {
            tag: "attribute", name: "ColorControlPrimary4X", id: 0x20, type: "uint16", conformance: "O"
        },

        {
            tag: "attribute", name: "ColorControlPrimary4Y", id: 0x21, type: "uint16", conformance: "O"
        },

        {
            tag: "attribute", name: "ColorControlPrimary4Intensity", id: 0x22, type: "uint8", conformance: "O",
            quality: "X"
        },

        {
            tag: "attribute", name: "ColorControlPrimary5X", id: 0x24, type: "uint16", conformance: "O"
        },

        {
            tag: "attribute", name: "ColorControlPrimary5Y", id: 0x25, type: "uint16", conformance: "O"
        },

        {
            tag: "attribute", name: "ColorControlPrimary5Intensity", id: 0x26, type: "uint8", conformance: "O",
            quality: "X"
        },

        {
            tag: "attribute", name: "ColorControlPrimary6X", id: 0x28, type: "uint16", conformance: "O"
        },

        {
            tag: "attribute", name: "ColorControlPrimary6Y", id: 0x29, type: "uint16", conformance: "O"
        },

        {
            tag: "attribute", name: "ColorControlPrimary6Intensity", id: 0x2a, type: "uint8", conformance: "O",
            quality: "X"
        },

        {
            tag: "attribute", name: "ColorControlWhitePointX", id: 0x30, type: "uint16", access: "RW VM",
            conformance: "O"
        },

        {
            tag: "attribute", name: "ColorControlWhitePointY", id: 0x31, type: "uint16", access: "RW VM",
            conformance: "O"
        },

        {
            tag: "attribute", name: "ColorControlColorPointRX", id: 0x32, type: "uint16", access: "RW VM",
            conformance: "O"
        },

        {
            tag: "attribute", name: "ColorControlColorPointRY", id: 0x33, type: "uint16", access: "RW VM",
            conformance: "O"
        },

        {
            tag: "attribute", name: "ColorControlColorPointRIntensity", id: 0x34, type: "uint8",
            access: "RW VM", conformance: "O", quality: "X"
        },

        {
            tag: "attribute", name: "ColorControlColorPointGX", id: 0x36, type: "uint16", access: "RW VM",
            conformance: "O"
        },

        {
            tag: "attribute", name: "ColorControlColorPointGY", id: 0x37, type: "uint16", access: "RW VM",
            conformance: "O"
        },

        {
            tag: "attribute", name: "ColorControlColorPointGIntensity", id: 0x38, type: "uint8",
            access: "RW VM", conformance: "O", quality: "X"
        },

        {
            tag: "attribute", name: "ColorControlColorPointBX", id: 0x3a, type: "uint16", access: "RW VM",
            conformance: "O"
        },

        {
            tag: "attribute", name: "ColorControlColorPointBY", id: 0x3b, type: "uint16", access: "RW VM",
            conformance: "O"
        },

        {
            tag: "attribute", name: "ColorControlColorPointBIntensity", id: 0x3c, type: "uint8",
            access: "RW VM", conformance: "O", quality: "X"
        },

        {
            tag: "attribute", name: "ColorControlTemperatureLevelMinMireds", id: 0x400d, type: "uint16",
            conformance: "O"
        },

        {
            tag: "attribute", name: "StartUpColorTemperatureMireds", id: 0x4010, type: "uint16",
            access: "RW VM", conformance: "O", quality: "X"
        },

        {
            tag: "command", name: "MoveToHue", id: 0x0, access: "O", conformance: "HS", direction: "request",
            response: "status",
            details: "The MoveToHue command SHALL have the following data fields",
            xref: { document: "cluster", section: "3.2.11.4" },
            children: [
                {
                    tag: "datatype", name: "Hue", id: 0x0, type: "uint8", conformance: "M", constraint: "0 to 254",
                    xref: { document: "cluster", section: "3.2.11.4" }
                },

                {
                    tag: "datatype", name: "Direction", id: 0x1, type: "enum8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.4" }
                },

                {
                    tag: "datatype", name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M",
                    constraint: "0 to 65534",
                    xref: { document: "cluster", section: "3.2.11.4" }
                },

                {
                    tag: "datatype", name: "OptionsMask", id: 0x3, type: "map8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.4" }
                },

                {
                    tag: "datatype", name: "OptionsOverride", id: 0x4, type: "map8", conformance: "M",
                    constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.4" }
                }
            ]
        },

        {
            tag: "command", name: "MoveHue", id: 0x1, access: "O", conformance: "HS", direction: "request",
            response: "status",
            details: "The MoveHue command SHALL have the following data fields",
            xref: { document: "cluster", section: "3.2.11.5" },
            children: [
                {
                    tag: "datatype", name: "MoveMode", id: 0x0, type: "enum8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.5" }
                },

                {
                    tag: "datatype", name: "Rate", id: 0x1, type: "uint8", conformance: "M",
                    xref: { document: "cluster", section: "3.2.11.5" }
                },

                {
                    tag: "datatype", name: "OptionsMask", id: 0x2, type: "map8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.5" }
                },

                {
                    tag: "datatype", name: "OptionsOverride", id: 0x3, type: "map8", conformance: "M",
                    constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.5" }
                }
            ]
        },

        {
            tag: "command", name: "StepHue", id: 0x2, access: "O", conformance: "HS", direction: "request",
            response: "status",
            details: "The StepHue command SHALL have the following data fields",
            xref: { document: "cluster", section: "3.2.11.6" },
            children: [
                {
                    tag: "datatype", name: "StepMode", id: 0x0, type: "enum8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.6" }
                },

                {
                    tag: "datatype", name: "StepSize", id: 0x1, type: "uint8", conformance: "M",
                    xref: { document: "cluster", section: "3.2.11.6" }
                },

                {
                    tag: "datatype", name: "TransitionTime", id: 0x2, type: "uint8", conformance: "M",
                    xref: { document: "cluster", section: "3.2.11.6" }
                },

                {
                    tag: "datatype", name: "OptionsMask", id: 0x3, type: "map8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.6" }
                },

                {
                    tag: "datatype", name: "OptionsOverride", id: 0x4, type: "map8", conformance: "M",
                    constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.6" }
                }
            ]
        },

        {
            tag: "command", name: "MoveToSaturation", id: 0x3, access: "O", conformance: "HS",
            direction: "request", response: "status",
            details: "The MoveToSaturation command SHALL have the following data fields",
            xref: { document: "cluster", section: "3.2.11.7" },
            children: [
                {
                    tag: "datatype", name: "Saturation", id: 0x0, type: "uint8", conformance: "M",
                    constraint: "0 to 254",
                    xref: { document: "cluster", section: "3.2.11.7" }
                },

                {
                    tag: "datatype", name: "TransitionTime", id: 0x1, type: "uint16", conformance: "M",
                    constraint: "0 to 65534",
                    xref: { document: "cluster", section: "3.2.11.7" }
                },

                {
                    tag: "datatype", name: "OptionsMask", id: 0x2, type: "map8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.7" }
                },

                {
                    tag: "datatype", name: "OptionsOverride", id: 0x3, type: "map8", conformance: "M",
                    constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.7" }
                }
            ]
        },

        {
            tag: "command", name: "MoveSaturation", id: 0x4, access: "O", conformance: "HS",
            direction: "request", response: "status",
            details: "The MoveSaturation command SHALL have the following data fields",
            xref: { document: "cluster", section: "3.2.11.8" },
            children: [
                {
                    tag: "datatype", name: "MoveMode", id: 0x0, type: "enum8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.8" }
                },

                {
                    tag: "datatype", name: "Rate", id: 0x1, type: "uint8", conformance: "M",
                    xref: { document: "cluster", section: "3.2.11.8" }
                },

                {
                    tag: "datatype", name: "OptionsMask", id: 0x2, type: "map8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.8" }
                },

                {
                    tag: "datatype", name: "OptionsOverride", id: 0x3, type: "map8", conformance: "M",
                    constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.8" }
                }
            ]
        },

        {
            tag: "command", name: "StepSaturation", id: 0x5, access: "O", conformance: "HS",
            direction: "request", response: "status",
            details: "The StepSaturation command SHALL have the following data fields",
            xref: { document: "cluster", section: "3.2.11.9" },
            children: [
                {
                    tag: "datatype", name: "StepMode", id: 0x0, type: "enum8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.9" }
                },

                {
                    tag: "datatype", name: "StepSize", id: 0x1, type: "uint8", conformance: "M",
                    xref: { document: "cluster", section: "3.2.11.9" }
                },

                {
                    tag: "datatype", name: "TransitionTime", id: 0x2, type: "uint8", conformance: "M",
                    xref: { document: "cluster", section: "3.2.11.9" }
                },

                {
                    tag: "datatype", name: "OptionsMask", id: 0x3, type: "map8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.9" }
                },

                {
                    tag: "datatype", name: "OptionsOverride", id: 0x4, type: "map8", conformance: "M",
                    constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.9" }
                }
            ]
        },

        {
            tag: "command", name: "MoveToHueAndSaturation", id: 0x6, access: "O", conformance: "HS",
            direction: "request", response: "status",
            details: "The MoveToHueAndSaturation command SHALL have the following data fields",
            xref: { document: "cluster", section: "3.2.11.10" },
            children: [
                {
                    tag: "datatype", name: "Hue", id: 0x0, type: "uint8", conformance: "M", constraint: "0 to 254",
                    xref: { document: "cluster", section: "3.2.11.10" }
                },

                {
                    tag: "datatype", name: "Saturation", id: 0x1, type: "uint8", conformance: "M",
                    constraint: "0 to 254",
                    xref: { document: "cluster", section: "3.2.11.10" }
                },

                {
                    tag: "datatype", name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M",
                    constraint: "0 to 65534",
                    xref: { document: "cluster", section: "3.2.11.10" }
                },

                {
                    tag: "datatype", name: "OptionsMask", id: 0x3, type: "map8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.10" }
                },

                {
                    tag: "datatype", name: "OptionsOverride", id: 0x4, type: "map8", conformance: "M",
                    constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.10" }
                }
            ]
        },

        {
            tag: "command", name: "MoveToColor", id: 0x7, access: "O", conformance: "X, Y",
            direction: "request", response: "status",
            details: "The MoveToColor command SHALL have the following data fields",
            xref: { document: "cluster", section: "3.2.11.11" },
            children: [
                {
                    tag: "datatype", name: "ColorX", id: 0x0, type: "uint16", conformance: "M", constraint: "0",
                    xref: { document: "cluster", section: "3.2.11.11" }
                },

                {
                    tag: "datatype", name: "ColorY", id: 0x1, type: "uint16", conformance: "M", constraint: "0",
                    xref: { document: "cluster", section: "3.2.11.11" }
                },

                {
                    tag: "datatype", name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M",
                    constraint: "0 to 65534",
                    xref: { document: "cluster", section: "3.2.11.11" }
                },

                {
                    tag: "datatype", name: "OptionsMask", id: 0x3, type: "map8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.11" }
                },

                {
                    tag: "datatype", name: "OptionsOverride", id: 0x4, type: "map8", conformance: "M",
                    constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.11" }
                }
            ]
        },

        {
            tag: "command", name: "MoveColor", id: 0x8, access: "O", conformance: "X, Y", direction: "request",
            response: "status",
            details: "The MoveColor command SHALL have the following data fields",
            xref: { document: "cluster", section: "3.2.11.12" },
            children: [
                {
                    tag: "datatype", name: "RateX", id: 0x0, type: "int16", conformance: "M",
                    xref: { document: "cluster", section: "3.2.11.12" }
                },

                {
                    tag: "datatype", name: "RateY", id: 0x1, type: "int16", conformance: "M",
                    xref: { document: "cluster", section: "3.2.11.12" }
                },

                {
                    tag: "datatype", name: "OptionsMask", id: 0x2, type: "map8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.12" }
                },

                {
                    tag: "datatype", name: "OptionsOverride", id: 0x3, type: "map8", conformance: "M",
                    constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.12" }
                }
            ]
        },

        {
            tag: "command", name: "StepColor", id: 0x9, access: "O", conformance: "X, Y", direction: "request",
            response: "status",
            details: "The StepColor command SHALL have the following data fields",
            xref: { document: "cluster", section: "3.2.11.13" },
            children: [
                {
                    tag: "datatype", name: "StepX", id: 0x0, type: "int16", conformance: "M",
                    xref: { document: "cluster", section: "3.2.11.13" }
                },

                {
                    tag: "datatype", name: "StepY", id: 0x1, type: "int16", conformance: "M",
                    xref: { document: "cluster", section: "3.2.11.13" }
                },

                {
                    tag: "datatype", name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M",
                    constraint: "0 to 65534",
                    xref: { document: "cluster", section: "3.2.11.13" }
                },

                {
                    tag: "datatype", name: "OptionsMask", id: 0x3, type: "map8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.13" }
                },

                {
                    tag: "datatype", name: "OptionsOverride", id: 0x4, type: "map8", conformance: "M",
                    constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.13" }
                }
            ]
        },

        {
            tag: "command", name: "MoveToColorTemperature", id: 0xa, access: "O", conformance: "CT",
            direction: "request", response: "status",
            details: "The MoveToColorTemperature command SHALL have the following data fields",
            xref: { document: "cluster", section: "3.2.11.14" },
            children: [
                {
                    tag: "datatype", name: "ColorTemperatureMireds", id: 0x0, type: "uint16", conformance: "M",
                    constraint: "0",
                    xref: { document: "cluster", section: "3.2.11.14" }
                },

                {
                    tag: "datatype", name: "TransitionTime", id: 0x1, type: "uint16", conformance: "M",
                    constraint: "0 to 65534",
                    xref: { document: "cluster", section: "3.2.11.14" }
                },

                {
                    tag: "datatype", name: "OptionsMask", id: 0x2, type: "map8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.14" }
                },

                {
                    tag: "datatype", name: "OptionsOverride", id: 0x3, type: "map8", conformance: "M",
                    constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.14" }
                }
            ]
        },

        {
            tag: "command", name: "EnhancedMoveToHue", id: 0x40, access: "O", conformance: "EHUE",
            direction: "request", response: "status",
            details: "The EnhancedMoveToHue command allows lamps to be moved in a smooth continuous transition from their " +
                     "current hue to a target hue",
            xref: { document: "cluster", section: "3.2.11.15" },
            children: [
                {
                    tag: "datatype", name: "EnhancedHue", id: 0x0, type: "uint16", conformance: "M",
                    xref: { document: "cluster", section: "3.2.11.15" }
                },

                {
                    tag: "datatype", name: "Direction", id: 0x1, type: "enum8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.15" }
                },

                {
                    tag: "datatype", name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M",
                    constraint: "0 to 65534",
                    xref: { document: "cluster", section: "3.2.11.15" }
                },

                {
                    tag: "datatype", name: "OptionsMask", id: 0x3, type: "map8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.15" }
                },

                {
                    tag: "datatype", name: "OptionsOverride", id: 0x4, type: "map8", conformance: "M",
                    constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.15" }
                }
            ]
        },

        {
            tag: "command", name: "EnhancedMoveHue", id: 0x41, access: "O", conformance: "EHUE",
            direction: "request", response: "status",
            details: "The EnhancedMoveHue command allows lamps to be moved in a continuous stepped transition from their " +
                     "current hue to a target hue",
            xref: { document: "cluster", section: "3.2.11.16" },
            children: [
                {
                    tag: "datatype", name: "MoveMode", id: 0x0, type: "enum8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.16" }
                },

                {
                    tag: "datatype", name: "Rate", id: 0x1, type: "uint16", conformance: "M",
                    xref: { document: "cluster", section: "3.2.11.16" }
                },

                {
                    tag: "datatype", name: "OptionsMask", id: 0x2, type: "map8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.16" }
                },

                {
                    tag: "datatype", name: "OptionsOverride", id: 0x3, type: "map8", conformance: "M",
                    constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.16" }
                }
            ]
        },

        {
            tag: "command", name: "EnhancedStepHue", id: 0x42, access: "O", conformance: "EHUE",
            direction: "request", response: "status",
            details: "The EnhancedStepHue command allows lamps to be moved in a stepped transition from their current hue " +
                     "to a target hue, resulting in a linear transition through XY space",
            xref: { document: "cluster", section: "3.2.11.17" },
            children: [
                {
                    tag: "datatype", name: "StepMode", id: 0x0, type: "enum8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.17" }
                },

                {
                    tag: "datatype", name: "StepSize", id: 0x1, type: "uint16", conformance: "M",
                    xref: { document: "cluster", section: "3.2.11.17" }
                },

                {
                    tag: "datatype", name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M",
                    constraint: "0 to 65534",
                    xref: { document: "cluster", section: "3.2.11.17" }
                },

                {
                    tag: "datatype", name: "OptionsMask", id: 0x3, type: "map8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.17" }
                },

                {
                    tag: "datatype", name: "OptionsOverride", id: 0x4, type: "map8", conformance: "M",
                    constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.17" }
                }
            ]
        },

        {
            tag: "command", name: "EnhancedMoveToHueAndSaturation", id: 0x43, access: "O", conformance: "EHUE",
            direction: "request", response: "status",
            details: "The EnhancedMoveToHueAndSaturation command allows lamps to be moved in a smooth continuous " +
                     "transition from their current hue to a target hue and from their current saturation to a target " +
                     "saturation",
            xref: { document: "cluster", section: "3.2.11.18" },
            children: [
                {
                    tag: "datatype", name: "EnhancedHue", id: 0x0, type: "uint16", conformance: "M",
                    xref: { document: "cluster", section: "3.2.11.18" }
                },

                {
                    tag: "datatype", name: "Saturation", id: 0x1, type: "uint8", conformance: "M",
                    constraint: "0 to 254",
                    xref: { document: "cluster", section: "3.2.11.18" }
                },

                {
                    tag: "datatype", name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M",
                    constraint: "0 to 65534",
                    xref: { document: "cluster", section: "3.2.11.18" }
                },

                {
                    tag: "datatype", name: "OptionsMask", id: 0x3, type: "map8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.18" }
                },

                {
                    tag: "datatype", name: "OptionsOverride", id: 0x4, type: "map8", conformance: "M",
                    constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.18" }
                }
            ]
        },

        {
            tag: "command", name: "ColorLoopSet", id: 0x44, access: "O", conformance: "CL",
            direction: "request", response: "status",
            details: "The Color Loop Set command allows a color loop to be activated such that the color lamp cycles " +
                     "through its range of hues",
            xref: { document: "cluster", section: "3.2.11.19" },
            children: [
                {
                    tag: "datatype", name: "UpdateFlags", id: 0x0, type: "map8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.19" }
                },

                {
                    tag: "datatype", name: "Action", id: 0x1, type: "enum8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.19" }
                },

                {
                    tag: "datatype", name: "Direction", id: 0x2, type: "enum8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.19" }
                },

                {
                    tag: "datatype", name: "Time", id: 0x3, type: "uint16", conformance: "M",
                    xref: { document: "cluster", section: "3.2.11.19" }
                },

                {
                    tag: "datatype", name: "StartHue", id: 0x4, type: "uint16", conformance: "M",
                    xref: { document: "cluster", section: "3.2.11.19" }
                },

                {
                    tag: "datatype", name: "OptionsMask", id: 0x5, type: "map8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.19" }
                },

                {
                    tag: "datatype", name: "OptionsOverride", id: 0x6, type: "map8", conformance: "M",
                    constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.19" }
                }
            ]
        },

        {
            tag: "command", name: "StopMoveStep", id: 0x47, access: "O", conformance: "HS | X, Y | CT",
            direction: "request", response: "status",
            details: "The StopMoveStep command is provided to allow MoveTo and Step commands to be stopped. (Note this " +
                     "automatically provides symmetry to the Level Control cluster",
            xref: { document: "cluster", section: "3.2.11.20" },
            children: [
                {
                    tag: "datatype", name: "OptionsMask", id: 0x0, type: "map8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.20" }
                },

                {
                    tag: "datatype", name: "OptionsOverride", id: 0x1, type: "map8", conformance: "M",
                    constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.20" }
                }
            ]
        },

        {
            tag: "command", name: "MoveColorTemperature", id: 0x4b, access: "O", conformance: "CT",
            direction: "request", response: "status",
            details: "The MoveColorTemperature command allows the color temperature of a lamp to be moved at a specified " +
                     "rate",
            xref: { document: "cluster", section: "3.2.11.21" },
            children: [
                {
                    tag: "datatype", name: "MoveMode", id: 0x0, type: "map8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.21" }
                },

                {
                    tag: "datatype", name: "Rate", id: 0x1, type: "uint16", conformance: "M",
                    xref: { document: "cluster", section: "3.2.11.21" }
                },

                {
                    tag: "datatype", name: "ColorTemperatureMinimumMireds", id: 0x2, type: "uint16", conformance: "M",
                    constraint: "0",
                    xref: { document: "cluster", section: "3.2.11.21" }
                },

                {
                    tag: "datatype", name: "ColorTemperatureMaximumMireds", id: 0x3, type: "uint16", conformance: "M",
                    constraint: "0",
                    xref: { document: "cluster", section: "3.2.11.21" }
                },

                {
                    tag: "datatype", name: "OptionsMask", id: 0x4, type: "map8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.21" }
                },

                {
                    tag: "datatype", name: "OptionsOverride", id: 0x5, type: "map8", conformance: "M",
                    constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.21" }
                }
            ]
        },

        {
            tag: "command", name: "StepColorTemperature", id: 0x4c, access: "O", conformance: "CT",
            direction: "request", response: "status",
            details: "The StepColorTemperature command allows the color temperature of a lamp to be stepped with a " +
                     "specified step size",
            xref: { document: "cluster", section: "3.2.11.22" },
            children: [
                {
                    tag: "datatype", name: "StepMode", id: 0x0, type: "map8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.22" }
                },

                {
                    tag: "datatype", name: "StepSize", id: 0x1, type: "uint16", conformance: "M",
                    xref: { document: "cluster", section: "3.2.11.22" }
                },

                {
                    tag: "datatype", name: "TransitionTime", id: 0x2, type: "uint16", conformance: "M",
                    constraint: "0 to 65534",
                    xref: { document: "cluster", section: "3.2.11.22" }
                },

                {
                    tag: "datatype", name: "ColorTemperatureMinimumMireds", id: 0x3, type: "uint16", conformance: "M",
                    constraint: "0",
                    xref: { document: "cluster", section: "3.2.11.22" }
                },

                {
                    tag: "datatype", name: "ColorTemperatureMaximumMireds", id: 0x4, type: "uint16", conformance: "M",
                    constraint: "0",
                    xref: { document: "cluster", section: "3.2.11.22" }
                },

                {
                    tag: "datatype", name: "OptionsMask", id: 0x5, type: "map8", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.22" }
                },

                {
                    tag: "datatype", name: "OptionsOverride", id: 0x6, type: "map8", conformance: "M",
                    constraint: "desc",
                    xref: { document: "cluster", section: "3.2.11.22" }
                }
            ]
        },

        {
            tag: "datatype", name: "HueDirection", type: "enum8", conformance: "M",
            children: [
                {
                    tag: "datatype", name: "ShortestDistance", id: 0x0, conformance: "M"
                },

                {
                    tag: "datatype", name: "LongestDistance", id: 0x1, conformance: "M"
                },

                {
                    tag: "datatype", name: "Up", id: 0x2, conformance: "M"
                },

                {
                    tag: "datatype", name: "Down", id: 0x3, conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "HueMoveMode", type: "enum8", conformance: "M",
            children: [
                {
                    tag: "datatype", name: "Stop", id: 0x0, conformance: "M"
                },

                {
                    tag: "datatype", name: "Up", id: 0x1, conformance: "M"
                },

                {
                    tag: "datatype", name: "Down", id: 0x3, conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "HueStepMode", type: "enum8", conformance: "M",
            children: [
                {
                    tag: "datatype", name: "Up", id: 0x1, conformance: "M"
                },

                {
                    tag: "datatype", name: "Down", id: 0x3, conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "SaturationMoveMode", type: "enum8", conformance: "M",
            children: [
                {
                    tag: "datatype", name: "Stop", id: 0x0, conformance: "M"
                },

                {
                    tag: "datatype", name: "Up", id: 0x1, conformance: "M"
                },

                {
                    tag: "datatype", name: "Down", id: 0x3, conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "SaturationStepMode", type: "enum8", conformance: "M",
            children: [
                {
                    tag: "datatype", name: "Up", id: 0x1, conformance: "M"
                },

                {
                    tag: "datatype", name: "Down", id: 0x3, conformance: "M"
                }
            ]
        }
    ]
});
