/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "OtaProvider", id: 0x14, classification: "utility",
    details: "An OTA Provider is a node that is capable of providing an OTA software update to other nodes on the " +
        "same fabric.",
    xref: { document: "device", section: "2.4" },

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [{
                tag: "requirement", name: "DeviceTypeList", default: [ { deviceType: 20, revision: 1 } ],
                element: "attribute"
            }]
        },

        {
            tag: "requirement", name: "OtaSoftwareUpdateRequestor", conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "2.4.3" }
        },
        {
            tag: "requirement", name: "OtaSoftwareUpdateProvider", conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "2.4.3" }
        }
    ]
});
