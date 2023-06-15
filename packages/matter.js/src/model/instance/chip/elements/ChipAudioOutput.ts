/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x050b, name: "AudioOutput",
    description: "Audio Output",
    details: "This cluster provides an interface for controlling the Output on a media device such as a TV.",
    children: [
        AttributeElement({
            id: 0x0000, name: "AudioOutputList", base: "list",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "OutputInfoStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "AudioOutputCurrentOutput", base: "uint8",
            conformance: "O", default: 0
        }),

        CommandElement({
            id: 0x0000, name: "SelectOutput",
            conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "Index", base: "uint8",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "RenameOutput",
            conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "Index", base: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Name", base: "string",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OutputInfoStruct", base: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "Index", base: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OutputType", base: "OutputTypeEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Name", base: "string",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OutputTypeEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Hdmi",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Bt",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Optical",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Headphone",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Internal",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Other",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "AudioOutputFeature", base: "map32",
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
