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
            id: 0x0000, name: "Occupancy", type: "OccupancyBitmap",
            conformance: "M", quality: "P"
        }),

        AttributeElement({
            id: 0x0001, name: "OccupancySensorType", type: "OccupancySensorTypeEnum",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0002, name: "OccupancySensorTypeBitmap", type: "OccupancySensorTypeBitmap",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0010, name: "PirOccupiedToUnoccupiedDelay", type: "uint16",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0011, name: "PirUnoccupiedToOccupiedDelay", type: "uint16",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0012, name: "PirUnoccupiedToOccupiedThreshold", type: "uint8",
            access: "RW VM", conformance: "O", default: 1
        }),

        AttributeElement({
            id: 0x0020, name: "UltrasonicOccupiedToUnoccupiedDelay", type: "uint16",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0021, name: "UltrasonicUnoccupiedToOccupiedDelay", type: "uint16",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0022, name: "UltrasonicUnoccupiedToOccupiedThreshold", type: "uint8",
            access: "RW VM", conformance: "O", default: 1
        }),

        AttributeElement({
            id: 0x0030, name: "PhysicalContactOccupiedToUnoccupiedDelay", type: "uint16",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0031, name: "PhysicalContactUnoccupiedToOccupiedDelay", type: "uint16",
            access: "RW VM", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0032, name: "PhysicalContactUnoccupiedToOccupiedThreshold", type: "uint8",
            access: "RW VM", conformance: "O", default: 1
        }),

        DatatypeElement({
            name: "OccupancyBitmap", type: "map8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Occupied",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OccupancySensorTypeEnum", type: "enum8",
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
            name: "OccupancySensorTypeBitmap", type: "map8",
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
