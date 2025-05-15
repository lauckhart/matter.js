/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { date } from "#index.js";

date.patch({
    description: "Date",
    details: "This data type shall be a struct as defined below.",
    xref: "core§7.19.2.4",

    children: [
        { details: "The year subfield represents years from 1900 (0) to 2155 (255).", xref: "core§7.19.2.4.1" },
        { details: "This field represents months January (1) to December (12).", xref: "core§7.19.2.4.2" },
        {
            details: "This field represents the day of the month. Note that values in the range 29 to 31 may be invalid, " +
                "depending on the month and year.",
            xref: "core§7.19.2.4.3"
        },
        { details: "This represents the day of the week from Monday (1) to Sunday (7).", xref: "core§7.19.2.4.4" }
    ]
});
