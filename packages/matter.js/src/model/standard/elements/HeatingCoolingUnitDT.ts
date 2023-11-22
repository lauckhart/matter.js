/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "HeatingCoolingUnit", id: 0x300, classification: "simple",
    details: "A Heating/Cooling Unit is a device capable of heating or cooling a space in a house. It is not " +
        "mandatory to provide both functionalities (for example, the device may just heat but not cool). It " +
        "may be an indoor air handler." +
        "\n" +
        "NOTE Heating/Cooling Unit device type is provisional.",
    xref: { document: "device", section: "9.1" },

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [{
                tag: "requirement", name: "DeviceTypeList", default: [ { deviceType: 768, revision: 2 } ],
                element: "attribute"
            }]
        },

        {
            tag: "requirement", name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "9.1.4" },
            children: [{ tag: "requirement", name: "QUERY", conformance: "!Matter", element: "feature" }]
        },
        {
            tag: "requirement", name: "Groups", id: 0x4, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "9.1.4" }
        },
        {
            tag: "requirement", name: "OnOff", id: 0x6, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "9.1.4" }
        },
        {
            tag: "requirement", name: "Thermostat", id: 0x201, conformance: "M", element: "clientCluster",
            xref: { document: "device", section: "9.1.4" }
        },
        {
            tag: "requirement", name: "Scenes", id: 0x5, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "9.1.4" }
        },
        {
            tag: "requirement", name: "LevelControl", id: 0x8, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "9.1.4" }
        },
        {
            tag: "requirement", name: "FanControl", id: 0x202, conformance: "P, O", element: "serverCluster",
            xref: { document: "device", section: "9.1.4" }
        }
    ]
});
