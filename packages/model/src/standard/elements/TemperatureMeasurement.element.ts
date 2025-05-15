/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { ClusterElement as Cluster, AttributeElement as Attribute } from "../../elements/index.js";

export const TemperatureMeasurement = Cluster(
    { id: 0x402, name: "TemperatureMeasurement" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 4 }),
    Attribute({
        id: 0x0, name: "MeasuredValue", type: "temperature",
        access: "R V", constraint: "minMeasuredValue to maxMeasuredValue"
    }),
    Attribute({
        id: 0x1, name: "MinMeasuredValue", type: "temperature",
        access: "R V", constraint: "-27315 to maxMeasuredValue - 1", default: -27315
    }),
    Attribute({
        id: 0x2, name: "MaxMeasuredValue", type: "temperature",
        access: "R V", constraint: "minMeasuredValue + 1 to 32767", default: 32767
    }),
    Attribute({ id: 0x3, name: "Tolerance", type: "uint16", access: "R V", conformance: "O", constraint: "max 2048", default: 0 })
);

MatterDefinition.children.push(TemperatureMeasurement);
