/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../index.js";

Matter.children.push(ClusterElement({
    id: 0x0300, name: "ColorControl",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, default: 5, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "HS",
                    description: "Supports color specification via hue/saturation.",
                    xref: { section: "3.2.5", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "EHUE",
                    description: "Enhanced hue is supported.",
                    xref: { section: "3.2.5", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "CL",
                    description: "Color loop is supported.",
                    xref: { section: "3.2.5", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0003, name: "XY",
                    description: "Supports color specification via XY.",
                    xref: { section: "3.2.5", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0004, name: "CT",
                    description: "Supports specification of color temperature.",
                    xref: { section: "3.2.5", document: "cluster", version: "1.1" }
                })
            ]
        }),

        CommandElement({
            id: 0x0000, name: "MoveToHue",
            access: "O", conformance: "HS", direction: "request", response: "status",
            details: "The MoveToHue command SHALL have the following data fields:",
            xref: { section: "3.2.11.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0001, name: "MoveHue",
            access: "O", conformance: "HS", direction: "request", response: "status",
            details: "The MoveHue command SHALL have the following data fields:",
            xref: { section: "3.2.11.5", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0002, name: "StepHue",
            access: "O", conformance: "HS", direction: "request", response: "status",
            details: "The StepHue command SHALL have the following data fields:",
            xref: { section: "3.2.11.6", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0003, name: "MoveToSaturation",
            access: "O", conformance: "HS", direction: "request", response: "status",
            details: "The MoveToSaturation command SHALL have the following data fields:",
            xref: { section: "3.2.11.7", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0004, name: "MoveSaturation",
            access: "O", conformance: "HS", direction: "request", response: "status",
            details: "The MoveSaturation command SHALL have the following data fields:",
            xref: { section: "3.2.11.8", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0005, name: "StepSaturation",
            access: "O", conformance: "HS", direction: "request", response: "status",
            details: "The StepSaturation command SHALL have the following data fields:",
            xref: { section: "3.2.11.9", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0006, name: "MoveToHueAndSaturation",
            access: "O", conformance: "HS", direction: "request", response: "status",
            details: "The MoveToHueAndSaturation command SHALL have the following data fields:",
            xref: { section: "3.2.11.10", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0007, name: "MoveToColor",
            access: "O", conformance: "XY", direction: "request", response: "status",
            details: "The MoveToColor command SHALL have the following data fields:",
            xref: { section: "3.2.11.11", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0008, name: "MoveColor",
            access: "O", conformance: "XY", direction: "request", response: "status",
            details: "The MoveColor command SHALL have the following data fields:",
            xref: { section: "3.2.11.12", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0009, name: "StepColor",
            access: "O", conformance: "XY", direction: "request", response: "status",
            details: "The StepColor command SHALL have the following data fields:",
            xref: { section: "3.2.11.13", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x000a, name: "MoveToColorTemperature",
            access: "O", conformance: "CT", direction: "request", response: "status",
            details: "The MoveToColorTemperature command SHALL have the following data fields:",
            xref: { section: "3.2.11.14", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0040, name: "EnhancedMoveToHue",
            access: "O", conformance: "EHUE", direction: "request", response: "status",
            details: "The EnhancedMoveToHue command allows lamps to be moved in a smooth continuous transition from their current hue to a target hue.",
            xref: { section: "3.2.11.15", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0041, name: "EnhancedMoveHue",
            access: "O", conformance: "EHUE", direction: "request", response: "status",
            details: "The EnhancedMoveHue command allows lamps to be moved in a continuous stepped transition from their current hue to a target hue.",
            xref: { section: "3.2.11.16", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0042, name: "EnhancedStepHue",
            access: "O", conformance: "EHUE", direction: "request", response: "status",
            details: "The EnhancedStepHue command allows lamps to be moved in a stepped transition from their current hue to a target hue, resulting in a linear transition through XY space.",
            xref: { section: "3.2.11.17", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0043, name: "EnhancedMoveToHueAndSaturation",
            access: "O", conformance: "EHUE", direction: "request", response: "status",
            details: "The EnhancedMoveToHueAndSaturation command allows lamps to be moved in a smooth continuous transition from their current hue to a target hue and from their current saturation to a target saturation.",
            xref: { section: "3.2.11.18", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0044, name: "ColorLoopSet",
            access: "O", conformance: "CL", direction: "request", response: "status",
            details: "The Color Loop Set command allows a color loop to be activated such that the color lamp cycles through its range of hues.",
            xref: { section: "3.2.11.19", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0047, name: "StopMoveStep",
            access: "O", conformance: "HS | XY | CT", direction: "request", response: "status",
            details: "The StopMoveStep command is provided to allow MoveTo and Step commands to be stopped. (Note this automatically provides symmetry to the Level Control cluster.)",
            xref: { section: "3.2.11.20", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x004b, name: "MoveColorTemperature",
            access: "O", conformance: "CT", direction: "request", response: "status",
            details: "The MoveColorTemperature command allows the color temperature of a lamp to be moved at a specified rate.",
            xref: { section: "3.2.11.21", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x004c, name: "StepColorTemperature",
            access: "O", conformance: "CT", direction: "request", response: "status",
            details: "The StepColorTemperature command allows the color temperature of a lamp to be stepped with a specified step size.",
            xref: { section: "3.2.11.22", document: "cluster", version: "1.1" }
        })
    ]
}))
