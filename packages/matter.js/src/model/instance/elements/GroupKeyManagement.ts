/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x003f, name: "GroupKeyManagement",
    classification: "node", description: "Group Key Management",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "GroupKeyMap",
            access: "RW VM", conformance: "M", constraint: "desc", default: "empty", quality: "N", type: "list",
            details: "This attribute is a list of GroupKeyMapStruct entries. Each entry " +
                     "associates a logical Group Id with a particular group key set",
            xref: { document: "core", section: "11.2.7.1" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "GroupKeyMapStruct"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0001, name: "GroupTable",
            access: "R F", conformance: "M", constraint: "desc", default: "empty", type: "list",
            details: "This attribute is a list of GroupInfoMapStruct entries. Each entry " +
                     "provides read-only information about how a given logical Group ID maps" +
                     " to a particular set of endpoints, and a name for the group. The " +
                     "content of this attribute reflects data managed via the Groups cluster" +
                     " (see AppClusters), and is in general terms referred to as the 'node-" +
                     "wide Group Table",
            xref: { document: "core", section: "11.2.7.2" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "GroupInfoMapStruct"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0002, name: "MaxGroupsPerFabric",
            conformance: "M", default: 0, quality: "F", type: "uint16",
            details: "This attribute SHALL indicate the maximum number of groups that this " +
                     "node supports per fabric. The value of this attribute SHALL be set to " +
                     "be no less than the required minimum supported groups as specified in " +
                     "Group Limits. The length of the GroupKeyMap and GroupTable list " +
                     "attributes SHALL NOT exceed the value of the MaxGroupsPerFabric " +
                     "attribute multiplied by the number of supported fabrics",
            xref: { document: "core", section: "11.2.7.3" }
        },

        {
            tag: "attribute", id: 0x0003, name: "MaxGroupKeysPerFabric",
            conformance: "M", constraint: "1 to 65535", default: 1, quality: "F", type: "uint16",
            details: "This attribute SHALL indicate the maximum number of group key sets " +
                     "this node supports per fabric. The value of this attribute SHALL be " +
                     "set according to the minimum number of group key sets to support as " +
                     "specified in Group Limits",
            xref: { document: "core", section: "11.2.7.4" }
        },

        {
            tag: "command", id: 0x0000, name: "KeySetWrite",
            access: "R F A", conformance: "M", direction: "request", response: "status",
            details: "This command is used by Administrators to set the state of a given " +
                     "Group Key Set, including atomi",
            xref: { document: "core", section: "11.2.8.1" },
            children: [
                {
                    tag: "datatype", name: "GroupKeySet",
                    conformance: "M", type: "GroupKeySetStruct"
                }
            ]
        },

        {
            tag: "command", id: 0x0001, name: "KeySetRead",
            access: "R F A", conformance: "M", direction: "request", response: "KeySetReadResponse",
            details: "This command is used by Administrators to read the state of a given " +
                     "Group Key Set",
            xref: { document: "core", section: "11.2.8.2" },
            children: [
                {
                    tag: "datatype", name: "GroupKeySetId",
                    conformance: "M", type: "uint16"
                }
            ]
        },

        {
            tag: "command", id: 0x0002, name: "KeySetReadResponse",
            conformance: "M", direction: "response",
            details: "This command SHALL be generated in response to the KeySetRead command" +
                     ", if a valid Group Key Set was found. It SHALL contain the " +
                     "configuration of the requested Group Key Set, with the EpochKey0, " +
                     "EpochKey1 and EpochKey2 key contents replaced by null",
            xref: { document: "core", section: "11.2.8.3" },
            children: [
                {
                    tag: "datatype", name: "GroupKeySet",
                    conformance: "M", type: "GroupKeySetStruct"
                }
            ]
        },

        {
            tag: "command", id: 0x0003, name: "KeySetRemove",
            access: "R F A", conformance: "M", direction: "request", response: "status",
            details: "This command is used by Administrators to remove all state of a given " +
                     "Group Key Set",
            xref: { document: "core", section: "11.2.8.4" },
            children: [
                {
                    tag: "datatype", name: "GroupKeySetId",
                    conformance: "M", type: "uint16"
                }
            ]
        },

        {
            tag: "command", id: 0x0004, name: "KeySetReadAllIndices",
            access: "R F A", conformance: "M", direction: "request", response: "KeySetReadAllIndicesResponse",
            details: "This command is used by Administrators to query a list of all Group " +
                     "Key Sets associated with the accessing fabric",
            xref: { document: "core", section: "11.2.8.5" },
            children: [
                {
                    tag: "datatype", name: "GroupKeySetIDs",
                    conformance: "M", type: "uint16"
                }
            ]
        },

        {
            tag: "command", id: 0x0005, name: "KeySetReadAllIndicesResponse",
            conformance: "M", direction: "response",
            details: "This command SHALL be generated in response to KeySetReadAllIndices " +
                     "and it SHALL contain the list of GroupKeySetID for all Group Key Sets " +
                     "associated with the scoped Fabric",
            xref: { document: "core", section: "11.2.8.6" },
            children: [
                {
                    tag: "datatype", name: "GroupKeySetIDs",
                    conformance: "M", type: "uint16"
                }
            ]
        },

        {
            tag: "datatype", name: "GroupKeySecurityPolicyEnum",
            conformance: "M", type: "enum8",
            details: "This data type is derived from enum8",
            xref: { document: "core", section: "11.2.6.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "TrustFirst",
                    conformance: "M",
                    xref: { document: "core", section: "11.2.6.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "CacheAndSync",
                    conformance: "CS",
                    xref: { document: "core", section: "11.2.6.1" }
                }
            ]
        },

        {
            tag: "datatype", name: "GroupKeyMapStruct",
            access: "R F", conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "GroupId",
                    conformance: "M", type: "group-id"
                },

                {
                    tag: "datatype", name: "GroupKeySetId",
                    conformance: "M", type: "uint16"
                }
            ]
        },

        {
            tag: "datatype", name: "GroupInfoMapStruct",
            access: "R F", conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "GroupId",
                    conformance: "M", type: "group-id"
                },

                {
                    tag: "datatype", name: "Endpoints",
                    conformance: "M", type: "endpoint-no"
                },

                {
                    tag: "datatype", name: "GroupName",
                    conformance: "O", type: "string"
                }
            ]
        },

        {
            tag: "datatype", name: "GroupKeySetStruct",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "GroupKeySetId",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "GroupKeySecurityPolicy",
                    conformance: "M", type: "GroupKeySecurityPolicyEnum"
                },

                {
                    tag: "datatype", name: "EpochKey0",
                    conformance: "M", quality: "X", type: "octstr"
                },

                {
                    tag: "datatype", name: "EpochStartTime0",
                    conformance: "M", quality: "X", type: "epoch-us"
                },

                {
                    tag: "datatype", name: "EpochKey1",
                    conformance: "M", quality: "X", type: "octstr"
                },

                {
                    tag: "datatype", name: "EpochStartTime1",
                    conformance: "M", quality: "X", type: "epoch-us"
                },

                {
                    tag: "datatype", name: "EpochKey2",
                    conformance: "M", quality: "X", type: "octstr"
                },

                {
                    tag: "datatype", name: "EpochStartTime2",
                    conformance: "M", quality: "X", type: "epoch-us"
                }
            ]
        }
    ]
});
