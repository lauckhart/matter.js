/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const DimmerSwitchDt = DeviceType(
    { name: "DimmerSwitch", id: 0x104, type: "OnOffLightSwitch" },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 260, revision: 3 } ] })
    ),
    Requirement({ name: "Identify", id: 0x3, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "Identify", id: 0x3, element: "clientCluster", conformance: "M" }),
    Requirement({ name: "Groups", id: 0x4, element: "clientCluster", conformance: "O" }),
    Requirement({ name: "ScenesManagement", id: 0x62, element: "clientCluster", conformance: "P, O" }),
    Requirement({ name: "OnOff", id: 0x6, element: "clientCluster", conformance: "M" }),
    Requirement({ name: "LevelControl", id: 0x8, element: "clientCluster", conformance: "M" })
);

MatterDefinition.children.push(DimmerSwitchDt);
