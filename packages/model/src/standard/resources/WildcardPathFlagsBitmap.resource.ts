/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { WildcardPathFlagsBitmap } from "#index.js";

WildcardPathFlagsBitmap.patch({
    details: "The WildcardPathFlagsBitmap indicates flags that apply to the path, affecting wildcard expansion. " +
        "The following flags are defined:",
    xref: "core§8.9.2.3",

    children: [
        { description: "Skip the Root Node endpoint (endpoint 0) during wildcard expansion." },
        { description: "Skip several large global attributes during wildcard expansion." },
        { description: "Skip the AttributeList global attribute during wildcard expansion." },
        undefined,
        {
            description: "Skip the AcceptedCommandList and GeneratedCommandList global attributes during wildcard expansion."
        },
        { description: "Skip any manufacturer-specific clusters or attributes during wildcard expansion." },
        { description: "Skip any Fixed (F) quality attributes during wildcard expansion." },
        { description: "Skip any Changes Omitted (C) quality attributes during wildcard expansion." },
        { description: "Skip all clusters with the Diagnostics (K) quality during wildcard expansion." }
    ]
});
