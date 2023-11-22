/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "OnOffLightSwitch", id: 0x103, classification: "simple",
    details: "An On/Off Light Switch is a controller device that, when bound to a lighting device such as an " +
        "On/Off Light, is capable of being used to switch the device on or off.",
    xref: { document: "device", section: "6.1" },

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [{
                tag: "requirement", name: "DeviceTypeList", default: [ { deviceType: 259, revision: 2 } ],
                element: "attribute"
            }]
        },

        {
            tag: "requirement", name: "Identify", id: 0x3, conformance: "M", element: "clientCluster",
            xref: { document: "device", section: "6.1.4" },
            children: [{ tag: "requirement", name: "QUERY", conformance: "!Matter", element: "feature" }]
        },
        {
            tag: "requirement", name: "Groups", id: 0x4, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "6.1.4" }
        },
        {
            tag: "requirement", name: "Scenes", id: 0x5, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "6.1.4" }
        },
        {
            tag: "requirement", name: "OnOff", id: 0x6, conformance: "M", element: "clientCluster",
            xref: { document: "device", section: "6.1.4" }
        }
    ]
});
