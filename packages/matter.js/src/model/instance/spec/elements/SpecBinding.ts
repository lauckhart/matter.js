/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x001e, name: "Binding",
    classification: "endpoint",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: "min 1", default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "Binding", base: "list",
            access: "RW F VM", conformance: "M", constraint: "desc", quality: "N",
            details: "Each entry SHALL represent a binding. Here are some examples:",
            xref: { document: "core", section: "9.6.6.1", version: "1.1" },
            children: [
                DatatypeElement({
                    name: "entry", base: "TargetStruct"
                })
            ]
        }),

        DatatypeElement({
            id: -1, name: "TargetStruct", base: "struct",
            details: "Node Field",
            xref: { document: "core", section: "9.6.5.1", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Node", base: "node-id",
                    access: "F", conformance: "E",
                    xref: { document: "core", section: "9.6.5.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "Group", base: "group-id",
                    access: "F", conformance: "!E",
                    xref: { document: "core", section: "9.6.5.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0003, name: "Endpoint", base: "endpoint-no",
                    access: "F", conformance: "!G",
                    xref: { document: "core", section: "9.6.5.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0004, name: "Cluster", base: "cluster-id",
                    access: "F", conformance: "O",
                    xref: { document: "core", section: "9.6.5.1", version: "1.1" }
                })
            ]
        })
    ]
}));
