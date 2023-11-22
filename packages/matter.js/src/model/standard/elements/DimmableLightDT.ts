/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "DimmableLight", id: 0x101, type: "OnOffLight", classification: "simple",
    details: "A Dimmable Light is a lighting device that is capable of being switched on or off and the intensity " +
        "of its light adjusted by means of a bound controller device such as a Dimmer Switch or a Color " +
        "Dimmer Switch. In addition, a Dimmable Light device is also capable of being switched by means of a " +
        "bound occupancy sensor or other device(s).",
    xref: { document: "device", section: "4.2" },

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [{
                tag: "requirement", name: "DeviceTypeList", default: [ { deviceType: 257, revision: 2 } ],
                element: "attribute"
            }]
        },

        {
            tag: "requirement", name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "4.2.4" },
            children: [
                { tag: "requirement", name: "QUERY", conformance: "!Matter", element: "feature" },
                { tag: "requirement", name: "TriggerEffect", conformance: "M", element: "command" }
            ]
        },

        {
            tag: "requirement", name: "Groups", id: 0x4, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "4.2.4" }
        },

        {
            tag: "requirement", name: "Scenes", id: 0x5, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "4.2.4" },
            children: [
                { tag: "requirement", name: "EnhancedAddScene", conformance: "M", element: "command" },
                { tag: "requirement", name: "EnhancedViewScene", conformance: "M", element: "command" },
                { tag: "requirement", name: "CopyScene", conformance: "M", element: "command" }
            ]
        },

        {
            tag: "requirement", name: "OnOff", id: 0x6, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "4.2.4" },
            children: [{ tag: "requirement", name: "LT", conformance: "M", element: "feature" }]
        },

        {
            tag: "requirement", name: "LevelControl", id: 0x8, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "4.2.4" },

            children: [
                { tag: "requirement", name: "OO", conformance: "M", element: "feature" },
                { tag: "requirement", name: "LT", conformance: "M", element: "feature" },
                { tag: "requirement", name: "CurrentLevel", constraint: "1 to 254", element: "attribute" },
                { tag: "requirement", name: "MinLevel", constraint: "1", element: "attribute" },
                { tag: "requirement", name: "MaxLevel", constraint: "254", element: "attribute" }
            ]
        },

        {
            tag: "requirement", name: "OccupancySensing", id: 0x406, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "4.2.4" }
        }
    ]
});
