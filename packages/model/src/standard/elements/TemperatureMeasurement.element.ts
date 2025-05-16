/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { ClusterElement as Cluster, AttributeElement as Attribute } from "../../elements/index.js";

export const TemperatureMeasurement = Cluster(
    { name: "TemperatureMeasurement", id: 0x402 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 4 }),
    Attribute({
        name: "MeasuredValue", id: 0x0, type: "temperature",
        constraint: "minMeasuredValue to maxMeasuredValue", access: "R V", quality: "X P"
    }),
    Attribute({
        name: "MinMeasuredValue", id: 0x1, type: "temperature",
        default: -27315, constraint: "-27315 to maxMeasuredValue - 1", access: "R V", quality: "X"
    }),
    Attribute({
        name: "MaxMeasuredValue", id: 0x2, type: "temperature",
        default: 32767, constraint: "minMeasuredValue + 1 to 32767", access: "R V", quality: "X"
    }),
    Attribute({ name: "Tolerance", id: 0x3, type: "uint16", default: 0, constraint: "max 2048", conformance: "O", access: "R V" })
);

MatterDefinition.children.push(TemperatureMeasurement);
