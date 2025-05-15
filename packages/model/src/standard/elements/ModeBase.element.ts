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

export const ModeBase = Cluster(
    { name: "ModeBase" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 2 }),
    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "DEPONOFF", constraint: "0", longName: "OnOff" })
    ),

    Attribute(
        {
            id: 0x0, name: "SupportedModes", type: "list",
            access: "R V", conformance: "M", constraint: "2 to 255", quality: "F"
        },
        Field({ name: "entry", type: "ModeOptionStruct" })
    ),

    Attribute({ id: 0x1, name: "CurrentMode", type: "uint8", access: "R V", conformance: "M", constraint: "desc", quality: "N" }),
    Attribute({
        id: 0x2, name: "StartUpMode", type: "uint8",
        access: "RW VO", conformance: "O", constraint: "desc", quality: "X N"
    }),
    Attribute({
        id: 0x3, name: "OnMode", type: "uint8",
        access: "RW VO", conformance: "DEPONOFF", constraint: "desc", default: null, quality: "X N"
    }),

    Command(
        {
            id: 0x0, name: "ChangeToMode",
            access: "O", conformance: "M", direction: "request", response: "ChangeToModeResponse"
        },
        Field({ id: 0x0, name: "NewMode", type: "uint8", conformance: "M", constraint: "desc" })
    ),

    Command(
        { id: 0x1, name: "ChangeToModeResponse", direction: "response" },
        Field({ id: 0x0, name: "Status", type: "ModeChangeStatus", constraint: "desc" }),
        Field({ id: 0x1, name: "StatusText", type: "string", conformance: "[Status == Success], M", constraint: "max 64" })
    ),
    Datatype(
        { name: "ModeTagStruct", type: "struct" },
        Field({ id: 0x0, name: "MfgCode", type: "vendor-id", conformance: "O", constraint: "desc" }),
        Field({ id: 0x1, name: "Value", type: "ModeTag" })
    ),

    Datatype(
        { name: "ModeOptionStruct", type: "struct" },
        Field({ id: 0x0, name: "Label", type: "string", conformance: "M", constraint: "max 64", quality: "F" }),
        Field({ id: 0x1, name: "Mode", type: "uint8", conformance: "M", quality: "F" }),
        Field(
            { id: 0x2, name: "ModeTags", type: "list", conformance: "M", constraint: "max 8", quality: "F" },
            Field({ name: "entry", type: "ModeTagStruct" })
        )
    ),

    Datatype(
        { name: "ModeChangeStatus", type: "enum8" },
        Field({ id: 0x0, name: "Success" }),
        Field({ id: 0x1, name: "UnsupportedMode" }),
        Field({ id: 0x2, name: "GenericFailure" }),
        Field({ id: 0x3, name: "InvalidInMode" })
    ),

    Datatype(
        { name: "ModeTag", type: "enum16" },
        Field({ id: 0x0, name: "Auto" }),
        Field({ id: 0x1, name: "Quick" }),
        Field({ id: 0x2, name: "Quiet" }),
        Field({ id: 0x3, name: "LowNoise" }),
        Field({ id: 0x4, name: "LowEnergy" }),
        Field({ id: 0x5, name: "Vacation" }),
        Field({ id: 0x6, name: "Min" }),
        Field({ id: 0x7, name: "Max" }),
        Field({ id: 0x8, name: "Night" }),
        Field({ id: 0x9, name: "Day" })
    )
);

MatterDefinition.children.push(ModeBase);
