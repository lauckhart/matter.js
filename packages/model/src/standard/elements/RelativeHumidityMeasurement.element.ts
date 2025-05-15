/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { ClusterElement as Cluster, AttributeElement as Attribute } from "../../elements/index.js";

export const RelativeHumidityMeasurement = Cluster(
    { id: 0x405, name: "RelativeHumidityMeasurement" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 3 }),
    Attribute({
        id: 0x0, name: "MeasuredValue", type: "uint16",
        access: "R V", conformance: "M", constraint: "minMeasuredValue to maxMeasuredValue", quality: "X P"
    }),
    Attribute({
        id: 0x1, name: "MinMeasuredValue", type: "uint16",
        access: "R V", conformance: "M", constraint: "max 9999", quality: "X"
    }),
    Attribute({
        id: 0x2, name: "MaxMeasuredValue", type: "uint16",
        access: "R V", conformance: "M", constraint: "minMeasuredValue + 1 to 10000", quality: "X"
    }),
    Attribute({ id: 0x3, name: "Tolerance", type: "uint16", access: "R V", conformance: "O", constraint: "max 2048" })
);

MatterDefinition.children.push(RelativeHumidityMeasurement);
