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
            id: 0x0000, name: "PhysicalMinLevel", base: "PhysicalMinLevel",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0001, name: "PhysicalMaxLevel", base: "PhysicalMaxLevel",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0002, name: "BallastStatus", base: "BallastStatus",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0010, name: "MinLevel", base: "MinLevel",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0011, name: "MaxLevel", base: "MaxLevel",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0014, name: "IntrinsicBallastFactor", base: "IntrinsicBallastFactor",
            access: { rw: "W" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0015, name: "BallastFactorAdjustment", base: "BallastFactorAdjustment",
            access: { rw: "W" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0020, name: "LampQuantity", base: "LampQuantity",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0030, name: "LampType", base: "LampType",
            access: { rw: "W" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0031, name: "LampManufacturer", base: "LampManufacturer",
            access: { rw: "W" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0032, name: "LampRatedHours", base: "LampRatedHours",
            access: { rw: "W" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0033, name: "LampBurnHours", base: "LampBurnHours",
            access: { rw: "W" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0034, name: "LampAlarmMode", base: "LampAlarmMode",
            access: { rw: "W" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0035, name: "LampBurnHoursTripPoint", base: "LampBurnHoursTripPoint",
            access: { rw: "W" }, conformance: [ "O" ], quality: { nullable: true }
        })
    ]
}));
