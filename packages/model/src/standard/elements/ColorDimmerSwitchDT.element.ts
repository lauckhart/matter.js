/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const ColorDimmerSwitchDt = DeviceType(
    { id: 0x105, name: "ColorDimmerSwitch", type: "DimmerSwitch", classification: "simple" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 261, revision: 3 } ], element: "attribute" })
    ),
    Requirement({ id: 0x3, name: "Identify", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x3, name: "Identify", conformance: "M", element: "clientCluster" }),
    Requirement({ id: 0x4, name: "Groups", conformance: "O", element: "clientCluster" }),
    Requirement({ id: 0x62, name: "ScenesManagement", conformance: "P, O", element: "clientCluster" }),
    Requirement({ id: 0x6, name: "OnOff", conformance: "M", element: "clientCluster" }),
    Requirement({ id: 0x8, name: "LevelControl", conformance: "M", element: "clientCluster" }),
    Requirement({ id: 0x300, name: "ColorControl", conformance: "M", element: "clientCluster" })
);

MatterDefinition.children.push(ColorDimmerSwitchDt);
