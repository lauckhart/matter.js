/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { AdministratorCommissioning } from "#index.js";

AdministratorCommissioning.patch({
    details: "This cluster is used to trigger a Node to allow a new Administrator to commission it. It defines " +
        "Attributes, Commands and Responses needed for this purpose." +
        "\n" +
        "There are two methods of commissioning, Basic Commissioning which may be supported and is described " +
        "in Section 5.6.2, “Basic Commissioning Method (BCM)” and Enhanced Commissioning which shall be " +
        "supported and is described in Section 5.6.3, “Enhanced Commissioning Method (ECM)”." +
        "\n" +
        "For the management of Operational Credentials and Trusted Root Certificates, the Node Operational " +
        "Credentials cluster is used." +
        "\n" +
        "If the Administrator Commissioning Cluster server instance is present on an endpoint with the Root " +
        "Node device type in the Descriptor cluster DeviceTypeList, then:" +
        "\n" +
        "  • The Commissioning Window shall be opened or closed on the node that the Root Node endpoint is " +
        "    on." +
        "\n" +
        "  • The attributes shall indicate the state of the node that the Root Node endpoint is on." +
        "\n" +
        "If the Administrator Commissioning Cluster server instance is present on an endpoint with the " +
        "Bridged Node device type in the Descriptor cluster DeviceTypeList, then:" +
        "\n" +
        "  • The Commissioning Window shall be opened or closed on the node represented by the Bridged Node." +
        "\n" +
        "  • The attributes shall indicate the state of the node that is represented by the Bridged Node.",

    xref: { document: "core", section: "11.19" },

    children: [
        undefined,
        { children: [{ description: "Basic" }] },
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "Commissioning window not open" },
                { description: "An Enhanced Commissioning Method window is open" },
                { description: "A Basic Commissioning Method window is open" }
            ]
        },

        {
            children: [
                { description: "Could not be completed because another commissioning is in progress" },
                { description: "Provided PAKE parameters were incorrectly formatted or otherwise invalid" },
                { description: "No commissioning window was currently open" }
            ]
        }
    ]
});
