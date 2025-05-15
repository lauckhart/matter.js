/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Descriptor } from "#index.js";

Descriptor.patch({
    details: "NOTE" +
        "\n" +
        "The Descriptor cluster is meant to replace the support from the Zigbee Device Object (ZDO) for " +
        "describing a node, its endpoints and clusters." +
        "\n" +
        "This cluster describes an endpoint instance on the node, independently from other endpoints, but " +
        "also allows composition of endpoints to conform to complex device type patterns." +
        "\n" +
        "This cluster supports a list of one or more device type identifiers that represent conformance to " +
        "device type specifications." +
        "\n" +
        "The cluster supports a PartsList attribute that is a list of zero or more endpoints to support a " +
        "composed device type.",

    xref: { document: "core", section: "9.5" },
    children: [undefined, { children: [{ description: "TagList" }] }]
});
