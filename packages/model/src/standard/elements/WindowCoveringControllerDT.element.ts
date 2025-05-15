/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const WindowCoveringControllerDt = DeviceType(
    { id: 0x203, name: "WindowCoveringController", classification: "simple" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 515, revision: 3 } ], element: "attribute" })
    ),
    Requirement({ id: 0x3, name: "Identify", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x3, name: "Identify", conformance: "O", element: "clientCluster" }),
    Requirement({ id: 0x4, name: "Groups", conformance: "Active, O", element: "clientCluster" }),
    Requirement({ id: 0x102, name: "WindowCovering", conformance: "M", element: "clientCluster" })
);

MatterDefinition.children.push(WindowCoveringControllerDt);
