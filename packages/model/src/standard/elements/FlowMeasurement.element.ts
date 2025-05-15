/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { ClusterElement as Cluster, AttributeElement as Attribute } from "../../elements/index.js";

export const FlowMeasurement = Cluster(
    { id: 0x404, name: "FlowMeasurement" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 3 }),
    Attribute({
        id: 0x0, name: "MeasuredValue", type: "uint16",
        access: "R V", conformance: "M", constraint: "minMeasuredValue to maxMeasuredValue", default: null,
        quality: "X P"
    }),
    Attribute({
        id: 0x1, name: "MinMeasuredValue", type: "uint16",
        access: "R V", conformance: "M", constraint: "max 65533", quality: "X"
    }),
    Attribute({
        id: 0x2, name: "MaxMeasuredValue", type: "uint16",
        access: "R V", conformance: "M", constraint: "min minMeasuredValue + 1", quality: "X"
    }),
    Attribute({ id: 0x3, name: "Tolerance", type: "uint16", access: "R V", conformance: "O", constraint: "max 2048", default: 0 })
);

MatterDefinition.children.push(FlowMeasurement);
