/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "OperationalCredentials", id: 0x3e, classification: "node",
    description: "Operational Credentials",
    details: "This cluster is used to add or remove Operational Credentials on a Commissionee or Node, as well as " +
             "manage the associated Fabrics",
    xref: { document: "core", section: "11.17" },
    children: [
        {
            tag: "attribute", name: "NoCs", id: 0x0, type: "list", access: "R A", conformance: "M",
            constraint: "max SupportedFabrics", quality: "N C",
            details: "This attribute contains all NOCs applicable to this Node, encoded as a read-only list of NOCStruct",
            xref: { document: "core", section: "11.17.5.1" },
            children: [
                {
                    tag: "datatype", name: "entry", type: "NOCStruct"
                }
            ]
        },

        {
            tag: "attribute", name: "Fabrics", id: 0x1, type: "list", access: "R F V", conformance: "M",
            constraint: "max SupportedFabrics", quality: "N",
            details: "This attribute describes all fabrics to which this Node is commissioned, encoded as a read-only list" +
                     " of FabricDescriptorStruct. This information MAY be computed directly from the NOCs attribute",
            xref: { document: "core", section: "11.17.5.2" },
            children: [
                {
                    tag: "datatype", name: "entry", type: "FabricDescriptorStruct"
                }
            ]
        },

        {
            tag: "attribute", name: "SupportedFabrics", id: 0x2, type: "uint8", access: "R V", conformance: "M",
            constraint: "5 to 254", quality: "F",
            details: "This attribute contains the number of Fabrics that are supported by the device. This value is fixed " +
                     "for a particular device",
            xref: { document: "core", section: "11.17.5.3" }
        },

        {
            tag: "attribute", name: "CommissionedFabrics", id: 0x3, type: "uint8", access: "R V",
            conformance: "M", constraint: "max SupportedFabrics", quality: "N",
            details: "This attribute contains the number of Fabrics to which the device is currently commissioned. This " +
                     "attribute SHALL be equal to the following",
            xref: { document: "core", section: "11.17.5.4" }
        },

        {
            tag: "attribute", name: "TrustedRootCertificates", id: 0x4, type: "list", access: "R V",
            conformance: "M", constraint: "max SupportedFabrics[max 400]", quality: "N C",
            details: "This attribute SHALL contain a read-only list of Trusted Root CA Certificates installed on the Node" +
                     ", as octet strings containing their Matter Certificate Encoding representation",
            xref: { document: "core", section: "11.17.5.5" },
            children: [
                {
                    tag: "datatype", name: "entry", type: "octstr"
                }
            ]
        },

        {
            tag: "attribute", name: "CurrentFabricIndex", id: 0x5, type: "uint8", access: "R V",
            conformance: "M",
            details: "This attribute SHALL contain accessing fabric index",
            xref: { document: "core", section: "11.17.5.6" }
        },

        {
            tag: "command", name: "AttestationRequest", id: 0x0, access: "R A", conformance: "M",
            direction: "request", response: "AttestationResponse",
            details: "This command SHALL be generated to request the Attestation Information, in the form of an " +
                     "AttestationResponse Command. If the AttestationNonce that is provided in the command is malformed, a",
            xref: { document: "core", section: "11.17.6.1" },
            children: [
                {
                    tag: "datatype", name: "AttestationNonce", id: 0x0, type: "octstr", conformance: "M",
                    constraint: "32",
                    xref: { document: "core", section: "11.17.6.1" }
                }
            ]
        },

        {
            tag: "command", name: "AttestationResponse", id: 0x1, conformance: "M", direction: "response",
            details: "This command SHALL be generated in response to an Attestation Request command",
            xref: { document: "core", section: "11.17.6.2" },
            children: [
                {
                    tag: "datatype", name: "AttestationElements", id: 0x0, type: "octstr", conformance: "M",
                    constraint: "max RespMax",
                    xref: { document: "core", section: "11.17.6.2" }
                },

                {
                    tag: "datatype", name: "AttestationSignature", id: 0x1, type: "octstr", conformance: "M",
                    constraint: "64",
                    xref: { document: "core", section: "11.17.6.2" }
                }
            ]
        },

        {
            tag: "command", name: "CertificateChainRequest", id: 0x2, access: "R A", conformance: "M",
            direction: "request", response: "CertificateChainResponse",
            details: "If the CertificateType is not a valid value per CertificateChainTypeEnum then the command SHALL fail" +
                     " with a Status Code of INVALID_COMMAND",
            xref: { document: "core", section: "11.17.6.3" },
            children: [
                {
                    tag: "datatype", name: "CertificateType", id: 0x0, type: "CertificateChainTypeEnum",
                    conformance: "M", constraint: "desc",
                    xref: { document: "core", section: "11.17.6.3" }
                }
            ]
        },

        {
            tag: "command", name: "CertificateChainResponse", id: 0x3, conformance: "M", direction: "response",
            details: "This command SHALL be generated in response to a CertificateChainRequest command",
            xref: { document: "core", section: "11.17.6.4" },
            children: [
                {
                    tag: "datatype", name: "Certificate", id: 0x0, type: "octstr", conformance: "M",
                    constraint: "max 600",
                    xref: { document: "core", section: "11.17.6.4" }
                }
            ]
        },

        {
            tag: "command", name: "CsrRequest", id: 0x4, access: "R A", conformance: "M", direction: "request",
            response: "CsrResponse",
            details: "This command SHALL be generated to execute the Node Operational CSR Procedure and subsequently " +
                     "return the NOCSR Information, in the form of a CSRResponse Command",
            xref: { document: "core", section: "11.17.6.5" },
            children: [
                {
                    tag: "datatype", name: "CsrNonce", id: 0x0, type: "octstr", conformance: "M", constraint: "32",
                    xref: { document: "core", section: "11.17.6.5" }
                },

                {
                    tag: "datatype", name: "IsForUpdateNoc", id: 0x1, type: "bool", conformance: "O", default: true,
                    xref: { document: "core", section: "11.17.6.5" }
                }
            ]
        },

        {
            tag: "command", name: "CsrResponse", id: 0x5, conformance: "M", direction: "response",
            details: "This command SHALL be generated in response to a CSRRequest Command",
            xref: { document: "core", section: "11.17.6.6" },
            children: [
                {
                    tag: "datatype", name: "NocsrElements", id: 0x0, type: "octstr", conformance: "M",
                    constraint: "max RespMax",
                    xref: { document: "core", section: "11.17.6.6" }
                },

                {
                    tag: "datatype", name: "AttestationSignature", id: 0x1, type: "octstr", conformance: "M",
                    constraint: "64",
                    xref: { document: "core", section: "11.17.6.6" }
                }
            ]
        },

        {
            tag: "command", name: "AddNoc", id: 0x6, access: "R A", conformance: "M", direction: "request",
            response: "NocResponse",
            details: "This command SHALL add a new NOC chain to the device and commission a new Fabric association upon " +
                     "successful validation of all arguments and preconditions",
            xref: { document: "core", section: "11.17.6.8" },
            children: [
                {
                    tag: "datatype", name: "NocValue", id: 0x0, type: "octstr", conformance: "M", constraint: "max 400",
                    xref: { document: "core", section: "11.17.6.8" }
                },

                {
                    tag: "datatype", name: "IcacValue", id: 0x1, type: "octstr", conformance: "O",
                    constraint: "max 400",
                    xref: { document: "core", section: "11.17.6.8" }
                },

                {
                    tag: "datatype", name: "IpkValue", id: 0x2, type: "octstr", conformance: "M", constraint: "16",
                    xref: { document: "core", section: "11.17.6.8" }
                },

                {
                    tag: "datatype", name: "CaseAdminSubject", id: 0x3, type: "SubjectID", conformance: "M",
                    xref: { document: "core", section: "11.17.6.8" }
                },

                {
                    tag: "datatype", name: "AdminVendorId", id: 0x4, type: "vendor-id", conformance: "M",
                    xref: { document: "core", section: "11.17.6.8" }
                }
            ]
        },

        {
            tag: "command", name: "UpdateNoc", id: 0x7, access: "R F A", conformance: "M", direction: "request",
            response: "NocResponse",
            details: "This command SHALL replace the NOC and optional associated ICAC (if present) scoped under the " +
                     "accessing fabric upon successful validation of all arguments and preconditions. The new value SHALL " +
                     "immediately be reflected in the NOCs list attribute",
            xref: { document: "core", section: "11.17.6.9" },
            children: [
                {
                    tag: "datatype", name: "NocValue", id: 0x0, type: "octstr", access: "F", conformance: "M",
                    constraint: "max 400",
                    xref: { document: "core", section: "11.17.6.9" }
                },

                {
                    tag: "datatype", name: "IcacValue", id: 0x1, type: "octstr", access: "F", conformance: "O",
                    constraint: "max 400",
                    xref: { document: "core", section: "11.17.6.9" }
                }
            ]
        },

        {
            tag: "command", name: "NocResponse", id: 0x8, conformance: "M", direction: "response",
            details: "This command SHALL be generated in response to the following commands",
            xref: { document: "core", section: "11.17.6.10" },
            children: [
                {
                    tag: "datatype", name: "StatusCode", id: 0x0, type: "NodeOperationalCertStatusEnum",
                    conformance: "M",
                    xref: { document: "core", section: "11.17.6.10" }
                },

                {
                    tag: "datatype", name: "FabricIndex", id: 0x1, type: "fabric-idx", conformance: "O",
                    constraint: "1 to 254",
                    xref: { document: "core", section: "11.17.6.10" }
                },

                {
                    tag: "datatype", name: "DebugText", id: 0x2, type: "string", conformance: "O",
                    constraint: "max 128",
                    xref: { document: "core", section: "11.17.6.10" }
                }
            ]
        },

        {
            tag: "command", name: "UpdateFabricLabel", id: 0x9, access: "R F A", conformance: "M",
            direction: "request", response: "NocResponse",
            details: "This command SHALL be used by an Administrator to set the user-visible Label field for a given " +
                     "Fabric, as reflected by entries in the Fabrics attribute",
            xref: { document: "core", section: "11.17.6.11" },
            children: [
                {
                    tag: "datatype", name: "Label", id: 0x0, type: "string", access: "F", conformance: "M",
                    constraint: "max 32",
                    xref: { document: "core", section: "11.17.6.11" }
                }
            ]
        },

        {
            tag: "command", name: "RemoveFabric", id: 0xa, access: "R A", conformance: "M",
            direction: "request", response: "NocResponse",
            details: "This command is used by Administrators to remove a given Fabric and delete all associated fabric-" +
                     "scoped data",
            xref: { document: "core", section: "11.17.6.12" },
            children: [
                {
                    tag: "datatype", name: "FabricIndex", type: "fabric-idx", conformance: "M"
                }
            ]
        },

        {
            tag: "command", name: "AddTrustedRootCertificate", id: 0xb, access: "R A", conformance: "M",
            direction: "request", response: "status",
            details: "This command SHALL add a Trusted Root CA Certificate, provided as its Matter Certificate Encoding " +
                     "representation, to the TrustedRootCertificates Attribute list and SHALL ensure the next AddNOC " +
                     "command executed uses the provided certificate as its root of trust",
            xref: { document: "core", section: "11.17.6.13" },
            children: [
                {
                    tag: "datatype", name: "RootCaCertificate", id: 0x0, type: "octstr", conformance: "M",
                    constraint: "max 400",
                    xref: { document: "core", section: "11.17.6.13" }
                }
            ]
        },

        {
            tag: "datatype", name: "CertificateChainTypeEnum", type: "enum8", conformance: "M",
            details: "This data type is derived from enum8",
            xref: { document: "core", section: "11.17.4.2" },
            children: [
                {
                    tag: "datatype", name: "DacCertificate", id: 0x1, conformance: "M",
                    xref: { document: "core", section: "11.17.4.2" }
                },

                {
                    tag: "datatype", name: "PaiCertificate", id: 0x2, conformance: "M",
                    xref: { document: "core", section: "11.17.4.2" }
                }
            ]
        },

        {
            tag: "datatype", name: "NodeOperationalCertStatusEnum", type: "enum8", conformance: "M",
            details: "This data type is derived from enum8",
            xref: { document: "core", section: "11.17.4.3" },
            children: [
                {
                    tag: "datatype", name: "Ok", id: 0x0, conformance: "M",
                    xref: { document: "core", section: "11.17.4.3" }
                },

                {
                    tag: "datatype", name: "InvalidPublicKey", id: 0x1, conformance: "M",
                    xref: { document: "core", section: "11.17.4.3" }
                },

                {
                    tag: "datatype", name: "InvalidNodeOpId", id: 0x2, conformance: "M",
                    xref: { document: "core", section: "11.17.4.3" }
                },

                {
                    tag: "datatype", name: "InvalidNoc", id: 0x3, conformance: "M",
                    xref: { document: "core", section: "11.17.4.3" }
                },

                {
                    tag: "datatype", name: "MissingCsr", id: 0x4, conformance: "M",
                    xref: { document: "core", section: "11.17.4.3" }
                },

                {
                    tag: "datatype", name: "TableFull", id: 0x5, conformance: "M",
                    xref: { document: "core", section: "11.17.4.3" }
                },

                {
                    tag: "datatype", name: "InvalidAdminSubject", id: 0x6, conformance: "M",
                    xref: { document: "core", section: "11.17.4.3" }
                },

                {
                    tag: "datatype", name: "FabricConflict", id: 0x9, conformance: "M",
                    xref: { document: "core", section: "11.17.4.3" }
                },

                {
                    tag: "datatype", name: "LabelConflict", id: 0xa, conformance: "M",
                    xref: { document: "core", section: "11.17.4.3" }
                },

                {
                    tag: "datatype", name: "InvalidFabricIndex", id: 0xb, conformance: "M",
                    xref: { document: "core", section: "11.17.4.3" }
                }
            ]
        },

        {
            tag: "datatype", name: "NOCStruct", type: "struct",
            details: "This encodes a fabric sensitive NOC chain, underpinning a commissioned Operational Identity for a " +
                     "given Node",
            xref: { document: "core", section: "11.17.4.4" },
            children: [
                {
                    tag: "datatype", name: "Noc", id: 0x1, type: "octstr", access: "S", conformance: "M",
                    constraint: "max 400",
                    xref: { document: "core", section: "11.17.4.4" }
                },

                {
                    tag: "datatype", name: "Icac", id: 0x2, type: "octstr", access: "S", conformance: "M",
                    constraint: "max 400", quality: "X",
                    xref: { document: "core", section: "11.17.4.4" }
                }
            ]
        },

        {
            tag: "datatype", name: "FabricDescriptorStruct", type: "struct", access: "R F", conformance: "M",
            details: "This structure encodes a Fabric Reference for a fabric within which a given Node is currently " +
                     "commissioned",
            xref: { document: "core", section: "11.17.4.5" },
            children: [
                {
                    tag: "datatype", name: "RootPublicKey", id: 0x1, type: "octstr", access: "F", conformance: "M",
                    constraint: "65",
                    xref: { document: "core", section: "11.17.4.5" }
                },

                {
                    tag: "datatype", name: "VendorId", id: 0x2, type: "vendor-id", access: "F", conformance: "M",
                    constraint: "desc",
                    xref: { document: "core", section: "11.17.4.5" }
                },

                {
                    tag: "datatype", name: "FabricId", id: 0x3, type: "fabric-id", access: "F", conformance: "M",
                    xref: { document: "core", section: "11.17.4.5" }
                },

                {
                    tag: "datatype", name: "NodeId", id: 0x4, type: "node-id", access: "F", conformance: "M",
                    xref: { document: "core", section: "11.17.4.5" }
                },

                {
                    tag: "datatype", name: "Label", id: 0x5, type: "string", access: "F", conformance: "M",
                    constraint: "max 32", default: "",
                    xref: { document: "core", section: "11.17.4.5" }
                }
            ]
        },

        {
            tag: "datatype", name: "NocStruct", type: "struct", access: "R F", conformance: "M",
            children: [
                {
                    tag: "datatype", name: "Noc", type: "octstr", access: "R S", conformance: "M"
                },

                {
                    tag: "datatype", name: "Icac", type: "octstr", access: "R S", conformance: "M", quality: "X"
                }
            ]
        }
    ]
});
