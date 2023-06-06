/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../index.js";

Matter.children.push(ClusterElement({
    id: 0x050b, name: "AudioOutput",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "NU",
                    description: "Supports updates to output names",
                    xref: { section: "6.5.2", document: "cluster", version: "1.1" }
                })
            ]
        }),

        AttributeElement({
            id: 0x0000, name: "OutputList", base: "list[OutputInfoStruct]",
            access: "R V", conformance: "M", constraint: "none", default: "",
            details: "This list provides the outputs supported by the device.",
            xref: { section: "6.5.3.1", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "CurrentOutput", base: "uint8",
            access: "R V", conformance: "M", default: 0,
            details: "This field contains the value of the index field of the currently selected OutputInfoStruct.",
            xref: { section: "6.5.3.2", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0000, name: "SelectOutput",
            access: "O", conformance: "M", direction: "request", response: "status",
            xref: { section: "6.5.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0001, name: "RenameOutput",
            access: "M", conformance: "NU", direction: "request", response: "status",
            details: "Upon receipt, this SHALL rename the output at a specific index in the Output List.",
            xref: { section: "6.5.4.2", document: "cluster", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "OutputInfoStruct", base: "struct",
            details: "This contains information about an output.",
            xref: { section: "6.5.5.1", document: "cluster", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Index", base: "uint8",
                    conformance: "M", default: 0,
                    details: "This SHALL indicate the unique index into the list of outputs.",
                    xref: { section: "6.5.5.1.1", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "OutputType", base: "OutputTypeEnum",
                    conformance: "M", constraint: "desc", default: "",
                    details: "This SHALL indicate the type of output",
                    xref: { section: "6.5.5.1.2", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "Name", base: "string",
                    conformance: "M", default: "",
                    details: "The device defined and user editable output name, such as “Soundbar”, “Speakers”. This field may be blank, but SHOULD be provided when known.",
                    xref: { section: "6.5.5.1.3", document: "cluster", version: "1.1" }
                })
            ]
        })
    ]
}))
