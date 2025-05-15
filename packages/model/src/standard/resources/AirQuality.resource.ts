/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { AirQuality } from "#index.js";

AirQuality.patch({
    classification: "application", pics: "AIRQUAL",
    details: "This cluster provides an interface to air quality classification using distinct levels with " +
        "human-readable labels.",
    xref: { document: "cluster", section: "2.9" },

    children: [
        undefined,

        {
            xref: { document: "cluster", section: "2.9.4" },

            children: [
                { description: "Fair", details: "Cluster supports the Fair air quality level" },
                { description: "Moderate", details: "Cluster supports the Moderate air quality level" },
                { description: "VeryPoor", details: "Cluster supports the Very poor air quality level" },
                { description: "ExtremelyPoor", details: "Cluster supports the Extremely poor air quality level" }
            ]
        },

        {
            details: "Indicates a value from AirQualityEnum that is indicative of the currently measured air quality.",
            xref: { document: "cluster", section: "2.9.6.1" }
        },

        {
            details: "The AirQualityEnum provides a representation of the quality of the analyzed air. It is up to the " +
                "device manufacturer to determine the mapping between the measured values and their corresponding " +
                "enumeration values.",
            xref: { document: "cluster", section: "2.9.5.1" },

            children: [
                { description: "The air quality is unknown." },
                { description: "The air quality is good." },
                { description: "The air quality is fair." },
                { description: "The air quality is moderate." },
                { description: "The air quality is poor." },
                { description: "The air quality is very poor." },
                { description: "The air quality is extremely poor." }
            ]
        }
    ]
});
