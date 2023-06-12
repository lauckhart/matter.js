/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0301, name: "BallastConfiguration",
    description: "Ballast Configuration",
    details: "Attributes and commands for configuring a lighting ballast.",
    children: [
        AttributeElement({
            id: 0x0000, name: "PhysicalMinLevel", base: "uint8",
            default: 1
        }),

        AttributeElement({
            id: 0x0001, name: "PhysicalMaxLevel", base: "uint8",
            default: 254
        }),

        AttributeElement({
            id: 0x0002, name: "BallastStatus", base: "map8",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0010, name: "MinLevel", base: "uint8",
            access: "RW", default: 1
        }),

        AttributeElement({
            id: 0x0011, name: "MaxLevel", base: "uint8",
            access: "RW", default: 254
        }),

        AttributeElement({
            id: 0x0014, name: "IntrinsicBallastFactor", base: "uint8",
            access: "RW", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0015, name: "BallastFactorAdjustment", base: "uint8",
            access: "RW", conformance: "O", default: 255, quality: "X"
        }),

        AttributeElement({
            id: 0x0020, name: "LampQuantity", base: "uint8"
        }),

        AttributeElement({
            id: 0x0030, name: "LampType", base: "string",
            access: "RW", conformance: "O"
        }),

        AttributeElement({
            id: 0x0031, name: "LampManufacturer", base: "string",
            access: "RW", conformance: "O"
        }),

        AttributeElement({
            id: 0x0032, name: "LampRatedHours", base: "uint24",
            access: "RW", conformance: "O", default: 16777215, quality: "X"
        }),

        AttributeElement({
            id: 0x0033, name: "LampBurnHours", base: "uint24",
            access: "RW", conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0034, name: "LampAlarmMode", base: "map8",
            access: "RW", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0035, name: "LampBurnHoursTripPoint", base: "uint24",
            access: "RW", conformance: "O", default: 16777215, quality: "X"
        })
    ]
}));
