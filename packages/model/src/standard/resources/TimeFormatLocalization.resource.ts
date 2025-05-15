/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { TimeFormatLocalization } from "#index.js";

TimeFormatLocalization.patch({
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
        { children: [{ description: "CalendarFormat" }] },
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "Time conveyed with a 12-hour clock" },
                { description: "Time conveyed with a 24-hour clock" },
                { description: "Use active locale clock" }
            ]
        },

        {
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
