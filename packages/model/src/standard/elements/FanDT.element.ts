/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const FanDt = DeviceType(
    { id: 0x2b, name: "Fan", classification: "simple" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 43, revision: 3 } ], element: "attribute" })
    ),
    Requirement({ id: 0x3, name: "Identify", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x4, name: "Groups", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x6, name: "OnOff", conformance: "O", element: "serverCluster" }),
    Requirement(
        { id: 0x202, name: "FanControl", conformance: "M", element: "serverCluster" },
        Requirement({ name: "FanModeSequence", access: "R V", conformance: "Matter", element: "attribute" })
    )
);

MatterDefinition.children.push(FanDt);
