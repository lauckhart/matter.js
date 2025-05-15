/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "ContentApp", tag: "deviceType",
    classification: "simple",
    details: "This defines conformance to the Content App device type." +
        "\n" +
        "A Content App is usually an application built by a Content Provider. A Casting Video Player with a " +
        "Content App Platform is able to launch Content Apps and represent these apps as separate endpoints.",
    xref: "device§10.5",

    children: [
        { name: "Binding", tag: "requirement", xref: "device§10.5.4" },
        { name: "Channel", tag: "requirement", xref: "device§10.5.4" },
        { name: "TargetNavigator", tag: "requirement", xref: "device§10.5.4" },
        { name: "MediaPlayback", tag: "requirement", xref: "device§10.5.4" },
        { name: "KeypadInput", tag: "requirement", xref: "device§10.5.4" },
        { name: "ContentLauncher", tag: "requirement", xref: "device§10.5.4" },
        { name: "ApplicationLauncher", tag: "requirement", xref: "device§10.5.4" },
        { name: "ApplicationBasic", tag: "requirement", xref: "device§10.5.4" },
        { name: "AccountLogin", tag: "requirement", xref: "device§10.5.4" },
        { name: "ContentAppObserver", tag: "requirement", xref: "device§10.5.4" },

        {
            name: "conditions", tag: "field",
            children: [{
                name: "ObserverClient", tag: "field",
                description: "The node is a client for ContentAppObservers.",
                xref: "device§10.5.3"
            }]
        }
    ]
});
