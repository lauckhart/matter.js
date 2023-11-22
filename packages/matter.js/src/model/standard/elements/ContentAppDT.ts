/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "ContentApp", id: 0x24, classification: "simple",
    details: "This defines conformance to the Content App device type." +
        "\n" +
        "A Content App is usually an application built by a Content Provider. A Casting Video Player with a " +
        "Content App Platform is able to launch Content Apps and represent these apps as separate endpoints.",
    xref: { document: "device", section: "10.5" },

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [{
                tag: "requirement", name: "DeviceTypeList", default: [ { deviceType: 36, revision: 1 } ],
                element: "attribute"
            }]
        },

        {
            tag: "requirement", name: "Channel", id: 0x504, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "10.5.4" }
        },
        {
            tag: "requirement", name: "TargetNavigator", id: 0x505, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "10.5.4" }
        },
        {
            tag: "requirement", name: "MediaPlayback", id: 0x506, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "10.5.4" }
        },
        {
            tag: "requirement", name: "KeypadInput", id: 0x509, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "10.5.4" }
        },
        {
            tag: "requirement", name: "ContentLauncher", id: 0x50a, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "10.5.4" }
        },

        {
            tag: "requirement", name: "ApplicationLauncher", id: 0x50c, conformance: "M",
            element: "serverCluster",
            xref: { document: "device", section: "10.5.4" },
            children: [
                { tag: "requirement", name: "APPLICATIONPLATFORM", conformance: "Shall, NOT, AP", element: "feature" }
            ]
        },

        {
            tag: "requirement", name: "ApplicationBasic", id: 0x50d, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "10.5.4" }
        },
        {
            tag: "requirement", name: "AccountLogin", id: 0x50e, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "10.5.4" }
        }
    ]
});
