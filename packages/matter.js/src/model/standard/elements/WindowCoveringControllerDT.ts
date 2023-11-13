/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "WindowCoveringController", id: 0x203, classification: "simple",
    details: "A Window Covering Controller is a device that controls an automatic window covering.",
    xref: { document: "device", section: "8.4" },

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [{
                tag: "requirement", name: "DeviceTypeList", default: [ { deviceType: 515, revision: 2 } ],
                element: "attribute"
            }]
        },

        {
            tag: "requirement", name: "Identify", id: 0x3, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "8.4.4" },
            children: [{ tag: "requirement", name: "QUERY", conformance: "!Matter", element: "feature" }]
        },
        {
            tag: "requirement", name: "Groups", id: 0x4, conformance: "Awake, O", element: "clientCluster",
            xref: { document: "device", section: "8.4.4" }
        },
        {
            tag: "requirement", name: "Scenes", id: 0x5, conformance: "Awake, O", element: "clientCluster",
            xref: { document: "device", section: "8.4.4" }
        },
        {
            tag: "requirement", name: "WindowCovering", id: 0x102, conformance: "M", element: "clientCluster",
            xref: { document: "device", section: "8.4.4" },
            children: [{ tag: "requirement", name: "ABSOLUTEPOSITION", conformance: "!Matter", element: "feature" }]
        }
    ]
});
