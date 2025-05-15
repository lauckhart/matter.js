/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "DishwasherMode", tag: "cluster",
    classification: "application", pics: "DISHM",
    details: "This cluster is derived from the Mode Base cluster and defines additional mode tags and namespaced " +
        "enumerated values for dishwasher devices.",
    xref: "cluster§8.3",

    children: [
        {
            name: "FeatureMap", tag: "attribute",
            xref: "cluster§8.3.4",
            children: [{ name: "DEPONOFF", tag: "field", details: "Dependency with the OnOff cluster" }]
        },

        {
            name: "SupportedModes", tag: "attribute",
            details: "At least one entry in the SupportedModes attribute shall include the Normal mode tag in the ModeTags " +
                "field list.",
            xref: "cluster§8.3.6.1"
        },

        { name: "CurrentMode", tag: "attribute", xref: "cluster§8.3.6" },
        { name: "StartUpMode", tag: "attribute", xref: "cluster§8.3.6" },
        { name: "OnMode", tag: "attribute", xref: "cluster§8.3.6" },

        {
            name: "ModeOptionStruct", tag: "datatype",
            details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
                "ModeOptionStruct type. A blank field indicates no change.",
            xref: "cluster§8.3.5.1"
        },

        {
            name: "ModeTag", tag: "datatype",

            children: [
                { name: "Auto", tag: "field", xref: "cluster§8.3.7.1" },
                { name: "Quick", tag: "field", xref: "cluster§8.3.7.1" },
                { name: "Quiet", tag: "field", xref: "cluster§8.3.7.1" },
                { name: "LowNoise", tag: "field", xref: "cluster§8.3.7.1" },
                { name: "LowEnergy", tag: "field", xref: "cluster§8.3.7.1" },
                { name: "Vacation", tag: "field", xref: "cluster§8.3.7.1" },
                { name: "Min", tag: "field", xref: "cluster§8.3.7.1" },
                { name: "Max", tag: "field", xref: "cluster§8.3.7.1" },
                { name: "Night", tag: "field", xref: "cluster§8.3.7.1" },
                { name: "Day", tag: "field", xref: "cluster§8.3.7.1" },
                { name: "Normal", tag: "field", details: "The normal regime of operation.", xref: "cluster§8.3.7.1.1" },
                {
                    name: "Heavy", tag: "field",
                    details: "Mode optimized for washing heavily-soiled dishes.",
                    xref: "cluster§8.3.7.1.2"
                },
                {
                    name: "Light", tag: "field",
                    details: "Mode optimized for light washing.",
                    xref: "cluster§8.3.7.1.3"
                }
            ]
        }
    ]
});
