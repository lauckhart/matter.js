/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "OccupancySensor", id: 0x107, classification: "simple",
    details: "An Occupancy Sensor is a measurement and sensing device that is capable of measuring and reporting " +
        "the occupancy state in a designated area.",
    xref: { document: "device", section: "7.3" },

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [{
                tag: "requirement", name: "DeviceTypeList", default: [ { deviceType: 263, revision: 2 } ],
                element: "attribute"
            }]
        },

        {
            tag: "requirement", name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "7.3.4" },
            children: [{ tag: "requirement", name: "QUERY", conformance: "!Matter", element: "feature" }]
        },
        {
            tag: "requirement", name: "Groups", id: 0x4, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "7.3.4" }
        },
        {
            tag: "requirement", name: "OccupancySensing", id: 0x406, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "7.3.4" }
        }
    ]
});
