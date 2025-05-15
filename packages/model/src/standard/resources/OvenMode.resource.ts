/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "OvenMode", tag: "cluster",
    classification: "application", pics: "OTCCM",
    details: "This cluster is derived from the Mode Base cluster and defines additional mode tags and namespaced " +
        "enumerated values for oven devices.",
    xref: "cluster§8.11",

    children: [
        {
            name: "FeatureMap", tag: "attribute",
            xref: "cluster§8.11.4",
            children: [{ name: "DEPONOFF", tag: "field", details: "Dependency with the OnOff cluster" }]
        },

        {
            name: "SupportedModes", tag: "attribute",
            details: "At least one entry in the SupportedModes attribute shall include the Bake mode tag in the ModeTags " +
                "field list.",
            xref: "cluster§8.11.6.1"
        },

        { name: "CurrentMode", tag: "attribute", xref: "cluster§8.11.6" },
        { name: "StartUpMode", tag: "attribute", xref: "cluster§8.11.6" },
        { name: "OnMode", tag: "attribute", xref: "cluster§8.11.6" },

        {
            name: "ModeOptionStruct", tag: "datatype",
            details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
                "ModeOptionStruct type. A blank field indicates no change.",
            xref: "cluster§8.11.5.1"
        },

        {
            name: "ModeTag", tag: "datatype",

            children: [
                { name: "Auto", tag: "field", xref: "cluster§8.11.7.1" },
                { name: "Quick", tag: "field", xref: "cluster§8.11.7.1" },
                { name: "Quiet", tag: "field", xref: "cluster§8.11.7.1" },
                { name: "LowNoise", tag: "field", xref: "cluster§8.11.7.1" },
                { name: "LowEnergy", tag: "field", xref: "cluster§8.11.7.1" },
                { name: "Vacation", tag: "field", xref: "cluster§8.11.7.1" },
                { name: "Min", tag: "field", xref: "cluster§8.11.7.1" },
                { name: "Max", tag: "field", xref: "cluster§8.11.7.1" },
                { name: "Night", tag: "field", xref: "cluster§8.11.7.1" },
                { name: "Day", tag: "field", xref: "cluster§8.11.7.1" },
                {
                    name: "Bake", tag: "field",
                    details: "This mode sets the device into baking mode for baking food items.",
                    xref: "cluster§8.11.7.1.1"
                },

                {
                    name: "Convection", tag: "field",
                    details: "This mode sets the device into convection mode which creates an airflow within the device during the " +
                        "cooking duration.",
                    xref: "cluster§8.11.7.1.2"
                },

                {
                    name: "Grill", tag: "field",
                    details: "This mode sets the device into grill mode for grilling food items. This is the same as Broil for " +
                        "many regions.",
                    xref: "cluster§8.11.7.1.3"
                },

                {
                    name: "Roast", tag: "field",
                    details: "This mode sets the device into roast mode for roasting food items.",
                    xref: "cluster§8.11.7.1.4"
                },
                {
                    name: "Clean", tag: "field",
                    details: "This mode sets the device into cleaning mode to clean the internal components of the appliance.",
                    xref: "cluster§8.11.7.1.5"
                },
                { name: "ConvectionBake", tag: "field", xref: "cluster§8.11.7.1" },
                { name: "ConvectionRoast", tag: "field", xref: "cluster§8.11.7.1" },
                {
                    name: "Warming", tag: "field",
                    details: "This mode sets the device into a warming mode which begins warming the cavity.",
                    xref: "cluster§8.11.7.1.8"
                },
                {
                    name: "Proofing", tag: "field",
                    details: "This mode sets the device into proofing mode which creates an environment ready for proofing.",
                    xref: "cluster§8.11.7.1.9"
                },
                { name: "Steam", tag: "field", xref: "cluster§8.11.7.1" }
            ]
        }
    ]
});
