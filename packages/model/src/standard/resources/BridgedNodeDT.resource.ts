/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "BridgedNode", tag: "deviceType",
    classification: "utility",
    details: "This defines conformance for a Bridged Node root endpoint. This endpoint is akin to a \"read me " +
        "first\" endpoint that describes itself and any other endpoints that make up the Bridged Node. A " +
        "Bridged Node endpoint represents a device on a foreign network, but is not the root endpoint of the " +
        "bridge itself.",
    xref: "device§2.5",

    children: [
        { name: "BridgedDeviceBasicInformation", tag: "requirement", xref: "device§2.5.5" },
        { name: "PowerSourceConfiguration", tag: "requirement", xref: "device§2.5.5" },
        { name: "PowerSource", tag: "requirement", xref: "device§2.5.5" },
        { name: "EcosystemInformation", tag: "requirement", xref: "device§2.5.5" },
        { name: "AdministratorCommissioning", tag: "requirement", xref: "device§2.5.5" },

        {
            name: "conditions", tag: "field",
            children: [{
                name: "FabricSynchronizedNode", tag: "field",
                description: "See description below.",
                xref: "device§2.5.3"
            }]
        }
    ]
});
