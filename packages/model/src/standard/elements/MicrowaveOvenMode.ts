/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
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

export const MicrowaveOvenMode = Cluster({
    name: "MicrowaveOvenMode", id: 0x5e, type: "ModeBase", classification: "application", pics: "MWOM",
    details: "This cluster is derived from the Mode Base cluster, defining additional mode tags and namespaced " +
        "enumerated values for Microwave Oven devices.",
    xref: { document: "cluster", section: "8.12" },

    children: [
        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

        Attribute({
            name: "SupportedModes", id: 0x0, type: "list", access: "R V", conformance: "M",
            constraint: "2 to 255", quality: "F",

            details: "This attribute shall contain the list of supported modes that may be selected for the CurrentMode " +
                "attribute. Each item in this list represents a unique mode as indicated by the Mode field of the " +
                "ModeOptionStruct." +
                "\n" +
                "Each entry in this list shall have a unique value for the Mode field. Each entry in this list shall " +
                "have a unique value for the Label field.",

            xref: { document: "cluster", section: "1.10.6.2" },
            children: [Field({ name: "entry", type: "MicrowaveOvenMode.ModeOptionStruct" })]
        }),

        Attribute({ name: "CurrentMode", id: 0x1, xref: { document: "cluster", section: "8.12.4" } }),
        Attribute({ name: "StartUpMode", id: 0x2, conformance: "X", xref: { document: "cluster", section: "8.12.4" } }),
        Attribute({ name: "OnMode", id: 0x3, conformance: "X", xref: { document: "cluster", section: "8.12.4" } }),
        Command({ name: "ChangeToMode", id: 0x0, conformance: "X", xref: { document: "cluster", section: "8.12.5" } }),
        Command({
            name: "ChangeToModeResponse", id: 0x1, conformance: "X",
            xref: { document: "cluster", section: "8.12.5" }
        }),

        Datatype({
            name: "ModeTag", type: "enum16",

            children: [
                Field({
                    name: "Normal", id: 0x4000, description: "The normal mode of operation",
                    xref: { document: "cluster", section: "8.12.6.1" }
                }),
                Field({
                    name: "Defrost", id: 0x4001, description: "A mode optimized for defrosting foods",
                    xref: { document: "cluster", section: "8.12.6.1" }
                })
            ]
        }),

        Datatype({
            name: "ModeOptionStruct", type: "ModeOptionStruct",
            children: [Field({
                name: "ModeTags", type: "list",
                children: [Field({ name: "entry", type: "MicrowaveOvenMode.ModeTagStruct" })]
            })]
        }),

        Datatype({
            name: "ModeTagStruct", type: "ModeTagStruct",
            children: [Field({ name: "Value", type: "MicrowaveOvenMode.ModeTag" })]
        })
    ]
});

MatterDefinition.children.push(MicrowaveOvenMode);
