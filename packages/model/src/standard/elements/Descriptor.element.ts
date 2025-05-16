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

export const Descriptor = Cluster(
    { name: "Descriptor", id: 0x1d },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),
    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "TAGLIST", constraint: "0", conformance: "desc", longName: "TagList" })
    ),

    Attribute(
        {
            name: "DeviceTypeList", id: 0x0, type: "list",
            constraint: "min 1", conformance: "M", access: "R V", quality: "F"
        },
        Field({ name: "entry", type: "DeviceTypeStruct" })
    ),

    Attribute(
        { name: "ServerList", id: 0x1, type: "list", default: [], conformance: "M", access: "R V", quality: "F" },
        Field({ name: "entry", type: "cluster-id" })
    ),
    Attribute(
        { name: "ClientList", id: 0x2, type: "list", default: [], conformance: "M", access: "R V", quality: "F" },
        Field({ name: "entry", type: "cluster-id" })
    ),
    Attribute(
        { name: "PartsList", id: 0x3, type: "list", default: [], conformance: "M", access: "R V" },
        Field({ name: "entry", type: "endpoint-no" })
    ),

    Attribute(
        {
            name: "TagList", id: 0x4, type: "list",
            constraint: "1 to 6", conformance: "TAGLIST", access: "R V", quality: "F"
        },
        Field({ name: "entry", type: "semtag" })
    ),

    Datatype(
        { name: "DeviceTypeStruct", type: "struct" },
        Field({ name: "DeviceType", id: 0x0, type: "devtype-id", conformance: "M" }),
        Field({ name: "Revision", id: 0x1, type: "uint16", constraint: "min 1", conformance: "M" })
    )
);

MatterDefinition.children.push(Descriptor);
