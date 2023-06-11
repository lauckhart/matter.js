/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0301, name: "BallastConfiguration",
    description: "Ballast Configuration",
    details: "Attributes and commands for configuring a lighting ballast.",
    children: [
        AttributeElement({
            id: 0x0000, name: "physicalMinLevel", base: "uint8",
            access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
        }),

        AttributeElement({
            id: 0x0001, name: "physicalMaxLevel", base: "uint8",
            access: { rw: "R" }, conformance: [ "M" ], value: "0xFE"
        }),

        AttributeElement({
            id: 0x0002, name: "ballastStatus", base: "map8",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x00"
        }),

        AttributeElement({
            id: 0x0010, name: "minLevel", base: "uint8",
            access: { rw: "W" }, conformance: [ "M" ], value: "0x01"
        }),

        AttributeElement({
            id: 0x0011, name: "maxLevel", base: "uint8",
            access: { rw: "W" }, conformance: [ "M" ], value: "0xFE"
        }),

        AttributeElement({
            id: 0x0014, name: "intrinsicBallastFactor", base: "uint8",
            access: { rw: "W" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0015, name: "ballastFactorAdjustment", base: "uint8",
            access: { rw: "W" }, conformance: [ "O" ], quality: { nullable: true }, value: "0xFF"
        }),

        AttributeElement({
            id: 0x0020, name: "lampQuantity", base: "uint8",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0030, name: "lampType", base: "string",
            access: { rw: "W" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0031, name: "lampManufacturer", base: "string",
            access: { rw: "W" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0032, name: "lampRatedHours", base: "uint24",
            access: { rw: "W" }, conformance: [ "O" ], quality: { nullable: true }, value: "0xFFFFFF"
        }),

        AttributeElement({
            id: 0x0033, name: "lampBurnHours", base: "uint24",
            access: { rw: "W" }, conformance: [ "O" ], quality: { nullable: true }, value: "0x000000"
        }),

        AttributeElement({
            id: 0x0034, name: "lampAlarmMode", base: "map8",
            access: { rw: "W" }, conformance: [ "O" ], value: "0x00"
        }),

        AttributeElement({
            id: 0x0035, name: "lampBurnHoursTripPoint", base: "uint24",
            access: { rw: "W" }, conformance: [ "O" ], quality: { nullable: true }, value: "0xFFFFFF"
        })
    ]
}));
