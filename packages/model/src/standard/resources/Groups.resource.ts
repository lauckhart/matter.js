/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Groups } from "#index.js";

Groups.patch({
    details: "The Groups cluster manages, per endpoint, the content of the node-wide Group Table that is part of " +
        "the underlying interaction layer." +
        "\n" +
        "In a network supporting fabrics, group IDs referenced by attributes or other elements of this " +
        "cluster are scoped to the accessing fabric." +
        "\n" +
        "The Groups cluster is scoped to the endpoint. Groups cluster commands support discovering the " +
        "endpoint membership in a group, adding the endpoint to a group, removing the endpoint from a group, " +
        "removing endpoint membership from all groups. All commands defined in this cluster shall only affect " +
        "groups scoped to the accessing fabric." +
        "\n" +
        "When group names are supported, the server stores a name string, which is set by the client for each " +
        "assigned group and indicated in response to a client request." +
        "\n" +
        "Note that configuration of group addresses for outgoing commands is achieved using the Message Layer " +
        "mechanisms where the Group Table is not involved. Hence this cluster does not play a part in that.",

    xref: { document: "cluster", section: "1.3" },

    children: [
        undefined,
        { children: [{ description: "GroupNames" }] },
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
        { children: [{ description: "The ability to store a name for a group." }] }
    ]
});
