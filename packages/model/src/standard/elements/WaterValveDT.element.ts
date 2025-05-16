/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const WaterValveDt = DeviceType(
    { name: "WaterValve", id: 0x42 },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 66, revision: 1 } ] })
    ),
    Requirement({ name: "Identify", id: 0x3, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "ValveConfigurationAndControl", id: 0x81, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "FlowMeasurement", id: 0x404, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "FlowMeasurement", id: 0x404, element: "clientCluster", conformance: "O" })
);

MatterDefinition.children.push(WaterValveDt);
