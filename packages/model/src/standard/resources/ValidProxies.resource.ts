/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "ValidProxies", tag: "cluster",
    classification: "node", pics: "PXVALID",
    details: "This cluster provides a means for a device to be told of the valid set of possible proxies that can " +
        "proxy subscriptions on its behalf as per Section 9.15.7, “Proxy Discovery & Assignment Flow”.",
    xref: "core§9.15.14",

    children: [
        {
            name: "ValidProxyList", tag: "attribute",
            details: "List of valid proxies that can proxy this Node. Each entry in this list is fabric-scoped.",
            xref: "core§9.15.14.5.1"
        },

        {
            name: "GetValidProxiesRequest", tag: "command",
            details: "This command is used during proxy discovery, as specified in Section 9.15.7, “Proxy Discovery & " +
                "Assignment Flow”.",
            xref: "core§9.15.14.6.1"
        },

        {
            name: "GetValidProxiesResponse", tag: "command",
            details: "This command is used during proxy discovery, as specified in Section 9.15.7, “Proxy Discovery & " +
                "Assignment Flow”.",
            xref: "core§9.15.14.6.2"
        },

        {
            name: "ValidProxyStruct", tag: "datatype",
            details: "Encapsulates the Node ID of a Valid Proxy.",
            xref: "core§9.15.14.4.1"
        }
    ]
});
