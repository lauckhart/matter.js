/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x050b, name: "AudioOutput",
    description: "Audio Output",
    details: "This cluster provides an interface for controlling the Output on a media device such as a TV.",
    children: [
        AttributeElement({
            id: 0x0000, name: "AudioOutputList", base: "OutputList",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0001, name: "AudioOutputCurrentOutput", base: "CurrentOutput",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        CommandElement({
            id: 0x0000, name: "SelectOutput", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "Index", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Index", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "RenameOutput", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "Index", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Index", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Name", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Name", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}))