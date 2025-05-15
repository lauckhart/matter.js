/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const SmokeCoAlarmDt = DeviceType(
    { id: 0x76, name: "SmokeCoAlarm", classification: "simple" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 118, revision: 1 } ], element: "attribute" })
    ),
    Requirement({ id: 0x3, name: "Identify", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x4, name: "Groups", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x5c, name: "SmokeCoAlarm", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x405, name: "RelativeHumidityMeasurement", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x402, name: "TemperatureMeasurement", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x40c, name: "CarbonMonoxideConcentrationMeasurement", conformance: "O", element: "serverCluster" })
);

MatterDefinition.children.push(SmokeCoAlarmDt);
