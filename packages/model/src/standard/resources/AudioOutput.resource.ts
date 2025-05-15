/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { AudioOutput } from "#index.js";

AudioOutput.patch({
    details: "This cluster provides an interface for controlling the Output on a Video Player device such as a TV." +
        "\n" +
        "This cluster would be supported on a device with audio outputs like a Video Player device (Smart TV, " +
        "TV Setup Top Box, Smart Speaker, etc)." +
        "\n" +
        "This cluster provides the list of available outputs and provides commands for selecting and renaming " +
        "them." +
        "\n" +
        "The cluster server for Audio Output is implemented by a device that has configurable audio output.",

    xref: { document: "cluster", section: "6.5" },

    children: [
        undefined,
        { children: [{ description: "NameUpdates" }] },
        undefined,
        undefined,
        undefined,
        undefined,
        { children: [{ description: "HDMI" }] }
    ]
});
