/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "VideoRemoteControl", id: 0x2a, classification: "simple",
    details: "This defines conformance to the Video Remote Control device type." +
        "\n" +
        "A Video Remote Control is a client that can control a Video Player, for example, a traditional " +
        "universal remote control.",
    xref: { document: "device", section: "10.7" },

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [{
                tag: "requirement", name: "DeviceTypeList", default: [ { deviceType: 42, revision: 1 } ],
                element: "attribute"
            }]
        },

        {
            tag: "requirement", name: "OnOff", id: 0x6, conformance: "M", element: "clientCluster",
            xref: { document: "device", section: "10.7.4" }
        },
        {
            tag: "requirement", name: "LevelControl", id: 0x8, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "10.7.4" }
        },
        {
            tag: "requirement", name: "WakeOnLan", id: 0x503, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "10.7.4" }
        },
        {
            tag: "requirement", name: "Channel", id: 0x504, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "10.7.4" }
        },
        {
            tag: "requirement", name: "TargetNavigator", id: 0x505, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "10.7.4" }
        },
        {
            tag: "requirement", name: "MediaPlayback", id: 0x506, conformance: "M", element: "clientCluster",
            xref: { document: "device", section: "10.7.4" }
        },
        {
            tag: "requirement", name: "MediaInput", id: 0x507, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "10.7.4" }
        },
        {
            tag: "requirement", name: "LowPower", id: 0x508, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "10.7.4" }
        },
        {
            tag: "requirement", name: "KeypadInput", id: 0x509, conformance: "M", element: "clientCluster",
            xref: { document: "device", section: "10.7.4" }
        },
        {
            tag: "requirement", name: "ContentLauncher", id: 0x50a, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "10.7.4" }
        },
        {
            tag: "requirement", name: "AudioOutput", id: 0x50b, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "10.7.4" }
        },
        {
            tag: "requirement", name: "ApplicationLauncher", id: 0x50c, conformance: "O",
            element: "clientCluster",
            xref: { document: "device", section: "10.7.4" }
        },
        {
            tag: "requirement", name: "AccountLogin", id: 0x50e, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "10.7.4" }
        }
    ]
});
