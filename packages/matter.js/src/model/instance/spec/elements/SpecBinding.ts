/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../SpecMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../elements/index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x001e, name: "Binding",
    classification: "endpoint",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", type: "uint16",
            access: "R V", conformance: "M", constraint: "min 1", default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", type: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "Binding", type: "list",
            access: "RW F VM", conformance: "M", constraint: "desc", default: "[]", quality: "N",
            details: "Each entry SHALL represent a binding. Here are some examples",
            xref: { document: "core", section: "9.6.6.1", version: "1.1" },
            children: [
                DatatypeElement({
                    name: "entry", type: "TargetStruct"
                })
            ]
        }),

        DatatypeElement({
            id: -1, name: "TargetStruct", type: "struct",
            details: "Node Field",
            xref: { document: "core", section: "9.6.5.1", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Node", type: "node-id",
                    access: "F", conformance: "Endpoint", default: 0,
                    xref: { document: "core", section: "9.6.5.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "Group", type: "group-id",
                    access: "F", conformance: "!Endpoint", default: 0,
                    xref: { document: "core", section: "9.6.5.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0003, name: "Endpoint", type: "endpoint-no",
                    access: "F", conformance: "!Group", default: 0,
                    xref: { document: "core", section: "9.6.5.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0004, name: "Cluster", type: "cluster-id",
                    access: "F", conformance: "O", default: 0,
                    xref: { document: "core", section: "9.6.5.1", version: "1.1" }
                })
            ]
        })
    ]
}));
