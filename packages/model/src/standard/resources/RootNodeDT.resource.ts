/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { RootNodeDt } from "#index.js";

RootNodeDt.patch({
    details: "This defines conformance for a root node endpoint (see System Model specification). This endpoint is " +
        "akin to a \"read me first\" endpoint that describes itself and the other endpoints that make up the " +
        "node." +
        "\n" +
        "  • Device types with Endpoint scope shall NOT be supported on the same endpoint as this device " +
        "    type." +
        "\n" +
        "  • Clusters with an Application role shall NOT be supported on the same endpoint as this device " +
        "    type." +
        "\n" +
        "  • Other device types with Node scope may be supported on the same endpoint as this device type.",

    xref: { document: "device", section: "2.1" },

    children: [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,

        {
            children: [
                {
                    description: "The node only supports out-of-band-configured networking (e.g. rich user interface, manufacturer-specific means, custom commissioning flows, or future IP-compliant network technology not yet directly supported by NetworkCommissioning cluster)."
                },
                {
                    description: "The node has at least one endpoint where some Device Type present on the endpoint has a Device Library element requirement table entry that sets this condition to true."
                }
            ]
        }
    ]
});
