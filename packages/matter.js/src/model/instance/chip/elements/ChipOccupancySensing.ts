/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0406, name: "OccupancySensing",
    description: "Occupancy Sensing",
    details: "Attributes and commands for configuring occupancy sensing, and reporting occupancy status.",
    children: [
        AttributeElement({
            id: 0x0000, name: "Occupancy", base: "Occupancy",
            access: { rw: "R" }, conformance: [ "M" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x0001, name: "OccupancySensorType", base: "OccupancySensorType",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0002, name: "OccupancySensorTypeBitmap", base: "OccupancySensorTypeBitmap",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0010, name: "PirOccupiedToUnoccupiedDelay", base: "PIROccupiedToUnoccupiedDelay",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0011, name: "PirUnoccupiedToOccupiedDelay", base: "PIRUnoccupiedToOccupiedDelay",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0012, name: "PirUnoccupiedToOccupiedThreshold", base: "PIRUnoccupiedToOccupiedThreshold",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0020, name: "UltrasonicOccupiedToUnoccupiedDelay", base: "UltrasonicOccupiedToUnoccupiedDelay",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0021, name: "UltrasonicUnoccupiedToOccupiedDelay", base: "UltrasonicUnoccupiedToOccupiedDelay",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0022, name: "UltrasonicUnoccupiedToOccupiedThreshold", base: "UltrasonicUnoccupiedToOccupiedThreshold",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0030, name: "PhysicalContactOccupiedToUnoccupiedDelay", base: "PhysicalContactOccupiedToUnoccupiedDelay",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0031, name: "PhysicalContactUnoccupiedToOccupiedDelay", base: "PhysicalContactUnoccupiedToOccupiedDelay",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0032, name: "PhysicalContactUnoccupiedToOccupiedThreshold", base: "PhysicalContactUnoccupiedToOccupiedThreshold",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        })
    ]
}))