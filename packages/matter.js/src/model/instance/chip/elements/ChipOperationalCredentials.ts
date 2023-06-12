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
            access: "R A",
            children: [
                DatatypeElement({
                    name: "entry", base: "NocStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "Fabrics", base: "list",
            children: [
                DatatypeElement({
                    name: "entry", base: "FabricDescriptorStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0002, name: "SupportedFabrics", base: "uint8"
        }),

        AttributeElement({
            id: 0x0003, name: "CommissionedFabrics", base: "uint8"
        }),

        AttributeElement({
            id: 0x0004, name: "TrustedRootCertificates", base: "list",
            children: [
                DatatypeElement({
                    name: "entry", base: "octstr"
                })
            ]
        }),

        AttributeElement({
            id: 0x0005, name: "CurrentFabricIndex", base: "uint8"
        }),

        CommandElement({
            id: 0x0000, name: "AttestationRequest",
            access: "R A", direction: "request", response: "AttestationResponse",
            children: [
                DatatypeElement({
                    name: "AttestationNonce", base: "octstr"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "AttestationResponse",
            direction: "response",
            children: [
                DatatypeElement({
                    name: "AttestationElements", base: "octstr"
                }),

                DatatypeElement({
                    name: "AttestationSignature", base: "octstr"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "CertificateChainRequest",
            access: "R A", direction: "request", response: "CertificateChainResponse",
            children: [
                DatatypeElement({
                    name: "CertificateType", base: "CertificateChainTypeEnum"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "CertificateChainResponse",
            direction: "response",
            children: [
                DatatypeElement({
                    name: "Certificate", base: "octstr"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "CsrRequest",
            access: "R A", direction: "request", response: "CsrResponse",
            children: [
                DatatypeElement({
                    name: "CsrNonce", base: "octstr"
                }),

                DatatypeElement({
                    name: "IsForUpdateNoc", base: "bool",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "CsrResponse",
            direction: "response",
            children: [
                DatatypeElement({
                    name: "NocsrElements", base: "octstr"
                }),

                DatatypeElement({
                    name: "AttestationSignature", base: "octstr"
                })
            ]
        }),

        CommandElement({
            id: 0x0006, name: "AddNoc",
            access: "R A", direction: "request", response: "NocResponse",
            children: [
                DatatypeElement({
                    name: "NocValue", base: "octstr"
                }),

                DatatypeElement({
                    name: "IcacValue", base: "octstr",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "IpkValue", base: "octstr"
                }),

                DatatypeElement({
                    name: "CaseAdminSubject", base: "uint64"
                }),

                DatatypeElement({
                    name: "AdminVendorId", base: "vendor-id"
                })
            ]
        }),

        CommandElement({
            id: 0x0007, name: "UpdateNoc",
            access: "R F A", direction: "request", response: "NocResponse",
            children: [
                DatatypeElement({
                    name: "NocValue", base: "octstr"
                }),

                DatatypeElement({
                    name: "IcacValue", base: "octstr",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0008, name: "NocResponse",
            direction: "response",
            children: [
                DatatypeElement({
                    name: "StatusCode", base: "NodeOperationalCertStatusEnum"
                }),

                DatatypeElement({
                    name: "FabricIndex", base: "fabric-idx",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "DebugText", base: "string",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0009, name: "UpdateFabricLabel",
            access: "R F A", direction: "request", response: "NocResponse",
            children: [
                DatatypeElement({
                    name: "Label", base: "string"
                })
            ]
        }),

        CommandElement({
            id: 0x000a, name: "RemoveFabric",
            access: "R A", direction: "request", response: "NocResponse",
            children: [
                DatatypeElement({
                    name: "FabricIndex", base: "fabric-idx"
                })
            ]
        }),

        CommandElement({
            id: 0x000b, name: "AddTrustedRootCertificate",
            access: "R A", direction: "request",
            children: [
                DatatypeElement({
                    name: "RootCaCertificate", base: "octstr"
                })
            ]
        }),

        DatatypeElement({
            name: "FabricDescriptorStruct", base: "struct",
            access: "R F",
            children: [
                DatatypeElement({
                    name: "RootPublicKey", base: "octstr"
                }),

                DatatypeElement({
                    name: "VendorId", base: "vendor-id"
                }),

                DatatypeElement({
                    name: "FabricId", base: "fabric-id"
                }),

                DatatypeElement({
                    name: "NodeId", base: "node-id"
                }),

                DatatypeElement({
                    name: "Label", base: "string"
                })
            ]
        }),

        DatatypeElement({
            name: "NodeOperationalCertStatusEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Ok"
                }),

                DatatypeElement({
                    id: 0x0001, name: "InvalidPublicKey"
                }),

                DatatypeElement({
                    id: 0x0002, name: "InvalidNodeOpId"
                }),

                DatatypeElement({
                    id: 0x0003, name: "InvalidNoc"
                }),

                DatatypeElement({
                    id: 0x0004, name: "MissingCsr"
                }),

                DatatypeElement({
                    id: 0x0005, name: "TableFull"
                }),

                DatatypeElement({
                    id: 0x0006, name: "InvalidAdminSubject"
                }),

                DatatypeElement({
                    id: 0x0009, name: "FabricConflict"
                }),

                DatatypeElement({
                    id: 0x000a, name: "LabelConflict"
                }),

                DatatypeElement({
                    id: 0x000b, name: "InvalidFabricIndex"
                })
            ]
        }),

        DatatypeElement({
            name: "NocStruct", base: "struct",
            access: "R F",
            children: [
                DatatypeElement({
                    name: "Noc", base: "octstr",
                    access: "R S"
                }),

                DatatypeElement({
                    name: "Icac", base: "octstr",
                    access: "R S", quality: "X"
                })
            ]
        }),

        DatatypeElement({
            name: "CertificateChainTypeEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "DacCertificate"
                }),

                DatatypeElement({
                    id: 0x0002, name: "PaiCertificate"
                })
            ]
        })
    ]
}));
