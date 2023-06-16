/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0301, name: "BallastConfiguration",
    description: "Ballast Configuration",
    details: "Attributes and commands for configuring a lighting ballast.",
    children: [
        AttributeElement({
            id: 0x0000, name: "PhysicalMinLevel", type: "uint8",
            conformance: "M", default: 1
        }),

        AttributeElement({
            id: 0x0001, name: "PhysicalMaxLevel", type: "uint8",
            conformance: "M", default: 254
        }),

        AttributeElement({
            id: 0x0002, name: "BallastStatus", type: "map8",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0010, name: "MinLevel", type: "uint8",
            access: "RW", conformance: "M", default: 1
        }),

        AttributeElement({
            id: 0x0011, name: "MaxLevel", type: "uint8",
            access: "RW", conformance: "M", default: 254
        }),

        AttributeElement({
            id: 0x0014, name: "IntrinsicBallastFactor", type: "uint8",
            access: "RW", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0015, name: "BallastFactorAdjustment", type: "uint8",
            access: "RW", conformance: "O", default: 255, quality: "X"
        }),

        AttributeElement({
            id: 0x0020, name: "LampQuantity", type: "uint8",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0030, name: "LampType", type: "string",
            access: "RW", conformance: "O"
        }),

        AttributeElement({
            id: 0x0031, name: "LampManufacturer", type: "string",
            access: "RW", conformance: "O"
        }),

        AttributeElement({
            id: 0x0032, name: "LampRatedHours", type: "uint24",
            access: "RW", conformance: "O", default: 16777215, quality: "X"
        }),

        AttributeElement({
            id: 0x0033, name: "LampBurnHours", type: "uint24",
            access: "RW", conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0034, name: "LampAlarmMode", type: "map8",
            access: "RW", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0035, name: "LampBurnHoursTripPoint", type: "uint24",
            access: "RW", conformance: "O", default: 16777215, quality: "X"
        })
    ]
}));
