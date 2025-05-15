/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "RvcRunMode", tag: "cluster",
    classification: "application", pics: "RVCRUNM",
    details: "This cluster is derived from the Mode Base cluster and defines additional mode tags and namespaced " +
        "enumerated values for the running modes of robotic vacuum cleaner devices.",
    xref: "cluster§7.2",

    children: [
        {
            name: "FeatureMap", tag: "attribute",
            xref: "cluster§7.2.4",
            children: [{ name: "DEPONOFF", tag: "field", details: "Dependency with the OnOff cluster" }]
        },

        {
            name: "SupportedModes", tag: "attribute",

            details: "At least one entry in the SupportedModes attribute shall include the Idle mode tag in the ModeTags " +
                "field." +
                "\n" +
                "At least one entry in the SupportedModes attribute (different from the one above) shall include the " +
                "Cleaning mode tag in the ModeTags field." +
                "\n" +
                "The Mapping, Cleaning, and Idle mode tags are mutually exclusive and shall NOT be used together in a " +
                "mode’s ModeTags.",

            xref: "cluster§7.2.6.1"
        },

        { name: "CurrentMode", tag: "attribute", xref: "cluster§7.2.6" },
        { name: "StartUpMode", tag: "attribute", xref: "cluster§7.2.6" },
        { name: "OnMode", tag: "attribute", xref: "cluster§7.2.6" },

        {
            name: "ModeOptionStruct", tag: "datatype",
            details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
                "ModeOptionStruct type. A blank field indicates no change.",
            xref: "cluster§7.2.5.1"
        },

        {
            name: "ModeChangeStatus", tag: "datatype",

            children: [
                { name: "Stuck", tag: "field", xref: "cluster§7.2.7.1" },
                { name: "DustBinMissing", tag: "field", xref: "cluster§7.2.7.1" },
                { name: "DustBinFull", tag: "field", xref: "cluster§7.2.7.1" },
                { name: "WaterTankEmpty", tag: "field", xref: "cluster§7.2.7.1" },
                { name: "WaterTankMissing", tag: "field", xref: "cluster§7.2.7.1" },
                { name: "WaterTankLidOpen", tag: "field", xref: "cluster§7.2.7.1" },
                { name: "MopCleaningPadMissing", tag: "field", xref: "cluster§7.2.7.1" },
                { name: "BatteryLow", tag: "field", xref: "cluster§7.2.7.1" }
            ]
        },

        {
            name: "ModeTag", tag: "datatype",

            children: [
                { name: "Auto", tag: "field", xref: "cluster§7.2.7.2" },
                { name: "Quick", tag: "field", xref: "cluster§7.2.7.2" },
                { name: "Quiet", tag: "field", xref: "cluster§7.2.7.2" },
                { name: "LowNoise", tag: "field", xref: "cluster§7.2.7.2" },
                { name: "LowEnergy", tag: "field", xref: "cluster§7.2.7.2" },
                { name: "Vacation", tag: "field", xref: "cluster§7.2.7.2" },
                { name: "Min", tag: "field", xref: "cluster§7.2.7.2" },
                { name: "Max", tag: "field", xref: "cluster§7.2.7.2" },
                { name: "Night", tag: "field", xref: "cluster§7.2.7.2" },
                { name: "Day", tag: "field", xref: "cluster§7.2.7.2" },

                {
                    name: "Idle", tag: "field",
                    details: "The device is not performing any of the main operations of the other modes. However, auxiliary " +
                        "actions, such as seeking the charger or charging, may occur." +
                        "\n" +
                        "For example, the device has completed cleaning, successfully or not, on its own or due to a command, " +
                        "or has not been asked to clean after a restart.",
                    xref: "cluster§7.2.7.2.1"
                },

                {
                    name: "Cleaning", tag: "field",
                    details: "The device was asked to clean so it may be actively running, or paused due to an error, due to a " +
                        "pause command, or for recharging etc. If currently paused and the device can resume it will continue " +
                        "to clean.",
                    xref: "cluster§7.2.7.2.2"
                },

                {
                    name: "Mapping", tag: "field",

                    details: "The device was asked to create a map of the space it is located in, so it may be actively running, " +
                        "or paused due to an error, due to a pause command, or for recharging etc. If currently paused and " +
                        "the device can resume, it will continue to map." +
                        "\n" +
                        "NOTE" +
                        "\n" +
                        "this mode is intended to be used so the current space can be mapped by the device if the robot has " +
                        "not previously done that, or if the layout has substantially changed, for an optimal subsequent " +
                        "cleaning experience.",

                    xref: "cluster§7.2.7.2.3"
                }
            ]
        }
    ]
});
