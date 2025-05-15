/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "AtomicRequestTypeEnum", tag: "datatype",
    xref: "core§7.15.4",

    children: [
        { name: "BeginWrite", tag: "field", description: "Begin an atomic write" },
        { name: "CommitWrite", tag: "field", description: "Commit an atomic write" },
        {
            name: "RollbackWrite", tag: "field",
            description: "Rollback an atomic write, discarding any pending changes"
        }
    ]
});
