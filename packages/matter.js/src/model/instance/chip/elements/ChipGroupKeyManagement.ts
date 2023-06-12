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
            access: "RW VM",
            children: [
                DatatypeElement({
                    name: "entry", base: "GroupKeyMapStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "GroupTable", base: "list",
            children: [
                DatatypeElement({
                    name: "entry", base: "GroupInfoMapStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0002, name: "MaxGroupsPerFabric", base: "uint16"
        }),

        AttributeElement({
            id: 0x0003, name: "MaxGroupKeysPerFabric", base: "uint16"
        }),

        CommandElement({
            id: 0x0000, name: "KeySetWrite",
            access: "R F A", direction: "request",
            children: [
                DatatypeElement({
                    name: "GroupKeySet", base: "GroupKeySetStruct"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "KeySetRead",
            access: "R F A", direction: "request", response: "KeySetReadResponse",
            children: [
                DatatypeElement({
                    name: "GroupKeySetId", base: "uint16"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "KeySetReadResponse",
            direction: "response",
            children: [
                DatatypeElement({
                    name: "GroupKeySet", base: "GroupKeySetStruct"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "KeySetRemove",
            access: "R F A", direction: "request",
            children: [
                DatatypeElement({
                    name: "GroupKeySetId", base: "uint16"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "KeySetReadAllIndices",
            access: "R F A", direction: "request", response: "KeySetReadAllIndicesResponse",
            children: [
                DatatypeElement({
                    name: "GroupKeySetIDs", base: "uint16"
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "KeySetReadAllIndicesResponse",
            direction: "response",
            children: [
                DatatypeElement({
                    name: "GroupKeySetIDs", base: "uint16"
                })
            ]
        }),

        DatatypeElement({
            name: "GroupKeyMapStruct", base: "struct",
            access: "R F",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group-id"
                }),

                DatatypeElement({
                    name: "GroupKeySetId", base: "uint16"
                })
            ]
        }),

        DatatypeElement({
            name: "GroupInfoMapStruct", base: "struct",
            access: "R F",
            children: [
                DatatypeElement({
                    name: "GroupId", base: "group-id"
                }),

                DatatypeElement({
                    name: "Endpoints", base: "endpoint-no"
                }),

                DatatypeElement({
                    name: "GroupName", base: "string",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "GroupKeySetStruct", base: "struct",
            children: [
                DatatypeElement({
                    name: "GroupKeySetId", base: "uint16"
                }),

                DatatypeElement({
                    name: "GroupKeySecurityPolicy", base: "GroupKeySecurityPolicyEnum"
                }),

                DatatypeElement({
                    name: "EpochKey0", base: "octstr",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "EpochStartTime0", base: "epoch-us",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "EpochKey1", base: "octstr",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "EpochStartTime1", base: "epoch-us",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "EpochKey2", base: "octstr",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "EpochStartTime2", base: "epoch-us",
                    quality: "X"
                })
            ]
        }),

        DatatypeElement({
            name: "GroupKeySecurityPolicyEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "TrustFirst"
                }),

                DatatypeElement({
                    id: 0x0001, name: "CacheAndSync"
                })
            ]
        })
    ]
}));
