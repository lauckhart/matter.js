/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0301, name: "BallastConfiguration",
    classification: "application", description: "Ballast Configuration",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "PhysicalMinLevel",
            conformance: "M", default: 1, type: "uint8"
        },

        {
            tag: "attribute", id: 0x0001, name: "PhysicalMaxLevel",
            conformance: "M", default: 254, type: "uint8"
        },

        {
            tag: "attribute", id: 0x0002, name: "BallastStatus",
            conformance: "O", default: undefined, type: "map8"
        },

        {
            tag: "attribute", id: 0x0010, name: "MinLevel",
            access: "RW", conformance: "M", default: 1, type: "uint8"
        },

        {
            tag: "attribute", id: 0x0011, name: "MaxLevel",
            access: "RW", conformance: "M", default: 254, type: "uint8"
        },

        {
            tag: "attribute", id: 0x0014, name: "IntrinsicBallastFactor",
            access: "RW", conformance: "O", quality: "X", type: "uint8"
        },

        {
            tag: "attribute", id: 0x0015, name: "BallastFactorAdjustment",
            access: "RW", conformance: "O", default: 255, quality: "X", type: "uint8"
        },

        {
            tag: "attribute", id: 0x0020, name: "LampQuantity",
            conformance: "M", type: "uint8"
        },

        {
            tag: "attribute", id: 0x0030, name: "LampType",
            access: "RW", conformance: "O", type: "string"
        },

        {
            tag: "attribute", id: 0x0031, name: "LampManufacturer",
            access: "RW", conformance: "O", type: "string"
        },

        {
            tag: "attribute", id: 0x0032, name: "LampRatedHours",
            access: "RW", conformance: "O", default: 16777215, quality: "X", type: "uint24"
        },

        {
            tag: "attribute", id: 0x0033, name: "LampBurnHours",
            access: "RW", conformance: "O", default: undefined, quality: "X", type: "uint24"
        },

        {
            tag: "attribute", id: 0x0034, name: "LampAlarmMode",
            access: "RW", conformance: "O", default: undefined, type: "map8"
        },

        {
            tag: "attribute", id: 0x0035, name: "LampBurnHoursTripPoint",
            access: "RW", conformance: "O", default: 16777215, quality: "X", type: "uint24"
        }
    ]
});
