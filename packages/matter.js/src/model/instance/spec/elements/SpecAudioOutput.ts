/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x050b, name: "AudioOutput",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, value: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", value: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "OutputList", base: "list[OutputInfoStruct]",
            access: "R V", conformance: "M", constraint: "none", value: "",
            details: "This list provides the outputs supported by the device.",
            xref: { section: "6.5.3.1", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "CurrentOutput", base: "uint8",
            access: "R V", conformance: "M", value: "",
            details: "This field contains the value of the index field of the currently selected OutputInfoStruct.",
            xref: { section: "6.5.3.2", document: "cluster", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "OutputInfoStruct", base: "struct",
            details: "This contains information about an output.",
            xref: { section: "6.5.5.1", document: "cluster", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Index", base: "uint8",
                    conformance: "M", value: "",
                    details: "This SHALL indicate the unique index into the list of outputs.",
                    xref: { section: "6.5.5.1.1", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "OutputType", base: "OutputTypeEnum",
                    conformance: "M", constraint: "desc", value: "",
                    details: "This SHALL indicate the type of output",
                    xref: { section: "6.5.5.1.2", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "Name", base: "string",
                    conformance: "M", value: "",
                    details: "The device defined and user editable output name, such as “Soundbar”, “Speakers”. This field may be blank, but SHOULD be provided when known.",
                    xref: { section: "6.5.5.1.3", document: "cluster", version: "1.1" }
                })
            ]
        })
    ]
}));
