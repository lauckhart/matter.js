/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "OtaRequestor", id: 0x12, classification: "utility",
    details: "An OTA Requestor is a device that is capable of receiving an OTA software update.",
    xref: { document: "device", section: "2.3" },

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [{
                tag: "requirement", name: "DeviceTypeList", default: [ { deviceType: 18, revision: 1 } ],
                element: "attribute"
            }]
        },

        {
            tag: "requirement", name: "OtaSoftwareUpdateRequestor", conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "2.3.3" }
        },
        {
            tag: "requirement", name: "OtaSoftwareUpdateProvider", conformance: "M", element: "clientCluster",
            xref: { document: "device", section: "2.3.3" }
        }
    ]
});
