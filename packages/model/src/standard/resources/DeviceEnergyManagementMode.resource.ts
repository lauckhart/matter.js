/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "DeviceEnergyManagementMode", tag: "cluster",
    classification: "application", pics: "DEMM",
    details: "This cluster is derived from the Mode Base cluster and defines additional mode tags and namespaced " +
        "enumerated values for Device Energy Management devices.",
    xref: "cluster§9.8",

    children: [
        {
            name: "FeatureMap", tag: "attribute",
            xref: "cluster§9.8.4",
            children: [{ name: "DEPONOFF", tag: "field", details: "Dependency with the OnOff cluster" }]
        },

        {
            name: "SupportedModes", tag: "attribute",

            details: "At least one entry in the SupportedModes attribute shall include the NoOptimization mode tag in the " +
                "ModeTags field." +
                "\n" +
                "At least one entry in the SupportedModes attribute shall include the LocalOptimization mode tag in " +
                "the ModeTags field list." +
                "\n" +
                "At least one entry in the SupportedModes attribute shall include the GridOptimization mode tag in " +
                "the ModeTags field list." +
                "\n" +
                "An entry in the SupportedModes attribute that includes one of an DeviceOptimization, " +
                "LocalOptimization, or GridOptimization tags shall NOT also include NoOptimization tag.",

            xref: "cluster§9.8.6.1"
        },

        { name: "CurrentMode", tag: "attribute", xref: "cluster§9.8.6" },
        { name: "StartUpMode", tag: "attribute", xref: "cluster§9.8.6" },
        { name: "OnMode", tag: "attribute", xref: "cluster§9.8.6" },

        {
            name: "ModeOptionStruct", tag: "datatype",
            details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
                "ModeOptionStruct type. A blank field indicates no change.",
            xref: "cluster§9.8.5.1"
        },

        {
            name: "ModeTag", tag: "datatype",

            children: [
                { name: "Auto", tag: "field", xref: "cluster§9.8.7.1" },
                { name: "Quick", tag: "field", xref: "cluster§9.8.7.1" },
                { name: "Quiet", tag: "field", xref: "cluster§9.8.7.1" },
                { name: "LowNoise", tag: "field", xref: "cluster§9.8.7.1" },
                { name: "LowEnergy", tag: "field", xref: "cluster§9.8.7.1" },
                { name: "Vacation", tag: "field", xref: "cluster§9.8.7.1" },
                { name: "Min", tag: "field", xref: "cluster§9.8.7.1" },
                { name: "Max", tag: "field", xref: "cluster§9.8.7.1" },
                { name: "Night", tag: "field", xref: "cluster§9.8.7.1" },
                { name: "Day", tag: "field", xref: "cluster§9.8.7.1" },

                {
                    name: "NoOptimization", tag: "field",
                    details: "The device prohibits optimization of energy usage management: its energy usage is determined only by " +
                        "the user configuration and internal device needs.",
                    xref: "cluster§9.8.7.1.1"
                },

                {
                    name: "DeviceOptimization", tag: "field",
                    details: "The device is permitted to manage its own energy usage. For example, using tariff information it may " +
                        "obtain.",
                    xref: "cluster§9.8.7.1.2"
                },

                {
                    name: "LocalOptimization", tag: "field",
                    details: "The device permits management of energy usage by an energy manager to optimize the local energy " +
                        "usage.",
                    xref: "cluster§9.8.7.1.3"
                },

                {
                    name: "GridOptimization", tag: "field",
                    details: "The device permits management of energy usage by an energy manager to optimize the grid energy " +
                        "usage.",
                    xref: "cluster§9.8.7.1.4"
                }
            ]
        }
    ]
});
