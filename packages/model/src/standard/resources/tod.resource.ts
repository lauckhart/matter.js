/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "tod", tag: "datatype",
    description: "Time of day",
    details: "Represents time without a date component.",
    xref: "core§7.19.2.3",

    children: [
        { name: "hours", tag: "field", description: "Hour of the current day." },
        { name: "minutes", tag: "field", description: "Minute of the current hour." },
        { name: "seconds", tag: "field", description: "Second of the current minute." },
        { name: "hundredths", tag: "field", description: "Hundredth of the current second." }
    ]
});
