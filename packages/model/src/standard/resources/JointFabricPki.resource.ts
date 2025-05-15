/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "JointFabricPki", tag: "cluster",
    classification: "node", pics: "JFPKI",
    details: "An instance of the Joint Fabric PKI Cluster only applies to Joint Fabric Administrator nodes " +
        "fulfilling the role of Anchor CA." +
        "\n" +
        "NOTE Support for Joint Fabric PKI Cluster is provisional.",
    xref: "core§11.25",

    children: [
        {
            name: "IcacsrRequest", tag: "command",
            details: "This command shall be generated and executed during the Joint Commissioning Method steps and " +
                "subsequently respond in the form of an ICACSRResponse command." +
                "\n" +
                "Check ICA Cross Signing for details about the generation and contents of the ICACSR.",
            xref: "core§11.25.5.1"
        },

        {
            name: "IcacsrResponse", tag: "command",
            details: "This command shall be generated in response to the ICACSRRequest command. Check ICA Cross Signing " +
                "for details about the generation and contents of ICAC.",
            xref: "core§11.25.5.2",

            children: [
                {
                    name: "StatusCode", tag: "field",
                    details: "This field shall contain an ICACSRRequestStatusEnum value representing the status of the Section " +
                        "11.25.5.1, “ICACSRRequest Command” operation.",
                    xref: "core§11.25.5.2.1"
                },

                {
                    name: "Icac", tag: "field",
                    details: "If present, it shall contain the NOC Issuer Certificate in PEM format.",
                    xref: "core§11.25.5.2.2"
                }
            ]
        },

        { name: "TransferAnchorRequest", tag: "command", xref: "core§11.25.5" },
        { name: "TransferAnchorResponse", tag: "command", xref: "core§11.25.5" },
        { name: "TransferAnchorComplete", tag: "command", xref: "core§11.25.5" },

        {
            name: "IcacsrRequestStatusEnum", tag: "datatype",
            details: "This enumeration is used by the ICACSRResponse command to convey the detailed outcome of this " +
                "cluster’s ICACSRRequest command.",
            xref: "core§11.25.4.1",

            children: [
                { name: "Ok", tag: "field", description: "No error" },
                {
                    name: "InvalidIcaCsrFormat", tag: "field",
                    description: "The ICACSR in the request is not compliant to PKCS #10 rules"
                },
                {
                    name: "InvalidIcaCsrSignature", tag: "field",
                    description: "The ICACSR in the request has an incorrect signature"
                },
                { name: "FailedDclVendorIdValidation", tag: "field", description: "DCL Vendor ID validation failed" },
                { name: "NotAnIcac", tag: "field", description: "DCL returned certificate is not an ICAC" },
                {
                    name: "BusyAnchorTransfer", tag: "field",
                    description: "Error due to an in progress Anchor Transfer"
                },
                { name: "IcaCsrSigningFailed", tag: "field", description: "Signing the ICA CSR failed" },
                { name: "IcaCsrRequestNoUserConsent", tag: "field", description: "No user consent" }
            ]
        },

        {
            name: "TransferAnchorResponseStatusEnum", tag: "datatype",
            details: "This enumeration is used by the TransferAnchorResponse command to convey the detailed outcome of " +
                "this cluster’s TransferAnchorRequest command.",
            xref: "core§11.25.4.2",

            children: [
                { name: "Ok", tag: "field", description: "No error" },
                {
                    name: "TransferAnchorStatusDatastoreBusy", tag: "field",
                    description: "Anchor Transfer was not started due to on- going Datastore operations"
                },
                {
                    name: "TransferAnchorStatusNoUserConsent", tag: "field",
                    description: "User has not consented for Anchor Transfer"
                }
            ]
        }
    ]
});
