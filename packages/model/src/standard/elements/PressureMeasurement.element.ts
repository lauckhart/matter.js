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
    { name: "PressureMeasurement", id: 0x403 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 }),
    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "EXT", constraint: "0", conformance: "O", longName: "Extended" })
    ),
    Attribute({
        name: "MeasuredValue", id: 0x0, type: "int16",
        constraint: "minMeasuredValue to maxMeasuredValue", conformance: "M", access: "R V", quality: "X P"
    }),
    Attribute({
        name: "MinMeasuredValue", id: 0x1, type: "int16",
        constraint: "max 32766", conformance: "M", access: "R V", quality: "X"
    }),
    Attribute({
        name: "MaxMeasuredValue", id: 0x2, type: "int16",
        constraint: "minMeasuredValue + 1 to 32767", conformance: "M", access: "R V", quality: "X"
    }),
    Attribute({ name: "Tolerance", id: 0x3, type: "uint16", default: 0, constraint: "max 2048", conformance: "O", access: "R V" }),
    Attribute({
        name: "ScaledValue", id: 0x10, type: "int16",
        default: 0, constraint: "minScaledValue to maxScaledValue", conformance: "EXT", access: "R V",
        quality: "X"
    }),
    Attribute({
        name: "MinScaledValue", id: 0x11, type: "int16",
        default: 0, constraint: "max 32766", conformance: "EXT", access: "R V", quality: "X"
    }),
    Attribute({
        name: "MaxScaledValue", id: 0x12, type: "int16",
        default: 0, constraint: "minScaledValue + 1 to 32767", conformance: "EXT", access: "R V",
        quality: "X"
    }),
    Attribute({
        name: "ScaledTolerance", id: 0x13, type: "uint16",
        default: 0, constraint: "max 2048", conformance: "[EXT]", access: "R V"
    }),
    Attribute({ name: "Scale", id: 0x14, type: "int8", default: 0, constraint: "min -127", conformance: "EXT", access: "R V" })
);

MatterDefinition.children.push(PressureMeasurement);
