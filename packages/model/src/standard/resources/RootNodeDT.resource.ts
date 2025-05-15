/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "RootNode", tag: "deviceType",
    classification: "node",

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

    xref: "device§2.1",

    children: [
        { name: "BasicInformation", tag: "requirement", xref: "device§2.1.5" },
        { name: "AccessControl", tag: "requirement", xref: "device§2.1.5" },
        { name: "PowerSourceConfiguration", tag: "requirement", xref: "device§2.1.5" },
        { name: "TimeSynchronization", tag: "requirement", xref: "device§2.1.5" },
        { name: "GroupKeyManagement", tag: "requirement", xref: "device§2.1.5" },
        { name: "GeneralCommissioning", tag: "requirement", xref: "device§2.1.5" },
        { name: "NetworkCommissioning", tag: "requirement", xref: "device§2.1.5" },
        { name: "AdministratorCommissioning", tag: "requirement", xref: "device§2.1.5" },
        { name: "OperationalCredentials", tag: "requirement", xref: "device§2.1.5" },
        { name: "LocalizationConfiguration", tag: "requirement", xref: "device§2.1.5" },
        { name: "TimeFormatLocalization", tag: "requirement", xref: "device§2.1.5" },
        { name: "UnitLocalization", tag: "requirement", xref: "device§2.1.5" },
        { name: "GeneralDiagnostics", tag: "requirement", xref: "device§2.1.5" },
        { name: "DiagnosticLogs", tag: "requirement", xref: "device§2.1.5" },
        { name: "SoftwareDiagnostics", tag: "requirement", xref: "device§2.1.5" },
        { name: "EthernetNetworkDiagnostics", tag: "requirement", xref: "device§2.1.5" },
        { name: "WiFiNetworkDiagnostics", tag: "requirement", xref: "device§2.1.5" },
        { name: "ThreadNetworkDiagnostics", tag: "requirement", xref: "device§2.1.5" },
        { name: "IcdManagement", tag: "requirement", xref: "device§2.1.5" },

        {
            name: "conditions", tag: "field",

            children: [
                {
                    name: "CustomNetworkConfig", tag: "field",
                    description: "The node only supports out-of-band-configured networking (e.g. rich user interface, manufacturer-specific means, custom commissioning flows, or future IP-compliant network technology not yet directly supported by NetworkCommissioning cluster).",
                    xref: "device§2.1.3"
                },
                {
                    name: "ManagedAclAllowed", tag: "field",
                    description: "The node has at least one endpoint where some Device Type present on the endpoint has a Device Library element requirement table entry that sets this condition to true.",
                    xref: "device§2.1.3"
                }
            ]
        }
    ]
});
