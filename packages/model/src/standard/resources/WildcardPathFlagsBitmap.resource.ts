/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "WildcardPathFlagsBitmap", tag: "datatype",
    details: "The WildcardPathFlagsBitmap indicates flags that apply to the path, affecting wildcard expansion. " +
        "The following flags are defined:",
    xref: "core§8.9.2.3",

    children: [
        {
            name: "WildcardSkipRootNode", tag: "field",
            description: "Skip the Root Node endpoint (endpoint 0) during wildcard expansion."
        },
        {
            name: "WildcardSkipGlobalAttributes", tag: "field",
            description: "Skip several large global attributes during wildcard expansion."
        },
        {
            name: "WildcardSkipAttributeList", tag: "field",
            description: "Skip the AttributeList global attribute during wildcard expansion."
        },
        {
            name: "WildcardSkipCommandLists", tag: "field",
            description: "Skip the AcceptedCommandList and GeneratedCommandList global attributes during wildcard expansion."
        },
        {
            name: "WildcardSkipCustomElements", tag: "field",
            description: "Skip any manufacturer-specific clusters or attributes during wildcard expansion."
        },
        {
            name: "WildcardSkipFixedAttributes", tag: "field",
            description: "Skip any Fixed (F) quality attributes during wildcard expansion."
        },
        {
            name: "WildcardSkipChangesOmittedAttributes", tag: "field",
            description: "Skip any Changes Omitted (C) quality attributes during wildcard expansion."
        },
        {
            name: "WildcardSkipDiagnosticsClusters", tag: "field",
            description: "Skip all clusters with the Diagnostics (K) quality during wildcard expansion."
        }
    ]
});
