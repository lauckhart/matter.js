/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "TimeFormatLocalization", tag: "cluster",
    classification: "node", pics: "LTIME",

    details: "Nodes should be expected to be deployed to any and all regions of the world. These global regions " +
        "may have differing preferences for how dates and times are conveyed. As such, Nodes that visually or " +
        "audibly convey time information need a mechanism by which they can be configured to use a user’s " +
        "preferred format." +
        "\n" +
        "This cluster supports an interface to a Node. It provides attributes for determining and configuring " +
        "time and date formatting information that a Node shall utilize when conveying values to a user.",

    xref: "core§11.4",

    children: [
        {
            name: "FeatureMap", tag: "attribute",
            xref: "core§11.4.4",
            children: [{
                name: "CALFMT", tag: "field",
                details: "The Node can be configured to use different calendar formats when conveying values to a user."
            }]
        },

        {
            name: "HourFormat", tag: "attribute",

            details: "Indicates the format that the Node is currently configured to use when conveying the hour unit of " +
                "time." +
                "\n" +
                "If not UseActiveLocale, this value shall take priority over any unit implied through the " +
                "ActiveLocale attribute." +
                "\n" +
                "If UseActiveLocale, any unit implied through the ActiveLocale attribute is used as the hour format, " +
                "and if ActiveLocale is not present, the hour format is unknown.",

            xref: "core§11.4.6.1"
        },

        {
            name: "ActiveCalendarType", tag: "attribute",

            details: "Indicates the calendar format that the Node is currently configured to use when conveying dates." +
                "\n" +
                "If not UseActiveLocale, this value shall take priority over any unit implied through the " +
                "ActiveLocale attribute." +
                "\n" +
                "If UseActiveLocale, any unit implied through the ActiveLocale attribute is used as the calendar " +
                "type, and if ActiveLocale is not present, the calendar type is unknown.",

            xref: "core§11.4.6.2"
        },

        {
            name: "SupportedCalendarTypes", tag: "attribute",
            details: "Indicates a list of CalendarTypeEnum values that are supported by the Node. The list shall NOT " +
                "contain any duplicate entries. The ordering of items within the list SHOULD NOT express any meaning. " +
                "The maximum length of the SupportedCalendarTypes list shall be equivalent to the number of " +
                "enumerations within CalendarTypeEnum.",
            xref: "core§11.4.6.3"
        },

        {
            name: "HourFormatEnum", tag: "datatype",
            xref: "core§11.4.5.1",
            children: [
                { name: "12Hr", tag: "field", description: "Time conveyed with a 12-hour clock" },
                { name: "24Hr", tag: "field", description: "Time conveyed with a 24-hour clock" },
                { name: "UseActiveLocale", tag: "field", description: "Use active locale clock" }
            ]
        },

        {
            name: "CalendarTypeEnum", tag: "datatype",
            xref: "core§11.4.5.2",

            children: [
                { name: "Buddhist", tag: "field", description: "Dates conveyed using the Buddhist calendar" },
                { name: "Chinese", tag: "field", description: "Dates conveyed using the Chinese calendar" },
                { name: "Coptic", tag: "field", description: "Dates conveyed using the Coptic calendar" },
                { name: "Ethiopian", tag: "field", description: "Dates conveyed using the Ethiopian calendar" },
                { name: "Gregorian", tag: "field", description: "Dates conveyed using the Gregorian calendar" },
                { name: "Hebrew", tag: "field", description: "Dates conveyed using the Hebrew calendar" },
                { name: "Indian", tag: "field", description: "Dates conveyed using the Indian calendar" },
                { name: "Islamic", tag: "field", description: "Dates conveyed using the Islamic calendar" },
                { name: "Japanese", tag: "field", description: "Dates conveyed using the Japanese calendar" },
                { name: "Korean", tag: "field", description: "Dates conveyed using the Korean calendar" },
                { name: "Persian", tag: "field", description: "Dates conveyed using the Persian calendar" },
                { name: "Taiwanese", tag: "field", description: "Dates conveyed using the Taiwanese calendar" },
                { name: "UseActiveLocale", tag: "field", description: "calendar implied from active locale" }
            ]
        }
    ]
});
