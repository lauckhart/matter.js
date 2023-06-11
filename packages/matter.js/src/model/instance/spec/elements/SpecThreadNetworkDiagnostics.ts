/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0035, name: "ThreadNetworkDiagnostics",
    classification: "node",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, value: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", value: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "Channel", base: "uint16",
            access: "R V", conformance: "M", value: "", quality: "X",
            details: "The Channel attribute SHALL indicate the 802.15.4 channel number configured on the Node’s Thread interface (that is, the Active Operational Dataset’s current Channel value). A value of null SHALL indicate that the Thread interface is not currently configured or operational.",
            xref: { section: "11.13.6.1", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "RoutingRole", base: "RoutingRoleEnum",
            access: "R V", conformance: "M", value: "", quality: "X",
            details: "The RoutingRole attribute SHALL indicate the role that this Node has within the routing of messages through the Thread network, as defined by RoutingRoleEnum. The potential roles are defined in the following table. A value of null SHALL indicate that the Thread interface is not currently configured or operational.",
            xref: { section: "11.13.6.2", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "NetworkName", base: "String",
            access: "R V", conformance: "M", constraint: "max 16", value: "", quality: "X",
            details: "The NetworkName attribute SHALL indicate a human-readable (displayable) name for the Thread network that the Node has been configured to join to. A value of null SHALL indicate that the Thread interface is not currently configured or operational.",
            xref: { section: "11.13.6.3", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "PanId", base: "uint16",
            access: "R V", conformance: "M", value: "", quality: "X",
            details: "The PanId attribute SHALL indicate the 16-bit identifier of the Node on the Thread network. A value of null SHALL indicate that the Thread interface is not currently configured or operational.",
            xref: { section: "11.13.6.4", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0004, name: "ExtendedPanId", base: "uint64",
            access: "R V", conformance: "M", value: "", quality: "X",
            details: "The ExtendedPanId attribute SHALL indicate the unique 64-bit identifier of the Node on the Thread network. A value of null SHALL indicate that the Thread interface is not currently configured or operational.",
            xref: { section: "11.13.6.5", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0005, name: "MeshLocalPrefix", base: "ipv6pre",
            access: "R V", conformance: "M", value: "", quality: "X",
            details: "The MeshLocalPrefix attribute SHALL indicate the mesh-local IPv6 prefix for the Thread network that the Node has been configured to join to. A value of null SHALL indicate that the Thread interface is not currently configured or operational.",
            xref: { section: "11.13.6.6", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0006, name: "OverrunCount", base: "uint64",
            access: "R V", conformance: "ERRCNT", value: "0", quality: "C",
            details: "The OverrunCount attribute SHALL indicate the number of packets dropped either at ingress or egress, due to lack of buffer memory to retain all packets on the ethernet network interface. The OverrunCount attribute SHALL be reset to 0 upon a reboot of the Node.",
            xref: { section: "11.13.6.7", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0007, name: "NeighborTable", base: "list[NeighborTableStruct]",
            access: "R V", conformance: "M", value: "[]",
            details: "The NeighborTable attribute SHALL indicate the current list of Nodes that comprise the neighbor table on the Node.",
            xref: { section: "11.13.6.8", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0008, name: "RouteTable", base: "list[RouteTableStruct]",
            access: "R V", conformance: "M", value: "[]",
            details: "The RouteTable attribute SHALL indicate the current list of router capable Nodes for which routes have been established.",
            xref: { section: "11.13.6.9", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0009, name: "PartitionId", base: "uint32",
            access: "R V", conformance: "M", value: "", quality: "X",
            details: "The PartitionId attribute SHALL indicate the Thread Leader Partition Id for the Thread network to which the Node is joined. This attribute SHALL be null if not attached to a Thread network.",
            xref: { section: "11.13.6.10", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000a, name: "Weighting", base: "uint8",
            access: "R V", conformance: "M", value: "", quality: "X",
            details: "The Weighting attribute SHALL indicate the Thread Leader Weight used when operating in the Leader role. This attribute SHALL be null if not attached to a Thread network.",
            xref: { section: "11.13.6.11", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000b, name: "DataVersion", base: "uint8",
            access: "R V", conformance: "M", value: "", quality: "X",
            details: "The DataVersion attribute SHALL indicate the full Network Data Version the Node currently uses. This attribute SHALL be null if not attached to a Thread network.",
            xref: { section: "11.13.6.12", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000c, name: "StableDataVersion", base: "uint8",
            access: "R V", conformance: "M", value: "", quality: "X",
            details: "The StableDataVersion attribute SHALL indicate the Network Data Version for the stable subset of",
            xref: { section: "11.13.6.13", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000d, name: "LeaderRouterId", base: "uint8",
            access: "R V", conformance: "M", value: "", quality: "X",
            details: "The LeaderRouterId attribute SHALL indicate the 8-bit LeaderRouterId the Node shall attempt to utilize upon becoming a router or leader on the Thread network. This attribute SHALL be null if not attached to a Thread network.",
            xref: { section: "11.13.6.14", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000e, name: "DetachedRoleCount", base: "uint16",
            access: "R V", conformance: "[MLECNT]", value: "0", quality: "C",
            details: "The DetachedRoleCount attribute SHALL indicate the number of times the Node entered the OT_DEVICE_ROLE_DETACHED role as specified within the Thread specification. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.15", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000f, name: "ChildRoleCount", base: "uint16",
            access: "R V", conformance: "[MLECNT]", value: "0", quality: "C",
            details: "The ChildRoleCount attribute SHALL indicate the number of times the Node entered the OT_DEVICE_ROLE_CHILD role as specified within the Thread specification. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.16", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0010, name: "RouterRoleCount", base: "uint16",
            access: "R V", conformance: "[MLECNT]", value: "0", quality: "C",
            details: "The RouterRoleCount attribute SHALL indicate the number of times the Node entered the OT_DEVICE_ROLE_ROUTER role as specified within the Thread specification. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.17", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0011, name: "LeaderRoleCount", base: "uint16",
            access: "R V", conformance: "[MLECNT]", value: "0", quality: "C",
            details: "The LeaderRoleCount attribute SHALL indicate the number of times the Node entered the OT_DEVICE_ROLE_LEADER role as specified within the Thread specification. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.18", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0012, name: "AttachAttemptCount", base: "uint16",
            access: "R V", conformance: "[MLECNT]", value: "0", quality: "C",
            details: "The AttachAttemptCount attribute SHALL indicate the number of attempts that have been made to attach to a Thread network while the Node was detached from all Thread networks. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.19", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0013, name: "PartitionIdChangeCount", base: "uint16",
            access: "R V", conformance: "[MLECNT]", value: "0", quality: "C",
            details: "The PartitionIdChangeCount attribute SHALL indicate the number of times that the Thread network that the Node is connected to has changed its Partition ID. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.20", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0014, name: "BetterPartitionAttachAttemptCount", base: "uint16",
            access: "R V", conformance: "[MLECNT]", value: "0", quality: "C",
            details: "The BetterPartitionAttachAttemptCount attribute SHALL indicate the number of times a Node has attempted to attach to a different Thread partition that it has determined is better than the partition it is currently attached to. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.21", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0015, name: "ParentChangeCount", base: "uint16",
            access: "R V", conformance: "[MLECNT]", value: "0", quality: "C",
            details: "The ParentChangeCount attribute SHALL indicate the number of times a Node has changed its parent. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.22", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0016, name: "TxTotalCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The TxTotalCount attribute SHALL indicate the total number of unique MAC frame transmission requests. The TxTotalCount attribute SHALL only be incremented by 1 for each MAC transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.23", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0017, name: "TxUnicastCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The TxUnicastCount attribute SHALL indicate the total number of unique unicast MAC frame transmission requests. The TxUnicastCount attribute SHALL only be incremented by 1 for each unicast MAC transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.24", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0018, name: "TxBroadcastCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The TxBroadcastCount attribute SHALL indicate the total number of unique broadcast MAC frame transmission requests. The TxBroadcastCount attribute SHALL only be incremented by 1 for each broadcast MAC transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.25", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0019, name: "TxAckRequestedCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The TxAckRequestedCount attribute SHALL indicate the total number of unique MAC frame transmission requests with requested acknowledgment. The TxAckRequestedCount attribute SHALL only be incremented by 1 for each MAC transmission request with requested acknowledgment regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.26", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x001a, name: "TxAckedCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The TxAckedCount attribute SHALL indicate the total number of unique MAC frame transmission requests that were acked. The TxAckedCount attribute SHALL only be incremented by 1 for each MAC transmission request that is acked regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.27", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x001b, name: "TxNoAckRequestedCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The TxNoAckRequestedCount attribute SHALL indicate the total number of unique MAC frame transmission requests without requested acknowledgment. The TxNoAckRequestedCount attribute SHALL only be incremented by 1 for each MAC transmission request that is does not request acknowledgement regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions.",
            xref: { section: "11.13.6.28", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x001c, name: "TxDataCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The TxDataCount attribute SHALL indicate the total number of unique MAC Data frame transmission requests. The TxDataCount attribute SHALL only be incremented by 1 for each MAC Data frame transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.29", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x001d, name: "TxDataPollCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The TxDataPollCount attribute SHALL indicate the total number of unique MAC Data Poll frame transmission requests. The TxDataPollCount attribute SHALL only be incremented by 1 for each MAC Data Poll frame transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.30", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x001e, name: "TxBeaconCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The TxBeaconCount attribute SHALL indicate the total number of unique MAC Beacon frame transmission requests. The TxBeaconCount attribute SHALL only be incremented by 1 for each MAC Beacon frame transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions.",
            xref: { section: "11.13.6.31", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x001f, name: "TxBeaconRequestCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The TxBeaconRequestCount attribute SHALL indicate the total number of unique MAC Beacon Request frame transmission requests. The TxBeaconRequestCount attribute SHALL only be incremented by 1 for each MAC Beacon Request frame transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.32", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0020, name: "TxOtherCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The TxOtherCount attribute SHALL indicate the total number of unique MAC frame transmission requests that are not counted by any other attribute. The TxOtherCount attribute SHALL only be incremented by 1 for each MAC frame transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.33", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0021, name: "TxRetryCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The TxRetryCount attribute SHALL indicate the total number of MAC retransmission attempts. The TxRetryCount attribute SHALL only be incremented by 1 for each retransmission attempt that may be triggered by lack of acknowledgement, CSMA/CA failure, or other type of transmission error. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.34", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0022, name: "TxDirectMaxRetryExpiryCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The TxDirectMaxRetryExpiryCount attribute SHALL indicate the total number of unique MAC transmission packets that meet maximal retry limit for direct packets. The TxDirectMaxRetryExpiryCount attribute SHALL only be incremented by 1 for each unique MAC transmission packets that meets the maximal retry limit for direct packets. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.35", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0023, name: "TxIndirectMaxRetryExpiryCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The TxIndirectMaxRetryExpiryCount attribute SHALL indicate the total number of unique MAC transmission packets that meet maximal retry limit for indirect packets. The TxIndirectMaxRetryExpiryCount attribute SHALL only be incremented by 1 for each unique MAC transmission packets that meets the maximal retry limit for indirect packets. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.36", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0024, name: "TxErrCcaCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The TxErrCcaCount attribute SHALL indicate the total number of CCA failures. The TxErrCcaCount attribute SHALL only be incremented by 1 for each instance of a CCA failure. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.37", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0025, name: "TxErrAbortCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The TxErrAbortCount attribute SHALL indicate the total number of unique MAC transmission request failures caused by an abort error. The TxErrAbortCount attribute SHALL only be incremented by 1 for each unique MAC transmission request failure caused by an abort error.",
            xref: { section: "11.13.6.38", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0026, name: "TxErrBusyChannelCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The TxErrBusyChannelCount attribute SHALL indicate the total number of unique MAC transmission request failures caused by an error as the result of a busy channel (a CSMA/CA fail). The TxErrBusyChannelCount attribute SHALL only be incremented by 1 for each unique MAC transmission request failure caused by a busy channel such as a CSMA/CA failure.",
            xref: { section: "11.13.6.39", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0027, name: "RxTotalCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The RxTotalCount attribute SHALL indicate the total number of received unique MAC frames. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.40", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0028, name: "RxUnicastCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The RxUnicastCount attribute SHALL indicate the total number of received unique unicast MAC frames. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.41", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0029, name: "RxBroadcastCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The RxBroadcastCount attribute SHALL indicate the total number of received unique broadcast MAC frames. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.42", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x002a, name: "RxDataCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The RxDataCount attribute SHALL indicate the total number of received unique MAC Data frames. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.43", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x002b, name: "RxDataPollCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The RxDataPollCount attribute SHALL indicate the total number of received unique MAC Data Poll frames. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.44", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x002c, name: "RxBeaconCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The RxBeaconCount attribute SHALL indicate the total number of received unique MAC Beacon frames. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.45", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x002d, name: "RxBeaconRequestCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The RxBeaconRequestCount attribute SHALL indicate the total number of received unique MAC Beacon Request frames. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.46", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x002e, name: "RxOtherCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The RxOtherCount attribute SHALL indicate the total number of received unique MAC frame requests that are not counted by any other attribute. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.47", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x002f, name: "RxAddressFilteredCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The RxAddressFilteredCount attribute SHALL indicate the total number of received unique MAC frame requests that have been dropped as a result of MAC filtering. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.48", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0030, name: "RxDestAddrFilteredCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The RxDestAddrFilteredCount attribute SHALL indicate the total number of received unique MAC frame requests that have been dropped as a result of a destination address check. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.49", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0031, name: "RxDuplicatedCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The RxDuplicatedCount attribute SHALL indicate the total number of received MAC frame requests that have been dropped as a result of being a duplicate of a previously received MAC frame request. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.50", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0032, name: "RxErrNoFrameCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The RxErrNoFrameCount attribute SHALL indicate the total number of received unique MAC frame requests that have been dropped as a result of missing or malformed frame contents. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.51", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0033, name: "RxErrUnknownNeighborCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The RxErrUnknownNeighborCount attribute SHALL indicate the total number of received unique MAC frame requests that have been dropped as a result of originating from an unknown neighbor device. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.52", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0034, name: "RxErrInvalidScrAddrCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The RxErrInvalidScrAddrCount attribute SHALL indicate the total number of received unique MAC frame requests that have been dropped as a result of containing an invalid source address. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.53", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0035, name: "RxErrSecCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The RxErrSecCount attribute SHALL indicate the total number of received unique MAC frame requests that have been dropped as a result of an error with the security of the received frame. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.54", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0036, name: "RxErrFcsCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The RxErrFcsCount attribute SHALL indicate the total number of received unique MAC frame requests that have been dropped as a result of an error with the FCS of the received frame. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.55", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0037, name: "RxErrOtherCount", base: "uint32",
            access: "R V", conformance: "[MACCNT]", value: "0", quality: "C",
            details: "The RxErrOtherCount attribute SHALL indicate the total number of received unique MAC frame requests that have been dropped as a result of an error that is not counted by any other attribute. This value SHALL only be reset upon a Node reboot.",
            xref: { section: "11.13.6.56", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0038, name: "ActiveTimestamp", base: "uint64",
            access: "R V", conformance: "O", value: "0", quality: "X",
            details: "This attribute SHALL be null when there is no dataset configured.",
            xref: { section: "11.13.6.57", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0039, name: "PendingTimestamp", base: "uint64",
            access: "R V", conformance: "O", value: "0", quality: "X",
            details: "This attribute SHALL be null when there is no dataset configured.",
            xref: { section: "11.13.6.58", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x003a, name: "Delay", base: "uint32",
            access: "R V", conformance: "O", value: "0", quality: "X",
            details: "This attribute SHALL be null when there is no dataset configured.",
            xref: { section: "11.13.6.59", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x003b, name: "SecurityPolicy", base: "SecurityPolicy",
            access: "R V", conformance: "M", constraint: "", value: "", quality: "X",
            details: "The SecurityPolicy attribute indicates the current security policies for the Thread partition to which a Node is connected. This attribute SHALL be null when there is no dataset configured.",
            xref: { section: "11.13.6.60", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x003c, name: "ChannelPage0Mask", base: "octstr",
            access: "R V", conformance: "M", constraint: "4", value: "", quality: "X",
            details: "The ChannelPage0Mask attribute indicates the channels within channel page 0, in the 2.4GHz ISM band. The channels are represented in most significant bit order, with bit value 1 meaning selected, bit value 0 meaning unselected. For example, the most significant bit of the left-most byte indicates channel 0. If channel 0 and channel 10 are selected, the mask would be: 80 20 00 00. This attribute SHALL be null when there is no dataset configured.",
            xref: { section: "11.13.6.61", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x003d, name: "OperationalDatasetComponents", base: "OperationalDatasetComponents",
            access: "R V", conformance: "M", constraint: "", value: "", quality: "X",
            details: "The OperationalDatasetComponents attribute is a collection of flags to indicate the presence of various operationally acquired values.",
            xref: { section: "11.13.6.62", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x003e, name: "ActiveNetworkFaults", base: "list[NetworkFaultEnum]",
            access: "R V", conformance: "M", constraint: "max 4", value: "",
            details: "The ActiveNetworkFaults attribute SHALL indicate the set of faults currently detected by the Node.",
            xref: { section: "11.13.6.63", document: "core", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "NetworkFaultEnum", base: "enum8",
            details: "This data type is derived from enum8.",
            xref: { section: "11.13.5.1", document: "core", version: "1.1" }
        })
    ]
}));
