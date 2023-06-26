/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "ThreadNetworkDiagnostics", id: 0x35, classification: "node",
    description: "Thread Network Diagnostics",
    details: "The Thread Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics " +
             "that MAY be used by a Node to assist a user or Administrative Node in diagnosing potential problems",
    xref: { document: "core", section: "11.13" },

    children: [
        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",

            children: [
                {
                    tag: "datatype", name: "PKTCNT", id: 0x0,
                    description: "Server supports the counts for the number of received and transmitted packets on the Thread interface.",
                    xref: { document: "core", section: "11.13.4" }
                },
                {
                    tag: "datatype", name: "ERRCNT", id: 0x1,
                    description: "Server supports the counts for the number of errors that have occurred during the reception and transmission of packets on the Thread interface.",
                    xref: { document: "core", section: "11.13.4" }
                },
                {
                    tag: "datatype", name: "MLECNT", id: 0x2,
                    description: "Server supports the counts for various MLE layer happenings.",
                    xref: { document: "core", section: "11.13.4" }
                },
                {
                    tag: "datatype", name: "MACCNT", id: 0x3,
                    description: "Server supports the counts for various MAC layer happenings.",
                    xref: { document: "core", section: "11.13.4" }
                }
            ]
        },

        {
            tag: "attribute", name: "Channel", id: 0x0, type: "uint16", access: "R V", conformance: "M",
            quality: "X",
            details: "The Channel attribute SHALL indicate the 802.15.4 channel number configured on the Node’s Thread " +
                     "interface (that is, the Active Operational Dataset’s current Channel value). A value of null SHALL " +
                     "indicate that the Thread interface is not currently configured or operational.",
            xref: { document: "core", section: "11.13.6.1" }
        },

        {
            tag: "attribute", name: "RoutingRole", id: 0x1, type: "RoutingRoleEnum", access: "R V",
            conformance: "M", quality: "X",
            details: "The RoutingRole attribute SHALL indicate the role that this Node has within the routing of messages " +
                     "through the Thread network, as defined by RoutingRoleEnum. The potential roles are defined in the " +
                     "following table. A value of null SHALL indicate that the Thread interface is not currently " +
                     "configured or operational.",
            xref: { document: "core", section: "11.13.6.2" }
        },

        {
            tag: "attribute", name: "NetworkName", id: 0x2, type: "string", access: "R V", conformance: "M",
            constraint: "max 16", default: "", quality: "X",
            details: "The NetworkName attribute SHALL indicate a human-readable (displayable) name for the Thread network " +
                     "that the Node has been configured to join to. A value of null SHALL indicate that the Thread " +
                     "interface is not currently configured or operational.",
            xref: { document: "core", section: "11.13.6.3" }
        },

        {
            tag: "attribute", name: "PanId", id: 0x3, type: "uint16", access: "R V", conformance: "M",
            quality: "X",
            details: "The PanId attribute SHALL indicate the 16-bit identifier of the Node on the Thread network. A value " +
                     "of null SHALL indicate that the Thread interface is not currently configured or operational.",
            xref: { document: "core", section: "11.13.6.4" }
        },

        {
            tag: "attribute", name: "ExtendedPanId", id: 0x4, type: "uint64", access: "R V", conformance: "M",
            quality: "X",
            details: "The ExtendedPanId attribute SHALL indicate the unique 64-bit identifier of the Node on the Thread " +
                     "network. A value of null SHALL indicate that the Thread interface is not currently configured or " +
                     "operational.",
            xref: { document: "core", section: "11.13.6.5" }
        },

        {
            tag: "attribute", name: "MeshLocalPrefix", id: 0x5, type: "ipv6pre", access: "R V",
            conformance: "M", quality: "X",
            details: "The MeshLocalPrefix attribute SHALL indicate the mesh-local IPv6 prefix for the Thread network that " +
                     "the Node has been configured to join to. A value of null SHALL indicate that the Thread interface " +
                     "is not currently configured or operational.",
            xref: { document: "core", section: "11.13.6.6" }
        },

        {
            tag: "attribute", name: "OverrunCount", id: 0x6, type: "uint64", access: "R V",
            conformance: "ERRCNT", quality: "C",
            details: "The OverrunCount attribute SHALL indicate the number of packets dropped either at ingress or " +
                     "egress, due to lack of buffer memory to retain all packets on the ethernet network interface. The " +
                     "OverrunCount attribute SHALL be reset to 0 upon a reboot of the Node.",
            xref: { document: "core", section: "11.13.6.7" }
        },

        {
            tag: "attribute", name: "NeighborTable", id: 0x7, type: "list", access: "R V", conformance: "M",
            details: "The NeighborTable attribute SHALL indicate the current list of Nodes that comprise the neighbor " +
                     "table on the Node.",
            xref: { document: "core", section: "11.13.6.8" },
            children: [ { tag: "datatype", name: "entry", type: "NeighborTableStruct" } ]
        },

        {
            tag: "attribute", name: "RouteTable", id: 0x8, type: "list", access: "R V", conformance: "M",
            details: "The RouteTable attribute SHALL indicate the current list of router capable Nodes for which routes " +
                     "have been established.",
            xref: { document: "core", section: "11.13.6.9" },
            children: [ { tag: "datatype", name: "entry", type: "RouteTableStruct" } ]
        },

        {
            tag: "attribute", name: "PartitionId", id: 0x9, type: "uint32", access: "R V", conformance: "M",
            quality: "X",
            details: "The PartitionId attribute SHALL indicate the Thread Leader Partition Id for the Thread network to " +
                     "which the Node is joined. This attribute SHALL be null if not attached to a Thread network.",
            xref: { document: "core", section: "11.13.6.10" }
        },

        {
            tag: "attribute", name: "Weighting", id: 0xa, type: "uint8", access: "R V", conformance: "M",
            quality: "X",
            details: "The Weighting attribute SHALL indicate the Thread Leader Weight used when operating in the Leader " +
                     "role. This attribute SHALL be null if not attached to a Thread network.",
            xref: { document: "core", section: "11.13.6.11" }
        },

        {
            tag: "attribute", name: "DataVersion", id: 0xb, type: "uint8", access: "R V", conformance: "M",
            quality: "X",
            details: "The DataVersion attribute SHALL indicate the full Network Data Version the Node currently uses. " +
                     "This attribute SHALL be null if not attached to a Thread network.",
            xref: { document: "core", section: "11.13.6.12" }
        },

        {
            tag: "attribute", name: "StableDataVersion", id: 0xc, type: "uint8", access: "R V",
            conformance: "M", quality: "X",
            details: "The StableDataVersion attribute SHALL indicate the Network Data Version for the stable subset of",
            xref: { document: "core", section: "11.13.6.13" }
        },

        {
            tag: "attribute", name: "LeaderRouterId", id: 0xd, type: "uint8", access: "R V", conformance: "M",
            quality: "X",
            details: "The LeaderRouterId attribute SHALL indicate the 8-bit LeaderRouterId the Node shall attempt to " +
                     "utilize upon becoming a router or leader on the Thread network. This attribute SHALL be null if not " +
                     "attached to a Thread network.",
            xref: { document: "core", section: "11.13.6.14" }
        },

        {
            tag: "attribute", name: "DetachedRoleCount", id: 0xe, type: "uint16", access: "R V",
            conformance: "[M, LECNT]", quality: "C",
            details: "The DetachedRoleCount attribute SHALL indicate the number of times the Node entered the " +
                     "OT_DEVICE_ROLE_DETACHED role as specified within the Thread specification. This value SHALL only be " +
                     "reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.15" }
        },

        {
            tag: "attribute", name: "ChildRoleCount", id: 0xf, type: "uint16", access: "R V",
            conformance: "[M, LECNT]", quality: "C",
            details: "The ChildRoleCount attribute SHALL indicate the number of times the Node entered the " +
                     "OT_DEVICE_ROLE_CHILD role as specified within the Thread specification. This value SHALL only be " +
                     "reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.16" }
        },

        {
            tag: "attribute", name: "RouterRoleCount", id: 0x10, type: "uint16", access: "R V",
            conformance: "[M, LECNT]", quality: "C",
            details: "The RouterRoleCount attribute SHALL indicate the number of times the Node entered the " +
                     "OT_DEVICE_ROLE_ROUTER role as specified within the Thread specification. This value SHALL only be " +
                     "reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.17" }
        },

        {
            tag: "attribute", name: "LeaderRoleCount", id: 0x11, type: "uint16", access: "R V",
            conformance: "[M, LECNT]", quality: "C",
            details: "The LeaderRoleCount attribute SHALL indicate the number of times the Node entered the " +
                     "OT_DEVICE_ROLE_LEADER role as specified within the Thread specification. This value SHALL only be " +
                     "reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.18" }
        },

        {
            tag: "attribute", name: "AttachAttemptCount", id: 0x12, type: "uint16", access: "R V",
            conformance: "[M, LECNT]", quality: "C",
            details: "The AttachAttemptCount attribute SHALL indicate the number of attempts that have been made to " +
                     "attach to a Thread network while the Node was detached from all Thread networks. This value SHALL " +
                     "only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.19" }
        },

        {
            tag: "attribute", name: "PartitionIdChangeCount", id: 0x13, type: "uint16", access: "R V",
            conformance: "[M, LECNT]", quality: "C",
            details: "The PartitionIdChangeCount attribute SHALL indicate the number of times that the Thread network " +
                     "that the Node is connected to has changed its Partition ID. This value SHALL only be reset upon a " +
                     "Node reboot.",
            xref: { document: "core", section: "11.13.6.20" }
        },

        {
            tag: "attribute", name: "BetterPartitionAttachAttemptCount", id: 0x14, type: "uint16",
            access: "R V", conformance: "[M, LECNT]", quality: "C",
            details: "The BetterPartitionAttachAttemptCount attribute SHALL indicate the number of times a Node has " +
                     "attempted to attach to a different Thread partition that it has determined is better than the " +
                     "partition it is currently attached to. This value SHALL only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.21" }
        },

        {
            tag: "attribute", name: "ParentChangeCount", id: 0x15, type: "uint16", access: "R V",
            conformance: "[M, LECNT]", quality: "C",
            details: "The ParentChangeCount attribute SHALL indicate the number of times a Node has changed its parent. " +
                     "This value SHALL only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.22" }
        },

        {
            tag: "attribute", name: "TxTotalCount", id: 0x16, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The TxTotalCount attribute SHALL indicate the total number of unique MAC frame transmission " +
                     "requests. The TxTotalCount attribute SHALL only be incremented by 1 for each MAC transmission " +
                     "request regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions. This value " +
                     "SHALL only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.23" }
        },

        {
            tag: "attribute", name: "TxUnicastCount", id: 0x17, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The TxUnicastCount attribute SHALL indicate the total number of unique unicast MAC frame " +
                     "transmission requests. The TxUnicastCount attribute SHALL only be incremented by 1 for each unicast " +
                     "MAC transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or " +
                     "retransmissions. This value SHALL only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.24" }
        },

        {
            tag: "attribute", name: "TxBroadcastCount", id: 0x18, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The TxBroadcastCount attribute SHALL indicate the total number of unique broadcast MAC frame " +
                     "transmission requests. The TxBroadcastCount attribute SHALL only be incremented by 1 for each " +
                     "broadcast MAC transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or " +
                     "retransmissions. This value SHALL only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.25" }
        },

        {
            tag: "attribute", name: "TxAckRequestedCount", id: 0x19, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The TxAckRequestedCount attribute SHALL indicate the total number of unique MAC frame transmission " +
                     "requests with requested acknowledgment. The TxAckRequestedCount attribute SHALL only be incremented " +
                     "by 1 for each MAC transmission request with requested acknowledgment regardless of the amount of " +
                     "CCA failures, CSMA-CA attempts, or retransmissions. This value SHALL only be reset upon a Node " +
                     "reboot.",
            xref: { document: "core", section: "11.13.6.26" }
        },

        {
            tag: "attribute", name: "TxAckedCount", id: 0x1a, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The TxAckedCount attribute SHALL indicate the total number of unique MAC frame transmission " +
                     "requests that were acked. The TxAckedCount attribute SHALL only be incremented by 1 for each MAC " +
                     "transmission request that is acked regardless of the amount of CCA failures, CSMA-CA attempts, or " +
                     "retransmissions. This value SHALL only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.27" }
        },

        {
            tag: "attribute", name: "TxNoAckRequestedCount", id: 0x1b, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The TxNoAckRequestedCount attribute SHALL indicate the total number of unique MAC frame " +
                     "transmission requests without requested acknowledgment. The TxNoAckRequestedCount attribute SHALL " +
                     "only be incremented by 1 for each MAC transmission request that is does not request acknowledgement " +
                     "regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions.",
            xref: { document: "core", section: "11.13.6.28" }
        },

        {
            tag: "attribute", name: "TxDataCount", id: 0x1c, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The TxDataCount attribute SHALL indicate the total number of unique MAC Data frame transmission " +
                     "requests. The TxDataCount attribute SHALL only be incremented by 1 for each MAC Data frame " +
                     "transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or " +
                     "retransmissions. This value SHALL only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.29" }
        },

        {
            tag: "attribute", name: "TxDataPollCount", id: 0x1d, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The TxDataPollCount attribute SHALL indicate the total number of unique MAC Data Poll frame " +
                     "transmission requests. The TxDataPollCount attribute SHALL only be incremented by 1 for each MAC " +
                     "Data Poll frame transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or " +
                     "retransmissions. This value SHALL only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.30" }
        },

        {
            tag: "attribute", name: "TxBeaconCount", id: 0x1e, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The TxBeaconCount attribute SHALL indicate the total number of unique MAC Beacon frame transmission " +
                     "requests. The TxBeaconCount attribute SHALL only be incremented by 1 for each MAC Beacon frame " +
                     "transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions.",
            xref: { document: "core", section: "11.13.6.31" }
        },

        {
            tag: "attribute", name: "TxBeaconRequestCount", id: 0x1f, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The TxBeaconRequestCount attribute SHALL indicate the total number of unique MAC Beacon Request " +
                     "frame transmission requests. The TxBeaconRequestCount attribute SHALL only be incremented by 1 for " +
                     "each MAC Beacon Request frame transmission request regardless of the amount of CCA failures, " +
                     "CSMA-CA attempts, or retransmissions. This value SHALL only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.32" }
        },

        {
            tag: "attribute", name: "TxOtherCount", id: 0x20, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The TxOtherCount attribute SHALL indicate the total number of unique MAC frame transmission " +
                     "requests that are not counted by any other attribute. The TxOtherCount attribute SHALL only be " +
                     "incremented by 1 for each MAC frame transmission request regardless of the amount of CCA failures, " +
                     "CSMA-CA attempts, or retransmissions. This value SHALL only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.33" }
        },

        {
            tag: "attribute", name: "TxRetryCount", id: 0x21, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The TxRetryCount attribute SHALL indicate the total number of MAC retransmission attempts. The " +
                     "TxRetryCount attribute SHALL only be incremented by 1 for each retransmission attempt that may be " +
                     "triggered by lack of acknowledgement, CSMA/CA failure, or other type of transmission error. This " +
                     "value SHALL only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.34" }
        },

        {
            tag: "attribute", name: "TxDirectMaxRetryExpiryCount", id: 0x22, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The TxDirectMaxRetryExpiryCount attribute SHALL indicate the total number of unique MAC " +
                     "transmission packets that meet maximal retry limit for direct packets. The " +
                     "TxDirectMaxRetryExpiryCount attribute SHALL only be incremented by 1 for each unique MAC " +
                     "transmission packets that meets the maximal retry limit for direct packets. This value SHALL only " +
                     "be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.35" }
        },

        {
            tag: "attribute", name: "TxIndirectMaxRetryExpiryCount", id: 0x23, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The TxIndirectMaxRetryExpiryCount attribute SHALL indicate the total number of unique MAC " +
                     "transmission packets that meet maximal retry limit for indirect packets. The " +
                     "TxIndirectMaxRetryExpiryCount attribute SHALL only be incremented by 1 for each unique MAC " +
                     "transmission packets that meets the maximal retry limit for indirect packets. This value SHALL only " +
                     "be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.36" }
        },

        {
            tag: "attribute", name: "TxErrCcaCount", id: 0x24, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The TxErrCcaCount attribute SHALL indicate the total number of CCA failures. The TxErrCcaCount " +
                     "attribute SHALL only be incremented by 1 for each instance of a CCA failure. This value SHALL only " +
                     "be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.37" }
        },

        {
            tag: "attribute", name: "TxErrAbortCount", id: 0x25, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The TxErrAbortCount attribute SHALL indicate the total number of unique MAC transmission request " +
                     "failures caused by an abort error. The TxErrAbortCount attribute SHALL only be incremented by 1 for " +
                     "each unique MAC transmission request failure caused by an abort error.",
            xref: { document: "core", section: "11.13.6.38" }
        },

        {
            tag: "attribute", name: "TxErrBusyChannelCount", id: 0x26, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The TxErrBusyChannelCount attribute SHALL indicate the total number of unique MAC transmission " +
                     "request failures caused by an error as the result of a busy channel (a CSMA/CA fail). The " +
                     "TxErrBusyChannelCount attribute SHALL only be incremented by 1 for each unique MAC transmission " +
                     "request failure caused by a busy channel such as a CSMA/CA failure.",
            xref: { document: "core", section: "11.13.6.39" }
        },

        {
            tag: "attribute", name: "RxTotalCount", id: 0x27, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The RxTotalCount attribute SHALL indicate the total number of received unique MAC frames. This " +
                     "value SHALL only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.40" }
        },

        {
            tag: "attribute", name: "RxUnicastCount", id: 0x28, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The RxUnicastCount attribute SHALL indicate the total number of received unique unicast MAC frames. " +
                     "This value SHALL only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.41" }
        },

        {
            tag: "attribute", name: "RxBroadcastCount", id: 0x29, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The RxBroadcastCount attribute SHALL indicate the total number of received unique broadcast MAC " +
                     "frames. This value SHALL only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.42" }
        },

        {
            tag: "attribute", name: "RxDataCount", id: 0x2a, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The RxDataCount attribute SHALL indicate the total number of received unique MAC Data frames. This " +
                     "value SHALL only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.43" }
        },

        {
            tag: "attribute", name: "RxDataPollCount", id: 0x2b, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The RxDataPollCount attribute SHALL indicate the total number of received unique MAC Data Poll " +
                     "frames. This value SHALL only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.44" }
        },

        {
            tag: "attribute", name: "RxBeaconCount", id: 0x2c, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The RxBeaconCount attribute SHALL indicate the total number of received unique MAC Beacon frames. " +
                     "This value SHALL only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.45" }
        },

        {
            tag: "attribute", name: "RxBeaconRequestCount", id: 0x2d, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The RxBeaconRequestCount attribute SHALL indicate the total number of received unique MAC Beacon " +
                     "Request frames. This value SHALL only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.46" }
        },

        {
            tag: "attribute", name: "RxOtherCount", id: 0x2e, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The RxOtherCount attribute SHALL indicate the total number of received unique MAC frame requests " +
                     "that are not counted by any other attribute. This value SHALL only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.47" }
        },

        {
            tag: "attribute", name: "RxAddressFilteredCount", id: 0x2f, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The RxAddressFilteredCount attribute SHALL indicate the total number of received unique MAC frame " +
                     "requests that have been dropped as a result of MAC filtering. This value SHALL only be reset upon a " +
                     "Node reboot.",
            xref: { document: "core", section: "11.13.6.48" }
        },

        {
            tag: "attribute", name: "RxDestAddrFilteredCount", id: 0x30, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The RxDestAddrFilteredCount attribute SHALL indicate the total number of received unique MAC frame " +
                     "requests that have been dropped as a result of a destination address check. This value SHALL only " +
                     "be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.49" }
        },

        {
            tag: "attribute", name: "RxDuplicatedCount", id: 0x31, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The RxDuplicatedCount attribute SHALL indicate the total number of received MAC frame requests that " +
                     "have been dropped as a result of being a duplicate of a previously received MAC frame request. This " +
                     "value SHALL only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.50" }
        },

        {
            tag: "attribute", name: "RxErrNoFrameCount", id: 0x32, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The RxErrNoFrameCount attribute SHALL indicate the total number of received unique MAC frame " +
                     "requests that have been dropped as a result of missing or malformed frame contents. This value " +
                     "SHALL only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.51" }
        },

        {
            tag: "attribute", name: "RxErrUnknownNeighborCount", id: 0x33, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The RxErrUnknownNeighborCount attribute SHALL indicate the total number of received unique MAC " +
                     "frame requests that have been dropped as a result of originating from an unknown neighbor device. " +
                     "This value SHALL only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.52" }
        },

        {
            tag: "attribute", name: "RxErrInvalidScrAddrCount", id: 0x34, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The RxErrInvalidScrAddrCount attribute SHALL indicate the total number of received unique MAC frame " +
                     "requests that have been dropped as a result of containing an invalid source address. This value " +
                     "SHALL only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.53" }
        },

        {
            tag: "attribute", name: "RxErrSecCount", id: 0x35, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The RxErrSecCount attribute SHALL indicate the total number of received unique MAC frame requests " +
                     "that have been dropped as a result of an error with the security of the received frame. This value " +
                     "SHALL only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.54" }
        },

        {
            tag: "attribute", name: "RxErrFcsCount", id: 0x36, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The RxErrFcsCount attribute SHALL indicate the total number of received unique MAC frame requests " +
                     "that have been dropped as a result of an error with the FCS of the received frame. This value SHALL " +
                     "only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.55" }
        },

        {
            tag: "attribute", name: "RxErrOtherCount", id: 0x37, type: "uint32", access: "R V",
            conformance: "[M, ACCNT]", quality: "C",
            details: "The RxErrOtherCount attribute SHALL indicate the total number of received unique MAC frame requests " +
                     "that have been dropped as a result of an error that is not counted by any other attribute. This " +
                     "value SHALL only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.13.6.56" }
        },

        {
            tag: "attribute", name: "ActiveTimestamp", id: 0x38, type: "uint64", access: "R V",
            conformance: "O", quality: "X",
            details: "This attribute SHALL be null when there is no dataset configured.",
            xref: { document: "core", section: "11.13.6.57" }
        },

        {
            tag: "attribute", name: "PendingTimestamp", id: 0x39, type: "uint64", access: "R V",
            conformance: "O", quality: "X",
            details: "This attribute SHALL be null when there is no dataset configured.",
            xref: { document: "core", section: "11.13.6.58" }
        },

        {
            tag: "attribute", name: "Delay", id: 0x3a, type: "uint32", access: "R V", conformance: "O",
            quality: "X",
            details: "This attribute SHALL be null when there is no dataset configured.",
            xref: { document: "core", section: "11.13.6.59" }
        },

        {
            tag: "attribute", name: "SecurityPolicy", id: 0x3b, type: "SecurityPolicy", access: "R V",
            conformance: "M", quality: "X",
            details: "The SecurityPolicy attribute indicates the current security policies for the Thread partition to " +
                     "which a Node is connected. This attribute SHALL be null when there is no dataset configured.",
            xref: { document: "core", section: "11.13.6.60" }
        },

        {
            tag: "attribute", name: "ChannelPage0Mask", id: 0x3c, type: "octstr", access: "R V",
            conformance: "M", constraint: "4", quality: "X",
            details: "The ChannelPage0Mask attribute indicates the channels within channel page 0, in the 2.4GHz ISM " +
                     "band. The channels are represented in most significant bit order, with bit value 1 meaning " +
                     "selected, bit value 0 meaning unselected. For example, the most significant bit of the left-most " +
                     "byte indicates channel 0. If channel 0 and channel 10 are selected, the mask would be: 80 20 00 00. " +
                     "This attribute SHALL be null when there is no dataset configured.",
            xref: { document: "core", section: "11.13.6.61" }
        },

        {
            tag: "attribute", name: "OperationalDatasetComponents", id: 0x3d,
            type: "OperationalDatasetComponents", access: "R V", conformance: "M", quality: "X",
            details: "The OperationalDatasetComponents attribute is a collection of flags to indicate the presence of " +
                     "various operationally acquired values.",
            xref: { document: "core", section: "11.13.6.62" }
        },

        {
            tag: "attribute", name: "ActiveNetworkFaults", id: 0x3e, type: "list", access: "R V",
            conformance: "M", constraint: "max 4",
            details: "The ActiveNetworkFaults attribute SHALL indicate the set of faults currently detected by the Node.",
            xref: { document: "core", section: "11.13.6.63" },
            children: [ { tag: "datatype", name: "entry", type: "NetworkFaultEnum" } ]
        },

        {
            tag: "event", name: "ConnectionStatus", id: 0x0, access: "V", conformance: "O", priority: "info",
            details: "The ConnectionStatus Event SHALL indicate that a Node’s connection status to a Thread network has " +
                     "changed.",
            xref: { document: "core", section: "11.13.8.2" },
            children: [ { tag: "datatype", name: "ConnectionStatus", id: 0x0, type: "ConnectionStatusEnum", conformance: "M" } ]
        },

        {
            tag: "event", name: "NetworkFaultChange", id: 0x1, access: "V", conformance: "O", priority: "info",
            details: "The NetworkFaultChange Event SHALL indicate a change in the set of network faults currently " +
                     "detected by the Node.",
            xref: { document: "core", section: "11.13.8.1" },

            children: [
                {
                    tag: "datatype", name: "Current", id: 0x0, type: "list", conformance: "M", constraint: "max 4",
                    children: [ { tag: "datatype", name: "entry", type: "NetworkFaultEnum" } ]
                },
                {
                    tag: "datatype", name: "Previous", id: 0x1, type: "list", conformance: "M", constraint: "max 4",
                    children: [ { tag: "datatype", name: "entry", type: "NetworkFaultEnum" } ]
                }
            ]
        },

        {
            tag: "command", name: "ResetCounts", id: 0x0, access: "M", conformance: "ERRCNT",
            direction: "request", response: "status",
            details: "Reception of this command SHALL reset the following attributes to 0:",
            xref: { document: "core", section: "11.13.7.1" }
        },

        {
            tag: "datatype", name: "NetworkFaultEnum", type: "enum8",
            details: "This data type is derived from enum8.",
            xref: { document: "core", section: "11.13.5.1" },

            children: [
                { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "LinkDown", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "HardwareFailure", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "NetworkJammed", id: 0x3, conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "ConnectionStatusEnum", type: "enum8", conformance: "M",
            details: "This data type is derived from enum8.",
            xref: { document: "core", section: "11.13.5.2" },
            children: [
                { tag: "datatype", name: "Connected", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "NotConnected", id: 0x1, conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "RoutingRoleEnum", type: "enum8",
            details: "This data type is derived from enum8.",
            xref: { document: "core", section: "11.13.5.3" },

            children: [
                { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "Unassigned", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "SleepyEndDevice", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "EndDevice", id: 0x3, conformance: "M" },
                { tag: "datatype", name: "Reed", id: 0x4, conformance: "M" },
                { tag: "datatype", name: "Router", id: 0x5, conformance: "M" },
                { tag: "datatype", name: "Leader", id: 0x6, conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "NeighborTableStruct", type: "struct",
            details: "ExtAddress Field",
            xref: { document: "core", section: "11.13.5.4" },

            children: [
                { tag: "datatype", name: "ExtAddress", id: 0x0, type: "uint64", conformance: "M" },
                { tag: "datatype", name: "Age", id: 0x1, type: "uint32", conformance: "M" },
                { tag: "datatype", name: "Rloc16", id: 0x2, type: "uint16", conformance: "M" },
                { tag: "datatype", name: "LinkFrameCounter", id: 0x3, type: "uint32", conformance: "M" },
                { tag: "datatype", name: "MleFrameCounter", id: 0x4, type: "uint32", conformance: "M" },
                { tag: "datatype", name: "Lqi", id: 0x5, type: "uint8", conformance: "M", constraint: "0 to 255" },
                {
                    tag: "datatype", name: "AverageRssi", id: 0x6, type: "int8", conformance: "M",
                    constraint: "-128 to 0", default: null, quality: "X"
                },
                {
                    tag: "datatype", name: "LastRssi", id: 0x7, type: "int8", conformance: "M", constraint: "-128 to 0",
                    default: null, quality: "X"
                },
                {
                    tag: "datatype", name: "FrameErrorRate", id: 0x8, type: "uint8", conformance: "O",
                    constraint: "0 to 100"
                },
                {
                    tag: "datatype", name: "MessageErrorRate", id: 0x9, type: "uint8", conformance: "O",
                    constraint: "0 to 100"
                },
                { tag: "datatype", name: "RxOnWhenIdle", id: 0xa, type: "bool", conformance: "M" },
                { tag: "datatype", name: "FullThreadDevice", id: 0xb, type: "bool", conformance: "M" },
                { tag: "datatype", name: "FullNetworkData", id: 0xc, type: "bool", conformance: "M" },
                { tag: "datatype", name: "IsChild", id: 0xd, type: "bool", conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "RouteTableStruct", type: "struct",
            details: "ExtAddress Field",
            xref: { document: "core", section: "11.13.5.5" },

            children: [
                { tag: "datatype", name: "ExtAddress", id: 0x0, type: "uint64", conformance: "M" },
                { tag: "datatype", name: "Rloc16", id: 0x1, type: "uint16", conformance: "M" },
                { tag: "datatype", name: "RouterId", id: 0x2, type: "uint8", conformance: "M" },
                { tag: "datatype", name: "NextHop", id: 0x3, type: "uint8", conformance: "M" },
                { tag: "datatype", name: "PathCost", id: 0x4, type: "uint8", conformance: "M" },
                { tag: "datatype", name: "LqiIn", id: 0x5, type: "uint8", conformance: "M" },
                { tag: "datatype", name: "LqiOut", id: 0x6, type: "uint8", conformance: "M" },
                { tag: "datatype", name: "Age", id: 0x7, type: "uint8", conformance: "M" },
                { tag: "datatype", name: "Allocated", id: 0x8, type: "bool", conformance: "M" },
                { tag: "datatype", name: "LinkEstablished", id: 0x9, type: "bool", conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "SecurityPolicy", type: "struct", conformance: "M",
            details: "RotationTime Field",
            xref: { document: "core", section: "11.13.5.6" },
            children: [
                { tag: "datatype", name: "RotationTime", id: 0x0, type: "uint16", conformance: "M" },
                { tag: "datatype", name: "Flags", id: 0x1, type: "uint16", conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "OperationalDatasetComponents", type: "struct", conformance: "M",
            details: "ActiveTimestampPresent Field",
            xref: { document: "core", section: "11.13.5.7" },

            children: [
                { tag: "datatype", name: "ActiveTimestampPresent", id: 0x0, type: "bool", conformance: "M" },
                { tag: "datatype", name: "PendingTimestampPresent", id: 0x1, type: "bool", conformance: "M" },
                { tag: "datatype", name: "MasterKeyPresent", id: 0x2, type: "bool", conformance: "M" },
                { tag: "datatype", name: "NetworkNamePresent", id: 0x3, type: "bool", conformance: "M" },
                { tag: "datatype", name: "ExtendedPanIdPresent", id: 0x4, type: "bool", conformance: "M" },
                { tag: "datatype", name: "MeshLocalPrefixPresent", id: 0x5, type: "bool", conformance: "M" },
                { tag: "datatype", name: "DelayPresent", id: 0x6, type: "bool", conformance: "M" },
                { tag: "datatype", name: "PanIdPresent", id: 0x7, type: "bool", conformance: "M" },
                { tag: "datatype", name: "ChannelPresent", id: 0x8, type: "bool", conformance: "M" },
                { tag: "datatype", name: "PskcPresent", id: 0x9, type: "bool", conformance: "M" },
                { tag: "datatype", name: "SecurityPolicyPresent", id: 0xa, type: "bool", conformance: "M" },
                { tag: "datatype", name: "ChannelMaskPresent", id: 0xb, type: "bool", conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "RoutingRole", type: "enum8", conformance: "M",

            children: [
                { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "Unassigned", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "SleepyEndDevice", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "EndDevice", id: 0x3, conformance: "M" },
                { tag: "datatype", name: "Reed", id: 0x4, conformance: "M" },
                { tag: "datatype", name: "Router", id: 0x5, conformance: "M" },
                { tag: "datatype", name: "Leader", id: 0x6, conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "NeighborTable", type: "struct", conformance: "M",

            children: [
                { tag: "datatype", name: "ExtAddress", type: "uint64", conformance: "M" },
                { tag: "datatype", name: "Age", type: "uint32", conformance: "M" },
                { tag: "datatype", name: "Rloc16", type: "uint16", conformance: "M" },
                { tag: "datatype", name: "LinkFrameCounter", type: "uint32", conformance: "M" },
                { tag: "datatype", name: "MleFrameCounter", type: "uint32", conformance: "M" },
                { tag: "datatype", name: "Lqi", type: "uint8", conformance: "M" },
                { tag: "datatype", name: "AverageRssi", type: "int8", conformance: "M", quality: "X" },
                { tag: "datatype", name: "LastRssi", type: "int8", conformance: "M", quality: "X" },
                { tag: "datatype", name: "FrameErrorRate", type: "uint8", conformance: "M" },
                { tag: "datatype", name: "MessageErrorRate", type: "uint8", conformance: "M" },
                { tag: "datatype", name: "RxOnWhenIdle", type: "bool", conformance: "M" },
                { tag: "datatype", name: "FullThreadDevice", type: "bool", conformance: "M" },
                { tag: "datatype", name: "FullNetworkData", type: "bool", conformance: "M" },
                { tag: "datatype", name: "IsChild", type: "bool", conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "RouteTable", type: "struct", conformance: "M",

            children: [
                { tag: "datatype", name: "ExtAddress", type: "uint64", conformance: "M" },
                { tag: "datatype", name: "Rloc16", type: "uint16", conformance: "M" },
                { tag: "datatype", name: "RouterId", type: "uint8", conformance: "M" },
                { tag: "datatype", name: "NextHop", type: "uint8", conformance: "M" },
                { tag: "datatype", name: "PathCost", type: "uint8", conformance: "M" },
                { tag: "datatype", name: "LqiIn", type: "uint8", conformance: "M" },
                { tag: "datatype", name: "LqiOut", type: "uint8", conformance: "M" },
                { tag: "datatype", name: "Age", type: "uint8", conformance: "M" },
                { tag: "datatype", name: "Allocated", type: "bool", conformance: "M" },
                { tag: "datatype", name: "LinkEstablished", type: "bool", conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "NetworkFault", type: "enum8", conformance: "M",

            children: [
                { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "LinkDown", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "HardwareFailure", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "NetworkJammed", id: 0x3, conformance: "M" }
            ]
        }
    ]
});