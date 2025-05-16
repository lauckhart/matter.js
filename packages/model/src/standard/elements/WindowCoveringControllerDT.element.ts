/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const WindowCoveringControllerDt = DeviceType(
    { name: "WindowCoveringController", id: 0x203 },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 515, revision: 3 } ] })
    ),
    Requirement({ name: "Identify", id: 0x3, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "Identify", id: 0x3, element: "clientCluster", conformance: "O" }),
    Requirement({ name: "Groups", id: 0x4, element: "clientCluster", conformance: "Active, O" }),
    Requirement({ name: "WindowCovering", id: 0x102, element: "clientCluster", conformance: "M" })
);

MatterDefinition.children.push(WindowCoveringControllerDt);
