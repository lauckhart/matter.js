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
            id: 0x0000, name: "Nocs", type: "list",
            access: "R A", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", type: "NocStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "Fabrics", type: "list",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", type: "FabricDescriptorStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0002, name: "SupportedFabrics", type: "uint8",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0003, name: "CommissionedFabrics", type: "uint8",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0004, name: "TrustedRootCertificates", type: "list",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", type: "octstr"
                })
            ]
        }),

        AttributeElement({
            id: 0x0005, name: "CurrentFabricIndex", type: "uint8",
            conformance: "M"
        }),

        CommandElement({
            id: 0x0000, name: "AttestationRequest",
            access: "R A", conformance: "M", direction: "request", response: "AttestationResponse",
            children: [
                DatatypeElement({
                    name: "AttestationNonce", type: "octstr",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "AttestationResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "AttestationElements", type: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "AttestationSignature", type: "octstr",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "CertificateChainRequest",
            access: "R A", conformance: "M", direction: "request", response: "CertificateChainResponse",
            children: [
                DatatypeElement({
                    name: "CertificateType", type: "CertificateChainTypeEnum",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "CertificateChainResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Certificate", type: "octstr",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "CsrRequest",
            access: "R A", conformance: "M", direction: "request", response: "CsrResponse",
            children: [
                DatatypeElement({
                    name: "CsrNonce", type: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "IsForUpdateNoc", type: "bool",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "CsrResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "NocsrElements", type: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "AttestationSignature", type: "octstr",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0006, name: "AddNoc",
            access: "R A", conformance: "M", direction: "request", response: "NocResponse",
            children: [
                DatatypeElement({
                    name: "NocValue", type: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "IcacValue", type: "octstr",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "IpkValue", type: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "CaseAdminSubject", type: "uint64",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "AdminVendorId", type: "vendor-id",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0007, name: "UpdateNoc",
            access: "R F A", conformance: "M", direction: "request", response: "NocResponse",
            children: [
                DatatypeElement({
                    name: "NocValue", type: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "IcacValue", type: "octstr",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0008, name: "NocResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "StatusCode", type: "NodeOperationalCertStatusEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "FabricIndex", type: "fabric-idx",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "DebugText", type: "string",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0009, name: "UpdateFabricLabel",
            access: "R F A", conformance: "M", direction: "request", response: "NocResponse",
            children: [
                DatatypeElement({
                    name: "Label", type: "string",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x000a, name: "RemoveFabric",
            access: "R A", conformance: "M", direction: "request", response: "NocResponse",
            children: [
                DatatypeElement({
                    name: "FabricIndex", type: "fabric-idx",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x000b, name: "AddTrustedRootCertificate",
            access: "R A", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "RootCaCertificate", type: "octstr",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "FabricDescriptorStruct", type: "struct",
            access: "R F", conformance: "M",
            children: [
                DatatypeElement({
                    name: "RootPublicKey", type: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "VendorId", type: "vendor-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "FabricId", type: "fabric-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "NodeId", type: "node-id",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Label", type: "string",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "NodeOperationalCertStatusEnum", type: "enum8",
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
            name: "NocStruct", type: "struct",
            access: "R F", conformance: "M",
            children: [
                DatatypeElement({
                    name: "Noc", type: "octstr",
                    access: "R S", conformance: "M"
                }),

                DatatypeElement({
                    name: "Icac", type: "octstr",
                    access: "R S", conformance: "M", quality: "X"
                })
            ]
        }),

        DatatypeElement({
            name: "CertificateChainTypeEnum", type: "enum8",
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
