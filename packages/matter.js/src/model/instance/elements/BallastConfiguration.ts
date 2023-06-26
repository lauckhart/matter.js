/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "BallastConfiguration", id: 0x301, classification: "application",
    description: "Ballast Configuration",
    details: "Attributes and commands for configuring a lighting ballast.",
    xref: { document: "cluster", section: "3.3" },

    children: [
        { tag: "attribute", name: "PhysicalMinLevel", id: 0x0, type: "uint8", conformance: "M", default: 1 },
        { tag: "attribute", name: "PhysicalMaxLevel", id: 0x1, type: "uint8", conformance: "M", default: 254 },

        {
            tag: "attribute", name: "BallastStatus", id: 0x2, type: "map8", conformance: "O",
            children: [
                { tag: "datatype", name: "NonOperational", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "LampNotInSocket", id: 0x2, conformance: "M" }
            ]
        },

        {
            tag: "attribute", name: "MinLevel", id: 0x10, type: "uint8", access: "RW", conformance: "M",
            default: 1
        },
        {
            tag: "attribute", name: "MaxLevel", id: 0x11, type: "uint8", access: "RW", conformance: "M",
            default: 254
        },
        {
            tag: "attribute", name: "IntrinsicBallastFactor", id: 0x14, type: "uint8", access: "RW",
            conformance: "O", quality: "X"
        },
        {
            tag: "attribute", name: "BallastFactorAdjustment", id: 0x15, type: "uint8", access: "RW",
            conformance: "O", default: 255, quality: "X"
        },
        { tag: "attribute", name: "LampQuantity", id: 0x20, type: "uint8", conformance: "M" },
        { tag: "attribute", name: "LampType", id: 0x30, type: "string", access: "RW", conformance: "O" },
        {
            tag: "attribute", name: "LampManufacturer", id: 0x31, type: "string", access: "RW",
            conformance: "O"
        },
        {
            tag: "attribute", name: "LampRatedHours", id: 0x32, type: "uint24", access: "RW", conformance: "O",
            default: 16777215, quality: "X"
        },
        {
            tag: "attribute", name: "LampBurnHours", id: 0x33, type: "uint24", access: "RW", conformance: "O",
            quality: "X"
        },
        {
            tag: "attribute", name: "LampAlarmMode", id: 0x34, type: "map8", access: "RW", conformance: "O",
            children: [ { tag: "datatype", name: "LampBurnHours", id: 0x1, conformance: "M" } ]
        },
        {
            tag: "attribute", name: "LampBurnHoursTripPoint", id: 0x35, type: "uint24", access: "RW",
            conformance: "O", default: 16777215, quality: "X"
        }
    ]
});