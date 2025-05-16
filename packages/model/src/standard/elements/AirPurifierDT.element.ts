/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const AirPurifierDt = DeviceType(
    { name: "AirPurifier", id: 0x2d },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 45, revision: 2 } ] })
    ),
    Requirement({ name: "Identify", id: 0x3, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "Groups", id: 0x4, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "OnOff", id: 0x6, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "FanControl", id: 0x202, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "HepaFilterMonitoring", id: 0x71, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "ActivatedCarbonFilterMonitoring", id: 0x72, element: "serverCluster", conformance: "O" })
);

MatterDefinition.children.push(AirPurifierDt);
