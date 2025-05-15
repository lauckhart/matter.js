/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { AudioOutput } from "#index.js";

AudioOutput.patch({
    classification: "application", pics: "AUDIOOUTPUT",

    details: "This cluster provides an interface for controlling the Output on a Video Player device such as a TV." +
        "\n" +
        "This cluster would be supported on a device with audio outputs like a Video Player device (Smart TV, " +
        "TV Setup Top Box, Smart Speaker, etc)." +
        "\n" +
        "This cluster provides the list of available outputs and provides commands for selecting and renaming " +
        "them." +
        "\n" +
        "The cluster server for Audio Output is implemented by a device that has configurable audio output.",

    xref: { document: "cluster", section: "6.5" },

    children: [
        undefined,
        {
            xref: { document: "cluster", section: "6.5.4" },
            children: [{ description: "NameUpdates", details: "Supports updates to output names" }]
        },
        {
            details: "This attribute provides the list of outputs supported by the device.",
            xref: { document: "cluster", section: "6.5.6.1" }
        },
        {
            details: "This attribute contains the value of the index field of the currently selected OutputInfoStruct.",
            xref: { document: "cluster", section: "6.5.6.2" }
        },

        {
            details: "Upon receipt, this shall change the output on the device to the output at a specific index in the " +
                "Output List." +
                "\n" +
                "Note that when the current output is set to an output of type HDMI, adjustments to volume via a " +
                "Speaker endpoint on the same node may cause HDMI volume up/down commands to be sent to the given " +
                "HDMI output.",

            xref: { document: "cluster", section: "6.5.7.1" },
            children: [{
                details: "This shall indicate the index field of the OutputInfoStruct from the OutputList attribute in which " +
                    "to change to.",
                xref: { document: "cluster", section: "6.5.7.1.1" }
            }]
        },

        {
            details: "Upon receipt, this shall rename the output at a specific index in the Output List." +
                "\n" +
                "Updates to the output name shall appear in the device’s settings menus. Name updates may " +
                "automatically be sent to the actual device to which the output connects.",
            xref: { document: "cluster", section: "6.5.7.2" }
        },

        {
            details: "The type of output, expressed as an enum, with the following values:",
            xref: { document: "cluster", section: "6.5.5.1" },
            children: [{ description: "HDMI" }]
        },

        {
            details: "This contains information about an output.",
            xref: { document: "cluster", section: "6.5.5.2" },

            children: [
                {
                    details: "This field shall indicate the unique index into the list of outputs.",
                    xref: { document: "cluster", section: "6.5.5.2.1" }
                },
                {
                    details: "This field shall indicate the type of output.",
                    xref: { document: "cluster", section: "6.5.5.2.2" }
                },
                {
                    details: "The device defined and user editable output name, such as “Soundbar”, “Speakers”. This field may be " +
                        "blank, but SHOULD be provided when known.",
                    xref: { document: "cluster", section: "6.5.5.2.3" }
                }
            ]
        }
    ]
});
