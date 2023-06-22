/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "OccupancySensing", id: 0x406, classification: "application",
    description: "Occupancy Sensing",
    details: "Attributes and commands for configuring occupancy sensing, and reporting occupancy status",
    xref: { document: "cluster", section: "2.7" },
    children: [
        {
            tag: "datatype", name: "OccupancyBitmap", type: "map8", conformance: "M",
            details: "This data type is derived from bitmap8",
            xref: { document: "cluster", section: "2.7.5.1" },
            children: [
                {
                    tag: "datatype", name: "Occupied", id: 0x1, conformance: "M",
                    description: "Indicates the sensed occupancy state; 1 = occupied, 0 = unoccupied.",
                    xref: { document: "cluster", section: "2.7.5.1" }
                }
            ]
        },

        {
            tag: "datatype", name: "OccupancySensorTypeEnum", type: "enum8", conformance: "M",
            details: "This data type is derived from enum8",
            xref: { document: "cluster", section: "2.7.5.2" },
            children: [
                {
                    tag: "datatype", name: "Pir", id: 0x0, conformance: "M",
                    xref: { document: "cluster", section: "2.7.5.2" }
                },

                {
                    tag: "datatype", name: "Ultrasonic", id: 0x1, conformance: "M",
                    xref: { document: "cluster", section: "2.7.5.2" }
                },

                {
                    tag: "datatype", name: "PirAndUltrasonic", id: 0x2, conformance: "M",
                    xref: { document: "cluster", section: "2.7.5.2" }
                },

                {
                    tag: "datatype", name: "PhysicalContact", id: 0x3, conformance: "M",
                    xref: { document: "cluster", section: "2.7.5.2" }
                }
            ]
        },

        {
            tag: "datatype", name: "OccupancySensorTypeBitmap", type: "map8", conformance: "M",
            details: "This data type is derived from bitmap8",
            xref: { document: "cluster", section: "2.7.5.3" },
            children: [
                {
                    tag: "datatype", name: "Pir", id: 0x0, description: "Indicates a passive infrared sensor.",
                    xref: { document: "cluster", section: "2.7.5.3" }
                },

                {
                    tag: "datatype", name: "Ultrasonic", id: 0x1, conformance: "M",
                    description: "Indicates a ultrasonic sensor.",
                    xref: { document: "cluster", section: "2.7.5.3" }
                },

                {
                    tag: "datatype", name: "PhysicalContact", id: 0x4, conformance: "M",
                    description: "Indicates a physical contact sensor.",
                    xref: { document: "cluster", section: "2.7.5.3" }
                }
            ]
        },

        {
            tag: "attribute", name: "Occupancy", id: 0x0, type: "OccupancyBitmap", conformance: "M",
            quality: "P"
        },

        {
            tag: "attribute", name: "OccupancySensorType", id: 0x1, type: "OccupancySensorTypeEnum",
            conformance: "M"
        },

        {
            tag: "attribute", name: "OccupancySensorTypeBitmap", id: 0x2, type: "OccupancySensorTypeBitmap",
            conformance: "M"
        },

        {
            tag: "attribute", name: "PirOccupiedToUnoccupiedDelay", id: 0x10, type: "uint16", access: "RW VM",
            conformance: "O"
        },

        {
            tag: "attribute", name: "PirUnoccupiedToOccupiedDelay", id: 0x11, type: "uint16", access: "RW VM",
            conformance: "O"
        },

        {
            tag: "attribute", name: "PirUnoccupiedToOccupiedThreshold", id: 0x12, type: "uint8",
            access: "RW VM", conformance: "O", default: 1
        },

        {
            tag: "attribute", name: "UltrasonicOccupiedToUnoccupiedDelay", id: 0x20, type: "uint16",
            access: "RW VM", conformance: "O"
        },

        {
            tag: "attribute", name: "UltrasonicUnoccupiedToOccupiedDelay", id: 0x21, type: "uint16",
            access: "RW VM", conformance: "O"
        },

        {
            tag: "attribute", name: "UltrasonicUnoccupiedToOccupiedThreshold", id: 0x22, type: "uint8",
            access: "RW VM", conformance: "O", default: 1
        },

        {
            tag: "attribute", name: "PhysicalContactOccupiedToUnoccupiedDelay", id: 0x30, type: "uint16",
            access: "RW VM", conformance: "O"
        },

        {
            tag: "attribute", name: "PhysicalContactUnoccupiedToOccupiedDelay", id: 0x31, type: "uint16",
            access: "RW VM", conformance: "O"
        },

        {
            tag: "attribute", name: "PhysicalContactUnoccupiedToOccupiedThreshold", id: 0x32, type: "uint8",
            access: "RW VM", conformance: "O", default: 1
        }
    ]
});
