/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const WindowCoveringDt = DeviceType({
    name: "WindowCovering", id: 0x202, classification: "simple",
    details: "This defines conformance to the Window Covering device type.",
    xref: { document: "device", section: "8.3" },

    children: [
        Requirement({
            name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [Requirement({ name: "DeviceTypeList", default: [ { deviceType: 514, revision: 3 } ], element: "attribute" })]
        }),
        Requirement({
            name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "8.3.4" }
        }),
        Requirement({
            name: "Groups", id: 0x4, conformance: "Active, O", element: "serverCluster",
            xref: { document: "device", section: "8.3.4" }
        }),
        Requirement({
            name: "ScenesManagement", id: 0x62, conformance: "P, Active, O", element: "serverCluster",
            xref: { document: "device", section: "8.3.4" }
        }),

        Requirement({
            name: "WindowCovering", id: 0x102, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "8.3.4" },
            children: [
                Requirement({ name: "ABSOLUTEPOSITION", conformance: "Zigbee", element: "feature" }),
                Requirement({ name: "GoToLiftPercentage", conformance: "Matter", element: "commandField" }),
                Requirement({ name: "GoToTiltPercentage", conformance: "Matter", element: "commandField" })
            ]
        })
    ]
});

Matter.children.push(WindowCoveringDt);
