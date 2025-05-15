/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "EnergyEvseMode", tag: "cluster",
    classification: "application", pics: "EEVSEM",
    details: "This cluster is derived from the Mode Base cluster and defines additional mode tags and namespaced " +
        "enumerated values for EVSE devices.",
    xref: "cluster§9.4",

    children: [
        {
            name: "FeatureMap", tag: "attribute",
            xref: "cluster§9.4.4",
            children: [{ name: "DEPONOFF", tag: "field", details: "Dependency with the OnOff cluster" }]
        },

        {
            name: "SupportedModes", tag: "attribute",

            details: "At least one entry in the SupportedModes attribute shall include the Manual mode tag in the ModeTags " +
                "field list." +
                "\n" +
                "Modes with entries in the SupportedModes attribute which contain multiple mode tags permitting" +
                "\n" +
                "charging or discharging under different conditions shall permit the charging or discharging to occur " +
                "if any of the conditions are satisfied." +
                "\n" +
                "Modes shall NOT have both the Manual tag and the TimeOfUse or SolarCharging tags defined in the " +
                "SupportedModes attribute.",

            xref: "cluster§9.4.6.1"
        },

        { name: "CurrentMode", tag: "attribute", xref: "cluster§9.4.6" },
        { name: "StartUpMode", tag: "attribute", xref: "cluster§9.4.6" },
        { name: "OnMode", tag: "attribute", xref: "cluster§9.4.6" },

        {
            name: "ModeOptionStruct", tag: "datatype",
            details: "The table below lists the changes relative to the Mode Base cluster for the fields of the " +
                "ModeOptionStruct type. A blank field indicates no change.",
            xref: "cluster§9.4.5.1"
        },

        {
            name: "ModeTag", tag: "datatype",

            children: [
                { name: "Auto", tag: "field", xref: "cluster§9.4.7.1" },
                { name: "Quick", tag: "field", xref: "cluster§9.4.7.1" },
                { name: "Quiet", tag: "field", xref: "cluster§9.4.7.1" },
                { name: "LowNoise", tag: "field", xref: "cluster§9.4.7.1" },
                { name: "LowEnergy", tag: "field", xref: "cluster§9.4.7.1" },
                { name: "Vacation", tag: "field", xref: "cluster§9.4.7.1" },
                { name: "Min", tag: "field", xref: "cluster§9.4.7.1" },
                { name: "Max", tag: "field", xref: "cluster§9.4.7.1" },
                { name: "Night", tag: "field", xref: "cluster§9.4.7.1" },
                { name: "Day", tag: "field", xref: "cluster§9.4.7.1" },

                {
                    name: "Manual", tag: "field",
                    details: "While in modes with this tag, and once enabled with the EnableCharging command, the EVSE will permit " +
                        "charging based on demand from the EV.",
                    xref: "cluster§9.4.7.1.1"
                },

                {
                    name: "TimeOfUse", tag: "field",
                    details: "While in modes with this tag, and once enabled with the EnableCharging command, the EVSE will " +
                        "attempt to automatically start charging based on the user’s charging targets (for example, set based " +
                        "on a Time of Use tariff to charge at the cheapest times of the day).",
                    xref: "cluster§9.4.7.1.2"
                },

                {
                    name: "SolarCharging", tag: "field",
                    details: "While in modes with this tag, and once enabled with the EnableCharging, the EVSE will attempt to" +
                        "\n" +
                        "automatically start charging based on available excess solar PV generation, limiting the charging " +
                        "power to avoid importing energy from the grid.",
                    xref: "cluster§9.4.7.1.3"
                },

                {
                    name: "V2X", tag: "field",

                    details: "While in modes with this tag, and once enabled with the EnableDischarging command, the EVSE will " +
                        "permit discharging based on the current charge state of the EV, and its control from an associated " +
                        "Device Energy Management cluster." +
                        "\n" +
                        "NOTE" +
                        "\n" +
                        "being in a mode with this tag set or not does not affect the handling of the EnableDischarging " +
                        "command by the Energy EVSE cluster, but once enabled, only modes with this tag enable the " +
                        "discharging to actually occur.",

                    xref: "cluster§9.4.7.1.4"
                }
            ]
        }
    ]
});
