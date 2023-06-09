/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0004, name: "Groups",
    classification: "endpoint",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, default: 4, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "GROUPNAMES",
                    default: 0, description: "The ability to store a name for a group.",
                    xref: { section: "1.3.4", document: "cluster", version: "1.1" }
                })
            ]
        }),

        AttributeElement({
            id: 0x0000, name: "NameSupport", base: "map8",
            access: "R V", conformance: "M", constraint: "desc", default: "0", quality: "F",
            details: "This attribute provides legacy, read-only access to whether the Group Names feature is supported. The most significant bit, bit 7, SHALL be equal to bit 0 of the FeatureMap attribute. All other bits SHALL be 0.",
            xref: { section: "1.3.6.1", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0000, name: "AddGroup",
            access: "F M", conformance: "M", direction: "request", response: "AddGroupResponse",
            details: "The AddGroup command allows a client to add group membership in a particular group for the server endpoint.",
            xref: { section: "1.3.7.1", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0001, name: "ViewGroup",
            access: "F O", conformance: "M", direction: "request", response: "ViewGroupResponse",
            details: "The ViewGroup command allows a client to request that the server responds with a ViewGroupResponse command containing the name string for a particular group.",
            xref: { section: "1.3.7.2", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0002, name: "GetGroupMembership",
            access: "F O", conformance: "M", direction: "request", response: "GetGroupMembershipResponse",
            details: "The GetGroupMembership command allows a client to inquire about the group membership of the server endpoint, in a number of ways.",
            xref: { section: "1.3.7.3", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0003, name: "RemoveGroup",
            access: "F M", conformance: "M", direction: "request", response: "RemoveGroupResponse",
            details: "The RemoveGroup command allows a client to request that the server removes the membership for the server endpoint, if any, in a particular group.",
            xref: { section: "1.3.7.4", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0004, name: "RemoveAllGroups",
            access: "F M", conformance: "M", direction: "request", response: "status",
            details: "The RemoveAllGroups command allows a client to direct the server to remove all group associations for the server endpoint.",
            xref: { section: "1.3.7.5", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0005, name: "AddGroupIfIdentifying",
            access: "F M", conformance: "M", direction: "request", response: "status",
            details: "The AddGroupIfIdentifying command allows a client to add group membership in a particular group for the server endpoint, on condition that the endpoint is identifying itself. Identifying functionality is controlled using the Identify cluster, (see Identify).",
            xref: { section: "1.3.7.6", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0000, name: "AddGroupResponse",
            conformance: "M", direction: "response",
            details: "The AddGroupResponse is sent by the Groups cluster server in response to an AddGroup command. The AddGroupResponse command SHALL have the following data fields:",
            xref: { section: "1.3.7.7", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0001, name: "ViewGroupResponse",
            conformance: "M", direction: "response",
            details: "The ViewGroupResponse command is sent by the Groups cluster server in response to a ViewGroup command.",
            xref: { section: "1.3.7.8", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0002, name: "GetGroupMembershipResponse",
            conformance: "M", direction: "response",
            details: "The GetGroupMembershipResponse command is sent by the Groups cluster server in response to a GetGroupMembership command.",
            xref: { section: "1.3.7.9", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0003, name: "RemoveGroupResponse",
            conformance: "M", direction: "response",
            details: "The RemoveGroupResponse command is generated by the server in response to the receipt of a RemoveGroup command.",
            xref: { section: "1.3.7.10", document: "cluster", version: "1.1" }
        })
    ]
}))