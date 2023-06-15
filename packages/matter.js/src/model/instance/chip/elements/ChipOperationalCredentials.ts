/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../elements/index.js";

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
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "FabricDescriptorStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0002, name: "SupportedFabrics", base: "uint8",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0003, name: "CommissionedFabrics", base: "uint8",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0004, name: "TrustedRootCertificates", base: "list",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "octstr"
                })
            ]
        }),

        AttributeElement({
            id: 0x0005, name: "CurrentFabricIndex", base: "uint8",
            conformance: "M"
        }),

        CommandElement({
            id: 0x0000, name: "AttestationRequest",
            access: "R A", conformance: "M", direction: "request", response: "AttestationResponse",
            children: [
                DatatypeElement({
                    name: "AttestationNonce", base: "octstr",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "AttestationResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "AttestationElements", base: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "AttestationSignature", base: "octstr",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "CertificateChainRequest",
            access: "R A", conformance: "M", direction: "request", response: "CertificateChainResponse",
            children: [
                DatatypeElement({
                    name: "CertificateType", base: "CertificateChainTypeEnum",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "CertificateChainResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Certificate", base: "octstr",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "CsrRequest",
            access: "R A", conformance: "M", direction: "request", response: "CsrResponse",
            children: [
                DatatypeElement({
                    name: "CsrNonce", base: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "IsForUpdateNoc", base: "bool",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "CsrResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "NocsrElements", base: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "AttestationSignature", base: "octstr",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0006, name: "AddNoc",
            access: "R A", conformance: "M", direction: "request", response: "NocResponse",
            children: [
                DatatypeElement({
                    name: "NocValue", base: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "IcacValue", base: "octstr",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "IpkValue", base: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "CaseAdminSubject", base: "uint64",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "AdminVendorId", base: "vendor-id",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0007, name: "UpdateNoc",
            access: "R F A", conformance: "M", direction: "request", response: "NocResponse",
            children: [
                DatatypeElement({
                    name: "NocValue", base: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "IcacValue", base: "octstr",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0008, name: "NocResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "StatusCode", base: "NodeOperationalCertStatusEnum",
                    conformance: "M"
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
            access: "R F A", conformance: "M", direction: "request", response: "NocResponse",
            children: [
                DatatypeElement({
                    name: "Label", base: "string",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x000a, name: "RemoveFabric",
            access: "R A", conformance: "M", direction: "request", response: "NocResponse",
            children: [
                DatatypeElement({
                    name: "FabricIndex", base: "fabric-idx",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x000b, name: "AddTrustedRootCertificate",
            access: "R A", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "RootCaCertificate", base: "octstr",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "FabricDescriptorStruct", base: "struct",
            access: "R F", conformance: "M",
            children: [
                DatatypeElement({
                    name: "RootPublicKey", base: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "VendorId", base: "vendor-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "FabricId", base: "fabric-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "NodeId", base: "node-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Label", base: "string",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "NodeOperationalCertStatusEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Ok",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "InvalidPublicKey",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "InvalidNodeOpId",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "InvalidNoc",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "MissingCsr",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "TableFull",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "InvalidAdminSubject",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "FabricConflict",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000a, name: "LabelConflict",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000b, name: "InvalidFabricIndex",
                    conformance: "M"
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
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "DacCertificate",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "PaiCertificate",
                    conformance: "M"
                })
            ]
        })
    ]
}));
