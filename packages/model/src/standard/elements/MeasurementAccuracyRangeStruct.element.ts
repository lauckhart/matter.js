/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype, FieldElement as Field } from "../../elements/index.js";

export const MeasurementAccuracyRangeStruct = Datatype(
    { name: "MeasurementAccuracyRangeStruct", type: "struct" },
    Field({ id: 0x0, name: "RangeMin", type: "int64", conformance: "M", quality: "F" }),
    Field({ id: 0x1, name: "RangeMax", type: "int64", conformance: "M", quality: "F" }),
    Field({ id: 0x2, name: "PercentMax", type: "percent100ths", conformance: "O.a+", quality: "F" }),
    Field({
        id: 0x3, name: "PercentMin", type: "percent100ths",
        conformance: "[PercentMax]", constraint: "max percentTypical", quality: "F"
    }),
    Field({
        id: 0x4, name: "PercentTypical", type: "percent100ths",
        conformance: "[PercentMin]", constraint: "percentMin to percentMax", quality: "F"
    }),
    Field({ id: 0x5, name: "FixedMax", type: "uint64", conformance: "O.a+", quality: "F" }),
    Field({ id: 0x6, name: "FixedMin", type: "uint64", conformance: "[FixedMax]", constraint: "max fixedMax", quality: "F" }),
    Field({
        id: 0x7, name: "FixedTypical", type: "uint64",
        conformance: "[FixedMin]", constraint: "fixedMin to fixedMax", quality: "F"
    })
);

MatterDefinition.children.push(MeasurementAccuracyRangeStruct);
