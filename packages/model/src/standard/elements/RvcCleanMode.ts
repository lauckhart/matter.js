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
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const RvcCleanMode = Cluster({
    name: "RvcCleanMode", id: 0x55, type: "ModeBase", classification: "application", pics: "RVCCLEANM",
    details: "This cluster is derived from the Mode Base cluster to define specifics for Robotic Vacuum Cleaner " +
        "devices. It also defines a namespace for the cleaning type for these devices.",
    xref: { document: "cluster", section: "7.3" },

    children: [
        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

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
            children: [Field({ name: "entry", type: "RvcCleanMode.ModeOptionStruct" })]
        }),

        Attribute({ name: "CurrentMode", id: 0x1, xref: { document: "cluster", section: "7.3.6" } }),
        Attribute({ name: "StartUpMode", id: 0x2, conformance: "X", xref: { document: "cluster", section: "7.3.6" } }),
        Attribute({ name: "OnMode", id: 0x3, conformance: "D", xref: { document: "cluster", section: "7.3.6" } }),

        Datatype({
            name: "ModeOptionStruct", type: "ModeOptionStruct",
            details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
                "ModeOptionStruct type. A blank field indicates no change." +
                "\n" +
                "At least one entry in the SupportedModes attribute shall include the Vacuum and/or the Mop mode tag " +
                "in the ModeTags field list.",
            xref: { document: "cluster", section: "7.3.5.1" },
            children: [Field({
                name: "ModeTags", type: "list",
                children: [Field({ name: "entry", type: "RvcCleanMode.ModeTagStruct" })]
            })]
        }),

        Datatype({
            name: "ModeChangeStatus", type: "enum8",
            children: [
                Field({ name: "CleaningInProgress", id: 0x40, xref: { document: "cluster", section: "7.3.7.1" } })
            ]
        }),

        Datatype({
            name: "ModeTag", type: "enum16",

            children: [
                Field({ name: "DeepClean", id: 0x4000, xref: { document: "cluster", section: "7.3.7.2" } }),
                Field({
                    name: "Vacuum", id: 0x4001,
                    details: "The device’s vacuuming feature is enabled in this mode.",
                    xref: { document: "cluster", section: "7.3.7.2.2" }
                }),
                Field({
                    name: "Mop", id: 0x4002,
                    details: "The device’s mopping feature is enabled in this mode.",
                    xref: { document: "cluster", section: "7.3.7.2.3" }
                })
            ]
        }),

        Datatype({
            name: "ModeTagStruct", type: "ModeTagStruct",
            children: [Field({ name: "Value", type: "RvcCleanMode.ModeTag" })]
        })
    ]
});

MatterDefinition.children.push(RvcCleanMode);
