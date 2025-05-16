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
    { name: "ModeSelect", id: 0x50 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),
    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "DEPONOFF", constraint: "0", longName: "OnOff" })
    ),
    Attribute({
        name: "Description", id: 0x0, type: "string",
        constraint: "max 64", conformance: "M", access: "R V", quality: "F"
    }),
    Attribute({
        name: "StandardNamespace", id: 0x1, type: "enum16",
        default: null, constraint: "desc", conformance: "M", access: "R V", quality: "X F"
    }),

    Attribute(
        {
            name: "SupportedModes", id: 0x2, type: "list",
            constraint: "max 255", conformance: "M", access: "R V", quality: "F"
        },
        Field({ name: "entry", type: "ModeOptionStruct" })
    ),

    Attribute({ name: "CurrentMode", id: 0x3, type: "uint8", constraint: "desc", conformance: "M", access: "R V", quality: "N" }),
    Attribute({
        name: "StartUpMode", id: 0x4, type: "uint8",
        constraint: "desc", conformance: "O", access: "RW VO", quality: "X N"
    }),
    Attribute({
        name: "OnMode", id: 0x5, type: "uint8",
        default: null, constraint: "desc", conformance: "DEPONOFF", access: "RW VO", quality: "X N"
    }),
    Command(
        { name: "ChangeToMode", id: 0x0, conformance: "M", access: "O", direction: "request", response: "status" },
        Field({ name: "NewMode", id: 0x0, type: "uint8", constraint: "desc", conformance: "M" })
    ),
    Datatype(
        { name: "SemanticTagStruct", type: "struct" },
        Field({ name: "MfgCode", id: 0x0, type: "vendor-id", constraint: "desc", quality: "F" }),
        Field({ name: "Value", id: 0x1, type: "uint16", quality: "F" })
    ),

    Datatype(
        { name: "ModeOptionStruct", type: "struct" },
        Field({ name: "Label", id: 0x0, type: "string", constraint: "max 64", conformance: "M", quality: "F" }),
        Field({ name: "Mode", id: 0x1, type: "uint8", conformance: "M", quality: "F" }),
        Field(
            { name: "SemanticTags", id: 0x2, type: "list", constraint: "max 64", conformance: "M", quality: "F" },
            Field({ name: "entry", type: "SemanticTagStruct" })
        )
    )
);

MatterDefinition.children.push(ModeSelect);
