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
    { id: 0x5b, name: "AirQuality" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "FAIR", conformance: "O", constraint: "0" }),
        Field({ name: "MOD", conformance: "O", constraint: "1" }),
        Field({ name: "VPOOR", conformance: "O", constraint: "2" }),
        Field({ name: "XPOOR", conformance: "O", constraint: "3" })
    ),

    Attribute({
        id: 0x0, name: "AirQuality", type: "AirQualityEnum",
        access: "R V", conformance: "M", constraint: "all", default: 0
    }),

    Datatype(
        { name: "AirQualityEnum", type: "enum8" },
        Field({ id: 0x0, name: "Unknown", conformance: "M" }),
        Field({ id: 0x1, name: "Good", conformance: "M" }),
        Field({ id: 0x2, name: "Fair", conformance: "FAIR" }),
        Field({ id: 0x3, name: "Moderate", conformance: "MOD" }),
        Field({ id: 0x4, name: "Poor", conformance: "M" }),
        Field({ id: 0x5, name: "VeryPoor", conformance: "VPOOR" }),
        Field({ id: 0x6, name: "ExtremelyPoor", conformance: "XPOOR" })
    )
);

MatterDefinition.children.push(AirQuality);
