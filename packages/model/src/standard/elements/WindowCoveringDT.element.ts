/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const WindowCoveringDt = DeviceType(
    { id: 0x202, name: "WindowCovering", classification: "simple" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 514, revision: 3 } ], element: "attribute" })
    ),
    Requirement({ id: 0x3, name: "Identify", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x4, name: "Groups", conformance: "Active, O", element: "serverCluster" }),
    Requirement({ id: 0x102, name: "WindowCovering", conformance: "M", element: "serverCluster" })
);

MatterDefinition.children.push(WindowCoveringDt);
