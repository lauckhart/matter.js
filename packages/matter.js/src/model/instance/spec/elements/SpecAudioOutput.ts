/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x050b, name: "AudioOutput",
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
                    description: "Supports updates to output names",
                    xref: { document: "cluster", section: "6.5.2", version: "1.1" }
                })
            ]
        }),

        AttributeElement({
            id: 0x0000, name: "OutputList", base: "list",
            access: "R V", conformance: "M", constraint: "None",
            details: "This list provides the outputs supported by the device.",
            xref: { document: "cluster", section: "6.5.3.1", version: "1.1" },
            children: [
                DatatypeElement({
                    name: "entry", base: "OutputInfoStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "CurrentOutput", base: "uint8",
            access: "R V", conformance: "M",
            details: "This field contains the value of the index field of the currently selected OutputInfoStruct.",
            xref: { document: "cluster", section: "6.5.3.2", version: "1.1" }
        }),

        CommandElement({
            id: 0x0000, name: "SelectOutput",
            access: "O", conformance: "M", direction: "request", response: "status",
            xref: { document: "cluster", section: "6.5.4", version: "1.1" }
        }),

        CommandElement({
            id: 0x0001, name: "RenameOutput",
            access: "M", conformance: "NU", direction: "request", response: "status",
            details: "Upon receipt, this SHALL rename the output at a specific index in the Output List.",
            xref: { document: "cluster", section: "6.5.4.2", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "OutputInfoStruct", base: "struct",
            details: "This contains information about an output.",
            xref: { document: "cluster", section: "6.5.5.1", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Index", base: "uint8",
                    conformance: "M",
                    details: "This SHALL indicate the unique index into the list of outputs.",
                    xref: { document: "cluster", section: "6.5.5.1.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "OutputType", base: "OutputTypeEnum",
                    conformance: "M", constraint: "desc",
                    details: "This SHALL indicate the type of output",
                    xref: { document: "cluster", section: "6.5.5.1.2", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "Name", base: "string",
                    conformance: "M",
                    details: "The device defined and user editable output name, such as “Soundbar”, “Speakers”. This field may be blank, but SHOULD be provided when known.",
                    xref: { document: "cluster", section: "6.5.5.1.3", version: "1.1" }
                })
            ]
        })
    ]
}));
