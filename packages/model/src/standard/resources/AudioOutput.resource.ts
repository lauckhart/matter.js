/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    tag: "cluster", name: "AudioOutput",
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

    xref: "cluster§6.5",

    children: [
        {
            tag: "attribute", name: "FeatureMap",
            xref: "cluster§6.5.4",
            children: [{ tag: "field", name: "NU", details: "Supports updates to output names" }]
        },
        {
            tag: "attribute", name: "OutputList",
            details: "This attribute provides the list of outputs supported by the device.",
            xref: "cluster§6.5.6.1"
        },
        {
            tag: "attribute", name: "CurrentOutput",
            details: "This attribute contains the value of the index field of the currently selected OutputInfoStruct.",
            xref: "cluster§6.5.6.2"
        },

        {
            tag: "command", name: "SelectOutput",

            details: "Upon receipt, this shall change the output on the device to the output at a specific index in the " +
                "Output List." +
                "\n" +
                "Note that when the current output is set to an output of type HDMI, adjustments to volume via a " +
                "Speaker endpoint on the same node may cause HDMI volume up/down commands to be sent to the given " +
                "HDMI output.",

            xref: "cluster§6.5.7.1",

            children: [{
                tag: "field", name: "Index",
                details: "This shall indicate the index field of the OutputInfoStruct from the OutputList attribute in which " +
                    "to change to.",
                xref: "cluster§6.5.7.1.1"
            }]
        },

        {
            tag: "command", name: "RenameOutput",
            details: "Upon receipt, this shall rename the output at a specific index in the Output List." +
                "\n" +
                "Updates to the output name shall appear in the device’s settings menus. Name updates may " +
                "automatically be sent to the actual device to which the output connects.",
            xref: "cluster§6.5.7.2"
        },

        {
            tag: "datatype", name: "OutputTypeEnum",
            details: "The type of output, expressed as an enum, with the following values:",
            xref: "cluster§6.5.5.1",
            children: [{ tag: "field", name: "Hdmi", description: "HDMI" }]
        },

        {
            tag: "datatype", name: "OutputInfoStruct",
            details: "This contains information about an output.",
            xref: "cluster§6.5.5.2",

            children: [
                {
                    tag: "field", name: "Index",
                    details: "This field shall indicate the unique index into the list of outputs.",
                    xref: "cluster§6.5.5.2.1"
                },
                {
                    tag: "field", name: "OutputType",
                    details: "This field shall indicate the type of output.",
                    xref: "cluster§6.5.5.2.2"
                },

                {
                    tag: "field", name: "Name",
                    details: "The device defined and user editable output name, such as “Soundbar”, “Speakers”. This field may be " +
                        "blank, but SHOULD be provided when known.",
                    xref: "cluster§6.5.5.2.3"
                }
            ]
        }
    ]
});
