/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { tod } from "#index.js";

tod.patch({
    description: "Time of day",
    details: "Represents time without a date component.",
    xref: { document: "core", section: "7.19.2.3" },

    children: [
        { description: "Hour of the current day." },
        { description: "Minute of the current hour." },
        { description: "Second of the current minute." },
        { description: "Hundredth of the current second." }
    ]
});
