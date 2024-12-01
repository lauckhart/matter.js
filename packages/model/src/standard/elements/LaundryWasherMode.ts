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

export const LaundryWasherMode = Cluster({
    name: "LaundryWasherMode", id: 0x51, type: "ModeBase", classification: "application", pics: "LWM",
    details: "This cluster is derived from the Mode Base cluster, defining additional mode tags and namespaced " +
        "enumerated values for laundry washer as well as laundry dryer devices.",
    xref: { document: "cluster", section: "8.5" },

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
            children: [Field({ name: "entry", type: "LaundryWasherMode.ModeOptionStruct" })]
        }),

        Attribute({ name: "CurrentMode", id: 0x1, conformance: "M", xref: { document: "cluster", section: "8.5.5" } }),

        Attribute({
            name: "StartUpMode", id: 0x2, conformance: "P",
            details: "If this attribute is supported, the device SHOULD initially set this to one of the supported modes " +
                "that has the Normal tag associated with it. See the Mode Base cluster specification for full " +
                "details about the StartUpMode attribute.",
            xref: { document: "cluster", section: "8.5.5.1" }
        }),

        Attribute({ name: "OnMode", id: 0x3, conformance: "P", xref: { document: "cluster", section: "8.5.5" } }),

        Datatype({
            name: "ModeOptionStruct", type: "ModeOptionStruct",
            details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
                "ModeOptionStruct type. A blank field indicates no change." +
                "\n" +
                "At least one entry in the SupportedModes attribute shall include the Normal mode tag in the " +
                "ModeTags field list.",
            xref: { document: "cluster", section: "8.5.4.1" },
            children: [Field({
                name: "ModeTags", type: "list",
                children: [Field({ name: "entry", type: "LaundryWasherMode.ModeTagStruct" })]
            })]
        }),

        Datatype({
            name: "ModeTag", type: "enum16",

            children: [
                Field({
                    name: "Normal", id: 0x4000,
                    details: "The normal regime of operation.",
                    xref: { document: "cluster", section: "8.5.6.1.1" }
                }),
                Field({
                    name: "Delicate", id: 0x4001,
                    details: "Mode optimized for washing delicate garments.",
                    xref: { document: "cluster", section: "8.5.6.1.2" }
                }),
                Field({
                    name: "Heavy", id: 0x4002,
                    details: "Mode optimized for heavy washing.",
                    xref: { document: "cluster", section: "8.5.6.1.3" }
                }),
                Field({
                    name: "Whites", id: 0x4003,
                    details: "Mode optimized for stain removal on white fabrics.",
                    xref: { document: "cluster", section: "8.5.6.1.4" }
                })
            ]
        }),

        Datatype({
            name: "ModeTagStruct", type: "ModeTagStruct",
            children: [Field({ name: "Value", type: "LaundryWasherMode.ModeTag" })]
        })
    ]
});

MatterDefinition.children.push(LaundryWasherMode);
