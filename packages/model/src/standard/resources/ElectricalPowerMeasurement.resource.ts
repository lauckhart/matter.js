/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "ElectricalPowerMeasurement", tag: "cluster",
    classification: "application", pics: "EPM",
    details: "This cluster provides a mechanism for querying data about electrical power as measured by the " +
        "server.",
    xref: "cluster§2.13",

    children: [
        {
            name: "FeatureMap", tag: "attribute",
            xref: "cluster§2.13.4",

            children: [
                {
                    name: "DIRC", tag: "field",
                    details: "This feature indicates the cluster can measure a direct current.",
                    xref: "cluster§2.13.4.1"
                },
                {
                    name: "ALTC", tag: "field",
                    details: "This feature indicates the cluster can measure an alternating current.",
                    xref: "cluster§2.13.4.2"
                },

                {
                    name: "POLY", tag: "field",
                    details: "This feature indicates the cluster represents the collective measurements for a Polyphase power " +
                        "supply.",
                    xref: "cluster§2.13.4.3"
                },

                {
                    name: "HARM", tag: "field",
                    details: "This feature indicates the cluster can measure the harmonics of an alternating current.",
                    xref: "cluster§2.13.4.4"
                },
                {
                    name: "PWRQ", tag: "field",
                    details: "This feature indicates the cluster can measure the harmonic phases of an alternating current.",
                    xref: "cluster§2.13.4.5"
                }
            ]
        },

        {
            name: "PowerMode", tag: "attribute",
            details: "This shall indicate the current mode of the server. For some servers, such as an EV, this may change " +
                "depending on the mode of charging or discharging.",
            xref: "cluster§2.13.6.1"
        },

        {
            name: "NumberOfMeasurementTypes", tag: "attribute",
            details: "This shall indicate the maximum number of measurement types the server is capable of reporting.",
            xref: "cluster§2.13.6.2"
        },

        {
            name: "Accuracy", tag: "attribute",
            details: "This shall indicate a list of accuracy specifications for the measurement types supported by the " +
                "server. There shall be an entry for ActivePower, as well as any other measurement types implemented " +
                "by this server.",
            xref: "cluster§2.13.6.3"
        },

        {
            name: "Ranges", tag: "attribute",

            details: "This shall indicate a list of measured ranges for different measurement types. Each measurement type " +
                "shall have at most one entry in this list, representing the range of measurements in the most recent " +
                "measurement period." +
                "\n" +
                "The reporting interval of this attribute shall be manufacturer dependent. The server may choose to " +
                "omit publication of deltas considered not meaningful." +
                "\n" +
                "The server shall NOT mark this attribute ready for report if the last time this was done was more " +
                "recently than 1 second ago." +
                "\n" +
                "The server may delay marking this attribute ready for report for longer periods if needed, however " +
                "the server shall NOT delay marking this attribute as ready for report for longer than 60 seconds.",

            xref: "cluster§2.13.6.4"
        },

        {
            name: "Voltage", tag: "attribute",

            details: "This shall indicate the most recent Voltage reading in millivolts (mV)." +
                "\n" +
                "The reporting interval of this attribute shall be manufacturer dependent. The server may choose to " +
                "omit publication of deltas considered not meaningful." +
                "\n" +
                "The server shall NOT mark this attribute ready for report if the last time this was done was more " +
                "recently than 1 second ago." +
                "\n" +
                "The server may delay marking this attribute ready for report for longer periods if needed, however " +
                "the server shall NOT delay marking this attribute as ready for report for longer than 60 seconds." +
                "\n" +
                "If the voltage cannot be measured, a value of null shall be returned.",

            xref: "cluster§2.13.6.5"
        },

        {
            name: "ActiveCurrent", tag: "attribute",

            details: "This shall indicate the most recent ActiveCurrent reading in milliamps (mA)." +
                "\n" +
                "A positive value represents current flowing into the server, while a negative value represents " +
                "current flowing out of the server." +
                "\n" +
                "The reporting interval of this attribute shall be manufacturer dependent. The server may choose to " +
                "omit publication of deltas considered not meaningful." +
                "\n" +
                "The server shall NOT mark this attribute ready for report if the last time this was done was more " +
                "recently than 1 second ago." +
                "\n" +
                "The server may delay marking this attribute ready for report for longer periods if needed, however " +
                "the server shall NOT delay marking this attribute as ready for report for longer than 60 seconds." +
                "\n" +
                "If the current cannot be measured, a value of null shall be returned.",

            xref: "cluster§2.13.6.6"
        },

        {
            name: "ReactiveCurrent", tag: "attribute",

            details: "This shall indicate the most recent ReactiveCurrent reading in milliamps (mA)." +
                "\n" +
                "A positive value represents current flowing into the server, while a negative value represents " +
                "current flowing out of the server." +
                "\n" +
                "The reporting interval of this attribute shall be manufacturer dependent. The server may choose to " +
                "omit publication of deltas considered not meaningful." +
                "\n" +
                "The server shall NOT mark this attribute ready for report if the last time this was done was more " +
                "recently than 1 second ago." +
                "\n" +
                "The server may delay marking this attribute ready for report for longer periods if needed, however " +
                "the server shall NOT delay marking this attribute as ready for report for longer than 60 seconds." +
                "\n" +
                "If the current cannot be measured, a value of null shall be returned.",

            xref: "cluster§2.13.6.7"
        },

        {
            name: "ApparentCurrent", tag: "attribute",

            details: "This shall indicate the most recent ApparentCurrent (square root sum of the squares of active and " +
                "reactive currents) reading in milliamps (mA)." +
                "\n" +
                "The reporting interval of this attribute shall be manufacturer dependent. The server may choose to " +
                "omit publication of deltas considered not meaningful." +
                "\n" +
                "The server shall NOT mark this attribute ready for report if the last time this was done was more " +
                "recently than 1 second ago." +
                "\n" +
                "The server may delay marking this attribute ready for report for longer periods if needed, however " +
                "the server shall NOT delay marking this attribute as ready for report for longer than 60 seconds." +
                "\n" +
                "If the active or reactive currents cannot be measured, a value of null shall be returned.",

            xref: "cluster§2.13.6.8"
        },

        {
            name: "ActivePower", tag: "attribute",

            details: "This shall indicate the most recent ActivePower reading in milliwatts (mW). If the power cannot be " +
                "measured, a value of null shall be returned." +
                "\n" +
                "A positive value represents power imported, while a negative value represents power exported." +
                "\n" +
                "The reporting interval of this attribute shall be manufacturer dependent. The server may choose to " +
                "omit publication of deltas considered not meaningful." +
                "\n" +
                "The server shall NOT mark this attribute ready for report if the last time this was done was more " +
                "recently than 1 second ago." +
                "\n" +
                "The server may delay marking this attribute ready for report for longer periods if needed, however " +
                "the server shall NOT delay marking this attribute as ready for report for longer than 60 seconds." +
                "\n" +
                "If the Polyphase Power feature is set, this value represents the combined active power imported or " +
                "exported.",

            xref: "cluster§2.13.6.9"
        },

        {
            name: "ReactivePower", tag: "attribute",

            details: "This shall indicate the most recent ReactivePower reading in millivolt-amps reactive (mVAR). A " +
                "positive value represents power imported, while a negative value represents power exported." +
                "\n" +
                "The reporting interval of this attribute shall be manufacturer dependent. The server may choose to " +
                "omit publication of deltas considered not meaningful." +
                "\n" +
                "The server shall NOT mark this attribute ready for report if the last time this was done was more " +
                "recently than 1 second ago." +
                "\n" +
                "The server may delay marking this attribute ready for report for longer periods if needed, however " +
                "the server shall NOT delay marking this attribute as ready for report for longer than 60 seconds." +
                "\n" +
                "If the reactive power cannot be measured, a value of null shall be returned." +
                "\n" +
                "If the Polyphase Power feature is supported, this value represents the combined reactive power " +
                "imported or exported.",

            xref: "cluster§2.13.6.10"
        },

        {
            name: "ApparentPower", tag: "attribute",

            details: "This shall indicate the most recent ApparentPower reading in millivolt-amps (mVA)." +
                "\n" +
                "A positive value represents power imported, while a negative value represents power exported." +
                "\n" +
                "The reporting interval of this attribute shall be manufacturer dependent. The server may choose to " +
                "omit publication of deltas considered not meaningful." +
                "\n" +
                "The server shall NOT mark this attribute ready for report if the last time this was done was more " +
                "recently than 1 second ago." +
                "\n" +
                "The server may delay marking this attribute ready for report for longer periods if needed, however " +
                "the server shall NOT delay marking this attribute as ready for report for longer than 60 seconds." +
                "\n" +
                "If the apparent power cannot be measured, a value of null shall be returned.",

            xref: "cluster§2.13.6.11"
        },

        {
            name: "RmsVoltage", tag: "attribute",

            details: "This shall indicate the most recent RMSVoltage reading in millivolts (mV)." +
                "\n" +
                "The reporting interval of this attribute shall be manufacturer dependent. The server may choose to " +
                "omit publication of deltas considered not meaningful." +
                "\n" +
                "The server shall NOT mark this attribute ready for report if the last time this was done was more " +
                "recently than 1 second ago." +
                "\n" +
                "The server may delay marking this attribute ready for report for longer periods if needed, however " +
                "the server shall NOT delay marking this attribute as ready for report for longer than 60 seconds." +
                "\n" +
                "If the RMS voltage cannot be measured, a value of null shall be returned.",

            xref: "cluster§2.13.6.12"
        },

        {
            name: "RmsCurrent", tag: "attribute",

            details: "This shall indicate the most recent RMSCurrent reading in milliamps (mA)." +
                "\n" +
                "A positive value represents current flowing into the server, while a negative value represents " +
                "current flowing out of the server." +
                "\n" +
                "The reporting interval of this attribute shall be manufacturer dependent. The server may choose to " +
                "omit publication of deltas considered not meaningful." +
                "\n" +
                "The server shall NOT mark this attribute ready for report if the last time this was done was more " +
                "recently than 1 second ago." +
                "\n" +
                "The server may delay marking this attribute ready for report for longer periods if needed, however " +
                "the server shall NOT delay marking this attribute as ready for report for longer than 60 seconds." +
                "\n" +
                "If the RMS current cannot be measured, a value of null shall be returned.",

            xref: "cluster§2.13.6.13"
        },

        {
            name: "RmsPower", tag: "attribute",

            details: "This shall indicate the most recent RMSPower reading in milliwatts (mW)." +
                "\n" +
                "A positive value represents power imported, while a negative value represents power exported." +
                "\n" +
                "The reporting interval of this attribute shall be manufacturer dependent. The server may choose to " +
                "omit publication of deltas considered not meaningful." +
                "\n" +
                "The server shall NOT mark this attribute ready for report if the last time this was done was more " +
                "recently than 1 second ago." +
                "\n" +
                "The server may delay marking this attribute ready for report for longer periods if needed, however " +
                "the server shall NOT delay marking this attribute as ready for report for longer than 60 seconds." +
                "\n" +
                "If the RMS power cannot be measured, a value of null shall be returned.",

            xref: "cluster§2.13.6.14"
        },

        {
            name: "Frequency", tag: "attribute",

            details: "This shall indicate the most recent Frequency reading in millihertz (mHz)." +
                "\n" +
                "The reporting interval of this attribute shall be manufacturer dependent. The server may choose to " +
                "omit publication of deltas considered not meaningful." +
                "\n" +
                "The server shall NOT mark this attribute ready for report if the last time this was done was more " +
                "recently than 1 second ago." +
                "\n" +
                "The server may delay marking this attribute ready for report for longer periods if needed, however " +
                "the server shall NOT delay marking this attribute as ready for report for longer than 60 seconds." +
                "\n" +
                "If the frequency cannot be measured, a value of null shall be returned.",

            xref: "cluster§2.13.6.15"
        },

        {
            name: "HarmonicCurrents", tag: "attribute",

            details: "This shall indicate a list of HarmonicMeasurementStruct values, with each HarmonicMeasurementStruct " +
                "representing the harmonic current reading for the harmonic order specified by Order." +
                "\n" +
                "The reporting interval of this attribute shall be manufacturer dependent. The server may choose to " +
                "omit publication of deltas considered not meaningful." +
                "\n" +
                "The server shall NOT mark this attribute ready for report if the last time this was done was more " +
                "recently than 1 second ago." +
                "\n" +
                "The server may delay marking this attribute ready for report for longer periods if needed, however " +
                "the server shall NOT delay marking this attribute as ready for report for longer than 60 seconds.",

            xref: "cluster§2.13.6.16"
        },

        {
            name: "HarmonicPhases", tag: "attribute",

            details: "This shall indicate a list of HarmonicMeasurementStruct values, with each HarmonicMeasurementStruct " +
                "representing the most recent phase of the harmonic current reading for the harmonic" +
                "\n" +
                "order specified by Order." +
                "\n" +
                "The reporting interval of this attribute shall be manufacturer dependent. The server may choose to " +
                "omit publication of deltas considered not meaningful." +
                "\n" +
                "The server shall NOT mark this attribute ready for report if the last time this was done was more " +
                "recently than 1 second ago." +
                "\n" +
                "The server may delay marking this attribute ready for report for longer periods if needed, however " +
                "the server shall NOT delay marking this attribute as ready for report for longer than 60 seconds.",

            xref: "cluster§2.13.6.17"
        },

        {
            name: "PowerFactor", tag: "attribute",

            details: "This shall indicate the Power Factor ratio in +/- 1/100ths of a percent." +
                "\n" +
                "The reporting interval of this attribute shall be manufacturer dependent. The server may choose to " +
                "omit publication of deltas considered not meaningful." +
                "\n" +
                "The server shall NOT mark this attribute ready for report if the last time this was done was more " +
                "recently than 1 second ago." +
                "\n" +
                "The server may delay marking this attribute ready for report for longer periods if needed, however " +
                "the server shall NOT delay marking this attribute as ready for report for longer than 60 seconds.",

            xref: "cluster§2.13.6.18"
        },

        {
            name: "NeutralCurrent", tag: "attribute",

            details: "This shall indicate the most recent NeutralCurrent reading in milliamps (mA). Typically this is a " +
                "derived value, taking the magnitude of the vector sum of phase currents." +
                "\n" +
                "If the neutral current cannot be measured or derived, a value of null shall be returned." +
                "\n" +
                "A positive value represents an imbalance between the phase currents when power is imported. A " +
                "negative value represents an imbalance between the phase currents when power is exported." +
                "\n" +
                "The reporting interval of this attribute shall be manufacturer dependent. The server may choose to " +
                "omit publication of deltas considered not meaningful." +
                "\n" +
                "The server shall NOT mark this attribute ready for report if the last time this was done was more " +
                "recently than 1 second ago." +
                "\n" +
                "The server may delay marking this attribute ready for report for longer periods if needed, however " +
                "the server shall NOT delay marking this attribute as ready for report for longer than 60 seconds.",

            xref: "cluster§2.13.6.19"
        },

        {
            name: "MeasurementPeriodRanges", tag: "event",
            details: "If supported, this event shall be generated at the end of a measurement period. The start and end " +
                "times for measurement periods shall be determined by the server, and may represent overlapping " +
                "periods.",
            xref: "cluster§2.13.7.1",
            children: [{
                name: "Ranges", tag: "field",
                details: "This shall indicate the value of the Ranges attribute at the time of event generation.",
                xref: "cluster§2.13.7.1.1"
            }]
        },

        {
            name: "PowerModeEnum", tag: "datatype",
            xref: "cluster§2.13.5.1",
            children: [
                { name: "Dc", tag: "field", description: "Direct current" },
                { name: "Ac", tag: "field", description: "Alternating current, either single-phase or polyphase" }
            ]
        },

        {
            name: "MeasurementRangeStruct", tag: "datatype",

            details: "This struct shall indicate the maximum and minimum values of a given measurement type during a " +
                "measurement period, along with the observation times of these values." +
                "\n" +
                "A server which does not have the ability to determine the time in UTC, or has not yet done so, shall " +
                "use the system time fields to specify the measurement period and observation times." +
                "\n" +
                "A server which has determined the time in UTC shall use the timestamp fields to specify the " +
                "measurement period and observation times. Such a server may also include the systime fields to " +
                "indicate how many seconds had passed since boot for a given timestamp; this allows for client-side " +
                "resolution of UTC time for previous reports that only included systime.",

            xref: "cluster§2.13.5.2",

            children: [
                {
                    name: "MeasurementType", tag: "field",
                    details: "This field shall be the type of measurement for the range provided.",
                    xref: "cluster§2.13.5.2.1"
                },

                {
                    name: "Min", tag: "field",
                    details: "This field shall be the smallest measured value for the associated measurement over either the " +
                        "period between StartTimestamp and EndTimestamp, or the period between StartSystime and EndSystime, " +
                        "or both.",
                    xref: "cluster§2.13.5.2.2"
                },

                {
                    name: "Max", tag: "field",
                    details: "This field shall be the largest measured value for the associated measurement over the period " +
                        "between either StartTimestamp and EndTimestamp or the period between StartSystime and EndSystime, or " +
                        "both.",
                    xref: "cluster§2.13.5.2.3"
                },

                {
                    name: "StartTimestamp", tag: "field",
                    details: "This field shall be the timestamp in UTC of the beginning of the measurement period." +
                        "\n" +
                        "If the server had not yet determined the time in UTC at or before the beginning of the measurement " +
                        "period, or does not have the capability of determining the time in UTC, this field shall be omitted.",
                    xref: "cluster§2.13.5.2.4"
                },

                {
                    name: "EndTimestamp", tag: "field",
                    details: "This field shall be the timestamp in UTC of the end of the measurement period." +
                        "\n" +
                        "If the server had not yet determined the time in UTC at or before the beginning of the measurement " +
                        "period, or does not have the capability of determining the time in UTC, this field shall be omitted.",
                    xref: "cluster§2.13.5.2.5"
                },

                {
                    name: "MinTimestamp", tag: "field",
                    details: "This field shall be the most recent timestamp in UTC that the value in the Min field was measured." +
                        "\n" +
                        "This field shall be greater than or equal to the value of the StartTimestamp field. This field shall " +
                        "be less than or equal to the value of the EndTimestamp field.",
                    xref: "cluster§2.13.5.2.6"
                },

                {
                    name: "MaxTimestamp", tag: "field",
                    details: "This field shall be the most recent timestamp in UTC of the value in the Max field. This field shall " +
                        "be greater than or equal to the value of the StartTimestamp field. This field shall be less than or " +
                        "equal to the value of the EndTimestamp field.",
                    xref: "cluster§2.13.5.2.7"
                },

                {
                    name: "StartSystime", tag: "field",
                    details: "This field shall be the time since boot of the beginning of the measurement period." +
                        "\n" +
                        "If the server had determined the time in UTC at or before the start of the measurement period, this " +
                        "field may be omitted along with the EndSystime, MinSystime, and MaxSystime fields.",
                    xref: "cluster§2.13.5.2.8"
                },

                {
                    name: "EndSystime", tag: "field",
                    details: "This field shall be the time since boot of the end of the measurement period." +
                        "\n" +
                        "If the server had determined the time in UTC at the end of the measurement period, this field may be " +
                        "omitted along with the StartSystime field, MinSystime, and MaxSystime fields.",
                    xref: "cluster§2.13.5.2.9"
                },

                {
                    name: "MinSystime", tag: "field",
                    details: "This field shall be the measurement time since boot of the value in the Min field was measured. This " +
                        "field shall be greater than or equal to the value of the StartSystime field." +
                        "\n" +
                        "This field shall be less than or equal to the value of the EndSystime field.",
                    xref: "cluster§2.13.5.2.10"
                },

                {
                    name: "MaxSystime", tag: "field",
                    details: "This field shall be the measurement time since boot of the value in the Max field. This field shall " +
                        "be greater than or equal to the value of the StartSystime field." +
                        "\n" +
                        "This field shall be less than or equal to the value of the EndSystime field.",
                    xref: "cluster§2.13.5.2.11"
                }
            ]
        },

        {
            name: "HarmonicMeasurementStruct", tag: "datatype",
            xref: "cluster§2.13.5.3",

            children: [
                {
                    name: "Order", tag: "field",
                    details: "This field shall be the order of the harmonic being measured. Typically this is an odd number, but " +
                        "servers may choose to report even harmonics.",
                    xref: "cluster§2.13.5.3.1"
                },

                {
                    name: "Measurement", tag: "field",

                    details: "This field shall be the measured value for the given harmonic order." +
                        "\n" +
                        "For the Harmonic Currents attribute, this value is the most recently measured harmonic current " +
                        "reading in milliamps (mA). A positive value indicates that the measured harmonic current is " +
                        "positive, and a negative value indicates that the measured harmonic current is negative." +
                        "\n" +
                        "For the Harmonic Phases attribute, this value is the most recent phase of the given harmonic order" +
                        "\n" +
                        "in millidegrees (mDeg). A positive value indicates that the measured phase is leading, and a " +
                        "negative value indicates that the measured phase is lagging." +
                        "\n" +
                        "If this measurement is not currently available, a value of null shall be returned.",

                    xref: "cluster§2.13.5.3.2"
                }
            ]
        }
    ]
});
