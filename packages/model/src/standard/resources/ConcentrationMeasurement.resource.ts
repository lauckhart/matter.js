/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ConcentrationMeasurement } from "#index.js";

ConcentrationMeasurement.patch({
    details: "The server cluster provides an interface to concentration measurement functionality. This cluster " +
        "shall to be used via an alias to a specific substance (see Cluster IDs).",
    xref: { document: "cluster", section: "2.10" },

    children: [
        undefined,

        {
            children: [
                { description: "NumericMeasurement" },
                { description: "LevelIndication" },
                { description: "MediumLevel" },
                { description: "CriticalLevel" },
                { description: "PeakMeasurement" },
                { description: "AverageMeasurement" }
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

        {
            children: [
                { description: "Parts per Million (10)" },
                { description: "Parts per Billion (10)" },
                { description: "Parts per Trillion (1012)" },
                { description: "Milligram per m" },
                { description: "Microgram per m" },
                { description: "Nanogram per m" },
                { description: "Particles per m" },
                { description: "Becquerel per m" }
            ]
        },

        {
            children: [
                { description: "The measurement is being made in Air" },
                { description: "The measurement is being made in Water" },
                { description: "The measurement is being made in Soil" }
            ]
        },

        {
            children: [
                { description: "The level is Unknown" },
                { description: "The level is considered Low" },
                { description: "The level is considered Medium" },
                { description: "The level is considered High" },
                { description: "The level is considered Critical" }
            ]
        }
    ]
});
