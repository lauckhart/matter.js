/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import { DeviceTypeElement as DeviceType, RequirementElement as Requirement } from "../../elements/index.js";

export const ThermostatDt = DeviceType(
    { name: "Thermostat", id: 0x301 },
    Requirement(
        { name: "Descriptor", id: 0x1d, element: "serverCluster" },
        Requirement({ name: "DeviceTypeList", element: "attribute", default: [ { deviceType: 769, revision: 4 } ] })
    ),
    Requirement({ name: "Identify", id: 0x3, element: "serverCluster", conformance: "M" }),
    Requirement({ name: "Groups", id: 0x4, element: "serverCluster", conformance: "Active" }),

    Requirement(
        { name: "Thermostat", id: 0x201, element: "serverCluster", conformance: "M" },
        Requirement({ name: "SCHEDULECONFIGURATION", element: "feature", conformance: "X" }),
        Requirement({ name: "AlarmMask", element: "attribute", conformance: "X" }),
        Requirement({ name: "GetRelayStatusLog", element: "command", conformance: "X" }),
        Requirement({ name: "GetRelayStatusLogResponse", element: "command", conformance: "X" })
    ),

    Requirement({ name: "ThermostatUserInterfaceConfiguration", id: 0x204, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "EnergyPreference", id: 0x9b, element: "serverCluster", conformance: "O" }),
    Requirement({ name: "FanControl", id: 0x202, element: "clientCluster", conformance: "O" }),
    Requirement({ name: "TemperatureMeasurement", id: 0x402, element: "clientCluster", conformance: "O" }),
    Requirement({ name: "RelativeHumidityMeasurement", id: 0x405, element: "clientCluster", conformance: "O" }),
    Requirement({ name: "OccupancySensing", id: 0x406, element: "clientCluster", conformance: "O" })
);

MatterDefinition.children.push(ThermostatDt);
