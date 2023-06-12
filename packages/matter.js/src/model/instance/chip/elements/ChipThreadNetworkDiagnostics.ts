/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement, EventElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0035, name: "ThreadNetworkDiagnostics",
    description: "Thread Network Diagnostics",
    details: "The Thread Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that MAY be used by a Node to assist a user or Administrative Node in diagnosing potential problems",
    children: [
        AttributeElement({
            id: 0x0000, name: "Channel", base: "uint16",
            access: "R", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0001, name: "RoutingRole", base: "RoutingRole",
            access: "R", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0002, name: "NetworkName", base: "string",
            access: "R", conformance: "M", default: "", quality: "X"
        }),

        AttributeElement({
            id: 0x0003, name: "DiagPanId", base: "uint16",
            access: "R", conformance: "M", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0004, name: "DiagExtendedPanId", base: "uint64",
            access: "R", conformance: "M", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0005, name: "MeshLocalPrefix", base: "octstr",
            access: "R", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0006, name: "DiagOverrunCount", base: "uint64",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0007, name: "NeighborTable", base: "list",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "NeighborTable"
                })
            ]
        }),

        AttributeElement({
            id: 0x0008, name: "RouteTable", base: "list",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "RouteTable"
                })
            ]
        }),

        AttributeElement({
            id: 0x0009, name: "PartitionId", base: "uint32",
            access: "R", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x000a, name: "Weighting", base: "uint8",
            access: "R", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x000b, name: "DataVersion", base: "uint8",
            access: "R", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x000c, name: "StableDataVersion", base: "uint8",
            access: "R", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x000d, name: "LeaderRouterId", base: "uint8",
            access: "R", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x000e, name: "DetachedRoleCount", base: "uint16",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x000f, name: "ChildRoleCount", base: "uint16",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0010, name: "RouterRoleCount", base: "uint16",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0011, name: "LeaderRoleCount", base: "uint16",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0012, name: "AttachAttemptCount", base: "uint16",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0013, name: "PartitionIdChangeCount", base: "uint16",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0014, name: "BetterPartitionAttachAttemptCount", base: "uint16",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0015, name: "ParentChangeCount", base: "uint16",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0016, name: "TxTotalCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0017, name: "TxUnicastCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0018, name: "TxBroadcastCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0019, name: "TxAckRequestedCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x001a, name: "TxAckedCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x001b, name: "TxNoAckRequestedCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x001c, name: "TxDataCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x001d, name: "TxDataPollCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x001e, name: "TxBeaconCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x001f, name: "TxBeaconRequestCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0020, name: "TxOtherCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0021, name: "TxRetryCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0022, name: "TxDirectMaxRetryExpiryCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0023, name: "TxIndirectMaxRetryExpiryCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0024, name: "TxErrCcaCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0025, name: "TxErrAbortCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0026, name: "TxErrBusyChannelCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0027, name: "RxTotalCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0028, name: "RxUnicastCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0029, name: "RxBroadcastCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x002a, name: "RxDataCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x002b, name: "RxDataPollCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x002c, name: "RxBeaconCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x002d, name: "RxBeaconRequestCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x002e, name: "RxOtherCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x002f, name: "RxAddressFilteredCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0030, name: "RxDestaddrFilteredCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0031, name: "RxDuplicatedCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0032, name: "RxErrNoFrameCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0033, name: "RxErrUnknownNeighborCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0034, name: "RxErrInvalidSrcAddrCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0035, name: "RxErrSecCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0036, name: "RxErrFcsCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0037, name: "RxErrOtherCount", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0038, name: "ActiveTimestamp", base: "uint64",
            access: "R", conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0039, name: "PendingTimestamp", base: "uint64",
            access: "R", conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x003a, name: "Delay", base: "uint32",
            access: "R", conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x003b, name: "SecurityPolicy", base: "SecurityPolicy",
            access: "R", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x003c, name: "DiagChannelMask", base: "octstr",
            access: "R", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x003d, name: "OperationalDatasetComponents", base: "OperationalDatasetComponents",
            access: "R", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x003e, name: "ActiveThreadNetworkFaults", base: "list",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "NetworkFault"
                })
            ]
        }),

        CommandElement({
            id: 0x0000, name: "ResetCounts",
            access: "R", conformance: "O", direction: "request"
        }),

        EventElement({
            id: 0x0000, name: "ConnectionStatus",
            access: "R", conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "ConnectionStatus", base: "ConnectionStatusEnum",
                    access: "R", conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "NetworkFaultChange",
            access: "R", conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "Current", base: "NetworkFault",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Previous", base: "NetworkFault",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "NetworkFault", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "LinkDown",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "HardwareFailure",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "NetworkJammed",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "RoutingRole", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Unassigned",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "SleepyEndDevice",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "EndDevice",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Reed",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Router",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "Leader",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ConnectionStatusEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Connected",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "NotConnected",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "NeighborTable", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "ExtAddress", base: "uint64",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Age", base: "uint32",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Rloc16", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "LinkFrameCounter", base: "uint32",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "MleFrameCounter", base: "uint32",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Lqi", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "AverageRssi", base: "int8",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "LastRssi", base: "int8",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "FrameErrorRate", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "MessageErrorRate", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "RxOnWhenIdle", base: "bool",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "FullThreadDevice", base: "bool",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "FullNetworkData", base: "bool",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "IsChild", base: "bool",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "RouteTable", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "ExtAddress", base: "uint64",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Rloc16", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "RouterId", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "NextHop", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "PathCost", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "LqiIn", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "LqiOut", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Age", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Allocated", base: "bool",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "LinkEstablished", base: "bool",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "SecurityPolicy", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "RotationTime", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Flags", base: "uint16",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OperationalDatasetComponents", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "ActiveTimestampPresent", base: "bool",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "PendingTimestampPresent", base: "bool",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "MasterKeyPresent", base: "bool",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "NetworkNamePresent", base: "bool",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "ExtendedPanIdPresent", base: "bool",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "MeshLocalPrefixPresent", base: "bool",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "DelayPresent", base: "bool",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "PanIdPresent", base: "bool",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "ChannelPresent", base: "bool",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "PskcPresent", base: "bool",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "SecurityPolicyPresent", base: "bool",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "ChannelMaskPresent", base: "bool",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ThreadNetworkDiagnosticsFeature", base: "map32",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "PacketCounts",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ErrorCounts",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "MleCounts",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "MacCounts",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
