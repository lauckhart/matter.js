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
            direction: "request",
            children: [
                DatatypeElement({
                    name: "Index", base: "uint8"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "RenameOutput",
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
            name: "OutputInfoStruct", base: "struct",
            children: [
                DatatypeElement({
                    name: "Index", base: "uint8"
                }),

                DatatypeElement({
                    name: "OutputType", base: "OutputTypeEnum"
                }),

                DatatypeElement({
                    name: "Name", base: "string"
                })
            ]
        }),

        DatatypeElement({
            name: "OutputTypeEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Hdmi"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Bt"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Optical"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Headphone"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Internal"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Other"
                })
            ]
        }),

        DatatypeElement({
            name: "AudioOutputFeature", base: "map32",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "NameUpdates"
                })
            ]
        })
    ]
}));
