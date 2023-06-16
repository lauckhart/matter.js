/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x003f, name: "GroupKeyManagement",
    description: "Group Key Management",
    details: "The Group Key Management Cluster is the mechanism by which group keys are managed.",
    children: [
        AttributeElement({
            id: 0x0000, name: "GroupKeyMap", type: "list",
            access: "RW VM", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", type: "GroupKeyMapStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "GroupTable", type: "list",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", type: "GroupInfoMapStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0002, name: "MaxGroupsPerFabric", type: "uint16",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0003, name: "MaxGroupKeysPerFabric", type: "uint16",
            conformance: "M"
        }),

        CommandElement({
            id: 0x0000, name: "KeySetWrite",
            access: "R F A", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "GroupKeySet", type: "GroupKeySetStruct",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "KeySetRead",
            access: "R F A", conformance: "M", direction: "request", response: "KeySetReadResponse",
            children: [
                DatatypeElement({
                    name: "GroupKeySetId", type: "uint16",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "KeySetReadResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "GroupKeySet", type: "GroupKeySetStruct",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "KeySetRemove",
            access: "R F A", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "GroupKeySetId", type: "uint16",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "KeySetReadAllIndices",
            access: "R F A", conformance: "M", direction: "request", response: "KeySetReadAllIndicesResponse",
            children: [
                DatatypeElement({
                    name: "GroupKeySetIDs", type: "uint16",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "KeySetReadAllIndicesResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "GroupKeySetIDs", type: "uint16",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "GroupKeyMapStruct", type: "struct",
            access: "R F", conformance: "M",
            children: [
                DatatypeElement({
                    name: "GroupId", type: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupKeySetId", type: "uint16",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "GroupInfoMapStruct", type: "struct",
            access: "R F", conformance: "M",
            children: [
                DatatypeElement({
                    name: "GroupId", type: "group-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Endpoints", type: "endpoint-no",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupName", type: "string",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "GroupKeySetStruct", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "GroupKeySetId", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "GroupKeySecurityPolicy", type: "GroupKeySecurityPolicyEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "EpochKey0", type: "octstr",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "EpochStartTime0", type: "epoch-us",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "EpochKey1", type: "octstr",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "EpochStartTime1", type: "epoch-us",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "EpochKey2", type: "octstr",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "EpochStartTime2", type: "epoch-us",
                    conformance: "M", quality: "X"
                })
            ]
        }),

        DatatypeElement({
            name: "GroupKeySecurityPolicyEnum", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "TrustFirst",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "CacheAndSync",
                    conformance: "M"
                })
            ]
        })
    ]
}));
