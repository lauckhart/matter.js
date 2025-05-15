/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const WaterHeaterDt = DeviceType(
    { id: 0x50f, name: "WaterHeater", classification: "simple" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 1295, revision: 1 } ], element: "attribute" })
    ),
    Requirement({ id: 0x3, name: "Identify", conformance: "O", element: "serverCluster" }),
    Requirement(
        { id: 0x201, name: "Thermostat", conformance: "M", element: "serverCluster" },
        Requirement({ name: "HEATING", conformance: "M", element: "feature" })
    ),
    Requirement({ id: 0x94, name: "WaterHeaterManagement", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x9e, name: "WaterHeaterMode", conformance: "M", element: "serverCluster" })
);

MatterDefinition.children.push(WaterHeaterDt);
