/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0406, name: "OccupancySensing",
    classification: "application", description: "Occupancy Sensing",
    children: [
        {
            tag: "datatype", name: "OccupancyBitmap",
            conformance: "M", type: "map8",
            details: "This data type is derived from bitmap8",
            xref: { document: "cluster", section: "2.7.5.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Occupied",
                    description: "Indicates the sensed occupancy state; 1 = occupied, 0 = unoccupied.",
                    xref: { document: "cluster", section: "2.7.5.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "Pir",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Ultrasonic",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "PhysicalContact",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "OccupancyBitmap",
            conformance: "M", type: "map8",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "Occupied",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "OccupancySensorTypeEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Pir",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Ultrasonic",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "PirAndUltrasonic",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "PhysicalContact",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0000, name: "Occupancy",
            conformance: "M", quality: "P", type: "OccupancyBitmap"
        },

        {
            tag: "attribute", id: 0x0001, name: "OccupancySensorType",
            conformance: "M", type: "OccupancySensorTypeEnum"
        },

        {
            tag: "attribute", id: 0x0002, name: "OccupancySensorTypeBitmap",
            conformance: "M", type: "OccupancySensorTypeBitmap"
        },

        {
            tag: "attribute", id: 0x0010, name: "PirOccupiedToUnoccupiedDelay",
            access: "RW VM", conformance: "O", default: undefined, type: "uint16"
        },

        {
            tag: "attribute", id: 0x0011, name: "PirUnoccupiedToOccupiedDelay",
            access: "RW VM", conformance: "O", default: undefined, type: "uint16"
        },

        {
            tag: "attribute", id: 0x0012, name: "PirUnoccupiedToOccupiedThreshold",
            access: "RW VM", conformance: "O", default: 1, type: "uint8"
        },

        {
            tag: "attribute", id: 0x0020, name: "UltrasonicOccupiedToUnoccupiedDelay",
            access: "RW VM", conformance: "O", default: undefined, type: "uint16"
        },

        {
            tag: "attribute", id: 0x0021, name: "UltrasonicUnoccupiedToOccupiedDelay",
            access: "RW VM", conformance: "O", default: undefined, type: "uint16"
        },

        {
            tag: "attribute", id: 0x0022, name: "UltrasonicUnoccupiedToOccupiedThreshold",
            access: "RW VM", conformance: "O", default: 1, type: "uint8"
        },

        {
            tag: "attribute", id: 0x0030, name: "PhysicalContactOccupiedToUnoccupiedDelay",
            access: "RW VM", conformance: "O", default: undefined, type: "uint16"
        },

        {
            tag: "attribute", id: 0x0031, name: "PhysicalContactUnoccupiedToOccupiedDelay",
            access: "RW VM", conformance: "O", default: undefined, type: "uint16"
        },

        {
            tag: "attribute", id: 0x0032, name: "PhysicalContactUnoccupiedToOccupiedThreshold",
            access: "RW VM", conformance: "O", default: 1, type: "uint8"
        }
    ]
});
