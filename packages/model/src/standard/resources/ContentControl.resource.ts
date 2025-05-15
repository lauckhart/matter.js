/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ContentControl } from "#index.js";

ContentControl.patch({
    details: "This cluster is used for managing the content control (including \"parental control\") settings on a" +
        "\n" +
        "media device such as a TV, or Set-top Box." +
        "\n" +
        "This cluster allows to configure content control settings by clients with the Management privilege. " +
        "It is responsibility of the end product to enforce appropriate right access (for example, to prevent " +
        "a child from disabling this feature)." +
        "\n" +
        "NOTE Support for Content Control cluster is provisional.",

    xref: { document: "cluster", section: "6.13" },

    children: [
        undefined,

        {
            children: [
                { description: "ScreenTime" },
                { description: "PinManagement" },
                { description: "BlockUnrated" },
                { description: "OnDemandContentRating" },
                { description: "ScheduledContentRating" },
                { description: "BlockChannels" },
                { description: "BlockApplications" },
                { description: "BlockContentTimeWindow" }
            ]
        },

        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "Sunday" },
                { description: "Monday" },
                { description: "Tuesday" },
                { description: "Wednesday" },
                { description: "Thursday" },
                { description: "Friday" },
                { description: "Saturday" }
            ]
        },

        undefined,
        undefined,
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "Provided PIN Code does not match the current PIN code." },
                { description: "Provided Rating is out of scope of the corresponding Rating list." },
                { description: "Provided Channel(s) is invalid." },
                { description: "Provided Channel(s) already exists." },
                { description: "Provided Channel(s) doesn’t exist in BlockChannelList attribute." },
                { description: "Provided Application(s) is not identified." },
                { description: "Provided Application(s) already exists." },
                { description: "Provided Application(s) doesn’t exist in BlockApplicationList attribute." },
                { description: "Provided time Window already exists in BlockContentTimeWindow attribute." },
                { description: "Provided time window doesn’t exist in BlockContentTimeWindow attribute." }
            ]
        }
    ]
});
