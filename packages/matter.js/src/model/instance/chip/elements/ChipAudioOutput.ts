/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x050b, name: "AudioOutput",
    description: "Audio Output",
    details: "This cluster provides an interface for controlling the Output on a media device such as a TV.",
    children: [
        AttributeElement({
            id: 0x0000, name: "AudioOutputList", base: "list",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "OutputInfoStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "AudioOutputCurrentOutput", base: "uint8",
            access: "R", conformance: "O", default: 0
        }),

        CommandElement({
            id: 0x0000, name: "SelectOutput",
            access: "R", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "Index", base: "uint8",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "RenameOutput",
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
            name: "OutputInfoStruct", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "Index", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OutputType", base: "OutputTypeEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Name", base: "string",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OutputTypeEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Hdmi",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Bt",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Optical",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Headphone",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Internal",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Other",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "AudioOutputFeature", base: "map32",
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
