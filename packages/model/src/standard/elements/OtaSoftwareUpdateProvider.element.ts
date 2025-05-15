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

export const OtaSoftwareUpdateProvider = Cluster(
    { id: 0x29, name: "OtaSoftwareUpdateProvider" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),

    Command(
        {
            id: 0x0, name: "QueryImage",
            access: "O", conformance: "M", direction: "request", response: "QueryImageResponse"
        },
        Field({ id: 0x0, name: "VendorId", type: "vendor-id", conformance: "M" }),
        Field({ id: 0x1, name: "ProductId", type: "uint16", conformance: "M" }),
        Field({ id: 0x2, name: "SoftwareVersion", type: "uint32", conformance: "M" }),
        Field(
            { id: 0x3, name: "ProtocolsSupported", type: "list", conformance: "M", constraint: "max 8" },
            Field({ name: "entry", type: "DownloadProtocolEnum" })
        ),
        Field({ id: 0x4, name: "HardwareVersion", type: "uint16", conformance: "O" }),
        Field({ id: 0x5, name: "Location", type: "string", conformance: "O", constraint: "2" }),
        Field({ id: 0x6, name: "RequestorCanConsent", type: "bool", conformance: "O", default: false }),
        Field({ id: 0x7, name: "MetadataForProvider", type: "octstr", conformance: "O", constraint: "max 512" })
    ),

    Command(
        { id: 0x1, name: "QueryImageResponse", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "Status", type: "StatusEnum", conformance: "M" }),
        Field({ id: 0x1, name: "DelayedActionTime", type: "uint32", conformance: "O" }),
        Field({ id: 0x2, name: "ImageUri", type: "string", conformance: "O", constraint: "max 256" }),
        Field({ id: 0x3, name: "SoftwareVersion", type: "uint32", conformance: "O" }),
        Field({ id: 0x4, name: "SoftwareVersionString", type: "string", conformance: "O", constraint: "1 to 64" }),
        Field({ id: 0x5, name: "UpdateToken", type: "octstr", conformance: "O", constraint: "8 to 32" }),
        Field({ id: 0x6, name: "UserConsentNeeded", type: "bool", conformance: "O", default: false }),
        Field({ id: 0x7, name: "MetadataForRequestor", type: "octstr", conformance: "O", constraint: "max 512" })
    ),

    Command(
        {
            id: 0x2, name: "ApplyUpdateRequest",
            access: "O", conformance: "M", direction: "request", response: "ApplyUpdateResponse"
        },
        Field({ id: 0x0, name: "UpdateToken", type: "octstr", conformance: "M", constraint: "8 to 32" }),
        Field({ id: 0x1, name: "NewVersion", type: "uint32", conformance: "M" })
    ),

    Command(
        { id: 0x3, name: "ApplyUpdateResponse", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "Action", type: "ApplyUpdateActionEnum", conformance: "M" }),
        Field({ id: 0x1, name: "DelayedActionTime", type: "uint32", conformance: "M" })
    ),

    Command(
        {
            id: 0x4, name: "NotifyUpdateApplied",
            access: "O", conformance: "M", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "UpdateToken", type: "octstr", conformance: "M", constraint: "8 to 32" }),
        Field({ id: 0x1, name: "SoftwareVersion", type: "uint32", conformance: "M" })
    ),

    Datatype(
        { name: "StatusEnum", type: "enum8" },
        Field({ id: 0x0, name: "UpdateAvailable", conformance: "M" }),
        Field({ id: 0x1, name: "Busy", conformance: "M" }),
        Field({ id: 0x2, name: "NotAvailable", conformance: "M" }),
        Field({ id: 0x3, name: "DownloadProtocolNotSupported", conformance: "M" })
    ),

    Datatype(
        { name: "ApplyUpdateActionEnum", type: "enum8" },
        Field({ id: 0x0, name: "Proceed", conformance: "M" }),
        Field({ id: 0x1, name: "AwaitNextAction", conformance: "M" }),
        Field({ id: 0x2, name: "Discontinue", conformance: "M" })
    ),

    Datatype(
        { name: "DownloadProtocolEnum", type: "enum8" },
        Field({ id: 0x0, name: "BdxSynchronous", conformance: "M" }),
        Field({ id: 0x1, name: "BdxAsynchronous", conformance: "O" }),
        Field({ id: 0x2, name: "Https", conformance: "O" }),
        Field({ id: 0x3, name: "VendorSpecific", conformance: "O" })
    )
);

MatterDefinition.children.push(OtaSoftwareUpdateProvider);
