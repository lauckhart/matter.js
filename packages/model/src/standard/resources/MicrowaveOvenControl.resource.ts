/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "MicrowaveOvenControl", tag: "cluster",
    classification: "application", pics: "MWOCTRL",
    details: "This cluster defines the requirements for the Microwave Oven Control cluster." +
        "\n" +
        "This cluster has dependencies with the Operational State and Microwave Oven Mode clusters. The " +
        "Operational State cluster and the Microwave Oven Mode clusters, or derivatives of those clusters " +
        "shall appear on the same endpoint as this cluster.",
    xref: "cluster§8.13",

    children: [
        {
            name: "FeatureMap", tag: "attribute",
            xref: "cluster§8.13.4",

            children: [
                { name: "PWRNUM", tag: "field", details: "Power is specified as a unitless number or a percentage" },
                { name: "WATTS", tag: "field", details: "Power is specified in Watts" },
                {
                    name: "PWRLMTS", tag: "field",
                    details: "Supports the limit attributes used with the PWRNUM feature"
                }
            ]
        },

        {
            name: "CookTime", tag: "attribute",
            details: "Indicates the total cook time associated with the operation of the device." +
                "\n" +
                "This attribute shall remain unchanged during the operation of the oven unless the value is changed " +
                "via a command or out-of-band action.",
            xref: "cluster§8.13.5.1"
        },

        {
            name: "MaxCookTime", tag: "attribute",
            details: "Indicates the maximum value to which the CookTime attribute can be set.",
            xref: "cluster§8.13.5.2"
        },

        {
            name: "PowerSetting", tag: "attribute",

            details: "Indicates the power level associated with the operation of the device. If the MinPower, MaxPower, " +
                "and PowerStep attributes are not supported:" +
                "\n" +
                "  • The minimum value of this attribute shall be 10," +
                "\n" +
                "  • The maximum value of this attribute shall be 100," +
                "\n" +
                "  • The value shall be in even multiples of 10," +
                "\n" +
                "  • The default value shall be 100." +
                "\n" +
                "If the MinPower, MaxPower, and PowerStep attributes are supported:" +
                "\n" +
                "  • The value of this attribute shall be between MinPower and MaxPower inclusive." +
                "\n" +
                "  • The value of this attribute shall be such that (PowerSetting - MinPower) % PowerStep == 0",

            xref: "cluster§8.13.5.3"
        },

        {
            name: "MinPower", tag: "attribute",
            details: "Indicates the minimum value to which the PowerSetting attribute that can be set on the server.",
            xref: "cluster§8.13.5.4"
        },
        {
            name: "MaxPower", tag: "attribute",
            details: "Indicates the maximum value to which the PowerSetting attribute that can be set on the server.",
            xref: "cluster§8.13.5.5"
        },

        {
            name: "PowerStep", tag: "attribute",

            details: "Indicates the increment of power that can be set on the server. The value of this attribute shall be " +
                "between 1 and MaxPower inclusive." +
                "\n" +
                "The value of this attribute shall be such that (MaxPower - MinPower) % PowerStep == 0" +
                "\n" +
                "For example, if MinPower is 1, MaxPower is 10, and PowerSetting can be set to any integer between " +
                "MinPower and MaxPower, PowerStep would be set to 1.",

            xref: "cluster§8.13.5.6"
        },

        {
            name: "SupportedWatts", tag: "attribute",
            details: "Indicates the list of power levels (in W) supported by the server.",
            xref: "cluster§8.13.5.7"
        },

        {
            name: "SelectedWattIndex", tag: "attribute",
            details: "Indicates the index into the list of SupportedWatts of the currently selected power setting." +
                "\n" +
                "The index shall be a valid index into the SupportedWatts list.",
            xref: "cluster§8.13.5.8"
        },

        {
            name: "WattRating", tag: "attribute",
            details: "Indicates the rating, in Watts, of the microwave power of the oven." +
                "\n" +
                "Supporting this attribute can assist clients in suggesting cooking settings for various foods and " +
                "beverages.",
            xref: "cluster§8.13.5.9"
        },

        {
            name: "SetCookingParameters", tag: "command",
            details: "This command is used to set the cooking parameters associated with the operation of the device. This " +
                "command supports the following fields:",
            xref: "cluster§8.13.6.2",

            children: [
                {
                    name: "CookMode", tag: "field",

                    details: "This field shall indicate the value to which the CurrentMode attribute of the Microwave Oven Mode " +
                        "cluster should be set. The value of this field shall be one from the list of SupportedModes from the " +
                        "Microwave Oven Mode cluster." +
                        "\n" +
                        "If this field is missing, the CurrentMode attribute shall be set to a mode having the Normal mode " +
                        "tag.",

                    xref: "cluster§8.13.6.2.1"
                },

                {
                    name: "CookTime", tag: "field",
                    details: "This field shall indicate the CookTime associated with the operation of the device. The value of " +
                        "this field shall be subject to the constraints of the CookTime attribute of this cluster." +
                        "\n" +
                        "If this field is missing, the CookTime attribute shall be set to 30 seconds by the server.",
                    xref: "cluster§8.13.6.2.2"
                },

                {
                    name: "PowerSetting", tag: "field",

                    details: "This field shall indicate the PowerSetting associated with the operation of the device. The value of " +
                        "this field shall be subject to the constraints of the PowerSetting attribute of this cluster. If the " +
                        "PowerSetting field does not conform to the constraints of the PowerSetting attribute, the server " +
                        "shall return a CONSTRAINT_ERROR status." +
                        "\n" +
                        "If this field is missing, the PowerSetting attribute shall be set to 100 if MaxPower is not " +
                        "supported by the server, otherwise it shall be set to MaxPower if the MaxPower attribute is " +
                        "supported by the server.",

                    xref: "cluster§8.13.6.2.3"
                },

                {
                    name: "WattSettingIndex", tag: "field",

                    details: "This field shall indicate the value to which the SelectedWattIndex attribute is set. If the value of " +
                        "this field is greater than or equal to the length of the SupportedWatts attribute list, the server " +
                        "shall return a CONSTRAINT_ERROR status and the value of the SelectedWattIndex attribute shall be " +
                        "unchanged." +
                        "\n" +
                        "If this field is missing, the SelectedWattIndex attribute shall be set by the server to the index " +
                        "associated with the highest Watt setting for the selected CookMode.",

                    xref: "cluster§8.13.6.2.4"
                },

                {
                    name: "StartAfterSetting", tag: "field",
                    details: "This field shall indicate whether or not oven operation shall be started when the command is " +
                        "received.",
                    xref: "cluster§8.13.6.2.5"
                }
            ]
        },

        {
            name: "AddMoreTime", tag: "command",
            details: "This command is used to add more time to the CookTime attribute of the server. This command supports " +
                "these fields:",
            xref: "cluster§8.13.6.3",
            children: [{
                name: "TimeToAdd", tag: "field",
                details: "This field shall indicate the number of seconds to be added to the CookTime attribute.",
                xref: "cluster§8.13.6.3.1"
            }]
        }
    ]
});
