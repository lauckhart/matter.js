/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "PowerSource", id: 0x11, classification: "utility",
    xref: { document: "device", section: "2.2" },

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [{
                tag: "requirement", name: "DeviceTypeList", default: [ { deviceType: 17, revision: 1 } ],
                element: "attribute"
            }]
        },

        {
            tag: "requirement", name: "PowerSource", id: 0x2f, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "2.2.3" }
        }
    ]
});
