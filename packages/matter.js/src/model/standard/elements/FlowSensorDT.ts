/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "FlowSensor", id: 0x306, classification: "simple",
    details: "A Flow Sensor device measures and reports the flow rate of a fluid.",
    xref: { document: "device", section: "7.6" },

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [{
                tag: "requirement", name: "DeviceTypeList", default: [ { deviceType: 774, revision: 2 } ],
                element: "attribute"
            }]
        },

        {
            tag: "requirement", name: "FlowMeasurement", id: 0x404, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "7.6.4" }
        },
        {
            tag: "requirement", name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "7.6.4" },
            children: [{ tag: "requirement", name: "QUERY", conformance: "!Matter", element: "feature" }]
        }
    ]
});
