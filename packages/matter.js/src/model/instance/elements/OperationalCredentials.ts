/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x003e, name: "OperationalCredentials",
    classification: "node", description: "Operational Credentials",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "NoCs",
            access: "R F A", conformance: "M", constraint: "max SupportedFabrics", default: "", quality: "N C", type: "list",
            details: "This attribute contains all NOCs applicable to this Node, encoded as a" +
                     " read-only list of NOCStruct",
            xref: { document: "core", section: "11.17.5.1" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "NOCStruct"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0001, name: "Fabrics",
            access: "R F V", conformance: "M", constraint: "max SupportedFabrics", default: "", quality: "N", type: "list",
            details: "This attribute describes all fabrics to which this Node is " +
                     "commissioned, encoded as a read-only list of FabricDescriptorStruct. " +
                     "This information MAY be computed directly from the NOCs attribute",
            xref: { document: "core", section: "11.17.5.2" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "FabricDescriptorStruct"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0002, name: "SupportedFabrics",
            access: "R V", conformance: "M", constraint: "5 to 254", default: 0, quality: "F", type: "uint8",
            details: "This attribute contains the number of Fabrics that are supported by " +
                     "the device. This value is fixed for a particular device",
            xref: { document: "core", section: "11.17.5.3" }
        },

        {
            tag: "attribute", id: 0x0003, name: "CommissionedFabrics",
            access: "R V", conformance: "M", constraint: "max SupportedFabrics", default: 0, quality: "N", type: "uint8",
            details: "This attribute contains the number of Fabrics to which the device is " +
                     "currently commissioned. This attribute SHALL be equal to the following",
            xref: { document: "core", section: "11.17.5.4" }
        },

        {
            tag: "attribute", id: 0x0004, name: "TrustedRootCertificates",
            access: "R V", conformance: "M", constraint: "max SupportedFabrics[max 400]", default: "", quality: "N C", type: "list",
            details: "This attribute SHALL contain a read-only list of Trusted Root CA " +
                     "Certificates installed on the Node, as octet strings containing their " +
                     "Matter Certificate Encoding representation",
            xref: { document: "core", section: "11.17.5.5" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "octstr"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0005, name: "CurrentFabricIndex",
            access: "R V", conformance: "M", default: 0, type: "uint8",
            details: "This attribute SHALL contain accessing fabric index",
            xref: { document: "core", section: "11.17.5.6" }
        },

        {
            tag: "attribute", id: 0x0000, name: "Nocs",
            access: "R A", conformance: "M", type: "list",
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "NocStruct"
                }
            ]
        },

        {
            tag: "command", id: 0x0000, name: "AttestationRequest",
            access: "R A", conformance: "M", direction: "request", response: "AttestationResponse",
            details: "This command SHALL be generated to request the Attestation Information" +
                     ", in the form of an AttestationResponse Command. If the " +
                     "AttestationNonce that is provided in the command is malformed, a",
            xref: { document: "core", section: "11.17.6.1" },
            children: [
                {
                    tag: "datatype", name: "AttestationNonce",
                    conformance: "M", type: "octstr"
                }
            ]
        },

        {
            tag: "command", id: 0x0001, name: "AttestationResponse",
            conformance: "M", direction: "response",
            details: "This command SHALL be generated in response to an Attestation Request " +
                     "command",
            xref: { document: "core", section: "11.17.6.2" },
            children: [
                {
                    tag: "datatype", name: "AttestationElements",
                    conformance: "M", type: "octstr"
                },

                {
                    tag: "datatype", name: "AttestationSignature",
                    conformance: "M", type: "octstr"
                }
            ]
        },

        {
            tag: "command", id: 0x0002, name: "CertificateChainRequest",
            access: "R A", conformance: "M", direction: "request", response: "CertificateChainResponse",
            details: "If the CertificateType is not a valid value per " +
                     "CertificateChainTypeEnum then the command SHALL fail with a Status " +
                     "Code of INVALID_COMMAND",
            xref: { document: "core", section: "11.17.6.3" },
            children: [
                {
                    tag: "datatype", name: "CertificateType",
                    conformance: "M", type: "CertificateChainTypeEnum"
                }
            ]
        },

        {
            tag: "command", id: 0x0003, name: "CertificateChainResponse",
            conformance: "M", direction: "response",
            details: "This command SHALL be generated in response to a " +
                     "CertificateChainRequest command",
            xref: { document: "core", section: "11.17.6.4" },
            children: [
                {
                    tag: "datatype", name: "Certificate",
                    conformance: "M", type: "octstr"
                }
            ]
        },

        {
            tag: "command", id: 0x0004, name: "CsrRequest",
            access: "R A", conformance: "M", direction: "request", response: "CsrResponse",
            details: "This command SHALL be generated to execute the Node Operational CSR " +
                     "Procedure and subsequently return the NOCSR Information, in the form " +
                     "of a CSRResponse Command",
            xref: { document: "core", section: "11.17.6.5" },
            children: [
                {
                    tag: "datatype", name: "CsrNonce",
                    conformance: "M", type: "octstr"
                },

                {
                    tag: "datatype", name: "IsForUpdateNoc",
                    conformance: "O", type: "bool"
                }
            ]
        },

        {
            tag: "command", id: 0x0005, name: "CsrResponse",
            conformance: "M", direction: "response",
            details: "This command SHALL be generated in response to a CSRRequest Command",
            xref: { document: "core", section: "11.17.6.6" },
            children: [
                {
                    tag: "datatype", name: "NocsrElements",
                    conformance: "M", type: "octstr"
                },

                {
                    tag: "datatype", name: "AttestationSignature",
                    conformance: "M", type: "octstr"
                }
            ]
        },

        {
            tag: "command", id: 0x0006, name: "AddNoc",
            access: "R A", conformance: "M", direction: "request", response: "NocResponse",
            details: "This command SHALL add a new NOC chain to the device and commission a " +
                     "new Fabric association upon successful validation of all arguments and" +
                     " preconditions",
            xref: { document: "core", section: "11.17.6.8" },
            children: [
                {
                    tag: "datatype", name: "NocValue",
                    conformance: "M", type: "octstr"
                },

                {
                    tag: "datatype", name: "IcacValue",
                    conformance: "O", type: "octstr"
                },

                {
                    tag: "datatype", name: "IpkValue",
                    conformance: "M", type: "octstr"
                },

                {
                    tag: "datatype", name: "CaseAdminSubject",
                    conformance: "M", type: "uint64"
                },

                {
                    tag: "datatype", name: "AdminVendorId",
                    conformance: "M", type: "vendor-id"
                }
            ]
        },

        {
            tag: "command", id: 0x0007, name: "UpdateNoc",
            access: "R F A", conformance: "M", direction: "request", response: "NocResponse",
            details: "This command SHALL replace the NOC and optional associated ICAC (if " +
                     "present) scoped under the accessing fabric upon successful validation " +
                     "of all arguments and preconditions. The new value SHALL immediately be" +
                     " reflected in the NOCs list attribute",
            xref: { document: "core", section: "11.17.6.9" },
            children: [
                {
                    tag: "datatype", name: "NocValue",
                    conformance: "M", type: "octstr"
                },

                {
                    tag: "datatype", name: "IcacValue",
                    conformance: "O", type: "octstr"
                }
            ]
        },

        {
            tag: "command", id: 0x0008, name: "NocResponse",
            conformance: "M", direction: "response",
            details: "This command SHALL be generated in response to the following commands",
            xref: { document: "core", section: "11.17.6.10" },
            children: [
                {
                    tag: "datatype", name: "StatusCode",
                    conformance: "M", type: "NodeOperationalCertStatusEnum"
                },

                {
                    tag: "datatype", name: "FabricIndex",
                    conformance: "O", type: "fabric-idx"
                },

                {
                    tag: "datatype", name: "DebugText",
                    conformance: "O", type: "string"
                }
            ]
        },

        {
            tag: "command", id: 0x0009, name: "UpdateFabricLabel",
            access: "R F A", conformance: "M", direction: "request", response: "NocResponse",
            details: "This command SHALL be used by an Administrator to set the user-visible" +
                     " Label field for a given Fabric, as reflected by entries in the " +
                     "Fabrics attribute",
            xref: { document: "core", section: "11.17.6.11" },
            children: [
                {
                    tag: "datatype", name: "Label",
                    conformance: "M", type: "string"
                }
            ]
        },

        {
            tag: "command", id: 0x000a, name: "RemoveFabric",
            access: "R A", conformance: "M", direction: "request", response: "NocResponse",
            details: "This command is used by Administrators to remove a given Fabric and " +
                     "delete all associated fabric-scoped data",
            xref: { document: "core", section: "11.17.6.12" },
            children: [
                {
                    tag: "datatype", name: "FabricIndex",
                    conformance: "M", type: "fabric-idx"
                }
            ]
        },

        {
            tag: "command", id: 0x000b, name: "AddTrustedRootCertificate",
            access: "R A", conformance: "M", direction: "request", response: "status",
            details: "This command SHALL add a Trusted Root CA Certificate, provided as its " +
                     "Matter Certificate Encoding representation, to the " +
                     "TrustedRootCertificates Attribute list and SHALL ensure the next " +
                     "AddNOC command executed uses the provided certificate as its root of " +
                     "trust",
            xref: { document: "core", section: "11.17.6.13" },
            children: [
                {
                    tag: "datatype", name: "RootCaCertificate",
                    conformance: "M", type: "octstr"
                }
            ]
        },

        {
            tag: "datatype", name: "CertificateChainTypeEnum",
            conformance: "M", type: "enum8",
            details: "This data type is derived from enum8",
            xref: { document: "core", section: "11.17.4.2" },
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "DacCertificate",
                    conformance: "M",
                    xref: { document: "core", section: "11.17.4.2" }
                },

                {
                    tag: "datatype", id: 0x0002, name: "PaiCertificate",
                    conformance: "M",
                    xref: { document: "core", section: "11.17.4.2" }
                }
            ]
        },

        {
            tag: "datatype", name: "FabricDescriptorStruct",
            access: "R F", conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "RootPublicKey",
                    conformance: "M", type: "octstr"
                },

                {
                    tag: "datatype", name: "VendorId",
                    conformance: "M", type: "vendor-id"
                },

                {
                    tag: "datatype", name: "FabricId",
                    conformance: "M", type: "fabric-id"
                },

                {
                    tag: "datatype", name: "NodeId",
                    conformance: "M", type: "node-id"
                },

                {
                    tag: "datatype", name: "Label",
                    conformance: "M", type: "string"
                }
            ]
        },

        {
            tag: "datatype", name: "NodeOperationalCertStatusEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Ok",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "InvalidPublicKey",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "InvalidNodeOpId",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "InvalidNoc",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "MissingCsr",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "TableFull",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0006, name: "InvalidAdminSubject",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0009, name: "FabricConflict",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000a, name: "LabelConflict",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000b, name: "InvalidFabricIndex",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "NocStruct",
            access: "R F", conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "Noc",
                    access: "R S", conformance: "M", type: "octstr"
                },

                {
                    tag: "datatype", name: "Icac",
                    access: "R S", conformance: "M", quality: "X", type: "octstr"
                }
            ]
        }
    ]
});
