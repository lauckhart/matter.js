/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ProxyConfiguration } from "#index.js";

ProxyConfiguration.patch({
    classification: "node", pics: "PXCFG",
    details: "This cluster provides a means for a proxy-capable device to be told the set of Nodes it shall proxy.",
    xref: { document: "core", section: "9.15.13" },

    children: [
        undefined,
        {
            details: "List of proxy configurations. There shall NOT be multiple entries in this list for the same fabric.",
            xref: { document: "core", section: "9.15.13.5.1" }
        },

        {
            xref: { document: "core", section: "9.15.13.4.1" },

            children: [
                {
                    details: "This field shall be set to true to indicate to the proxy that it shall proxy all nodes. When true, " +
                        "the SourceList attribute is ignored.",
                    xref: { document: "core", section: "9.15.13.4.1.1" }
                },
                {
                    details: "When ProxyAllNodes is false, this list contains the set of Node IDs of sources that this proxy shall " +
                        "specifically proxy.",
                    xref: { document: "core", section: "9.15.13.4.1.2" }
                }
            ]
        }
    ]
});
