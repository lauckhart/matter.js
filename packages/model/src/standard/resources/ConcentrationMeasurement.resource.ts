/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ConcentrationMeasurement } from "#index.js";

ConcentrationMeasurement.patch({
    classification: "application", pics: "CONC",
    details: "The server cluster provides an interface to concentration measurement functionality. This cluster " +
        "shall to be used via an alias to a specific substance (see Cluster IDs).",
    xref: "cluster§2.10",

    children: [
        undefined,

        {
            xref: "cluster§2.10.4",

            children: [
                { description: "NumericMeasurement", details: "Cluster supports numeric measurement of substance" },
                {
                    description: "LevelIndication",
                    details: "Cluster supports basic level indication for substance using the ConcentrationLevel enum"
                },
                { description: "MediumLevel", details: "Cluster supports the Medium Concentration Level" },
                { description: "CriticalLevel", details: "Cluster supports the Critical Concentration Level" },
                { description: "PeakMeasurement", details: "Cluster supports peak numeric measurement of substance" },
                {
                    description: "AverageMeasurement",
                    details: "Cluster supports average numeric measurement of substance"
                }
            ]
        },

        {
            details: "Indicates the most recent measurement as a single-precision floating-point number. MeasuredValue’s " +
                "unit is represented by MeasurementUnit." +
                "\n" +
                "A value of null indicates that the measurement is unknown or outside the valid range. " +
                "MinMeasuredValue and MaxMeasuredValue define the valid range for MeasuredValue.",
            xref: "cluster§2.10.6.1"
        },

        {
            details: "Indicates the minimum value of MeasuredValue that is capable of being measured. A MinMeasuredValue " +
                "of null indicates that the MinMeasuredValue is not defined.",
            xref: "cluster§2.10.6.2"
        },
        {
            details: "Indicates the maximum value of MeasuredValue that is capable of being measured. A MaxMeasuredValue " +
                "of null indicates that the MaxMeasuredValue is not defined.",
            xref: "cluster§2.10.6.3"
        },

        {
            details: "Indicates the maximum value of MeasuredValue that has been measured during the " +
                "PeakMeasuredValueWindow. If this attribute is provided, the PeakMeasuredValueWindow attribute shall " +
                "also be provided.",
            xref: "cluster§2.10.6.4"
        },

        {
            details: "Indicates the window of time used for determining the PeakMeasuredValue. The value is in seconds.",
            xref: "cluster§2.10.6.5"
        },

        {
            details: "Indicates the average value of MeasuredValue that has been measured during the " +
                "AverageMeasuredValueWindow. If this attribute is provided, the AverageMeasuredValueWindow attribute " +
                "shall also be provided.",
            xref: "cluster§2.10.6.6"
        },

        {
            details: "Indicates the window of time used for determining the AverageMeasuredValue. The value is in seconds.",
            xref: "cluster§2.10.6.7"
        },
        {
            details: "Indicates the range of error or deviation that can be found in MeasuredValue and PeakMeasuredValue. " +
                "This is considered a +/- value and should be considered to be in MeasurementUnit.",
            xref: "cluster§2.10.6.8"
        },
        { details: "Indicates the unit of MeasuredValue. See MeasurementUnitEnum.", xref: "cluster§2.10.6.9" },
        {
            details: "Indicates the medium in which MeasuredValue is being measured. See MeasurementMediumEnum.",
            xref: "cluster§2.10.6.10"
        },
        { details: "Indicates the level of the substance detected. See LevelValueEnum.", xref: "cluster§2.10.6.11" },

        {
            details: "Where mentioned, Billion refers to 10, Trillion refers to 1012 (short scale).",
            xref: "cluster§2.10.5.1",

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
            xref: "cluster§2.10.5.2",
            children: [
                { description: "The measurement is being made in Air" },
                { description: "The measurement is being made in Water" },
                { description: "The measurement is being made in Soil" }
            ]
        },

        {
            xref: "cluster§2.10.5.3",

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
