/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const DimmablePlugInUnitDt = DeviceType(
    { id: 0x10b, name: "DimmablePlugInUnit", classification: "simple" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 267, revision: 4 } ], element: "attribute" })
    ),
    Requirement(
        { id: 0x3, name: "Identify", conformance: "M", element: "serverCluster" },
        Requirement({ name: "TriggerEffect", conformance: "M", element: "command" })
    ),
    Requirement({ id: 0x4, name: "Groups", conformance: "M", element: "serverCluster" }),
    Requirement(
        { id: 0x62, name: "ScenesManagement", conformance: "P, M", element: "serverCluster" },
        Requirement({ name: "CopyScene", conformance: "P, M", element: "command" })
    ),
    Requirement(
        { id: 0x6, name: "OnOff", conformance: "M", element: "serverCluster" },
        Requirement({ name: "LIGHTING", conformance: "M", element: "feature" })
    ),

    Requirement(
        { id: 0x8, name: "LevelControl", conformance: "M", element: "serverCluster" },
        Requirement({ name: "ONOFF", conformance: "M", element: "feature" }),
        Requirement({ name: "LIGHTING", conformance: "M", element: "feature" }),
        Requirement({ name: "CurrentLevel", constraint: "1 to 254", element: "attribute" }),
        Requirement({ name: "MinLevel", constraint: "1", element: "attribute" }),
        Requirement({ name: "MaxLevel", constraint: "254", element: "attribute" })
    ),

    Requirement({ id: 0x406, name: "OccupancySensing", conformance: "O", element: "clientCluster" })
);

MatterDefinition.children.push(DimmablePlugInUnitDt);
