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
    { id: 0x300, name: "ColorControl" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 7 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "HS", conformance: "EHUE, O", constraint: "0", description: "HueSaturation" }),
        Field({ name: "EHUE", conformance: "CL, O", constraint: "1", description: "EnhancedHue" }),
        Field({ name: "CL", conformance: "O", constraint: "2", description: "ColorLoop" }),
        Field({ name: "XY", conformance: "O", constraint: "3", description: "Xy" }),
        Field({ name: "CT", conformance: "O", constraint: "4", description: "ColorTemperature" })
    ),

    Attribute({
        id: 0x0, name: "CurrentHue", type: "uint8",
        access: "R V", conformance: "HS", constraint: "max 254", default: 0, quality: "N P Q"
    }),
    Attribute({
        id: 0x1, name: "CurrentSaturation", type: "uint8",
        access: "R V", conformance: "HS", constraint: "max 254", default: 0, quality: "N S P Q"
    }),
    Attribute({
        id: 0x2, name: "RemainingTime", type: "uint16",
        access: "R V", constraint: "0 to 65535", default: 0, quality: "Q"
    }),
    Attribute({
        id: 0x3, name: "CurrentX", type: "uint16",
        access: "R V", conformance: "XY", constraint: "max 65279", default: 24939, quality: "N S P Q"
    }),
    Attribute({
        id: 0x4, name: "CurrentY", type: "uint16",
        access: "R V", conformance: "XY", constraint: "max 65279", default: 24701, quality: "N S P Q"
    }),
    Attribute({ id: 0x5, name: "DriftCompensation", type: "DriftCompensationEnum", access: "R V", conformance: "O" }),
    Attribute(
        { id: 0x6, name: "CompensationText", type: "string", access: "R V", conformance: "O", constraint: "max 254" }
    ),
    Attribute({
        id: 0x7, name: "ColorTemperatureMireds", type: "uint16",
        access: "R V", constraint: "colorTempPhysicalMinMireds to colorTempPhysicalMaxMireds", default: 250,
        quality: "N S P Q"
    }),
    Attribute({ id: 0x8, name: "ColorMode", type: "ColorModeEnum", access: "R V", quality: "N" }),
    Attribute({
        id: 0xf, name: "Options", type: "OptionsBitmap",
        access: "RW VO", conformance: "M", constraint: "desc", default: 0
    }),
    Attribute({
        id: 0x10, name: "NumberOfPrimaries", type: "uint8",
        access: "R V", conformance: "M", constraint: "max 6", quality: "X F"
    }),
    Attribute({
        id: 0x11, name: "Primary1X", type: "uint16",
        access: "R V", conformance: "NumberOfPrimaries > 0", constraint: "max 65279", quality: "F"
    }),
    Attribute({
        id: 0x12, name: "Primary1Y", type: "uint16",
        access: "R V", conformance: "NumberOfPrimaries > 0", constraint: "max 65279", quality: "F"
    }),
    Attribute({
        id: 0x13, name: "Primary1Intensity", type: "uint8",
        access: "R V", conformance: "NumberOfPrimaries > 0", quality: "X F"
    }),
    Attribute({
        id: 0x15, name: "Primary2X", type: "uint16",
        access: "R V", conformance: "NumberOfPrimaries > 1", constraint: "max 65279", quality: "F"
    }),
    Attribute({
        id: 0x16, name: "Primary2Y", type: "uint16",
        access: "R V", conformance: "NumberOfPrimaries > 1", constraint: "max 65279", quality: "F"
    }),
    Attribute({
        id: 0x17, name: "Primary2Intensity", type: "uint8",
        access: "R V", conformance: "NumberOfPrimaries > 1", quality: "X F"
    }),
    Attribute({
        id: 0x19, name: "Primary3X", type: "uint16",
        access: "R V", conformance: "NumberOfPrimaries > 2", constraint: "max 65279", quality: "F"
    }),
    Attribute({
        id: 0x1a, name: "Primary3Y", type: "uint16",
        access: "R V", conformance: "NumberOfPrimaries > 2", constraint: "max 65279", quality: "F"
    }),
    Attribute({
        id: 0x1b, name: "Primary3Intensity", type: "uint8",
        access: "R V", conformance: "NumberOfPrimaries > 2", quality: "X F"
    }),
    Attribute({
        id: 0x20, name: "Primary4X", type: "uint16",
        access: "R V", conformance: "NumberOfPrimaries > 3", constraint: "max 65279", quality: "F"
    }),
    Attribute({
        id: 0x21, name: "Primary4Y", type: "uint16",
        access: "R V", conformance: "NumberOfPrimaries > 3", constraint: "max 65279", quality: "F"
    }),
    Attribute({
        id: 0x22, name: "Primary4Intensity", type: "uint8",
        access: "R V", conformance: "NumberOfPrimaries > 3", quality: "X F"
    }),
    Attribute({
        id: 0x24, name: "Primary5X", type: "uint16",
        access: "R V", conformance: "NumberOfPrimaries > 4", constraint: "max 65279", quality: "F"
    }),
    Attribute({
        id: 0x25, name: "Primary5Y", type: "uint16",
        access: "R V", conformance: "NumberOfPrimaries > 4", constraint: "max 65279", quality: "F"
    }),
    Attribute({
        id: 0x26, name: "Primary5Intensity", type: "uint8",
        access: "R V", conformance: "NumberOfPrimaries > 4", quality: "X F"
    }),
    Attribute({
        id: 0x28, name: "Primary6X", type: "uint16",
        access: "R V", conformance: "NumberOfPrimaries > 5", constraint: "max 65279", quality: "F"
    }),
    Attribute({
        id: 0x29, name: "Primary6Y", type: "uint16",
        access: "R V", conformance: "NumberOfPrimaries > 5", constraint: "max 65279", quality: "F"
    }),
    Attribute({
        id: 0x2a, name: "Primary6Intensity", type: "uint8",
        access: "R V", conformance: "NumberOfPrimaries > 5", quality: "X F"
    }),
    Attribute(
        { id: 0x30, name: "WhitePointX", type: "uint16", access: "RW VM", conformance: "O", constraint: "max 65279" }
    ),
    Attribute(
        { id: 0x31, name: "WhitePointY", type: "uint16", access: "RW VM", conformance: "O", constraint: "max 65279" }
    ),
    Attribute(
        { id: 0x32, name: "ColorPointRx", type: "uint16", access: "RW VM", conformance: "O", constraint: "max 65279" }
    ),
    Attribute(
        { id: 0x33, name: "ColorPointRy", type: "uint16", access: "RW VM", conformance: "O", constraint: "max 65279" }
    ),
    Attribute({ id: 0x34, name: "ColorPointRIntensity", type: "uint8", access: "RW VM", conformance: "O", quality: "X" }),
    Attribute(
        { id: 0x36, name: "ColorPointGx", type: "uint16", access: "RW VM", conformance: "O", constraint: "max 65279" }
    ),
    Attribute(
        { id: 0x37, name: "ColorPointGy", type: "uint16", access: "RW VM", conformance: "O", constraint: "max 65279" }
    ),
    Attribute({ id: 0x38, name: "ColorPointGIntensity", type: "uint8", access: "RW VM", conformance: "O", quality: "X" }),
    Attribute(
        { id: 0x3a, name: "ColorPointBx", type: "uint16", access: "RW VM", conformance: "O", constraint: "max 65279" }
    ),
    Attribute(
        { id: 0x3b, name: "ColorPointBy", type: "uint16", access: "RW VM", conformance: "O", constraint: "max 65279" }
    ),
    Attribute({ id: 0x3c, name: "ColorPointBIntensity", type: "uint8", access: "RW VM", conformance: "O", quality: "X" }),
    Attribute({
        id: 0x4000, name: "EnhancedCurrentHue", type: "uint16",
        access: "R V", conformance: "EHUE", default: 0, quality: "N S Q"
    }),
    Attribute({
        id: 0x4001, name: "EnhancedColorMode", type: "EnhancedColorModeEnum",
        access: "R V", conformance: "M", default: 1, quality: "N S"
    }),

    Attribute(
        {
            id: 0x4002, name: "ColorLoopActive", type: "enum16",
            access: "R V", constraint: "max 1", default: 0, quality: "N S"
        },
        Field({ id: 0x0, name: "Inactive" }),
        Field({ id: 0x1, name: "Active" })
    ),

    Attribute({
        id: 0x4003, name: "ColorLoopDirection", type: "ColorLoopDirectionEnum",
        access: "R V", constraint: "max 1", default: 0, quality: "N S"
    }),
    Attribute({
        id: 0x4004, name: "ColorLoopTime", type: "uint16",
        access: "R V", conformance: "CL", default: 25, quality: "N S"
    }),
    Attribute({ id: 0x4005, name: "ColorLoopStartEnhancedHue", type: "uint16", access: "R V", conformance: "CL", default: 8960 }),
    Attribute({ id: 0x4006, name: "ColorLoopStoredEnhancedHue", type: "uint16", access: "R V", conformance: "CL", default: 0 }),

    Attribute(
        { id: 0x400a, name: "ColorCapabilities", type: "map16", access: "R V", constraint: "max 31", default: 0 },
        Field({ name: "HueSaturation", constraint: "0" }),
        Field({ name: "EnhancedHue", constraint: "1" }),
        Field({ name: "ColorLoop", constraint: "2" }),
        Field({ name: "XY", constraint: "3" }),
        Field({ name: "ColorTemperature", constraint: "4" })
    ),

    Attribute({
        id: 0x400b, name: "ColorTempPhysicalMinMireds", type: "uint16",
        access: "R V", conformance: "CT", constraint: "1 to 65279"
    }),
    Attribute({
        id: 0x400c, name: "ColorTempPhysicalMaxMireds", type: "uint16",
        access: "R V", conformance: "CT", constraint: "max 65279"
    }),
    Attribute({
        id: 0x400d, name: "CoupleColorTempToLevelMinMireds", type: "uint16",
        access: "R V", conformance: "CT & ColorTemperatureMireds",
        constraint: "colorTempPhysicalMinMireds to colorTemperatureMireds"
    }),
    Attribute({
        id: 0x4010, name: "StartUpColorTemperatureMireds", type: "uint16",
        access: "RW VM", conformance: "CT & ColorTemperatureMireds", constraint: "1 to 65279",
        quality: "X N"
    }),

    Command(
        { id: 0x0, name: "MoveToHue", access: "O", conformance: "HS", direction: "request", response: "status" },
        Field({ id: 0x0, name: "Hue", type: "uint8", conformance: "M", constraint: "max 254" }),
        Field({ id: 0x1, name: "Direction", type: "DirectionEnum", conformance: "M" }),
        Field({ id: 0x2, name: "TransitionTime", type: "uint16", conformance: "M", constraint: "max 65534" }),
        Field({ id: 0x3, name: "OptionsMask", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 }),
        Field({ id: 0x4, name: "OptionsOverride", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        { id: 0x1, name: "MoveHue", access: "O", conformance: "HS", direction: "request", response: "status" },
        Field({ id: 0x0, name: "MoveMode", type: "MoveModeEnum", conformance: "M" }),
        Field({ id: 0x1, name: "Rate", type: "uint8", conformance: "M" }),
        Field({ id: 0x2, name: "OptionsMask", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 }),
        Field({ id: 0x3, name: "OptionsOverride", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        { id: 0x2, name: "StepHue", access: "O", conformance: "HS", direction: "request", response: "status" },
        Field({ id: 0x0, name: "StepMode", type: "StepModeEnum", conformance: "M" }),
        Field({ id: 0x1, name: "StepSize", type: "uint8", conformance: "M" }),
        Field({ id: 0x2, name: "TransitionTime", type: "uint8", conformance: "M" }),
        Field({ id: 0x3, name: "OptionsMask", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 }),
        Field({ id: 0x4, name: "OptionsOverride", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        { id: 0x3, name: "MoveToSaturation", access: "O", conformance: "HS", direction: "request", response: "status" },
        Field({ id: 0x0, name: "Saturation", type: "uint8", conformance: "M", constraint: "max 254" }),
        Field({ id: 0x1, name: "TransitionTime", type: "uint16", conformance: "M", constraint: "max 65534" }),
        Field({ id: 0x2, name: "OptionsMask", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 }),
        Field({ id: 0x3, name: "OptionsOverride", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        { id: 0x4, name: "MoveSaturation", access: "O", conformance: "HS", direction: "request", response: "status" },
        Field({ id: 0x0, name: "MoveMode", type: "MoveModeEnum", conformance: "M" }),
        Field({ id: 0x1, name: "Rate", type: "uint8", conformance: "M" }),
        Field({ id: 0x2, name: "OptionsMask", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 }),
        Field({ id: 0x3, name: "OptionsOverride", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        { id: 0x5, name: "StepSaturation", access: "O", conformance: "HS", direction: "request", response: "status" },
        Field({ id: 0x0, name: "StepMode", type: "StepModeEnum", conformance: "M" }),
        Field({ id: 0x1, name: "StepSize", type: "uint8", conformance: "M" }),
        Field({ id: 0x2, name: "TransitionTime", type: "uint8", conformance: "M" }),
        Field({ id: 0x3, name: "OptionsMask", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 }),
        Field({ id: 0x4, name: "OptionsOverride", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        {
            id: 0x6, name: "MoveToHueAndSaturation",
            access: "O", conformance: "HS", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "Hue", type: "uint8", conformance: "M", constraint: "max 254" }),
        Field({ id: 0x1, name: "Saturation", type: "uint8", conformance: "M", constraint: "max 254" }),
        Field({ id: 0x2, name: "TransitionTime", type: "uint16", conformance: "M", constraint: "max 65534" }),
        Field({ id: 0x3, name: "OptionsMask", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 }),
        Field({ id: 0x4, name: "OptionsOverride", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        { id: 0x7, name: "MoveToColor", access: "O", conformance: "XY", direction: "request", response: "status" },
        Field({ id: 0x0, name: "ColorX", type: "uint16", conformance: "M", constraint: "max 65279" }),
        Field({ id: 0x1, name: "ColorY", type: "uint16", conformance: "M", constraint: "max 65279" }),
        Field({ id: 0x2, name: "TransitionTime", type: "uint16", conformance: "M", constraint: "max 65534" }),
        Field({ id: 0x3, name: "OptionsMask", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 }),
        Field({ id: 0x4, name: "OptionsOverride", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        { id: 0x8, name: "MoveColor", access: "O", conformance: "XY", direction: "request", response: "status" },
        Field({ id: 0x0, name: "RateX", type: "int16", conformance: "M" }),
        Field({ id: 0x1, name: "RateY", type: "int16", conformance: "M" }),
        Field({ id: 0x2, name: "OptionsMask", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 }),
        Field({ id: 0x3, name: "OptionsOverride", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        { id: 0x9, name: "StepColor", access: "O", conformance: "XY", direction: "request", response: "status" },
        Field({ id: 0x0, name: "StepX", type: "int16", conformance: "M" }),
        Field({ id: 0x1, name: "StepY", type: "int16", conformance: "M" }),
        Field({ id: 0x2, name: "TransitionTime", type: "uint16", conformance: "M", constraint: "max 65534" }),
        Field({ id: 0x3, name: "OptionsMask", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 }),
        Field({ id: 0x4, name: "OptionsOverride", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        {
            id: 0xa, name: "MoveToColorTemperature",
            access: "O", conformance: "CT", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "ColorTemperatureMireds", type: "uint16", conformance: "M", constraint: "max 65279" }),
        Field({ id: 0x1, name: "TransitionTime", type: "uint16", conformance: "M", constraint: "max 65534" }),
        Field({ id: 0x2, name: "OptionsMask", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 }),
        Field({ id: 0x3, name: "OptionsOverride", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        {
            id: 0x40, name: "EnhancedMoveToHue",
            access: "O", conformance: "EHUE", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "EnhancedHue", type: "uint16", conformance: "M" }),
        Field({ id: 0x1, name: "Direction", type: "DirectionEnum", conformance: "M" }),
        Field({ id: 0x2, name: "TransitionTime", type: "uint16", conformance: "M", constraint: "max 65534" }),
        Field({ id: 0x3, name: "OptionsMask", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 }),
        Field({ id: 0x4, name: "OptionsOverride", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        {
            id: 0x41, name: "EnhancedMoveHue",
            access: "O", conformance: "EHUE", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "MoveMode", type: "MoveModeEnum", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "Rate", type: "uint16", conformance: "M" }),
        Field({ id: 0x2, name: "OptionsMask", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 }),
        Field({ id: 0x3, name: "OptionsOverride", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        {
            id: 0x42, name: "EnhancedStepHue",
            access: "O", conformance: "EHUE", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "StepMode", type: "StepModeEnum", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "StepSize", type: "uint16", conformance: "M" }),
        Field({ id: 0x2, name: "TransitionTime", type: "uint16", conformance: "M", constraint: "max 65534" }),
        Field({ id: 0x3, name: "OptionsMask", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 }),
        Field({ id: 0x4, name: "OptionsOverride", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        {
            id: 0x43, name: "EnhancedMoveToHueAndSaturation",
            access: "O", conformance: "EHUE", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "EnhancedHue", type: "uint16", conformance: "M" }),
        Field({ id: 0x1, name: "Saturation", type: "uint8", conformance: "M", constraint: "max 254" }),
        Field({ id: 0x2, name: "TransitionTime", type: "uint16", conformance: "M", constraint: "max 65534" }),
        Field({ id: 0x3, name: "OptionsMask", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 }),
        Field({ id: 0x4, name: "OptionsOverride", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        { id: 0x44, name: "ColorLoopSet", access: "O", conformance: "CL", direction: "request", response: "status" },
        Field({ id: 0x0, name: "UpdateFlags", type: "UpdateFlagsBitmap", conformance: "M" }),
        Field({ id: 0x1, name: "Action", type: "ColorLoopActionEnum", conformance: "M" }),
        Field({ id: 0x2, name: "Direction", type: "ColorLoopDirectionEnum", conformance: "M" }),
        Field({ id: 0x3, name: "Time", type: "uint16", conformance: "M" }),
        Field({ id: 0x4, name: "StartHue", type: "uint16", conformance: "M" }),
        Field({ id: 0x5, name: "OptionsMask", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 }),
        Field({ id: 0x6, name: "OptionsOverride", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        {
            id: 0x47, name: "StopMoveStep",
            access: "O", conformance: "HS | XY | CT", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "OptionsMask", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 }),
        Field({ id: 0x1, name: "OptionsOverride", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        {
            id: 0x4b, name: "MoveColorTemperature",
            access: "O", conformance: "CT", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "MoveMode", type: "MoveModeEnum", conformance: "M" }),
        Field({ id: 0x1, name: "Rate", type: "uint16", conformance: "M" }),
        Field({ id: 0x2, name: "ColorTemperatureMinimumMireds", type: "uint16", conformance: "M", constraint: "max 65279" }),
        Field({ id: 0x3, name: "ColorTemperatureMaximumMireds", type: "uint16", conformance: "M", constraint: "max 65279" }),
        Field({ id: 0x4, name: "OptionsMask", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 }),
        Field({ id: 0x5, name: "OptionsOverride", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 })
    ),

    Command(
        {
            id: 0x4c, name: "StepColorTemperature",
            access: "O", conformance: "CT", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "StepMode", type: "StepModeEnum", conformance: "M" }),
        Field({ id: 0x1, name: "StepSize", type: "uint16", conformance: "M" }),
        Field({ id: 0x2, name: "TransitionTime", type: "uint16", conformance: "M", constraint: "max 65534" }),
        Field({ id: 0x3, name: "ColorTemperatureMinimumMireds", type: "uint16", conformance: "M", constraint: "max 65279" }),
        Field({ id: 0x4, name: "ColorTemperatureMaximumMireds", type: "uint16", conformance: "M", constraint: "max 65279" }),
        Field({ id: 0x5, name: "OptionsMask", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 }),
        Field({ id: 0x6, name: "OptionsOverride", type: "OptionsBitmap", conformance: "M", constraint: "desc", default: 0 })
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
        Field({ id: 0x0, name: "None", conformance: "M" }),
        Field({ id: 0x1, name: "OtherOrUnknown", conformance: "M" }),
        Field({ id: 0x2, name: "TemperatureMonitoring", conformance: "M" }),
        Field({ id: 0x3, name: "OpticalLuminanceMonitoringAndFeedback", conformance: "M" }),
        Field({ id: 0x4, name: "OpticalColorMonitoringAndFeedback", conformance: "M" })
    ),

    Datatype(
        { name: "ColorModeEnum", type: "enum8" },
        Field({ id: 0x0, name: "CurrentHueAndCurrentSaturation", conformance: "M" }),
        Field({ id: 0x1, name: "CurrentXAndCurrentY", conformance: "M" }),
        Field({ id: 0x2, name: "ColorTemperatureMireds", conformance: "M" })
    ),

    Datatype(
        { name: "EnhancedColorModeEnum", type: "enum8" },
        Field({ id: 0x0, name: "CurrentHueAndCurrentSaturation", conformance: "M" }),
        Field({ id: 0x1, name: "CurrentXAndCurrentY", conformance: "M" }),
        Field({ id: 0x2, name: "ColorTemperatureMireds", conformance: "M" }),
        Field({ id: 0x3, name: "EnhancedCurrentHueAndCurrentSaturation", conformance: "M" })
    ),

    Datatype(
        { name: "DirectionEnum", type: "enum8" },
        Field({ id: 0x0, name: "Shortest", conformance: "M" }),
        Field({ id: 0x1, name: "Longest", conformance: "M" }),
        Field({ id: 0x2, name: "Up", conformance: "M" }),
        Field({ id: 0x3, name: "Down", conformance: "M" })
    ),

    Datatype(
        { name: "MoveModeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Stop", conformance: "M" }),
        Field({ id: 0x1, name: "Up", conformance: "M" }),
        Field({ id: 0x3, name: "Down", conformance: "M" })
    ),

    Datatype(
        { name: "StepModeEnum", type: "enum8" },
        Field({ id: 0x1, name: "Up", conformance: "M" }),
        Field({ id: 0x3, name: "Down", conformance: "M" })
    ),

    Datatype(
        { name: "ColorLoopActionEnum", type: "enum8" },
        Field({ id: 0x0, name: "Deactivate", conformance: "M" }),
        Field({ id: 0x1, name: "ActivateFromColorLoopStartEnhancedHue", conformance: "M" }),
        Field({ id: 0x2, name: "ActivateFromEnhancedCurrentHue", conformance: "M" })
    ),

    Datatype(
        { name: "ColorLoopDirectionEnum", type: "enum8" },
        Field({ id: 0x0, name: "Decrement", conformance: "M" }),
        Field({ id: 0x1, name: "Increment", conformance: "M" })
    )
);

MatterDefinition.children.push(ColorControl);
