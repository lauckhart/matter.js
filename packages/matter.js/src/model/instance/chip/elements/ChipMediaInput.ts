/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0507, name: "MediaInput",
    description: "Media Input",
    details: "This cluster provides an interface for controlling the Input Selector on a media device such as a TV.",
    children: [
        AttributeElement({
            id: 0x0000, name: "MediaInputList", type: "list",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", type: "InputInfoStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "MediaInputCurrentInput", type: "uint8",
            conformance: "M", default: 0
        }),

        CommandElement({
            id: 0x0000, name: "SelectInput",
            conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "Index", type: "uint8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "ShowInputStatus",
            conformance: "M", direction: "request"
        }),

        CommandElement({
            id: 0x0002, name: "HideInputStatus",
            conformance: "M", direction: "request"
        }),

        CommandElement({
            id: 0x0003, name: "RenameInput",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "Index", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Name", type: "string",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "InputInfoStruct", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "Index", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "InputType", type: "InputTypeEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Name", type: "string",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Description", type: "string",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "InputTypeEnum", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Internal",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Aux",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Coax",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Composite",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Hdmi",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Input",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "Line",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "Optical",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Video",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "Scart",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000a, name: "Usb",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000b, name: "Other",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "MediaInputFeature", type: "map32",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "NameUpdates",
                    conformance: "M"
                })
            ]
        })
    ]
}));
