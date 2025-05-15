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
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const ModeSelect = Cluster(
    { id: 0x50, name: "ModeSelect" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 2 }),
    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "DEPONOFF", constraint: "0", longName: "OnOff" })
    ),
    Attribute({
        id: 0x0, name: "Description", type: "string",
        access: "R V", conformance: "M", constraint: "max 64", quality: "F"
    }),
    Attribute({
        id: 0x1, name: "StandardNamespace", type: "enum16",
        access: "R V", conformance: "M", constraint: "desc", default: null, quality: "X F"
    }),

    Attribute(
        {
            id: 0x2, name: "SupportedModes", type: "list",
            access: "R V", conformance: "M", constraint: "max 255", quality: "F"
        },
        Field({ name: "entry", type: "ModeOptionStruct" })
    ),

    Attribute({ id: 0x3, name: "CurrentMode", type: "uint8", access: "R V", conformance: "M", constraint: "desc", quality: "N" }),
    Attribute({
        id: 0x4, name: "StartUpMode", type: "uint8",
        access: "RW VO", conformance: "O", constraint: "desc", quality: "X N"
    }),
    Attribute({
        id: 0x5, name: "OnMode", type: "uint8",
        access: "RW VO", conformance: "DEPONOFF", constraint: "desc", default: null, quality: "X N"
    }),
    Command(
        { id: 0x0, name: "ChangeToMode", access: "O", conformance: "M", direction: "request", response: "status" },
        Field({ id: 0x0, name: "NewMode", type: "uint8", conformance: "M", constraint: "desc" })
    ),
    Datatype(
        { name: "SemanticTagStruct", type: "struct" },
        Field({ id: 0x0, name: "MfgCode", type: "vendor-id", constraint: "desc", quality: "F" }),
        Field({ id: 0x1, name: "Value", type: "uint16", quality: "F" })
    ),

    Datatype(
        { name: "ModeOptionStruct", type: "struct" },
        Field({ id: 0x0, name: "Label", type: "string", conformance: "M", constraint: "max 64", quality: "F" }),
        Field({ id: 0x1, name: "Mode", type: "uint8", conformance: "M", quality: "F" }),
        Field(
            { id: 0x2, name: "SemanticTags", type: "list", conformance: "M", constraint: "max 64", quality: "F" },
            Field({ name: "entry", type: "SemanticTagStruct" })
        )
    )
);

MatterDefinition.children.push(ModeSelect);
