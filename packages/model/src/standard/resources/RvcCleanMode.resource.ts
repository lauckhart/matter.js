/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "RvcCleanMode", tag: "cluster",
    classification: "application", pics: "RVCCLEANM",
    details: "This cluster is derived from the Mode Base cluster and defines additional mode tags and namespaced " +
        "enumerated values for the cleaning type of robotic vacuum cleaner devices.",
    xref: "cluster§7.3",

    children: [
        {
            name: "FeatureMap", tag: "attribute",
            xref: "cluster§7.3.4",
            children: [{ name: "DEPONOFF", tag: "field", details: "Dependency with the OnOff cluster" }]
        },

        {
            name: "SupportedModes", tag: "attribute",
            details: "At least one entry in the SupportedModes attribute shall include the Vacuum and/or the Mop mode tag " +
                "in the ModeTags field list.",
            xref: "cluster§7.3.6.1"
        },

        { name: "CurrentMode", tag: "attribute", xref: "cluster§7.3.6" },
        { name: "StartUpMode", tag: "attribute", xref: "cluster§7.3.6" },
        { name: "OnMode", tag: "attribute", xref: "cluster§7.3.6" },

        {
            name: "ModeOptionStruct", tag: "datatype",
            details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
                "ModeOptionStruct type. A blank field indicates no change.",
            xref: "cluster§7.3.5.1"
        },

        {
            name: "ModeChangeStatus", tag: "datatype",
            children: [{ name: "CleaningInProgress", tag: "field", xref: "cluster§7.3.7.1" }]
        },

        {
            name: "ModeTag", tag: "datatype",

            children: [
                { name: "Auto", tag: "field", xref: "cluster§7.3.7.2" },
                { name: "Quick", tag: "field", xref: "cluster§7.3.7.2" },
                { name: "Quiet", tag: "field", xref: "cluster§7.3.7.2" },
                { name: "LowNoise", tag: "field", xref: "cluster§7.3.7.2" },
                { name: "LowEnergy", tag: "field", xref: "cluster§7.3.7.2" },
                { name: "Vacation", tag: "field", xref: "cluster§7.3.7.2" },
                { name: "Min", tag: "field", xref: "cluster§7.3.7.2" },
                { name: "Max", tag: "field", xref: "cluster§7.3.7.2" },
                { name: "Night", tag: "field", xref: "cluster§7.3.7.2" },
                { name: "Day", tag: "field", xref: "cluster§7.3.7.2" },
                { name: "DeepClean", tag: "field", xref: "cluster§7.3.7.2" },
                {
                    name: "Vacuum", tag: "field",
                    details: "The device’s vacuuming feature is enabled in this mode.",
                    xref: "cluster§7.3.7.2.2"
                },
                {
                    name: "Mop", tag: "field",
                    details: "The device’s mopping feature is enabled in this mode.",
                    xref: "cluster§7.3.7.2.3"
                }
            ]
        }
    ]
});
