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
    CommandElement as Command,
    DatatypeElement as Datatype,
    FieldElement as Field
} from "../../elements/index.js";

export const RvcOperationalState = Cluster(
    { id: 0x61, name: "RvcOperationalState", type: "OperationalState" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 2 }),
    Command({ id: 0x0, name: "Pause" }),
    Command({ id: 0x1, name: "Stop", conformance: "X" }),
    Command({ id: 0x2, name: "Start", conformance: "X" }),
    Command({ id: 0x3, name: "Resume" }),
    Command({ id: 0x4, name: "OperationalCommandResponse" }),
    Command({
        id: 0x80, name: "GoHome",
        access: "O", conformance: "O", direction: "request", response: "OperationalCommandResponse"
    }),

    Datatype(
        { name: "OperationalStateEnum", type: "enum8" },
        Field({ id: 0x0, name: "Stopped", conformance: "M" }),
        Field({ id: 0x1, name: "Running", conformance: "M" }),
        Field({ id: 0x2, name: "Paused", conformance: "M" }),
        Field({ id: 0x3, name: "Error", conformance: "M" }),
        Field({ id: 0x40, name: "SeekingCharger", conformance: "M" }),
        Field({ id: 0x41, name: "Charging", conformance: "M" }),
        Field({ id: 0x42, name: "Docked", conformance: "M" })
    ),

    Datatype(
        { name: "ErrorStateEnum", type: "enum8" },
        Field({ id: 0x0, name: "NoError", conformance: "M" }),
        Field({ id: 0x1, name: "UnableToStartOrResume", conformance: "M" }),
        Field({ id: 0x2, name: "UnableToCompleteOperation", conformance: "M" }),
        Field({ id: 0x3, name: "CommandInvalidInState", conformance: "M" }),
        Field({ id: 0x40, name: "FailedToFindChargingDock", conformance: "M" }),
        Field({ id: 0x41, name: "Stuck", conformance: "M" }),
        Field({ id: 0x42, name: "DustBinMissing", conformance: "M" }),
        Field({ id: 0x43, name: "DustBinFull", conformance: "M" }),
        Field({ id: 0x44, name: "WaterTankEmpty", conformance: "M" }),
        Field({ id: 0x45, name: "WaterTankMissing", conformance: "M" }),
        Field({ id: 0x46, name: "WaterTankLidOpen", conformance: "M" }),
        Field({ id: 0x47, name: "MopCleaningPadMissing", conformance: "M" })
    )
);

MatterDefinition.children.push(RvcOperationalState);
