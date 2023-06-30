/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "Groups", id: 0x4, classification: "endpoint", description: "Groups",
    details: "Attributes and commands for group configuration and manipulation.",
    xref: { document: "cluster", section: "1.3" },

    children: [
        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "cluster", section: "1.3.4" },

            children: [
                {
                    tag: "datatype", name: "GN", id: 0x0, description: "GroupNames",
                    details: "The ability to store a name for a group."
                }
            ]
        },

        {
            tag: "attribute", name: "NameSupport", id: 0x0, type: "map8", access: "R V", conformance: "M",
            constraint: "desc", quality: "F",
            details: "This attribute provides legacy, read-only access to whether the Group Names feature is supported. " +
                     "The most significant bit, bit 7, SHALL be equal to bit 0 of the FeatureMap attribute. All other " +
                     "bits SHALL be 0.",
            xref: { document: "cluster", section: "1.3.6.1" },

            children: [
                {
                    tag: "datatype", name: "GroupNames", id: 0x7,
                    description: "The ability to store a name for a group."
                }
            ]
        },

        {
            tag: "command", name: "AddGroup", id: 0x0, access: "R F M", conformance: "M", direction: "request",
            response: "AddGroupResponse",
            details: "The AddGroup command allows a client to add group membership in a particular group for the server " +
                     "endpoint.",
            xref: { document: "cluster", section: "1.3.7.1" },
            children: [
                { tag: "datatype", name: "GroupId", id: 0x0, type: "group-id", conformance: "M", constraint: "min 1" },
                { tag: "datatype", name: "GroupName", id: 0x1, type: "string", conformance: "M", constraint: "max 16" }
            ]
        },

        {
            tag: "command", name: "ViewGroup", id: 0x1, access: "R F", conformance: "M", direction: "request",
            response: "ViewGroupResponse",
            details: "The ViewGroup command allows a client to request that the server responds with a ViewGroupResponse " +
                     "command containing the name string for a particular group.",
            xref: { document: "cluster", section: "1.3.7.2" },
            children: [ { tag: "datatype", name: "GroupId", id: 0x0, type: "group-id", conformance: "M", constraint: "min 1" } ]
        },

        {
            tag: "command", name: "GetGroupMembership", id: 0x2, access: "R F", conformance: "M",
            direction: "request", response: "GetGroupMembershipResponse",
            details: "The GetGroupMembership command allows a client to inquire about the group membership of the server " +
                     "endpoint, in a number of ways.",
            xref: { document: "cluster", section: "1.3.7.3" },

            children: [
                {
                    tag: "datatype", name: "GroupList", id: 0x0, type: "list", conformance: "M",
                    constraint: "all[min 1]",
                    children: [ { tag: "datatype", name: "entry", type: "group-id" } ]
                }
            ]
        },

        {
            tag: "command", name: "RemoveGroup", id: 0x3, access: "R F M", conformance: "M",
            direction: "request", response: "RemoveGroupResponse",
            details: "The RemoveGroup command allows a client to request that the server removes the membership for the " +
                     "server endpoint, if any, in a particular group.",
            xref: { document: "cluster", section: "1.3.7.4" },
            children: [ { tag: "datatype", name: "GroupId", id: 0x0, type: "group-id", conformance: "M", constraint: "min 1" } ]
        },

        {
            tag: "command", name: "RemoveAllGroups", id: 0x4, access: "R F M", conformance: "M",
            direction: "request", response: "status",
            details: "The RemoveAllGroups command allows a client to direct the server to remove all group associations " +
                     "for the server endpoint.",
            xref: { document: "cluster", section: "1.3.7.5" }
        },

        {
            tag: "command", name: "AddGroupIfIdentifying", id: 0x5, access: "R F M", conformance: "M",
            direction: "request", response: "status",
            details: "The AddGroupIfIdentifying command allows a client to add group membership in a particular group for " +
                     "the server endpoint, on condition that the endpoint is identifying itself. Identifying " +
                     "functionality is controlled using the Identify cluster, (see Identify).",
            xref: { document: "cluster", section: "1.3.7.6" },
            children: [
                { tag: "datatype", name: "GroupId", id: 0x0, type: "group-id", conformance: "M", constraint: "min 1" },
                { tag: "datatype", name: "GroupName", id: 0x1, type: "string", conformance: "M", constraint: "max 16" }
            ]
        },

        {
            tag: "command", name: "AddGroupResponse", id: 0x0, conformance: "M", direction: "response",
            details: "The AddGroupResponse is sent by the Groups cluster server in response to an AddGroup command. The " +
                     "AddGroupResponse command SHALL have the following data fields:",
            xref: { document: "cluster", section: "1.3.7.7" },
            children: [
                { tag: "datatype", name: "Status", id: 0x0, type: "enum8", conformance: "M", constraint: "desc" },
                { tag: "datatype", name: "GroupId", id: 0x1, type: "group-id", conformance: "M", constraint: "min 1" }
            ]
        },

        {
            tag: "command", name: "ViewGroupResponse", id: 0x1, conformance: "M", direction: "response",
            details: "The ViewGroupResponse command is sent by the Groups cluster server in response to a ViewGroup " +
                     "command.",
            xref: { document: "cluster", section: "1.3.7.8" },
            children: [
                { tag: "datatype", name: "Status", id: 0x0, type: "enum8", conformance: "M", constraint: "desc" },
                { tag: "datatype", name: "GroupId", id: 0x1, type: "group-id", conformance: "M", constraint: "min 1" },
                { tag: "datatype", name: "GroupName", id: 0x2, type: "string", conformance: "M", constraint: "max 16" }
            ]
        },

        {
            tag: "command", name: "GetGroupMembershipResponse", id: 0x2, conformance: "M",
            direction: "response",
            details: "The GetGroupMembershipResponse command is sent by the Groups cluster server in response to a " +
                     "GetGroupMembership command.",
            xref: { document: "cluster", section: "1.3.7.9" },

            children: [
                { tag: "datatype", name: "Capacity", id: 0x0, type: "uint8", conformance: "M", quality: "X" },
                {
                    tag: "datatype", name: "GroupList", id: 0x1, type: "list", conformance: "M",
                    constraint: "all[min 1]",
                    children: [ { tag: "datatype", name: "entry", type: "group-id" } ]
                }
            ]
        },

        {
            tag: "command", name: "RemoveGroupResponse", id: 0x3, conformance: "M", direction: "response",
            details: "The RemoveGroupResponse command is generated by the server in response to the receipt of a " +
                     "RemoveGroup command.",
            xref: { document: "cluster", section: "1.3.7.10" },
            children: [
                { tag: "datatype", name: "Status", id: 0x0, type: "enum8", conformance: "M", constraint: "desc" },
                { tag: "datatype", name: "GroupId", id: 0x1, type: "group-id", conformance: "M", constraint: "min 1" }
            ]
        }
    ]
});