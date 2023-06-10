/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0406, name: "OccupancySensing",
    description: "Occupancy Sensing",
    details: "Attributes and commands for configuring occupancy sensing, and reporting occupancy status.",
    children: [
        AttributeElement({
            id: 0x0000, name: "Occupancy", base: "OccupancyBitmap",
            access: { rw: "R" }, conformance: [ "M" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x0001, name: "OccupancySensorType", base: "OccupancySensorTypeEnum",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0002, name: "OccupancySensorTypeBitmap", base: "OccupancySensorTypeBitmap",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0010, name: "PirOccupiedToUnoccupiedDelay", base: "uint16",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0011, name: "PirUnoccupiedToOccupiedDelay", base: "uint16",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0012, name: "PirUnoccupiedToOccupiedThreshold", base: "uint8",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0020, name: "UltrasonicOccupiedToUnoccupiedDelay", base: "uint16",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0021, name: "UltrasonicUnoccupiedToOccupiedDelay", base: "uint16",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0022, name: "UltrasonicUnoccupiedToOccupiedThreshold", base: "uint8",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0030, name: "PhysicalContactOccupiedToUnoccupiedDelay", base: "uint16",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0031, name: "PhysicalContactUnoccupiedToOccupiedDelay", base: "uint16",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0032, name: "PhysicalContactUnoccupiedToOccupiedThreshold", base: "uint8",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        DatatypeElement({
            name: "OccupancyBitmap", base: "map8",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        DatatypeElement({
            name: "OccupancySensorTypeEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "Pir", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Pir", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Ultrasonic", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Ultrasonic", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "PirAndUltrasonic", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "PirAndUltrasonic", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "PhysicalContact", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "PhysicalContact", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "OccupancySensorTypeBitmap", base: "map8",
            access: { rw: "R" }, conformance: [ "M" ]
        })
    ]
}));
