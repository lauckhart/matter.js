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
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 3 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "MEA", conformance: "O.a+", constraint: "0" }),
        Field({ name: "LEV", conformance: "O.a+", constraint: "1" }),
        Field({ name: "MED", conformance: "[LEV]", constraint: "2" }),
        Field({ name: "CRI", conformance: "[LEV]", constraint: "3" }),
        Field({ name: "PEA", conformance: "[MEA]", constraint: "4" }),
        Field({ name: "AVG", conformance: "[MEA]", constraint: "5" })
    ),

    Attribute({
        id: 0x0, name: "MeasuredValue", type: "single",
        access: "R V", conformance: "MEA", constraint: "minMeasuredValue to maxMeasuredValue",
        default: null, quality: "X P"
    }),
    Attribute({
        id: 0x1, name: "MinMeasuredValue", type: "single",
        access: "R V", conformance: "MEA", default: null, quality: "X"
    }),
    Attribute({
        id: 0x2, name: "MaxMeasuredValue", type: "single",
        access: "R V", conformance: "MEA", constraint: "min minMeasuredValue", default: null, quality: "X"
    }),
    Attribute({
        id: 0x3, name: "PeakMeasuredValue", type: "single",
        access: "R V", conformance: "PEA", constraint: "minMeasuredValue to maxMeasuredValue",
        default: null, quality: "X P"
    }),
    Attribute({
        id: 0x4, name: "PeakMeasuredValueWindow", type: "elapsed-s",
        access: "R V", conformance: "PEA", constraint: "max 604800", default: 1, quality: "P"
    }),
    Attribute({
        id: 0x5, name: "AverageMeasuredValue", type: "single",
        access: "R V", conformance: "AVG", constraint: "minMeasuredValue to maxMeasuredValue",
        default: null, quality: "X P"
    }),
    Attribute({
        id: 0x6, name: "AverageMeasuredValueWindow", type: "elapsed-s",
        access: "R V", conformance: "AVG", constraint: "max 604800", default: 1, quality: "P"
    }),
    Attribute({ id: 0x7, name: "Uncertainty", type: "single", access: "R V", conformance: "[MEA]", constraint: "ms" }),
    Attribute({ id: 0x8, name: "MeasurementUnit", type: "MeasurementUnitEnum", access: "R V", conformance: "MEA", quality: "F" }),
    Attribute({
        id: 0x9, name: "MeasurementMedium", type: "MeasurementMediumEnum",
        access: "R V", conformance: "M", quality: "F"
    }),
    Attribute({ id: 0xa, name: "LevelValue", type: "LevelValueEnum", access: "R V", conformance: "LEV", default: 0 }),

    Datatype(
        { name: "MeasurementUnitEnum", type: "enum8" },
        Field({ id: 0x0, name: "Ppm", conformance: "MEA" }),
        Field({ id: 0x1, name: "Ppb", conformance: "MEA" }),
        Field({ id: 0x2, name: "Ppt", conformance: "MEA" }),
        Field({ id: 0x3, name: "Mgm3", conformance: "MEA" }),
        Field({ id: 0x4, name: "Ugm3", conformance: "MEA" }),
        Field({ id: 0x5, name: "Ngm3", conformance: "MEA" }),
        Field({ id: 0x6, name: "Pm3", conformance: "MEA" }),
        Field({ id: 0x7, name: "Bqm3", conformance: "MEA" })
    ),

    Datatype(
        { name: "MeasurementMediumEnum", type: "enum8" },
        Field({ id: 0x0, name: "Air", conformance: "M" }),
        Field({ id: 0x1, name: "Water", conformance: "M" }),
        Field({ id: 0x2, name: "Soil", conformance: "M" })
    ),

    Datatype(
        { name: "LevelValueEnum", type: "enum8" },
        Field({ id: 0x0, name: "Unknown", conformance: "M" }),
        Field({ id: 0x1, name: "Low", conformance: "M" }),
        Field({ id: 0x2, name: "Medium", conformance: "MED" }),
        Field({ id: 0x3, name: "High", conformance: "M" }),
        Field({ id: 0x4, name: "Critical", conformance: "CRI" })
    )
);

MatterDefinition.children.push(ConcentrationMeasurement);
