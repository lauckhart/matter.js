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
    EventElement as Event,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const OtaSoftwareUpdateRequestor = Cluster(
    { name: "OtaSoftwareUpdateRequestor", id: 0x2a },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        {
            name: "DefaultOtaProviders", id: 0x0, type: "list",
            default: [], constraint: "desc", conformance: "M", access: "RW F VA", quality: "N"
        },
        Field({ name: "entry", type: "ProviderLocation" })
    ),

    Attribute({ name: "UpdatePossible", id: 0x1, type: "bool", default: true, conformance: "M", access: "R V" }),
    Attribute({ name: "UpdateState", id: 0x2, type: "UpdateStateEnum", default: 0, conformance: "M", access: "R V" }),
    Attribute({
        name: "UpdateStateProgress", id: 0x3, type: "uint8",
        default: null, constraint: "0 to 100", conformance: "M", access: "R V", quality: "X"
    }),

    Event(
        { name: "StateTransition", id: 0x0, conformance: "M", access: "V", priority: "info" },
        Field({ name: "PreviousState", id: 0x0, type: "UpdateStateEnum", default: 0, conformance: "M" }),
        Field({ name: "NewState", id: 0x1, type: "UpdateStateEnum", conformance: "M" }),
        Field({ name: "Reason", id: 0x2, type: "ChangeReasonEnum", conformance: "M" }),
        Field({ name: "TargetSoftwareVersion", id: 0x3, type: "uint32", default: null, conformance: "M", quality: "X" })
    ),

    Event(
        { name: "VersionApplied", id: 0x1, conformance: "M", access: "V", priority: "critical" },
        Field({ name: "SoftwareVersion", id: 0x0, type: "uint32", conformance: "M" }),
        Field({ name: "ProductId", id: 0x1, type: "uint16", conformance: "M" })
    ),

    Event(
        { name: "DownloadError", id: 0x2, conformance: "M", access: "V", priority: "info" },
        Field({ name: "SoftwareVersion", id: 0x0, type: "uint32", conformance: "M" }),
        Field({ name: "BytesDownloaded", id: 0x1, type: "uint64", conformance: "M" }),
        Field({
            name: "ProgressPercent", id: 0x2, type: "uint8",
            default: null, constraint: "0 to 100", conformance: "M", quality: "X"
        }),
        Field({ name: "PlatformCode", id: 0x3, type: "int64", default: null, conformance: "M", quality: "X" })
    ),

    Command(
        {
            name: "AnnounceOtaProvider", id: 0x0,
            conformance: "O", access: "A", direction: "request", response: "status"
        },
        Field({ name: "ProviderNodeId", id: 0x0, type: "node-id", conformance: "M", access: "F" }),
        Field({ name: "VendorId", id: 0x1, type: "vendor-id", conformance: "M", access: "F" }),
        Field({ name: "AnnouncementReason", id: 0x2, type: "AnnouncementReasonEnum", conformance: "M", access: "F" }),
        Field({ name: "MetadataForNode", id: 0x3, type: "octstr", constraint: "max 512", conformance: "O", access: "F" }),
        Field({ name: "Endpoint", id: 0x4, type: "endpoint-no", conformance: "M", access: "F" }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    ),

    Datatype(
        { name: "AnnouncementReasonEnum", type: "enum8" },
        Field({ name: "SimpleAnnouncement", id: 0x0, conformance: "M" }),
        Field({ name: "UpdateAvailable", id: 0x1, conformance: "M" }),
        Field({ name: "UrgentUpdateAvailable", id: 0x2, conformance: "M" })
    ),

    Datatype(
        { name: "UpdateStateEnum", type: "enum8" },
        Field({ name: "Unknown", id: 0x0, conformance: "M" }),
        Field({ name: "Idle", id: 0x1, conformance: "M" }),
        Field({ name: "Querying", id: 0x2, conformance: "M" }),
        Field({ name: "DelayedOnQuery", id: 0x3, conformance: "M" }),
        Field({ name: "Downloading", id: 0x4, conformance: "M" }),
        Field({ name: "Applying", id: 0x5, conformance: "M" }),
        Field({ name: "DelayedOnApply", id: 0x6, conformance: "M" }),
        Field({ name: "RollingBack", id: 0x7, conformance: "M" }),
        Field({ name: "DelayedOnUserConsent", id: 0x8, conformance: "M" })
    ),

    Datatype(
        { name: "ChangeReasonEnum", type: "enum8" },
        Field({ name: "Unknown", id: 0x0, conformance: "M" }),
        Field({ name: "Success", id: 0x1, conformance: "M" }),
        Field({ name: "Failure", id: 0x2, conformance: "M" }),
        Field({ name: "TimeOut", id: 0x3, conformance: "M" }),
        Field({ name: "DelayByProvider", id: 0x4, conformance: "O" })
    ),

    Datatype(
        { name: "ProviderLocation", type: "struct" },
        Field({ name: "ProviderNodeId", id: 0x1, type: "node-id", conformance: "M", access: "F" }),
        Field({ name: "Endpoint", id: 0x2, type: "endpoint-no", conformance: "M", access: "F" }),
        Field({ name: "FabricIndex", id: 0xfe, type: "FabricIndex" })
    )
);

MatterDefinition.children.push(OtaSoftwareUpdateRequestor);
