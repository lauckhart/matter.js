/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { GroupKeyManagement } from "#index.js";

GroupKeyManagement.patch({
    details: "The Group Key Management cluster manages group keys for the node. The cluster is scoped to the node " +
        "and is a singleton for the node. This cluster maintains a list of groups supported by the node. Each " +
        "group list entry supports a single group, with a single group ID and single group key. Duplicate " +
        "groups are not allowed in the list. Additions or removal of a group entry are performed via " +
        "modifications of the list. Such modifications require Administer privilege." +
        "\n" +
        "Each group entry includes a membership list of zero of more endpoints that are members of the group " +
        "on the node. Modification of this membership list is done via the Groups cluster, which is" +
        "\n" +
        "scoped to an endpoint. Please see the System Model specification for more information on groups.",

    xref: { document: "core", section: "11.2" },

    children: [
        undefined,
        { children: [{ description: "CacheAndSync" }] },
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
                { description: "Message counter synchronization using trust-first" },
                { description: "Message counter synchronization using cache-and-sync" }
            ]
        },

        {
            children: [
                { description: "Indicates filtering of multicast messages for a specific Group ID" },
                { description: "Indicates not filtering of multicast messages" }
            ]
        }
    ]
});
