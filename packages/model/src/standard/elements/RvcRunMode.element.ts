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
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const RvcRunMode = Cluster(
    { id: 0x54, name: "RvcRunMode", type: "ModeBase" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 3 }),
    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "DEPONOFF", conformance: "X", constraint: "0" })
    ),
    Attribute({ id: 0x0, name: "SupportedModes" }),
    Attribute({ id: 0x1, name: "CurrentMode" }),
    Attribute({ id: 0x2, name: "StartUpMode", conformance: "X" }),
    Attribute({ id: 0x3, name: "OnMode", conformance: "X" }),
    Datatype({ name: "ModeOptionStruct", type: "ModeOptionStruct" }),

    Datatype(
        { name: "ModeChangeStatus", type: "enum8" },
        Field({ id: 0x41, name: "Stuck" }),
        Field({ id: 0x42, name: "DustBinMissing" }),
        Field({ id: 0x43, name: "DustBinFull" }),
        Field({ id: 0x44, name: "WaterTankEmpty" }),
        Field({ id: 0x45, name: "WaterTankMissing" }),
        Field({ id: 0x46, name: "WaterTankLidOpen" }),
        Field({ id: 0x47, name: "MopCleaningPadMissing" }),
        Field({ id: 0x48, name: "BatteryLow" })
    ),

    Datatype(
        { name: "ModeTag", type: "enum16" },
        Field({ id: 0x0, name: "Auto" }),
        Field({ id: 0x1, name: "Quick" }),
        Field({ id: 0x2, name: "Quiet" }),
        Field({ id: 0x3, name: "LowNoise" }),
        Field({ id: 0x4, name: "LowEnergy" }),
        Field({ id: 0x5, name: "Vacation" }),
        Field({ id: 0x6, name: "Min" }),
        Field({ id: 0x7, name: "Max" }),
        Field({ id: 0x8, name: "Night" }),
        Field({ id: 0x9, name: "Day" }),
        Field({ id: 0x4000, name: "Idle" }),
        Field({ id: 0x4001, name: "Cleaning" }),
        Field({ id: 0x4002, name: "Mapping" })
    )
);

MatterDefinition.children.push(RvcRunMode);
