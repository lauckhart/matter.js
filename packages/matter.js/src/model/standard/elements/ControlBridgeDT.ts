/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "ControlBridge", id: 0x840, classification: "simple",
    details: "A Control Bridge is a controller device that, when bound to a lighting device such as an Extended " +
        "Color Light, is capable of being used to switch the device on or off, adjust the intensity of the " +
        "light being emitted and adjust the color of the light being emitted. In addition, a Control Bridge " +
        "device is capable of being used for setting scenes.",
    xref: { document: "device", section: "6.4" },

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [{
                tag: "requirement", name: "DeviceTypeList", default: [ { deviceType: 2112, revision: 2 } ],
                element: "attribute"
            }]
        },

        {
            tag: "requirement", name: "Identify", id: 0x3, conformance: "M", element: "clientCluster",
            xref: { document: "device", section: "6.4.4" },
            children: [{ tag: "requirement", name: "QUERY", conformance: "!Matter", element: "feature" }]
        },
        {
            tag: "requirement", name: "Groups", id: 0x4, conformance: "M", element: "clientCluster",
            xref: { document: "device", section: "6.4.4" }
        },
        {
            tag: "requirement", name: "Scenes", id: 0x5, conformance: "M", element: "clientCluster",
            xref: { document: "device", section: "6.4.4" }
        },
        {
            tag: "requirement", name: "OnOff", id: 0x6, conformance: "M", element: "clientCluster",
            xref: { document: "device", section: "6.4.4" }
        },
        {
            tag: "requirement", name: "LevelControl", id: 0x8, conformance: "M", element: "clientCluster",
            xref: { document: "device", section: "6.4.4" }
        },
        {
            tag: "requirement", name: "ColorControl", id: 0x300, conformance: "M", element: "clientCluster",
            xref: { document: "device", section: "6.4.4" }
        },
        {
            tag: "requirement", name: "IlluminanceMeasurement", id: 0x400, conformance: "O",
            element: "clientCluster",
            xref: { document: "device", section: "6.4.4" }
        },
        {
            tag: "requirement", name: "OccupancySensing", id: 0x406, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "6.4.4" }
        }
    ]
});
