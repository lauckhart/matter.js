/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    tag: "cluster", name: "MediaInput",
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

    xref: "cluster§6.9",

    children: [
        {
            tag: "attribute", name: "FeatureMap",
            xref: "cluster§6.9.4",
            children: [{ tag: "field", name: "NU", details: "Supports updates to the input names" }]
        },
        {
            tag: "attribute", name: "InputList",
            details: "This attribute shall provide a list of the media inputs supported by the device.",
            xref: "cluster§6.9.6.1"
        },
        {
            tag: "attribute", name: "CurrentInput",
            details: "This attribute shall contain the value of the index field of the currently selected InputInfoStruct.",
            xref: "cluster§6.9.6.2"
        },

        {
            tag: "command", name: "SelectInput",
            details: "Upon receipt, this command shall change the media input on the device to the input at a specific" +
                "\n" +
                "index in the Input List.",
            xref: "cluster§6.9.7.1",

            children: [{
                tag: "field", name: "Index",
                details: "This field shall indicate the index field of the InputInfoStruct from the InputList attribute in " +
                    "which to change to.",
                xref: "cluster§6.9.7.1.1"
            }]
        },

        {
            tag: "command", name: "ShowInputStatus",
            details: "Upon receipt, this command shall display the active status of the input list on screen.",
            xref: "cluster§6.9.7.2"
        },
        {
            tag: "command", name: "HideInputStatus",
            details: "Upon receipt, this command shall hide the input list from the screen.",
            xref: "cluster§6.9.7.3"
        },

        {
            tag: "command", name: "RenameInput",
            details: "Upon receipt, this command shall rename the input at a specific index in the Input List. Updates to " +
                "the input name shall appear in the device’s settings menus.",
            xref: "cluster§6.9.7.4"
        },

        {
            tag: "datatype", name: "InputTypeEnum",
            xref: "cluster§6.9.5.1",
            children: [
                { tag: "field", name: "Internal", description: "Indicates content not coming from a physical input." }
            ]
        },

        {
            tag: "datatype", name: "InputInfoStruct",
            details: "This contains information about an input.",
            xref: "cluster§6.9.5.2",

            children: [
                {
                    tag: "field", name: "Index",
                    details: "This field shall indicate the unique index into the list of Inputs.",
                    xref: "cluster§6.9.5.2.1"
                },
                {
                    tag: "field", name: "InputType",
                    details: "This field shall indicate the type of input",
                    xref: "cluster§6.9.5.2.2"
                },

                {
                    tag: "field", name: "Name",
                    details: "This field shall indicate the input name, such as “HDMI 1”. This field may be blank, but SHOULD be " +
                        "provided when known.",
                    xref: "cluster§6.9.5.2.3"
                },

                {
                    tag: "field", name: "Description",
                    details: "This field shall indicate the user editable input description, such as “Living room Playstation”. " +
                        "This field may be blank, but SHOULD be provided when known.",
                    xref: "cluster§6.9.5.2.4"
                }
            ]
        }
    ]
});
