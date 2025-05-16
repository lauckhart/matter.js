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
    { name: "OccupancySensing", id: 0x406 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 5 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "OTHER", constraint: "0", conformance: "O.a+", longName: "Other" }),
        Field({ name: "PIR", constraint: "1", conformance: "O.a+", longName: "PassiveInfrared" }),
        Field({ name: "US", constraint: "2", conformance: "O.a+", longName: "Ultrasonic" }),
        Field({ name: "PHY", constraint: "3", conformance: "O.a+", longName: "PhysicalContact" }),
        Field({ name: "AIR", constraint: "4", conformance: "O.a+", longName: "ActiveInfrared" }),
        Field({ name: "RAD", constraint: "5", conformance: "O.a+", longName: "Radar" }),
        Field({ name: "RFS", constraint: "6", conformance: "O.a+", longName: "RfSensing" }),
        Field({ name: "VIS", constraint: "7", conformance: "O.a+", longName: "Vision" })
    ),

    Attribute({
        name: "Occupancy", id: 0x0, type: "OccupancyBitmap",
        constraint: "0 to 1", conformance: "M", access: "R V", quality: "P"
    }),
    Attribute({
        name: "OccupancySensorType", id: 0x1, type: "OccupancySensorTypeEnum",
        constraint: "desc", conformance: "M, D", access: "R V", quality: "F"
    }),
    Attribute({
        name: "OccupancySensorTypeBitmap", id: 0x2, type: "OccupancySensorTypeBitmap",
        constraint: "0 to 7", conformance: "M, D", access: "R V", quality: "F"
    }),
    Attribute({ name: "HoldTime", id: 0x3, type: "uint16", constraint: "desc", conformance: "O", access: "RW VM", quality: "N" }),
    Attribute({
        name: "HoldTimeLimits", id: 0x4, type: "HoldTimeLimitsStruct",
        conformance: "HoldTime", access: "R V", quality: "F"
    }),
    Attribute({
        name: "PirOccupiedToUnoccupiedDelay", id: 0x10, type: "uint16",
        default: 0, conformance: "[HoldTime & (PIR | !PIR & !US & !PHY)], D", access: "RW VM", quality: "N"
    }),

    Attribute({
        name: "PirUnoccupiedToOccupiedDelay", id: 0x11, type: "uint16",
        default: 0,
        conformance: "HoldTime & (PIR | !PIR & !US & !PHY) & PirUnoccupiedToOccupiedThreshold, [HoldTime & (PIR | !PIR & !US & !PHY)], D",
        access: "RW VM", quality: "N"
    }),

    Attribute({
        name: "PirUnoccupiedToOccupiedThreshold", id: 0x12, type: "uint8",
        default: 1, constraint: "1 to 254",
        conformance: "HoldTime & (PIR | !PIR & !US & !PHY) & PirUnoccupiedToOccupiedDelay, [HoldTime & (PIR | !PIR & !US & !PHY)], D",
        access: "RW VM", quality: "N"
    }),

    Attribute({
        name: "UltrasonicOccupiedToUnoccupiedDelay", id: 0x20, type: "uint16",
        default: 0, conformance: "[HoldTime & US], D", access: "RW VM", quality: "N"
    }),

    Attribute({
        name: "UltrasonicUnoccupiedToOccupiedDelay", id: 0x21, type: "uint16",
        default: 0,
        conformance: "HoldTime & US & UltrasonicUnoccupiedToOccupiedThreshold, [HoldTime & US], D",
        access: "RW VM", quality: "N"
    }),

    Attribute({
        name: "UltrasonicUnoccupiedToOccupiedThreshold", id: 0x22, type: "uint8",
        default: 1, constraint: "1 to 254",
        conformance: "HoldTime & US & UltrasonicUnoccupiedToOccupiedDelay, [HoldTime & US], D",
        access: "RW VM", quality: "N"
    }),

    Attribute({
        name: "PhysicalContactOccupiedToUnoccupiedDelay", id: 0x30, type: "uint16",
        default: 0, conformance: "[HoldTime & PHY], D", access: "RW VM", quality: "N"
    }),

    Attribute({
        name: "PhysicalContactUnoccupiedToOccupiedDelay", id: 0x31, type: "uint16",
        default: 0,
        conformance: "HoldTime & PHY & PhysicalContactUnoccupiedToOccupiedThreshold, [HoldTime & PHY], D",
        access: "RW VM", quality: "N"
    }),

    Attribute({
        name: "PhysicalContactUnoccupiedToOccupiedThreshold", id: 0x32, type: "uint8",
        default: 1, constraint: "1 to 254",
        conformance: "HoldTime & PHY & PhysicalContactUnoccupiedToOccupiedDelay, [HoldTime & PHY], D",
        access: "RW VM", quality: "N"
    }),

    Event(
        { name: "OccupancyChanged", id: 0x0, conformance: "O", access: "V", priority: "info" },
        Field({ name: "Occupancy", id: 0x0, type: "OccupancyBitmap", conformance: "M" })
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
        Field({ name: "Pir", id: 0x0, conformance: "M" }),
        Field({ name: "Ultrasonic", id: 0x1, conformance: "M" }),
        Field({ name: "PirAndUltrasonic", id: 0x2, conformance: "M" }),
        Field({ name: "PhysicalContact", id: 0x3, conformance: "M" })
    ),

    Datatype(
        { name: "HoldTimeLimitsStruct", type: "struct" },
        Field({ name: "HoldTimeMin", id: 0x0, type: "uint16", constraint: "min 1", conformance: "M" }),
        Field({ name: "HoldTimeMax", id: 0x1, type: "uint16", constraint: "min holdTimeMin, min 10", conformance: "M" }),
        Field({
            name: "HoldTimeDefault", id: 0x2, type: "uint16",
            constraint: "holdTimeMin to holdTimeMax", conformance: "M"
        })
    )
);

MatterDefinition.children.push(OccupancySensing);
