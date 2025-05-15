/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MediaInput } from "#index.js";

MediaInput.patch({
    details: "This cluster provides an interface for controlling the Input Selector on a media device such as a " +
        "Video Player." +
        "\n" +
        "This cluster would be implemented on TV and other media streaming devices, as well as devices that " +
        "provide input to or output from such devices." +
        "\n" +
        "This cluster provides the list of available inputs and provides commands for selecting and renaming " +
        "them." +
        "\n" +
        "The cluster server for Media Input is implemented by a device that has selectable input, such as a " +
        "Video Player device.",

    xref: { document: "cluster", section: "6.9" },

    children: [
        undefined,
        { children: [{ description: "NameUpdates" }] },
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        { children: [{ description: "Indicates content not coming from a physical input." }] }
    ]
});
