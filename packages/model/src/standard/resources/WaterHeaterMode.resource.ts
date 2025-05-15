/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { WaterHeaterMode } from "#index.js";

WaterHeaterMode.patch({
    classification: "application", pics: "WHM",
    details: "This cluster is derived from the Mode Base cluster and defines additional mode tags and namespaced " +
        "enumerated values for water heater devices.",
    xref: { document: "cluster", section: "9.6" },

    children: [
        undefined,
        {
            xref: { document: "cluster", section: "9.6.4" },
            children: [{ description: "OnOff", details: "Dependency with the OnOff cluster" }]
        },

        {
            details: "At least one entry in the SupportedModes attribute shall include the Manual mode tag in the ModeTags " +
                "field list." +
                "\n" +
                "At least one entry in the SupportedModes attribute shall include the Off mode tag in the ModeTags " +
                "field list." +
                "\n" +
                "An entry in the SupportedModes attribute that includes one of an Off, Manual, or Timed tag shall NOT " +
                "also include an additional instance of any one of these tag types.",

            xref: { document: "cluster", section: "9.6.6.1" }
        },

        { xref: { document: "cluster", section: "9.6.6" } },
        { xref: { document: "cluster", section: "9.6.6" } },
        { xref: { document: "cluster", section: "9.6.6" } },
        {
            details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
                "ModeOptionStruct type. A blank field indicates no change.",
            xref: { document: "cluster", section: "9.6.5.1" }
        },

        {
            children: [
                { xref: { document: "cluster", section: "9.6.7.1" } },
                { xref: { document: "cluster", section: "9.6.7.1" } },
                { xref: { document: "cluster", section: "9.6.7.1" } },
                { xref: { document: "cluster", section: "9.6.7.1" } },
                { xref: { document: "cluster", section: "9.6.7.1" } },
                { xref: { document: "cluster", section: "9.6.7.1" } },
                { xref: { document: "cluster", section: "9.6.7.1" } },
                { xref: { document: "cluster", section: "9.6.7.1" } },
                { xref: { document: "cluster", section: "9.6.7.1" } },
                { xref: { document: "cluster", section: "9.6.7.1" } },
                {
                    details: "While in modes with this tag, the device will not attempt to keep the water warm.",
                    xref: { document: "cluster", section: "9.6.7.1.1" }
                },
                {
                    details: "While in modes with this tag, the device will attempt to keep the water warm based on the " +
                        "OccupiedHeatingSetpoint attribute of the associated Thermostat cluster.",
                    xref: { document: "cluster", section: "9.6.7.1.2" }
                },
                {
                    details: "While in modes with this tag, the device will attempt to keep the water warm based on the Schedules " +
                        "attribute of the associated Thermostat cluster.",
                    xref: { document: "cluster", section: "9.6.7.1.3" }
                }
            ]
        }
    ]
});
