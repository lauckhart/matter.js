/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OccupancySensing } from "#index.js";

OccupancySensing.patch({
    details: "The server cluster provides an interface to occupancy sensing functionality based on one or more " +
        "sensing modalities, including configuration and provision of notifications of occupancy status.",
    xref: { document: "cluster", section: "2.7" },

    children: [
        undefined,

        {
            children: [
                { description: "Other" },
                { description: "PassiveInfrared" },
                { description: "Ultrasonic" },
                { description: "PhysicalContact" },
                { description: "ActiveInfrared" },
                { description: "Radar" },
                { description: "RfSensing" },
                { description: "Vision" }
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
        { children: [{ description: "Indicates the sensed occupancy state" }] },

        {
            children: [
                { description: "Indicates a passive infrared sensor." },
                { description: "Indicates a ultrasonic sensor." },
                { description: "Indicates a physical contact sensor." }
            ]
        },

        {
            children: [
                { description: "Indicates a passive infrared sensor." },
                { description: "Indicates a ultrasonic sensor." },
                { description: "Indicates a passive infrared and ultrasonic sensor." },
                { description: "Indicates a physical contact sensor." }
            ]
        }
    ]
});
