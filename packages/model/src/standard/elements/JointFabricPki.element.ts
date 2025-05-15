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
    CommandElement as Command,
    FieldElement as Field,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const JointFabricPki = Cluster(
    { id: 0x753, name: "JointFabricPki" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),

    Command(
        {
            id: 0x0, name: "IcacsrRequest",
            access: "A", conformance: "M", direction: "request", response: "IcacsrResponse"
        },
        Field({ id: 0x0, name: "Icacsr", type: "octstr", conformance: "M", constraint: "max 400" })
    ),

    Command(
        { id: 0x1, name: "IcacsrResponse", access: "A", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "StatusCode", type: "IcacsrRequestStatusEnum", conformance: "M" }),
        Field({ id: 0x1, name: "Icac", type: "octstr", conformance: "O", constraint: "max 400" })
    ),
    Command({
        id: 0x2, name: "TransferAnchorRequest",
        access: "A", conformance: "M", direction: "request", response: "TransferAnchorResponse"
    }),
    Command({ id: 0x3, name: "TransferAnchorResponse", access: "A", conformance: "M", direction: "response" }),
    Command({
        id: 0x4, name: "TransferAnchorComplete",
        access: "A", conformance: "M", direction: "request", response: "status"
    }),

    Datatype(
        { name: "IcacsrRequestStatusEnum", type: "enum8" },
        Field({ id: 0x0, name: "Ok", conformance: "M" }),
        Field({ id: 0x1, name: "InvalidIcaCsrFormat", conformance: "M" }),
        Field({ id: 0x2, name: "InvalidIcaCsrSignature", conformance: "M" }),
        Field({ id: 0x3, name: "FailedDclVendorIdValidation", conformance: "M" }),
        Field({ id: 0x4, name: "NotAnIcac", conformance: "M" }),
        Field({ id: 0x5, name: "BusyAnchorTransfer", conformance: "M" }),
        Field({ id: 0x6, name: "IcaCsrSigningFailed", conformance: "M" }),
        Field({ id: 0x7, name: "IcaCsrRequestNoUserConsent", conformance: "M" })
    ),

    Datatype(
        { name: "TransferAnchorResponseStatusEnum", type: "enum8" },
        Field({ id: 0x0, name: "Ok", conformance: "M" }),
        Field({ id: 0x1, name: "TransferAnchorStatusDatastoreBusy", conformance: "M" }),
        Field({ id: 0x2, name: "TransferAnchorStatusNoUserConsent", conformance: "M" })
    )
);

MatterDefinition.children.push(JointFabricPki);
