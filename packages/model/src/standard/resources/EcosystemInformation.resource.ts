/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { EcosystemInformation } from "#index.js";

EcosystemInformation.patch({
    details: "The Ecosystem Information Cluster provides extended device information for all the logical devices " +
        "represented by a Bridged Node. The Ecosystem Information Cluster presents the view of device name " +
        "and location metadata for presentation by a client of the cluster to a user. This cluster is " +
        "intended to support Fabric Synchronization and be present on an endpoint with the BridgedNode device " +
        "type listed in the DeviceTypeList of the endpoint’s Descriptor cluster." +
        "\n" +
        "This augments the Bridged Device Basic Information Cluster in the following ways:" +
        "\n" +
        "  • The Ecosystem Information Cluster adds support for providing a name and location for individual " +
        "    endpoints. (The endpoints do not need to be present on the Bridge for their name and location " +
        "    information to be present.)" +
        "\n" +
        "  • The Ecosystem Information Cluster adds metadata to support conflict resolution between multiple " +
        "    sources of the name and location data." +
        "\n" +
        "  • The Ecosystem Information Cluster supports user control for the presence of the name and " +
        "    location information by specifying more restricted access." +
        "\n" +
        "A client SHOULD use the information provided by the Ecosystem Information Cluster to help the user " +
        "organize and interact with their devices. Some examples may include:" +
        "\n" +
        "  • Directly organizing and labeling the devices in a client’s user interface." +
        "\n" +
        "  • Providing hints in the user interface, which can assist the user in organizing and labeling " +
        "    their devices." +
        "\n" +
        "For the purposes of the Ecosystem Information Cluster section, an instance of the Ecosystem " +
        "Information Cluster will be referred to as an \"instance\".",

    xref: { document: "core", section: "9.18" }
});
