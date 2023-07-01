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
             "manage the associated Fabrics.",
    xref: { document: "core", section: "11.17" },

    children: [
        {
            tag: "attribute", name: "NoCs", id: 0x0, type: "list", access: "R F A", conformance: "M",
            constraint: "max SupportedFabrics", quality: "N C",
            details: "This attribute contains all NOCs applicable to this Node, encoded as a read-only list of NOCStruct.",
            xref: { document: "core", section: "11.17.5.1" },
            children: [ { tag: "datatype", name: "entry", type: "NOCStruct" } ]
        },

        {
            tag: "attribute", name: "Fabrics", id: 0x1, type: "list", access: "R F V", conformance: "M",
            constraint: "max SupportedFabrics", quality: "N",
            details: "This attribute describes all fabrics to which this Node is commissioned, encoded as a read-only " +
                     "list of FabricDescriptorStruct. This information MAY be computed directly from the NOCs attribute.",
            xref: { document: "core", section: "11.17.5.2" },
            children: [ { tag: "datatype", name: "entry", type: "FabricDescriptorStruct" } ]
        },

        {
            tag: "attribute", name: "SupportedFabrics", id: 0x2, type: "uint8", access: "R V", conformance: "M",
            constraint: "5 to 254", quality: "F",
            details: "This attribute contains the number of Fabrics that are supported by the device. This value is fixed " +
                     "for a particular device.",
            xref: { document: "core", section: "11.17.5.3" }
        },

        {
            tag: "attribute", name: "CommissionedFabrics", id: 0x3, type: "uint8", access: "R V",
            conformance: "M", constraint: "max SupportedFabrics", quality: "N",
            details: "This attribute contains the number of Fabrics to which the device is currently commissioned. This " +
                     "attribute SHALL be equal to the following:",
            xref: { document: "core", section: "11.17.5.4" }
        },

        {
            tag: "attribute", name: "TrustedRootCertificates", id: 0x4, type: "list", access: "R V",
            conformance: "M", constraint: "max SupportedFabrics[max 400]", quality: "N C",
            details: "This attribute SHALL contain a read-only list of Trusted Root CA Certificates installed on the " +
                     "Node, as octet strings containing their Matter Certificate Encoding representation.",
            xref: { document: "core", section: "11.17.5.5" },
            children: [ { tag: "datatype", name: "entry", type: "octstr" } ]
        },

        {
            tag: "attribute", name: "CurrentFabricIndex", id: 0x5, type: "uint8", access: "R V",
            conformance: "M",
            details: "This attribute SHALL contain accessing fabric index.",
            xref: { document: "core", section: "11.17.5.6" }
        },

        {
            tag: "command", name: "AttestationRequest", id: 0x0, access: "A", conformance: "M",
            direction: "request", response: "AttestationResponse",
            details: "This command SHALL be generated to request the Attestation Information, in the form of an " +
                     "AttestationResponse Command. If the AttestationNonce that is provided in the command is malformed, a",
            xref: { document: "core", section: "11.17.6.1" },

            children: [
                {
                    tag: "datatype", name: "AttestationNonce", id: 0x0, type: "octstr", conformance: "M",
                    constraint: "32"
                }
            ]
        },

        {
            tag: "command", name: "AttestationResponse", id: 0x1, conformance: "M", direction: "response",
            details: "This command SHALL be generated in response to an Attestation Request command.",
            xref: { document: "core", section: "11.17.6.2" },

            children: [
                {
                    tag: "datatype", name: "AttestationElements", id: 0x0, type: "octstr", conformance: "M",
                    constraint: "max RespMax",
                    details: "This field SHALL contain the octet string of the serialized attestation_elements_message.",
                    xref: { document: "core", section: "11.17.6.2.1" }
                },

                {
                    tag: "datatype", name: "AttestationSignature", id: 0x1, type: "octstr", conformance: "M",
                    constraint: "64",
                    details: "This field shall contain the octet string of the necessary attestation_signature as described in " +
                             "Section 11.17.4.7, “Attestation Information”.",
                    xref: { document: "core", section: "11.17.6.2.2" }
                }
            ]
        },

        {
            tag: "command", name: "CertificateChainRequest", id: 0x2, access: "A", conformance: "M",
            direction: "request", response: "CertificateChainResponse",
            details: "If the CertificateType is not a valid value per CertificateChainTypeEnum then the command SHALL " +
                     "fail with a Status Code of INVALID_COMMAND.",
            xref: { document: "core", section: "11.17.6.3" },

            children: [
                {
                    tag: "datatype", name: "CertificateType", id: 0x0, type: "CertificateChainTypeEnum",
                    conformance: "M", constraint: "desc"
                }
            ]
        },

        {
            tag: "command", name: "CertificateChainResponse", id: 0x3, conformance: "M", direction: "response",
            details: "This command SHALL be generated in response to a CertificateChainRequest command.",
            xref: { document: "core", section: "11.17.6.4" },

            children: [
                {
                    tag: "datatype", name: "Certificate", id: 0x0, type: "octstr", conformance: "M",
                    constraint: "max 600",
                    details: "This field SHALL be the DER encoded certificate corresponding to the CertificateType field in the " +
                             "CertificateChainRequest command.",
                    xref: { document: "core", section: "11.17.6.4.1" }
                }
            ]
        },

        {
            tag: "command", name: "CsrRequest", id: 0x4, access: "A", conformance: "M", direction: "request",
            response: "CsrResponse",
            details: "This command SHALL be generated to execute the Node Operational CSR Procedure and subsequently " +
                     "return the NOCSR Information, in the form of a CSRResponse Command.",
            xref: { document: "core", section: "11.17.6.5" },
            children: [
                { tag: "datatype", name: "CsrNonce", id: 0x0, type: "octstr", conformance: "M", constraint: "32" },
                { tag: "datatype", name: "IsForUpdateNoc", id: 0x1, type: "bool", conformance: "O", default: true }
            ]
        },

        {
            tag: "command", name: "CsrResponse", id: 0x5, conformance: "M", direction: "response",
            details: "This command SHALL be generated in response to a CSRRequest Command.",
            xref: { document: "core", section: "11.17.6.6" },

            children: [
                {
                    tag: "datatype", name: "NocsrElements", id: 0x0, type: "octstr", conformance: "M",
                    constraint: "max RespMax",
                    details: "This field SHALL contain the octet string of the serialized nocsr_elements_message.",
                    xref: { document: "core", section: "11.17.6.6.1" }
                },

                {
                    tag: "datatype", name: "AttestationSignature", id: 0x1, type: "octstr", conformance: "M",
                    constraint: "64"
                }
            ]
        },

        {
            tag: "command", name: "AddNoc", id: 0x6, access: "A", conformance: "M", direction: "request",
            response: "NocResponse",
            details: "This command SHALL add a new NOC chain to the device and commission a new Fabric association upon " +
                     "successful validation of all arguments and preconditions.",
            xref: { document: "core", section: "11.17.6.8" },

            children: [
                { tag: "datatype", name: "NocValue", id: 0x0, type: "octstr", conformance: "M", constraint: "max 400" },
                {
                    tag: "datatype", name: "IcacValue", id: 0x1, type: "octstr", conformance: "O",
                    constraint: "max 400"
                },

                {
                    tag: "datatype", name: "IpkValue", id: 0x2, type: "octstr", conformance: "M", constraint: "16",
                    details: "This field SHALL contain the value of the Epoch Key for the Identity Protection Key (IPK) to set " +
                             "for the Fabric which is to be added. This is needed to bootstrap a necessary configuration value " +
                             "for subsequent CASE to succeed. See Section 4.13.2.6.1, “Identity Protection Key (IPK)” for details.",
                    xref: { document: "core", section: "11.17.6.8.1" }
                },

                {
                    tag: "datatype", name: "CaseAdminSubject", id: 0x3, type: "SubjectID", conformance: "M",
                    details: "If the AddNOC command succeeds according to the semantics of the following subsections, then the",
                    xref: { document: "core", section: "11.17.6.8.2" }
                },

                {
                    tag: "datatype", name: "AdminVendorId", id: 0x4, type: "vendor-id", conformance: "M",
                    details: "This field SHALL be set to the Vendor ID of the entity issuing the AddNOC command. This value SHALL " +
                             "NOT be one of the reserved Vendor ID values defined in Table 1, “Vendor ID Allocations”.",
                    xref: { document: "core", section: "11.17.6.8.3" }
                }
            ]
        },

        {
            tag: "command", name: "UpdateNoc", id: 0x7, access: "F A", conformance: "M", direction: "request",
            response: "NocResponse",
            details: "This command SHALL replace the NOC and optional associated ICAC (if present) scoped under the " +
                     "accessing fabric upon successful validation of all arguments and preconditions. The new value SHALL " +
                     "immediately be reflected in the NOCs list attribute.",
            xref: { document: "core", section: "11.17.6.9" },

            children: [
                {
                    tag: "datatype", name: "NocValue", id: 0x0, type: "octstr", access: "F", conformance: "M",
                    constraint: "max 400"
                },
                {
                    tag: "datatype", name: "IcacValue", id: 0x1, type: "octstr", access: "F", conformance: "O",
                    constraint: "max 400"
                }
            ]
        },

        {
            tag: "command", name: "NocResponse", id: 0x8, conformance: "M", direction: "response",
            details: "This command SHALL be generated in response to the following commands:",
            xref: { document: "core", section: "11.17.6.10" },

            children: [
                {
                    tag: "datatype", name: "StatusCode", id: 0x0, type: "NodeOperationalCertStatusEnum",
                    conformance: "M",
                    details: "This field SHALL contain an NOCStatus value representing the status of an operation involving a NOC.",
                    xref: { document: "core", section: "11.17.6.10.1" }
                },

                {
                    tag: "datatype", name: "FabricIndex", id: 0x1, type: "fabric-idx", conformance: "O",
                    constraint: "1 to 254",
                    details: "This field SHALL be present whenever StatusCode has a value of OK. If present, it SHALL contain the " +
                             "Fabric Index of the Fabric last added, removed or updated.",
                    xref: { document: "core", section: "11.17.6.10.2" }
                },

                {
                    tag: "datatype", name: "DebugText", id: 0x2, type: "string", conformance: "O",
                    constraint: "max 128",
                    details: "This field MAY contain debugging textual information from the cluster implementation, which SHOULD " +
                             "NOT be presented to user interfaces in any way. Its purpose is to help developers in " +
                             "troubleshooting errors and the contents MAY go into logs or crash reports.",
                    xref: { document: "core", section: "11.17.6.10.3" }
                }
            ]
        },

        {
            tag: "command", name: "UpdateFabricLabel", id: 0x9, access: "F A", conformance: "M",
            direction: "request", response: "NocResponse",
            details: "This command SHALL be used by an Administrator to set the user-visible Label field for a given " +
                     "Fabric, as reflected by entries in the Fabrics attribute.",
            xref: { document: "core", section: "11.17.6.11" },

            children: [
                {
                    tag: "datatype", name: "Label", id: 0x0, type: "string", access: "F", conformance: "M",
                    constraint: "max 32"
                }
            ]
        },

        {
            tag: "command", name: "RemoveFabric", id: 0xa, access: "A", conformance: "M", direction: "request",
            response: "NocResponse",
            details: "This command is used by Administrators to remove a given Fabric and delete all associated " +
                     "fabric-scoped data.",
            xref: { document: "core", section: "11.17.6.12" },

            children: [
                {
                    tag: "datatype", name: "FabricIndex", id: 0x0, type: "fabric-idx", conformance: "M",
                    constraint: "1 to 254"
                }
            ]
        },

        {
            tag: "command", name: "AddTrustedRootCertificate", id: 0xb, access: "A", conformance: "M",
            direction: "request", response: "status",
            details: "This command SHALL add a Trusted Root CA Certificate, provided as its Matter Certificate Encoding " +
                     "representation, to the TrustedRootCertificates Attribute list and SHALL ensure the next AddNOC " +
                     "command executed uses the provided certificate as its root of trust.",
            xref: { document: "core", section: "11.17.6.13" },

            children: [
                {
                    tag: "datatype", name: "RootCaCertificate", id: 0x0, type: "octstr", conformance: "M",
                    constraint: "max 400"
                }
            ]
        },

        {
            tag: "datatype", name: "CertificateChainTypeEnum", type: "enum8", conformance: "M",
            details: "This enumeration is used by the CertificateChainRequest command to convey which certificate from " +
                     "the device attestation certificate chain to transmit back to the client.",
            xref: { document: "core", section: "11.17.4.2" },
            children: [
                { tag: "datatype", name: "DacCertificate", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "PaiCertificate", id: 0x2, conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "NodeOperationalCertStatusEnum", type: "enum8", conformance: "M",
            details: "This enumeration is used by the NOCResponse common response command to convey detailed out",
            xref: { document: "core", section: "11.17.4.3" },

            children: [
                { tag: "datatype", name: "Ok", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "InvalidPublicKey", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "InvalidNodeOpId", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "InvalidNoc", id: 0x3, conformance: "M" },
                { tag: "datatype", name: "MissingCsr", id: 0x4, conformance: "M" },
                { tag: "datatype", name: "TableFull", id: 0x5, conformance: "M" },
                { tag: "datatype", name: "InvalidAdminSubject", id: 0x6, conformance: "M" },
                { tag: "datatype", name: "FabricConflict", id: 0x9, conformance: "M" },
                { tag: "datatype", name: "LabelConflict", id: 0xa, conformance: "M" },
                { tag: "datatype", name: "InvalidFabricIndex", id: 0xb, conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "NOCStruct", type: "struct", access: "R F", conformance: "M",
            details: "This encodes a fabric sensitive NOC chain, underpinning a commissioned Operational Identity for a " +
                     "given Node.",
            xref: { document: "core", section: "11.17.4.4" },

            children: [
                {
                    tag: "datatype", name: "Noc", id: 0x1, type: "octstr", access: "S", conformance: "M",
                    constraint: "max 400", quality: "X",
                    details: "This field SHALL contain the NOC for the struct’s associated fabric, encoded using Matter " +
                             "Certificate Encoding.",
                    xref: { document: "core", section: "11.17.4.4.1" }
                },

                {
                    tag: "datatype", name: "Icac", id: 0x2, type: "octstr", access: "S", conformance: "M",
                    constraint: "max 400", quality: "X",
                    details: "This field SHALL contain the ICAC or the struct’s associated fabric, encoded using Matter " +
                             "Certificate Encoding. If no ICAC is present in the chain, this field SHALL be set to null.",
                    xref: { document: "core", section: "11.17.4.4.2" }
                }
            ]
        },

        {
            tag: "datatype", name: "FabricDescriptorStruct", type: "struct", access: "R F", conformance: "M",
            details: "This structure encodes a Fabric Reference for a fabric within which a given Node is currently " +
                     "commissioned.",
            xref: { document: "core", section: "11.17.4.5" },

            children: [
                {
                    tag: "datatype", name: "VendorId", id: 0x2, type: "vendor-id", access: "F", conformance: "M",
                    constraint: "desc",
                    details: "This field SHALL contain the value of AdminVendorID provided in the AddNOC command that led to the " +
                             "creation of this FabricDescriptorStruct. The set of allowed values is defined in Section " +
                             "11.17.6.8.3, “AdminVendorID Field”.",
                    xref: { document: "core", section: "11.17.4.5.2" }
                },

                {
                    tag: "datatype", name: "FabricId", id: 0x3, type: "fabric-id", access: "F", conformance: "M",
                    details: "This field SHALL contain the FabricID allocated to the fabric referenced by FabricIndex. This field " +
                             "SHALL match the value found in the matter-fabric-id field from the operational certificate provid",
                    xref: { document: "core", section: "11.17.4.5.3" }
                },

                {
                    tag: "datatype", name: "Label", id: 0x5, type: "string", access: "F", conformance: "M",
                    constraint: "max 32", default: "",
                    details: "This field SHALL contain a commissioner-set label for the fabric referenced by FabricIndex. This " +
                             "label is set by the UpdateFabricLabel command.",
                    xref: { document: "core", section: "11.17.4.5.5" }
                },

                { tag: "datatype", name: "RootPublicKey", type: "octstr", conformance: "M" }
            ]
        }
    ]
});