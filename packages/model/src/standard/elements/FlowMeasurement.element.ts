/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { ClusterElement as Cluster, AttributeElement as Attribute } from "../../elements/index.js";

export const FlowMeasurement = Cluster(
    { name: "FlowMeasurement", id: 0x404 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 3 }),
    Attribute({
        name: "MeasuredValue", id: 0x0, type: "uint16",
        default: null, constraint: "minMeasuredValue to maxMeasuredValue", conformance: "M", access: "R V",
        quality: "X P"
    }),
    Attribute({
        name: "MinMeasuredValue", id: 0x1, type: "uint16",
        constraint: "max 65533", conformance: "M", access: "R V", quality: "X"
    }),
    Attribute({
        name: "MaxMeasuredValue", id: 0x2, type: "uint16",
        constraint: "min minMeasuredValue + 1", conformance: "M", access: "R V", quality: "X"
    }),
    Attribute({ name: "Tolerance", id: 0x3, type: "uint16", default: 0, constraint: "max 2048", conformance: "O", access: "R V" })
);

MatterDefinition.children.push(FlowMeasurement);
