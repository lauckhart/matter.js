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

export const AudioOutput = Cluster(
    { id: 0x50b, name: "AudioOutput" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),
    Attribute({ id: 0xfffc, name: "FeatureMap", type: "FeatureMap" }, Field({ name: "NU", constraint: "0" })),
    Attribute(
        { id: 0x0, name: "OutputList", type: "list", access: "R V", conformance: "M" },
        Field({ name: "entry", type: "OutputInfoStruct" })
    ),
    Attribute({ id: 0x1, name: "CurrentOutput", type: "uint8", access: "R V", conformance: "M" }),
    Command(
        { id: 0x0, name: "SelectOutput", access: "O", conformance: "M", direction: "request", response: "status" },
        Field({ id: 0x0, name: "Index", type: "uint8", conformance: "M" })
    ),
    Command(
        { id: 0x1, name: "RenameOutput", access: "M", conformance: "NU", direction: "request", response: "status" },
        Field({ id: 0x0, name: "Index", type: "uint8", conformance: "M" }),
        Field({ id: 0x1, name: "Name", type: "string", conformance: "M" })
    ),

    Datatype(
        { name: "OutputTypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Hdmi", conformance: "M" }),
        Field({ id: 0x1, name: "Bt", conformance: "M" }),
        Field({ id: 0x2, name: "Optical", conformance: "M" }),
        Field({ id: 0x3, name: "Headphone", conformance: "M" }),
        Field({ id: 0x4, name: "Internal", conformance: "M" }),
        Field({ id: 0x5, name: "Other", conformance: "M" })
    ),

    Datatype(
        { name: "OutputInfoStruct", type: "struct" },
        Field({ id: 0x0, name: "Index", type: "uint8", conformance: "M" }),
        Field({ id: 0x1, name: "OutputType", type: "OutputTypeEnum", conformance: "M", constraint: "all" }),
        Field({ id: 0x2, name: "Name", type: "string", conformance: "M" })
    )
);

MatterDefinition.children.push(AudioOutput);
