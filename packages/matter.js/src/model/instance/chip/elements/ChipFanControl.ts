/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0202, name: "FanControl",
    description: "Fan Control",
    details: "An interface for controlling a fan in a heating/cooling system.",
    children: [
        AttributeElement({
            id: 0x0000, name: "FanMode", base: "FanMode",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0001, name: "FanModeSequence", base: "FanModeSequence",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0002, name: "PercentSetting", base: "PercentSetting",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0003, name: "PercentCurrent", base: "PercentCurrent",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0004, name: "SpeedMax", base: "SpeedMax",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0005, name: "SpeedSetting", base: "SpeedSetting",
            access: { rw: "W" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0006, name: "SpeedCurrent", base: "SpeedCurrent",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0007, name: "RockSupport", base: "RockSupport",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0008, name: "RockSetting", base: "RockSetting",
            access: { rw: "W" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0009, name: "WindSupport", base: "WindSupport",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x000a, name: "WindSetting", base: "WindSetting",
            access: { rw: "W" }, conformance: [ "O" ]
        })
    ]
}));
