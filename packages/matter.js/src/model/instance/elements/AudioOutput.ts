/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x050b, name: "AudioOutput",
    classification: "application", description: "Audio Output",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "OutputList",
            access: "R V", conformance: "M", constraint: "None", default: undefined, type: "list",
            details: "This list provides the outputs supported by the device",
            xref: { document: "cluster", section: "6.5.3.1" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "OutputInfoStruct"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0001, name: "CurrentOutput",
            access: "R V", conformance: "M", default: undefined, type: "uint8",
            details: "This field contains the value of the index field of the currently " +
                     "selected OutputInfoStruct",
            xref: { document: "cluster", section: "6.5.3.2" }
        },

        {
            tag: "attribute", id: 0x0000, name: "AudioOutputList",
            conformance: "M", type: "list",
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "OutputInfoStruct"
                }
            ]
        },

        {
            tag: "command", id: 0x0000, name: "SelectOutput",
            access: "O", conformance: "M", direction: "request", response: "status",
            xref: { document: "cluster", section: "6.5.4" },
            children: [
                {
                    tag: "datatype", name: "Index",
                    conformance: "M", type: "uint8"
                }
            ]
        },

        {
            tag: "command", id: 0x0001, name: "RenameOutput",
            access: "M", conformance: "NU", direction: "request", response: "status",
            details: "Upon receipt, this SHALL rename the output at a specific index in the " +
                     "Output List",
            xref: { document: "cluster", section: "6.5.4.2" },
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
            tag: "datatype", name: "OutputInfoStruct",
            conformance: "M", type: "struct",
            details: "This contains information about an output",
            xref: { document: "cluster", section: "6.5.5.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Index",
                    conformance: "M", default: undefined, type: "uint8",
                    details: "This SHALL indicate the unique index into the list of outputs",
                    xref: { document: "cluster", section: "6.5.5.1.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "OutputType",
                    conformance: "M", constraint: "desc", default: undefined, type: "OutputTypeEnum",
                    details: "This SHALL indicate the type of output",
                    xref: { document: "cluster", section: "6.5.5.1.2" }
                },

                {
                    tag: "datatype", id: 0x0002, name: "Name",
                    conformance: "M", default: "", type: "string",
                    details: "The device defined and user editable output name, such as “Soundbar" +
                             "”, “Speakers”. This field may be blank, but SHOULD be provided when " +
                             "known",
                    xref: { document: "cluster", section: "6.5.5.1.3" }
                }
            ]
        },

        {
            tag: "datatype", name: "OutputInfoStruct",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "Index",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "OutputType",
                    conformance: "M", type: "OutputTypeEnum"
                },

                {
                    tag: "datatype", name: "Name",
                    conformance: "M", type: "string"
                }
            ]
        },

        {
            tag: "datatype", name: "OutputTypeEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Hdmi",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Bt",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Optical",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "Headphone",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Internal",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "Other",
                    conformance: "M"
                }
            ]
        }
    ]
});
