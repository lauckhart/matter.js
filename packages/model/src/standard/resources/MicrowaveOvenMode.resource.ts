/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "MicrowaveOvenMode", tag: "cluster",
    classification: "application", pics: "MWOM",
    details: "This cluster is derived from the Mode Base cluster and defines additional mode tags and namespaced " +
        "enumerated values for microwave oven devices.",
    xref: "cluster§8.12",

    children: [
        {
            name: "FeatureMap", tag: "attribute",
            xref: "cluster§8.12.4",
            children: [{ name: "DEPONOFF", tag: "field", details: "Dependency with the OnOff cluster" }]
        },

        {
            name: "SupportedModes", tag: "attribute",
            details: "Exactly one entry in the SupportedModes attribute shall include the Normal mode tag in the ModeTags " +
                "field." +
                "\n" +
                "The Normal and Defrost mode tags are mutually exclusive and shall NOT both be used together in a " +
                "mode’s ModeTags.",
            xref: "cluster§8.12.5.1"
        },

        { name: "CurrentMode", tag: "attribute", xref: "cluster§8.12.5" },
        { name: "StartUpMode", tag: "attribute", xref: "cluster§8.12.5" },
        { name: "OnMode", tag: "attribute", xref: "cluster§8.12.5" },
        { name: "ChangeToMode", tag: "command", xref: "cluster§8.12.6" },
        { name: "ChangeToModeResponse", tag: "command", xref: "cluster§8.12.6" },

        {
            name: "ModeTag", tag: "datatype",

            children: [
                { name: "Auto", tag: "field", xref: "cluster§8.12.7.1" },
                { name: "Quick", tag: "field", xref: "cluster§8.12.7.1" },
                { name: "Quiet", tag: "field", xref: "cluster§8.12.7.1" },
                { name: "LowNoise", tag: "field", xref: "cluster§8.12.7.1" },
                { name: "LowEnergy", tag: "field", xref: "cluster§8.12.7.1" },
                { name: "Vacation", tag: "field", xref: "cluster§8.12.7.1" },
                { name: "Min", tag: "field", xref: "cluster§8.12.7.1" },
                { name: "Max", tag: "field", xref: "cluster§8.12.7.1" },
                { name: "Night", tag: "field", xref: "cluster§8.12.7.1" },
                { name: "Day", tag: "field", xref: "cluster§8.12.7.1" },
                {
                    name: "Normal", tag: "field",
                    details: "This is the normal mode of operation for general cooking of food.",
                    xref: "cluster§8.12.7.1.1"
                },
                {
                    name: "Defrost", tag: "field",
                    details: "This is a mode optimized for defrosting food.",
                    xref: "cluster§8.12.7.1.2"
                }
            ]
        }
    ]
});
