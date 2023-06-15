/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0406, name: "OccupancySensing",
    description: "Occupancy Sensing",
    details: "Attributes and commands for configuring occupancy sensing, and reporting occupancy status.",
    children: [
        AttributeElement({
            id: 0x0000, name: "Occupancy", base: "OccupancyBitmap",
            conformance: "M", quality: "P"
        }),

        AttributeElement({
            id: 0x0001, name: "OccupancySensorType", base: "OccupancySensorTypeEnum",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0002, name: "OccupancySensorTypeBitmap", base: "OccupancySensorTypeBitmap",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0010, name: "PirOccupiedToUnoccupiedDelay", base: "uint16",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0011, name: "PirUnoccupiedToOccupiedDelay", base: "uint16",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0012, name: "PirUnoccupiedToOccupiedThreshold", base: "uint8",
            access: "RW VM", conformance: "O", default: 1
        }),

        AttributeElement({
            id: 0x0020, name: "UltrasonicOccupiedToUnoccupiedDelay", base: "uint16",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0021, name: "UltrasonicUnoccupiedToOccupiedDelay", base: "uint16",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0022, name: "UltrasonicUnoccupiedToOccupiedThreshold", base: "uint8",
            access: "RW VM", conformance: "O", default: 1
        }),

        AttributeElement({
            id: 0x0030, name: "PhysicalContactOccupiedToUnoccupiedDelay", base: "uint16",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0031, name: "PhysicalContactUnoccupiedToOccupiedDelay", base: "uint16",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0032, name: "PhysicalContactUnoccupiedToOccupiedThreshold", base: "uint8",
            access: "RW VM", conformance: "O", default: 1
        }),

        DatatypeElement({
            name: "OccupancyBitmap", base: "map8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Occupied",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OccupancySensorTypeEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Pir",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Ultrasonic",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "PirAndUltrasonic",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "PhysicalContact",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OccupancySensorTypeBitmap", base: "map8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Pir",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Ultrasonic",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "PhysicalContact",
                    conformance: "M"
                })
            ]
        })
    ]
}));
