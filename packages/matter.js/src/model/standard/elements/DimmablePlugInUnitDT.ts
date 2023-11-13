/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "DimmablePlugInUnit", id: 0x10b, classification: "simple",
    details: "A Dimmable Plug-In Unit is a device that is capable of being switched on or off and have its level " +
        "adjusted by means of a bound controller device such as a Dimmer Switch or a Color Dimmer Switch. " +
        "The Dimmable Plug-in Unit is typically used to control a conventional non-communicating light " +
        "through its mains connection using phase cutting.",
    xref: { document: "device", section: "5.2" },

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [{
                tag: "requirement", name: "DeviceTypeList", default: [ { deviceType: 267, revision: 2 } ],
                element: "attribute"
            }]
        },

        {
            tag: "requirement", name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "5.2.4" },
            children: [
                { tag: "requirement", name: "QUERY", conformance: "!Matter", element: "feature" },
                { tag: "requirement", name: "TriggerEffect", conformance: "M", element: "command" }
            ]
        },

        {
            tag: "requirement", name: "Groups", id: 0x4, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "5.2.4" }
        },

        {
            tag: "requirement", name: "Scenes", id: 0x5, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "5.2.4" },
            children: [
                { tag: "requirement", name: "EnhancedAddScene", conformance: "M", element: "command" },
                { tag: "requirement", name: "EnhancedViewScene", conformance: "M", element: "command" },
                { tag: "requirement", name: "CopyScene", conformance: "M", element: "command" }
            ]
        },

        {
            tag: "requirement", name: "OnOff", id: 0x6, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "5.2.4" },
            children: [{ tag: "requirement", name: "LT", conformance: "M", element: "feature" }]
        },

        {
            tag: "requirement", name: "LevelControl", id: 0x8, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "5.2.4" },

            children: [
                { tag: "requirement", name: "OO", conformance: "M", element: "feature" },
                { tag: "requirement", name: "LT", conformance: "M", element: "feature" },
                { tag: "requirement", name: "CurrentLevel", constraint: "1 to 254", element: "attribute" },
                { tag: "requirement", name: "MinLevel", constraint: "1", element: "attribute" },
                { tag: "requirement", name: "MaxLevel", constraint: "254", element: "attribute" }
            ]
        }
    ]
});
