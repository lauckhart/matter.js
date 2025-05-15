/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OvenMode } from "#index.js";

OvenMode.patch({
    classification: "application", pics: "OTCCM",
    details: "This cluster is derived from the Mode Base cluster and defines additional mode tags and namespaced " +
        "enumerated values for oven devices.",
    xref: "cluster§8.11",

    children: [
        undefined,
        { xref: "cluster§8.11.4", children: [{ description: "OnOff", details: "Dependency with the OnOff cluster" }] },
        {
            details: "At least one entry in the SupportedModes attribute shall include the Bake mode tag in the ModeTags " +
                "field list.",
            xref: "cluster§8.11.6.1"
        },
        { xref: "cluster§8.11.6" },
        { xref: "cluster§8.11.6" },
        { xref: "cluster§8.11.6" },
        {
            details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
                "ModeOptionStruct type. A blank field indicates no change.",
            xref: "cluster§8.11.5.1"
        },

        {
            children: [
                { xref: "cluster§8.11.7.1" },
                { xref: "cluster§8.11.7.1" },
                { xref: "cluster§8.11.7.1" },
                { xref: "cluster§8.11.7.1" },
                { xref: "cluster§8.11.7.1" },
                { xref: "cluster§8.11.7.1" },
                { xref: "cluster§8.11.7.1" },
                { xref: "cluster§8.11.7.1" },
                { xref: "cluster§8.11.7.1" },
                { xref: "cluster§8.11.7.1" },
                {
                    details: "This mode sets the device into baking mode for baking food items.",
                    xref: "cluster§8.11.7.1.1"
                },
                {
                    details: "This mode sets the device into convection mode which creates an airflow within the device during the " +
                        "cooking duration.",
                    xref: "cluster§8.11.7.1.2"
                },
                {
                    details: "This mode sets the device into grill mode for grilling food items. This is the same as Broil for " +
                        "many regions.",
                    xref: "cluster§8.11.7.1.3"
                },
                {
                    details: "This mode sets the device into roast mode for roasting food items.",
                    xref: "cluster§8.11.7.1.4"
                },
                {
                    details: "This mode sets the device into cleaning mode to clean the internal components of the appliance.",
                    xref: "cluster§8.11.7.1.5"
                },
                { xref: "cluster§8.11.7.1" },
                { xref: "cluster§8.11.7.1" },
                {
                    details: "This mode sets the device into a warming mode which begins warming the cavity.",
                    xref: "cluster§8.11.7.1.8"
                },
                {
                    details: "This mode sets the device into proofing mode which creates an environment ready for proofing.",
                    xref: "cluster§8.11.7.1.9"
                },
                { xref: "cluster§8.11.7.1" }
            ]
        }
    ]
});
