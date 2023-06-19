/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x001e, name: "Binding",
    classification: "endpoint", description: "Binding",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "Binding",
            access: "RW F VM", conformance: "M", constraint: "desc", default: [], quality: "N", type: "list",
            details: "Each entry SHALL represent a binding. Here are some examples",
            xref: { document: "core", section: "9.6.6.1" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "TargetStruct"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0000, name: "BindingList",
            access: "RW", conformance: "M", type: "list",
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "TargetStruct"
                }
            ]
        },

        {
            tag: "datatype", name: "TargetStruct",
            access: "R F", conformance: "M", type: "struct",
            details: "Node Field",
            xref: { document: "core", section: "9.6.5.1" },
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "Node",
                    access: "F", conformance: "Endpoint", default: undefined, type: "node-id",
                    xref: { document: "core", section: "9.6.5.1" }
                },

                {
                    tag: "datatype", id: 0x0002, name: "Group",
                    access: "F", conformance: "!Endpoint", default: undefined, type: "group-id",
                    xref: { document: "core", section: "9.6.5.1" }
                },

                {
                    tag: "datatype", id: 0x0003, name: "Endpoint",
                    access: "F", conformance: "!Group", default: undefined, type: "endpoint-no",
                    xref: { document: "core", section: "9.6.5.1" }
                },

                {
                    tag: "datatype", id: 0x0004, name: "Cluster",
                    access: "F", conformance: "O", default: undefined, type: "cluster-id",
                    xref: { document: "core", section: "9.6.5.1" }
                }
            ]
        }
    ]
});
