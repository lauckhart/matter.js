/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "WaterHeaterMode", tag: "cluster",
    classification: "application", pics: "WHM",
    details: "This cluster is derived from the Mode Base cluster and defines additional mode tags and namespaced " +
        "enumerated values for water heater devices.",
    xref: "cluster§9.6",

    children: [
        {
            name: "FeatureMap", tag: "attribute",
            xref: "cluster§9.6.4",
            children: [{ name: "DEPONOFF", tag: "field", details: "Dependency with the OnOff cluster" }]
        },

        {
            name: "SupportedModes", tag: "attribute",

            details: "At least one entry in the SupportedModes attribute shall include the Manual mode tag in the ModeTags " +
                "field list." +
                "\n" +
                "At least one entry in the SupportedModes attribute shall include the Off mode tag in the ModeTags " +
                "field list." +
                "\n" +
                "An entry in the SupportedModes attribute that includes one of an Off, Manual, or Timed tag shall NOT " +
                "also include an additional instance of any one of these tag types.",

            xref: "cluster§9.6.6.1"
        },

        { name: "CurrentMode", tag: "attribute", xref: "cluster§9.6.6" },
        { name: "StartUpMode", tag: "attribute", xref: "cluster§9.6.6" },
        { name: "OnMode", tag: "attribute", xref: "cluster§9.6.6" },

        {
            name: "ModeOptionStruct", tag: "datatype",
            details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
                "ModeOptionStruct type. A blank field indicates no change.",
            xref: "cluster§9.6.5.1"
        },

        {
            name: "ModeTag", tag: "datatype",

            children: [
                { name: "Auto", tag: "field", xref: "cluster§9.6.7.1" },
                { name: "Quick", tag: "field", xref: "cluster§9.6.7.1" },
                { name: "Quiet", tag: "field", xref: "cluster§9.6.7.1" },
                { name: "LowNoise", tag: "field", xref: "cluster§9.6.7.1" },
                { name: "LowEnergy", tag: "field", xref: "cluster§9.6.7.1" },
                { name: "Vacation", tag: "field", xref: "cluster§9.6.7.1" },
                { name: "Min", tag: "field", xref: "cluster§9.6.7.1" },
                { name: "Max", tag: "field", xref: "cluster§9.6.7.1" },
                { name: "Night", tag: "field", xref: "cluster§9.6.7.1" },
                { name: "Day", tag: "field", xref: "cluster§9.6.7.1" },
                {
                    name: "Off", tag: "field",
                    details: "While in modes with this tag, the device will not attempt to keep the water warm.",
                    xref: "cluster§9.6.7.1.1"
                },

                {
                    name: "Manual", tag: "field",
                    details: "While in modes with this tag, the device will attempt to keep the water warm based on the " +
                        "OccupiedHeatingSetpoint attribute of the associated Thermostat cluster.",
                    xref: "cluster§9.6.7.1.2"
                },

                {
                    name: "Timed", tag: "field",
                    details: "While in modes with this tag, the device will attempt to keep the water warm based on the Schedules " +
                        "attribute of the associated Thermostat cluster.",
                    xref: "cluster§9.6.7.1.3"
                }
            ]
        }
    ]
});
