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
    { name: "BallastConfiguration", id: 0x301 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 4 }),
    Attribute({
        name: "PhysicalMinLevel", id: 0x0, type: "uint8",
        default: 1, constraint: "1 to 254", conformance: "M", access: "R V"
    }),
    Attribute({
        name: "PhysicalMaxLevel", id: 0x1, type: "uint8",
        default: 254, constraint: "1 to 254", conformance: "M", access: "R V"
    }),
    Attribute({ name: "BallastStatus", id: 0x2, type: "BallastStatusBitmap", default: 0, conformance: "O", access: "R V" }),
    Attribute({
        name: "MinLevel", id: 0x10, type: "uint8",
        default: { type: "reference", name: "PhysicalMinLevel" },
        constraint: "physicalMinLevel to maxLevel", conformance: "M", access: "RW VM"
    }),
    Attribute({
        name: "MaxLevel", id: 0x11, type: "uint8",
        default: { type: "reference", name: "PhysicalMaxLevel" },
        constraint: "minLevel to physicalMaxLevel", conformance: "M", access: "RW VM"
    }),
    Attribute({ name: "PowerOnLevel", id: 0x12, conformance: "D" }),
    Attribute({ name: "PowerOnFadeTime", id: 0x13, conformance: "D" }),
    Attribute({ name: "IntrinsicBallastFactor", id: 0x14, type: "uint8", conformance: "O", access: "RW VM", quality: "X" }),
    Attribute({
        name: "BallastFactorAdjustment", id: 0x15, type: "uint8",
        default: null, constraint: "100 to ms", conformance: "O", access: "RW VM", quality: "X"
    }),
    Attribute({ name: "LampQuantity", id: 0x20, type: "uint8", conformance: "M", access: "R V" }),
    Attribute({ name: "LampType", id: 0x30, type: "string", constraint: "max 16", conformance: "O", access: "RW VM" }),
    Attribute(
        { name: "LampManufacturer", id: 0x31, type: "string", constraint: "max 16", conformance: "O", access: "RW VM" }
    ),
    Attribute({
        name: "LampRatedHours", id: 0x32, type: "uint24",
        default: null, conformance: "O", access: "RW VM", quality: "X"
    }),
    Attribute({ name: "LampBurnHours", id: 0x33, type: "uint24", default: 0, conformance: "O", access: "RW VM", quality: "X" }),
    Attribute(
        { name: "LampAlarmMode", id: 0x34, type: "LampAlarmModeBitmap", default: 0, conformance: "O", access: "RW VM" }
    ),
    Attribute({
        name: "LampBurnHoursTripPoint", id: 0x35, type: "uint24",
        default: null, conformance: "O", access: "RW VM", quality: "X"
    }),
    Datatype(
        { name: "BallastStatusBitmap", type: "map8" },
        Field({ name: "BallastNonOperational", constraint: "0" }),
        Field({ name: "LampFailure", constraint: "1" })
    ),
    Datatype({ name: "LampAlarmModeBitmap", type: "map8" }, Field({ name: "LampBurnHours", constraint: "0" }))
);

MatterDefinition.children.push(BallastConfiguration);
