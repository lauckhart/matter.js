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
    FieldElement as Field,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const AirQuality = Cluster(
    { name: "AirQuality", id: 0x5b },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "FAIR", constraint: "0", conformance: "O", longName: "Fair" }),
        Field({ name: "MOD", constraint: "1", conformance: "O", longName: "Moderate" }),
        Field({ name: "VPOOR", constraint: "2", conformance: "O", longName: "VeryPoor" }),
        Field({ name: "XPOOR", constraint: "3", conformance: "O", longName: "ExtremelyPoor" })
    ),

    Attribute({
        name: "AirQuality", id: 0x0, type: "AirQualityEnum",
        default: 0, constraint: "desc", conformance: "M", access: "R V"
    }),

    Datatype(
        { name: "AirQualityEnum", type: "enum8" },
        Field({ name: "Unknown", id: 0x0, conformance: "M" }),
        Field({ name: "Good", id: 0x1, conformance: "M" }),
        Field({ name: "Fair", id: 0x2, conformance: "FAIR" }),
        Field({ name: "Moderate", id: 0x3, conformance: "MOD" }),
        Field({ name: "Poor", id: 0x4, conformance: "M" }),
        Field({ name: "VeryPoor", id: 0x5, conformance: "VPOOR" }),
        Field({ name: "ExtremelyPoor", id: 0x6, conformance: "XPOOR" })
    )
);

MatterDefinition.children.push(AirQuality);
