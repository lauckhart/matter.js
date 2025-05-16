/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    tag: "datatype", name: "MeasurementAccuracyRangeStruct",

    details: "This struct represents the accuracy of a measurement for a range of measurement values. Accuracy " +
        "shall be expressed as a maximum +/- percentage of the true value, a maximum +/- fixed value of the " +
        "true value, or both." +
        "\n" +
        "  • If both PercentMax and FixedMax are indicated, then for a given true value in the range between " +
        "    RangeMin and RangeMax," +
        "\n" +
        "    ◦ the reported value shall be less than or equal to the sum of the true value, FixedMax and " +
        "      PercentMax percent of the true value." +
        "\n" +
        "    ◦ the reported value shall be greater than or equal to the true value minus the sum of FixedMax " +
        "      and PercentMax percent of the true value." +
        "\n" +
        "  • If only PercentMax is indicated, then for a given true value in the range between RangeMin and " +
        "    RangeMax," +
        "\n" +
        "    ◦ the reported value shall be less than or equal to the sum of the true value and PercentMax " +
        "      percent of the true value." +
        "\n" +
        "    ◦ the reported value shall be greater than or equal to the true value minus PercentMax per" +
        "\n" +
        "cent of the true value." +
        "\n" +
        "  • If only FixedMax is indicated, then for a given true value in the range between RangeMin and " +
        "    RangeMax," +
        "\n" +
        "    ◦ the reported value shall be less than or equal to the sum of the true value and FixedMax." +
        "\n" +
        "    ◦ the reported value shall be greater than or equal to the true value minus FixedMax.",

    xref: "cluster§2.1.4.3",

    children: [
        {
            tag: "field", name: "RangeMin",

            details: "This field shall indicate the minimum measurement value for the specified level of accuracy." +
                "\n" +
                "The value of this field shall be greater than or equal to the value of the MinMeasuredValue field on " +
                "the encompassing MeasurementAccuracyStruct." +
                "\n" +
                "The value of this field shall be less than or equal to the value of the MaxMeasuredValue field on " +
                "the encompassing MeasurementAccuracyStruct.",

            xref: "cluster§2.1.4.3.1"
        },

        {
            tag: "field", name: "RangeMax",

            details: "This field shall indicate the maximum measurement value for the specified level of accuracy. The " +
                "value of this field shall be greater than the value of the RangeMin field." +
                "\n" +
                "The value of this field shall be greater than or equal to the value of the MinMeasuredValue field on " +
                "the encompassing MeasurementAccuracyStruct." +
                "\n" +
                "The value of this field shall be less than or equal to the value of the MaxMeasuredValue field on " +
                "the encompassing MeasurementAccuracyStruct.",

            xref: "cluster§2.1.4.3.2"
        },

        {
            tag: "field", name: "PercentMax",
            details: "This field shall indicate the maximum +/- percentage accuracy for the associated measurement.",
            xref: "cluster§2.1.4.3.3"
        },
        {
            tag: "field", name: "PercentMin",
            details: "This field shall indicate the minimum +/- percentage accuracy for the associated measurement.",
            xref: "cluster§2.1.4.3.4"
        },
        {
            tag: "field", name: "PercentTypical",
            details: "This field shall indicate the typical +/- percentage accuracy for the associated measurement.",
            xref: "cluster§2.1.4.3.5"
        },

        {
            tag: "field", name: "FixedMax",
            details: "This field shall indicate the maximum +/- fixed accuracy for the associated measurement, in the unit " +
                "indicated by MeasurementType.",
            xref: "cluster§2.1.4.3.6"
        },

        {
            tag: "field", name: "FixedMin",
            details: "This field shall indicate the minimum +/- fixed accuracy for the associated measurement, in the unit " +
                "indicated by MeasurementType.",
            xref: "cluster§2.1.4.3.7"
        },

        {
            tag: "field", name: "FixedTypical",
            details: "This field shall indicate the typical +/- fixed accuracy for the associated measurement, in the unit " +
                "indicated by MeasurementType.",
            xref: "cluster§2.1.4.3.8"
        }
    ]
});
