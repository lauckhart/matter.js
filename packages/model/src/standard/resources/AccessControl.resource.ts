/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { AccessControl } from "#index.js";

AccessControl.patch({
    details: "The Access Control Cluster exposes a data model view of a Node’s Access Control List (ACL), which " +
        "codifies the rules used to manage and enforce Access Control for the Node’s endpoints and their " +
        "associated cluster instances. Access to this Access Control Cluster itself requires a special " +
        "Administer privilege level, such that only Nodes granted such privilege (hereafter termed " +
        "\"Administrators\") can manage the Access Control Cluster." +
        "\n" +
        "The Access Control Cluster shall be present on the root node endpoint of each Node, and shall NOT be " +
        "present on any other Endpoint of any Node.",

    xref: { document: "core", section: "9.10" },

    children: [
        undefined,
        { children: [{ description: "Extension" }, { description: "ManagedDevice" }] },
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "Entry or extension was changed" },
                { description: "Entry or extension was added" },
                { description: "Entry or extension was removed" }
            ]
        },

        {
            children: [
                { description: "Can read and observe all (except Access Control Cluster and as seen by a non-Proxy)" },
                { description: "Can read and observe all (as seen by a Proxy)" },
                {
                    description: "View privileges, and can perform the primary function of this Node (except Access Control Cluster)"
                },
                {
                    description: "Operate privileges, and can modify persistent configuration of this Node (except Access Control Cluster)"
                },
                { description: "Manage privileges, and can observe and modify the Access Control Cluster" }
            ]
        },

        {
            children: [
                { description: "Clients on this fabric are currently forbidden from reading and writing an attribute" },
                { description: "Clients on this fabric are currently forbidden from writing an attribute" },
                { description: "Clients on this fabric are currently forbidden from invoking a command" },
                { description: "Clients on this fabric are currently forbidden from reading an event" }
            ]
        },

        {
            children: [
                { description: "Passcode authenticated session" },
                { description: "Certificate authenticated session" },
                { description: "Group authenticated session" }
            ]
        }
    ]
});
