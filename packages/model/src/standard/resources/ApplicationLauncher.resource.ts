/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ApplicationLauncher } from "#index.js";

ApplicationLauncher.patch({
    details: "This cluster provides an interface for launching applications on a Video Player device such as a TV." +
        "\n" +
        "This cluster is supported on endpoints that can launch Applications, such as a Casting Video Player " +
        "device with a Content App Platform. It supports identifying an Application by global identifier from " +
        "a given catalog, and launching it. It also supports tracking the currently in-focus Application." +
        "\n" +
        "Depending on the support for the Application Platform feature, the cluster can either support " +
        "launching the application corresponding to the endpoint on which the cluster is supported (AP " +
        "feature not supported) or it can support launching any application (AP feature supported).",

    xref: { document: "cluster", section: "6.4" },

    children: [
        undefined,
        { children: [{ description: "ApplicationPlatform" }] },
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "Command succeeded" },
                { description: "Requested app is not available" },
                { description: "Video platform unable to honor command" },
                { description: "User approval for app download is pending" },
                { description: "Downloading the requested app" },
                { description: "Installing the requested app" }
            ]
        }
    ]
});
