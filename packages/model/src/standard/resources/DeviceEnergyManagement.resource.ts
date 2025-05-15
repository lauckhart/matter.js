/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceEnergyManagement } from "#index.js";

DeviceEnergyManagement.patch({
    details: "This cluster allows a client to manage the power draw of a device. An example of such a client could" +
        "\n" +
        "be an Energy Management System (EMS) which controls an Energy Smart Appliance (ESA)." +
        "\n" +
        "In most deployments the EMS will be the client, and the ESA will host the Device Energy Management " +
        "Cluster server." +
        "\n" +
        "Figure 17. Example of the how an EMS is a client of multiple ESAs Device Energy Management clusters." +
        "\n" +
        "This cluster is intended to be generic in nature and could apply to any electrical load or generator " +
        "(e.g. a Battery Electric Storage System - BESS, solar PV inverter, EVSE, HVAC, heat pump, hot water " +
        "heater, white goods appliances etc)." +
        "\n" +
        "It consists of the following areas which shall be supported by all devices implementing this " +
        "cluster:" +
        "\n" +
        "  • Description of ESA and its capabilities & power limits (sometimes referred to as a nameplate)" +
        "\n" +
        "  • Current state of operation (including user opt-out, safety limitations / alarms) There are some " +
        "    optional capabilities that some ESAs may be able to offer:" +
        "\n" +
        "  • Ability to control the load or generation" +
        "\n" +
        "  • Forecast data, including when it can be flexible (i.e. modify the power or time period)" +
        "\n" +
        "  • The ability to have their power profile adjusted by an EMS, and to provide an updated Forecast " +
        "    back to the EMS." +
        "\n" +
        "This allows the EMS to manage multiple home loads and where ESAs can be flexible, continuously " +
        "optimizing the home energy to minimize cost, reduce CO2 impact, maximize self-consumption of solar " +
        "PV and provide Demand Side Response (DSR) Grid services." +
        "\n" +
        "It is likely that the ESA may also use the Pricing Cluster to obtain incentive signals such as 'grid " +
        "carbon intensity', 'time of use' or 'type of use' tariffs to schedule its operation to run at the " +
        "cheapest and greenest times." +
        "\n" +
        "Figure 18. Example of the how an HVAC may use multiple clusters" +
        "\n" +
        "NOTE" +
        "\n" +
        "Grid Services are market dependent and will use other protocols ([OpenADR] / [IEEE2030.5]) to " +
        "communicate grid events to the EMS. These are outside the scope of Matter." +
        "\n" +
        "NOTE" +
        "\n" +
        "Different markets may follow different approaches, but the UK [PAS1878] and [EUCodeOfConduct] give " +
        "examples of how ESAs may be mandated to support these features in the future.",

    xref: { document: "cluster", section: "9.2" },

    children: [
        undefined,

        {
            children: [
                { description: "PowerAdjustment" },
                { description: "PowerForecastReporting" },
                { description: "StateForecastReporting" },
                { description: "StartTimeAdjustment" },
                { description: "Pausable" },
                { description: "ForecastAdjustment" },
                { description: "ConstraintBasedAdjustment" }
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

        {
            children: [
                { description: "Financial cost" },
                { description: "Grid CO2e grams cost" },
                { description: "Consumer comfort impact cost" },
                { description: "Temperature impact cost" }
            ]
        },

        {
            children: [
                { description: "EV Supply Equipment" },
                { description: "Space heating appliance" },
                { description: "Water heating appliance" },
                { description: "Space cooling appliance" },
                { description: "Space heating and cooling appliance" },
                { description: "Battery Electric Storage System" },
                { description: "Solar PV inverter" },
                { description: "Fridge / Freezer" },
                { description: "Washing Machine" },
                { description: "Dishwasher" },
                { description: "Cooking appliance" },
                { description: "Home water pump (e.g. drinking well)" },
                { description: "Irrigation water pump" },
                { description: "Pool pump" },
                { description: "Other appliance type" }
            ]
        },

        {
            children: [
                { description: "The ESA is not available to the EMS (e.g. start- up, maintenance mode)" },
                { description: "The ESA is working normally and can be controlled by the EMS" },
                { description: "The ESA has developed a fault and cannot provide service" },
                { description: "The ESA is in the middle of a power adjustment event" },
                { description: "The ESA is currently paused by a client using the PauseRequest command" }
            ]
        },

        {
            children: [
                { description: "The user has not opted out of either local or grid optimizations" },
                { description: "The user has opted out of local EMS optimizations only" },
                { description: "The user has opted out of grid EMS optimizations only" },
                { description: "The user has opted out of all external optimizations" }
            ]
        },

        {
            children: [
                { description: "The ESA completed the power adjustment as requested" },
                { description: "The ESA was set to offline" },
                { description: "The ESA has developed a fault could not complete the adjustment" },
                { description: "The user has disabled the ESA’s flexibility capability" },
                { description: "The adjustment was cancelled by a client" }
            ]
        },

        {
            children: [
                { description: "The adjustment is to optimize the local energy usage" },
                { description: "The adjustment is to optimize the grid energy usage" }
            ]
        },

        {
            children: [
                { description: "The update was due to internal ESA device optimization" },
                { description: "The update was due to local EMS optimization" },
                { description: "The update was due to grid optimization" }
            ]
        },

        {
            children: [
                { description: "There is no Power Adjustment active" },
                { description: "There is PowerAdjustment active due to local EMS optimization" },
                { description: "There is PowerAdjustment active due to local EMS optimization" }
            ]
        }
    ]
});
