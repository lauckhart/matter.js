/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "ExtendedColorLight", id: 0x10d, type: "ColorTemperatureLight",
    classification: "simple",
    details: "An Extended Color Light is a lighting device that is capable of being switched on or off, the " +
        "intensity of its light adjusted, and its color adjusted by means of a bound controller device such " +
        "as a Color Dimmer Switch or Control Bridge. The device supports adjustment of color by means of " +
        "hue/saturation, enhanced hue, color looping, XY coordinates, and color temperature. In addition, " +
        "the extended color light is also capable of being switched by means of a bound occupancy sensor.",
    xref: { document: "device", section: "4.4" },

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [{
                tag: "requirement", name: "DeviceTypeList", default: [ { deviceType: 269, revision: 2 } ],
                element: "attribute"
            }]
        },

        {
            tag: "requirement", name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "4.4.4" },
            children: [
                { tag: "requirement", name: "QUERY", conformance: "!Matter", element: "feature" },
                { tag: "requirement", name: "TriggerEffect", conformance: "M", element: "command" }
            ]
        },

        {
            tag: "requirement", name: "Groups", id: 0x4, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "4.4.4" }
        },

        {
            tag: "requirement", name: "Scenes", id: 0x5, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "4.4.4" },
            children: [
                { tag: "requirement", name: "EnhancedAddScene", conformance: "M", element: "command" },
                { tag: "requirement", name: "EnhancedViewScene", conformance: "M", element: "command" },
                { tag: "requirement", name: "CopyScene", conformance: "M", element: "command" }
            ]
        },

        {
            tag: "requirement", name: "OnOff", id: 0x6, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "4.4.4" },
            children: [{ tag: "requirement", name: "LT", conformance: "M", element: "feature" }]
        },

        {
            tag: "requirement", name: "LevelControl", id: 0x8, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "4.4.4" },

            children: [
                { tag: "requirement", name: "OO", conformance: "M", element: "feature" },
                { tag: "requirement", name: "LT", conformance: "M", element: "feature" },
                { tag: "requirement", name: "CurrentLevel", constraint: "1 to 254", element: "attribute" },
                { tag: "requirement", name: "MinLevel", constraint: "1", element: "attribute" },
                { tag: "requirement", name: "MaxLevel", constraint: "254", element: "attribute" }
            ]
        },

        {
            tag: "requirement", name: "ColorControl", id: 0x300, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "4.4.4" },

            children: [
                { tag: "requirement", name: "HS", conformance: "O", element: "feature" },
                { tag: "requirement", name: "EHUE", conformance: "O", element: "feature" },
                { tag: "requirement", name: "CL", conformance: "O", element: "feature" },
                { tag: "requirement", name: "XY", conformance: "M", element: "feature" },
                { tag: "requirement", name: "CT", conformance: "M", element: "feature" },
                { tag: "requirement", name: "RemainingTime", conformance: "M", element: "attribute" }
            ]
        }
    ]
});
