/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x001e, name: "Binding",
    description: "Binding",
    details: "The Binding Cluster is meant to replace the support from the Zigbee Device Object (ZDO) for supporting the binding table.",
    children: [
        AttributeElement({
            id: 0x0000, name: "BindingList", base: "list",
            access: "W", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "TargetStruct"
                })
            ]
        }),

        DatatypeElement({
            name: "TargetStruct", base: "struct",
            access: "R F", conformance: "M",
            children: [
                DatatypeElement({
                    name: "Node", base: "node-id",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "Group", base: "group-id",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "Endpoint", base: "endpoint-no",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "Cluster", base: "cluster-id",
                    access: "R", conformance: "O"
                })
            ]
        })
    ]
}));
