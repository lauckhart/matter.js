/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "Pump", id: 0x303, classification: "simple",
    details: "A Pump device is a pump that may have variable speed. It may have optional built-in sensors and a " +
        "regulation mechanism. It is typically used for pumping fluids like water.",
    xref: { document: "device", section: "5.3" },

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [{
                tag: "requirement", name: "DeviceTypeList", default: [ { deviceType: 771, revision: 2 } ],
                element: "attribute"
            }]
        },

        {
            tag: "requirement", name: "OnOff", id: 0x6, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "5.3.4" }
        },
        {
            tag: "requirement", name: "PumpConfigurationAndControl", id: 0x200, conformance: "M",
            element: "serverCluster",
            xref: { document: "device", section: "5.3.4" }
        },
        {
            tag: "requirement", name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "5.3.4" },
            children: [{ tag: "requirement", name: "QUERY", conformance: "!Matter", element: "feature" }]
        },
        {
            tag: "requirement", name: "LevelControl", id: 0x8, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "5.3.4" }
        },
        {
            tag: "requirement", name: "Scenes", id: 0x5, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "5.3.4" }
        },
        {
            tag: "requirement", name: "Groups", id: 0x4, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "5.3.4" }
        },
        {
            tag: "requirement", name: "TemperatureMeasurement", id: 0x402, conformance: "O",
            element: "clientCluster",
            xref: { document: "device", section: "5.3.4" }
        },
        {
            tag: "requirement", name: "PressureMeasurement", id: 0x403, conformance: "O",
            element: "clientCluster",
            xref: { document: "device", section: "5.3.4" }
        },
        {
            tag: "requirement", name: "FlowMeasurement", id: 0x404, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "5.3.4" }
        },
        {
            tag: "requirement", name: "OccupancySensing", id: 0x406, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "5.3.4" }
        }
    ]
});
