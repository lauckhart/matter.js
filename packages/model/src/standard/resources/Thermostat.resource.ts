/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Thermostat } from "#index.js";

Thermostat.patch({
    details: "This cluster provides an interface to the functionality of a thermostat." +
        "\n" +
        "Optional temperature, humidity and occupancy sensors" +
        "\n" +
        "Thermostat" +
        "\n" +
        "Heating / cooling control panel" +
        "\n" +
        "C" +
        "\n" +
        "Dehumidification configuration" +
        "\n" +
        "Dehumidification notification" +
        "\n" +
        "ThermostatS" +
        "\n" +
        "Heating / cooling device (e.g. indoor air handler)" +
        "\n" +
        "S" +
        "\n" +
        "user interface S" +
        "\n" +
        "configuration" +
        "\n" +
        "C" +
        "\n" +
        "Configuration tool" +
        "\n" +
        "Thermostat configuration" +
        "\n" +
        "C C Fan control S" +
        "\n" +
        "ThermostatS notification C" +
        "\n" +
        "C = Client S = Server" +
        "\n" +
        "Note: Device names are examples for illustration purposes only" +
        "\n" +
        "Figure 15. Example Usage of the Thermostat and Related Clusters\"",

    xref: { document: "cluster", section: "4.3" },

    children: [
        undefined,

        {
            children: [
                { description: "Heating" },
                { description: "Cooling" },
                { description: "Occupancy" },
                { description: "ScheduleConfiguration" },
                { description: "Setback" },
                { description: "AutoMode" },
                { description: "LocalTemperatureNotExposed" },
                { description: "MatterScheduleConfiguration" },
                { description: "Presets" }
            ]
        },

        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "Compressor Failure or Refrigerant Leakage" },
                { description: "Room Temperature Sensor Failure" },
                { description: "Outdoor Temperature Sensor Failure" },
                { description: "Indoor Coil Temperature Sensor Failure" },
                { description: "Fan Failure" }
            ]
        },

        {
            children: [
                { description: "Initialization failure. The device failed to complete initialization at power-up." },
                { description: "Hardware failure" },
                { description: "Self-calibration failure" }
            ]
        },

        {
            children: [
                { description: "Stage of cooling the HVAC system is using." },
                { description: "Stage of heating the HVAC system is using." },
                { description: "Is the heating type Heat Pump." },
                { description: "Does the HVAC system use fuel." }
            ]
        },

        { children: [{ description: "Indicates the occupancy state" }] },

        {
            children: [
                { description: "Preset may be automatically activated by the thermostat" },
                { description: "Preset supports user- provided names" }
            ]
        },

        {
            children: [
                { description: "Schedule programming mode. This enables any programmed weekly schedule configurations." },
                { description: "Auto/recovery mode" },
                { description: "Economy/EnergyStar mode" }
            ]
        },

        {
            children: [
                { description: "Heat Stage On" },
                { description: "Cool Stage On" },
                { description: "Fan Stage On" },
                { description: "Heat 2nd Stage On" },
                { description: "Cool 2nd Stage On" },
                { description: "Fan 2nd Stage On" },
                { description: "Fan 3rd Stage On" }
            ]
        },

        {
            children: [
                { description: "Calculated Local Temperature is derived from a remote node" },
                { description: "OutdoorTemperature is derived from a remote node" },
                { description: "Occupancy is derived from a remote node" }
            ]
        },

        {
            children: [
                { description: "Supports presets" },
                { description: "Supports setpoints" },
                { description: "Supports user-provided names" },
                { description: "Supports transitioning to SystemModeOff" }
            ]
        },

        {
            children: [
                { description: "Sunday" },
                { description: "Monday" },
                { description: "Tuesday" },
                { description: "Wednesday" },
                { description: "Thursday" },
                { description: "Friday" },
                { description: "Saturday" },
                { description: "Away or Vacation" }
            ]
        },

        { children: [{ description: "Adjust Heat Setpoint" }, { description: "Adjust Cool Setpoint" }] },
        { children: [{ description: "British Thermal Unit per Hour" }] },

        {
            children: [
                { description: "Unknown compressor type" },
                { description: "Max working ambient 43 °C" },
                { description: "Max working ambient 35 °C" },
                { description: "Max working ambient 52 °C" }
            ]
        },

        {
            children: [
                { description: "Fully Closed" },
                { description: "Fully Open" },
                { description: "Quarter Open" },
                { description: "Half Open" },
                { description: "Three Quarters Open" }
            ]
        },

        {
            children: [
                { description: "Unknown Refrigerant Type" },
                { description: "R22 Refrigerant" },
                { description: "R410a Refrigerant" },
                { description: "R407c Refrigerant" }
            ]
        },

        {
            children: [
                { description: "Unknown AC Type" },
                { description: "Cooling and Fixed Speed" },
                { description: "Heat Pump and Fixed Speed" },
                { description: "Cooling and Inverter" },
                { description: "Heat Pump and Inverter" }
            ]
        },

        {
            children: [
                { description: "Adjust Heat Setpoint" },
                { description: "Adjust Cool Setpoint" },
                { description: "Adjust Heat Setpoint and Cool Setpoint" }
            ]
        },

        {
            children: [
                { description: "Heat and Emergency are not possible" },
                { description: "Heat and Emergency are not possible" },
                { description: "Cool and precooling (see Terms) are not possible" },
                { description: "Cool and precooling are not possible" },
                { description: "All modes are possible" },
                { description: "All modes are possible" }
            ]
        },

        {
            children: [
                { description: "The thermostat-controlled area is occupied" },
                { description: "The thermostat-controlled area is unoccupied" },
                { description: "Users are likely to be sleeping" },
                { description: "Users are likely to be waking up" },
                { description: "Users are on vacation" },
                { description: "Users are likely to be going to sleep" },
                { description: "Custom presets" }
            ]
        },

        {
            children: [
                { description: "Manual, user-initiated setpoint change via the thermostat" },
                { description: "Schedule/internal programming-initiated setpoint change" },
                { description: "Externally-initiated setpoint change (e.g., DRLC cluster command, attribute write)" }
            ]
        },

        undefined,

        {
            children: [
                { description: "The Thermostat does not generate demand for Cooling or Heating" },
                { description: "Demand is generated for either Cooling or Heating, as required" },
                { description: "Demand is only generated for Cooling" },
                { description: "Demand is only generated for Heating" },
                { description: "2nd stage heating is in use to achieve desired temperature" },
                { description: "(see Terms)" }
            ]
        },

        {
            children: [
                { description: "The Thermostat does not generate demand for Cooling or Heating" },
                { description: "Demand is only generated for Cooling" },
                { description: "Demand is only generated for Heating" }
            ]
        },

        {
            children: [
                { description: "Follow scheduling program" },
                { description: "Maintain current setpoint, regardless of schedule transitions" }
            ]
        }
    ]
});
