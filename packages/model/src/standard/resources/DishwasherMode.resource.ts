/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    tag: "cluster", name: "DishwasherMode",
    classification: "application", pics: "DISHM",
    details: "This cluster is derived from the Mode Base cluster and defines additional mode tags and namespaced " +
        "enumerated values for dishwasher devices.",
    xref: "cluster§8.3",

    children: [
        {
            tag: "attribute", name: "FeatureMap",
            xref: "cluster§8.3.4",
            children: [{ tag: "field", name: "DEPONOFF", details: "Dependency with the OnOff cluster" }]
        },

        {
            tag: "attribute", name: "SupportedModes",
            details: "At least one entry in the SupportedModes attribute shall include the Normal mode tag in the ModeTags " +
                "field list.",
            xref: "cluster§8.3.6.1"
        },

        { tag: "attribute", name: "CurrentMode", xref: "cluster§8.3.6" },
        { tag: "attribute", name: "StartUpMode", xref: "cluster§8.3.6" },
        { tag: "attribute", name: "OnMode", xref: "cluster§8.3.6" },

        {
            tag: "datatype", name: "ModeOptionStruct",
            details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
                "ModeOptionStruct type. A blank field indicates no change.",
            xref: "cluster§8.3.5.1"
        },

        {
            tag: "datatype", name: "ModeTag",

            children: [
                { tag: "field", name: "Auto", xref: "cluster§8.3.7.1" },
                { tag: "field", name: "Quick", xref: "cluster§8.3.7.1" },
                { tag: "field", name: "Quiet", xref: "cluster§8.3.7.1" },
                { tag: "field", name: "LowNoise", xref: "cluster§8.3.7.1" },
                { tag: "field", name: "LowEnergy", xref: "cluster§8.3.7.1" },
                { tag: "field", name: "Vacation", xref: "cluster§8.3.7.1" },
                { tag: "field", name: "Min", xref: "cluster§8.3.7.1" },
                { tag: "field", name: "Max", xref: "cluster§8.3.7.1" },
                { tag: "field", name: "Night", xref: "cluster§8.3.7.1" },
                { tag: "field", name: "Day", xref: "cluster§8.3.7.1" },
                { tag: "field", name: "Normal", details: "The normal regime of operation.", xref: "cluster§8.3.7.1.1" },
                {
                    tag: "field", name: "Heavy",
                    details: "Mode optimized for washing heavily-soiled dishes.",
                    xref: "cluster§8.3.7.1.2"
                },
                {
                    tag: "field", name: "Light",
                    details: "Mode optimized for light washing.",
                    xref: "cluster§8.3.7.1.3"
                }
            ]
        }
    ]
});
