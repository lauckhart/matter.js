/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SmokeCoAlarm } from "#index.js";

SmokeCoAlarm.patch({
    details: "This cluster provides an interface for observing and managing the state of smoke and CO alarms.",
    xref: { document: "cluster", section: "2.11" },

    children: [
        undefined,
        { children: [{ description: "SmokeAlarm" }, { description: "CoAlarm" }] },
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
                { description: "Nominal state, the device is not alarming" },
                { description: "Warning state" },
                { description: "Critical state" }
            ]
        },

        {
            children: [
                { description: "High sensitivity" },
                { description: "Standard Sensitivity" },
                { description: "Low sensitivity" }
            ]
        },

        {
            children: [
                { description: "Nominal state, the device is not alarming" },
                { description: "Smoke Alarm state" },
                { description: "CO Alarm state" },
                { description: "Battery Alert State" },
                { description: "Test in Progress" },
                { description: "Hardware Fault Alert State" },
                { description: "End of Service Alert State" },
                { description: "Interconnected Smoke Alarm State" },
                { description: "Interconnected CO Alarm State" }
            ]
        },

        { children: [{ description: "Not Muted" }, { description: "Muted" }] },

        {
            children: [
                { description: "Device has not expired" },
                { description: "Device has reached its end of service" }
            ]
        },

        {
            children: [
                { description: "Nominal state, the sensor is not contaminated" },
                { description: "Low contamination" },
                { description: "Warning state" },
                { description: "Critical state, will cause nuisance alarms" }
            ]
        }
    ]
});
