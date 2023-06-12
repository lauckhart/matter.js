/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x003e, name: "OperationalCredentials",
    description: "Operational Credentials",
    details: "This cluster is used to add or remove Operational Credentials on a Commissionee or Node, as well as manage the associated Fabrics.",
    children: [
        AttributeElement({
            id: 0x0000, name: "Nocs", base: "list",
            access: "R A", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "NocStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "Fabrics", base: "list",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "FabricDescriptorStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0002, name: "SupportedFabrics", base: "uint8",
            access: "R", conformance: "M"
        }),

        AttributeElement({
            id: 0x0003, name: "CommissionedFabrics", base: "uint8",
            access: "R", conformance: "M"
        }),

        AttributeElement({
            id: 0x0004, name: "TrustedRootCertificates", base: "list",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "octstr"
                })
            ]
        }),

        AttributeElement({
            id: 0x0005, name: "CurrentFabricIndex", base: "uint8",
            access: "R", conformance: "M"
        }),

        CommandElement({
            id: 0x0000, name: "AttestationRequest",
            access: "R A", conformance: "M", direction: "request", response: "AttestationResponse",
            children: [
                DatatypeElement({
                    name: "AttestationNonce", base: "octstr",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "AttestationResponse",
            access: "R", conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "AttestationElements", base: "octstr",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "AttestationSignature", base: "octstr",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "CertificateChainRequest",
            access: "R A", conformance: "M", direction: "request", response: "CertificateChainResponse",
            children: [
                DatatypeElement({
                    name: "CertificateType", base: "CertificateChainTypeEnum",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "CertificateChainResponse",
            access: "R", conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Certificate", base: "octstr",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "CsrRequest",
            access: "R A", conformance: "M", direction: "request", response: "CsrResponse",
            children: [
                DatatypeElement({
                    name: "CsrNonce", base: "octstr",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "IsForUpdateNoc", base: "bool",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "CsrResponse",
            access: "R", conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "NocsrElements", base: "octstr",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "AttestationSignature", base: "octstr",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0006, name: "AddNoc",
            access: "R A", conformance: "M", direction: "request", response: "NocResponse",
            children: [
                DatatypeElement({
                    name: "NocValue", base: "octstr",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "IcacValue", base: "octstr",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "IpkValue", base: "octstr",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "CaseAdminSubject", base: "uint64",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "AdminVendorId", base: "vendor-id",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0007, name: "UpdateNoc",
            access: "R F A", conformance: "M", direction: "request", response: "NocResponse",
            children: [
                DatatypeElement({
                    name: "NocValue", base: "octstr",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "IcacValue", base: "octstr",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0008, name: "NocResponse",
            access: "R", conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "StatusCode", base: "NodeOperationalCertStatusEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "FabricIndex", base: "fabric-idx",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "DebugText", base: "string",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0009, name: "UpdateFabricLabel",
            access: "R F A", conformance: "M", direction: "request", response: "NocResponse",
            children: [
                DatatypeElement({
                    name: "Label", base: "string",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x000a, name: "RemoveFabric",
            access: "R A", conformance: "M", direction: "request", response: "NocResponse",
            children: [
                DatatypeElement({
                    name: "FabricIndex", base: "fabric-idx",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x000b, name: "AddTrustedRootCertificate",
            access: "R A", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "RootCaCertificate", base: "octstr",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "FabricDescriptorStruct", base: "struct",
            access: "R F", conformance: "M",
            children: [
                DatatypeElement({
                    name: "RootPublicKey", base: "octstr",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "VendorId", base: "vendor-id",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "FabricId", base: "fabric-id",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "NodeId", base: "node-id",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Label", base: "string",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "NodeOperationalCertStatusEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Ok",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "InvalidPublicKey",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "InvalidNodeOpId",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "InvalidNoc",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "MissingCsr",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "TableFull",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "InvalidAdminSubject",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "FabricConflict",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000a, name: "LabelConflict",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000b, name: "InvalidFabricIndex",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "NocStruct", base: "struct",
            access: "R F", conformance: "M",
            children: [
                DatatypeElement({
                    name: "Noc", base: "octstr",
                    access: "R S", conformance: "M"
                }),

                DatatypeElement({
                    name: "Icac", base: "octstr",
                    access: "R S", conformance: "M", quality: "X"
                })
            ]
        }),

        DatatypeElement({
            name: "CertificateChainTypeEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "DacCertificate",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "PaiCertificate",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
