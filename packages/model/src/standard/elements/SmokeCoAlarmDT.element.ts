/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const SmokeCoAlarmDt = DeviceType(
    { name: "SmokeCoAlarm", id: 0x76 },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 118, revision: 1 } ] })
    ),
    Requirement({ name: "Identify", id: 0x3, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "Groups", id: 0x4, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "SmokeCoAlarm", id: 0x5c, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "RelativeHumidityMeasurement", id: 0x405, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "TemperatureMeasurement", id: 0x402, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "CarbonMonoxideConcentrationMeasurement", id: 0x40c, element: "serverCluster", conformance: "O" })
);

MatterDefinition.children.push(SmokeCoAlarmDt);
