/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const OnOffLightDt = DeviceType(
    { name: "OnOffLight", id: 0x100 },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 256, revision: 3 } ] })
    ),
    Requirement(
        { name: "Identify", id: 0x3, element: "serverCluster", conformance: "M" },
        Requirement({ name: "TriggerEffect", element: "command", conformance: "M" })
    ),
    Requirement({ name: "Groups", id: 0x4, element: "serverCluster", conformance: "M" }),
    Requirement(
        { name: "ScenesManagement", id: 0x62, element: "serverCluster", conformance: "P, M" },
        Requirement({ name: "CopyScene", element: "command", conformance: "P, M" })
    ),
    Requirement(
        { name: "OnOff", id: 0x6, element: "serverCluster", conformance: "M" },
        Requirement({ name: "LIGHTING", element: "feature", conformance: "M" })
    ),

    Requirement(
        { name: "LevelControl", id: 0x8, element: "serverCluster", conformance: "O" },
        Requirement({ name: "ONOFF", element: "feature", conformance: "M" }),
        Requirement({ name: "LIGHTING", element: "feature", conformance: "M" }),
        Requirement({ name: "CurrentLevel", element: "attribute", constraint: "1 to 254" }),
        Requirement({ name: "MinLevel", element: "attribute", constraint: "1" }),
        Requirement({ name: "MaxLevel", element: "attribute", constraint: "254" })
    ),

    Requirement({ name: "OccupancySensing", id: 0x406, element: "clientCluster", conformance: "O" })
);

MatterDefinition.children.push(OnOffLightDt);
