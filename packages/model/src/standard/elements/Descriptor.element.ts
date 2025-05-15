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
    { id: 0x1d, name: "Descriptor" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 2 }),
    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "TAGLIST", conformance: "desc", constraint: "0" })
    ),

    Attribute(
        {
            id: 0x0, name: "DeviceTypeList", type: "list",
            access: "R V", conformance: "M", constraint: "min 1", quality: "F"
        },
        Field({ name: "entry", type: "DeviceTypeStruct" })
    ),

    Attribute(
        { id: 0x1, name: "ServerList", type: "list", access: "R V", conformance: "M", default: [], quality: "F" },
        Field({ name: "entry", type: "cluster-id" })
    ),
    Attribute(
        { id: 0x2, name: "ClientList", type: "list", access: "R V", conformance: "M", default: [], quality: "F" },
        Field({ name: "entry", type: "cluster-id" })
    ),
    Attribute(
        { id: 0x3, name: "PartsList", type: "list", access: "R V", conformance: "M", default: [] },
        Field({ name: "entry", type: "endpoint-no" })
    ),

    Attribute(
        {
            id: 0x4, name: "TagList", type: "list",
            access: "R V", conformance: "TAGLIST", constraint: "1 to 6", quality: "F"
        },
        Field({ name: "entry", type: "semtag" })
    ),

    Datatype(
        { name: "DeviceTypeStruct", type: "struct" },
        Field({ id: 0x0, name: "DeviceType", type: "devtype-id", conformance: "M" }),
        Field({ id: 0x1, name: "Revision", type: "uint16", conformance: "M", constraint: "min 1" })
    )
);

MatterDefinition.children.push(Descriptor);
