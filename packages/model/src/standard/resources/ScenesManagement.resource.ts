/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ScenesManagement } from "#index.js";

ScenesManagement.patch({
    details: "The Scenes Management cluster provides attributes and commands for setting up and recalling scenes. " +
        "Each scene corresponds to a set of stored values of specified attributes for one or more clusters on " +
        "the same end point as the Scenes Management cluster." +
        "\n" +
        "In most cases scenes are associated with a particular group identifier. Scenes may also exist " +
        "without a group, in which case the value 0 replaces the group identifier. Note that extra care is " +
        "required in these cases to avoid a scene identifier collision, and that commands related to scenes " +
        "without a group may only be unicast, i.e., they shall NOT be multicast or broadcast." +
        "\n" +
        "NOTE Support for Scenes Management cluster is provisional.",

    xref: { document: "cluster", section: "1.4" },

    children: [
        undefined,
        { children: [{ description: "SceneNames" }] },
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
        { children: [{ description: "Copy all scenes in the scene table" }] }
    ]
});
