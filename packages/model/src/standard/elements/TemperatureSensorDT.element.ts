/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const TemperatureSensorDt = DeviceType(
    { name: "TemperatureSensor", id: 0x302 },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 770, revision: 2 } ] })
    ),
    Requirement({ name: "TemperatureMeasurement", id: 0x402, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "Identify", id: 0x3, element: "serverCluster", conformance: "M" })
);

MatterDefinition.children.push(TemperatureSensorDt);
