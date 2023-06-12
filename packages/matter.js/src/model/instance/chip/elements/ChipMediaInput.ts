/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0507, name: "MediaInput",
    description: "Media Input",
    details: "This cluster provides an interface for controlling the Input Selector on a media device such as a TV.",
    children: [
        AttributeElement({
            id: 0x0000, name: "MediaInputList", base: "list",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "InputInfoStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "MediaInputCurrentInput", base: "uint8",
            access: "R", conformance: "M", default: 0
        }),

        CommandElement({
            id: 0x0000, name: "SelectInput",
            access: "R", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "Index", base: "uint8",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ShowInputStatus",
            access: "R", conformance: "M", direction: "request"
        }),

        CommandElement({
            id: 0x0002, name: "HideInputStatus",
            access: "R", conformance: "M", direction: "request"
        }),

        CommandElement({
            id: 0x0003, name: "RenameInput",
            access: "R", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "Index", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Name", base: "string",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "InputInfoStruct", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "Index", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "InputType", base: "InputTypeEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Name", base: "string",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Description", base: "string",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "InputTypeEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Internal",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Aux",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Coax",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Composite",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Hdmi",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Input",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "Line",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "Optical",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Video",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "Scart",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000a, name: "Usb",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000b, name: "Other",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "MediaInputFeature", base: "map32",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "NameUpdates",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
