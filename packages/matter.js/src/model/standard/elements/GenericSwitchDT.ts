/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "GenericSwitch", id: 0xf, classification: "simple",
    details: "This defines conformance for the Generic Switch device type.",
    xref: { document: "device", section: "6.6" },

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [{
                tag: "requirement", name: "DeviceTypeList", default: [ { deviceType: 15, revision: 1 } ],
                element: "attribute"
            }]
        },

        {
            tag: "requirement", name: "Identify", conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "6.6.4" }
        },
        {
            tag: "requirement", name: "Switch", conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "6.6.4" }
        },
        {
            tag: "requirement", name: "FixedLabel", conformance: "desc", element: "serverCluster",
            xref: { document: "device", section: "6.6.4" }
        }
    ]
});
