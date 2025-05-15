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
    DatatypeElement as Datatype,
    FieldElement as Field
} from "../../elements/index.js";

export const BallastConfiguration = Cluster(
    { id: 0x301, name: "BallastConfiguration" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 4 }),
    Attribute({
        id: 0x0, name: "PhysicalMinLevel", type: "uint8",
        access: "R V", conformance: "M", constraint: "1 to 254", default: 1
    }),
    Attribute({
        id: 0x1, name: "PhysicalMaxLevel", type: "uint8",
        access: "R V", conformance: "M", constraint: "1 to 254", default: 254
    }),
    Attribute({ id: 0x2, name: "BallastStatus", type: "BallastStatusBitmap", access: "R V", conformance: "O", default: 0 }),
    Attribute({
        id: 0x10, name: "MinLevel", type: "uint8",
        access: "RW VM", conformance: "M", constraint: "physicalMinLevel to maxLevel",
        default: { type: "reference", name: "PhysicalMinLevel" }
    }),
    Attribute({
        id: 0x11, name: "MaxLevel", type: "uint8",
        access: "RW VM", conformance: "M", constraint: "minLevel to physicalMaxLevel",
        default: { type: "reference", name: "PhysicalMaxLevel" }
    }),
    Attribute({ id: 0x12, name: "PowerOnLevel", conformance: "D" }),
    Attribute({ id: 0x13, name: "PowerOnFadeTime", conformance: "D" }),
    Attribute({ id: 0x14, name: "IntrinsicBallastFactor", type: "uint8", access: "RW VM", conformance: "O", quality: "X" }),
    Attribute({
        id: 0x15, name: "BallastFactorAdjustment", type: "uint8",
        access: "RW VM", conformance: "O", constraint: "100 to ms", default: null, quality: "X"
    }),
    Attribute({ id: 0x20, name: "LampQuantity", type: "uint8", access: "R V", conformance: "M" }),
    Attribute({ id: 0x30, name: "LampType", type: "string", access: "RW VM", conformance: "O", constraint: "max 16" }),
    Attribute(
        { id: 0x31, name: "LampManufacturer", type: "string", access: "RW VM", conformance: "O", constraint: "max 16" }
    ),
    Attribute({
        id: 0x32, name: "LampRatedHours", type: "uint24",
        access: "RW VM", conformance: "O", default: null, quality: "X"
    }),
    Attribute({ id: 0x33, name: "LampBurnHours", type: "uint24", access: "RW VM", conformance: "O", default: 0, quality: "X" }),
    Attribute(
        { id: 0x34, name: "LampAlarmMode", type: "LampAlarmModeBitmap", access: "RW VM", conformance: "O", default: 0 }
    ),
    Attribute({
        id: 0x35, name: "LampBurnHoursTripPoint", type: "uint24",
        access: "RW VM", conformance: "O", default: null, quality: "X"
    }),
    Datatype(
        { name: "BallastStatusBitmap", type: "map8" },
        Field({ name: "BallastNonOperational", constraint: "0" }),
        Field({ name: "LampFailure", constraint: "1" })
    ),
    Datatype({ name: "LampAlarmModeBitmap", type: "map8" }, Field({ name: "LampBurnHours", constraint: "0" }))
);

MatterDefinition.children.push(BallastConfiguration);
