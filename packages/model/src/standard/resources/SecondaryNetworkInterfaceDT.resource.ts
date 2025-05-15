/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SecondaryNetworkInterfaceDt } from "#index.js";

SecondaryNetworkInterfaceDt.patch({
    classification: "utility",

    details: "A Secondary Network Interface device provides an additional network interface supported by the Node, " +
        "supplementing the primary interface hosted by the Root Node endpoint." +
        "\n" +
        "A Node supporting multiple network interfaces shall include the primary interface on the Root Node " +
        "endpoint, along with secondary interfaces on other endpoints. The priorities of these network " +
        "interfaces are determined by the order of their endpoints, where interfaces with smaller endpoint " +
        "numbers are higher priority.",

    xref: { document: "device", section: "2.8" },

    children: [
        undefined,
        { xref: { document: "device", section: "2.8.3" } },
        { xref: { document: "device", section: "2.8.3" } },
        { xref: { document: "device", section: "2.8.3" } },
        { xref: { document: "device", section: "2.8.3" } }
    ]
});
