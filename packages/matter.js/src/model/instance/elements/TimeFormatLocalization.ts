/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x002c, name: "TimeFormatLocalization",
    classification: "node", description: "Time Format Localization",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "HourFormat",
            access: "RW", conformance: "M", default: "null", quality: "X N", type: "HourFormatEnum",
            details: "The HourFormat attribute SHALL represent the format that the Node is " +
                     "currently configured to use when conveying the hour unit of time. If " +
                     "provided, this value SHALL take priority over any unit",
            xref: { document: "core", section: "11.4.6.1" }
        },

        {
            tag: "attribute", id: 0x0001, name: "ActiveCalendarType",
            access: "RW", conformance: "CALFMT", default: "null", quality: "X N", type: "CalendarTypeEnum",
            details: "The ActiveCalendarType attribute SHALL represent the calendar format " +
                     "that the Node is currently configured to use when conveying dates. If " +
                     "provided, this value SHALL take priority over any unit implied through" +
                     " the ActiveLocale Attribute",
            xref: { document: "core", section: "11.4.6.2" }
        },

        {
            tag: "attribute", id: 0x0002, name: "SupportedCalendarTypes",
            access: "R V", conformance: "CALFMT", constraint: "desc", default: "N/A", quality: "F", type: "list",
            details: "The SupportedCalendarTypes attribute SHALL represent a list of " +
                     "CalendarTypeEnum values that are supported by the Node. The list SHALL" +
                     " NOT contain any duplicate entries. The ordering of items within the " +
                     "list SHOULD NOT express any meaning. The maximum length of the " +
                     "SupportedCalendarTypes list SHALL be equivalent to the number of " +
                     "enumerations within CalendarTypeEnum",
            xref: { document: "core", section: "11.4.6.3" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "CalendarTypeEnum"
                }
            ]
        },

        {
            tag: "datatype", name: "CalendarTypeEnum",
            conformance: "M", type: "enum8",
            details: "This data type is derived from enum8",
            xref: { document: "core", section: "11.4.5.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "12Hr",
                    conformance: "M",
                    xref: { document: "core", section: "11.4.5.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "Chinese",
                    conformance: "M",
                    xref: { document: "core", section: "11.4.5.1" }
                },

                {
                    tag: "datatype", id: 0x0000, name: "Buddhist",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Coptic",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "Ethiopian",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Gregorian",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "Hebrew",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0006, name: "Indian",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0007, name: "Islamic",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "Japanese",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0009, name: "Korean",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000a, name: "Persian",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000b, name: "Taiwanese",
                    conformance: "M"
                }
            ]
        }
    ]
});
