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

export const ConcentrationMeasurement = Cluster(
    { name: "ConcentrationMeasurement" },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "MEA", constraint: "0", conformance: "O.a+", longName: "NumericMeasurement" }),
        Field({ name: "LEV", constraint: "1", conformance: "O.a+", longName: "LevelIndication" }),
        Field({ name: "MED", constraint: "2", conformance: "[LEV]", longName: "MediumLevel" }),
        Field({ name: "CRI", constraint: "3", conformance: "[LEV]", longName: "CriticalLevel" }),
        Field({ name: "PEA", constraint: "4", conformance: "[MEA]", longName: "PeakMeasurement" }),
        Field({ name: "AVG", constraint: "5", conformance: "[MEA]", longName: "AverageMeasurement" })
    ),

    Attribute({
        name: "MeasuredValue", id: 0x0, type: "single",
        default: null, constraint: "minMeasuredValue to maxMeasuredValue", conformance: "MEA",
        access: "R V", quality: "X P"
    }),
    Attribute({
        name: "MinMeasuredValue", id: 0x1, type: "single",
        default: null, conformance: "MEA", access: "R V", quality: "X"
    }),
    Attribute({
        name: "MaxMeasuredValue", id: 0x2, type: "single",
        default: null, constraint: "min minMeasuredValue", conformance: "MEA", access: "R V", quality: "X"
    }),
    Attribute({
        name: "PeakMeasuredValue", id: 0x3, type: "single",
        default: null, constraint: "minMeasuredValue to maxMeasuredValue", conformance: "PEA",
        access: "R V", quality: "X P"
    }),
    Attribute({
        name: "PeakMeasuredValueWindow", id: 0x4, type: "elapsed-s",
        default: 1, constraint: "max 604800", conformance: "PEA", access: "R V", quality: "P"
    }),
    Attribute({
        name: "AverageMeasuredValue", id: 0x5, type: "single",
        default: null, constraint: "minMeasuredValue to maxMeasuredValue", conformance: "AVG",
        access: "R V", quality: "X P"
    }),
    Attribute({
        name: "AverageMeasuredValueWindow", id: 0x6, type: "elapsed-s",
        default: 1, constraint: "max 604800", conformance: "AVG", access: "R V", quality: "P"
    }),
    Attribute({ name: "Uncertainty", id: 0x7, type: "single", constraint: "ms", conformance: "[MEA]", access: "R V" }),
    Attribute({ name: "MeasurementUnit", id: 0x8, type: "MeasurementUnitEnum", conformance: "MEA", access: "R V", quality: "F" }),
    Attribute({
        name: "MeasurementMedium", id: 0x9, type: "MeasurementMediumEnum",
        conformance: "M", access: "R V", quality: "F"
    }),
    Attribute({ name: "LevelValue", id: 0xa, type: "LevelValueEnum", default: 0, conformance: "LEV", access: "R V" }),

    Datatype(
        { name: "MeasurementUnitEnum", type: "enum8" },
        Field({ name: "Ppm", id: 0x0, conformance: "MEA" }),
        Field({ name: "Ppb", id: 0x1, conformance: "MEA" }),
        Field({ name: "Ppt", id: 0x2, conformance: "MEA" }),
        Field({ name: "Mgm3", id: 0x3, conformance: "MEA" }),
        Field({ name: "Ugm3", id: 0x4, conformance: "MEA" }),
        Field({ name: "Ngm3", id: 0x5, conformance: "MEA" }),
        Field({ name: "Pm3", id: 0x6, conformance: "MEA" }),
        Field({ name: "Bqm3", id: 0x7, conformance: "MEA" })
    ),

    Datatype(
        { name: "MeasurementMediumEnum", type: "enum8" },
        Field({ name: "Air", id: 0x0, conformance: "M" }),
        Field({ name: "Water", id: 0x1, conformance: "M" }),
        Field({ name: "Soil", id: 0x2, conformance: "M" })
    ),

    Datatype(
        { name: "LevelValueEnum", type: "enum8" },
        Field({ name: "Unknown", id: 0x0, conformance: "M" }),
        Field({ name: "Low", id: 0x1, conformance: "M" }),
        Field({ name: "Medium", id: 0x2, conformance: "MED" }),
        Field({ name: "High", id: 0x3, conformance: "M" }),
        Field({ name: "Critical", id: 0x4, conformance: "CRI" })
    )
);

MatterDefinition.children.push(ConcentrationMeasurement);
