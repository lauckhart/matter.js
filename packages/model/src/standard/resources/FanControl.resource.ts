/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { FanControl } from "#index.js";

FanControl.patch({
    details: "This cluster specifies an interface to control the speed of a fan.",
    xref: { document: "cluster", section: "4.4" },

    children: [
        undefined,

        {
            children: [
                { description: "MultiSpeed" },
                { description: "Auto" },
                { description: "Rocking" },
                { description: "Wind" },
                { description: "Step" },
                { description: "AirflowDirection" }
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

        {
            children: [
                { description: "Indicate rock left to right" },
                { description: "Indicate rock up and down" },
                { description: "Indicate rock around" }
            ]
        },

        { children: [{ description: "Indicate sleep wind" }, { description: "Indicate natural wind" }] },

        {
            children: [
                { description: "Step moves in increasing direction" },
                { description: "Step moves in decreasing direction" }
            ]
        },

        {
            children: [
                { description: "Airflow is in the forward direction" },
                { description: "Airflow is in the reverse direction" }
            ]
        },

        {
            children: [
                { description: "Fan is off" },
                { description: "Fan using low speed" },
                { description: "Fan using medium speed" },
                { description: "Fan using high speed" },
                undefined,
                { description: "Fan is using auto mode" },
                { description: "Fan is using smart mode" }
            ]
        },

        {
            children: [
                { description: "Fan is capable of off, low, medium and high modes" },
                { description: "Fan is capable of off, low and high modes" },
                { description: "Fan is capable of off, low, medium, high and auto modes" },
                { description: "Fan is capable of off, low, high and auto modes" },
                { description: "Fan is capable of off, high and auto modes" },
                { description: "Fan is capable of off and high modes" }
            ]
        }
    ]
});
