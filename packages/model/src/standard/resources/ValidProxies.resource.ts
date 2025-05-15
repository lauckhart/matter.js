/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ValidProxies } from "#index.js";

ValidProxies.patch({
    classification: "node", pics: "PXVALID",
    details: "This cluster provides a means for a device to be told of the valid set of possible proxies that can " +
        "proxy subscriptions on its behalf as per Section 9.15.7, “Proxy Discovery & Assignment Flow”.",
    xref: { document: "core", section: "9.15.14" },

    children: [
        undefined,
        {
            details: "List of valid proxies that can proxy this Node. Each entry in this list is fabric-scoped.",
            xref: { document: "core", section: "9.15.14.5.1" }
        },
        {
            details: "This command is used during proxy discovery, as specified in Section 9.15.7, “Proxy Discovery & " +
                "Assignment Flow”.",
            xref: { document: "core", section: "9.15.14.6.1" }
        },
        {
            details: "This command is used during proxy discovery, as specified in Section 9.15.7, “Proxy Discovery & " +
                "Assignment Flow”.",
            xref: { document: "core", section: "9.15.14.6.2" }
        },
        { details: "Encapsulates the Node ID of a Valid Proxy.", xref: { document: "core", section: "9.15.14.4.1" } }
    ]
});
