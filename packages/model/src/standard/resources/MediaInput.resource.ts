/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MediaInput } from "#index.js";

MediaInput.patch({
    classification: "application", pics: "MEDIAINPUT",

    details: "This cluster provides an interface for controlling the Input Selector on a media device such as a " +
        "Video Player." +
        "\n" +
        "This cluster would be implemented on TV and other media streaming devices, as well as devices that " +
        "provide input to or output from such devices." +
        "\n" +
        "This cluster provides the list of available inputs and provides commands for selecting and renaming " +
        "them." +
        "\n" +
        "The cluster server for Media Input is implemented by a device that has selectable input, such as a " +
        "Video Player device.",

    xref: { document: "cluster", section: "6.9" },

    children: [
        undefined,
        {
            xref: { document: "cluster", section: "6.9.4" },
            children: [{ description: "NameUpdates", details: "Supports updates to the input names" }]
        },
        {
            details: "This attribute shall provide a list of the media inputs supported by the device.",
            xref: { document: "cluster", section: "6.9.6.1" }
        },
        {
            details: "This attribute shall contain the value of the index field of the currently selected InputInfoStruct.",
            xref: { document: "cluster", section: "6.9.6.2" }
        },

        {
            details: "Upon receipt, this command shall change the media input on the device to the input at a specific" +
                "\n" +
                "index in the Input List.",
            xref: { document: "cluster", section: "6.9.7.1" },
            children: [{
                details: "This field shall indicate the index field of the InputInfoStruct from the InputList attribute in " +
                    "which to change to.",
                xref: { document: "cluster", section: "6.9.7.1.1" }
            }]
        },

        {
            details: "Upon receipt, this command shall display the active status of the input list on screen.",
            xref: { document: "cluster", section: "6.9.7.2" }
        },
        {
            details: "Upon receipt, this command shall hide the input list from the screen.",
            xref: { document: "cluster", section: "6.9.7.3" }
        },
        {
            details: "Upon receipt, this command shall rename the input at a specific index in the Input List. Updates to " +
                "the input name shall appear in the device’s settings menus.",
            xref: { document: "cluster", section: "6.9.7.4" }
        },
        {
            xref: { document: "cluster", section: "6.9.5.1" },
            children: [{ description: "Indicates content not coming from a physical input." }]
        },

        {
            details: "This contains information about an input.",
            xref: { document: "cluster", section: "6.9.5.2" },

            children: [
                {
                    details: "This field shall indicate the unique index into the list of Inputs.",
                    xref: { document: "cluster", section: "6.9.5.2.1" }
                },
                {
                    details: "This field shall indicate the type of input",
                    xref: { document: "cluster", section: "6.9.5.2.2" }
                },
                {
                    details: "This field shall indicate the input name, such as “HDMI 1”. This field may be blank, but SHOULD be " +
                        "provided when known.",
                    xref: { document: "cluster", section: "6.9.5.2.3" }
                },
                {
                    details: "This field shall indicate the user editable input description, such as “Living room Playstation”. " +
                        "This field may be blank, but SHOULD be provided when known.",
                    xref: { document: "cluster", section: "6.9.5.2.4" }
                }
            ]
        }
    ]
});
