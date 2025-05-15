/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { JointFabricPki } from "#index.js";

JointFabricPki.patch({
    details: "An instance of the Joint Fabric PKI Cluster only applies to Joint Fabric Administrator nodes " +
        "fulfilling the role of Anchor CA." +
        "\n" +
        "NOTE Support for Joint Fabric PKI Cluster is provisional.",
    xref: { document: "core", section: "11.25" },

    children: [
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "No error" },
                { description: "The ICACSR in the request is not compliant to PKCS #10 rules" },
                { description: "The ICACSR in the request has an incorrect signature" },
                { description: "DCL Vendor ID validation failed" },
                { description: "DCL returned certificate is not an ICAC" },
                { description: "Error due to an in progress Anchor Transfer" },
                { description: "Signing the ICA CSR failed" },
                { description: "No user consent" }
            ]
        },

        {
            children: [
                { description: "No error" },
                { description: "Anchor Transfer was not started due to on- going Datastore operations" },
                { description: "User has not consented for Anchor Transfer" }
            ]
        }
    ]
});
