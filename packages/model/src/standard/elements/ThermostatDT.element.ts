/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const ThermostatDt = DeviceType(
    { id: 0x301, name: "Thermostat", classification: "simple" },
    Requirement(
        { id: 0x1d, name: "Descriptor", element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", default: [ { deviceType: 769, revision: 4 } ], element: "attribute" })
    ),
    Requirement({ id: 0x3, name: "Identify", conformance: "M", element: "serverCluster" }),
    Requirement({ id: 0x4, name: "Groups", conformance: "Active", element: "serverCluster" }),

    Requirement(
        { id: 0x201, name: "Thermostat", conformance: "M", element: "serverCluster" },
        Requirement({ name: "SCHEDULECONFIGURATION", conformance: "X", element: "feature" }),
        Requirement({ name: "AlarmMask", conformance: "X", element: "attribute" }),
        Requirement({ name: "GetRelayStatusLog", conformance: "X", element: "command" }),
        Requirement({ name: "GetRelayStatusLogResponse", conformance: "X", element: "command" })
    ),

    Requirement({ id: 0x204, name: "ThermostatUserInterfaceConfiguration", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x9b, name: "EnergyPreference", conformance: "O", element: "serverCluster" }),
    Requirement({ id: 0x202, name: "FanControl", conformance: "O", element: "clientCluster" }),
    Requirement({ id: 0x402, name: "TemperatureMeasurement", conformance: "O", element: "clientCluster" }),
    Requirement({ id: 0x405, name: "RelativeHumidityMeasurement", conformance: "O", element: "clientCluster" }),
    Requirement({ id: 0x406, name: "OccupancySensing", conformance: "O", element: "clientCluster" })
);

MatterDefinition.children.push(ThermostatDt);
