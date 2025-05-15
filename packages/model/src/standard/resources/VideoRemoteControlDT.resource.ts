/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "VideoRemoteControl", tag: "deviceType",
    classification: "simple",
    details: "This defines conformance to the Video Remote Control device type." +
        "\n" +
        "A Video Remote Control is a client that can control a Video Player, for example, a traditional " +
        "universal remote control.",
    xref: "device§10.7",

    children: [
        { name: "OnOff", tag: "requirement", xref: "device§10.7.4" },
        { name: "LevelControl", tag: "requirement", xref: "device§10.7.4" },
        { name: "WakeOnLan", tag: "requirement", xref: "device§10.7.4" },
        { name: "Channel", tag: "requirement", xref: "device§10.7.4" },
        { name: "TargetNavigator", tag: "requirement", xref: "device§10.7.4" },
        { name: "MediaPlayback", tag: "requirement", xref: "device§10.7.4" },
        { name: "MediaInput", tag: "requirement", xref: "device§10.7.4" },
        { name: "LowPower", tag: "requirement", xref: "device§10.7.4" },
        { name: "KeypadInput", tag: "requirement", xref: "device§10.7.4" },
        { name: "ContentLauncher", tag: "requirement", xref: "device§10.7.4" },
        { name: "AudioOutput", tag: "requirement", xref: "device§10.7.4" },
        { name: "ApplicationLauncher", tag: "requirement", xref: "device§10.7.4" },
        { name: "AccountLogin", tag: "requirement", xref: "device§10.7.4" },
        { name: "ContentControl", tag: "requirement", xref: "device§10.7.4" }
    ]
});
