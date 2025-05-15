/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "CastingVideoClient", tag: "deviceType",
    classification: "simple",
    details: "This defines conformance to the Casting Video Client device type." +
        "\n" +
        "A Casting Video Client is a client that can launch content on a Casting Video Player, for example, a " +
        "Smart Speaker or a Content Provider phone app.",
    xref: "device§10.6",

    children: [
        { name: "OnOff", tag: "requirement", xref: "device§10.6.4" },
        { name: "LevelControl", tag: "requirement", xref: "device§10.6.4" },
        { name: "WakeOnLan", tag: "requirement", xref: "device§10.6.4" },
        { name: "Channel", tag: "requirement", xref: "device§10.6.4" },
        { name: "TargetNavigator", tag: "requirement", xref: "device§10.6.4" },
        { name: "MediaPlayback", tag: "requirement", xref: "device§10.6.4" },
        { name: "MediaInput", tag: "requirement", xref: "device§10.6.4" },
        { name: "LowPower", tag: "requirement", xref: "device§10.6.4" },
        { name: "KeypadInput", tag: "requirement", xref: "device§10.6.4" },
        { name: "ContentLauncher", tag: "requirement", xref: "device§10.6.4" },
        { name: "AudioOutput", tag: "requirement", xref: "device§10.6.4" },
        { name: "ApplicationLauncher", tag: "requirement", xref: "device§10.6.4" },
        { name: "ApplicationBasic", tag: "requirement", xref: "device§10.6.4" },
        { name: "AccountLogin", tag: "requirement", xref: "device§10.6.4" },
        { name: "ContentControl", tag: "requirement", xref: "device§10.6.4" },
        { name: "ContentAppObserver", tag: "requirement", xref: "device§10.6.4" },
        { name: "Messages", tag: "requirement", xref: "device§10.6.4" }
    ]
});
