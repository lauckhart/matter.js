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
    { id: 0x2a, name: "OtaSoftwareUpdateRequestor" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),

    Attribute(
        {
            id: 0x0, name: "DefaultOtaProviders", type: "list",
            access: "RW F VA", conformance: "M", constraint: "all", default: [], quality: "N"
        },
        Field({ name: "entry", type: "ProviderLocation" })
    ),

    Attribute({ id: 0x1, name: "UpdatePossible", type: "bool", access: "R V", conformance: "M", default: true }),
    Attribute({ id: 0x2, name: "UpdateState", type: "UpdateStateEnum", access: "R V", conformance: "M", default: 0 }),
    Attribute({
        id: 0x3, name: "UpdateStateProgress", type: "uint8",
        access: "R V", conformance: "M", constraint: "0 to 100", default: null, quality: "X"
    }),

    Event(
        { id: 0x0, name: "StateTransition", access: "V", conformance: "M", priority: "info" },
        Field({ id: 0x0, name: "PreviousState", type: "UpdateStateEnum", conformance: "M", default: 0 }),
        Field({ id: 0x1, name: "NewState", type: "UpdateStateEnum", conformance: "M" }),
        Field({ id: 0x2, name: "Reason", type: "ChangeReasonEnum", conformance: "M" }),
        Field({ id: 0x3, name: "TargetSoftwareVersion", type: "uint32", conformance: "M", default: null, quality: "X" })
    ),

    Event(
        { id: 0x1, name: "VersionApplied", access: "V", conformance: "M", priority: "critical" },
        Field({ id: 0x0, name: "SoftwareVersion", type: "uint32", conformance: "M" }),
        Field({ id: 0x1, name: "ProductId", type: "uint16", conformance: "M" })
    ),

    Event(
        { id: 0x2, name: "DownloadError", access: "V", conformance: "M", priority: "info" },
        Field({ id: 0x0, name: "SoftwareVersion", type: "uint32", conformance: "M" }),
        Field({ id: 0x1, name: "BytesDownloaded", type: "uint64", conformance: "M" }),
        Field({
            id: 0x2, name: "ProgressPercent", type: "uint8",
            conformance: "M", constraint: "0 to 100", default: null, quality: "X"
        }),
        Field({ id: 0x3, name: "PlatformCode", type: "int64", conformance: "M", default: null, quality: "X" })
    ),

    Command(
        {
            id: 0x0, name: "AnnounceOtaProvider",
            access: "A", conformance: "O", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "ProviderNodeId", type: "node-id", access: "F", conformance: "M" }),
        Field({ id: 0x1, name: "VendorId", type: "vendor-id", access: "F", conformance: "M" }),
        Field({ id: 0x2, name: "AnnouncementReason", type: "AnnouncementReasonEnum", access: "F", conformance: "M" }),
        Field({ id: 0x3, name: "MetadataForNode", type: "octstr", access: "F", conformance: "O", constraint: "max 512" }),
        Field({ id: 0x4, name: "Endpoint", type: "endpoint-no", access: "F", conformance: "M" }),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    ),

    Datatype(
        { name: "AnnouncementReasonEnum", type: "enum8" },
        Field({ id: 0x0, name: "SimpleAnnouncement", conformance: "M" }),
        Field({ id: 0x1, name: "UpdateAvailable", conformance: "M" }),
        Field({ id: 0x2, name: "UrgentUpdateAvailable", conformance: "M" })
    ),

    Datatype(
        { name: "UpdateStateEnum", type: "enum8" },
        Field({ id: 0x0, name: "Unknown", conformance: "M" }),
        Field({ id: 0x1, name: "Idle", conformance: "M" }),
        Field({ id: 0x2, name: "Querying", conformance: "M" }),
        Field({ id: 0x3, name: "DelayedOnQuery", conformance: "M" }),
        Field({ id: 0x4, name: "Downloading", conformance: "M" }),
        Field({ id: 0x5, name: "Applying", conformance: "M" }),
        Field({ id: 0x6, name: "DelayedOnApply", conformance: "M" }),
        Field({ id: 0x7, name: "RollingBack", conformance: "M" }),
        Field({ id: 0x8, name: "DelayedOnUserConsent", conformance: "M" })
    ),

    Datatype(
        { name: "ChangeReasonEnum", type: "enum8" },
        Field({ id: 0x0, name: "Unknown", conformance: "M" }),
        Field({ id: 0x1, name: "Success", conformance: "M" }),
        Field({ id: 0x2, name: "Failure", conformance: "M" }),
        Field({ id: 0x3, name: "TimeOut", conformance: "M" }),
        Field({ id: 0x4, name: "DelayByProvider", conformance: "O" })
    ),

    Datatype(
        { name: "ProviderLocation", type: "struct" },
        Field({ id: 0x1, name: "ProviderNodeId", type: "node-id", access: "F", conformance: "M" }),
        Field({ id: 0x2, name: "Endpoint", type: "endpoint-no", access: "F", conformance: "M" }),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    )
);

MatterDefinition.children.push(OtaSoftwareUpdateRequestor);
