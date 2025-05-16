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
    { name: "ElectricalEnergyMeasurement", id: 0x91 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "IMPE", constraint: "0", conformance: "O.a+", longName: "ImportedEnergy" }),
        Field({ name: "EXPE", constraint: "1", conformance: "O.a+", longName: "ExportedEnergy" }),
        Field({ name: "CUME", constraint: "2", conformance: "O.b+", longName: "CumulativeEnergy" }),
        Field({ name: "PERE", constraint: "3", conformance: "O.b+", longName: "PeriodicEnergy" })
    ),

    Attribute(
        { name: "Accuracy", id: 0x0, type: "MeasurementAccuracyStruct", conformance: "M", access: "R V", quality: "F" }
    ),
    Attribute({
        name: "CumulativeEnergyImported", id: 0x1, type: "EnergyMeasurementStruct",
        default: null, conformance: "IMPE & CUME", access: "R V", quality: "X Q"
    }),
    Attribute({
        name: "CumulativeEnergyExported", id: 0x2, type: "EnergyMeasurementStruct",
        default: null, conformance: "EXPE & CUME", access: "R V", quality: "X Q"
    }),
    Attribute({
        name: "PeriodicEnergyImported", id: 0x3, type: "EnergyMeasurementStruct",
        default: null, conformance: "IMPE & PERE", access: "R V", quality: "X Q"
    }),
    Attribute({
        name: "PeriodicEnergyExported", id: 0x4, type: "EnergyMeasurementStruct",
        default: null, conformance: "EXPE & PERE", access: "R V", quality: "X Q"
    }),
    Attribute({
        name: "CumulativeEnergyReset", id: 0x5, type: "CumulativeEnergyResetStruct",
        default: null, conformance: "[CUME]", access: "R V", quality: "X"
    }),
    Event(
        { name: "CumulativeEnergyMeasured", id: 0x0, conformance: "CUME", access: "V", priority: "info" },
        Field({ name: "EnergyImported", id: 0x0, type: "EnergyMeasurementStruct", conformance: "CUME & IMPE" }),
        Field({ name: "EnergyExported", id: 0x1, type: "EnergyMeasurementStruct", conformance: "CUME & EXPE" })
    ),
    Event(
        { name: "PeriodicEnergyMeasured", id: 0x1, conformance: "PERE", access: "V", priority: "info" },
        Field({ name: "EnergyImported", id: 0x0, type: "EnergyMeasurementStruct", conformance: "PERE & IMPE" }),
        Field({ name: "EnergyExported", id: 0x1, type: "EnergyMeasurementStruct", conformance: "PERE & EXPE" })
    ),

    Datatype(
        { name: "EnergyMeasurementStruct", type: "struct" },
        Field({ name: "Energy", id: 0x0, type: "energy-mWh", constraint: "min 0", conformance: "M" }),
        Field({ name: "StartTimestamp", id: 0x1, type: "epoch-s", conformance: "desc" }),
        Field({ name: "EndTimestamp", id: 0x2, type: "epoch-s", constraint: "min startTimestamp + 1", conformance: "desc" }),
        Field({ name: "StartSystime", id: 0x3, type: "systime-ms", conformance: "desc" }),
        Field({ name: "EndSystime", id: 0x4, type: "systime-ms", constraint: "min startSystime + 1", conformance: "desc" })
    ),

    Datatype(
        { name: "CumulativeEnergyResetStruct", type: "struct" },
        Field({
            name: "ImportedResetTimestamp", id: 0x0, type: "epoch-s",
            default: null, conformance: "[IMPE]", quality: "X"
        }),
        Field({
            name: "ExportedResetTimestamp", id: 0x1, type: "epoch-s",
            default: null, conformance: "[EXPE]", quality: "X"
        }),
        Field({
            name: "ImportedResetSystime", id: 0x2, type: "systime-ms",
            default: null, conformance: "[IMPE]", quality: "X"
        }),
        Field({
            name: "ExportedResetSystime", id: 0x3, type: "systime-ms",
            default: null, conformance: "[EXPE]", quality: "X"
        })
    )
);

MatterDefinition.children.push(ElectricalEnergyMeasurement);
