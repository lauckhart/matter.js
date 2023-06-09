/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement, EventElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0035, name: "ThreadNetworkDiagnostics",
    description: "Thread Network Diagnostics",
    details: "The Thread Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that MAY be used by a Node to assist a user or Administrative Node in diagnosing potential problems",
    children: [
        AttributeElement({
            id: 0x0000, name: "Channel", base: "Channel",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0001, name: "RoutingRole", base: "RoutingRole",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0002, name: "NetworkName", base: "NetworkName",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0003, name: "DiagPanId", base: "PanId",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0004, name: "DiagExtendedPanId", base: "ExtendedPanId",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0005, name: "MeshLocalPrefix", base: "MeshLocalPrefix",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0006, name: "DiagOverrunCount", base: "OverrunCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0007, name: "NeighborTable", base: "NeighborTable",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0008, name: "RouteTable", base: "RouteTable",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0009, name: "PartitionId", base: "PartitionId",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x000a, name: "Weighting", base: "Weighting",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x000b, name: "DataVersion", base: "DataVersion",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x000c, name: "StableDataVersion", base: "StableDataVersion",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x000d, name: "LeaderRouterId", base: "LeaderRouterId",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x000e, name: "DetachedRoleCount", base: "DetachedRoleCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x000f, name: "ChildRoleCount", base: "ChildRoleCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0010, name: "RouterRoleCount", base: "RouterRoleCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0011, name: "LeaderRoleCount", base: "LeaderRoleCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0012, name: "AttachAttemptCount", base: "AttachAttemptCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0013, name: "PartitionIdChangeCount", base: "PartitionIdChangeCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0014, name: "BetterPartitionAttachAttemptCount", base: "BetterPartitionAttachAttemptCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0015, name: "ParentChangeCount", base: "ParentChangeCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0016, name: "TxTotalCount", base: "TxTotalCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0017, name: "TxUnicastCount", base: "TxUnicastCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0018, name: "TxBroadcastCount", base: "TxBroadcastCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0019, name: "TxAckRequestedCount", base: "TxAckRequestedCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x001a, name: "TxAckedCount", base: "TxAckedCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x001b, name: "TxNoAckRequestedCount", base: "TxNoAckRequestedCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x001c, name: "TxDataCount", base: "TxDataCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x001d, name: "TxDataPollCount", base: "TxDataPollCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x001e, name: "TxBeaconCount", base: "TxBeaconCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x001f, name: "TxBeaconRequestCount", base: "TxBeaconRequestCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0020, name: "TxOtherCount", base: "TxOtherCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0021, name: "TxRetryCount", base: "TxRetryCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0022, name: "TxDirectMaxRetryExpiryCount", base: "TxDirectMaxRetryExpiryCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0023, name: "TxIndirectMaxRetryExpiryCount", base: "TxIndirectMaxRetryExpiryCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0024, name: "TxErrCcaCount", base: "TxErrCcaCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0025, name: "TxErrAbortCount", base: "TxErrAbortCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0026, name: "TxErrBusyChannelCount", base: "TxErrBusyChannelCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0027, name: "RxTotalCount", base: "RxTotalCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0028, name: "RxUnicastCount", base: "RxUnicastCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0029, name: "RxBroadcastCount", base: "RxBroadcastCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x002a, name: "RxDataCount", base: "RxDataCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x002b, name: "RxDataPollCount", base: "RxDataPollCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x002c, name: "RxBeaconCount", base: "RxBeaconCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x002d, name: "RxBeaconRequestCount", base: "RxBeaconRequestCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x002e, name: "RxOtherCount", base: "RxOtherCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x002f, name: "RxAddressFilteredCount", base: "RxAddressFilteredCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0030, name: "RxDestaddrFilteredCount", base: "RxDestAddrFilteredCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0031, name: "RxDuplicatedCount", base: "RxDuplicatedCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0032, name: "RxErrNoFrameCount", base: "RxErrNoFrameCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0033, name: "RxErrUnknownNeighborCount", base: "RxErrUnknownNeighborCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0034, name: "RxErrInvalidSrcAddrCount", base: "RxErrInvalidSrcAddrCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0035, name: "RxErrSecCount", base: "RxErrSecCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0036, name: "RxErrFcsCount", base: "RxErrFcsCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0037, name: "RxErrOtherCount", base: "RxErrOtherCount",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0038, name: "ActiveTimestamp", base: "ActiveTimestamp",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0039, name: "PendingTimestamp", base: "PendingTimestamp",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x003a, name: "Delay", base: "Delay",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x003b, name: "SecurityPolicy", base: "SecurityPolicy",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x003c, name: "DiagChannelMask", base: "ChannelPage0Mask",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x003d, name: "OperationalDatasetComponents", base: "OperationalDatasetComponents",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x003e, name: "ActiveThreadNetworkFaults", base: "ActiveNetworkFaultsList",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        CommandElement({
            id: 0x0000, name: "ResetCounts", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request"
        }),

        EventElement({
            id: 0x0000, name: "ConnectionStatus", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "ConnectionStatus", base: "ConnectionStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ConnectionStatus", base: "ConnectionStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "NetworkFaultChange", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "Current", base: "NetworkFault",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Current", base: "NetworkFault",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Previous", base: "NetworkFault",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Previous", base: "NetworkFault",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}));
