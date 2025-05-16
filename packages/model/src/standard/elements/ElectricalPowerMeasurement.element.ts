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

export const ElectricalPowerMeasurement = Cluster(
    { name: "ElectricalPowerMeasurement", id: 0x90 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "DIRC", constraint: "0", conformance: "O.a+", longName: "DirectCurrent" }),
        Field({ name: "ALTC", constraint: "1", conformance: "O.a+", longName: "AlternatingCurrent" }),
        Field({ name: "POLY", constraint: "2", conformance: "[ALTC]", longName: "PolyphasePower" }),
        Field({ name: "HARM", constraint: "3", conformance: "[ALTC]", longName: "Harmonics" }),
        Field({ name: "PWRQ", constraint: "4", conformance: "[ALTC]", longName: "PowerQuality" })
    ),

    Attribute({ name: "PowerMode", id: 0x0, type: "PowerModeEnum", conformance: "M", access: "R V" }),
    Attribute({
        name: "NumberOfMeasurementTypes", id: 0x1, type: "uint8",
        constraint: "min 1", conformance: "M", access: "R V", quality: "F"
    }),

    Attribute(
        {
            name: "Accuracy", id: 0x2, type: "list",
            constraint: "1 to numberOfMeasurementTypes", conformance: "M", access: "R V", quality: "F"
        },
        Field({ name: "entry", type: "MeasurementAccuracyStruct" })
    ),

    Attribute(
        {
            name: "Ranges", id: 0x3, type: "list",
            default: [], constraint: "0 to numberOfMeasurementTypes", conformance: "O", access: "R V",
            quality: "Q"
        },
        Field({ name: "entry", type: "MeasurementRangeStruct" })
    ),

    Attribute({ name: "Voltage", id: 0x4, type: "voltage-mV", default: null, conformance: "O", access: "R V", quality: "X Q" }),
    Attribute({
        name: "ActiveCurrent", id: 0x5, type: "amperage-mA",
        default: null, conformance: "O", access: "R V", quality: "X Q"
    }),
    Attribute({
        name: "ReactiveCurrent", id: 0x6, type: "amperage-mA",
        default: null, conformance: "[ALTC]", access: "R V", quality: "X Q"
    }),
    Attribute({
        name: "ApparentCurrent", id: 0x7, type: "amperage-mA",
        default: null, constraint: "min 0", conformance: "[ALTC]", access: "R V", quality: "X Q"
    }),
    Attribute({ name: "ActivePower", id: 0x8, type: "power-mW", default: null, conformance: "M", access: "R V", quality: "X Q" }),
    Attribute({
        name: "ReactivePower", id: 0x9, type: "power-mW",
        default: null, conformance: "[ALTC]", access: "R V", quality: "X Q"
    }),
    Attribute({
        name: "ApparentPower", id: 0xa, type: "power-mW",
        default: null, conformance: "[ALTC]", access: "R V", quality: "X Q"
    }),
    Attribute({
        name: "RmsVoltage", id: 0xb, type: "voltage-mV",
        default: null, conformance: "[ALTC]", access: "R V", quality: "X Q"
    }),
    Attribute({
        name: "RmsCurrent", id: 0xc, type: "amperage-mA",
        default: null, conformance: "[ALTC]", access: "R V", quality: "X Q"
    }),
    Attribute({
        name: "RmsPower", id: 0xd, type: "power-mW",
        default: null, conformance: "[ALTC]", access: "R V", quality: "X Q"
    }),
    Attribute({
        name: "Frequency", id: 0xe, type: "int64",
        default: null, constraint: "0 to 1000000", conformance: "[ALTC]", access: "R V", quality: "X Q"
    }),

    Attribute(
        {
            name: "HarmonicCurrents", id: 0xf, type: "list",
            default: null, constraint: "desc", conformance: "HARM", access: "R V", quality: "X Q"
        },
        Field({ name: "entry", type: "HarmonicMeasurementStruct" })
    ),

    Attribute(
        {
            name: "HarmonicPhases", id: 0x10, type: "list",
            default: null, constraint: "desc", conformance: "PWRQ", access: "R V", quality: "X Q"
        },
        Field({ name: "entry", type: "HarmonicMeasurementStruct" })
    ),

    Attribute({
        name: "PowerFactor", id: 0x11, type: "int64",
        default: null, constraint: "-10000 to 10000", conformance: "[ALTC]", access: "R V", quality: "X Q"
    }),
    Attribute({
        name: "NeutralCurrent", id: 0x12, type: "amperage-mA",
        default: null, conformance: "[POLY]", access: "R V", quality: "X Q"
    }),

    Event(
        { name: "MeasurementPeriodRanges", id: 0x0, access: "V", priority: "info" },
        Field(
            { name: "Ranges", id: 0x0, type: "list", default: [], access: "R V" },
            Field({ name: "entry", type: "MeasurementRangeStruct" })
        )
    ),

    Datatype(
        { name: "PowerModeEnum", type: "enum8" },
        Field({ name: "Unknown", id: 0x0, conformance: "M" }),
        Field({ name: "Dc", id: 0x1, conformance: "M" }),
        Field({ name: "Ac", id: 0x2, conformance: "M" })
    ),

    Datatype(
        { name: "MeasurementRangeStruct", type: "struct" },
        Field({ name: "MeasurementType", id: 0x0, type: "MeasurementTypeEnum", conformance: "M" }),
        Field({ name: "Min", id: 0x1, type: "int64", conformance: "M" }),
        Field({ name: "Max", id: 0x2, type: "int64", conformance: "M" }),
        Field({ name: "StartTimestamp", id: 0x3, type: "epoch-s", conformance: "EndTimestamp" }),
        Field({ name: "EndTimestamp", id: 0x4, type: "epoch-s", constraint: "min startTimestamp + 1", conformance: "desc" }),
        Field({ name: "MinTimestamp", id: 0x5, type: "epoch-s", conformance: "EndTimestamp" }),
        Field({
            name: "MaxTimestamp", id: 0x6, type: "epoch-s",
            constraint: "min minTimestamp + 1", conformance: "EndTimestamp"
        }),
        Field({ name: "StartSystime", id: 0x7, type: "systime-ms", conformance: "EndSystime" }),
        Field({ name: "EndSystime", id: 0x8, type: "systime-ms", constraint: "min startSystime + 1", conformance: "desc" }),
        Field({ name: "MinSystime", id: 0x9, type: "systime-ms", conformance: "EndSystime" }),
        Field({
            name: "MaxSystime", id: 0xa, type: "systime-ms",
            constraint: "min minSystime + 1", conformance: "EndSystime"
        })
    ),

    Datatype(
        { name: "HarmonicMeasurementStruct", type: "struct" },
        Field({ name: "Order", id: 0x0, type: "uint8", default: 1, constraint: "min 1", conformance: "M" }),
        Field({ name: "Measurement", id: 0x1, type: "int64", default: null, conformance: "M", quality: "X" })
    )
);

MatterDefinition.children.push(ElectricalPowerMeasurement);
