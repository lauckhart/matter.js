/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    tag: "cluster", name: "OvenMode",
    classification: "application", pics: "OTCCM",
    details: "This cluster is derived from the Mode Base cluster and defines additional mode tags and namespaced " +
        "enumerated values for oven devices.",
    xref: "cluster§8.11",

    children: [
        {
            tag: "attribute", name: "FeatureMap",
            xref: "cluster§8.11.4",
            children: [{ tag: "field", name: "DEPONOFF", details: "Dependency with the OnOff cluster" }]
        },

        {
            tag: "attribute", name: "SupportedModes",
            details: "At least one entry in the SupportedModes attribute shall include the Bake mode tag in the ModeTags " +
                "field list.",
            xref: "cluster§8.11.6.1"
        },

        { tag: "attribute", name: "CurrentMode", xref: "cluster§8.11.6" },
        { tag: "attribute", name: "StartUpMode", xref: "cluster§8.11.6" },
        { tag: "attribute", name: "OnMode", xref: "cluster§8.11.6" },

        {
            tag: "datatype", name: "ModeOptionStruct",
            details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
                "ModeOptionStruct type. A blank field indicates no change.",
            xref: "cluster§8.11.5.1"
        },

        {
            tag: "datatype", name: "ModeTag",

            children: [
                { tag: "field", name: "Auto", xref: "cluster§8.11.7.1" },
                { tag: "field", name: "Quick", xref: "cluster§8.11.7.1" },
                { tag: "field", name: "Quiet", xref: "cluster§8.11.7.1" },
                { tag: "field", name: "LowNoise", xref: "cluster§8.11.7.1" },
                { tag: "field", name: "LowEnergy", xref: "cluster§8.11.7.1" },
                { tag: "field", name: "Vacation", xref: "cluster§8.11.7.1" },
                { tag: "field", name: "Min", xref: "cluster§8.11.7.1" },
                { tag: "field", name: "Max", xref: "cluster§8.11.7.1" },
                { tag: "field", name: "Night", xref: "cluster§8.11.7.1" },
                { tag: "field", name: "Day", xref: "cluster§8.11.7.1" },
                {
                    tag: "field", name: "Bake",
                    details: "This mode sets the device into baking mode for baking food items.",
                    xref: "cluster§8.11.7.1.1"
                },

                {
                    tag: "field", name: "Convection",
                    details: "This mode sets the device into convection mode which creates an airflow within the device during the " +
                        "cooking duration.",
                    xref: "cluster§8.11.7.1.2"
                },

                {
                    tag: "field", name: "Grill",
                    details: "This mode sets the device into grill mode for grilling food items. This is the same as Broil for " +
                        "many regions.",
                    xref: "cluster§8.11.7.1.3"
                },

                {
                    tag: "field", name: "Roast",
                    details: "This mode sets the device into roast mode for roasting food items.",
                    xref: "cluster§8.11.7.1.4"
                },
                {
                    tag: "field", name: "Clean",
                    details: "This mode sets the device into cleaning mode to clean the internal components of the appliance.",
                    xref: "cluster§8.11.7.1.5"
                },
                { tag: "field", name: "ConvectionBake", xref: "cluster§8.11.7.1" },
                { tag: "field", name: "ConvectionRoast", xref: "cluster§8.11.7.1" },
                {
                    tag: "field", name: "Warming",
                    details: "This mode sets the device into a warming mode which begins warming the cavity.",
                    xref: "cluster§8.11.7.1.8"
                },
                {
                    tag: "field", name: "Proofing",
                    details: "This mode sets the device into proofing mode which creates an environment ready for proofing.",
                    xref: "cluster§8.11.7.1.9"
                },
                { tag: "field", name: "Steam", xref: "cluster§8.11.7.1" }
            ]
        }
    ]
});
