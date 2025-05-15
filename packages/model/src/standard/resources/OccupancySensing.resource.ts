/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OccupancySensing } from "#index.js";

OccupancySensing.patch({
    classification: "application", pics: "OCC",
    details: "The server cluster provides an interface to occupancy sensing functionality based on one or more " +
        "sensing modalities, including configuration and provision of notifications of occupancy status.",
    xref: { document: "cluster", section: "2.7" },

    children: [
        undefined,

        {
            xref: { document: "cluster", section: "2.7.4" },

            children: [
                { description: "Other", details: "Supports sensing using a modality not listed in the other bits" },
                { description: "PassiveInfrared", details: "Supports sensing using PIR (Passive InfraRed)" },
                { description: "Ultrasonic", details: "Supports sensing using UltraSound" },
                { description: "PhysicalContact", details: "Supports sensing using a physical contact" },
                {
                    description: "ActiveInfrared",
                    details: "Supports sensing using Active InfraRed measurement (e.g. time-of- flight or transflective/reflective " +
                        "IR sensing)"
                },
                { description: "Radar", details: "Supports sensing using radar waves (microwave)" },
                { description: "RfSensing", details: "Supports sensing based on RF signal analysis" },
                { description: "Vision", details: "Supports sensing based on analyzing images" }
            ]
        },

        {
            details: "Indicates the sensed (processed) status of occupancy. For compatibility reasons this is expressed as " +
                "a bitmap where the status is indicated in bit 0: a value of 1 means occupied, and 0 means " +
                "unoccupied, with the other bits set to 0; this can be considered equivalent to a boolean.",
            xref: { document: "cluster", section: "2.7.6.1" }
        },

        { xref: { document: "cluster", section: "2.7.6" } },
        { xref: { document: "cluster", section: "2.7.6" } },

        {
            details: "This attribute shall specify the time delay, in seconds, before the sensor changes to its unoccupied " +
                "state after the last detection of occupancy in the sensed area. This is equivalent to the legacy " +
                "*OccupiedToUnoccupiedDelay attributes." +
                "\n" +
                "The value of HoldTime shall be within the limits provided in the HoldTimeLimits attribute, i.e. " +
                "HoldTimeMin <= HoldTime <= HoldTimeMax" +
                "\n" +
                "Low values of HoldTime SHOULD be avoided since they could lead to many reporting messages. A value 0 " +
                "for HoldTime shall NOT be used." +
                "\n" +
                "The figure below illustrates this with an example of how this attribute is used for a PIR sensor. It " +
                "uses threshold detection to generate an \"internal detection\" signal, which needs post-processing to " +
                "become usable for transmission (traffic shaping). The bit in the Occupancy attribute will be set to " +
                "1 when the internal detection signal goes high, and will stay at 1 for HoldTime after the (last) " +
                "instance where the internal detection signal goes low." +
                "\n" +
                "The top half of the figure shows the case of a single trigger: the bit in the Occupancy attribute " +
                "will be 1 for the duration of the PIR signal exceeding the threshold plus HoldTime. The bottom half " +
                "of the figure shows the case of multiple triggers: the second trigger starts before the HoldTime of " +
                "the first trigger has expired; this results in a single period of the bit in the Occupancy attribute " +
                "being 1. The bit in the Occupancy attribute will be set to 1 from the start of the first period " +
                "where the PIR signal exceeds the threshold until HoldTime after the last moment where the PIR " +
                "exceeded the threshold." +
                "\n" +
                "Figure 13. Processing of PIR signal towards Occupancy attribute using HoldTime",

            xref: { document: "cluster", section: "2.7.6.3" }
        },

        {
            details: "Indicates the server’s limits, and default value, for the HoldTime attribute.",
            xref: { document: "cluster", section: "2.7.6.4" }
        },
        {
            details: "This attribute shall specify the time delay, in seconds, before the PIR sensor changes to its " +
                "unoccupied state after the last detection of occupancy in the sensed area.",
            xref: { document: "cluster", section: "2.7.6.6" }
        },
        {
            details: "This attribute shall specify the time delay, in seconds, before the PIR sensor changes to its " +
                "occupied state after the first detection of occupancy in the sensed area.",
            xref: { document: "cluster", section: "2.7.6.7" }
        },
        {
            details: "This attribute shall specify the number of occupancy detection events that must occur in the period " +
                "PIRUnoccupiedToOccupiedDelay, before the PIR sensor changes to its occupied state.",
            xref: { document: "cluster", section: "2.7.6.8" }
        },
        {
            details: "This attribute shall specify the time delay, in seconds, before the Ultrasonic sensor changes to its " +
                "unoccupied state after the last detection of occupancy in the sensed area.",
            xref: { document: "cluster", section: "2.7.6.9" }
        },
        {
            details: "This attribute shall specify the time delay, in seconds, before the Ultrasonic sensor changes to its " +
                "occupied state after the first detection of occupancy in the sensed area.",
            xref: { document: "cluster", section: "2.7.6.10" }
        },
        {
            details: "This attribute shall specify the number of occupancy detection events that must occur in the period " +
                "UltrasonicUnoccupiedToOccupiedDelay, before the Ultrasonic sensor changes to its occupied state.",
            xref: { document: "cluster", section: "2.7.6.11" }
        },
        {
            details: "This attribute shall specify the time delay, in seconds, before the physical contact occupancy " +
                "sensor changes to its unoccupied state after detecting the unoccupied event.",
            xref: { document: "cluster", section: "2.7.6.12" }
        },
        {
            details: "This attribute shall specify the time delay, in seconds, before the physical contact sensor changes " +
                "to its occupied state after the first detection of the occupied event.",
            xref: { document: "cluster", section: "2.7.6.13" }
        },

        {
            details: "This attribute shall specify the number of occupancy detection events that must occur in the period " +
                "PhysicalContactUnoccupiedToOccupiedDelay, before the PhysicalContact sensor changes to its occupied " +
                "state.",
            xref: { document: "cluster", section: "2.7.6.14" }
        },

        {
            details: "If this event is supported, it shall be generated when the Occupancy attribute changes.",
            xref: { document: "cluster", section: "2.7.7.1" },
            children: [{
                details: "This field shall indicate the new value of the Occupancy attribute.",
                xref: { document: "cluster", section: "2.7.7.1.1" }
            }]
        },

        {
            xref: { document: "cluster", section: "2.7.5.1" },

            children: [{
                description: "Indicates the sensed occupancy state",
                details: "If this bit is set, it shall indicate the occupied state else if the bit if not set, it shall " +
                    "indicate the unoccupied state.",
                xref: { document: "cluster", section: "2.7.5.1.1" }
            }]
        },

        {
            details: "NOTE" +
                "\n" +
                "This enum is as defined in ClusterRevision 4 and its definition shall NOT be extended; the feature " +
                "flags provide the sensor modality (or modalities) for later cluster revisions. See Backward " +
                "Compatibility section.",
            xref: { document: "cluster", section: "2.7.5.2" },
            children: [
                { description: "Indicates a passive infrared sensor." },
                { description: "Indicates a ultrasonic sensor." },
                { description: "Indicates a physical contact sensor." }
            ]
        },

        {
            details: "NOTE" +
                "\n" +
                "This enum is as defined in ClusterRevision 4 and its definition shall NOT be" +
                "\n" +
                "extended; the feature flags provide the sensor modality (or modalities) for later cluster revisions. " +
                "See Backward Compatibility section.",

            xref: { document: "cluster", section: "2.7.5.3" },

            children: [
                { description: "Indicates a passive infrared sensor." },
                { description: "Indicates a ultrasonic sensor." },
                { description: "Indicates a passive infrared and ultrasonic sensor." },
                { description: "Indicates a physical contact sensor." }
            ]
        },

        {
            details: "This structure provides information on the server’s supported values for the HoldTime attribute.",
            xref: { document: "cluster", section: "2.7.5.4" },

            children: [
                {
                    details: "This field shall specify the minimum value of the server’s supported value for the HoldTime " +
                        "attribute, in seconds.",
                    xref: { document: "cluster", section: "2.7.5.4.1" }
                },
                {
                    details: "This field shall specify the maximum value of the server’s supported value for the HoldTime " +
                        "attribute, in seconds.",
                    xref: { document: "cluster", section: "2.7.5.4.2" }
                },

                {
                    details: "This field shall specify the (manufacturer-determined) default value of the server’s HoldTime " +
                        "attribute, in seconds. This is the value that a client who wants to reset the settings to a valid " +
                        "default SHOULD use.",
                    xref: { document: "cluster", section: "2.7.5.4.3" }
                }
            ]
        }
    ]
});
