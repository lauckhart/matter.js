/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "DoorLockController", id: 0xb, classification: "simple",
    details: "A Door Lock Controller is a device capable of controlling a door lock.",
    xref: { document: "device", section: "8.2" },

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [{
                tag: "requirement", name: "DeviceTypeList", default: [ { deviceType: 11, revision: 2 } ],
                element: "attribute"
            }]
        },

        {
            tag: "requirement", name: "Identify", id: 0x3, conformance: "[EZ, Initiator]",
            element: "clientCluster",
            xref: { document: "device", section: "8.2.3" },
            children: [{ tag: "requirement", name: "QUERY", conformance: "!Matter", element: "feature" }]
        },

        {
            tag: "requirement", name: "Groups", id: 0x4, conformance: "Zigbee", element: "clientCluster",
            xref: { document: "device", section: "8.2.3" }
        },
        {
            tag: "requirement", name: "Scenes", id: 0x5, conformance: "Zigbee", element: "clientCluster",
            xref: { document: "device", section: "8.2.3" }
        },
        {
            tag: "requirement", name: "DoorLock", id: 0x101, conformance: "M", element: "clientCluster",
            xref: { document: "device", section: "8.2.3" }
        },
        {
            tag: "requirement", name: "TimeSync", id: 0x38, conformance: "P, O", element: "serverCluster",
            xref: { document: "device", section: "8.2.3" }
        }
    ]
});
