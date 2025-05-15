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
    DatatypeElement as Datatype,
    FieldElement as Field
} from "../../elements/index.js";

export const IlluminanceMeasurement = Cluster(
    { id: 0x400, name: "IlluminanceMeasurement" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 3 }),
    Attribute({
        id: 0x0, name: "MeasuredValue", type: "uint16",
        access: "R V", conformance: "M", constraint: "0, minMeasuredValue to maxMeasuredValue", default: 0,
        quality: "X P"
    }),
    Attribute({
        id: 0x1, name: "MinMeasuredValue", type: "uint16",
        access: "R V", conformance: "M", constraint: "1 to 65533", quality: "X"
    }),
    Attribute({
        id: 0x2, name: "MaxMeasuredValue", type: "uint16",
        access: "R V", conformance: "M", constraint: "min minMeasuredValue + 1", quality: "X"
    }),
    Attribute({ id: 0x3, name: "Tolerance", type: "uint16", access: "R V", conformance: "O", constraint: "max 2048" }),
    Attribute({ id: 0x4, name: "LightSensorType", type: "uint8", access: "R V", default: null }),
    Datatype(
        { name: "LightSensorTypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Photodiode", conformance: "M" }),
        Field({ id: 0x1, name: "Cmos", conformance: "M" })
    )
);

MatterDefinition.children.push(IlluminanceMeasurement);
