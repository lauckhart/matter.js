/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { TemperatureMeasurement } from "#index.js";

TemperatureMeasurement.patch({
    classification: "application", pics: "TMP",
    details: "This cluster provides an interface to temperature measurement functionality, including configuration " +
        "and provision of notifications of temperature measurements.",
    xref: "cluster§2.3",

    children: [
        undefined,
        {
            details: "Indicates the measured temperature. The null value indicates that the temperature is unknown.",
            xref: "cluster§2.3.4.1"
        },

        {
            details: "Indicates the minimum value of MeasuredValue that is capable of being measured. See Measured Value " +
                "for more details." +
                "\n" +
                "The null value indicates that the value is not available.",
            xref: "cluster§2.3.4.2"
        },

        {
            details: "This attribute indicates the maximum value of MeasuredValue that is capable of being measured. See " +
                "Measured Value for more details." +
                "\n" +
                "The null value indicates that the value is not available.",
            xref: "cluster§2.3.4.3"
        },

        { details: "See Measured Value.", xref: "cluster§2.3.4.4" }
    ]
});
