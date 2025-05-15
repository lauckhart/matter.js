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

export const ThreadNetworkDiagnostics = Cluster(
    { id: 0x35, name: "ThreadNetworkDiagnostics", quality: "K" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 3 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "PKTCNT", constraint: "0" }),
        Field({ name: "ERRCNT", constraint: "1" }),
        Field({ name: "MLECNT", constraint: "2" }),
        Field({ name: "MACCNT", constraint: "3" })
    ),

    Attribute({ id: 0x0, name: "Channel", type: "uint16", access: "R V", conformance: "M", quality: "X" }),
    Attribute({ id: 0x1, name: "RoutingRole", type: "RoutingRoleEnum", access: "R V", conformance: "M", quality: "X" }),
    Attribute({
        id: 0x2, name: "NetworkName", type: "string",
        access: "R V", conformance: "M", constraint: "max 16", quality: "X"
    }),
    Attribute({ id: 0x3, name: "PanId", type: "uint16", access: "R V", conformance: "M", quality: "X" }),
    Attribute({ id: 0x4, name: "ExtendedPanId", type: "uint64", access: "R V", conformance: "M", quality: "X" }),
    Attribute({ id: 0x5, name: "MeshLocalPrefix", type: "ipv6pre", access: "R V", conformance: "M", quality: "X" }),
    Attribute({ id: 0x6, name: "OverrunCount", type: "uint64", access: "R V", conformance: "ERRCNT", default: 0, quality: "C" }),
    Attribute(
        { id: 0x7, name: "NeighborTable", type: "list", access: "R V", conformance: "M", default: [] },
        Field({ name: "entry", type: "NeighborTableStruct" })
    ),
    Attribute(
        { id: 0x8, name: "RouteTable", type: "list", access: "R V", conformance: "M", default: [] },
        Field({ name: "entry", type: "RouteTableStruct" })
    ),
    Attribute({ id: 0x9, name: "PartitionId", type: "uint32", access: "R V", conformance: "M", quality: "X" }),
    Attribute({
        id: 0xa, name: "Weighting", type: "uint16",
        access: "R V", conformance: "M", constraint: "max 255", quality: "X"
    }),
    Attribute({
        id: 0xb, name: "DataVersion", type: "uint16",
        access: "R V", conformance: "M", constraint: "max 255", quality: "X"
    }),
    Attribute({
        id: 0xc, name: "StableDataVersion", type: "uint16",
        access: "R V", conformance: "M", constraint: "max 255", quality: "X"
    }),
    Attribute({
        id: 0xd, name: "LeaderRouterId", type: "uint8",
        access: "R V", conformance: "M", constraint: "max 62", quality: "X"
    }),
    Attribute({
        id: 0xe, name: "DetachedRoleCount", type: "uint16",
        access: "R V", conformance: "[MLECNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0xf, name: "ChildRoleCount", type: "uint16",
        access: "R V", conformance: "[MLECNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x10, name: "RouterRoleCount", type: "uint16",
        access: "R V", conformance: "[MLECNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x11, name: "LeaderRoleCount", type: "uint16",
        access: "R V", conformance: "[MLECNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x12, name: "AttachAttemptCount", type: "uint16",
        access: "R V", conformance: "[MLECNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x13, name: "PartitionIdChangeCount", type: "uint16",
        access: "R V", conformance: "[MLECNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x14, name: "BetterPartitionAttachAttemptCount", type: "uint16",
        access: "R V", conformance: "[MLECNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x15, name: "ParentChangeCount", type: "uint16",
        access: "R V", conformance: "[MLECNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x16, name: "TxTotalCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x17, name: "TxUnicastCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x18, name: "TxBroadcastCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x19, name: "TxAckRequestedCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x1a, name: "TxAckedCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x1b, name: "TxNoAckRequestedCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({ id: 0x1c, name: "TxDataCount", type: "uint32", access: "R V", conformance: "[MACCNT]", default: 0, quality: "C" }),
    Attribute({
        id: 0x1d, name: "TxDataPollCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x1e, name: "TxBeaconCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x1f, name: "TxBeaconRequestCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x20, name: "TxOtherCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x21, name: "TxRetryCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x22, name: "TxDirectMaxRetryExpiryCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x23, name: "TxIndirectMaxRetryExpiryCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x24, name: "TxErrCcaCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x25, name: "TxErrAbortCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x26, name: "TxErrBusyChannelCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x27, name: "RxTotalCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x28, name: "RxUnicastCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x29, name: "RxBroadcastCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({ id: 0x2a, name: "RxDataCount", type: "uint32", access: "R V", conformance: "[MACCNT]", default: 0, quality: "C" }),
    Attribute({
        id: 0x2b, name: "RxDataPollCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x2c, name: "RxBeaconCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x2d, name: "RxBeaconRequestCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x2e, name: "RxOtherCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x2f, name: "RxAddressFilteredCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x30, name: "RxDestAddrFilteredCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x31, name: "RxDuplicatedCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x32, name: "RxErrNoFrameCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x33, name: "RxErrUnknownNeighborCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x34, name: "RxErrInvalidSrcAddrCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x35, name: "RxErrSecCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x36, name: "RxErrFcsCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({
        id: 0x37, name: "RxErrOtherCount", type: "uint32",
        access: "R V", conformance: "[MACCNT]", default: 0, quality: "C"
    }),
    Attribute({ id: 0x38, name: "ActiveTimestamp", type: "uint64", access: "R V", conformance: "O", default: 0, quality: "X" }),
    Attribute({ id: 0x39, name: "PendingTimestamp", type: "uint64", access: "R V", conformance: "O", default: 0, quality: "X" }),
    Attribute({ id: 0x3a, name: "Delay", type: "uint32", access: "R V", conformance: "O", default: 0, quality: "X" }),
    Attribute({ id: 0x3b, name: "SecurityPolicy", type: "SecurityPolicy", access: "R V", conformance: "M", quality: "X" }),
    Attribute({
        id: 0x3c, name: "ChannelPage0Mask", type: "octstr",
        access: "R V", conformance: "M", constraint: "4", quality: "X"
    }),
    Attribute({
        id: 0x3d, name: "OperationalDatasetComponents", type: "OperationalDatasetComponents",
        access: "R V", conformance: "M", quality: "X"
    }),

    Attribute(
        {
            id: 0x3e, name: "ActiveNetworkFaultsList", type: "list",
            access: "R V", conformance: "M", constraint: "max 4"
        },
        Field({ name: "entry", type: "NetworkFaultEnum" })
    ),

    Attribute({ id: 0x3f, name: "ExtAddress", type: "uint64", access: "R V", conformance: "P, M", quality: "X" }),
    Attribute({ id: 0x40, name: "Rloc16", type: "uint16", access: "R V", conformance: "P, M", quality: "X" }),
    Event(
        { id: 0x0, name: "ConnectionStatus", access: "V", conformance: "O", priority: "info" },
        Field({ id: 0x0, name: "ConnectionStatus", type: "ConnectionStatusEnum", conformance: "M" })
    ),

    Event(
        { id: 0x1, name: "NetworkFaultChange", access: "V", conformance: "O", priority: "info" },
        Field(
            { id: 0x0, name: "Current", type: "list", conformance: "M", constraint: "max 4" },
            Field({ name: "entry", type: "NetworkFaultEnum" })
        ),
        Field(
            { id: 0x1, name: "Previous", type: "list", conformance: "M", constraint: "max 4" },
            Field({ name: "entry", type: "NetworkFaultEnum" })
        )
    ),

    Command({ id: 0x0, name: "ResetCounts", access: "M", conformance: "ERRCNT", direction: "request", response: "status" }),

    Datatype(
        { name: "NetworkFaultEnum", type: "enum8" },
        Field({ id: 0x0, name: "Unspecified", conformance: "M" }),
        Field({ id: 0x1, name: "LinkDown", conformance: "M" }),
        Field({ id: 0x2, name: "HardwareFailure", conformance: "M" }),
        Field({ id: 0x3, name: "NetworkJammed", conformance: "M" })
    ),

    Datatype(
        { name: "ConnectionStatusEnum", type: "enum8" },
        Field({ id: 0x0, name: "Connected", conformance: "M" }),
        Field({ id: 0x1, name: "NotConnected", conformance: "M" })
    ),

    Datatype(
        { name: "RoutingRoleEnum", type: "enum8" },
        Field({ id: 0x0, name: "Unspecified", conformance: "M" }),
        Field({ id: 0x1, name: "Unassigned", conformance: "M" }),
        Field({ id: 0x2, name: "SleepyEndDevice", conformance: "M" }),
        Field({ id: 0x3, name: "EndDevice", conformance: "M" }),
        Field({ id: 0x4, name: "Reed", conformance: "M" }),
        Field({ id: 0x5, name: "Router", conformance: "M" }),
        Field({ id: 0x6, name: "Leader", conformance: "M" })
    ),

    Datatype(
        { name: "NeighborTableStruct", type: "struct" },
        Field({ id: 0x0, name: "ExtAddress", type: "uint64", conformance: "M" }),
        Field({ id: 0x1, name: "Age", type: "uint32", conformance: "M" }),
        Field({ id: 0x2, name: "Rloc16", type: "uint16", conformance: "M" }),
        Field({ id: 0x3, name: "LinkFrameCounter", type: "uint32", conformance: "M" }),
        Field({ id: 0x4, name: "MleFrameCounter", type: "uint32", conformance: "M" }),
        Field({ id: 0x5, name: "Lqi", type: "uint8", conformance: "M", constraint: "0 to 255" }),
        Field({
            id: 0x6, name: "AverageRssi", type: "int8",
            conformance: "M", constraint: "-128 to 0", default: null, quality: "X"
        }),
        Field({
            id: 0x7, name: "LastRssi", type: "int8",
            conformance: "M", constraint: "-128 to 0", default: null, quality: "X"
        }),
        Field({ id: 0x8, name: "FrameErrorRate", type: "uint8", conformance: "M", constraint: "0 to 100", default: 0 }),
        Field({ id: 0x9, name: "MessageErrorRate", type: "uint8", conformance: "M", constraint: "0 to 100", default: 0 }),
        Field({ id: 0xa, name: "RxOnWhenIdle", type: "bool", conformance: "M" }),
        Field({ id: 0xb, name: "FullThreadDevice", type: "bool", conformance: "M" }),
        Field({ id: 0xc, name: "FullNetworkData", type: "bool", conformance: "M" }),
        Field({ id: 0xd, name: "IsChild", type: "bool", conformance: "M" })
    ),

    Datatype(
        { name: "RouteTableStruct", type: "struct" },
        Field({ id: 0x0, name: "ExtAddress", type: "uint64", conformance: "M" }),
        Field({ id: 0x1, name: "Rloc16", type: "uint16", conformance: "M" }),
        Field({ id: 0x2, name: "RouterId", type: "uint8", conformance: "M" }),
        Field({ id: 0x3, name: "NextHop", type: "uint8", conformance: "M" }),
        Field({ id: 0x4, name: "PathCost", type: "uint8", conformance: "M" }),
        Field({ id: 0x5, name: "LqiIn", type: "uint8", conformance: "M" }),
        Field({ id: 0x6, name: "LqiOut", type: "uint8", conformance: "M" }),
        Field({ id: 0x7, name: "Age", type: "uint8", conformance: "M" }),
        Field({ id: 0x8, name: "Allocated", type: "bool", conformance: "M" }),
        Field({ id: 0x9, name: "LinkEstablished", type: "bool", conformance: "M" })
    ),

    Datatype(
        { name: "SecurityPolicy", type: "struct" },
        Field({ id: 0x0, name: "RotationTime", type: "uint16", conformance: "M" }),
        Field({ id: 0x1, name: "Flags", type: "uint16", conformance: "M" })
    ),

    Datatype(
        { name: "OperationalDatasetComponents", type: "struct" },
        Field({ id: 0x0, name: "ActiveTimestampPresent", type: "bool", conformance: "M" }),
        Field({ id: 0x1, name: "PendingTimestampPresent", type: "bool", conformance: "M" }),
        Field({ id: 0x2, name: "MasterKeyPresent", type: "bool", conformance: "M" }),
        Field({ id: 0x3, name: "NetworkNamePresent", type: "bool", conformance: "M" }),
        Field({ id: 0x4, name: "ExtendedPanIdPresent", type: "bool", conformance: "M" }),
        Field({ id: 0x5, name: "MeshLocalPrefixPresent", type: "bool", conformance: "M" }),
        Field({ id: 0x6, name: "DelayPresent", type: "bool", conformance: "M" }),
        Field({ id: 0x7, name: "PanIdPresent", type: "bool", conformance: "M" }),
        Field({ id: 0x8, name: "ChannelPresent", type: "bool", conformance: "M" }),
        Field({ id: 0x9, name: "PskcPresent", type: "bool", conformance: "M" }),
        Field({ id: 0xa, name: "SecurityPolicyPresent", type: "bool", conformance: "M" }),
        Field({ id: 0xb, name: "ChannelMaskPresent", type: "bool", conformance: "M" })
    )
);

MatterDefinition.children.push(ThreadNetworkDiagnostics);
