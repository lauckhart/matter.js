/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "ConcentrationMeasurement", tag: "cluster",
    classification: "application", pics: "CONC",
    details: "The server cluster provides an interface to concentration measurement functionality. This cluster " +
        "shall to be used via an alias to a specific substance (see Cluster IDs).",
    xref: "cluster§2.10",

    children: [
        {
            name: "FeatureMap", tag: "attribute",
            xref: "cluster§2.10.4",

            children: [
                { name: "MEA", tag: "field", details: "Cluster supports numeric measurement of substance" },
                {
                    name: "LEV", tag: "field",
                    details: "Cluster supports basic level indication for substance using the ConcentrationLevel enum"
                },
                { name: "MED", tag: "field", details: "Cluster supports the Medium Concentration Level" },
                { name: "CRI", tag: "field", details: "Cluster supports the Critical Concentration Level" },
                { name: "PEA", tag: "field", details: "Cluster supports peak numeric measurement of substance" },
                { name: "AVG", tag: "field", details: "Cluster supports average numeric measurement of substance" }
            ]
        },

        {
            name: "MeasuredValue", tag: "attribute",
            details: "Indicates the most recent measurement as a single-precision floating-point number. MeasuredValue’s " +
                "unit is represented by MeasurementUnit." +
                "\n" +
                "A value of null indicates that the measurement is unknown or outside the valid range. " +
                "MinMeasuredValue and MaxMeasuredValue define the valid range for MeasuredValue.",
            xref: "cluster§2.10.6.1"
        },

        {
            name: "MinMeasuredValue", tag: "attribute",
            details: "Indicates the minimum value of MeasuredValue that is capable of being measured. A MinMeasuredValue " +
                "of null indicates that the MinMeasuredValue is not defined.",
            xref: "cluster§2.10.6.2"
        },

        {
            name: "MaxMeasuredValue", tag: "attribute",
            details: "Indicates the maximum value of MeasuredValue that is capable of being measured. A MaxMeasuredValue " +
                "of null indicates that the MaxMeasuredValue is not defined.",
            xref: "cluster§2.10.6.3"
        },

        {
            name: "PeakMeasuredValue", tag: "attribute",
            details: "Indicates the maximum value of MeasuredValue that has been measured during the " +
                "PeakMeasuredValueWindow. If this attribute is provided, the PeakMeasuredValueWindow attribute shall " +
                "also be provided.",
            xref: "cluster§2.10.6.4"
        },

        {
            name: "PeakMeasuredValueWindow", tag: "attribute",
            details: "Indicates the window of time used for determining the PeakMeasuredValue. The value is in seconds.",
            xref: "cluster§2.10.6.5"
        },

        {
            name: "AverageMeasuredValue", tag: "attribute",
            details: "Indicates the average value of MeasuredValue that has been measured during the " +
                "AverageMeasuredValueWindow. If this attribute is provided, the AverageMeasuredValueWindow attribute " +
                "shall also be provided.",
            xref: "cluster§2.10.6.6"
        },

        {
            name: "AverageMeasuredValueWindow", tag: "attribute",
            details: "Indicates the window of time used for determining the AverageMeasuredValue. The value is in seconds.",
            xref: "cluster§2.10.6.7"
        },

        {
            name: "Uncertainty", tag: "attribute",
            details: "Indicates the range of error or deviation that can be found in MeasuredValue and PeakMeasuredValue. " +
                "This is considered a +/- value and should be considered to be in MeasurementUnit.",
            xref: "cluster§2.10.6.8"
        },

        {
            name: "MeasurementUnit", tag: "attribute",
            details: "Indicates the unit of MeasuredValue. See MeasurementUnitEnum.",
            xref: "cluster§2.10.6.9"
        },
        {
            name: "MeasurementMedium", tag: "attribute",
            details: "Indicates the medium in which MeasuredValue is being measured. See MeasurementMediumEnum.",
            xref: "cluster§2.10.6.10"
        },
        {
            name: "LevelValue", tag: "attribute",
            details: "Indicates the level of the substance detected. See LevelValueEnum.",
            xref: "cluster§2.10.6.11"
        },

        {
            name: "MeasurementUnitEnum", tag: "datatype",
            details: "Where mentioned, Billion refers to 10, Trillion refers to 1012 (short scale).",
            xref: "cluster§2.10.5.1",

            children: [
                { name: "Ppm", tag: "field", description: "Parts per Million (10)" },
                { name: "Ppb", tag: "field", description: "Parts per Billion (10)" },
                { name: "Ppt", tag: "field", description: "Parts per Trillion (1012)" },
                { name: "Mgm3", tag: "field", description: "Milligram per m" },
                { name: "Ugm3", tag: "field", description: "Microgram per m" },
                { name: "Ngm3", tag: "field", description: "Nanogram per m" },
                { name: "Pm3", tag: "field", description: "Particles per m" },
                { name: "Bqm3", tag: "field", description: "Becquerel per m" }
            ]
        },

        {
            name: "MeasurementMediumEnum", tag: "datatype",
            xref: "cluster§2.10.5.2",
            children: [
                { name: "Air", tag: "field", description: "The measurement is being made in Air" },
                { name: "Water", tag: "field", description: "The measurement is being made in Water" },
                { name: "Soil", tag: "field", description: "The measurement is being made in Soil" }
            ]
        },

        {
            name: "LevelValueEnum", tag: "datatype",
            xref: "cluster§2.10.5.3",

            children: [
                { name: "Unknown", tag: "field", description: "The level is Unknown" },
                { name: "Low", tag: "field", description: "The level is considered Low" },
                { name: "Medium", tag: "field", description: "The level is considered Medium" },
                { name: "High", tag: "field", description: "The level is considered High" },
                { name: "Critical", tag: "field", description: "The level is considered Critical" }
            ]
        }
    ]
});
