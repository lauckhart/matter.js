/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Binding } from "#index.js";

Binding.patch({
    details: "NOTE" +
        "\n" +
        "This scope of this document is the Binding cluster as part of the Cluster Library. The Binding " +
        "cluster is meant to replace the support from the Zigbee Device Object (ZDO) for supporting the " +
        "binding table." +
        "\n" +
        "A binding represents a persistent relationship between an endpoint and one or more other local or " +
        "remote endpoints. A binding does not require that the relationship exists. It is up to the node " +
        "application to set up the relationship." +
        "\n" +
        "A binding is used to inform a client endpoint of one or more targets for a potential interaction. " +
        "For example: a light switch that controls one or more light bulbs, needs to be told the nodes and " +
        "endpoints of the bulbs, or told a group in which the bulbs are members. For example: A client that " +
        "needs to subscribe to an occupancy sensor, needs to know the node and endpoint of the sensor." +
        "\n" +
        "In such cases, a binding is used to direct a local endpoint to a target. The existence of the " +
        "Binding cluster on the client endpoint, allows the creation of one or more binding entries " +
        "(bindings) in the Binding cluster." +
        "\n" +
        "Each binding indicates another endpoint or cluster on another endpoint. Multiple bindings are " +
        "allowed, depending on the interaction." +
        "\n" +
        "A binding is either a unicast binding, where the target is a single endpoint on a single node, or a " +
        "groupcast binding, where the target is a group, which may indicate multiple endpoints on multiple " +
        "nodes. The binding may also target a single cluster on the target endpoint(s)." +
        "\n" +
        "When a client cluster requires a target for an interaction, the Binding cluster shall exist on the " +
        "same endpoint." +
        "\n" +
        "Once a binding entry is created on the Binding cluster, the client endpoint may initiate " +
        "interactions to the binding target.",

    xref: { document: "core", section: "9.6" }
});
