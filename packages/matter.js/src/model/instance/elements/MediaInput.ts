/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0507, name: "MediaInput",
    classification: "application", description: "Media Input",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "InputList",
            access: "R V", conformance: "M", default: undefined, type: "list",
            details: "This list provides the media inputs supported by the device",
            xref: { document: "cluster", section: "6.9.3.1" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "InputInfoStruct"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0001, name: "CurrentInput",
            access: "R V", conformance: "M", default: undefined, type: "uint8",
            details: "This field contains the value of the index field of the currently " +
                     "selected InputInfoStruct",
            xref: { document: "cluster", section: "6.9.3.2" }
        },

        {
            tag: "attribute", id: 0x0000, name: "MediaInputList",
            conformance: "M", type: "list",
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "InputInfoStruct"
                }
            ]
        },

        {
            tag: "command", id: 0x0000, name: "SelectInput",
            access: "O", conformance: "M", direction: "request", response: "status",
            details: "Upon receipt, this SHALL change the media input on the device to the " +
                     "input at a specific index in the Input List",
            xref: { document: "cluster", section: "6.9.4.1" },
            children: [
                {
                    tag: "datatype", name: "Index",
                    conformance: "M", type: "uint8"
                }
            ]
        },

        {
            tag: "command", id: 0x0001, name: "ShowInputStatus",
            access: "O", conformance: "M", direction: "request", response: "status",
            details: "Upon receipt, this SHALL display the active status of the input list " +
                     "on screen",
            xref: { document: "cluster", section: "6.9.4.2" }
        },

        {
            tag: "command", id: 0x0002, name: "HideInputStatus",
            access: "O", conformance: "M", direction: "request", response: "status",
            details: "Upon receipt, this SHALL hide the input list from the screen",
            xref: { document: "cluster", section: "6.9.4.3" }
        },

        {
            tag: "command", id: 0x0003, name: "RenameInput",
            access: "M", conformance: "NU", direction: "request", response: "status",
            details: "Upon receipt, this SHALL rename the input at a specific index in the " +
                     "Input List. Updates to the input name SHALL appear in the device’s " +
                     "settings menus",
            xref: { document: "cluster", section: "6.9.4.4" },
            children: [
                {
                    tag: "datatype", name: "Index",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "Name",
                    conformance: "M", type: "string"
                }
            ]
        },

        {
            tag: "datatype", name: "InputInfoStruct",
            conformance: "M", type: "struct",
            details: "This contains information about an input",
            xref: { document: "cluster", section: "6.9.5.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Index",
                    conformance: "M", default: undefined, type: "uint8",
                    details: "This SHALL indicate the unique index into the list of Inputs",
                    xref: { document: "cluster", section: "6.9.5.1.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "InputType",
                    conformance: "M", constraint: "desc", default: undefined, type: "InputTypeEnum",
                    details: "This SHALL indicate the type of input",
                    xref: { document: "cluster", section: "6.9.5.1.2" }
                },

                {
                    tag: "datatype", id: 0x0002, name: "Name",
                    conformance: "M", default: "", type: "string",
                    details: "This SHALL indicate the input name, such as “HDMI 1”. This field may " +
                             "be blank, but SHOULD be provided when known",
                    xref: { document: "cluster", section: "6.9.5.1.3" }
                },

                {
                    tag: "datatype", id: 0x0003, name: "Description",
                    conformance: "M", default: "", type: "string",
                    details: "This SHALL indicate the user editable input description, such as “" +
                             "Living room Playstation”. This field may be blank, but SHOULD be " +
                             "provided when known",
                    xref: { document: "cluster", section: "6.9.5.1.4" }
                }
            ]
        },

        {
            tag: "datatype", name: "InputInfoStruct",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "Index",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "InputType",
                    conformance: "M", type: "InputTypeEnum"
                },

                {
                    tag: "datatype", name: "Name",
                    conformance: "M", type: "string"
                },

                {
                    tag: "datatype", name: "Description",
                    conformance: "M", type: "string"
                }
            ]
        },

        {
            tag: "datatype", name: "InputTypeEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Internal",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Aux",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Coax",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "Composite",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Hdmi",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "Input",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0006, name: "Line",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0007, name: "Optical",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "Video",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0009, name: "Scart",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000a, name: "Usb",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000b, name: "Other",
                    conformance: "M"
                }
            ]
        }
    ]
});
