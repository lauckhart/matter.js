/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "FanControl", tag: "cluster",
    classification: "application", pics: "FAN",
    details: "This cluster specifies an interface to control the speed of a fan.",
    xref: "cluster§4.4",

    children: [
        {
            name: "FeatureMap", tag: "attribute",
            xref: "cluster§4.4.4",

            children: [
                {
                    name: "SPD", tag: "field",

                    details: "Legacy Fan Control cluster revision 0-1 defined 3 speeds (low, medium and high) plus automatic speed " +
                        "control but left it up to the implementer to decide what was supported. Therefore, it is assumed " +
                        "that legacy client implementations are capable of determining, from the server, the number of speeds " +
                        "supported between 1, 2, or 3, and whether automatic speed control is supported." +
                        "\n" +
                        "The MultiSpeed feature includes new attributes that support a running fan speed value from 0 to " +
                        "SpeedMax, which has a maximum of 100." +
                        "\n" +
                        "See Section 4.4.6.6.1 for more details.",

                    xref: "cluster§4.4.4.1"
                },

                { name: "AUT", tag: "field", details: "Automatic mode supported for fan speed" },
                { name: "RCK", tag: "field", details: "Rocking movement supported" },
                { name: "WND", tag: "field", details: "Wind emulation supported" },
                { name: "STEP", tag: "field", details: "Step command supported" },
                { name: "DIR", tag: "field", details: "Airflow Direction attribute is supported" }
            ]
        },

        {
            name: "FanMode", tag: "attribute",

            details: "Indicates the current speed mode of the fan. This attribute may be written by the client to request " +
                "a different fan mode. A server shall return INVALID_IN_STATE to indicate that the fan is not in a " +
                "state where the FanMode can be changed to the requested value. A server may have FanMode values that " +
                "it can never be set to. For example, where this cluster appears on the same or another endpoint as " +
                "other clusters with a system dependency, for example the Thermostat cluster, attempting to set the " +
                "FanMode attribute of this cluster to Off may not be allowed by the system." +
                "\n" +
                "This attribute shall be set to one of the values in FanModeEnum." +
                "\n" +
                "When the FanMode attribute is successfully written to, the PercentSetting and SpeedSetting (if " +
                "present) attributes shall be set to appropriate values, as defined by the Section 4.4.6.3.1 and " +
                "Section 4.4.6.6.1 respectively, unless otherwise specified below." +
                "\n" +
                "When the FanMode attribute is set to any given mode, the PercentCurrent and SpeedCurrent (if " +
                "present) shall indicate the actual currently operating fan speed, unless otherwise specified below.",

            xref: "cluster§4.4.6.1"
        },

        {
            name: "FanModeSequence", tag: "attribute",
            details: "This attribute indicates the fan speed ranges that shall be supported.",
            xref: "cluster§4.4.6.2"
        },

        {
            name: "PercentSetting", tag: "attribute",

            details: "Indicates the speed setting for the fan. This attribute may be written by the client to indicate a " +
                "new fan speed. If the client writes null to this attribute, the attribute value shall NOT change. A " +
                "server shall return INVALID_IN_STATE to indicate that the fan is not in a state where the " +
                "PercentSetting can be changed to the requested value." +
                "\n" +
                "If this is successfully written to 0, the server shall set the FanMode attribute value to Off.",

            xref: "cluster§4.4.6.3"
        },

        {
            name: "PercentCurrent", tag: "attribute",
            details: "Indicates the actual currently operating fan speed, or zero to indicate that the fan is off. There " +
                "may be a temporary mismatch between the value of this attribute and the value of the PercentSetting " +
                "attribute due to other system requirements that would not allow the fan to operate at the requested " +
                "setting. See Section 4.4.6.3.1 for more details.",
            xref: "cluster§4.4.6.4"
        },

        {
            name: "SpeedMax", tag: "attribute",
            details: "Indicates that the fan has one speed (value of 1) or the maximum speed, if the fan is capable of " +
                "multiple speeds.",
            xref: "cluster§4.4.6.5"
        },

        {
            name: "SpeedSetting", tag: "attribute",

            details: "Indicates the speed setting for the fan. This attribute may be written by the client to indicate a " +
                "new fan speed. If the client writes null to this attribute, the attribute value shall NOT change. A " +
                "server shall return INVALID_IN_STATE to indicate that the fan is not in a state where the " +
                "SpeedSetting can be changed to the requested value." +
                "\n" +
                "If this is successfully written to 0, the server shall set the FanMode attribute value to Off. " +
                "Please see the Section 4.4.6.6.1 for details on other values.",

            xref: "cluster§4.4.6.6"
        },

        {
            name: "SpeedCurrent", tag: "attribute",
            details: "Indicates the actual currently operating fan speed, or zero to indicate that the fan is off. There " +
                "may be a temporary mismatch between the value of this attribute and the value of the SpeedSetting " +
                "attribute due to other system requirements that would not allow the fan to operate at the requested " +
                "setting.",
            xref: "cluster§4.4.6.7"
        },

        {
            name: "RockSupport", tag: "attribute",
            details: "This attribute is a bitmap that indicates what rocking motions the server supports.",
            xref: "cluster§4.4.6.8"
        },

        {
            name: "RockSetting", tag: "attribute",

            details: "This attribute is a bitmap that indicates the current active fan rocking motion settings. Each bit " +
                "shall only be set to 1, if the corresponding bit in the RockSupport attribute is set to 1, otherwise " +
                "a status code of CONSTRAINT_ERROR shall be returned." +
                "\n" +
                "If a combination of supported bits is set by the client, and the server does not support the " +
                "combination, the lowest supported single bit in the combination shall be set and active, and all " +
                "other bits shall indicate zero." +
                "\n" +
                "For example: If RockUpDown and RockRound are both set, but this combination is not possible, then " +
                "only RockUpDown becomes active.",

            xref: "cluster§4.4.6.9"
        },

        {
            name: "WindSupport", tag: "attribute",
            details: "This attribute is a bitmap that indicates what wind modes the server supports. At least one wind " +
                "mode bit shall be set.",
            xref: "cluster§4.4.6.10"
        },

        {
            name: "WindSetting", tag: "attribute",

            details: "This attribute is a bitmap that indicates the current active fan wind feature settings. Each bit " +
                "shall only be set to 1, if the corresponding bit in the WindSupport attribute is set to 1, otherwise " +
                "a status code of CONSTRAINT_ERROR shall be returned." +
                "\n" +
                "If a combination of supported bits is set by the client, and the server does not support the " +
                "combination, the lowest supported single bit in the combination shall be set and active, and all " +
                "other bits shall indicate zero." +
                "\n" +
                "For example: If Sleep Wind and Natural Wind are set, but this combination is not possible, then only " +
                "Sleep Wind becomes active.",

            xref: "cluster§4.4.6.11"
        },

        {
            name: "AirflowDirection", tag: "attribute",
            details: "Indicates the current airflow direction of the fan. This attribute may be written by the client to " +
                "indicate a new airflow direction for the fan. This attribute shall be set to one of the values in " +
                "the AirflowDirectionEnum table.",
            xref: "cluster§4.4.6.12"
        },

        {
            name: "Step", tag: "command",

            details: "This command speeds up or slows down the fan, in steps, without the client having to know the fan " +
                "speed. This command supports, for example, a user operated wall switch, where the user provides the " +
                "feedback or control to stop sending this command when the proper speed is reached. The step speed " +
                "values are implementation specific. How many step speeds are implemented is implementation specific." +
                "\n" +
                "This command supports these fields:",

            xref: "cluster§4.4.7.1",

            children: [
                {
                    name: "Direction", tag: "field",
                    details: "This field shall indicate whether the fan speed increases or decreases to the next step value.",
                    xref: "cluster§4.4.7.1.1"
                },
                {
                    name: "Wrap", tag: "field",
                    details: "This field shall indicate if the fan speed wraps between highest and lowest step value.",
                    xref: "cluster§4.4.7.1.2"
                },
                {
                    name: "LowestOff", tag: "field",
                    details: "This field shall indicate that the fan being off (speed value 0) is included as a step value.",
                    xref: "cluster§4.4.7.1.3"
                }
            ]
        },

        {
            name: "RockBitmap", tag: "datatype",
            xref: "cluster§4.4.5.1",
            children: [
                { name: "RockLeftRight", tag: "field", description: "Indicate rock left to right" },
                { name: "RockUpDown", tag: "field", description: "Indicate rock up and down" },
                { name: "RockRound", tag: "field", description: "Indicate rock around" }
            ]
        },

        {
            name: "WindBitmap", tag: "datatype",
            xref: "cluster§4.4.5.2",
            children: [
                { name: "SleepWind", tag: "field", description: "Indicate sleep wind" },
                { name: "NaturalWind", tag: "field", description: "Indicate natural wind" }
            ]
        },

        {
            name: "StepDirectionEnum", tag: "datatype",
            xref: "cluster§4.4.5.3",
            children: [
                { name: "Increase", tag: "field", description: "Step moves in increasing direction" },
                { name: "Decrease", tag: "field", description: "Step moves in decreasing direction" }
            ]
        },

        {
            name: "AirflowDirectionEnum", tag: "datatype",
            xref: "cluster§4.4.5.4",
            children: [
                { name: "Forward", tag: "field", description: "Airflow is in the forward direction" },
                { name: "Reverse", tag: "field", description: "Airflow is in the reverse direction" }
            ]
        },

        {
            name: "FanModeEnum", tag: "datatype",
            xref: "cluster§4.4.5.5",

            children: [
                { name: "Off", tag: "field", description: "Fan is off" },

                {
                    name: "Low", tag: "field",
                    description: "Fan using low speed",
                    details: "If the fan supports 2 or more speeds, the Low value shall be supported." +
                        "\n" +
                        "The Low value shall be supported if and only if the FanModeSequence attribute value is less than 4.",
                    xref: "cluster§4.4.5.5.1"
                },

                {
                    name: "Medium", tag: "field",
                    description: "Fan using medium speed",
                    details: "If the fan supports 3 or more speeds, the Medium value shall be supported." +
                        "\n" +
                        "The Medium value shall be supported if and only if the FanModeSequence attribute value is 0 or 2.",
                    xref: "cluster§4.4.5.5.2"
                },

                { name: "High", tag: "field", description: "Fan using high speed" },
                { name: "Auto", tag: "field", description: "Fan is using auto mode" },
                { name: "Smart", tag: "field", description: "Fan is using smart mode" }
            ]
        },

        {
            name: "FanModeSequenceEnum", tag: "datatype",
            xref: "cluster§4.4.5.6",

            children: [
                {
                    name: "OffLowMedHigh", tag: "field",
                    description: "Fan is capable of off, low, medium and high modes"
                },
                { name: "OffLowHigh", tag: "field", description: "Fan is capable of off, low and high modes" },
                {
                    name: "OffLowMedHighAuto", tag: "field",
                    description: "Fan is capable of off, low, medium, high and auto modes"
                },
                {
                    name: "OffLowHighAuto", tag: "field",
                    description: "Fan is capable of off, low, high and auto modes"
                },
                { name: "OffHighAuto", tag: "field", description: "Fan is capable of off, high and auto modes" },
                { name: "OffHigh", tag: "field", description: "Fan is capable of off and high modes" }
            ]
        }
    ]
});
