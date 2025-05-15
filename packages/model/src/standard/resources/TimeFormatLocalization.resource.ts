/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { TimeFormatLocalization } from "#index.js";

TimeFormatLocalization.patch({
    classification: "node", pics: "LTIME",

    details: "Nodes should be expected to be deployed to any and all regions of the world. These global regions " +
        "may have differing preferences for how dates and times are conveyed. As such, Nodes that visually or " +
        "audibly convey time information need a mechanism by which they can be configured to use a user’s " +
        "preferred format." +
        "\n" +
        "This cluster supports an interface to a Node. It provides attributes for determining and configuring " +
        "time and date formatting information that a Node shall utilize when conveying values to a user.",

    xref: { document: "core", section: "11.4" },

    children: [
        undefined,

        {
            xref: { document: "core", section: "11.4.4" },
            children: [{
                description: "CalendarFormat",
                details: "The Node can be configured to use different calendar formats when conveying values to a user."
            }]
        },

        {
            details: "Indicates the format that the Node is currently configured to use when conveying the hour unit of " +
                "time." +
                "\n" +
                "If not UseActiveLocale, this value shall take priority over any unit implied through the " +
                "ActiveLocale attribute." +
                "\n" +
                "If UseActiveLocale, any unit implied through the ActiveLocale attribute is used as the hour format, " +
                "and if ActiveLocale is not present, the hour format is unknown.",

            xref: { document: "core", section: "11.4.6.1" }
        },

        {
            details: "Indicates the calendar format that the Node is currently configured to use when conveying dates." +
                "\n" +
                "If not UseActiveLocale, this value shall take priority over any unit implied through the " +
                "ActiveLocale attribute." +
                "\n" +
                "If UseActiveLocale, any unit implied through the ActiveLocale attribute is used as the calendar " +
                "type, and if ActiveLocale is not present, the calendar type is unknown.",

            xref: { document: "core", section: "11.4.6.2" }
        },

        {
            details: "Indicates a list of CalendarTypeEnum values that are supported by the Node. The list shall NOT " +
                "contain any duplicate entries. The ordering of items within the list SHOULD NOT express any meaning. " +
                "The maximum length of the SupportedCalendarTypes list shall be equivalent to the number of " +
                "enumerations within CalendarTypeEnum.",
            xref: { document: "core", section: "11.4.6.3" }
        },

        {
            xref: { document: "core", section: "11.4.5.1" },
            children: [
                { description: "Time conveyed with a 12-hour clock" },
                { description: "Time conveyed with a 24-hour clock" },
                { description: "Use active locale clock" }
            ]
        },

        {
            xref: { document: "core", section: "11.4.5.2" },

            children: [
                { description: "Dates conveyed using the Buddhist calendar" },
                { description: "Dates conveyed using the Chinese calendar" },
                { description: "Dates conveyed using the Coptic calendar" },
                { description: "Dates conveyed using the Ethiopian calendar" },
                { description: "Dates conveyed using the Gregorian calendar" },
                { description: "Dates conveyed using the Hebrew calendar" },
                { description: "Dates conveyed using the Indian calendar" },
                { description: "Dates conveyed using the Islamic calendar" },
                { description: "Dates conveyed using the Japanese calendar" },
                { description: "Dates conveyed using the Korean calendar" },
                { description: "Dates conveyed using the Persian calendar" },
                { description: "Dates conveyed using the Taiwanese calendar" },
                { description: "calendar implied from active locale" }
            ]
        }
    ]
});
