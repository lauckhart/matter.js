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

export const MediaInput = Cluster(
    { id: 0x507, name: "MediaInput" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),
    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "NU", constraint: "0", description: "NameUpdates" })
    ),
    Attribute(
        { id: 0x0, name: "InputList", type: "list", access: "R V", conformance: "M" },
        Field({ name: "entry", type: "InputInfoStruct" })
    ),
    Attribute({ id: 0x1, name: "CurrentInput", type: "uint8", access: "R V", conformance: "M" }),
    Command(
        { id: 0x0, name: "SelectInput", access: "O", conformance: "M", direction: "request", response: "status" },
        Field({ id: 0x0, name: "Index", type: "uint8", conformance: "M" })
    ),
    Command({ id: 0x1, name: "ShowInputStatus", access: "O", conformance: "M", direction: "request", response: "status" }),
    Command({ id: 0x2, name: "HideInputStatus", access: "O", conformance: "M", direction: "request", response: "status" }),
    Command(
        { id: 0x3, name: "RenameInput", access: "M", conformance: "NU", direction: "request", response: "status" },
        Field({ id: 0x0, name: "Index", type: "uint8", conformance: "M" }),
        Field({ id: 0x1, name: "Name", type: "string", conformance: "M" })
    ),

    Datatype(
        { name: "InputTypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Internal", conformance: "M" }),
        Field({ id: 0x1, name: "Aux", conformance: "M" }),
        Field({ id: 0x2, name: "Coax", conformance: "M" }),
        Field({ id: 0x3, name: "Composite", conformance: "M" }),
        Field({ id: 0x4, name: "Hdmi", conformance: "M" }),
        Field({ id: 0x5, name: "Input", conformance: "M" }),
        Field({ id: 0x6, name: "Line", conformance: "M" }),
        Field({ id: 0x7, name: "Optical", conformance: "M" }),
        Field({ id: 0x8, name: "Video", conformance: "M" }),
        Field({ id: 0x9, name: "Scart", conformance: "M" }),
        Field({ id: 0xa, name: "Usb", conformance: "M" }),
        Field({ id: 0xb, name: "Other", conformance: "M" })
    ),

    Datatype(
        { name: "InputInfoStruct", type: "struct" },
        Field({ id: 0x0, name: "Index", type: "uint8", conformance: "M" }),
        Field({ id: 0x1, name: "InputType", type: "InputTypeEnum", conformance: "M", constraint: "desc" }),
        Field({ id: 0x2, name: "Name", type: "string", conformance: "M" }),
        Field({ id: 0x3, name: "Description", type: "string", conformance: "M" })
    )
);

MatterDefinition.children.push(MediaInput);
