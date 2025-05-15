/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { TargetNavigator } from "#index.js";

TargetNavigator.patch({
    details: "This cluster provides an interface for UX navigation within a set of targets on a device or " +
        "endpoint." +
        "\n" +
        "This cluster would be supported on Video Player devices or devices with navigable user interfaces. " +
        "This cluster would also be supported on endpoints with navigable user interfaces such as a Content " +
        "App. It supports listing a set of navigation targets, tracking and changing the current target." +
        "\n" +
        "The cluster server for Target Navigator is implemented by endpoints on a device that support UX " +
        "navigation." +
        "\n" +
        "When this cluster is implemented for a Content App endpoint, the Video Player device containing the " +
        "endpoint shall launch the Content App when a client invokes the NavigateTarget command.",

    xref: { document: "cluster", section: "6.11" },

    children: [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "Command succeeded" },
                { description: "Requested target was not found in the TargetList" },
                { description: "Target request is not allowed in current state." }
            ]
        }
    ]
});
