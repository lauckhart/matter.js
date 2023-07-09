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
            tag: "attribute", name: "Binding", id: 0x0, type: "list", access: "RW F VM", conformance: "M",
            constraint: "desc", default: [], quality: "N",
            details: "Each entry SHALL represent a binding. Here are some examples:",
            xref: { document: "core", section: "9.6.6.1" },
            children: [{ tag: "datatype", name: "entry", type: "TargetStruct" }]
        },

        {
            tag: "datatype", name: "TargetStruct", type: "struct", access: "R F", conformance: "M",
            xref: { document: "core", section: "9.6.5.1" },

            children: [
                {
                    tag: "datatype", name: "Node", id: 0x1, type: "node-id", access: "F", conformance: "Endpoint",
                    details: "This field is the remote target node ID. If the Endpoint field is present, this field SHALL be " +
                        "present.",
                    xref: { document: "core", section: "9.6.5.1.1" }
                },

                {
                    tag: "datatype", name: "Group", id: 0x2, type: "group-id", access: "F", conformance: "!Endpoint",
                    details: "This field is the target group ID that represents remote endpoints. If the Endpoint field is " +
                        "present, this field SHALL NOT be present.",
                    xref: { document: "core", section: "9.6.5.1.2" }
                },

                {
                    tag: "datatype", name: "Endpoint", id: 0x3, type: "endpoint-no", access: "F", conformance: "!Group",
                    details: "This field is the remote endpoint that the local endpoint is bound to. If the Group field is " +
                        "present, this field SHALL NOT be present.",
                    xref: { document: "core", section: "9.6.5.1.3" }
                },

                {
                    tag: "datatype", name: "Cluster", id: 0x4, type: "cluster-id", access: "F", conformance: "O",
                    details: "This field is the cluster ID (client & server) on the local and target endpoint(s). If this field " +
                        "is present, the client cluster SHALL also exist on this endpoint (with this Binding cluster). If " +
                        "this field is present, the target SHALL be this cluster on the target endpoint(s).",
                    xref: { document: "core", section: "9.6.5.1.4" }
                }
            ]
        }
    ]
});
