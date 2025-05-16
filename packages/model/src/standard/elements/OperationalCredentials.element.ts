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
    { name: "OperationalCredentials", id: 0x3e },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),
    Attribute(
        { name: "Nocs", id: 0x0, type: "list", constraint: "max supportedFabrics", access: "R F A", quality: "N C" },
        Field({ name: "entry", type: "NOCStruct" })
    ),

    Attribute(
        {
            name: "Fabrics", id: 0x1, type: "list",
            constraint: "max supportedFabrics", conformance: "M", access: "R F V", quality: "N"
        },
        Field({ name: "entry", type: "FabricDescriptorStruct" })
    ),

    Attribute({
        name: "SupportedFabrics", id: 0x2, type: "uint8",
        constraint: "5 to 254", conformance: "M", access: "R V", quality: "F"
    }),
    Attribute({
        name: "CommissionedFabrics", id: 0x3, type: "uint8",
        constraint: "max supportedFabrics", conformance: "M", access: "R V", quality: "N"
    }),

    Attribute(
        {
            name: "TrustedRootCertificates", id: 0x4, type: "list",
            constraint: "max supportedFabrics[max 400]", conformance: "M", access: "R V", quality: "N C"
        },
        Field({ name: "entry", type: "octstr" })
    ),

    Attribute({ name: "CurrentFabricIndex", id: 0x5, type: "fabric-idx", default: 0, access: "R V" }),

    Command(
        {
            name: "AttestationRequest", id: 0x0,
            conformance: "M", access: "A", direction: "request", response: "AttestationResponse"
        },
        Field({ name: "AttestationNonce", id: 0x0, type: "octstr", constraint: "32", conformance: "M" })
    ),

    Command(
        { name: "AttestationResponse", id: 0x1, direction: "response" },
        Field({ name: "AttestationElements", id: 0x0, type: "octstr", constraint: "max 900" }),
        Field({ name: "AttestationSignature", id: 0x1, type: "octstr", constraint: "64", conformance: "M" })
    ),

    Command(
        {
            name: "CertificateChainRequest", id: 0x2,
            conformance: "M", access: "A", direction: "request", response: "CertificateChainResponse"
        },
        Field({ name: "CertificateType", id: 0x0, type: "CertificateChainTypeEnum", constraint: "desc", conformance: "M" })
    ),

    Command(
        { name: "CertificateChainResponse", id: 0x3, conformance: "M", direction: "response" },
        Field({ name: "Certificate", id: 0x0, type: "octstr", constraint: "max 600", conformance: "M" })
    ),
    Command(
        { name: "CsrRequest", id: 0x4, conformance: "M", access: "A", direction: "request", response: "CsrResponse" },
        Field({ name: "CsrNonce", id: 0x0, type: "octstr", constraint: "32", conformance: "M" }),
        Field({ name: "IsForUpdateNoc", id: 0x1, type: "bool", default: false, conformance: "O" })
    ),
    Command(
        { name: "CsrResponse", id: 0x5, direction: "response" },
        Field({ name: "NocsrElements", id: 0x0, type: "octstr", constraint: "max 900" }),
        Field({ name: "AttestationSignature", id: 0x1, type: "octstr", constraint: "64", conformance: "M" })
    ),

    Command(
        { name: "AddNoc", id: 0x6, conformance: "M", access: "A", direction: "request", response: "NocResponse" },
        Field({ name: "NocValue", id: 0x0, type: "octstr", constraint: "max 400", conformance: "M" }),
        Field({ name: "IcacValue", id: 0x1, type: "octstr", constraint: "max 400", conformance: "O" }),
        Field({ name: "IpkValue", id: 0x2, type: "octstr", constraint: "16", conformance: "M" }),
        Field({ name: "CaseAdminSubject", id: 0x3, type: "subject-id", conformance: "M" }),
        Field({ name: "AdminVendorId", id: 0x4, type: "vendor-id", conformance: "M" })
    ),

    Command(
        { name: "UpdateNoc", id: 0x7, conformance: "M", access: "F A", direction: "request", response: "NocResponse" },
        Field({ name: "NocValue", id: 0x0, type: "octstr", constraint: "max 400", conformance: "M", access: "F" }),
        Field({ name: "IcacValue", id: 0x1, type: "octstr", constraint: "max 400", conformance: "O", access: "F" }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Command(
        { name: "NocResponse", id: 0x8, conformance: "M", direction: "response" },
        Field({ name: "StatusCode", id: 0x0, type: "NodeOperationalCertStatusEnum", conformance: "M" }),
        Field({ name: "FabricIndex", id: 0x1, type: "fabric-idx", constraint: "1 to 254", conformance: "O" }),
        Field({ name: "DebugText", id: 0x2, type: "string", constraint: "max 128", conformance: "O" })
    ),

    Command(
        {
            name: "UpdateFabricLabel", id: 0x9,
            conformance: "M", access: "F A", direction: "request", response: "NocResponse"
        },
        Field({ name: "Label", id: 0x0, type: "string", constraint: "max 32", conformance: "M", access: "F" }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Command(
        { name: "RemoveFabric", id: 0xa, conformance: "M", access: "A", direction: "request", response: "NocResponse" },
        Field({ name: "FabricIndex", id: 0x0, type: "fabric-idx", constraint: "1 to 254", conformance: "M" })
    ),

    Command(
        {
            name: "AddTrustedRootCertificate", id: 0xb,
            conformance: "M", access: "A", direction: "request", response: "status"
        },
        Field({ name: "RootCaCertificate", id: 0x0, type: "octstr", constraint: "max 400", conformance: "M" })
    ),

    Datatype(
        { name: "CertificateChainTypeEnum", type: "enum8" },
        Field({ name: "DacCertificate", id: 0x1, conformance: "M" }),
        Field({ name: "PaiCertificate", id: 0x2, conformance: "M" })
    ),

    Datatype(
        { name: "NodeOperationalCertStatusEnum", type: "enum8" },
        Field({ name: "Ok", id: 0x0, conformance: "M" }),
        Field({ name: "InvalidPublicKey", id: 0x1, conformance: "M" }),
        Field({ name: "InvalidNodeOpId", id: 0x2, conformance: "M" }),
        Field({ name: "InvalidNoc", id: 0x3, conformance: "M" }),
        Field({ name: "MissingCsr", id: 0x4, conformance: "M" }),
        Field({ name: "TableFull", id: 0x5, conformance: "M" }),
        Field({ name: "InvalidAdminSubject", id: 0x6, conformance: "M" }),
        Field({ name: "FabricConflict", id: 0x9, conformance: "M" }),
        Field({ name: "LabelConflict", id: 0xa, conformance: "M" }),
        Field({ name: "InvalidFabricIndex", id: 0xb, conformance: "M" })
    ),

    Datatype(
        { name: "NOCStruct", type: "struct" },
        Field({ name: "Noc", id: 0x1, type: "octstr", constraint: "max 400", conformance: "M", access: "S" }),
        Field({ name: "Icac", id: 0x2, type: "octstr", constraint: "max 400", conformance: "M", access: "S", quality: "X" }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "FabricDescriptorStruct", type: "struct" },
        Field({ name: "RootPublicKey", id: 0x1, type: "octstr", constraint: "65", conformance: "M", access: "F" }),
        Field({ name: "VendorId", id: 0x2, type: "vendor-id", constraint: "desc", conformance: "M", access: "F" }),
        Field({ name: "FabricId", id: 0x3, type: "fabric-id", conformance: "M", access: "F" }),
        Field({ name: "NodeId", id: 0x4, type: "node-id", conformance: "M", access: "F" }),
        Field({ name: "Label", id: 0x5, type: "string", constraint: "max 32", conformance: "M", access: "F" }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    )
);

MatterDefinition.children.push(OperationalCredentials);
