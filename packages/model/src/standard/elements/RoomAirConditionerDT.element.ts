/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const RoomAirConditionerDt = DeviceType(
    { name: "RoomAirConditioner", id: 0x72 },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 114, revision: 2 } ] })
    ),
    Requirement({ name: "Identify", id: 0x3, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "Groups", id: 0x4, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "ScenesManagement", id: 0x62, element: "serverCluster", conformance: "P, O" }),
    Requirement(
        { name: "OnOff", id: 0x6, element: "serverCluster", conformance: "M" },
        Requirement({ name: "DEADFRONTBEHAVIOR", element: "feature", conformance: "M" })
    ),
    Requirement({ name: "Thermostat", id: 0x201, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "FanControl", id: 0x202, element: "serverCluster", conformance: "O" }),
    Requirement(
        { name: "ThermostatUserInterfaceConfiguration", id: 0x204, element: "serverCluster", conformance: "O" },
        Requirement({ name: "KeypadLockout", element: "attribute", conformance: "O" })
    ),
    Requirement({ name: "TemperatureMeasurement", id: 0x402, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "RelativeHumidityMeasurement", id: 0x405, element: "serverCluster", conformance: "O" })
);

MatterDefinition.children.push(RoomAirConditionerDt);
