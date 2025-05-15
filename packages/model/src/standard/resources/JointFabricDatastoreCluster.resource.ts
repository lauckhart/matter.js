/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { JointFabricDatastoreCluster } from "#index.js";

JointFabricDatastoreCluster.patch({
    details: "The Joint Fabric Datastore Cluster is a cluster that provides a mechanism for the Joint Fabric " +
        "Administrators to manage the set of Nodes, Groups, and Group membership among Nodes in the Joint " +
        "Fabric." +
        "\n" +
        "When an Ecosystem Administrator Node is commissioned onto the Joint Fabric, the Ecosystem " +
        "Administrator Node has no knowledge of what Nodes and Groups are present, or what set-up information " +
        "related to the Joint Fabric is provided by the user. To address lack of knowledge, the Joint Fabric " +
        "Datastore provides the information required for all Ecosystem Administrators to maintain a " +
        "consistent view of the Joint Fabric including Nodes, Groups, settings and privileges." +
        "\n" +
        "The Joint Fabric Datastore cluster server shall only be accessible on a Node which is acting as the " +
        "Joint Fabric Anchor Administrator. When not acting as the Joint Fabric Anchor Administrator, the " +
        "Joint Fabric Datastore cluster shall NOT be accessible." +
        "\n" +
        "The Admin level of access to the Joint Fabric Datastore cluster server shall be limited to JF " +
        "Administrator Nodes identified using the Administrator CAT." +
        "\n" +
        "NOTE Support for Joint Fabric Datastore cluster is provisional.",

    xref: { document: "core", section: "11.24" },

    children: [
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
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "Target device operation is pending" },
                { description: "Target device operation has been committed" },
                { description: "Target device delete operation is pending" }
            ]
        }
    ]
});
