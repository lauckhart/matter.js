/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DatatypeElement as Datatype, FieldElement as Field } from "../../elements/index.js";

export const MeasurementAccuracyStruct = Datatype(
    { name: "MeasurementAccuracyStruct", type: "struct" },
    Field({ id: 0x0, name: "MeasurementType", type: "MeasurementTypeEnum", conformance: "M", quality: "F" }),
    Field({ id: 0x1, name: "Measured", type: "bool", conformance: "M", default: false, quality: "F" }),
    Field({ id: 0x2, name: "MinMeasuredValue", type: "int64", conformance: "M", quality: "F" }),
    Field({ id: 0x3, name: "MaxMeasuredValue", type: "int64", conformance: "M", quality: "F" }),
    Field(
        { id: 0x4, name: "AccuracyRanges", type: "list", conformance: "M", constraint: "min 1", quality: "F" },
        Field({ name: "entry", type: "MeasurementAccuracyRangeStruct" })
    )
);

MatterDefinition.children.push(MeasurementAccuracyStruct);
