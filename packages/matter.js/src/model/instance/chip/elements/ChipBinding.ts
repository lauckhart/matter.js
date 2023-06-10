/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x001e, name: "Binding",
    description: "Binding",
    details: "The Binding Cluster is meant to replace the support from the Zigbee Device Object (ZDO) for supporting the binding table.",
    children: [
        AttributeElement({
            id: 0x0000, name: "BindingList", base: "list",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        DatatypeElement({
            name: "TargetStruct", base: "struct",
            access: { rw: "R", fabric: "F" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "Node", base: "nodeId",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "Node", base: "nodeId",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "Group", base: "groupId",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "Group", base: "groupId",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "Endpoint", base: "endpointNo",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "Endpoint", base: "endpointNo",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "Cluster", base: "clusterId",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "Cluster", base: "clusterId",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        })
    ]
}));
