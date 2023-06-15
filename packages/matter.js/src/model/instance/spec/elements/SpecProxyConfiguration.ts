/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../SpecMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../elements/index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0042, name: "ProxyConfiguration",
    classification: "node",
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
            id: 0x0000, name: "ConfigurationList", base: "list",
            access: "RW", conformance: "M", default: "empty", quality: "N",
            details: "List of proxy configurations. There SHALL NOT be multiple entries in this list for the same fabric.",
            xref: { document: "core", section: "9.15.14.5.1", version: "1.1" },
            children: [
                DatatypeElement({
                    name: "entry", base: "ConfigurationStruct"
                })
            ]
        }),

        DatatypeElement({
            id: -1, name: "ConfigurationStruct", base: "struct",
            xref: { document: "core", section: "9.15.14.4.1", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0001, name: "ProxyAllNodes", base: "bool",
                    access: "RW", conformance: "M", constraint: "desc", default: true,
                    xref: { document: "core", section: "9.15.14.4.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "SourceList", base: "list",
                    access: "RW", conformance: "M", constraint: "desc", default: "empty",
                    xref: { document: "core", section: "9.15.14.4.1", version: "1.1" },
                    children: [
                        DatatypeElement({
                            name: "entry", base: "node-id"
                        })
                    ]
                })
            ]
        })
    ]
}));
