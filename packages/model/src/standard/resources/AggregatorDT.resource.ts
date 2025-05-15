/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { AggregatorDt } from "#index.js";

AggregatorDt.patch({
    details: "This device type aggregates endpoints as a collection. Clusters on the endpoint indicating this " +
        "device type provide functionality for the collection of descendant endpoints present in the " +
        "PartsList of the endpoint’s descriptor, for example the Actions cluster." +
        "\n" +
        "The purpose of this device type is to aggregate functionality for a collection of endpoints. The " +
        "definition of the collection or functionality is not defined here." +
        "\n" +
        "When using this device type as a collection of bridged nodes, please see the \"Bridge\" section in the " +
        "System Model specification.",

    xref: { document: "device", section: "11.2" },
    children: [undefined, undefined, undefined, undefined, { children: [{ description: "See description below." }] }]
});
