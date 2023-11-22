/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "TemperatureSensor", id: 0x302, classification: "simple",
    details: "A Temperature Sensor device reports measurements of temperature.",
    xref: { document: "device", section: "7.4" },

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [{
                tag: "requirement", name: "DeviceTypeList", default: [ { deviceType: 770, revision: 2 } ],
                element: "attribute"
            }]
        },

        {
            tag: "requirement", name: "TemperatureMeasurement", id: 0x402, conformance: "M",
            element: "serverCluster",
            xref: { document: "device", section: "7.4.4" }
        },
        {
            tag: "requirement", name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "7.4.4" }
        }
    ]
});
