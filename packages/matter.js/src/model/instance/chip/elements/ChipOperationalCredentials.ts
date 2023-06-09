/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x003e, name: "OperationalCredentials",
    description: "Operational Credentials",
    details: "This cluster is used to add or remove Operational Credentials on a Commissionee or Node, as well as manage the associated Fabrics.",
    children: [
        AttributeElement({
            id: 0x0000, name: "Nocs", base: "NOCs",
            access: { rw: "R", readPrivilege: "A" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0001, name: "Fabrics", base: "Fabrics",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0002, name: "SupportedFabrics", base: "SupportedFabrics",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0003, name: "CommissionedFabrics", base: "CommissionedFabrics",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0004, name: "TrustedRootCertificates", base: "TrustedRootCertificates",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0005, name: "CurrentFabricIndex", base: "CurrentFabricIndex",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        CommandElement({
            id: 0x0000, name: "AttestationRequest", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "M" ], direction: "request", response: "AttestationResponse",
            children: [
                DatatypeElement({
                    name: "AttestationNonce", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "AttestationNonce", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "AttestationResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "AttestationElements", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "AttestationElements", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "AttestationSignature", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "AttestationSignature", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "CertificateChainRequest", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "M" ], direction: "request", response: "CertificateChainResponse",
            children: [
                DatatypeElement({
                    name: "CertificateType", base: "CertificateChainTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "CertificateType", base: "CertificateChainTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "CertificateChainResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "Certificate", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Certificate", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "CsrRequest", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "M" ], direction: "request", response: "CSRResponse",
            children: [
                DatatypeElement({
                    name: "CsrNonce", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "CsrNonce", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "IsForUpdateNoc", base: "boolean",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "IsForUpdateNoc", base: "boolean",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "CsrResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "NocsrElements", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NocsrElements", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "AttestationSignature", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "AttestationSignature", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0006, name: "AddNoc", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "M" ], direction: "request", response: "NOCResponse",
            children: [
                DatatypeElement({
                    name: "NocValue", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NocValue", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "IcacValue", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "IcacValue", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "IpkValue", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "IpkValue", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "CaseAdminSubject", base: "Int64u",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "CaseAdminSubject", base: "Int64u",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "AdminVendorId", base: "VENDOR_ID",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "AdminVendorId", base: "VENDOR_ID",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0007, name: "UpdateNoc", base: "struct",
            access: { rw: "R", fabric: "F", writePrivilege: "A" }, conformance: [ "M" ], direction: "request", response: "NOCResponse",
            children: [
                DatatypeElement({
                    name: "NocValue", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NocValue", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "IcacValue", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "IcacValue", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0008, name: "NocResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "StatusCode", base: "NodeOperationalCertStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "StatusCode", base: "NodeOperationalCertStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "FabricIndex", base: "fabric_idx",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "FabricIndex", base: "fabric_idx",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "DebugText", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "DebugText", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0009, name: "UpdateFabricLabel", base: "struct",
            access: { rw: "R", fabric: "F", writePrivilege: "A" }, conformance: [ "M" ], direction: "request", response: "NOCResponse",
            children: [
                DatatypeElement({
                    name: "Label", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Label", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000a, name: "RemoveFabric", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "M" ], direction: "request", response: "NOCResponse",
            children: [
                DatatypeElement({
                    name: "FabricIndex", base: "fabric_idx",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "FabricIndex", base: "fabric_idx",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000b, name: "AddTrustedRootCertificate", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "M" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "RootCaCertificate", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "RootCaCertificate", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}))