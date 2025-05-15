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
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const WaterHeaterManagement = Cluster(
    { id: 0x94, name: "WaterHeaterManagement" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 2 }),
    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "EM", conformance: "O", constraint: "0", description: "EnergyManagement" }),
        Field({ name: "TP", conformance: "O", constraint: "1", description: "TankPercent" })
    ),
    Attribute({
        id: 0x0, name: "HeaterTypes", type: "WaterHeaterHeatSourceBitmap",
        access: "R V", conformance: "M", default: 0, quality: "F"
    }),
    Attribute({ id: 0x1, name: "HeatDemand", type: "WaterHeaterHeatSourceBitmap", access: "R V", conformance: "M", default: 0 }),
    Attribute({ id: 0x2, name: "TankVolume", type: "uint16", access: "R V", conformance: "EM", default: 0 }),
    Attribute({
        id: 0x3, name: "EstimatedHeatRequired", type: "energy-mWh",
        access: "R V", conformance: "EM", constraint: "min 0", default: 0
    }),
    Attribute({ id: 0x4, name: "TankPercentage", type: "percent", access: "R V", conformance: "TP", default: 0 }),
    Attribute({ id: 0x5, name: "BoostState", type: "BoostStateEnum", access: "R V", conformance: "M", default: 0 }),
    Event(
        { id: 0x0, name: "BoostStarted", access: "V", conformance: "M", priority: "info" },
        Field({ id: 0x0, name: "BoostInfo", type: "WaterHeaterBoostInfoStruct", conformance: "M" })
    ),
    Event({ id: 0x1, name: "BoostEnded", access: "V", conformance: "M", priority: "info" }),
    Command(
        { id: 0x0, name: "Boost", access: "M", conformance: "M", direction: "request", response: "status" },
        Field({ id: 0x0, name: "BoostInfo", type: "WaterHeaterBoostInfoStruct", conformance: "M" })
    ),
    Command({ id: 0x1, name: "CancelBoost", access: "M", conformance: "M", direction: "request", response: "status" }),

    Datatype(
        { name: "WaterHeaterHeatSourceBitmap", type: "map8" },
        Field({ name: "ImmersionElement1", constraint: "0" }),
        Field({ name: "ImmersionElement2", constraint: "1" }),
        Field({ name: "HeatPump", constraint: "2" }),
        Field({ name: "Boiler", constraint: "3" }),
        Field({ name: "Other", constraint: "4" })
    ),

    Datatype(
        { name: "BoostStateEnum", type: "enum8" },
        Field({ id: 0x0, name: "Inactive", conformance: "M" }),
        Field({ id: 0x1, name: "Active", conformance: "M" })
    ),

    Datatype(
        { name: "WaterHeaterBoostInfoStruct", type: "struct" },
        Field({ id: 0x0, name: "Duration", type: "elapsed-s", conformance: "M", constraint: "min 1" }),
        Field({ id: 0x1, name: "OneShot", type: "bool", conformance: "[!TP], [TP].a-", default: false }),
        Field({ id: 0x2, name: "EmergencyBoost", type: "bool", conformance: "O", default: false }),
        Field({ id: 0x3, name: "TemporarySetpoint", type: "temperature", conformance: "O", constraint: "desc" }),
        Field({ id: 0x4, name: "TargetPercentage", type: "percent", conformance: "TargetReheat, [TP]" }),
        Field({ id: 0x5, name: "TargetReheat", type: "percent", conformance: "[TP].a-", constraint: "max targetPercentage" })
    )
);

MatterDefinition.children.push(WaterHeaterManagement);
