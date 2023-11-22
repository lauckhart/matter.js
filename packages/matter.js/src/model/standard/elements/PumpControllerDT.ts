/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "PumpController", id: 0x304, classification: "simple",
    details: "A Pump Controller device is capable of configuring and controlling a Pump device.",
    xref: { document: "device", section: "6.5" },

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [{
                tag: "requirement", name: "DeviceTypeList", default: [ { deviceType: 772, revision: 2 } ],
                element: "attribute"
            }]
        },

        {
            tag: "requirement", name: "Binding", id: 0x1e, conformance: "M", element: "clientCluster",
            xref: { document: "device", section: "6.5.3" }
        },
        {
            tag: "requirement", name: "OnOff", id: 0x6, conformance: "M", element: "clientCluster",
            xref: { document: "device", section: "6.5.3" }
        },
        {
            tag: "requirement", name: "PumpConfigurationAndControl", id: 0x200, conformance: "M",
            element: "clientCluster",
            xref: { document: "device", section: "6.5.3" }
        },
        {
            tag: "requirement", name: "Identify", id: 0x3, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "6.5.3" },
            children: [{ tag: "requirement", name: "QUERY", conformance: "!Matter", element: "feature" }]
        },
        {
            tag: "requirement", name: "Groups", id: 0x4, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "6.5.3" }
        },
        {
            tag: "requirement", name: "Scenes", id: 0x5, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "6.5.3" }
        },
        {
            tag: "requirement", name: "LevelControl", id: 0x8, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "6.5.3" }
        },
        {
            tag: "requirement", name: "TemperatureMeasurement", id: 0x402, conformance: "O",
            element: "clientCluster",
            xref: { document: "device", section: "6.5.3" }
        },
        {
            tag: "requirement", name: "PressureMeasurement", id: 0x403, conformance: "O",
            element: "clientCluster",
            xref: { document: "device", section: "6.5.3" }
        },
        {
            tag: "requirement", name: "FlowMeasurement", id: 0x404, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "6.5.3" }
        }
    ]
});
