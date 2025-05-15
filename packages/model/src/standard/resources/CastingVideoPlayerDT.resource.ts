/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { CastingVideoPlayerDt } from "#index.js";

CastingVideoPlayerDt.patch({
    classification: "simple",

    details: "This defines conformance to the Casting Video Player device type." +
        "\n" +
        "A Video Player (either Basic or Casting) represents a device that is able to play media to a " +
        "physical output or to a display screen which is part of the device." +
        "\n" +
        "A Casting Video Player has basic controls for playback (play, pause, etc.) and keypad input (up, " +
        "down, number input), and is able to launch content." +
        "\n" +
        "For example, a Casting Video Player can be a smart TV device, a TV Set Top Box, or a content " +
        "streaming device that provides input to another device like a TV or computer monitor." +
        "\n" +
        "Please see Video Player Architecture for additional Casting Video Player requirements relating to " +
        "Video Player device endpoint composition, commissioning, feature representation in clusters, and UI " +
        "context.",

    xref: "device§10.3",

    children: [
        undefined,
        { xref: "device§10.3.4" },
        { xref: "device§10.3.4" },
        { xref: "device§10.3.4" },
        { xref: "device§10.3.4" },
        { xref: "device§10.3.4" },
        { xref: "device§10.3.4" },
        { xref: "device§10.3.4" },
        { xref: "device§10.3.4" },
        { xref: "device§10.3.4" },
        { xref: "device§10.3.4" },
        { xref: "device§10.3.4" },
        { xref: "device§10.3.4" },
        { xref: "device§10.3.4" },
        { xref: "device§10.3.4" },

        {
            children: [
                {
                    description: "The device includes a Content App Platform. A Content App is usually an application built by a Content Provider. A Casting Video Player with a Content App Platform is able to launch Content Apps and represent these apps as separate endpoints.",
                    xref: "device§10.3.3"
                },
                { description: "The device has physical inputs for media.", xref: "device§10.3.3" }
            ]
        }
    ]
});
