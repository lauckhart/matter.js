/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "LaundryWasherMode", tag: "cluster",
    classification: "application", pics: "LWM",
    details: "This cluster is derived from the Mode Base cluster and defines additional mode tags and namespaced " +
        "enumerated values for laundry washer as well as laundry dryer devices.",
    xref: "cluster§8.5",

    children: [
        {
            name: "FeatureMap", tag: "attribute",
            xref: "cluster§8.5.4",
            children: [{ name: "DEPONOFF", tag: "field", details: "Dependency with the OnOff cluster" }]
        },

        {
            name: "SupportedModes", tag: "attribute",
            details: "At least one entry in the SupportedModes attribute shall include the Normal mode tag in the ModeTags " +
                "field list.",
            xref: "cluster§8.5.6.1"
        },

        { name: "CurrentMode", tag: "attribute", xref: "cluster§8.5.6" },
        { name: "StartUpMode", tag: "attribute", xref: "cluster§8.5.6" },
        { name: "OnMode", tag: "attribute", xref: "cluster§8.5.6" },

        {
            name: "ModeOptionStruct", tag: "datatype",
            details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
                "ModeOptionStruct type. A blank field indicates no change.",
            xref: "cluster§8.5.5.1"
        },

        {
            name: "ModeTag", tag: "datatype",

            children: [
                { name: "Auto", tag: "field", xref: "cluster§8.5.7.1" },
                { name: "Quick", tag: "field", xref: "cluster§8.5.7.1" },
                { name: "Quiet", tag: "field", xref: "cluster§8.5.7.1" },
                { name: "LowNoise", tag: "field", xref: "cluster§8.5.7.1" },
                { name: "LowEnergy", tag: "field", xref: "cluster§8.5.7.1" },
                { name: "Vacation", tag: "field", xref: "cluster§8.5.7.1" },
                { name: "Min", tag: "field", xref: "cluster§8.5.7.1" },
                { name: "Max", tag: "field", xref: "cluster§8.5.7.1" },
                { name: "Night", tag: "field", xref: "cluster§8.5.7.1" },
                { name: "Day", tag: "field", xref: "cluster§8.5.7.1" },
                { name: "Normal", tag: "field", details: "The normal regime of operation.", xref: "cluster§8.5.7.1.1" },
                {
                    name: "Delicate", tag: "field",
                    details: "Mode optimized for washing delicate garments.",
                    xref: "cluster§8.5.7.1.2"
                },
                {
                    name: "Heavy", tag: "field",
                    details: "Mode optimized for heavy washing.",
                    xref: "cluster§8.5.7.1.3"
                },
                {
                    name: "Whites", tag: "field",
                    details: "Mode optimized for stain removal on white fabrics.",
                    xref: "cluster§8.5.7.1.4"
                }
            ]
        }
    ]
});
