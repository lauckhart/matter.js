/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "Fan", id: 0x2b, classification: "simple",
    details: "This defines conformance to the Fan device type." +
        "\n" +
        "NOTE Support for Fan device type is provisional.",
    xref: { document: "device", section: "9.3" },

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [{
                tag: "requirement", name: "DeviceTypeList", default: [ { deviceType: 43, revision: 1 } ],
                element: "attribute"
            }]
        },

        {
            tag: "requirement", name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "9.3.4" },
            children: [{ tag: "requirement", name: "QUERY", conformance: "!Matter", element: "feature" }]
        },
        {
            tag: "requirement", name: "Groups", id: 0x4, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "9.3.4" }
        },

        {
            tag: "requirement", name: "FanControl", id: 0x202, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "9.3.4" },
            children: [{
                tag: "requirement", name: "FanModeSequence", access: "R VO", conformance: "Matter",
                element: "attribute"
            }]
        }
    ]
});
