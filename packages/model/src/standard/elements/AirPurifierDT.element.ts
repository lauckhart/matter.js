/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const AirPurifierDt = DeviceType(
    { id: 0x2d, name: "AirPurifier", classification: "simple" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 45, revision: 2 } ], element: "attribute" })
    ),
    Requirement({ id: 0x3, name: "Identify", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x4, name: "Groups", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x6, name: "OnOff", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x202, name: "FanControl", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x71, name: "HepaFilterMonitoring", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x72, name: "ActivatedCarbonFilterMonitoring", conformance: "O", element: "serverCluster" })
);

MatterDefinition.children.push(AirPurifierDt);
