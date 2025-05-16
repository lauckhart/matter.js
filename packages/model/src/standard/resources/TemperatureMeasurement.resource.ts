/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    tag: "cluster", name: "TemperatureMeasurement",
    classification: "application", pics: "TMP",
    details: "This cluster provides an interface to temperature measurement functionality, including configuration " +
        "and provision of notifications of temperature measurements.",
    xref: "cluster§2.3",

    children: [
        {
            tag: "attribute", name: "MeasuredValue",
            details: "Indicates the measured temperature. The null value indicates that the temperature is unknown.",
            xref: "cluster§2.3.4.1"
        },

        {
            tag: "attribute", name: "MinMeasuredValue",
            details: "Indicates the minimum value of MeasuredValue that is capable of being measured. See Measured Value " +
                "for more details." +
                "\n" +
                "The null value indicates that the value is not available.",
            xref: "cluster§2.3.4.2"
        },

        {
            tag: "attribute", name: "MaxMeasuredValue",
            details: "This attribute indicates the maximum value of MeasuredValue that is capable of being measured. See " +
                "Measured Value for more details." +
                "\n" +
                "The null value indicates that the value is not available.",
            xref: "cluster§2.3.4.3"
        },

        { tag: "attribute", name: "Tolerance", details: "See Measured Value.", xref: "cluster§2.3.4.4" }
    ]
});
