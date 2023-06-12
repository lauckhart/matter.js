/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x003f, name: "GroupKeyManagement",
    description: "Group Key Management",
    details: "The Group Key Management Cluster is the mechanism by which group keys are managed.",
    children: [
        AttributeElement({
            id: 0x0000, name: "GroupKeyMap", base: "list",
            access: "W VM", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "GroupKeyMapStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "GroupTable", base: "list",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "GroupInfoMapStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0002, name: "MaxGroupsPerFabric", base: "uint16",
            access: "R", conformance: "M"
        }),

        AttributeElement({
            id: 0x0003, name: "MaxGroupKeysPerFabric", base: "uint16",
            access: "R", conformance: "M"
        }),

        CommandElement({
            id: 0x0000, name: "KeySetWrite",
            access: "R F A", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "GroupKeySet", base: "GroupKeySetStruct",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "KeySetRead",
            access: "R F A", conformance: "M", direction: "request", response: "KeySetReadResponse",
            children: [
                DatatypeElement({
                    name: "GroupKeySetId", base: "uint16",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "KeySetReadResponse",
            access: "R", conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "GroupKeySet", base: "GroupKeySetStruct",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "KeySetRemove",
            access: "R F A", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "GroupKeySetId", base: "uint16",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "KeySetReadAllIndices",
            access: "R F A", conformance: "M", direction: "request", response: "KeySetReadAllIndicesResponse",
            children: [
                DatatypeElement({
                    name: "GroupKeySetIDs", base: "uint16",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "KeySetReadAllIndicesResponse",
            access: "R", conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "GroupKeySetIDs", base: "uint16",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "GroupKeyMapStruct", base: "struct",
            access: "R F", conformance: "M",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group-id",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupKeySetId", base: "uint16",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "GroupInfoMapStruct", base: "struct",
            access: "R F", conformance: "M",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group-id",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Endpoints", base: "endpoint-no",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupName", base: "string",
                    access: "R", conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "GroupKeySetStruct", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "GroupKeySetId", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupKeySecurityPolicy", base: "GroupKeySecurityPolicyEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "EpochKey0", base: "octstr",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "EpochStartTime0", base: "epoch-us",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "EpochKey1", base: "octstr",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "EpochStartTime1", base: "epoch-us",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "EpochKey2", base: "octstr",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "EpochStartTime2", base: "epoch-us",
                    access: "R", conformance: "M", quality: "X"
                })
            ]
        }),

        DatatypeElement({
            name: "GroupKeySecurityPolicyEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "TrustFirst",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "CacheAndSync",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
