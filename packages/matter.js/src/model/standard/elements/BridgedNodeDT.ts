/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "BridgedNode", id: 0x13, classification: "simple",
    details: "This defines conformance for a Bridged Node root endpoint. This endpoint is akin to a \"read me " +
        "first\" endpoint that describes itself and any other endpoints that make up the Bridged Node. A " +
        "Bridged Node endpoint represents a device on a foreign network, but is not the root endpoint of the " +
        "bridge itself.",
    xref: { document: "device", section: "2.6" },

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [{
                tag: "requirement", name: "DeviceTypeList", default: [ { deviceType: 19, revision: 1 } ],
                element: "attribute"
            }]
        },

        {
            tag: "requirement", name: "BridgedDeviceBasicInformation", conformance: "M",
            element: "serverCluster", quality: "I",
            xref: { document: "device", section: "2.6.4" }
        },
        {
            tag: "requirement", name: "PowerSourceConfiguration", conformance: "BridgedPowerSourceInfo",
            element: "serverCluster", quality: "I",
            xref: { document: "device", section: "2.6.4" }
        },
        {
            tag: "requirement", name: "PowerSource", conformance: "BridgedPowerSourceInfo",
            element: "serverCluster",
            xref: { document: "device", section: "2.6.4" }
        }
    ]
});
