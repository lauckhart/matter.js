/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const DimmableLightDT = DeviceType({
    name: "DimmableLight", id: 0x101, type: "OnOffLight", classification: "simple",
    details: "A Dimmable Light is a lighting device that is capable of being switched on or off and the intensity " +
        "of its light adjusted by means of a bound controller device such as a Dimmer Switch or a Color " +
        "Dimmer Switch. In addition, a Dimmable Light device is also capable of being switched by means of a " +
        "bound occupancy sensor or other device(s).",
    xref: { document: "device", section: "4.2" },

    children: [
        Requirement({
            name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [Requirement({ name: "DeviceTypeList", default: [ { deviceType: 257, revision: 3 } ], element: "attribute" })]
        }),
        Requirement({
            name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "4.2.4" },
            children: [Requirement({ name: "TriggerEffect", conformance: "M", element: "command" })]
        }),
        Requirement({
            name: "Groups", id: 0x4, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "4.2.4" }
        }),
        Requirement({
            name: "ScenesManagement", id: 0x62, conformance: "P, M", element: "serverCluster",
            xref: { document: "device", section: "4.2.4" },
            children: [Requirement({ name: "CopyScene", conformance: "P, M", element: "command" })]
        }),
        Requirement({
            name: "OnOff", id: 0x6, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "4.2.4" },
            children: [Requirement({ name: "LIGHTING", conformance: "M", element: "feature" })]
        }),

        Requirement({
            name: "LevelControl", id: 0x8, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "4.2.4" },

            children: [
                Requirement({ name: "LIGHTING", conformance: "M", element: "feature" }),
                Requirement({ name: "ONOFF", conformance: "M", element: "feature" }),
                Requirement({ name: "CurrentLevel", constraint: "1 to 254", element: "attribute" }),
                Requirement({ name: "MinLevel", constraint: "1", element: "attribute" }),
                Requirement({ name: "MaxLevel", constraint: "254", element: "attribute" })
            ]
        }),

        Requirement({
            name: "OccupancySensing", id: 0x406, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "4.2.4" }
        })
    ]
});

Matter.children.push(DimmableLightDT);
