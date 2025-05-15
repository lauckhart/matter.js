/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PressureMeasurement } from "#index.js";

PressureMeasurement.patch(
    {
        classification: "application", pics: "PRS",
        details: "This cluster provides an interface to pressure measurement functionality, including configuration " +
            "and provision of notifications of pressure measurements.",
        xref: "cluster§2.4",

        children: [
            undefined,
            {
                xref: "cluster§2.4.4",
                children: [{ description: "Extended", details: "Extended range and resolution" }]
            },

            {
                details: "Indicates the pressure in kPa as follows:" +
                    "\n" +
                    "MeasuredValue = 10 x Pressure [kPa]" +
                    "\n" +
                    "The null value indicates that the value is not available.",
                xref: "cluster§2.4.5.1"
            },

            {
                details: "Indicates the minimum value of MeasuredValue that can be measured. See Measured Value for more " +
                    "details." +
                    "\n" +
                    "The null value indicates that the value is not available.",
                xref: "cluster§2.4.5.2"
            },

            {
                details: "Indicates the maximum value of MeasuredValue that can be measured. See Measured Value for more " +
                    "details." +
                    "\n" +
                    "The null value indicates that the value is not available.",
                xref: "cluster§2.4.5.3"
            },

            { details: "See Measured Value.", xref: "cluster§2.4.5.4" },

            {
                details: "Indicates the pressure in Pascals as follows:" +
                    "\n" +
                    "ScaledValue = 10Scale x Pressure [Pa]" +
                    "\n" +
                    "The null value indicates that the value is not available.",
                xref: "cluster§2.4.5.5"
            },

            {
                details: "Indicates the minimum value of ScaledValue that can be measured. The null value indicates that the " +
                    "value is not available.",
                xref: "cluster§2.4.5.6"
            },
            {
                details: "Indicates the maximum value of ScaledValue that can be measured. The null value indicates that the " +
                    "value is not available.",
                xref: "cluster§2.4.5.7"
            },

            {
                details: "Indicates the magnitude of the possible error that is associated with Scaled" +
                    "\n" +
                    "Value. The true value is located in the range" +
                    "\n" +
                    "(ScaledValue – ScaledTolerance) to (ScaledValue + ScaledTolerance).",
                xref: "cluster§2.4.5.8"
            },

            {
                details: "Indicates the base 10 exponent used to obtain ScaledValue (see ScaledValue).",
                xref: "cluster§2.4.5.9"
            }
        ]
    }
);
