/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add(
    {
        name: "PressureMeasurement", tag: "cluster",
        classification: "application", pics: "PRS",
        details: "This cluster provides an interface to pressure measurement functionality, including configuration " +
            "and provision of notifications of pressure measurements.",
        xref: "cluster§2.4",

        children: [
            {
                name: "FeatureMap", tag: "attribute",
                xref: "cluster§2.4.4",
                children: [{ name: "EXT", tag: "field", details: "Extended range and resolution" }]
            },

            {
                name: "MeasuredValue", tag: "attribute",
                details: "Indicates the pressure in kPa as follows:" +
                    "\n" +
                    "MeasuredValue = 10 x Pressure [kPa]" +
                    "\n" +
                    "The null value indicates that the value is not available.",
                xref: "cluster§2.4.5.1"
            },

            {
                name: "MinMeasuredValue", tag: "attribute",
                details: "Indicates the minimum value of MeasuredValue that can be measured. See Measured Value for more " +
                    "details." +
                    "\n" +
                    "The null value indicates that the value is not available.",
                xref: "cluster§2.4.5.2"
            },

            {
                name: "MaxMeasuredValue", tag: "attribute",
                details: "Indicates the maximum value of MeasuredValue that can be measured. See Measured Value for more " +
                    "details." +
                    "\n" +
                    "The null value indicates that the value is not available.",
                xref: "cluster§2.4.5.3"
            },

            { name: "Tolerance", tag: "attribute", details: "See Measured Value.", xref: "cluster§2.4.5.4" },

            {
                name: "ScaledValue", tag: "attribute",
                details: "Indicates the pressure in Pascals as follows:" +
                    "\n" +
                    "ScaledValue = 10Scale x Pressure [Pa]" +
                    "\n" +
                    "The null value indicates that the value is not available.",
                xref: "cluster§2.4.5.5"
            },

            {
                name: "MinScaledValue", tag: "attribute",
                details: "Indicates the minimum value of ScaledValue that can be measured. The null value indicates that the " +
                    "value is not available.",
                xref: "cluster§2.4.5.6"
            },

            {
                name: "MaxScaledValue", tag: "attribute",
                details: "Indicates the maximum value of ScaledValue that can be measured. The null value indicates that the " +
                    "value is not available.",
                xref: "cluster§2.4.5.7"
            },

            {
                name: "ScaledTolerance", tag: "attribute",
                details: "Indicates the magnitude of the possible error that is associated with Scaled" +
                    "\n" +
                    "Value. The true value is located in the range" +
                    "\n" +
                    "(ScaledValue – ScaledTolerance) to (ScaledValue + ScaledTolerance).",
                xref: "cluster§2.4.5.8"
            },

            {
                name: "Scale", tag: "attribute",
                details: "Indicates the base 10 exponent used to obtain ScaledValue (see ScaledValue).",
                xref: "cluster§2.4.5.9"
            }
        ]
    }
);
