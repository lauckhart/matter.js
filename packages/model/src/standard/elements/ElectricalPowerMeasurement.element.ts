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
    { id: 0x90, name: "ElectricalPowerMeasurement" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "DIRC", conformance: "O.a+", constraint: "0", longName: "DirectCurrent" }),
        Field({ name: "ALTC", conformance: "O.a+", constraint: "1", longName: "AlternatingCurrent" }),
        Field({ name: "POLY", conformance: "[ALTC]", constraint: "2", longName: "PolyphasePower" }),
        Field({ name: "HARM", conformance: "[ALTC]", constraint: "3", longName: "Harmonics" }),
        Field({ name: "PWRQ", conformance: "[ALTC]", constraint: "4", longName: "PowerQuality" })
    ),

    Attribute({ id: 0x0, name: "PowerMode", type: "PowerModeEnum", access: "R V", conformance: "M" }),
    Attribute({
        id: 0x1, name: "NumberOfMeasurementTypes", type: "uint8",
        access: "R V", conformance: "M", constraint: "min 1", quality: "F"
    }),

    Attribute(
        {
            id: 0x2, name: "Accuracy", type: "list",
            access: "R V", conformance: "M", constraint: "1 to numberOfMeasurementTypes", quality: "F"
        },
        Field({ name: "entry", type: "MeasurementAccuracyStruct" })
    ),

    Attribute(
        {
            id: 0x3, name: "Ranges", type: "list",
            access: "R V", conformance: "O", constraint: "0 to numberOfMeasurementTypes", default: [],
            quality: "Q"
        },
        Field({ name: "entry", type: "MeasurementRangeStruct" })
    ),

    Attribute({ id: 0x4, name: "Voltage", type: "voltage-mV", access: "R V", conformance: "O", default: null, quality: "X Q" }),
    Attribute({
        id: 0x5, name: "ActiveCurrent", type: "amperage-mA",
        access: "R V", conformance: "O", default: null, quality: "X Q"
    }),
    Attribute({
        id: 0x6, name: "ReactiveCurrent", type: "amperage-mA",
        access: "R V", conformance: "[ALTC]", default: null, quality: "X Q"
    }),
    Attribute({
        id: 0x7, name: "ApparentCurrent", type: "amperage-mA",
        access: "R V", conformance: "[ALTC]", constraint: "min 0", default: null, quality: "X Q"
    }),
    Attribute({ id: 0x8, name: "ActivePower", type: "power-mW", access: "R V", conformance: "M", default: null, quality: "X Q" }),
    Attribute({
        id: 0x9, name: "ReactivePower", type: "power-mW",
        access: "R V", conformance: "[ALTC]", default: null, quality: "X Q"
    }),
    Attribute({
        id: 0xa, name: "ApparentPower", type: "power-mW",
        access: "R V", conformance: "[ALTC]", default: null, quality: "X Q"
    }),
    Attribute({
        id: 0xb, name: "RmsVoltage", type: "voltage-mV",
        access: "R V", conformance: "[ALTC]", default: null, quality: "X Q"
    }),
    Attribute({
        id: 0xc, name: "RmsCurrent", type: "amperage-mA",
        access: "R V", conformance: "[ALTC]", default: null, quality: "X Q"
    }),
    Attribute({
        id: 0xd, name: "RmsPower", type: "power-mW",
        access: "R V", conformance: "[ALTC]", default: null, quality: "X Q"
    }),
    Attribute({
        id: 0xe, name: "Frequency", type: "int64",
        access: "R V", conformance: "[ALTC]", constraint: "0 to 1000000", default: null, quality: "X Q"
    }),

    Attribute(
        {
            id: 0xf, name: "HarmonicCurrents", type: "list",
            access: "R V", conformance: "HARM", constraint: "desc", default: null, quality: "X Q"
        },
        Field({ name: "entry", type: "HarmonicMeasurementStruct" })
    ),

    Attribute(
        {
            id: 0x10, name: "HarmonicPhases", type: "list",
            access: "R V", conformance: "PWRQ", constraint: "desc", default: null, quality: "X Q"
        },
        Field({ name: "entry", type: "HarmonicMeasurementStruct" })
    ),

    Attribute({
        id: 0x11, name: "PowerFactor", type: "int64",
        access: "R V", conformance: "[ALTC]", constraint: "-10000 to 10000", default: null, quality: "X Q"
    }),
    Attribute({
        id: 0x12, name: "NeutralCurrent", type: "amperage-mA",
        access: "R V", conformance: "[POLY]", default: null, quality: "X Q"
    }),

    Event(
        { id: 0x0, name: "MeasurementPeriodRanges", access: "V", priority: "info" },
        Field(
            { id: 0x0, name: "Ranges", type: "list", access: "R V", default: [] },
            Field({ name: "entry", type: "MeasurementRangeStruct" })
        )
    ),

    Datatype(
        { name: "PowerModeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Unknown", conformance: "M" }),
        Field({ id: 0x1, name: "Dc", conformance: "M" }),
        Field({ id: 0x2, name: "Ac", conformance: "M" })
    ),

    Datatype(
        { name: "MeasurementRangeStruct", type: "struct" },
        Field({ id: 0x0, name: "MeasurementType", type: "MeasurementTypeEnum", conformance: "M" }),
        Field({ id: 0x1, name: "Min", type: "int64", conformance: "M" }),
        Field({ id: 0x2, name: "Max", type: "int64", conformance: "M" }),
        Field({ id: 0x3, name: "StartTimestamp", type: "epoch-s", conformance: "EndTimestamp" }),
        Field({ id: 0x4, name: "EndTimestamp", type: "epoch-s", conformance: "desc", constraint: "min startTimestamp + 1" }),
        Field({ id: 0x5, name: "MinTimestamp", type: "epoch-s", conformance: "EndTimestamp" }),
        Field({
            id: 0x6, name: "MaxTimestamp", type: "epoch-s",
            conformance: "EndTimestamp", constraint: "min minTimestamp + 1"
        }),
        Field({ id: 0x7, name: "StartSystime", type: "systime-ms", conformance: "EndSystime" }),
        Field({ id: 0x8, name: "EndSystime", type: "systime-ms", conformance: "desc", constraint: "min startSystime + 1" }),
        Field({ id: 0x9, name: "MinSystime", type: "systime-ms", conformance: "EndSystime" }),
        Field({
            id: 0xa, name: "MaxSystime", type: "systime-ms",
            conformance: "EndSystime", constraint: "min minSystime + 1"
        })
    ),

    Datatype(
        { name: "HarmonicMeasurementStruct", type: "struct" },
        Field({ id: 0x0, name: "Order", type: "uint8", conformance: "M", constraint: "min 1", default: 1 }),
        Field({ id: 0x1, name: "Measurement", type: "int64", conformance: "M", default: null, quality: "X" })
    )
);

MatterDefinition.children.push(ElectricalPowerMeasurement);
