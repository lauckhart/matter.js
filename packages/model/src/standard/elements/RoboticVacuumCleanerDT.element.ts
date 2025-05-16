/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const RoboticVacuumCleanerDt = DeviceType(
    { name: "RoboticVacuumCleaner", id: 0x74 },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 116, revision: 3 } ] })
    ),
    Requirement({ name: "Identify", id: 0x3, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "RvcRunMode", id: 0x54, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "RvcCleanMode", id: 0x55, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "RvcOperationalState", id: 0x61, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "ServiceArea", id: 0x150, element: "serverCluster", conformance: "O" })
);

MatterDefinition.children.push(RoboticVacuumCleanerDt);
