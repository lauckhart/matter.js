/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BridgedDeviceBasicInformation } from "#index.js";

BridgedDeviceBasicInformation.patch({
    details: "This cluster is a derived cluster of the Basic Information cluster and serves two purposes towards a " +
        "Node communicating with a Bridge:" +
        "\n" +
        "  • Indicate that the functionality on the Endpoint where it is placed (and its Parts) is bridged, " +
        "    and" +
        "\n" +
        "  • Provide a centralized collection of attributes that the Node may collect to aid in conveying " +
        "    information regarding the Bridged Device to a user, such as the vendor name, the model name, or " +
        "    user-assigned name." +
        "\n" +
        "This cluster shall be exposed by a Bridge on the Endpoint representing each Bridged Device. When the " +
        "functionality of a Bridged Device is represented using a set of Endpoints, this cluster shall only " +
        "be exposed on the Endpoint which is at the top of the hierarchy for the functionality of that " +
        "Bridged Device." +
        "\n" +
        "This cluster shall NOT be used on an endpoint that is not in the Descriptor cluster PartsList of an " +
        "endpoint with an Aggregator device type." +
        "\n" +
        "This cluster has been derived from the Basic Information Cluster, and provides generic information " +
        "about the Bridged Device. Not all of the attributes in the Basic Information Cluster are relevant " +
        "for a Bridged Device (e.g. ProductID since it is not a Matter device). For other attributes, the " +
        "information which is listed as Mandatory for the Basic Information Cluster, may not be available " +
        "when the Bridged Device does not provide it to the Bridge, and the Bridge has no other means to " +
        "determine it. For such cases where the information for a particular attribute is not available, the " +
        "Bridge SHOULD NOT include the attribute in the cluster for this Bridged Device. See below for " +
        "Conformance details.",

    xref: { document: "core", section: "9.13" },
    children: [undefined, { children: [{ description: "BridgedIcdSupport" }] }]
});
