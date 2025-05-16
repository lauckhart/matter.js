/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    tag: "cluster", name: "RvcCleanMode",
    classification: "application", pics: "RVCCLEANM",
    details: "This cluster is derived from the Mode Base cluster and defines additional mode tags and namespaced " +
        "enumerated values for the cleaning type of robotic vacuum cleaner devices.",
    xref: "cluster§7.3",

    children: [
        {
            tag: "attribute", name: "FeatureMap",
            xref: "cluster§7.3.4",
            children: [{ tag: "field", name: "DEPONOFF", details: "Dependency with the OnOff cluster" }]
        },

        {
            tag: "attribute", name: "SupportedModes",
            details: "At least one entry in the SupportedModes attribute shall include the Vacuum and/or the Mop mode tag " +
                "in the ModeTags field list.",
            xref: "cluster§7.3.6.1"
        },

        { tag: "attribute", name: "CurrentMode", xref: "cluster§7.3.6" },
        { tag: "attribute", name: "StartUpMode", xref: "cluster§7.3.6" },
        { tag: "attribute", name: "OnMode", xref: "cluster§7.3.6" },

        {
            tag: "datatype", name: "ModeOptionStruct",
            details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
                "ModeOptionStruct type. A blank field indicates no change.",
            xref: "cluster§7.3.5.1"
        },

        {
            tag: "datatype", name: "ModeChangeStatus",
            children: [{ tag: "field", name: "CleaningInProgress", xref: "cluster§7.3.7.1" }]
        },

        {
            tag: "datatype", name: "ModeTag",

            children: [
                { tag: "field", name: "Auto", xref: "cluster§7.3.7.2" },
                { tag: "field", name: "Quick", xref: "cluster§7.3.7.2" },
                { tag: "field", name: "Quiet", xref: "cluster§7.3.7.2" },
                { tag: "field", name: "LowNoise", xref: "cluster§7.3.7.2" },
                { tag: "field", name: "LowEnergy", xref: "cluster§7.3.7.2" },
                { tag: "field", name: "Vacation", xref: "cluster§7.3.7.2" },
                { tag: "field", name: "Min", xref: "cluster§7.3.7.2" },
                { tag: "field", name: "Max", xref: "cluster§7.3.7.2" },
                { tag: "field", name: "Night", xref: "cluster§7.3.7.2" },
                { tag: "field", name: "Day", xref: "cluster§7.3.7.2" },
                { tag: "field", name: "DeepClean", xref: "cluster§7.3.7.2" },
                {
                    tag: "field", name: "Vacuum",
                    details: "The device’s vacuuming feature is enabled in this mode.",
                    xref: "cluster§7.3.7.2.2"
                },
                {
                    tag: "field", name: "Mop",
                    details: "The device’s mopping feature is enabled in this mode.",
                    xref: "cluster§7.3.7.2.3"
                }
            ]
        }
    ]
});
