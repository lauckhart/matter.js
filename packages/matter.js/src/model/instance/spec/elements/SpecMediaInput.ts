/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0507, name: "MediaInput",
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
            id: 0x0000, name: "InputList", base: "list[InputInfoStruct]",
            access: "R V", conformance: "M", constraint: "", value: "",
            details: "This list provides the media inputs supported by the device.",
            xref: { section: "6.9.3.1", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "CurrentInput", base: "uint8",
            access: "R V", conformance: "M", value: "",
            details: "This field contains the value of the index field of the currently selected InputInfoStruct.",
            xref: { section: "6.9.3.2", document: "cluster", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "InputInfoStruct", base: "struct",
            details: "This contains information about an input.",
            xref: { section: "6.9.5.1", document: "cluster", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Index", base: "uint8",
                    conformance: "M", value: "",
                    details: "This SHALL indicate the unique index into the list of Inputs.",
                    xref: { section: "6.9.5.1.1", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "InputType", base: "InputTypeEnum",
                    conformance: "M", constraint: "desc", value: "",
                    details: "This SHALL indicate the type of input",
                    xref: { section: "6.9.5.1.2", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "Name", base: "string",
                    conformance: "M", constraint: "", value: "",
                    details: "This SHALL indicate the input name, such as “HDMI 1”. This field may be blank, but SHOULD be provided when known.",
                    xref: { section: "6.9.5.1.3", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0003, name: "Description", base: "string",
                    conformance: "M", constraint: "", value: "",
                    details: "This SHALL indicate the user editable input description, such as “Living room Playstation”. This field may be blank, but SHOULD be provided when known.",
                    xref: { section: "6.9.5.1.4", document: "cluster", version: "1.1" }
                })
            ]
        })
    ]
}));
