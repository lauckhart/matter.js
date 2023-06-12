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
            children: [
                DatatypeElement({
                    name: "entry", base: "InputInfoStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "MediaInputCurrentInput", base: "uint8",
            default: 0
        }),

        CommandElement({
            id: 0x0000, name: "SelectInput",
            direction: "request",
            children: [
                DatatypeElement({
                    name: "Index", base: "uint8"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ShowInputStatus",
            direction: "request"
        }),

        CommandElement({
            id: 0x0002, name: "HideInputStatus",
            direction: "request"
        }),

        CommandElement({
            id: 0x0003, name: "RenameInput",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "Index", base: "uint8"
                }),

                DatatypeElement({
                    name: "Name", base: "string"
                })
            ]
        }),

        DatatypeElement({
            name: "InputInfoStruct", base: "struct",
            children: [
                DatatypeElement({
                    name: "Index", base: "uint8"
                }),

                DatatypeElement({
                    name: "InputType", base: "InputTypeEnum"
                }),

                DatatypeElement({
                    name: "Name", base: "string"
                }),

                DatatypeElement({
                    name: "Description", base: "string"
                })
            ]
        }),

        DatatypeElement({
            name: "InputTypeEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Internal"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Aux"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Coax"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Composite"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Hdmi"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Input"
                }),

                DatatypeElement({
                    id: 0x0006, name: "Line"
                }),

                DatatypeElement({
                    id: 0x0007, name: "Optical"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Video"
                }),

                DatatypeElement({
                    id: 0x0009, name: "Scart"
                }),

                DatatypeElement({
                    id: 0x000a, name: "Usb"
                }),

                DatatypeElement({
                    id: 0x000b, name: "Other"
                })
            ]
        }),

        DatatypeElement({
            name: "MediaInputFeature", base: "map32",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "NameUpdates"
                })
            ]
        })
    ]
}));
