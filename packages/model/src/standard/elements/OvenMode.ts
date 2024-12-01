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
    DatatypeElement as Datatype,
    FieldElement as Field
} from "../../elements/index.js";

export const OvenMode = Cluster({
    name: "OvenMode", id: 0x49, type: "ModeBase", classification: "application", pics: "OTCCM",
    details: "This cluster is derived from the Mode Base cluster, defining additional mode tags and namespaced " +
        "enumerated values for oven devices.",
    xref: { document: "cluster", section: "8.11" },

    children: [
        Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

        Datatype({
            name: "ModeTag", type: "enum16",

            children: [
                Field({
                    name: "Bake", id: 0x4000,
                    details: "This mode sets the device into baking mode for baking food items.",
                    xref: { document: "cluster", section: "8.11.4.1.1" }
                }),

                Field({
                    name: "Convection", id: 0x4001,
                    details: "This mode sets the device into convection mode which creates an airflow within the device during " +
                        "the cooking duration.",
                    xref: { document: "cluster", section: "8.11.4.1.2" }
                }),

                Field({
                    name: "Grill", id: 0x4002,
                    details: "This mode sets the device into grill mode for grilling food items. This is the same as Broil for " +
                        "many regions.",
                    xref: { document: "cluster", section: "8.11.4.1.3" }
                }),

                Field({
                    name: "Roast", id: 0x4003,
                    details: "This mode sets the device into roast mode for roasting food items.",
                    xref: { document: "cluster", section: "8.11.4.1.4" }
                }),
                Field({
                    name: "Clean", id: 0x4004,
                    details: "This mode sets the device into cleaning mode to clean the internal components of the appliance.",
                    xref: { document: "cluster", section: "8.11.4.1.5" }
                }),
                Field({ name: "ConvectionBake", id: 0x4005, xref: { document: "cluster", section: "8.11.4.1" } }),
                Field({ name: "ConvectionRoast", id: 0x4006, xref: { document: "cluster", section: "8.11.4.1" } }),
                Field({
                    name: "Warming", id: 0x4007,
                    details: "This mode sets the device into a warming mode which begins warming the cavity.",
                    xref: { document: "cluster", section: "8.11.4.1.8" }
                }),
                Field({
                    name: "Proofing", id: 0x4008,
                    details: "This mode sets the device into proofing mode which creates an environment ready for proofing.",
                    xref: { document: "cluster", section: "8.11.4.1.9" }
                }),
                Field({ name: "Steam", id: 0x4009, xref: { document: "cluster", section: "8.11.4.1" } })
            ]
        }),

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
            children: [Field({ name: "entry", type: "OvenMode.ModeOptionStruct" })]
        }),

        Datatype({
            name: "ModeOptionStruct", type: "ModeOptionStruct",
            children: [Field({
                name: "ModeTags", type: "list",
                children: [Field({ name: "entry", type: "OvenMode.ModeTagStruct" })]
            })]
        }),

        Datatype({
            name: "ModeTagStruct", type: "ModeTagStruct",
            children: [Field({ name: "Value", type: "OvenMode.ModeTag" })]
        })
    ]
});

MatterDefinition.children.push(OvenMode);
