/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const RoomAirConditionerDt = DeviceType(
    { id: 0x72, name: "RoomAirConditioner", classification: "simple" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 114, revision: 2 } ], element: "attribute" })
    ),
    Requirement({ id: 0x3, name: "Identify", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x4, name: "Groups", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x62, name: "ScenesManagement", conformance: "P, O", element: "serverCluster" }),
    Requirement(
        { id: 0x6, name: "OnOff", conformance: "M", element: "serverCluster" },
        Requirement({ name: "DEADFRONTBEHAVIOR", conformance: "M", element: "feature" })
    ),
    Requirement({ id: 0x201, name: "Thermostat", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x202, name: "FanControl", conformance: "O", element: "serverCluster" }),
    Requirement(
        { id: 0x204, name: "ThermostatUserInterfaceConfiguration", conformance: "O", element: "serverCluster" },
        Requirement({ name: "KeypadLockout", conformance: "O", element: "attribute" })
    ),
    Requirement({ id: 0x402, name: "TemperatureMeasurement", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x405, name: "RelativeHumidityMeasurement", conformance: "O", element: "serverCluster" })
);

MatterDefinition.children.push(RoomAirConditionerDt);
