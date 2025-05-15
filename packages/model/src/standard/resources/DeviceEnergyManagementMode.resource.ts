/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceEnergyManagementMode } from "#index.js";

DeviceEnergyManagementMode.patch({
    classification: "application", pics: "DEMM",
    details: "This cluster is derived from the Mode Base cluster and defines additional mode tags and namespaced " +
        "enumerated values for Device Energy Management devices.",
    xref: { document: "cluster", section: "9.8" },

    children: [
        undefined,
        {
            xref: { document: "cluster", section: "9.8.4" },
            children: [{ description: "OnOff", details: "Dependency with the OnOff cluster" }]
        },

        {
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

            xref: { document: "cluster", section: "9.8.6.1" }
        },

        { xref: { document: "cluster", section: "9.8.6" } },
        { xref: { document: "cluster", section: "9.8.6" } },
        { xref: { document: "cluster", section: "9.8.6" } },
        {
            details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
                "ModeOptionStruct type. A blank field indicates no change.",
            xref: { document: "cluster", section: "9.8.5.1" }
        },

        {
            children: [
                { xref: { document: "cluster", section: "9.8.7.1" } },
                { xref: { document: "cluster", section: "9.8.7.1" } },
                { xref: { document: "cluster", section: "9.8.7.1" } },
                { xref: { document: "cluster", section: "9.8.7.1" } },
                { xref: { document: "cluster", section: "9.8.7.1" } },
                { xref: { document: "cluster", section: "9.8.7.1" } },
                { xref: { document: "cluster", section: "9.8.7.1" } },
                { xref: { document: "cluster", section: "9.8.7.1" } },
                { xref: { document: "cluster", section: "9.8.7.1" } },
                { xref: { document: "cluster", section: "9.8.7.1" } },
                {
                    details: "The device prohibits optimization of energy usage management: its energy usage is determined only by " +
                        "the user configuration and internal device needs.",
                    xref: { document: "cluster", section: "9.8.7.1.1" }
                },
                {
                    details: "The device is permitted to manage its own energy usage. For example, using tariff information it may " +
                        "obtain.",
                    xref: { document: "cluster", section: "9.8.7.1.2" }
                },
                {
                    details: "The device permits management of energy usage by an energy manager to optimize the local energy " +
                        "usage.",
                    xref: { document: "cluster", section: "9.8.7.1.3" }
                },
                {
                    details: "The device permits management of energy usage by an energy manager to optimize the grid energy " +
                        "usage.",
                    xref: { document: "cluster", section: "9.8.7.1.4" }
                }
            ]
        }
    ]
});
