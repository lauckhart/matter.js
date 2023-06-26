/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "GroupKeyManagement", id: 0x3f, classification: "node",
    description: "Group Key Management",
    details: "The Group Key Management Cluster is the mechanism by which group keys are managed.",
    xref: { document: "core", section: "11.2" },

    children: [
        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",

            children: [
                {
                    tag: "datatype", name: "CS", id: 0x0,
                    description: "The ability to support CacheAndSync security policy and MCSP.",
                    xref: { document: "core", section: "11.2.5" }
                }
            ]
        },

        {
            tag: "attribute", name: "GroupKeyMap", id: 0x0, type: "list", access: "RW VM", conformance: "M",
            constraint: "desc", quality: "N",
            details: "This attribute is a list of GroupKeyMapStruct entries. Each entry associates a logical Group Id " +
                     "with a particular group key set.",
            xref: { document: "core", section: "11.2.7.1" },
            children: [ { tag: "datatype", name: "entry", type: "GroupKeyMapStruct" } ]
        },

        {
            tag: "attribute", name: "GroupTable", id: 0x1, type: "list", access: "R F", conformance: "M",
            constraint: "desc",
            details: "This attribute is a list of GroupInfoMapStruct entries. Each entry provides read-only information " +
                     "about how a given logical Group ID maps to a particular set of endpoints, and a name for the group. " +
                     "The content of this attribute reflects data managed via the Groups cluster (see AppClusters), and " +
                     "is in general terms referred to as the 'node-wide Group Table'.",
            xref: { document: "core", section: "11.2.7.2" },
            children: [ { tag: "datatype", name: "entry", type: "GroupInfoMapStruct" } ]
        },

        {
            tag: "attribute", name: "MaxGroupsPerFabric", id: 0x2, type: "uint16", conformance: "M",
            quality: "F",
            details: "This attribute SHALL indicate the maximum number of groups that this node supports per fabric. The " +
                     "value of this attribute SHALL be set to be no less than the required minimum supported groups as " +
                     "specified in Group Limits. The length of the GroupKeyMap and GroupTable list attributes SHALL NOT " +
                     "exceed the value of the MaxGroupsPerFabric attribute multiplied by the number of supported fabrics.",
            xref: { document: "core", section: "11.2.7.3" }
        },

        {
            tag: "attribute", name: "MaxGroupKeysPerFabric", id: 0x3, type: "uint16", conformance: "M",
            constraint: "1 to 65535", default: 1, quality: "F",
            details: "This attribute SHALL indicate the maximum number of group key sets this node supports per fabric. " +
                     "The value of this attribute SHALL be set according to the minimum number of group key sets to " +
                     "support as specified in Group Limits.",
            xref: { document: "core", section: "11.2.7.4" }
        },

        {
            tag: "command", name: "KeySetWrite", id: 0x0, access: "R F A", conformance: "M",
            direction: "request", response: "status",
            details: "This command is used by Administrators to set the state of a given Group Key Set, including atomi",
            xref: { document: "core", section: "11.2.8.1" },
            children: [ { tag: "datatype", name: "GroupKeySet", id: 0x0, type: "GroupKeySetStruct", conformance: "M" } ]
        },

        {
            tag: "command", name: "KeySetRead", id: 0x1, access: "R F A", conformance: "M",
            direction: "request", response: "KeySetReadResponse",
            details: "This command is used by Administrators to read the state of a given Group Key Set.",
            xref: { document: "core", section: "11.2.8.2" },
            children: [ { tag: "datatype", name: "GroupKeySetId", id: 0x0, type: "uint16", conformance: "M" } ]
        },

        {
            tag: "command", name: "KeySetReadResponse", id: 0x2, conformance: "M", direction: "response",
            details: "This command SHALL be generated in response to the KeySetRead command, if a valid Group Key Set was " +
                     "found. It SHALL contain the configuration of the requested Group Key Set, with the EpochKey0, " +
                     "EpochKey1 and EpochKey2 key contents replaced by null.",
            xref: { document: "core", section: "11.2.8.3" },
            children: [ { tag: "datatype", name: "GroupKeySet", id: 0x0, type: "GroupKeySetStruct", conformance: "M" } ]
        },

        {
            tag: "command", name: "KeySetRemove", id: 0x3, access: "R F A", conformance: "M",
            direction: "request", response: "status",
            details: "This command is used by Administrators to remove all state of a given Group Key Set.",
            xref: { document: "core", section: "11.2.8.4" },
            children: [ { tag: "datatype", name: "GroupKeySetId", id: 0x0, type: "uint16", conformance: "M" } ]
        },

        {
            tag: "command", name: "KeySetReadAllIndices", id: 0x4, access: "R F A", conformance: "M",
            direction: "request", response: "KeySetReadAllIndicesResponse",
            details: "This command is used by Administrators to query a list of all Group Key Sets associated with the " +
                     "accessing fabric.",
            xref: { document: "core", section: "11.2.8.5" },
            children: [ { tag: "datatype", name: "GroupKeySetIDs", type: "uint16", conformance: "M" } ]
        },

        {
            tag: "command", name: "KeySetReadAllIndicesResponse", id: 0x5, conformance: "M",
            direction: "response",
            details: "This command SHALL be generated in response to KeySetReadAllIndices and it SHALL contain the list " +
                     "of GroupKeySetID for all Group Key Sets associated with the scoped Fabric.",
            xref: { document: "core", section: "11.2.8.6" },

            children: [
                {
                    tag: "datatype", name: "GroupKeySetIDs", id: 0x0, type: "list", conformance: "M",
                    children: [ { tag: "datatype", name: "entry", type: "uint16" } ]
                }
            ]
        },

        {
            tag: "datatype", name: "GroupKeySecurityPolicyEnum", type: "enum8", conformance: "M",
            details: "This data type is derived from enum8.",
            xref: { document: "core", section: "11.2.6.1" },
            children: [
                { tag: "datatype", name: "TrustFirst", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "CacheAndSync", id: 0x1, conformance: "CS" }
            ]
        },

        {
            tag: "datatype", name: "GroupKeyMulticastPolicyEnum", type: "enum8",
            details: "This data type is derived from enum8.",
            xref: { document: "core", section: "11.2.6.2" },
            children: [
                { tag: "datatype", name: "PerGroupId", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "AllNodes", id: 0x1, conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "GroupKeyMapStruct", type: "struct", access: "R F", conformance: "M",
            details: "GroupId Field",
            xref: { document: "core", section: "11.2.6.3" },

            children: [
                { tag: "datatype", name: "GroupId", id: 0x1, type: "group-id", access: "F", conformance: "M" },
                {
                    tag: "datatype", name: "GroupKeySetId", id: 0x2, type: "uint16", access: "F", conformance: "M",
                    constraint: "1 to 65535"
                }
            ]
        },

        {
            tag: "datatype", name: "GroupKeySetStruct", type: "struct", conformance: "M",
            details: "GroupKeySetID Field",
            xref: { document: "core", section: "11.2.6.4" },

            children: [
                { tag: "datatype", name: "GroupKeySetId", id: 0x0, type: "uint16", conformance: "M" },
                {
                    tag: "datatype", name: "GroupKeySecurityPolicy", id: 0x1, type: "GroupKeySecurityPolicyEnum",
                    access: "S", conformance: "M"
                },
                {
                    tag: "datatype", name: "EpochKey0", id: 0x2, type: "octstr", access: "S", conformance: "M",
                    constraint: "16", quality: "X"
                },
                {
                    tag: "datatype", name: "EpochStartTime0", id: 0x3, type: "epoch-us", access: "S", conformance: "M",
                    quality: "X"
                },
                {
                    tag: "datatype", name: "EpochKey1", id: 0x4, type: "octstr", access: "S", conformance: "M",
                    constraint: "16", quality: "X"
                },
                {
                    tag: "datatype", name: "EpochStartTime1", id: 0x5, type: "epoch-us", access: "S", conformance: "M",
                    quality: "X"
                },
                {
                    tag: "datatype", name: "EpochKey2", id: 0x6, type: "octstr", access: "S", conformance: "M",
                    constraint: "16", quality: "X"
                },
                {
                    tag: "datatype", name: "EpochStartTime2", id: 0x7, type: "epoch-us", access: "S", conformance: "M",
                    quality: "X"
                },
                {
                    tag: "datatype", name: "GroupKeyMulticastPolicy", id: 0x8, type: "GroupKeyMulticastPolicyEnum",
                    access: "S", conformance: "P, M"
                }
            ]
        },

        {
            tag: "datatype", name: "GroupInfoMapStruct", type: "struct", access: "R F", conformance: "M",
            details: "GroupId Field",
            xref: { document: "core", section: "11.2.6.5" },

            children: [
                { tag: "datatype", name: "GroupId", id: 0x1, type: "group-id", access: "R F", conformance: "M" },
                {
                    tag: "datatype", name: "Endpoints", id: 0x2, type: "list", access: "R F", conformance: "M",
                    constraint: "min 1",
                    children: [ { tag: "datatype", name: "entry", type: "endpoint-no" } ]
                },
                {
                    tag: "datatype", name: "GroupName", id: 0x3, type: "string", access: "R F", conformance: "O",
                    constraint: "max 16"
                }
            ]
        }
    ]
});