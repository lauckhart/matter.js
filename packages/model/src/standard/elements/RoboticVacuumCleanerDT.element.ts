/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const RoboticVacuumCleanerDt = DeviceType(
    { id: 0x74, name: "RoboticVacuumCleaner", classification: "simple" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 116, revision: 3 } ], element: "attribute" })
    ),
    Requirement({ id: 0x3, name: "Identify", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x54, name: "RvcRunMode", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x55, name: "RvcCleanMode", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x61, name: "RvcOperationalState", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x150, name: "ServiceArea", conformance: "O", element: "serverCluster" })
);

MatterDefinition.children.push(RoboticVacuumCleanerDt);
