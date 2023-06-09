/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x003f, name: "GroupKeyManagement",
    classification: "node",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "CS",
                    description: "The ability to support CacheAndSync security policy and MCSP.",
                    xref: { section: "11.2.5", document: "core", version: "1.1" }
                })
            ]
        }),

        AttributeElement({
            id: 0x0000, name: "GroupKeyMap", base: "list[GroupKeyMapStruct]",
            access: "RW F VM", conformance: "M", constraint: "desc", default: "empty", quality: "N",
            details: "This attribute is a list of GroupKeyMapStruct entries. Each entry associates a logical Group Id with a particular group key set.",
            xref: { section: "11.2.7.1", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "GroupTable", base: "list[GroupInfoMapStruct]",
            access: "R F", conformance: "M", constraint: "desc", default: "empty",
            details: "This attribute is a list of GroupInfoMapStruct entries. Each entry provides read-only information about how a given logical Group ID maps to a particular set of endpoints, and a name for the group. The content of this attribute reflects data managed via the Groups cluster (see AppClusters), and is in general terms referred to as the 'node-wide Group Table'.",
            xref: { section: "11.2.7.2", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "MaxGroupsPerFabric", base: "uint16",
            access: "R", conformance: "M", default: "0", quality: "F",
            details: "This attribute SHALL indicate the maximum number of groups that this node supports per fabric. The value of this attribute SHALL be set to be no less than the required minimum supported groups as specified in Group Limits. The length of the GroupKeyMap and GroupTable list attributes SHALL NOT exceed the value of the MaxGroupsPerFabric attribute multiplied by the number of supported fabrics.",
            xref: { section: "11.2.7.3", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "MaxGroupKeysPerFabric", base: "uint16",
            access: "R", conformance: "M", constraint: "1 to 65535", default: "1", quality: "F",
            details: "This attribute SHALL indicate the maximum number of group key sets this node supports per fabric. The value of this attribute SHALL be set according to the minimum number of group key sets to support as specified in Group Limits.",
            xref: { section: "11.2.7.4", document: "core", version: "1.1" }
        }),

        CommandElement({
            id: 0x0000, name: "KeySetWrite",
            access: "F A", conformance: "M", direction: "request", response: "status",
            details: "This command is used by Administrators to set the state of a given Group Key Set, including atomi",
            xref: { section: "11.2.8.1", document: "core", version: "1.1" }
        }),

        CommandElement({
            id: 0x0001, name: "KeySetRead",
            access: "F A", conformance: "M", direction: "request", response: "KeySetReadResponse",
            details: "This command is used by Administrators to read the state of a given Group Key Set.",
            xref: { section: "11.2.8.2", document: "core", version: "1.1" }
        }),

        CommandElement({
            id: 0x0002, name: "KeySetReadResponse",
            conformance: "M", direction: "response",
            details: "This command SHALL be generated in response to the KeySetRead command, if a valid Group Key Set was found. It SHALL contain the configuration of the requested Group Key Set, with the EpochKey0, EpochKey1 and EpochKey2 key contents replaced by null.",
            xref: { section: "11.2.8.3", document: "core", version: "1.1" }
        }),

        CommandElement({
            id: 0x0003, name: "KeySetRemove",
            access: "F A", conformance: "M", direction: "request", response: "status",
            details: "This command is used by Administrators to remove all state of a given Group Key Set.",
            xref: { section: "11.2.8.4", document: "core", version: "1.1" }
        }),

        CommandElement({
            id: 0x0004, name: "KeySetReadAllIndices",
            access: "F A", conformance: "M", direction: "request", response: "KeySetReadAllIndicesResponse",
            details: "This command is used by Administrators to query a list of all Group Key Sets associated with the accessing fabric.",
            xref: { section: "11.2.8.5", document: "core", version: "1.1" }
        }),

        CommandElement({
            id: 0x0005, name: "KeySetReadAllIndicesResponse",
            conformance: "M", direction: "response",
            details: "This command SHALL be generated in response to KeySetReadAllIndices and it SHALL contain the list of GroupKeySetID for all Group Key Sets associated with the scoped Fabric.",
            xref: { section: "11.2.8.6", document: "core", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "GroupKeySecurityPolicyEnum", base: "enum8.",
            details: "This data type is derived from enum8.",
            xref: { section: "11.2.6.1", document: "core", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "TrustFirst",
                    conformance: "M",
                    xref: { section: "11.2.6.1", document: "core", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "CacheAndSync",
                    conformance: "CS",
                    xref: { section: "11.2.6.1", document: "core", version: "1.1" }
                })
            ]
        })
    ]
}));
