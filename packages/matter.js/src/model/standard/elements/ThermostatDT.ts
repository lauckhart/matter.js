/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "deviceType", name: "Thermostat", id: 0x301, classification: "simple",
    details: "A Thermostat device is capable of having either built-in or separate sensors for temperature, " +
        "humidity or occupancy. It allows the desired temperature to be set either remotely or locally. The " +
        "thermostat is capable of sending heating and/or cooling requirement notifications to a " +
        "heating/cooling unit (for example, an indoor air handler) or is capable of including a mechanism to " +
        "control a heating or cooling unit directly.",
    xref: { document: "device", section: "9.2" },

    children: [
        {
            tag: "requirement", name: "Descriptor", id: 0x1d, element: "serverCluster",
            children: [{
                tag: "requirement", name: "DeviceTypeList", default: [ { deviceType: 769, revision: 2 } ],
                element: "attribute"
            }]
        },

        {
            tag: "requirement", name: "Identify", id: 0x3, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "9.2.4" },
            children: [{ tag: "requirement", name: "QUERY", conformance: "Zigbee", element: "feature" }]
        },
        {
            tag: "requirement", name: "Groups", id: 0x4, conformance: "Awake", element: "serverCluster",
            xref: { document: "device", section: "9.2.4" }
        },

        {
            tag: "requirement", name: "Thermostat", id: 0x201, conformance: "M", element: "serverCluster",
            xref: { document: "device", section: "9.2.4" },

            children: [
                { tag: "requirement", name: "SCHEDULECONFIGURATION", conformance: "[Zigbee], P", element: "feature" },
                { tag: "requirement", name: "AlarmMask", conformance: "[Zigbee]", element: "attribute" },
                { tag: "requirement", name: "GetRelayStatusLog", conformance: "[Zigbee]", element: "command" },
                { tag: "requirement", name: "GetRelayStatusLogResponse", conformance: "[Zigbee]", element: "command" }
            ]
        },

        {
            tag: "requirement", name: "Scenes", id: 0x5, conformance: "O", element: "serverCluster",
            xref: { document: "device", section: "9.2.4" }
        },
        {
            tag: "requirement", name: "ThermostatUserInterfaceConfiguration", id: 0x204, conformance: "O",
            element: "serverCluster",
            xref: { document: "device", section: "9.2.4" }
        },
        {
            tag: "requirement", name: "RelativeHumidityMeasurement", id: 0x405, conformance: "O",
            element: "clientCluster",
            xref: { document: "device", section: "9.2.4" }
        },
        {
            tag: "requirement", name: "TimeSync", id: 0x38, conformance: "P, O", element: "clientCluster",
            xref: { document: "device", section: "9.2.4" }
        },
        {
            tag: "requirement", name: "FanControl", id: 0x202, conformance: "P, O", element: "clientCluster",
            xref: { document: "device", section: "9.2.4" }
        },
        {
            tag: "requirement", name: "TemperatureMeasurement", id: 0x402, conformance: "O",
            element: "clientCluster",
            xref: { document: "device", section: "9.2.4" }
        },
        {
            tag: "requirement", name: "OccupancySensing", id: 0x406, conformance: "O", element: "clientCluster",
            xref: { document: "device", section: "9.2.4" }
        }
    ]
});
