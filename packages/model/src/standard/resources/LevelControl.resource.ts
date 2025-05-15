/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "LevelControl", tag: "cluster",
    classification: "application", pics: "LVL",
    details: "This cluster provides an interface for controlling a characteristic of a device that can be set to a " +
        "level, for example the brightness of a light, the degree of closure of a door, or the power output " +
        "of a heater.",
    xref: "cluster§1.6",

    children: [
        {
            name: "FeatureMap", tag: "attribute",
            xref: "cluster§1.6.4",

            children: [
                { name: "OO", tag: "field", details: "Dependency with the On/Off cluster" },

                {
                    name: "LT", tag: "field",

                    details: "This feature supports an interface for controlling the level of a light source. For the CurrentLevel " +
                        "attribute:" +
                        "\n" +
                        "A value of 0x00 shall NOT be used." +
                        "\n" +
                        "A value of 0x01 shall indicate the minimum level that can be attained on a device. A value of 0xFE " +
                        "shall indicate the maximum level that can be attained on a device. A value of null shall represent " +
                        "an undefined value." +
                        "\n" +
                        "All other values are application specific gradations from the minimum to the maximum level.",

                    xref: "cluster§1.6.4.2"
                },

                {
                    name: "FQ", tag: "field",
                    details: "NOTE The Frequency feature is provisional.",
                    xref: "cluster§1.6.4.3"
                }
            ]
        },

        {
            name: "CurrentLevel", tag: "attribute",

            details: "Indicates the current level of this device. The meaning of 'level' is device dependent." +
                "\n" +
                "Changes to this attribute shall only be marked as reportable in the following cases:" +
                "\n" +
                "  • At most once per second, or" +
                "\n" +
                "  • At the end of the movement/transition, or" +
                "\n" +
                "  • When it changes from null to any other value and vice versa.",

            xref: "cluster§1.6.6.2"
        },

        {
            name: "RemainingTime", tag: "attribute",

            details: "Indicates the time remaining until the current command is complete - it is specified in 1/10ths of a " +
                "second." +
                "\n" +
                "Changes to this attribute shall only be marked as reportable in the following cases:" +
                "\n" +
                "  • When it changes from 0 to any value higher than 10, or" +
                "\n" +
                "  • When it changes, with a delta larger than 10, caused by the invoke of a command, or" +
                "\n" +
                "  • When it changes to 0." +
                "\n" +
                "For commands with a transition time or changes to the transition time less than 1 second, changes to " +
                "this attribute shall NOT be reported." +
                "\n" +
                "As this attribute is not being reported during a regular countdown, clients SHOULD NOT rely on the " +
                "reporting of this attribute in order to keep track of the remaining duration.",

            xref: "cluster§1.6.6.3"
        },

        {
            discriminator: "[LT]", name: "MinLevel", tag: "attribute",
            details: "Indicates the minimum value of CurrentLevel that is capable of being assigned.",
            xref: "cluster§1.6.6.4"
        },
        {
            discriminator: "[!LT]", name: "MinLevel", tag: "attribute",
            details: "Indicates the minimum value of CurrentLevel that is capable of being assigned.",
            xref: "cluster§1.6.6.4"
        },
        {
            name: "MaxLevel", tag: "attribute",
            details: "Indicates the maximum value of CurrentLevel that is capable of being assigned.",
            xref: "cluster§1.6.6.5"
        },

        {
            name: "CurrentFrequency", tag: "attribute",

            details: "Indicates the frequency at which the device is at CurrentLevel. A CurrentFrequency of 0 is unknown." +
                "\n" +
                "Changes to this attribute shall only be marked as reportable in the following cases:" +
                "\n" +
                "  • At most once per second, or" +
                "\n" +
                "  • At the start of the movement/transition, or" +
                "\n" +
                "  • At the end of the movement/transition.",

            xref: "cluster§1.6.6.6"
        },

        {
            name: "MinFrequency", tag: "attribute",
            details: "Indicates the minimum value of CurrentFrequency that is capable of being assigned. MinFrequency " +
                "shall be less than or equal to MaxFrequency. A value of 0 indicates undefined.",
            xref: "cluster§1.6.6.7"
        },

        {
            name: "MaxFrequency", tag: "attribute",
            details: "Indicates the maximum value of CurrentFrequency that is capable of being assigned. MaxFrequency " +
                "shall be greater than or equal to MinFrequency. A value of 0 indicates undefined.",
            xref: "cluster§1.6.6.8"
        },

        {
            name: "OnOffTransitionTime", tag: "attribute",

            details: "Indicates the time taken to move to or from the target level when On or Off commands are received by " +
                "an On/Off cluster on the same endpoint. It is specified in 1/10ths of a second." +
                "\n" +
                "The actual time taken SHOULD be as close to OnOffTransitionTime as the device is able. Please note " +
                "that if the device is not able to move at a variable rate, the OnOffTransitionTime attribute SHOULD " +
                "NOT be implemented.",

            xref: "cluster§1.6.6.10"
        },

        {
            name: "OnLevel", tag: "attribute",

            details: "Indicates the value that the CurrentLevel attribute is set to when the OnOff attribute of an On/Off " +
                "cluster on the same endpoint is set to TRUE, as a result of processing an On/Off cluster command. If " +
                "the OnLevel attribute is not implemented, or is set to the null value, it has no effect. For more " +
                "details see Effect of On/Off Commands on the CurrentLevel attribute." +
                "\n" +
                "OnLevel represents a mandatory field that was previously not present or optional. Implementers " +
                "should be aware that older devices may not implement it.",

            xref: "cluster§1.6.6.11"
        },

        {
            name: "OnTransitionTime", tag: "attribute",
            details: "Indicates the time taken to move the current level from the minimum level to the maximum level when " +
                "an On command is received by an On/Off cluster on the same endpoint. It is specified in 1/10ths of a " +
                "second. If this attribute is not implemented, or contains a null value, the OnOffTransitionTime " +
                "shall be used instead.",
            xref: "cluster§1.6.6.12"
        },

        {
            name: "OffTransitionTime", tag: "attribute",
            details: "Indicates the time taken to move the current level from the maximum level to the minimum level when " +
                "an Off command is received by an On/Off cluster on the same endpoint. It is specified in 1/10ths of " +
                "a second. If this attribute is not implemented, or contains a null value, the OnOffTransitionTime " +
                "shall be used instead.",
            xref: "cluster§1.6.6.13"
        },

        {
            name: "DefaultMoveRate", tag: "attribute",
            details: "Indicates the movement rate, in units per second, when a Move command is received with a null value " +
                "Rate parameter.",
            xref: "cluster§1.6.6.14"
        },

        {
            name: "Options", tag: "attribute",

            details: "Indicates the selected options of the device." +
                "\n" +
                "The Options attribute is a bitmap that determines the default behavior of some cluster commands. " +
                "Each command that is dependent on the Options attribute shall first construct a temporary Options " +
                "bitmap that is in effect during the command processing. The temporary Options bitmap has the same " +
                "format and meaning as the Options attribute, but includes any bits that may be overridden by command " +
                "fields." +
                "\n" +
                "This attribute is meant to be changed only during commissioning." +
                "\n" +
                "Command execution shall NOT continue beyond the Options processing if all of these criteria are " +
                "true:" +
                "\n" +
                "  • The command is one of the ‘without On/Off’ commands: Move, Move to Level, Step, or Stop." +
                "\n" +
                "  • The On/Off cluster exists on the same endpoint as this cluster." +
                "\n" +
                "  • The OnOff attribute of the On/Off cluster, on this endpoint, is FALSE." +
                "\n" +
                "  • The value of the ExecuteIfOff bit is 0.",

            xref: "cluster§1.6.6.9"
        },

        {
            name: "StartUpCurrentLevel", tag: "attribute",

            details: "Indicates the desired startup level for a device when it is supplied with power and this level shall " +
                "be reflected in the CurrentLevel attribute. The values of the StartUpCurrentLevel attribute are " +
                "listed below:" +
                "\n" +
                "This behavior does not apply to reboots associated with OTA. After an OTA restart, the CurrentLevel " +
                "attribute shall return to its value prior to the restart.",

            xref: "cluster§1.6.6.15"
        },

        { name: "MoveToLevel", tag: "command", xref: "cluster§1.6.7.1" },

        {
            name: "Move", tag: "command",
            xref: "cluster§1.6.7.2",

            children: [
                {
                    name: "MoveMode", tag: "field",
                    details: "This field shall be one of the non-reserved values in MoveModeEnum.",
                    xref: "cluster§1.6.7.2.1"
                },

                {
                    name: "Rate", tag: "field",

                    details: "This field shall indicate the rate of movement in units per second. The actual rate of movement " +
                        "SHOULD be as close to this rate as the device is able. If the Rate field is null, then the value of " +
                        "the DefaultMoveRate attribute shall be used if that attribute is supported and its value is not " +
                        "null. If the Rate field is null and the DefaultMoveRate attribute is either not supported or set to " +
                        "null, then the device SHOULD move as fast as it is able. If the device is not able to move at a " +
                        "variable rate, this" +
                        "\n" +
                        "field may be disregarded.",

                    xref: "cluster§1.6.7.2.2"
                }
            ]
        },

        {
            name: "Step", tag: "command",
            xref: "cluster§1.6.7.3",

            children: [
                {
                    name: "StepMode", tag: "field",
                    details: "This field shall be one of the non-reserved values in StepModeEnum.",
                    xref: "cluster§1.6.7.3.1"
                },
                {
                    name: "StepSize", tag: "field",
                    details: "This field shall indicate the change to CurrentLevel.",
                    xref: "cluster§1.6.7.3.2"
                },

                {
                    name: "TransitionTime", tag: "field",

                    details: "This field shall indicate the time that shall be taken to perform the step, in tenths of a second. A " +
                        "step is a change in the CurrentLevel of StepSize units. The actual time taken SHOULD be as close to" +
                        "\n" +
                        "this as the device is able. If the TransitionTime field is equal to null, the device SHOULD move as " +
                        "fast as it is able." +
                        "\n" +
                        "If the device is not able to move at a variable rate, the TransitionTime field may be disregarded.",

                    xref: "cluster§1.6.7.3.3"
                }
            ]
        },

        { name: "Stop", tag: "command", xref: "cluster§1.6.7.4" },
        { name: "MoveToLevelWithOnOff", tag: "command", xref: "cluster§1.6.7" },
        { name: "MoveWithOnOff", tag: "command", xref: "cluster§1.6.7" },
        { name: "StepWithOnOff", tag: "command", xref: "cluster§1.6.7" },
        { name: "StopWithOnOff", tag: "command", xref: "cluster§1.6.7" },
        { name: "MoveToClosestFrequency", tag: "command", xref: "cluster§1.6.7.5" },

        {
            name: "OptionsBitmap", tag: "datatype",
            xref: "cluster§1.6.5.1",

            children: [
                {
                    name: "ExecuteIfOff", tag: "field",
                    description: "Dependency on On/Off cluster",
                    details: "This bit indicates if this cluster has a dependency with the On/Off cluster.",
                    xref: "cluster§1.6.5.1.1"
                },

                {
                    name: "CoupleColorTempToLevel", tag: "field",
                    description: "Dependency on Color Control cluster",
                    details: "This bit indicates if this cluster has a dependency with the Color Control cluster.",
                    xref: "cluster§1.6.5.1.2"
                }
            ]
        },

        {
            name: "MoveModeEnum", tag: "datatype",
            xref: "cluster§1.6.5.2",
            children: [
                { name: "Up", tag: "field", description: "Increase the level" },
                { name: "Down", tag: "field", description: "Decrease the level" }
            ]
        },

        {
            name: "StepModeEnum", tag: "datatype",
            xref: "cluster§1.6.5.3",
            children: [
                { name: "Up", tag: "field", description: "Step upwards" },
                { name: "Down", tag: "field", description: "Step downwards" }
            ]
        }
    ]
});
