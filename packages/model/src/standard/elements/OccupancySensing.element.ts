/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    EventElement as Event,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const OccupancySensing = Cluster(
    { id: 0x406, name: "OccupancySensing" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 5 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "OTHER", conformance: "O.a+", constraint: "0", description: "Other" }),
        Field({ name: "PIR", conformance: "O.a+", constraint: "1", description: "PassiveInfrared" }),
        Field({ name: "US", conformance: "O.a+", constraint: "2", description: "Ultrasonic" }),
        Field({ name: "PHY", conformance: "O.a+", constraint: "3", description: "PhysicalContact" }),
        Field({ name: "AIR", conformance: "O.a+", constraint: "4", description: "ActiveInfrared" }),
        Field({ name: "RAD", conformance: "O.a+", constraint: "5", description: "Radar" }),
        Field({ name: "RFS", conformance: "O.a+", constraint: "6", description: "RfSensing" }),
        Field({ name: "VIS", conformance: "O.a+", constraint: "7", description: "Vision" })
    ),

    Attribute({
        id: 0x0, name: "Occupancy", type: "OccupancyBitmap",
        access: "R V", conformance: "M", constraint: "0 to 1", quality: "P"
    }),
    Attribute({
        id: 0x1, name: "OccupancySensorType", type: "OccupancySensorTypeEnum",
        access: "R V", conformance: "M, D", constraint: "desc", quality: "F"
    }),
    Attribute({
        id: 0x2, name: "OccupancySensorTypeBitmap", type: "OccupancySensorTypeBitmap",
        access: "R V", conformance: "M, D", constraint: "0 to 7", quality: "F"
    }),
    Attribute({ id: 0x3, name: "HoldTime", type: "uint16", access: "RW VM", conformance: "O", constraint: "desc", quality: "N" }),
    Attribute({
        id: 0x4, name: "HoldTimeLimits", type: "HoldTimeLimitsStruct",
        access: "R V", conformance: "HoldTime", quality: "F"
    }),
    Attribute({
        id: 0x10, name: "PirOccupiedToUnoccupiedDelay", type: "uint16",
        access: "RW VM", conformance: "[HoldTime & (PIR | !PIR & !US & !PHY)], D", default: 0, quality: "N"
    }),

    Attribute({
        id: 0x11, name: "PirUnoccupiedToOccupiedDelay", type: "uint16",
        access: "RW VM",
        conformance: "HoldTime & (PIR | !PIR & !US & !PHY) & PirUnoccupiedToOccupiedThreshold, [HoldTime & (PIR | !PIR & !US & !PHY)], D",
        default: 0, quality: "N"
    }),

    Attribute({
        id: 0x12, name: "PirUnoccupiedToOccupiedThreshold", type: "uint8",
        access: "RW VM",
        conformance: "HoldTime & (PIR | !PIR & !US & !PHY) & PirUnoccupiedToOccupiedDelay, [HoldTime & (PIR | !PIR & !US & !PHY)], D",
        constraint: "1 to 254", default: 1, quality: "N"
    }),

    Attribute({
        id: 0x20, name: "UltrasonicOccupiedToUnoccupiedDelay", type: "uint16",
        access: "RW VM", conformance: "[HoldTime & US], D", default: 0, quality: "N"
    }),

    Attribute({
        id: 0x21, name: "UltrasonicUnoccupiedToOccupiedDelay", type: "uint16",
        access: "RW VM",
        conformance: "HoldTime & US & UltrasonicUnoccupiedToOccupiedThreshold, [HoldTime & US], D",
        default: 0, quality: "N"
    }),

    Attribute({
        id: 0x22, name: "UltrasonicUnoccupiedToOccupiedThreshold", type: "uint8",
        access: "RW VM",
        conformance: "HoldTime & US & UltrasonicUnoccupiedToOccupiedDelay, [HoldTime & US], D",
        constraint: "1 to 254", default: 1, quality: "N"
    }),

    Attribute({
        id: 0x30, name: "PhysicalContactOccupiedToUnoccupiedDelay", type: "uint16",
        access: "RW VM", conformance: "[HoldTime & PHY], D", default: 0, quality: "N"
    }),

    Attribute({
        id: 0x31, name: "PhysicalContactUnoccupiedToOccupiedDelay", type: "uint16",
        access: "RW VM",
        conformance: "HoldTime & PHY & PhysicalContactUnoccupiedToOccupiedThreshold, [HoldTime & PHY], D",
        default: 0, quality: "N"
    }),

    Attribute({
        id: 0x32, name: "PhysicalContactUnoccupiedToOccupiedThreshold", type: "uint8",
        access: "RW VM",
        conformance: "HoldTime & PHY & PhysicalContactUnoccupiedToOccupiedDelay, [HoldTime & PHY], D",
        constraint: "1 to 254", default: 1, quality: "N"
    }),

    Event(
        { id: 0x0, name: "OccupancyChanged", access: "V", conformance: "O", priority: "info" },
        Field({ id: 0x0, name: "Occupancy", type: "OccupancyBitmap", conformance: "M" })
    ),
    Datatype({ name: "OccupancyBitmap", type: "map8" }, Field({ name: "Occupied", constraint: "0" })),

    Datatype(
        { name: "OccupancySensorTypeBitmap", type: "map8" },
        Field({ name: "Pir", constraint: "0" }),
        Field({ name: "Ultrasonic", constraint: "1" }),
        Field({ name: "PhysicalContact", constraint: "2" })
    ),

    Datatype(
        { name: "OccupancySensorTypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Pir", conformance: "M" }),
        Field({ id: 0x1, name: "Ultrasonic", conformance: "M" }),
        Field({ id: 0x2, name: "PirAndUltrasonic", conformance: "M" }),
        Field({ id: 0x3, name: "PhysicalContact", conformance: "M" })
    ),

    Datatype(
        { name: "HoldTimeLimitsStruct", type: "struct" },
        Field({ id: 0x0, name: "HoldTimeMin", type: "uint16", conformance: "M", constraint: "min 1" }),
        Field({ id: 0x1, name: "HoldTimeMax", type: "uint16", conformance: "M", constraint: "min holdTimeMin, min 10" }),
        Field({
            id: 0x2, name: "HoldTimeDefault", type: "uint16",
            conformance: "M", constraint: "holdTimeMin to holdTimeMax"
        })
    )
);

MatterDefinition.children.push(OccupancySensing);
