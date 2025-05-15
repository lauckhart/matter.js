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
    FieldElement as Field
} from "../../elements/index.js";

export const PressureMeasurement = Cluster(
    { id: 0x403, name: "PressureMeasurement" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 3 }),
    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "EXT", conformance: "O", constraint: "0" })
    ),
    Attribute({
        id: 0x0, name: "MeasuredValue", type: "int16",
        access: "R V", conformance: "M", constraint: "minMeasuredValue to maxMeasuredValue", quality: "X P"
    }),
    Attribute({
        id: 0x1, name: "MinMeasuredValue", type: "int16",
        access: "R V", conformance: "M", constraint: "max 32766", quality: "X"
    }),
    Attribute({
        id: 0x2, name: "MaxMeasuredValue", type: "int16",
        access: "R V", conformance: "M", constraint: "minMeasuredValue + 1 to 32767", quality: "X"
    }),
    Attribute({ id: 0x3, name: "Tolerance", type: "uint16", access: "R V", conformance: "O", constraint: "max 2048", default: 0 }),
    Attribute({
        id: 0x10, name: "ScaledValue", type: "int16",
        access: "R V", conformance: "EXT", constraint: "minScaledValue to maxScaledValue", default: 0,
        quality: "X"
    }),
    Attribute({
        id: 0x11, name: "MinScaledValue", type: "int16",
        access: "R V", conformance: "EXT", constraint: "max 32766", default: 0, quality: "X"
    }),
    Attribute({
        id: 0x12, name: "MaxScaledValue", type: "int16",
        access: "R V", conformance: "EXT", constraint: "minScaledValue + 1 to 32767", default: 0,
        quality: "X"
    }),
    Attribute({
        id: 0x13, name: "ScaledTolerance", type: "uint16",
        access: "R V", conformance: "[EXT]", constraint: "max 2048", default: 0
    }),
    Attribute({ id: 0x14, name: "Scale", type: "int8", access: "R V", conformance: "EXT", constraint: "min -127", default: 0 })
);

MatterDefinition.children.push(PressureMeasurement);
