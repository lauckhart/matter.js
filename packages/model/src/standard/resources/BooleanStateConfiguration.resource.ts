/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add(
    {
        tag: "cluster", name: "BooleanStateConfiguration",
        classification: "application", pics: "BOOLCFG",
        details: "This cluster is used to configure a boolean sensor, including optional state change alarm features " +
            "and configuration of the sensitivity level associated with the sensor.",
        xref: "cluster§1.8",

        children: [
            {
                tag: "attribute", name: "FeatureMap",
                xref: "cluster§1.8.4",

                children: [
                    { tag: "field", name: "VIS", details: "Supports visual alarms" },
                    { tag: "field", name: "AUD", details: "Supports audible alarms" },

                    {
                        tag: "field", name: "SPRS",

                        details: "This feature shall indicate that the device is able to suppress the supported alarm modes, when the " +
                            "user acknowledges the alarm. This is intended to stop visual and/or audible alarms, when the user " +
                            "has become aware that the sensor is triggered, but it is no longer desired to have the alarm modes " +
                            "active on the device, e.g.:" +
                            "\n" +
                            "  • The triggering cause have been resolved by the user, but the sensor has not yet stopped " +
                            "    detecting the triggering cause." +
                            "\n" +
                            "  • The user is not able to address the triggering cause, but is aware of the alarm and " +
                            "    suppress/acknowledge it be addressed at a later point." +
                            "\n" +
                            "Acknowledge of alarms will for the remainder of this cluster be referred to as suppress." +
                            "\n" +
                            "A suppressed alarm is still considered active and will remain so unless it is actively disabled or " +
                            "the triggering condition is not longer present. The action of suppressing an alarm mode is only " +
                            "applicable to and is intended to stop the physical alarming, e.g. emitting a sound or blinking a " +
                            "light; it does not impact alarm reporting in AlarmsActive.",

                        xref: "cluster§1.8.4.1"
                    },

                    { tag: "field", name: "SENSLVL", details: "Supports ability to set sensor sensitivity" }
                ]
            },

            {
                tag: "attribute", name: "CurrentSensitivityLevel",
                details: "Indicates the currently selected sensitivity level." +
                    "\n" +
                    "If a write interaction to this attribute contains an unsupported sensitivity value, a " +
                    "CONSTRAINT_ERROR status shall be returned.",
                xref: "cluster§1.8.6.1"
            },

            {
                tag: "attribute", name: "SupportedSensitivityLevels",

                details: "Indicates the number of supported sensitivity levels by the device." +
                    "\n" +
                    "These supported sensitivity levels shall be ordered by sensitivity, where a value of 0 shall be " +
                    "considered the lowest sensitivity level (least sensitive) and the highest supported value shall be " +
                    "considered the highest sensitivity level." +
                    "\n" +
                    "The number of supported sensitivity levels SHOULD represent unique sensitivity levels supported by " +
                    "the device.",

                xref: "cluster§1.8.6.2"
            },

            {
                tag: "attribute", name: "DefaultSensitivityLevel",
                details: "Indicates the default sensitivity level selected by the manufacturer.",
                xref: "cluster§1.8.6.3"
            },

            {
                tag: "attribute", name: "AlarmsActive",

                details: "Indicates which specific alarm modes on the server are currently active. When the sensor is no " +
                    "longer triggered, this attribute shall be set to the inactive state, by setting the bit to 0, for " +
                    "all supported alarm modes." +
                    "\n" +
                    "If an alarm mode is not supported, the bit indicating this alarm mode shall always be 0. A bit shall " +
                    "indicate whether the alarm mode inactive or not:" +
                    "\n" +
                    "  • 0 = Inactive" +
                    "\n" +
                    "  • 1 = Active",

                xref: "cluster§1.8.6.4"
            },

            {
                tag: "attribute", name: "AlarmsSuppressed",

                details: "Indicates which specific alarm modes on the server are currently suppressed. When the sensor is no " +
                    "longer triggered, this attribute shall be set to the unsuppressed state, by setting the bit to 0, " +
                    "for all supported alarm modes." +
                    "\n" +
                    "If an alarm mode is not supported, the bit indicating this alarm mode shall always be 0. A bit shall " +
                    "indicate whether the alarm mode is suppressed or not:" +
                    "\n" +
                    "  • 0 = Not suppressed" +
                    "\n" +
                    "  • 1 = Suppressed",

                xref: "cluster§1.8.6.5"
            },

            {
                tag: "attribute", name: "AlarmsEnabled",

                details: "Indicates the alarm modes that will be emitted if the sensor is triggered. If an alarm mode is not " +
                    "supported, the bit indicating this alarm mode shall always be 0." +
                    "\n" +
                    "A bit shall indicate whether the alarm mode is enabled or disabled:" +
                    "\n" +
                    "  • 0 = Disabled" +
                    "\n" +
                    "  • 1 = Enabled",

                xref: "cluster§1.8.6.6"
            },

            {
                tag: "attribute", name: "AlarmsSupported",

                details: "Indicates the alarms supported by the sensor. A bit shall indicate whether the alarm mode is " +
                    "supported:" +
                    "\n" +
                    "  • 0 = Not supported" +
                    "\n" +
                    "  • 1 = Supported",

                xref: "cluster§1.8.6.7"
            },

            {
                tag: "attribute", name: "SensorFault",
                details: "Indicates any faults registered by the device.",
                xref: "cluster§1.8.6.8"
            },

            {
                tag: "event", name: "AlarmsStateChanged",

                details: "This event shall be generated after any bits in the AlarmsActive and/or AlarmsSuppressed attributes " +
                    "change. This may occur in situations such as when internal processing by the server determines that " +
                    "an alarm mode becomes active or inactive, or when the SuppressAlarm or EnableDisableAlarm commands " +
                    "are processed in a way that some alarm modes becomes suppressed, active or inactive." +
                    "\n" +
                    "If several alarm modes change state at the same time, a single event combining multiple changes may " +
                    "be emitted instead of multiple events each representing a single change.",

                xref: "cluster§1.8.8.1",

                children: [
                    {
                        tag: "field", name: "AlarmsActive",
                        details: "This field shall indicate the state of active alarm modes, as indicated by the AlarmsActive " +
                            "attribute, at the time the event was generated.",
                        xref: "cluster§1.8.8.1.1"
                    },

                    {
                        tag: "field", name: "AlarmsSuppressed",
                        details: "This field shall indicate the state of suppressed alarm modes, as indicated by the AlarmsSuppressed " +
                            "attribute, at the time the event was generated.",
                        xref: "cluster§1.8.8.1.2"
                    }
                ]
            },

            {
                tag: "event", name: "SensorFault",
                details: "This event shall be generated when the device registers or clears a fault.",
                xref: "cluster§1.8.8.2",

                children: [{
                    tag: "field", name: "SensorFault",
                    details: "This field shall indicate the value of the SensorFault attribute, at the time this event is " +
                        "generated.",
                    xref: "cluster§1.8.8.2.1"
                }]
            },

            {
                tag: "command", name: "SuppressAlarm",
                xref: "cluster§1.8.7.1",
                children: [{
                    tag: "field", name: "AlarmsToSuppress",
                    details: "This field shall indicate the alarm modes to suppress.",
                    xref: "cluster§1.8.7.1.1"
                }]
            },

            {
                tag: "command", name: "EnableDisableAlarm",
                xref: "cluster§1.8.7.2",

                children: [{
                    tag: "field", name: "AlarmsToEnableDisable",
                    details: "This field shall indicate the alarm modes to either enable or disable depending on the bit status, " +
                        "as specified for the AlarmsEnabled attribute.",
                    xref: "cluster§1.8.7.2.1"
                }]
            },

            {
                tag: "datatype", name: "AlarmModeBitmap",
                xref: "cluster§1.8.5.1",
                children: [
                    { tag: "field", name: "Visual", description: "Visual alarming" },
                    { tag: "field", name: "Audible", description: "Audible alarming" }
                ]
            },

            {
                tag: "datatype", name: "SensorFaultBitmap",
                xref: "cluster§1.8.5.2",
                children: [{ tag: "field", name: "GeneralFault", description: "Unspecified fault detected" }]
            }
        ]
    }
);
