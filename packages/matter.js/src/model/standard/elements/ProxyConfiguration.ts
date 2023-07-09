/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "ProxyConfiguration", id: 0x42, classification: "node",
    description: "Proxy Configuration",
    details: "Cluster to control Proxy Configuration",
    xref: { document: "core", section: "9.15.14" },

    children: [
        {
            tag: "attribute", name: "ConfigurationList", id: 0x0, type: "list", access: "RW", conformance: "M",
            default: [], quality: "N",
            details: "List of proxy configurations. There SHALL NOT be multiple entries in this list for the same fabric.",
            xref: { document: "core", section: "9.15.14.5.1" },
            children: [ { tag: "datatype", name: "entry", type: "ConfigurationStruct" } ]
        },

        {
            tag: "datatype", name: "ConfigurationStruct", type: "struct",
            details: "< Previous | Contents | Next >",
            xref: { document: "core", section: "9.15.14.4.1" },

            children: [
                {
                    tag: "datatype", name: "ProxyAllNodes", id: 0x1, type: "bool", access: "RW", conformance: "M",
                    constraint: "desc", default: true
                },
                {
                    tag: "datatype", name: "SourceList", id: 0x2, type: "list", access: "RW", conformance: "M",
                    constraint: "desc", default: [],
                    children: [ { tag: "datatype", name: "entry", type: "node-id" } ]
                }
            ]
        }
    ]
});
