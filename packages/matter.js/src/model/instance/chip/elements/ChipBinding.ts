/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x001e, name: "Binding",
    description: "Binding",
    details: "The Binding Cluster is meant to replace the support from the Zigbee Device Object (ZDO) for supporting the binding table.",
    children: [
        AttributeElement({
            id: 0x0000, name: "BindingList", type: "list",
            access: "RW", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", type: "TargetStruct"
                })
            ]
        }),

        DatatypeElement({
            name: "TargetStruct", type: "struct",
            access: "R F", conformance: "M",
            children: [
                DatatypeElement({
                    name: "Node", type: "node-id",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "Group", type: "group-id",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "Endpoint", type: "endpoint-no",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "Cluster", type: "cluster-id",
                    conformance: "O"
                })
            ]
        })
    ]
}));
