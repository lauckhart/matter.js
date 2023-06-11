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
            id: 0x0000, name: "channel", base: "uint16",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0001, name: "routingRole", base: "RoutingRole",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0002, name: "networkName", base: "string",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0003, name: "diagPanId", base: "uint16",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }, value: "0x0000"
        }),

        AttributeElement({
            id: 0x0004, name: "diagExtendedPanId", base: "uint64",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }, value: "0x0000000000000000"
        }),

        AttributeElement({
            id: 0x0005, name: "meshLocalPrefix", base: "octstr",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0006, name: "diagOverrunCount", base: "uint64",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000000000000000"
        }),

        AttributeElement({
            id: 0x0007, name: "neighborTable", base: "list",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0008, name: "routeTable", base: "list",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0009, name: "partitionId", base: "uint32",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x000a, name: "weighting", base: "uint8",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x000b, name: "dataVersion", base: "uint8",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x000c, name: "stableDataVersion", base: "uint8",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x000d, name: "leaderRouterId", base: "uint8",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x000e, name: "detachedRoleCount", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x000f, name: "childRoleCount", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0010, name: "routerRoleCount", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0011, name: "leaderRoleCount", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0012, name: "attachAttemptCount", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0013, name: "partitionIdChangeCount", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0014, name: "betterPartitionAttachAttemptCount", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0015, name: "parentChangeCount", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0016, name: "txTotalCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0017, name: "txUnicastCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0018, name: "txBroadcastCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0019, name: "txAckRequestedCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x001a, name: "txAckedCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x001b, name: "txNoAckRequestedCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x001c, name: "txDataCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x001d, name: "txDataPollCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x001e, name: "txBeaconCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x001f, name: "txBeaconRequestCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0020, name: "txOtherCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0021, name: "txRetryCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0022, name: "txDirectMaxRetryExpiryCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0023, name: "txIndirectMaxRetryExpiryCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0024, name: "txErrCcaCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0025, name: "txErrAbortCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0026, name: "txErrBusyChannelCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0027, name: "rxTotalCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0028, name: "rxUnicastCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0029, name: "rxBroadcastCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x002a, name: "rxDataCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x002b, name: "rxDataPollCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x002c, name: "rxBeaconCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x002d, name: "rxBeaconRequestCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x002e, name: "rxOtherCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x002f, name: "rxAddressFilteredCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0030, name: "rxDestaddrFilteredCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0031, name: "rxDuplicatedCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0032, name: "rxErrNoFrameCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0033, name: "rxErrUnknownNeighborCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0034, name: "rxErrInvalidSrcAddrCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0035, name: "rxErrSecCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0036, name: "rxErrFcsCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0037, name: "rxErrOtherCount", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0038, name: "activeTimestamp", base: "uint64",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }, value: "0x0000000000000000"
        }),

        AttributeElement({
            id: 0x0039, name: "pendingTimestamp", base: "uint64",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }, value: "0x0000000000000000"
        }),

        AttributeElement({
            id: 0x003a, name: "delay", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }, value: "0x0000"
        }),

        AttributeElement({
            id: 0x003b, name: "securityPolicy", base: "SecurityPolicy",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x003c, name: "diagChannelMask", base: "octstr",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x003d, name: "operationalDatasetComponents", base: "OperationalDatasetComponents",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x003e, name: "activeThreadNetworkFaults", base: "list",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        CommandElement({
            id: 0x0000, name: "ResetCounts",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request"
        }),

        EventElement({
            id: 0x0000, name: "ConnectionStatus",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "connectionStatus", base: "ConnectionStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "connectionStatus", base: "ConnectionStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "NetworkFaultChange",
            access: { rw: "R" }, conformance: [ "O" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "current", base: "NetworkFault",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "current", base: "NetworkFault",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "previous", base: "NetworkFault",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "previous", base: "NetworkFault",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "NetworkFault", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "linkDown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "linkDown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "hardwareFailure",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "hardwareFailure",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "networkJammed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "networkJammed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                })
            ]
        }),

        DatatypeElement({
            name: "RoutingRole", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "unassigned",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "unassigned",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "sleepyEndDevice",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "sleepyEndDevice",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "endDevice",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "endDevice",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "reed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "reed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "router",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                }),

                DatatypeElement({
                    name: "router",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                }),

                DatatypeElement({
                    name: "leader",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x06"
                }),

                DatatypeElement({
                    name: "leader",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x06"
                })
            ]
        }),

        DatatypeElement({
            name: "ConnectionStatusEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "connected",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "connected",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "notConnected",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "notConnected",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                })
            ]
        }),

        DatatypeElement({
            name: "NeighborTable", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "extAddress", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "extAddress", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "age", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "age", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "rloc16", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "rloc16", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "linkFrameCounter", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "linkFrameCounter", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "mleFrameCounter", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "mleFrameCounter", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "lqi", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "lqi", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "averageRssi", base: "int8",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "averageRssi", base: "int8",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "lastRssi", base: "int8",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "lastRssi", base: "int8",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "frameErrorRate", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "frameErrorRate", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "messageErrorRate", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "messageErrorRate", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "rxOnWhenIdle", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "rxOnWhenIdle", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "fullThreadDevice", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "fullThreadDevice", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "fullNetworkData", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "fullNetworkData", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "isChild", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "isChild", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "RouteTable", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "extAddress", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "extAddress", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "rloc16", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "rloc16", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "routerId", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "routerId", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "nextHop", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "nextHop", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "pathCost", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "pathCost", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "lqiIn", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "lqiIn", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "lqiOut", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "lqiOut", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "age", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "age", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "allocated", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "allocated", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "linkEstablished", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "linkEstablished", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "SecurityPolicy", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "rotationTime", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "rotationTime", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "flags", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "flags", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "OperationalDatasetComponents", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "activeTimestampPresent", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "activeTimestampPresent", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "pendingTimestampPresent", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "pendingTimestampPresent", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "masterKeyPresent", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "masterKeyPresent", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "networkNamePresent", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "networkNamePresent", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "extendedPanIdPresent", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "extendedPanIdPresent", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "meshLocalPrefixPresent", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "meshLocalPrefixPresent", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "delayPresent", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "delayPresent", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "panIdPresent", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "panIdPresent", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "channelPresent", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "channelPresent", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "pskcPresent", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "pskcPresent", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "securityPolicyPresent", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "securityPolicyPresent", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "channelMaskPresent", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "channelMaskPresent", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "ThreadNetworkDiagnosticsFeature", base: "map32",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "packetCounts",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "packetCounts",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "errorCounts",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "errorCounts",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "mleCounts",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4"
                }),

                DatatypeElement({
                    name: "mleCounts",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x4"
                }),

                DatatypeElement({
                    name: "macCounts",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x8"
                }),

                DatatypeElement({
                    name: "macCounts",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x8"
                })
            ]
        })
    ]
}));
