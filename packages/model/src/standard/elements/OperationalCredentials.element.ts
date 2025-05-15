/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const OperationalCredentials = Cluster(
    { id: 0x3e, name: "OperationalCredentials" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),
    Attribute(
        { id: 0x0, name: "Nocs", type: "list", access: "R F A", constraint: "max supportedFabrics", quality: "N C" },
        Field({ name: "entry", type: "NOCStruct" })
    ),

    Attribute(
        {
            id: 0x1, name: "Fabrics", type: "list",
            access: "R F V", conformance: "M", constraint: "max supportedFabrics", quality: "N"
        },
        Field({ name: "entry", type: "FabricDescriptorStruct" })
    ),

    Attribute({
        id: 0x2, name: "SupportedFabrics", type: "uint8",
        access: "R V", conformance: "M", constraint: "5 to 254", quality: "F"
    }),
    Attribute({
        id: 0x3, name: "CommissionedFabrics", type: "uint8",
        access: "R V", conformance: "M", constraint: "max supportedFabrics", quality: "N"
    }),

    Attribute(
        {
            id: 0x4, name: "TrustedRootCertificates", type: "list",
            access: "R V", conformance: "M", constraint: "max supportedFabrics[max 400]", quality: "N C"
        },
        Field({ name: "entry", type: "octstr" })
    ),

    Attribute({ id: 0x5, name: "CurrentFabricIndex", type: "fabric-idx", access: "R V", default: 0 }),

    Command(
        {
            id: 0x0, name: "AttestationRequest",
            access: "A", conformance: "M", direction: "request", response: "AttestationResponse"
        },
        Field({ id: 0x0, name: "AttestationNonce", type: "octstr", conformance: "M", constraint: "32" })
    ),

    Command(
        { id: 0x1, name: "AttestationResponse", direction: "response" },
        Field({ id: 0x0, name: "AttestationElements", type: "octstr", constraint: "max 900" }),
        Field({ id: 0x1, name: "AttestationSignature", type: "octstr", conformance: "M", constraint: "64" })
    ),

    Command(
        {
            id: 0x2, name: "CertificateChainRequest",
            access: "A", conformance: "M", direction: "request", response: "CertificateChainResponse"
        },
        Field({ id: 0x0, name: "CertificateType", type: "CertificateChainTypeEnum", conformance: "M", constraint: "desc" })
    ),

    Command(
        { id: 0x3, name: "CertificateChainResponse", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "Certificate", type: "octstr", conformance: "M", constraint: "max 600" })
    ),
    Command(
        { id: 0x4, name: "CsrRequest", access: "A", conformance: "M", direction: "request", response: "CsrResponse" },
        Field({ id: 0x0, name: "CsrNonce", type: "octstr", conformance: "M", constraint: "32" }),
        Field({ id: 0x1, name: "IsForUpdateNoc", type: "bool", conformance: "O", default: false })
    ),
    Command(
        { id: 0x5, name: "CsrResponse", direction: "response" },
        Field({ id: 0x0, name: "NocsrElements", type: "octstr", constraint: "max 900" }),
        Field({ id: 0x1, name: "AttestationSignature", type: "octstr", conformance: "M", constraint: "64" })
    ),

    Command(
        { id: 0x6, name: "AddNoc", access: "A", conformance: "M", direction: "request", response: "NocResponse" },
        Field({ id: 0x0, name: "NocValue", type: "octstr", conformance: "M", constraint: "max 400" }),
        Field({ id: 0x1, name: "IcacValue", type: "octstr", conformance: "O", constraint: "max 400" }),
        Field({ id: 0x2, name: "IpkValue", type: "octstr", conformance: "M", constraint: "16" }),
        Field({ id: 0x3, name: "CaseAdminSubject", type: "subject-id", conformance: "M" }),
        Field({ id: 0x4, name: "AdminVendorId", type: "vendor-id", conformance: "M" })
    ),

    Command(
        { id: 0x7, name: "UpdateNoc", access: "F A", conformance: "M", direction: "request", response: "NocResponse" },
        Field({ id: 0x0, name: "NocValue", type: "octstr", access: "F", conformance: "M", constraint: "max 400" }),
        Field({ id: 0x1, name: "IcacValue", type: "octstr", access: "F", conformance: "O", constraint: "max 400" }),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    ),

    Command(
        { id: 0x8, name: "NocResponse", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "StatusCode", type: "NodeOperationalCertStatusEnum", conformance: "M" }),
        Field({ id: 0x1, name: "FabricIndex", type: "fabric-idx", conformance: "O", constraint: "1 to 254" }),
        Field({ id: 0x2, name: "DebugText", type: "string", conformance: "O", constraint: "max 128" })
    ),

    Command(
        {
            id: 0x9, name: "UpdateFabricLabel",
            access: "F A", conformance: "M", direction: "request", response: "NocResponse"
        },
        Field({ id: 0x0, name: "Label", type: "string", access: "F", conformance: "M", constraint: "max 32" }),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    ),

    Command(
        { id: 0xa, name: "RemoveFabric", access: "A", conformance: "M", direction: "request", response: "NocResponse" },
        Field({ id: 0x0, name: "FabricIndex", type: "fabric-idx", conformance: "M", constraint: "1 to 254" })
    ),

    Command(
        {
            id: 0xb, name: "AddTrustedRootCertificate",
            access: "A", conformance: "M", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "RootCaCertificate", type: "octstr", conformance: "M", constraint: "max 400" })
    ),

    Datatype(
        { name: "CertificateChainTypeEnum", type: "enum8" },
        Field({ id: 0x1, name: "DacCertificate", conformance: "M" }),
        Field({ id: 0x2, name: "PaiCertificate", conformance: "M" })
    ),

    Datatype(
        { name: "NodeOperationalCertStatusEnum", type: "enum8" },
        Field({ id: 0x0, name: "Ok", conformance: "M" }),
        Field({ id: 0x1, name: "InvalidPublicKey", conformance: "M" }),
        Field({ id: 0x2, name: "InvalidNodeOpId", conformance: "M" }),
        Field({ id: 0x3, name: "InvalidNoc", conformance: "M" }),
        Field({ id: 0x4, name: "MissingCsr", conformance: "M" }),
        Field({ id: 0x5, name: "TableFull", conformance: "M" }),
        Field({ id: 0x6, name: "InvalidAdminSubject", conformance: "M" }),
        Field({ id: 0x9, name: "FabricConflict", conformance: "M" }),
        Field({ id: 0xa, name: "LabelConflict", conformance: "M" }),
        Field({ id: 0xb, name: "InvalidFabricIndex", conformance: "M" })
    ),

    Datatype(
        { name: "NOCStruct", type: "struct" },
        Field({ id: 0x1, name: "Noc", type: "octstr", access: "S", conformance: "M", constraint: "max 400" }),
        Field({ id: 0x2, name: "Icac", type: "octstr", access: "S", conformance: "M", constraint: "max 400", quality: "X" }),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    ),

    Datatype(
        { name: "FabricDescriptorStruct", type: "struct" },
        Field({ id: 0x1, name: "RootPublicKey", type: "octstr", access: "F", conformance: "M", constraint: "65" }),
        Field({ id: 0x2, name: "VendorId", type: "vendor-id", access: "F", conformance: "M", constraint: "desc" }),
        Field({ id: 0x3, name: "FabricId", type: "fabric-id", access: "F", conformance: "M" }),
        Field({ id: 0x4, name: "NodeId", type: "node-id", access: "F", conformance: "M" }),
        Field({ id: 0x5, name: "Label", type: "string", access: "F", conformance: "M", constraint: "max 32" }),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    )
);

MatterDefinition.children.push(OperationalCredentials);
