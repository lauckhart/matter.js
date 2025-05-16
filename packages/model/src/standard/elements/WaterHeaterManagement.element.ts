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
    { name: "WaterHeaterManagement", id: 0x94 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),
    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "EM", constraint: "0", conformance: "O", longName: "EnergyManagement" }),
        Field({ name: "TP", constraint: "1", conformance: "O", longName: "TankPercent" })
    ),
    Attribute({
        name: "HeaterTypes", id: 0x0, type: "WaterHeaterHeatSourceBitmap",
        default: 0, conformance: "M", access: "R V", quality: "F"
    }),
    Attribute({ name: "HeatDemand", id: 0x1, type: "WaterHeaterHeatSourceBitmap", default: 0, conformance: "M", access: "R V" }),
    Attribute({ name: "TankVolume", id: 0x2, type: "uint16", default: 0, conformance: "EM", access: "R V" }),
    Attribute({
        name: "EstimatedHeatRequired", id: 0x3, type: "energy-mWh",
        default: 0, constraint: "min 0", conformance: "EM", access: "R V"
    }),
    Attribute({ name: "TankPercentage", id: 0x4, type: "percent", default: 0, conformance: "TP", access: "R V" }),
    Attribute({ name: "BoostState", id: 0x5, type: "BoostStateEnum", default: 0, conformance: "M", access: "R V" }),
    Event(
        { name: "BoostStarted", id: 0x0, conformance: "M", access: "V", priority: "info" },
        Field({ name: "BoostInfo", id: 0x0, type: "WaterHeaterBoostInfoStruct", conformance: "M" })
    ),
    Event({ name: "BoostEnded", id: 0x1, conformance: "M", access: "V", priority: "info" }),
    Command(
        { name: "Boost", id: 0x0, conformance: "M", access: "M", direction: "request", response: "status" },
        Field({ name: "BoostInfo", id: 0x0, type: "WaterHeaterBoostInfoStruct", conformance: "M" })
    ),
    Command({ name: "CancelBoost", id: 0x1, conformance: "M", access: "M", direction: "request", response: "status" }),

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
        Field({ name: "Inactive", id: 0x0, conformance: "M" }),
        Field({ name: "Active", id: 0x1, conformance: "M" })
    ),

    Datatype(
        { name: "WaterHeaterBoostInfoStruct", type: "struct" },
        Field({ name: "Duration", id: 0x0, type: "elapsed-s", constraint: "min 1", conformance: "M" }),
        Field({ name: "OneShot", id: 0x1, type: "bool", default: false, conformance: "[!TP], [TP].a-" }),
        Field({ name: "EmergencyBoost", id: 0x2, type: "bool", default: false, conformance: "O" }),
        Field({ name: "TemporarySetpoint", id: 0x3, type: "temperature", constraint: "desc", conformance: "O" }),
        Field({ name: "TargetPercentage", id: 0x4, type: "percent", conformance: "TargetReheat, [TP]" }),
        Field({ name: "TargetReheat", id: 0x5, type: "percent", constraint: "max targetPercentage", conformance: "[TP].a-" })
    )
);

MatterDefinition.children.push(WaterHeaterManagement);
