/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0042, name: "ProxyConfiguration",
    classification: "node", description: "Proxy Configuration",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "ConfigurationList",
            access: "RW", conformance: "M", default: [], quality: "N", type: "list",
            details: "List of proxy configurations. There SHALL NOT be multiple entries in " +
                     "this list for the same fabric",
            xref: { document: "core", section: "9.15.14.5.1" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "ConfigurationStruct"
                }
            ]
        },

        {
            tag: "datatype", name: "ConfigurationStruct",
            type: "struct",
            xref: { document: "core", section: "9.15.14.4.1" },
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "ProxyAllNodes",
                    access: "RW", conformance: "M", constraint: "desc", default: true, type: "bool",
                    xref: { document: "core", section: "9.15.14.4.1" }
                },

                {
                    tag: "datatype", id: 0x0002, name: "SourceList",
                    access: "RW", conformance: "M", constraint: "desc", default: [], type: "list",
                    xref: { document: "core", section: "9.15.14.4.1" },
                    children: [
                        {
                            tag: "datatype", name: "entry",
                            type: "node-id"
                        }
                    ]
                }
            ]
        }
    ]
});
