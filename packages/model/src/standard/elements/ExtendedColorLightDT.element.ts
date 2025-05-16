/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const ExtendedColorLightDt = DeviceType(
    { name: "ExtendedColorLight", id: 0x10d, type: "ColorTemperatureLight" },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 269, revision: 4 } ] })
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
        { name: "LevelControl", id: 0x8, element: "serverCluster", conformance: "M" },
        Requirement({ name: "ONOFF", element: "feature", conformance: "M" }),
        Requirement({ name: "LIGHTING", element: "feature", conformance: "M" }),
        Requirement({ name: "CurrentLevel", element: "attribute", constraint: "1 to 254" }),
        Requirement({ name: "MinLevel", element: "attribute", constraint: "1" }),
        Requirement({ name: "MaxLevel", element: "attribute", constraint: "254" })
    ),

    Requirement(
        { name: "ColorControl", id: 0x300, element: "serverCluster", conformance: "M" },
        Requirement({ name: "HUESATURATION", element: "feature", conformance: "O" }),
        Requirement({ name: "ENHANCEDHUE", element: "feature", conformance: "O" }),
        Requirement({ name: "COLORLOOP", element: "feature", conformance: "O" }),
        Requirement({ name: "XY", element: "feature", conformance: "M" }),
        Requirement({ name: "COLORTEMPERATURE", element: "feature", conformance: "M" }),
        Requirement({ name: "RemainingTime", element: "attribute", conformance: "M" })
    ),

    Requirement({ name: "OccupancySensing", id: 0x406, element: "clientCluster", conformance: "O" })
);

MatterDefinition.children.push(ExtendedColorLightDt);
