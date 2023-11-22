/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "HumiditySensor", id: 0x307, classification: "simple",
    details: "A humidity sensor (in most cases a Relative humidity sensor) reports humidity measurements.",
    xref: { document: "device", section: "7.7" },

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [{
                tag: "requirement", name: "DeviceTypeList", default: [ { deviceType: 775, revision: 2 } ],
                element: "attribute"
            }]
        },

        {
            tag: "requirement", name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "7.7.4" },
            children: [{ tag: "requirement", name: "QUERY", conformance: "!Matter", element: "feature" }]
        },
        {
            tag: "requirement", name: "RelativeHumidityMeasurement", id: 0x405, conformance: "M",
            element: "serverCluster",
            xref: { document: "device", section: "7.7.4" }
        }
    ]
});
