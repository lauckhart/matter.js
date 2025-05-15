/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ApplicationBasic } from "#index.js";

ApplicationBasic.patch({
    details: "This cluster provides information about a Content App running on a Video Player device which is " +
        "represented as an endpoint (see Device Type Library document)." +
        "\n" +
        "The cluster server for this cluster should be supported on each endpoint that represents a Content " +
        "App on a Video Player device. This cluster provides identification information about the Content App " +
        "such as vendor and product.",

    xref: { document: "cluster", section: "6.3" },

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

        {
            children: [
                { description: "Application is not running." },
                { description: "Application is running, is visible to the user, and is the active target for input." },
                { description: "Application is running but not visible to the user." },
                { description: "Application is running and visible, but is not the active target for input." }
            ]
        }
    ]
});
