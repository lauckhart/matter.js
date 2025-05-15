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

export const TimeSynchronization = Cluster(
    { id: 0x38, name: "TimeSynchronization" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 2 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "TZ", constraint: "0", longName: "TimeZone" }),
        Field({ name: "NTPC", constraint: "1", longName: "NtpClient" }),
        Field({ name: "NTPS", constraint: "2", longName: "NtpServer" }),
        Field({ name: "TSC", constraint: "3", longName: "TimeSyncClient" })
    ),

    Attribute(
        { id: 0x0, name: "UtcTime", type: "epoch-us", access: "R V", conformance: "M", default: null, quality: "X C" }
    ),
    Attribute({
        id: 0x1, name: "Granularity", type: "GranularityEnum",
        access: "R V", conformance: "M", constraint: "desc", default: 0
    }),
    Attribute({
        id: 0x2, name: "TimeSource", type: "TimeSourceEnum",
        access: "R V", conformance: "O", constraint: "desc", default: 0
    }),
    Attribute({
        id: 0x3, name: "TrustedTimeSource", type: "TrustedTimeSourceStruct",
        access: "R V", conformance: "TSC", default: null, quality: "X N"
    }),
    Attribute({
        id: 0x4, name: "DefaultNtp", type: "string",
        access: "R V", conformance: "NTPC", constraint: "max 128", default: null, quality: "X N"
    }),

    Attribute(
        {
            id: 0x5, name: "TimeZone", type: "list",
            access: "R V", constraint: "1 to 2",
            default: [ { type: "properties", properties: { offset: 0, validAt: 0 } } ], quality: "N"
        },
        Field({ name: "entry", type: "TimeZoneStruct" })
    ),

    Attribute(
        { id: 0x6, name: "DstOffset", type: "list", access: "R V", conformance: "TZ", default: [], quality: "N" },
        Field({ name: "entry", type: "DSTOffsetStruct" })
    ),
    Attribute({ id: 0x7, name: "LocalTime", type: "epoch-us", access: "R V", conformance: "TZ", default: null, quality: "X C" }),
    Attribute({
        id: 0x8, name: "TimeZoneDatabase", type: "TimeZoneDatabaseEnum",
        access: "R V", conformance: "TZ", default: 2, quality: "F"
    }),
    Attribute({ id: 0x9, name: "NtpServerAvailable", type: "bool", access: "R V", conformance: "NTPS", default: false }),
    Attribute({
        id: 0xa, name: "TimeZoneListMaxSize", type: "uint8",
        access: "R V", conformance: "TZ", constraint: "1 to 2", quality: "F"
    }),
    Attribute({
        id: 0xb, name: "DstOffsetListMaxSize", type: "uint8",
        access: "R V", conformance: "TZ", constraint: "min 1", quality: "F"
    }),
    Attribute({
        id: 0xc, name: "SupportsDnsResolve", type: "bool",
        access: "R V", conformance: "NTPC", default: false, quality: "F"
    }),
    Event({ id: 0x0, name: "DstTableEmpty", access: "V", conformance: "TZ", priority: "info" }),
    Event(
        { id: 0x1, name: "DstStatus", access: "V", conformance: "TZ", priority: "info" },
        Field({ id: 0x0, name: "DstOffsetActive", type: "bool", conformance: "M" })
    ),
    Event(
        { id: 0x2, name: "TimeZoneStatus", access: "V", conformance: "TZ", priority: "info" },
        Field({ id: 0x0, name: "Offset", type: "int32", conformance: "M", constraint: "-43200 to 50400" }),
        Field({ id: 0x1, name: "Name", type: "string", conformance: "O", constraint: "0 to 64" })
    ),
    Event({ id: 0x3, name: "TimeFailure", access: "V", conformance: "M", priority: "info" }),
    Event({ id: 0x4, name: "MissingTrustedTimeSource", access: "V", conformance: "TSC", priority: "info" }),

    Command(
        { id: 0x0, name: "SetUtcTime", access: "A", conformance: "M", direction: "request", response: "status" },
        Field({ id: 0x0, name: "UtcTime", type: "epoch-us", conformance: "M", default: 0 }),
        Field({ id: 0x1, name: "Granularity", type: "GranularityEnum", conformance: "M", default: 0 }),
        Field({ id: 0x2, name: "TimeSource", type: "TimeSourceEnum", conformance: "O", default: 0 })
    ),

    Command(
        {
            id: 0x1, name: "SetTrustedTimeSource",
            access: "F A", conformance: "TSC", direction: "request", response: "status"
        },
        Field({
            id: 0x0, name: "TrustedTimeSource", type: "FabricScopedTrustedTimeSourceStruct",
            access: "F", conformance: "M", quality: "X"
        }),
        Field({ id: 0xfe, name: "FabricIndex", type: "FabricIndex" })
    ),

    Command(
        {
            id: 0x2, name: "SetTimeZone",
            access: "M", conformance: "TZ", direction: "request", response: "SetTimeZoneResponse"
        },
        Field(
            { id: 0x0, name: "TimeZone", type: "list", conformance: "M", constraint: "1 to 2" },
            Field({ name: "entry", type: "TimeZoneStruct" })
        )
    ),

    Command(
        { id: 0x3, name: "SetTimeZoneResponse", conformance: "TZ", direction: "response" },
        Field({ id: 0x0, name: "DstOffsetsRequired", type: "bool", conformance: "M", default: true })
    ),

    Command(
        { id: 0x4, name: "SetDstOffset", access: "M", conformance: "TZ", direction: "request", response: "status" },
        Field(
            { id: 0x0, name: "DstOffset", type: "list", conformance: "M" },
            Field({ name: "entry", type: "DSTOffsetStruct" })
        )
    ),

    Command(
        { id: 0x5, name: "SetDefaultNtp", access: "A", conformance: "NTPC", direction: "request", response: "status" },
        Field({ id: 0x0, name: "DefaultNtp", type: "string", conformance: "M", constraint: "max 128", quality: "X" })
    ),

    Datatype(
        { name: "GranularityEnum", type: "enum8" },
        Field({ id: 0x0, name: "NoTimeGranularity", conformance: "M" }),
        Field({ id: 0x1, name: "MinutesGranularity", conformance: "M" }),
        Field({ id: 0x2, name: "SecondsGranularity", conformance: "M" }),
        Field({ id: 0x3, name: "MillisecondsGranularity", conformance: "M" }),
        Field({ id: 0x4, name: "MicrosecondsGranularity", conformance: "M" })
    ),

    Datatype(
        { name: "TimeSourceEnum", type: "enum8" },
        Field({ id: 0x0, name: "None", conformance: "M" }),
        Field({ id: 0x1, name: "Unknown", conformance: "M" }),
        Field({ id: 0x2, name: "Admin", conformance: "M" }),
        Field({ id: 0x3, name: "NodeTimeCluster", conformance: "M" }),
        Field({ id: 0x4, name: "NonMatterSntp", conformance: "M" }),
        Field({ id: 0x5, name: "NonMatterNtp", conformance: "M" }),
        Field({ id: 0x6, name: "MatterSntp", conformance: "M" }),
        Field({ id: 0x7, name: "MatterNtp", conformance: "M" }),
        Field({ id: 0x8, name: "MixedNtp", conformance: "M" }),
        Field({ id: 0x9, name: "NonMatterSntpnts", conformance: "M" }),
        Field({ id: 0xa, name: "NonMatterNtpnts", conformance: "M" }),
        Field({ id: 0xb, name: "MatterSntpnts", conformance: "M" }),
        Field({ id: 0xc, name: "MatterNtpnts", conformance: "M" }),
        Field({ id: 0xd, name: "MixedNtpnts", conformance: "M" }),
        Field({ id: 0xe, name: "CloudSource", conformance: "M" }),
        Field({ id: 0xf, name: "Ptp", conformance: "M" }),
        Field({ id: 0x10, name: "Gnss", conformance: "M" })
    ),

    Datatype(
        { name: "TimeZoneDatabaseEnum", type: "enum8" },
        Field({ id: 0x0, name: "Full", conformance: "M" }),
        Field({ id: 0x1, name: "Partial", conformance: "M" }),
        Field({ id: 0x2, name: "None", conformance: "M" })
    ),

    Datatype(
        { name: "TrustedTimeSourceStruct", type: "struct" },
        Field({ id: 0x0, name: "FabricIndex", type: "fabric-idx", conformance: "M" }),
        Field({ id: 0x1, name: "NodeId", type: "node-id", conformance: "M" }),
        Field({ id: 0x2, name: "Endpoint", type: "endpoint-no", conformance: "M" })
    ),

    Datatype(
        { name: "FabricScopedTrustedTimeSourceStruct", type: "struct" },
        Field({ id: 0x0, name: "NodeId", type: "node-id", conformance: "M" }),
        Field({ id: 0x1, name: "Endpoint", type: "endpoint-no", conformance: "M" })
    ),

    Datatype(
        { name: "TimeZoneStruct", type: "struct" },
        Field({ id: 0x0, name: "Offset", type: "int32", conformance: "M", constraint: "-43200 to 50400" }),
        Field({ id: 0x1, name: "ValidAt", type: "epoch-us", conformance: "M" }),
        Field({ id: 0x2, name: "Name", type: "string", conformance: "O", constraint: "0 to 64" })
    ),

    Datatype(
        { name: "DSTOffsetStruct", type: "struct" },
        Field({ id: 0x0, name: "Offset", type: "int32", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "ValidStarting", type: "epoch-us", conformance: "M" }),
        Field({ id: 0x2, name: "ValidUntil", type: "epoch-us", conformance: "M", quality: "X" })
    ),

    Datatype({ name: "StatusCodeEnum", type: "enum8" }, Field({ id: 0x2, name: "TimeNotAccepted", conformance: "M" }))
);

MatterDefinition.children.push(TimeSynchronization);
