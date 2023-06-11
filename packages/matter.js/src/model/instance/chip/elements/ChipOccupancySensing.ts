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
            id: 0x0000, name: "occupancy", base: "OccupancyBitmap",
            access: { rw: "R" }, conformance: [ "M" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x0001, name: "occupancySensorType", base: "OccupancySensorTypeEnum",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0002, name: "occupancySensorTypeBitmap", base: "OccupancySensorTypeBitmap",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0010, name: "pirOccupiedToUnoccupiedDelay", base: "uint16",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0011, name: "pirUnoccupiedToOccupiedDelay", base: "uint16",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0012, name: "pirUnoccupiedToOccupiedThreshold", base: "uint8",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], value: "0x01"
        }),

        AttributeElement({
            id: 0x0020, name: "ultrasonicOccupiedToUnoccupiedDelay", base: "uint16",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0021, name: "ultrasonicUnoccupiedToOccupiedDelay", base: "uint16",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0022, name: "ultrasonicUnoccupiedToOccupiedThreshold", base: "uint8",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], value: "0x01"
        }),

        AttributeElement({
            id: 0x0030, name: "physicalContactOccupiedToUnoccupiedDelay", base: "uint16",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0031, name: "physicalContactUnoccupiedToOccupiedDelay", base: "uint16",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0032, name: "physicalContactUnoccupiedToOccupiedThreshold", base: "uint8",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ], value: "0x01"
        }),

        DatatypeElement({
            name: "OccupancyBitmap", base: "map8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "occupied",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "occupied",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                })
            ]
        }),

        DatatypeElement({
            name: "OccupancySensorTypeEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "pir",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0"
                }),

                DatatypeElement({
                    name: "pir",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0"
                }),

                DatatypeElement({
                    name: "ultrasonic",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "ultrasonic",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "pirAndUltrasonic",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "pirAndUltrasonic",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "physicalContact",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x3"
                }),

                DatatypeElement({
                    name: "physicalContact",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x3"
                })
            ]
        }),

        DatatypeElement({
            name: "OccupancySensorTypeBitmap", base: "map8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "pir",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "pir",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "ultrasonic",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "ultrasonic",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "physicalContact",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "physicalContact",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                })
            ]
        })
    ]
}));
