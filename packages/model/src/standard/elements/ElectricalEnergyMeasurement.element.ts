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

export const ElectricalEnergyMeasurement = Cluster(
    { id: 0x91, name: "ElectricalEnergyMeasurement" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "IMPE", conformance: "O.a+", constraint: "0", description: "ImportedEnergy" }),
        Field({ name: "EXPE", conformance: "O.a+", constraint: "1", description: "ExportedEnergy" }),
        Field({ name: "CUME", conformance: "O.b+", constraint: "2", description: "CumulativeEnergy" }),
        Field({ name: "PERE", conformance: "O.b+", constraint: "3", description: "PeriodicEnergy" })
    ),

    Attribute(
        { id: 0x0, name: "Accuracy", type: "MeasurementAccuracyStruct", access: "R V", conformance: "M", quality: "F" }
    ),
    Attribute({
        id: 0x1, name: "CumulativeEnergyImported", type: "EnergyMeasurementStruct",
        access: "R V", conformance: "IMPE & CUME", default: null, quality: "X Q"
    }),
    Attribute({
        id: 0x2, name: "CumulativeEnergyExported", type: "EnergyMeasurementStruct",
        access: "R V", conformance: "EXPE & CUME", default: null, quality: "X Q"
    }),
    Attribute({
        id: 0x3, name: "PeriodicEnergyImported", type: "EnergyMeasurementStruct",
        access: "R V", conformance: "IMPE & PERE", default: null, quality: "X Q"
    }),
    Attribute({
        id: 0x4, name: "PeriodicEnergyExported", type: "EnergyMeasurementStruct",
        access: "R V", conformance: "EXPE & PERE", default: null, quality: "X Q"
    }),
    Attribute({
        id: 0x5, name: "CumulativeEnergyReset", type: "CumulativeEnergyResetStruct",
        access: "R V", conformance: "[CUME]", default: null, quality: "X"
    }),
    Event(
        { id: 0x0, name: "CumulativeEnergyMeasured", access: "V", conformance: "CUME", priority: "info" },
        Field({ id: 0x0, name: "EnergyImported", type: "EnergyMeasurementStruct", conformance: "CUME & IMPE" }),
        Field({ id: 0x1, name: "EnergyExported", type: "EnergyMeasurementStruct", conformance: "CUME & EXPE" })
    ),
    Event(
        { id: 0x1, name: "PeriodicEnergyMeasured", access: "V", conformance: "PERE", priority: "info" },
        Field({ id: 0x0, name: "EnergyImported", type: "EnergyMeasurementStruct", conformance: "PERE & IMPE" }),
        Field({ id: 0x1, name: "EnergyExported", type: "EnergyMeasurementStruct", conformance: "PERE & EXPE" })
    ),

    Datatype(
        { name: "EnergyMeasurementStruct", type: "struct" },
        Field({ id: 0x0, name: "Energy", type: "energy-mWh", conformance: "M", constraint: "min 0" }),
        Field({ id: 0x1, name: "StartTimestamp", type: "epoch-s", conformance: "desc" }),
        Field({ id: 0x2, name: "EndTimestamp", type: "epoch-s", conformance: "desc", constraint: "min startTimestamp + 1" }),
        Field({ id: 0x3, name: "StartSystime", type: "systime-ms", conformance: "desc" }),
        Field({ id: 0x4, name: "EndSystime", type: "systime-ms", conformance: "desc", constraint: "min startSystime + 1" })
    ),

    Datatype(
        { name: "CumulativeEnergyResetStruct", type: "struct" },
        Field({
            id: 0x0, name: "ImportedResetTimestamp", type: "epoch-s",
            conformance: "[IMPE]", default: null, quality: "X"
        }),
        Field({
            id: 0x1, name: "ExportedResetTimestamp", type: "epoch-s",
            conformance: "[EXPE]", default: null, quality: "X"
        }),
        Field({
            id: 0x2, name: "ImportedResetSystime", type: "systime-ms",
            conformance: "[IMPE]", default: null, quality: "X"
        }),
        Field({
            id: 0x3, name: "ExportedResetSystime", type: "systime-ms",
            conformance: "[EXPE]", default: null, quality: "X"
        })
    )
);

MatterDefinition.children.push(ElectricalEnergyMeasurement);
