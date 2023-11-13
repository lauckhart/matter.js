/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "WindowCovering", id: 0x202, classification: "simple",
    details: "This defines conformance to the Window Covering device type.",
    xref: { document: "device", section: "8.3" },

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [{
                tag: "requirement", name: "DeviceTypeList", default: [ { deviceType: 514, revision: 2 } ],
                element: "attribute"
            }]
        },

        {
            tag: "requirement", name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "8.3.4" },
            children: [{ tag: "requirement", name: "QUERY", conformance: "!Matter", element: "feature" }]
        },
        {
            tag: "requirement", name: "Groups", id: 0x4, conformance: "Awake, O", element: "serverCluster",
            xref: { document: "device", section: "8.3.4" }
        },
        {
            tag: "requirement", name: "Scenes", id: 0x5, conformance: "Awake, O", element: "serverCluster",
            xref: { document: "device", section: "8.3.4" }
        },

        {
            tag: "requirement", name: "WindowCovering", id: 0x102, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "8.3.4" },

            children: [
                { tag: "requirement", name: "ABSOLUTEPOSITION", conformance: "!Matter", element: "feature" },
                {
                    tag: "requirement", name: "GoToLiftPercentageLiftPercentageValue", conformance: "!Matter",
                    element: "commandField"
                },
                {
                    tag: "requirement", name: "GoToTiltPercentageTiltPercentageValue", conformance: "!Matter",
                    element: "commandField"
                },
                {
                    tag: "requirement", name: "GoToLiftPercentageLiftPercent100thsValue", conformance: "Matter",
                    element: "commandField"
                },
                {
                    tag: "requirement", name: "GoToTiltPercentageTiltPercent100thsValue", conformance: "Matter",
                    element: "commandField"
                }
            ]
        }
    ]
});
