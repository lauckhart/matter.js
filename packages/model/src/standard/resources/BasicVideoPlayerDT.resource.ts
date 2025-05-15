/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "BasicVideoPlayer", tag: "deviceType",
    classification: "simple",

    details: "This defines conformance to the Basic Video Player device type." +
        "\n" +
        "A Video Player (either Basic or Casting) represents a device that is able to play media to a " +
        "physical output or to a display screen which is part of the device." +
        "\n" +
        "A Basic Video Player has playback controls (play, pause, etc.) and keypad remote controls (up, down, " +
        "number input), but is not able to launch content and is not a content app platform (the Casting " +
        "Video Player device type is used for these functions)." +
        "\n" +
        "For example, a Basic Video Player can be a traditional TV device a physical media playback device " +
        "such as a DVD Player, or a device that provides input to another device like a TV or computer " +
        "monitor." +
        "\n" +
        "Please see Video Player Architecture for additional Basic Video Player requirements relating to " +
        "Video Player device endpoint composition, commissioning, feature representation in clusters, and UI " +
        "context.",

    xref: "device§10.2",

    children: [
        { name: "OnOff", tag: "requirement", xref: "device§10.2.4" },
        { name: "WakeOnLan", tag: "requirement", xref: "device§10.2.4" },
        { name: "Channel", tag: "requirement", xref: "device§10.2.4" },
        { name: "TargetNavigator", tag: "requirement", xref: "device§10.2.4" },
        { name: "MediaPlayback", tag: "requirement", xref: "device§10.2.4" },
        { name: "MediaInput", tag: "requirement", xref: "device§10.2.4" },
        { name: "LowPower", tag: "requirement", xref: "device§10.2.4" },
        { name: "KeypadInput", tag: "requirement", xref: "device§10.2.4" },
        { name: "AudioOutput", tag: "requirement", xref: "device§10.2.4" },
        { name: "ContentControl", tag: "requirement", xref: "device§10.2.4" },
        { name: "Messages", tag: "requirement", xref: "device§10.2.4" },

        {
            name: "conditions", tag: "field",
            children: [{
                name: "PhysicalInputs", tag: "field",
                description: "The device has physical inputs for media.",
                xref: "device§10.2.3"
            }]
        }
    ]
});
