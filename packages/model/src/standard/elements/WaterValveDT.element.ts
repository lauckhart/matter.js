/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const WaterValveDt = DeviceType(
    { id: 0x42, name: "WaterValve", classification: "simple" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 66, revision: 1 } ], element: "attribute" })
    ),
    Requirement({ id: 0x3, name: "Identify", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x81, name: "ValveConfigurationAndControl", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x404, name: "FlowMeasurement", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x404, name: "FlowMeasurement", conformance: "O", element: "clientCluster" })
);

MatterDefinition.children.push(WaterValveDt);
