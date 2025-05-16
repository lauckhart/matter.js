/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const WaterHeaterDt = DeviceType(
    { name: "WaterHeater", id: 0x50f },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 1295, revision: 1 } ] })
    ),
    Requirement({ name: "Identify", id: 0x3, element: "serverCluster", conformance: "O" }),
    Requirement(
        { name: "Thermostat", id: 0x201, element: "serverCluster", conformance: "M" },
        Requirement({ name: "HEATING", element: "feature", conformance: "M" })
    ),
    Requirement({ name: "WaterHeaterManagement", id: 0x94, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "WaterHeaterMode", id: 0x9e, element: "serverCluster", conformance: "M" })
);

MatterDefinition.children.push(WaterHeaterDt);
