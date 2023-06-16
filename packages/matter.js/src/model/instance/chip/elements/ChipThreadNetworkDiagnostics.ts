/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement, EventElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0035, name: "ThreadNetworkDiagnostics",
    description: "Thread Network Diagnostics",
    details: "The Thread Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics that MAY be used by a Node to assist a user or Administrative Node in diagnosing potential problems",
    children: [
        AttributeElement({
            id: 0x0000, name: "Channel", type: "uint16",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0001, name: "RoutingRole", type: "RoutingRole",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0002, name: "NetworkName", type: "string",
            conformance: "M", default: "", quality: "X"
        }),

        AttributeElement({
            id: 0x0003, name: "DiagPanId", type: "uint16",
            conformance: "M", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0004, name: "DiagExtendedPanId", type: "uint64",
            conformance: "M", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0005, name: "MeshLocalPrefix", type: "octstr",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0006, name: "DiagOverrunCount", type: "uint64",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0007, name: "NeighborTable", type: "list",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", type: "NeighborTable"
                })
            ]
        }),

        AttributeElement({
            id: 0x0008, name: "RouteTable", type: "list",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", type: "RouteTable"
                })
            ]
        }),

        AttributeElement({
            id: 0x0009, name: "PartitionId", type: "uint32",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x000a, name: "Weighting", type: "uint8",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x000b, name: "DataVersion", type: "uint8",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x000c, name: "StableDataVersion", type: "uint8",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x000d, name: "LeaderRouterId", type: "uint8",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x000e, name: "DetachedRoleCount", type: "uint16",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x000f, name: "ChildRoleCount", type: "uint16",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0010, name: "RouterRoleCount", type: "uint16",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0011, name: "LeaderRoleCount", type: "uint16",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0012, name: "AttachAttemptCount", type: "uint16",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0013, name: "PartitionIdChangeCount", type: "uint16",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0014, name: "BetterPartitionAttachAttemptCount", type: "uint16",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0015, name: "ParentChangeCount", type: "uint16",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0016, name: "TxTotalCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0017, name: "TxUnicastCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0018, name: "TxBroadcastCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0019, name: "TxAckRequestedCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x001a, name: "TxAckedCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x001b, name: "TxNoAckRequestedCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x001c, name: "TxDataCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x001d, name: "TxDataPollCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x001e, name: "TxBeaconCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x001f, name: "TxBeaconRequestCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0020, name: "TxOtherCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0021, name: "TxRetryCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0022, name: "TxDirectMaxRetryExpiryCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0023, name: "TxIndirectMaxRetryExpiryCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0024, name: "TxErrCcaCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0025, name: "TxErrAbortCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0026, name: "TxErrBusyChannelCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0027, name: "RxTotalCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0028, name: "RxUnicastCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0029, name: "RxBroadcastCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x002a, name: "RxDataCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x002b, name: "RxDataPollCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x002c, name: "RxBeaconCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x002d, name: "RxBeaconRequestCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x002e, name: "RxOtherCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x002f, name: "RxAddressFilteredCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0030, name: "RxDestaddrFilteredCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0031, name: "RxDuplicatedCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0032, name: "RxErrNoFrameCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0033, name: "RxErrUnknownNeighborCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0034, name: "RxErrInvalidSrcAddrCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0035, name: "RxErrSecCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0036, name: "RxErrFcsCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0037, name: "RxErrOtherCount", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0038, name: "ActiveTimestamp", type: "uint64",
            conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0039, name: "PendingTimestamp", type: "uint64",
            conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x003a, name: "Delay", type: "uint32",
            conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x003b, name: "SecurityPolicy", type: "SecurityPolicy",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x003c, name: "DiagChannelMask", type: "octstr",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x003d, name: "OperationalDatasetComponents", type: "OperationalDatasetComponents",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x003e, name: "ActiveThreadNetworkFaults", type: "list",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", type: "NetworkFault"
                })
            ]
        }),

        CommandElement({
            id: 0x0000, name: "ResetCounts",
            conformance: "O", direction: "request"
        }),

        EventElement({
            id: 0x0000, name: "ConnectionStatus",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "ConnectionStatus", type: "ConnectionStatusEnum",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "NetworkFaultChange",
            conformance: "O", priority: "info",
            children: [
                DatatypeElement({
                    name: "Current", type: "NetworkFault",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Previous", type: "NetworkFault",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "NetworkFault", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "LinkDown",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "HardwareFailure",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "NetworkJammed",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "RoutingRole", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Unassigned",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "SleepyEndDevice",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "EndDevice",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Reed",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Router",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "Leader",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ConnectionStatusEnum", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Connected",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "NotConnected",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "NeighborTable", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "ExtAddress", type: "uint64",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Age", type: "uint32",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Rloc16", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "LinkFrameCounter", type: "uint32",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "MleFrameCounter", type: "uint32",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Lqi", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "AverageRssi", type: "int8",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "LastRssi", type: "int8",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "FrameErrorRate", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "MessageErrorRate", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "RxOnWhenIdle", type: "bool",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "FullThreadDevice", type: "bool",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "FullNetworkData", type: "bool",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "IsChild", type: "bool",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "RouteTable", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "ExtAddress", type: "uint64",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Rloc16", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "RouterId", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "NextHop", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "PathCost", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "LqiIn", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "LqiOut", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Age", type: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Allocated", type: "bool",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "LinkEstablished", type: "bool",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "SecurityPolicy", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "RotationTime", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Flags", type: "uint16",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "OperationalDatasetComponents", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "ActiveTimestampPresent", type: "bool",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "PendingTimestampPresent", type: "bool",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "MasterKeyPresent", type: "bool",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "NetworkNamePresent", type: "bool",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ExtendedPanIdPresent", type: "bool",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "MeshLocalPrefixPresent", type: "bool",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "DelayPresent", type: "bool",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "PanIdPresent", type: "bool",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ChannelPresent", type: "bool",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "PskcPresent", type: "bool",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "SecurityPolicyPresent", type: "bool",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ChannelMaskPresent", type: "bool",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ThreadNetworkDiagnosticsFeature", type: "map32",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "PacketCounts",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ErrorCounts",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "MleCounts",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "MacCounts",
                    conformance: "M"
                })
            ]
        })
    ]
}));
