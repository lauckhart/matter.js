/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "Closure", tag: "semanticNamespace",
    details: "The tags contained in this namespace may be used in any domain or context, to indicate an " +
        "association with a feature of a Closure, e.g. the button to activate opening a garage door.",
    xref: "namespace§2",
    children: [
        { name: "Opening", tag: "semanticTag", description: "Move toward open position" },
        { name: "Closing", tag: "semanticTag", description: "Move toward closed position" },
        { name: "Stop", tag: "semanticTag", description: "Stop any movement" }
    ]
});
