/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { JointFabricPki } from "#index.js";

JointFabricPki.patch({
    classification: "node", pics: "JFPKI",
    details: "An instance of the Joint Fabric PKI Cluster only applies to Joint Fabric Administrator nodes " +
        "fulfilling the role of Anchor CA." +
        "\n" +
        "NOTE Support for Joint Fabric PKI Cluster is provisional.",
    xref: "core§11.25",

    children: [
        undefined,

        {
            details: "This command shall be generated and executed during the Joint Commissioning Method steps and " +
                "subsequently respond in the form of an ICACSRResponse command." +
                "\n" +
                "Check ICA Cross Signing for details about the generation and contents of the ICACSR.",
            xref: "core§11.25.5.1"
        },

        {
            details: "This command shall be generated in response to the ICACSRRequest command. Check ICA Cross Signing " +
                "for details about the generation and contents of ICAC.",
            xref: "core§11.25.5.2",

            children: [
                {
                    details: "This field shall contain an ICACSRRequestStatusEnum value representing the status of the Section " +
                        "11.25.5.1, “ICACSRRequest Command” operation.",
                    xref: "core§11.25.5.2.1"
                },
                {
                    details: "If present, it shall contain the NOC Issuer Certificate in PEM format.",
                    xref: "core§11.25.5.2.2"
                }
            ]
        },

        { xref: "core§11.25.5" },
        { xref: "core§11.25.5" },
        { xref: "core§11.25.5" },

        {
            details: "This enumeration is used by the ICACSRResponse command to convey the detailed outcome of this " +
                "cluster’s ICACSRRequest command.",
            xref: "core§11.25.4.1",

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
            details: "This enumeration is used by the TransferAnchorResponse command to convey the detailed outcome of " +
                "this cluster’s TransferAnchorRequest command.",
            xref: "core§11.25.4.2",
            children: [
                { description: "No error" },
                { description: "Anchor Transfer was not started due to on- going Datastore operations" },
                { description: "User has not consented for Anchor Transfer" }
            ]
        }
    ]
});
