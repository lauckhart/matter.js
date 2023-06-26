/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "Binding", id: 0x1e, classification: "endpoint", description: "Binding",
    details: "The Binding Cluster is meant to replace the support from the Zigbee Device Object (ZDO) for " +
             "supporting the binding table.",
    xref: { document: "core", section: "9.6" },

    children: [
        {
            tag: "attribute", name: "Binding", id: 0x0, type: "list", access: "RW", conformance: "M",
            constraint: "desc", quality: "N",
            details: "Each entry SHALL represent a binding. Here are some examples:",
            xref: { document: "core", section: "9.6.6.1" },
            children: [ { tag: "datatype", name: "entry", type: "TargetStruct" } ]
        },

        {
            tag: "datatype", name: "TargetStruct", type: "struct", access: "R F", conformance: "M",
            details: "Node Field",
            xref: { document: "core", section: "9.6.5.1" },

            children: [
                { tag: "datatype", name: "Node", id: 0x1, type: "node-id", access: "F", conformance: "Endpoint" },
                { tag: "datatype", name: "Group", id: 0x2, type: "group-id", access: "F", conformance: "!Endpoint" },
                { tag: "datatype", name: "Endpoint", id: 0x3, type: "endpoint-no", access: "F", conformance: "!Group" },
                { tag: "datatype", name: "Cluster", id: 0x4, type: "cluster-id", access: "F", conformance: "O" }
            ]
        }
    ]
});