/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const ColorControl = Cluster(
    { name: "ColorControl", id: 0x300 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 7 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "HS", constraint: "0", conformance: "EHUE, O", longName: "HueSaturation" }),
        Field({ name: "EHUE", constraint: "1", conformance: "CL, O", longName: "EnhancedHue" }),
        Field({ name: "CL", constraint: "2", conformance: "O", longName: "ColorLoop" }),
        Field({ name: "XY", constraint: "3", conformance: "O", longName: "Xy" }),
        Field({ name: "CT", constraint: "4", conformance: "O", longName: "ColorTemperature" })
    ),

    Attribute({
        name: "CurrentHue", id: 0x0, type: "uint8",
        default: 0, constraint: "max 254", conformance: "HS", access: "R V", quality: "N P Q"
    }),
    Attribute({
        name: "CurrentSaturation", id: 0x1, type: "uint8",
        default: 0, constraint: "max 254", conformance: "HS", access: "R V", quality: "N S P Q"
    }),
    Attribute({
        name: "RemainingTime", id: 0x2, type: "uint16",
        default: 0, constraint: "0 to 65535", access: "R V", quality: "Q"
    }),
    Attribute({
        name: "CurrentX", id: 0x3, type: "uint16",
        default: 24939, constraint: "max 65279", conformance: "XY", access: "R V", quality: "N S P Q"
    }),
    Attribute({
        name: "CurrentY", id: 0x4, type: "uint16",
        default: 24701, constraint: "max 65279", conformance: "XY", access: "R V", quality: "N S P Q"
    }),
    Attribute({ name: "DriftCompensation", id: 0x5, type: "DriftCompensationEnum", conformance: "O", access: "R V" }),
    Attribute(
        { name: "CompensationText", id: 0x6, type: "string", constraint: "max 254", conformance: "O", access: "R V" }
    ),
    Attribute({
        name: "ColorTemperatureMireds", id: 0x7, type: "uint16",
        default: 250, constraint: "colorTempPhysicalMinMireds to colorTempPhysicalMaxMireds", access: "R V",
        quality: "N S P Q"
    }),
    Attribute({ name: "ColorMode", id: 0x8, type: "ColorModeEnum", access: "R V", quality: "N" }),
    Attribute({
        name: "Options", id: 0xf, type: "OptionsBitmap",
        default: 0, constraint: "desc", conformance: "M", access: "RW VO"
    }),
    Attribute({
        name: "NumberOfPrimaries", id: 0x10, type: "uint8",
        constraint: "max 6", conformance: "M", access: "R V", quality: "X F"
    }),
    Attribute({
        name: "Primary1X", id: 0x11, type: "uint16",
        constraint: "max 65279", conformance: "NumberOfPrimaries > 0", access: "R V", quality: "F"
    }),
    Attribute({
        name: "Primary1Y", id: 0x12, type: "uint16",
        constraint: "max 65279", conformance: "NumberOfPrimaries > 0", access: "R V", quality: "F"
    }),
    Attribute({
        name: "Primary1Intensity", id: 0x13, type: "uint8",
        conformance: "NumberOfPrimaries > 0", access: "R V", quality: "X F"
    }),
    Attribute({
        name: "Primary2X", id: 0x15, type: "uint16",
        constraint: "max 65279", conformance: "NumberOfPrimaries > 1", access: "R V", quality: "F"
    }),
    Attribute({
        name: "Primary2Y", id: 0x16, type: "uint16",
        constraint: "max 65279", conformance: "NumberOfPrimaries > 1", access: "R V", quality: "F"
    }),
    Attribute({
        name: "Primary2Intensity", id: 0x17, type: "uint8",
        conformance: "NumberOfPrimaries > 1", access: "R V", quality: "X F"
    }),
    Attribute({
        name: "Primary3X", id: 0x19, type: "uint16",
        constraint: "max 65279", conformance: "NumberOfPrimaries > 2", access: "R V", quality: "F"
    }),
    Attribute({
        name: "Primary3Y", id: 0x1a, type: "uint16",
        constraint: "max 65279", conformance: "NumberOfPrimaries > 2", access: "R V", quality: "F"
    }),
    Attribute({
        name: "Primary3Intensity", id: 0x1b, type: "uint8",
        conformance: "NumberOfPrimaries > 2", access: "R V", quality: "X F"
    }),
    Attribute({
        name: "Primary4X", id: 0x20, type: "uint16",
        constraint: "max 65279", conformance: "NumberOfPrimaries > 3", access: "R V", quality: "F"
    }),
    Attribute({
        name: "Primary4Y", id: 0x21, type: "uint16",
        constraint: "max 65279", conformance: "NumberOfPrimaries > 3", access: "R V", quality: "F"
    }),
    Attribute({
        name: "Primary4Intensity", id: 0x22, type: "uint8",
        conformance: "NumberOfPrimaries > 3", access: "R V", quality: "X F"
    }),
    Attribute({
        name: "Primary5X", id: 0x24, type: "uint16",
        constraint: "max 65279", conformance: "NumberOfPrimaries > 4", access: "R V", quality: "F"
    }),
    Attribute({
        name: "Primary5Y", id: 0x25, type: "uint16",
        constraint: "max 65279", conformance: "NumberOfPrimaries > 4", access: "R V", quality: "F"
    }),
    Attribute({
        name: "Primary5Intensity", id: 0x26, type: "uint8",
        conformance: "NumberOfPrimaries > 4", access: "R V", quality: "X F"
    }),
    Attribute({
        name: "Primary6X", id: 0x28, type: "uint16",
        constraint: "max 65279", conformance: "NumberOfPrimaries > 5", access: "R V", quality: "F"
    }),
    Attribute({
        name: "Primary6Y", id: 0x29, type: "uint16",
        constraint: "max 65279", conformance: "NumberOfPrimaries > 5", access: "R V", quality: "F"
    }),
    Attribute({
        name: "Primary6Intensity", id: 0x2a, type: "uint8",
        conformance: "NumberOfPrimaries > 5", access: "R V", quality: "X F"
    }),
    Attribute(
        { name: "WhitePointX", id: 0x30, type: "uint16", constraint: "max 65279", conformance: "O", access: "RW VM" }
    ),
    Attribute(
        { name: "WhitePointY", id: 0x31, type: "uint16", constraint: "max 65279", conformance: "O", access: "RW VM" }
    ),
    Attribute(
        { name: "ColorPointRx", id: 0x32, type: "uint16", constraint: "max 65279", conformance: "O", access: "RW VM" }
    ),
    Attribute(
        { name: "ColorPointRy", id: 0x33, type: "uint16", constraint: "max 65279", conformance: "O", access: "RW VM" }
    ),
    Attribute({ name: "ColorPointRIntensity", id: 0x34, type: "uint8", conformance: "O", access: "RW VM", quality: "X" }),
    Attribute(
        { name: "ColorPointGx", id: 0x36, type: "uint16", constraint: "max 65279", conformance: "O", access: "RW VM" }
    ),
    Attribute(
        { name: "ColorPointGy", id: 0x37, type: "uint16", constraint: "max 65279", conformance: "O", access: "RW VM" }
    ),
    Attribute({ name: "ColorPointGIntensity", id: 0x38, type: "uint8", conformance: "O", access: "RW VM", quality: "X" }),
    Attribute(
        { name: "ColorPointBx", id: 0x3a, type: "uint16", constraint: "max 65279", conformance: "O", access: "RW VM" }
    ),
    Attribute(
        { name: "ColorPointBy", id: 0x3b, type: "uint16", constraint: "max 65279", conformance: "O", access: "RW VM" }
    ),
    Attribute({ name: "ColorPointBIntensity", id: 0x3c, type: "uint8", conformance: "O", access: "RW VM", quality: "X" }),
    Attribute({
        name: "EnhancedCurrentHue", id: 0x4000, type: "uint16",
        default: 0, conformance: "EHUE", access: "R V", quality: "N S Q"
    }),
    Attribute({
        name: "EnhancedColorMode", id: 0x4001, type: "EnhancedColorModeEnum",
        default: 1, conformance: "M", access: "R V", quality: "N S"
    }),

    Attribute(
        {
            name: "ColorLoopActive", id: 0x4002, type: "enum16",
            default: 0, constraint: "max 1", access: "R V", quality: "N S"
        },
        Field({ name: "Inactive", id: 0x0 }),
        Field({ name: "Active", id: 0x1 })
    ),

    Attribute({
        name: "ColorLoopDirection", id: 0x4003, type: "ColorLoopDirectionEnum",
        default: 0, constraint: "max 1", access: "R V", quality: "N S"
    }),
    Attribute({
        name: "ColorLoopTime", id: 0x4004, type: "uint16",
        default: 25, conformance: "CL", access: "R V", quality: "N S"
    }),
    Attribute({ name: "ColorLoopStartEnhancedHue", id: 0x4005, type: "uint16", default: 8960, conformance: "CL", access: "R V" }),
    Attribute({ name: "ColorLoopStoredEnhancedHue", id: 0x4006, type: "uint16", default: 0, conformance: "CL", access: "R V" }),

    Attribute(
        { name: "ColorCapabilities", id: 0x400a, type: "map16", default: 0, constraint: "max 31", access: "R V" },
        Field({ name: "HueSaturation", constraint: "0" }),
        Field({ name: "EnhancedHue", constraint: "1" }),
        Field({ name: "ColorLoop", constraint: "2" }),
        Field({ name: "XY", constraint: "3" }),
        Field({ name: "ColorTemperature", constraint: "4" })
    ),

    Attribute({
        name: "ColorTempPhysicalMinMireds", id: 0x400b, type: "uint16",
        constraint: "1 to 65279", conformance: "CT", access: "R V"
    }),
    Attribute({
        name: "ColorTempPhysicalMaxMireds", id: 0x400c, type: "uint16",
        constraint: "max 65279", conformance: "CT", access: "R V"
    }),
    Attribute({
        name: "CoupleColorTempToLevelMinMireds", id: 0x400d, type: "uint16",
        constraint: "colorTempPhysicalMinMireds to colorTemperatureMireds",
        conformance: "CT & ColorTemperatureMireds", access: "R V"
    }),
    Attribute({
        name: "StartUpColorTemperatureMireds", id: 0x4010, type: "uint16",
        constraint: "1 to 65279", conformance: "CT & ColorTemperatureMireds", access: "RW VM",
        quality: "X N"
    }),

    Command(
        { name: "MoveToHue", id: 0x0, conformance: "HS", access: "O", direction: "request", response: "status" },
        Field({ name: "Hue", id: 0x0, type: "uint8", constraint: "max 254", conformance: "M" }),
        Field({ name: "Direction", id: 0x1, type: "DirectionEnum", conformance: "M" }),
        Field({ name: "TransitionTime", id: 0x2, type: "uint16", constraint: "max 65534", conformance: "M" }),
        Field({ name: "OptionsMask", id: 0x3, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" }),
        Field({ name: "OptionsOverride", id: 0x4, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" })
    ),

    Command(
        { name: "MoveHue", id: 0x1, conformance: "HS", access: "O", direction: "request", response: "status" },
        Field({ name: "MoveMode", id: 0x0, type: "MoveModeEnum", conformance: "M" }),
        Field({ name: "Rate", id: 0x1, type: "uint8", conformance: "M" }),
        Field({ name: "OptionsMask", id: 0x2, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" }),
        Field({ name: "OptionsOverride", id: 0x3, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" })
    ),

    Command(
        { name: "StepHue", id: 0x2, conformance: "HS", access: "O", direction: "request", response: "status" },
        Field({ name: "StepMode", id: 0x0, type: "StepModeEnum", conformance: "M" }),
        Field({ name: "StepSize", id: 0x1, type: "uint8", conformance: "M" }),
        Field({ name: "TransitionTime", id: 0x2, type: "uint8", conformance: "M" }),
        Field({ name: "OptionsMask", id: 0x3, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" }),
        Field({ name: "OptionsOverride", id: 0x4, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" })
    ),

    Command(
        { name: "MoveToSaturation", id: 0x3, conformance: "HS", access: "O", direction: "request", response: "status" },
        Field({ name: "Saturation", id: 0x0, type: "uint8", constraint: "max 254", conformance: "M" }),
        Field({ name: "TransitionTime", id: 0x1, type: "uint16", constraint: "max 65534", conformance: "M" }),
        Field({ name: "OptionsMask", id: 0x2, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" }),
        Field({ name: "OptionsOverride", id: 0x3, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" })
    ),

    Command(
        { name: "MoveSaturation", id: 0x4, conformance: "HS", access: "O", direction: "request", response: "status" },
        Field({ name: "MoveMode", id: 0x0, type: "MoveModeEnum", conformance: "M" }),
        Field({ name: "Rate", id: 0x1, type: "uint8", conformance: "M" }),
        Field({ name: "OptionsMask", id: 0x2, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" }),
        Field({ name: "OptionsOverride", id: 0x3, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" })
    ),

    Command(
        { name: "StepSaturation", id: 0x5, conformance: "HS", access: "O", direction: "request", response: "status" },
        Field({ name: "StepMode", id: 0x0, type: "StepModeEnum", conformance: "M" }),
        Field({ name: "StepSize", id: 0x1, type: "uint8", conformance: "M" }),
        Field({ name: "TransitionTime", id: 0x2, type: "uint8", conformance: "M" }),
        Field({ name: "OptionsMask", id: 0x3, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" }),
        Field({ name: "OptionsOverride", id: 0x4, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" })
    ),

    Command(
        {
            name: "MoveToHueAndSaturation", id: 0x6,
            conformance: "HS", access: "O", direction: "request", response: "status"
        },
        Field({ name: "Hue", id: 0x0, type: "uint8", constraint: "max 254", conformance: "M" }),
        Field({ name: "Saturation", id: 0x1, type: "uint8", constraint: "max 254", conformance: "M" }),
        Field({ name: "TransitionTime", id: 0x2, type: "uint16", constraint: "max 65534", conformance: "M" }),
        Field({ name: "OptionsMask", id: 0x3, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" }),
        Field({ name: "OptionsOverride", id: 0x4, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" })
    ),

    Command(
        { name: "MoveToColor", id: 0x7, conformance: "XY", access: "O", direction: "request", response: "status" },
        Field({ name: "ColorX", id: 0x0, type: "uint16", constraint: "max 65279", conformance: "M" }),
        Field({ name: "ColorY", id: 0x1, type: "uint16", constraint: "max 65279", conformance: "M" }),
        Field({ name: "TransitionTime", id: 0x2, type: "uint16", constraint: "max 65534", conformance: "M" }),
        Field({ name: "OptionsMask", id: 0x3, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" }),
        Field({ name: "OptionsOverride", id: 0x4, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" })
    ),

    Command(
        { name: "MoveColor", id: 0x8, conformance: "XY", access: "O", direction: "request", response: "status" },
        Field({ name: "RateX", id: 0x0, type: "int16", conformance: "M" }),
        Field({ name: "RateY", id: 0x1, type: "int16", conformance: "M" }),
        Field({ name: "OptionsMask", id: 0x2, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" }),
        Field({ name: "OptionsOverride", id: 0x3, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" })
    ),

    Command(
        { name: "StepColor", id: 0x9, conformance: "XY", access: "O", direction: "request", response: "status" },
        Field({ name: "StepX", id: 0x0, type: "int16", conformance: "M" }),
        Field({ name: "StepY", id: 0x1, type: "int16", conformance: "M" }),
        Field({ name: "TransitionTime", id: 0x2, type: "uint16", constraint: "max 65534", conformance: "M" }),
        Field({ name: "OptionsMask", id: 0x3, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" }),
        Field({ name: "OptionsOverride", id: 0x4, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" })
    ),

    Command(
        {
            name: "MoveToColorTemperature", id: 0xa,
            conformance: "CT", access: "O", direction: "request", response: "status"
        },
        Field({ name: "ColorTemperatureMireds", id: 0x0, type: "uint16", constraint: "max 65279", conformance: "M" }),
        Field({ name: "TransitionTime", id: 0x1, type: "uint16", constraint: "max 65534", conformance: "M" }),
        Field({ name: "OptionsMask", id: 0x2, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" }),
        Field({ name: "OptionsOverride", id: 0x3, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" })
    ),

    Command(
        {
            name: "EnhancedMoveToHue", id: 0x40,
            conformance: "EHUE", access: "O", direction: "request", response: "status"
        },
        Field({ name: "EnhancedHue", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "Direction", id: 0x1, type: "DirectionEnum", conformance: "M" }),
        Field({ name: "TransitionTime", id: 0x2, type: "uint16", constraint: "max 65534", conformance: "M" }),
        Field({ name: "OptionsMask", id: 0x3, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" }),
        Field({ name: "OptionsOverride", id: 0x4, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" })
    ),

    Command(
        {
            name: "EnhancedMoveHue", id: 0x41,
            conformance: "EHUE", access: "O", direction: "request", response: "status"
        },
        Field({ name: "MoveMode", id: 0x0, type: "MoveModeEnum", constraint: "desc", conformance: "M" }),
        Field({ name: "Rate", id: 0x1, type: "uint16", conformance: "M" }),
        Field({ name: "OptionsMask", id: 0x2, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" }),
        Field({ name: "OptionsOverride", id: 0x3, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" })
    ),

    Command(
        {
            name: "EnhancedStepHue", id: 0x42,
            conformance: "EHUE", access: "O", direction: "request", response: "status"
        },
        Field({ name: "StepMode", id: 0x0, type: "StepModeEnum", constraint: "desc", conformance: "M" }),
        Field({ name: "StepSize", id: 0x1, type: "uint16", conformance: "M" }),
        Field({ name: "TransitionTime", id: 0x2, type: "uint16", constraint: "max 65534", conformance: "M" }),
        Field({ name: "OptionsMask", id: 0x3, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" }),
        Field({ name: "OptionsOverride", id: 0x4, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" })
    ),

    Command(
        {
            name: "EnhancedMoveToHueAndSaturation", id: 0x43,
            conformance: "EHUE", access: "O", direction: "request", response: "status"
        },
        Field({ name: "EnhancedHue", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "Saturation", id: 0x1, type: "uint8", constraint: "max 254", conformance: "M" }),
        Field({ name: "TransitionTime", id: 0x2, type: "uint16", constraint: "max 65534", conformance: "M" }),
        Field({ name: "OptionsMask", id: 0x3, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" }),
        Field({ name: "OptionsOverride", id: 0x4, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" })
    ),

    Command(
        { name: "ColorLoopSet", id: 0x44, conformance: "CL", access: "O", direction: "request", response: "status" },
        Field({ name: "UpdateFlags", id: 0x0, type: "UpdateFlagsBitmap", conformance: "M" }),
        Field({ name: "Action", id: 0x1, type: "ColorLoopActionEnum", conformance: "M" }),
        Field({ name: "Direction", id: 0x2, type: "ColorLoopDirectionEnum", conformance: "M" }),
        Field({ name: "Time", id: 0x3, type: "uint16", conformance: "M" }),
        Field({ name: "StartHue", id: 0x4, type: "uint16", conformance: "M" }),
        Field({ name: "OptionsMask", id: 0x5, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" }),
        Field({ name: "OptionsOverride", id: 0x6, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" })
    ),

    Command(
        {
            name: "StopMoveStep", id: 0x47,
            conformance: "HS | XY | CT", access: "O", direction: "request", response: "status"
        },
        Field({ name: "OptionsMask", id: 0x0, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" }),
        Field({ name: "OptionsOverride", id: 0x1, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" })
    ),

    Command(
        {
            name: "MoveColorTemperature", id: 0x4b,
            conformance: "CT", access: "O", direction: "request", response: "status"
        },
        Field({ name: "MoveMode", id: 0x0, type: "MoveModeEnum", conformance: "M" }),
        Field({ name: "Rate", id: 0x1, type: "uint16", conformance: "M" }),
        Field({ name: "ColorTemperatureMinimumMireds", id: 0x2, type: "uint16", constraint: "max 65279", conformance: "M" }),
        Field({ name: "ColorTemperatureMaximumMireds", id: 0x3, type: "uint16", constraint: "max 65279", conformance: "M" }),
        Field({ name: "OptionsMask", id: 0x4, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" }),
        Field({ name: "OptionsOverride", id: 0x5, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" })
    ),

    Command(
        {
            name: "StepColorTemperature", id: 0x4c,
            conformance: "CT", access: "O", direction: "request", response: "status"
        },
        Field({ name: "StepMode", id: 0x0, type: "StepModeEnum", conformance: "M" }),
        Field({ name: "StepSize", id: 0x1, type: "uint16", conformance: "M" }),
        Field({ name: "TransitionTime", id: 0x2, type: "uint16", constraint: "max 65534", conformance: "M" }),
        Field({ name: "ColorTemperatureMinimumMireds", id: 0x3, type: "uint16", constraint: "max 65279", conformance: "M" }),
        Field({ name: "ColorTemperatureMaximumMireds", id: 0x4, type: "uint16", constraint: "max 65279", conformance: "M" }),
        Field({ name: "OptionsMask", id: 0x5, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" }),
        Field({ name: "OptionsOverride", id: 0x6, type: "OptionsBitmap", default: 0, constraint: "desc", conformance: "M" })
    ),

    Datatype({ name: "OptionsBitmap", type: "map8" }, Field({ name: "ExecuteIfOff", constraint: "0" })),

    Datatype(
        { name: "UpdateFlagsBitmap", type: "map8" },
        Field({ name: "UpdateAction", constraint: "0" }),
        Field({ name: "UpdateDirection", constraint: "1" }),
        Field({ name: "UpdateTime", constraint: "2" }),
        Field({ name: "UpdateStartHue", constraint: "3" })
    ),

    Datatype(
        { name: "DriftCompensationEnum", type: "enum8" },
        Field({ name: "None", id: 0x0, conformance: "M" }),
        Field({ name: "OtherOrUnknown", id: 0x1, conformance: "M" }),
        Field({ name: "TemperatureMonitoring", id: 0x2, conformance: "M" }),
        Field({ name: "OpticalLuminanceMonitoringAndFeedback", id: 0x3, conformance: "M" }),
        Field({ name: "OpticalColorMonitoringAndFeedback", id: 0x4, conformance: "M" })
    ),

    Datatype(
        { name: "ColorModeEnum", type: "enum8" },
        Field({ name: "CurrentHueAndCurrentSaturation", id: 0x0, conformance: "M" }),
        Field({ name: "CurrentXAndCurrentY", id: 0x1, conformance: "M" }),
        Field({ name: "ColorTemperatureMireds", id: 0x2, conformance: "M" })
    ),

    Datatype(
        { name: "EnhancedColorModeEnum", type: "enum8" },
        Field({ name: "CurrentHueAndCurrentSaturation", id: 0x0, conformance: "M" }),
        Field({ name: "CurrentXAndCurrentY", id: 0x1, conformance: "M" }),
        Field({ name: "ColorTemperatureMireds", id: 0x2, conformance: "M" }),
        Field({ name: "EnhancedCurrentHueAndCurrentSaturation", id: 0x3, conformance: "M" })
    ),

    Datatype(
        { name: "DirectionEnum", type: "enum8" },
        Field({ name: "Shortest", id: 0x0, conformance: "M" }),
        Field({ name: "Longest", id: 0x1, conformance: "M" }),
        Field({ name: "Up", id: 0x2, conformance: "M" }),
        Field({ name: "Down", id: 0x3, conformance: "M" })
    ),

    Datatype(
        { name: "MoveModeEnum", type: "enum8" },
        Field({ name: "Stop", id: 0x0, conformance: "M" }),
        Field({ name: "Up", id: 0x1, conformance: "M" }),
        Field({ name: "Down", id: 0x3, conformance: "M" })
    ),

    Datatype(
        { name: "StepModeEnum", type: "enum8" },
        Field({ name: "Up", id: 0x1, conformance: "M" }),
        Field({ name: "Down", id: 0x3, conformance: "M" })
    ),

    Datatype(
        { name: "ColorLoopActionEnum", type: "enum8" },
        Field({ name: "Deactivate", id: 0x0, conformance: "M" }),
        Field({ name: "ActivateFromColorLoopStartEnhancedHue", id: 0x1, conformance: "M" }),
        Field({ name: "ActivateFromEnhancedCurrentHue", id: 0x2, conformance: "M" })
    ),

    Datatype(
        { name: "ColorLoopDirectionEnum", type: "enum8" },
        Field({ name: "Decrement", id: 0x0, conformance: "M" }),
        Field({ name: "Increment", id: 0x1, conformance: "M" })
    )
);

MatterDefinition.children.push(ColorControl);
