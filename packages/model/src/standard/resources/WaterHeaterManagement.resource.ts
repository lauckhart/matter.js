/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { WaterHeaterManagement } from "#index.js";

WaterHeaterManagement.patch({
    details: "This cluster is used to allow clients to control the operation of a hot water heating appliance so " +
        "that it can be used with energy management." +
        "\n" +
        "Heating of hot water is one of the main energy uses in homes, and when coupled with the Energy " +
        "Management cluster, it can help consumers save cost (e.g. using power at cheaper times or from local " +
        "solar PV generation).",

    xref: { document: "cluster", section: "9.5" },

    children: [
        undefined,
        { children: [{ description: "EnergyManagement" }, { description: "TankPercent" }] },
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
                { description: "Immersion Heating Element 1" },
                { description: "Immersion Heating Element 2" },
                { description: "Heat pump Heating" },
                { description: "Boiler Heating (e.g. Gas or Oil)" },
                { description: "Other Heating" }
            ]
        },

        {
            children: [
                { description: "Boost is not currently active" },
                { description: "Boost is currently active" }
            ]
        }
    ]
});
