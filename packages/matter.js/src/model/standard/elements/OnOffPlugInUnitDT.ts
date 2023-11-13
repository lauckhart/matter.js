/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "OnOffPlugInUnit", id: 0x10a, classification: "simple",
    details: "An On/Off Plug-in Unit is a device that is capable of being switched on or off by means of a bound " +
        "controller device such as an On/Off Light Switch or a Dimmer Switch. The On/Off Plug-in Unit is " +
        "typically used to control a conventional non-communicating light by switching its mains connection. " +
        "Other appliances can be controlled this way as well.",
    xref: { document: "device", section: "5.1" },

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [{
                tag: "requirement", name: "DeviceTypeList", default: [ { deviceType: 266, revision: 2 } ],
                element: "attribute"
            }]
        },

        {
            tag: "requirement", name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "5.1.4" }
        },
        {
            tag: "requirement", name: "Groups", id: 0x4, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "5.1.4" }
        },
        {
            tag: "requirement", name: "Scenes", id: 0x5, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "5.1.4" }
        },
        {
            tag: "requirement", name: "OnOff", id: 0x6, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "5.1.4" }
        },
        {
            tag: "requirement", name: "LevelControl", id: 0x8, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "5.1.4" }
        }
    ]
});
