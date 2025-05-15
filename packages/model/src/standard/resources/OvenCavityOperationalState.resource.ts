/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "OvenCavityOperationalState", tag: "cluster",
    classification: "application", pics: "OVENOPSTATE",
    details: "This cluster is derived from the Operational State cluster and provides an interface for monitoring " +
        "the operational state of an oven.",
    xref: "cluster§8.10",

    children: [
        { name: "Pause", tag: "command", xref: "cluster§8.10.5" },
        { name: "Stop", tag: "command", xref: "cluster§8.10.5" },
        { name: "Start", tag: "command", xref: "cluster§8.10.5" },
        { name: "Resume", tag: "command", xref: "cluster§8.10.5" },
        { name: "OperationalCommandResponse", tag: "command", xref: "cluster§8.10.5" }
    ]
});
