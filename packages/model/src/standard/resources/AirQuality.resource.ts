/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "AirQuality", tag: "cluster",
    classification: "application", pics: "AIRQUAL",
    details: "This cluster provides an interface to air quality classification using distinct levels with " +
        "human-readable labels.",
    xref: "cluster§2.9",

    children: [
        {
            name: "FeatureMap", tag: "attribute",
            xref: "cluster§2.9.4",

            children: [
                { name: "FAIR", tag: "field", details: "Cluster supports the Fair air quality level" },
                { name: "MOD", tag: "field", details: "Cluster supports the Moderate air quality level" },
                { name: "VPOOR", tag: "field", details: "Cluster supports the Very poor air quality level" },
                { name: "XPOOR", tag: "field", details: "Cluster supports the Extremely poor air quality level" }
            ]
        },

        {
            name: "AirQuality", tag: "attribute",
            details: "Indicates a value from AirQualityEnum that is indicative of the currently measured air quality.",
            xref: "cluster§2.9.6.1"
        },

        {
            name: "AirQualityEnum", tag: "datatype",
            details: "The AirQualityEnum provides a representation of the quality of the analyzed air. It is up to the " +
                "device manufacturer to determine the mapping between the measured values and their corresponding " +
                "enumeration values.",
            xref: "cluster§2.9.5.1",

            children: [
                { name: "Unknown", tag: "field", description: "The air quality is unknown." },
                { name: "Good", tag: "field", description: "The air quality is good." },
                { name: "Fair", tag: "field", description: "The air quality is fair." },
                { name: "Moderate", tag: "field", description: "The air quality is moderate." },
                { name: "Poor", tag: "field", description: "The air quality is poor." },
                { name: "VeryPoor", tag: "field", description: "The air quality is very poor." },
                { name: "ExtremelyPoor", tag: "field", description: "The air quality is extremely poor." }
            ]
        }
    ]
});
