/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0507, name: "MediaInput",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: "min 1", default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "NU",
                    description: "Supports updates to the input names",
                    xref: { document: "cluster", section: "6.9.2", version: "1.1" }
                })
            ]
        }),

        AttributeElement({
            id: 0x0000, name: "InputList", base: "list",
            access: "R V", conformance: "M", default: "",
            details: "This list provides the media inputs supported by the device.",
            xref: { document: "cluster", section: "6.9.3.1", version: "1.1" },
            children: [
                DatatypeElement({
                    name: "entry", base: "InputInfoStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "CurrentInput", base: "uint8",
            access: "R V", conformance: "M", default: 0,
            details: "This field contains the value of the index field of the currently selected InputInfoStruct.",
            xref: { document: "cluster", section: "6.9.3.2", version: "1.1" }
        }),

        CommandElement({
            id: 0x0000, name: "SelectInput",
            access: "O", conformance: "M", direction: "request", response: "status",
            details: "Upon receipt, this SHALL change the media input on the device to the input at a specific index in the Input List.",
            xref: { document: "cluster", section: "6.9.4.1", version: "1.1" }
        }),

        CommandElement({
            id: 0x0001, name: "ShowInputStatus",
            access: "O", conformance: "M", direction: "request", response: "status",
            details: "Upon receipt, this SHALL display the active status of the input list on screen.",
            xref: { document: "cluster", section: "6.9.4.2", version: "1.1" }
        }),

        CommandElement({
            id: 0x0002, name: "HideInputStatus",
            access: "O", conformance: "M", direction: "request", response: "status",
            details: "Upon receipt, this SHALL hide the input list from the screen.",
            xref: { document: "cluster", section: "6.9.4.3", version: "1.1" }
        }),

        CommandElement({
            id: 0x0003, name: "RenameInput",
            access: "M", conformance: "NU", direction: "request", response: "status",
            details: "Upon receipt, this SHALL rename the input at a specific index in the Input List. Updates to the input name SHALL appear in the device’s settings menus.",
            xref: { document: "cluster", section: "6.9.4.4", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "InputInfoStruct", base: "struct",
            details: "This contains information about an input.",
            xref: { document: "cluster", section: "6.9.5.1", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Index", base: "uint8",
                    conformance: "M", default: 0,
                    details: "This SHALL indicate the unique index into the list of Inputs.",
                    xref: { document: "cluster", section: "6.9.5.1.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "InputType", base: "InputTypeEnum",
                    conformance: "M", constraint: "desc", default: "",
                    details: "This SHALL indicate the type of input",
                    xref: { document: "cluster", section: "6.9.5.1.2", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "Name", base: "string",
                    conformance: "M", default: "",
                    details: "This SHALL indicate the input name, such as “HDMI 1”. This field may be blank, but SHOULD be provided when known.",
                    xref: { document: "cluster", section: "6.9.5.1.3", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0003, name: "Description", base: "string",
                    conformance: "M", default: "",
                    details: "This SHALL indicate the user editable input description, such as “Living room Playstation”. This field may be blank, but SHOULD be provided when known.",
                    xref: { document: "cluster", section: "6.9.5.1.4", version: "1.1" }
                })
            ]
        })
    ]
}));
