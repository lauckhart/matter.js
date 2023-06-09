/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x003f, name: "GroupKeyManagement",
    description: "Group Key Management",
    details: "The Group Key Management Cluster is the mechanism by which group keys are managed.",
    children: [
        AttributeElement({
            id: 0x0000, name: "GroupKeyMap", base: "GroupKeyMap",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0001, name: "GroupTable", base: "GroupTable",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0002, name: "MaxGroupsPerFabric", base: "MaxGroupsPerFabric",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0003, name: "MaxGroupKeysPerFabric", base: "MaxGroupKeysPerFabric",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        CommandElement({
            id: 0x0000, name: "KeySetWrite", base: "struct",
            access: { rw: "R", fabric: "F", writePrivilege: "A" }, conformance: [ "M" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "GroupKeySet", base: "GroupKeySetStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "GroupKeySet", base: "GroupKeySetStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "KeySetRead", base: "struct",
            access: { rw: "R", fabric: "F", writePrivilege: "A" }, conformance: [ "M" ], direction: "request", response: "KeySetReadResponse",
            children: [
                DatatypeElement({
                    name: "GroupKeySetId", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "GroupKeySetId", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "KeySetReadResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "GroupKeySet", base: "GroupKeySetStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "GroupKeySet", base: "GroupKeySetStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "KeySetRemove", base: "struct",
            access: { rw: "R", fabric: "F", writePrivilege: "A" }, conformance: [ "M" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "GroupKeySetId", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "GroupKeySetId", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "KeySetReadAllIndices", base: "struct",
            access: { rw: "R", fabric: "F", writePrivilege: "A" }, conformance: [ "M" ], direction: "request", response: "KeySetReadAllIndicesResponse",
            children: [
                DatatypeElement({
                    name: "GroupKeySetIDs", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "GroupKeySetIDs", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "KeySetReadAllIndicesResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "GroupKeySetIDs", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "GroupKeySetIDs", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}));
