/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "ColorDimmerSwitch", id: 0x105, type: "DimmerSwitch",
    classification: "simple",
    details: "A Color Dimmer Switch is a controller device that, when bound to a lighting device such as an " +
        "Extended Color Light, is capable of being used to adjust the color of the light being emitted.",
    xref: { document: "device", section: "6.3" },

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [{
                tag: "requirement", name: "DeviceTypeList", default: [ { deviceType: 261, revision: 2 } ],
                element: "attribute"
            }]
        },

        {
            tag: "requirement", name: "Identify", id: 0x3, conformance: "M", element: "clientCluster",
            xref: { document: "device", section: "6.3.4" },
            children: [{ tag: "requirement", name: "QUERY", conformance: "!Matter", element: "feature" }]
        },
        {
            tag: "requirement", name: "Groups", id: 0x4, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "6.3.4" }
        },
        {
            tag: "requirement", name: "Scenes", id: 0x5, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "6.3.4" }
        },
        {
            tag: "requirement", name: "OnOff", id: 0x6, conformance: "M", element: "clientCluster",
            xref: { document: "device", section: "6.3.4" }
        },
        {
            tag: "requirement", name: "LevelControl", id: 0x8, conformance: "M", element: "clientCluster",
            xref: { document: "device", section: "6.3.4" }
        },
        {
            tag: "requirement", name: "ColorControl", id: 0x300, conformance: "M", element: "clientCluster",
            xref: { document: "device", section: "6.3.4" }
        }
    ]
});
