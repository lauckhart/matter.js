/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0035, name: "ThreadNetworkDiagnostics",
    classification: "node", description: "Thread Network Diagnostics",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "Channel",
            access: "R V", conformance: "M", default: undefined, quality: "X", type: "uint16",
            details: "The Channel attribute SHALL indicate the 802.15.4 channel number " +
                     "configured on the Node’s Thread interface (that is, the Active " +
                     "Operational Dataset’s current Channel value). A value of null SHALL " +
                     "indicate that the Thread interface is not currently configured or " +
                     "operational",
            xref: { document: "core", section: "11.13.6.1" }
        },

        {
            tag: "attribute", id: 0x0001, name: "RoutingRole",
            access: "R V", conformance: "M", default: "", quality: "X", type: "RoutingRoleEnum",
            details: "The RoutingRole attribute SHALL indicate the role that this Node has " +
                     "within the routing of messages through the Thread network, as defined " +
                     "by RoutingRoleEnum. The potential roles are defined in the following " +
                     "table. A value of null SHALL indicate that the Thread interface is not" +
                     " currently configured or operational",
            xref: { document: "core", section: "11.13.6.2" }
        },

        {
            tag: "attribute", id: 0x0002, name: "NetworkName",
            access: "R V", conformance: "M", constraint: "max 16", default: "", quality: "X", type: "String",
            details: "The NetworkName attribute SHALL indicate a human-readable (displayable" +
                     ") name for the Thread network that the Node has been configured to " +
                     "join to. A value of null SHALL indicate that the Thread interface is " +
                     "not currently configured or operational",
            xref: { document: "core", section: "11.13.6.3" }
        },

        {
            tag: "attribute", id: 0x0003, name: "PanId",
            access: "R V", conformance: "M", default: undefined, quality: "X", type: "uint16",
            details: "The PanId attribute SHALL indicate the 16-bit identifier of the Node " +
                     "on the Thread network. A value of null SHALL indicate that the Thread " +
                     "interface is not currently configured or operational",
            xref: { document: "core", section: "11.13.6.4" }
        },

        {
            tag: "attribute", id: 0x0004, name: "ExtendedPanId",
            access: "R V", conformance: "M", default: undefined, quality: "X", type: "uint64",
            details: "The ExtendedPanId attribute SHALL indicate the unique 64-bit " +
                     "identifier of the Node on the Thread network. A value of null SHALL " +
                     "indicate that the Thread interface is not currently configured or " +
                     "operational",
            xref: { document: "core", section: "11.13.6.5" }
        },

        {
            tag: "attribute", id: 0x0005, name: "MeshLocalPrefix",
            access: "R V", conformance: "M", default: undefined, quality: "X", type: "ipv6pre",
            details: "The MeshLocalPrefix attribute SHALL indicate the mesh-local IPv6 " +
                     "prefix for the Thread network that the Node has been configured to " +
                     "join to. A value of null SHALL indicate that the Thread interface is " +
                     "not currently configured or operational",
            xref: { document: "core", section: "11.13.6.6" }
        },

        {
            tag: "attribute", id: 0x0006, name: "OverrunCount",
            access: "R V", conformance: "ERRCNT", default: undefined, quality: "C", type: "uint64",
            details: "The OverrunCount attribute SHALL indicate the number of packets " +
                     "dropped either at ingress or egress, due to lack of buffer memory to " +
                     "retain all packets on the ethernet network interface. The OverrunCount" +
                     " attribute SHALL be reset to 0 upon a reboot of the Node",
            xref: { document: "core", section: "11.13.6.7" }
        },

        {
            tag: "attribute", id: 0x0007, name: "NeighborTable",
            access: "R V", conformance: "M", default: [], type: "list",
            details: "The NeighborTable attribute SHALL indicate the current list of Nodes " +
                     "that comprise the neighbor table on the Node",
            xref: { document: "core", section: "11.13.6.8" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "NeighborTableStruct"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0008, name: "RouteTable",
            access: "R V", conformance: "M", default: [], type: "list",
            details: "The RouteTable attribute SHALL indicate the current list of router " +
                     "capable Nodes for which routes have been established",
            xref: { document: "core", section: "11.13.6.9" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "RouteTableStruct"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0009, name: "PartitionId",
            access: "R V", conformance: "M", default: undefined, quality: "X", type: "uint32",
            details: "The PartitionId attribute SHALL indicate the Thread Leader Partition " +
                     "Id for the Thread network to which the Node is joined. This attribute " +
                     "SHALL be null if not attached to a Thread network",
            xref: { document: "core", section: "11.13.6.10" }
        },

        {
            tag: "attribute", id: 0x000a, name: "Weighting",
            access: "R V", conformance: "M", default: undefined, quality: "X", type: "uint8",
            details: "The Weighting attribute SHALL indicate the Thread Leader Weight used " +
                     "when operating in the Leader role. This attribute SHALL be null if not" +
                     " attached to a Thread network",
            xref: { document: "core", section: "11.13.6.11" }
        },

        {
            tag: "attribute", id: 0x000b, name: "DataVersion",
            access: "R V", conformance: "M", default: undefined, quality: "X", type: "uint8",
            details: "The DataVersion attribute SHALL indicate the full Network Data Version" +
                     " the Node currently uses. This attribute SHALL be null if not attached" +
                     " to a Thread network",
            xref: { document: "core", section: "11.13.6.12" }
        },

        {
            tag: "attribute", id: 0x000c, name: "StableDataVersion",
            access: "R V", conformance: "M", default: undefined, quality: "X", type: "uint8",
            details: "The StableDataVersion attribute SHALL indicate the Network Data " +
                     "Version for the stable subset of",
            xref: { document: "core", section: "11.13.6.13" }
        },

        {
            tag: "attribute", id: 0x000d, name: "LeaderRouterId",
            access: "R V", conformance: "M", default: undefined, quality: "X", type: "uint8",
            details: "The LeaderRouterId attribute SHALL indicate the 8-bit LeaderRouterId " +
                     "the Node shall attempt to utilize upon becoming a router or leader on " +
                     "the Thread network. This attribute SHALL be null if not attached to a " +
                     "Thread network",
            xref: { document: "core", section: "11.13.6.14" }
        },

        {
            tag: "attribute", id: 0x000e, name: "DetachedRoleCount",
            access: "R V", conformance: "[M, LECNT]", default: undefined, quality: "C", type: "uint16",
            details: "The DetachedRoleCount attribute SHALL indicate the number of times the" +
                     " Node entered the OT_DEVICE_ROLE_DETACHED role as specified within the" +
                     " Thread specification. This value SHALL only be reset upon a Node " +
                     "reboot",
            xref: { document: "core", section: "11.13.6.15" }
        },

        {
            tag: "attribute", id: 0x000f, name: "ChildRoleCount",
            access: "R V", conformance: "[M, LECNT]", default: undefined, quality: "C", type: "uint16",
            details: "The ChildRoleCount attribute SHALL indicate the number of times the " +
                     "Node entered the OT_DEVICE_ROLE_CHILD role as specified within the " +
                     "Thread specification. This value SHALL only be reset upon a Node " +
                     "reboot",
            xref: { document: "core", section: "11.13.6.16" }
        },

        {
            tag: "attribute", id: 0x0010, name: "RouterRoleCount",
            access: "R V", conformance: "[M, LECNT]", default: undefined, quality: "C", type: "uint16",
            details: "The RouterRoleCount attribute SHALL indicate the number of times the " +
                     "Node entered the OT_DEVICE_ROLE_ROUTER role as specified within the " +
                     "Thread specification. This value SHALL only be reset upon a Node " +
                     "reboot",
            xref: { document: "core", section: "11.13.6.17" }
        },

        {
            tag: "attribute", id: 0x0011, name: "LeaderRoleCount",
            access: "R V", conformance: "[M, LECNT]", default: undefined, quality: "C", type: "uint16",
            details: "The LeaderRoleCount attribute SHALL indicate the number of times the " +
                     "Node entered the OT_DEVICE_ROLE_LEADER role as specified within the " +
                     "Thread specification. This value SHALL only be reset upon a Node " +
                     "reboot",
            xref: { document: "core", section: "11.13.6.18" }
        },

        {
            tag: "attribute", id: 0x0012, name: "AttachAttemptCount",
            access: "R V", conformance: "[M, LECNT]", default: undefined, quality: "C", type: "uint16",
            details: "The AttachAttemptCount attribute SHALL indicate the number of attempts" +
                     " that have been made to attach to a Thread network while the Node was " +
                     "detached from all Thread networks. This value SHALL only be reset upon" +
                     " a Node reboot",
            xref: { document: "core", section: "11.13.6.19" }
        },

        {
            tag: "attribute", id: 0x0013, name: "PartitionIdChangeCount",
            access: "R V", conformance: "[M, LECNT]", default: undefined, quality: "C", type: "uint16",
            details: "The PartitionIdChangeCount attribute SHALL indicate the number of " +
                     "times that the Thread network that the Node is connected to has " +
                     "changed its Partition ID. This value SHALL only be reset upon a Node " +
                     "reboot",
            xref: { document: "core", section: "11.13.6.20" }
        },

        {
            tag: "attribute", id: 0x0014, name: "BetterPartitionAttachAttemptCount",
            access: "R V", conformance: "[M, LECNT]", default: undefined, quality: "C", type: "uint16",
            details: "The BetterPartitionAttachAttemptCount attribute SHALL indicate the " +
                     "number of times a Node has attempted to attach to a different Thread " +
                     "partition that it has determined is better than the partition it is " +
                     "currently attached to. This value SHALL only be reset upon a Node " +
                     "reboot",
            xref: { document: "core", section: "11.13.6.21" }
        },

        {
            tag: "attribute", id: 0x0015, name: "ParentChangeCount",
            access: "R V", conformance: "[M, LECNT]", default: undefined, quality: "C", type: "uint16",
            details: "The ParentChangeCount attribute SHALL indicate the number of times a " +
                     "Node has changed its parent. This value SHALL only be reset upon a " +
                     "Node reboot",
            xref: { document: "core", section: "11.13.6.22" }
        },

        {
            tag: "attribute", id: 0x0016, name: "TxTotalCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The TxTotalCount attribute SHALL indicate the total number of unique " +
                     "MAC frame transmission requests. The TxTotalCount attribute SHALL only" +
                     " be incremented by 1 for each MAC transmission request regardless of " +
                     "the amount of CCA failures, CSMA-CA attempts, or retransmissions. This" +
                     " value SHALL only be reset upon a Node reboot",
            xref: { document: "core", section: "11.13.6.23" }
        },

        {
            tag: "attribute", id: 0x0017, name: "TxUnicastCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The TxUnicastCount attribute SHALL indicate the total number of unique" +
                     " unicast MAC frame transmission requests. The TxUnicastCount attribute" +
                     " SHALL only be incremented by 1 for each unicast MAC transmission " +
                     "request regardless of the amount of CCA failures, CSMA-CA attempts, or" +
                     " retransmissions. This value SHALL only be reset upon a Node reboot",
            xref: { document: "core", section: "11.13.6.24" }
        },

        {
            tag: "attribute", id: 0x0018, name: "TxBroadcastCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The TxBroadcastCount attribute SHALL indicate the total number of " +
                     "unique broadcast MAC frame transmission requests. The TxBroadcastCount" +
                     " attribute SHALL only be incremented by 1 for each broadcast MAC " +
                     "transmission request regardless of the amount of CCA failures, CSMA-CA" +
                     " attempts, or retransmissions. This value SHALL only be reset upon a " +
                     "Node reboot",
            xref: { document: "core", section: "11.13.6.25" }
        },

        {
            tag: "attribute", id: 0x0019, name: "TxAckRequestedCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The TxAckRequestedCount attribute SHALL indicate the total number of " +
                     "unique MAC frame transmission requests with requested acknowledgment. " +
                     "The TxAckRequestedCount attribute SHALL only be incremented by 1 for " +
                     "each MAC transmission request with requested acknowledgment regardless" +
                     " of the amount of CCA failures, CSMA-CA attempts, or retransmissions. " +
                     "This value SHALL only be reset upon a Node reboot",
            xref: { document: "core", section: "11.13.6.26" }
        },

        {
            tag: "attribute", id: 0x001a, name: "TxAckedCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The TxAckedCount attribute SHALL indicate the total number of unique " +
                     "MAC frame transmission requests that were acked. The TxAckedCount " +
                     "attribute SHALL only be incremented by 1 for each MAC transmission " +
                     "request that is acked regardless of the amount of CCA failures, CSMA-" +
                     "CA attempts, or retransmissions. This value SHALL only be reset upon a" +
                     " Node reboot",
            xref: { document: "core", section: "11.13.6.27" }
        },

        {
            tag: "attribute", id: 0x001b, name: "TxNoAckRequestedCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The TxNoAckRequestedCount attribute SHALL indicate the total number of" +
                     " unique MAC frame transmission requests without requested " +
                     "acknowledgment. The TxNoAckRequestedCount attribute SHALL only be " +
                     "incremented by 1 for each MAC transmission request that is does not " +
                     "request acknowledgement regardless of the amount of CCA failures, CSMA" +
                     "-CA attempts, or retransmissions",
            xref: { document: "core", section: "11.13.6.28" }
        },

        {
            tag: "attribute", id: 0x001c, name: "TxDataCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The TxDataCount attribute SHALL indicate the total number of unique " +
                     "MAC Data frame transmission requests. The TxDataCount attribute SHALL " +
                     "only be incremented by 1 for each MAC Data frame transmission request " +
                     "regardless of the amount of CCA failures, CSMA-CA attempts, or " +
                     "retransmissions. This value SHALL only be reset upon a Node reboot",
            xref: { document: "core", section: "11.13.6.29" }
        },

        {
            tag: "attribute", id: 0x001d, name: "TxDataPollCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The TxDataPollCount attribute SHALL indicate the total number of " +
                     "unique MAC Data Poll frame transmission requests. The TxDataPollCount " +
                     "attribute SHALL only be incremented by 1 for each MAC Data Poll frame " +
                     "transmission request regardless of the amount of CCA failures, CSMA-CA" +
                     " attempts, or retransmissions. This value SHALL only be reset upon a " +
                     "Node reboot",
            xref: { document: "core", section: "11.13.6.30" }
        },

        {
            tag: "attribute", id: 0x001e, name: "TxBeaconCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The TxBeaconCount attribute SHALL indicate the total number of unique " +
                     "MAC Beacon frame transmission requests. The TxBeaconCount attribute " +
                     "SHALL only be incremented by 1 for each MAC Beacon frame transmission " +
                     "request regardless of the amount of CCA failures, CSMA-CA attempts, or" +
                     " retransmissions",
            xref: { document: "core", section: "11.13.6.31" }
        },

        {
            tag: "attribute", id: 0x001f, name: "TxBeaconRequestCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The TxBeaconRequestCount attribute SHALL indicate the total number of " +
                     "unique MAC Beacon Request frame transmission requests. The " +
                     "TxBeaconRequestCount attribute SHALL only be incremented by 1 for each" +
                     " MAC Beacon Request frame transmission request regardless of the " +
                     "amount of CCA failures, CSMA-CA attempts, or retransmissions. This " +
                     "value SHALL only be reset upon a Node reboot",
            xref: { document: "core", section: "11.13.6.32" }
        },

        {
            tag: "attribute", id: 0x0020, name: "TxOtherCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The TxOtherCount attribute SHALL indicate the total number of unique " +
                     "MAC frame transmission requests that are not counted by any other " +
                     "attribute. The TxOtherCount attribute SHALL only be incremented by 1 " +
                     "for each MAC frame transmission request regardless of the amount of " +
                     "CCA failures, CSMA-CA attempts, or retransmissions. This value SHALL " +
                     "only be reset upon a Node reboot",
            xref: { document: "core", section: "11.13.6.33" }
        },

        {
            tag: "attribute", id: 0x0021, name: "TxRetryCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The TxRetryCount attribute SHALL indicate the total number of MAC " +
                     "retransmission attempts. The TxRetryCount attribute SHALL only be " +
                     "incremented by 1 for each retransmission attempt that may be triggered" +
                     " by lack of acknowledgement, CSMA/CA failure, or other type of " +
                     "transmission error. This value SHALL only be reset upon a Node reboot",
            xref: { document: "core", section: "11.13.6.34" }
        },

        {
            tag: "attribute", id: 0x0022, name: "TxDirectMaxRetryExpiryCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The TxDirectMaxRetryExpiryCount attribute SHALL indicate the total " +
                     "number of unique MAC transmission packets that meet maximal retry " +
                     "limit for direct packets. The TxDirectMaxRetryExpiryCount attribute " +
                     "SHALL only be incremented by 1 for each unique MAC transmission " +
                     "packets that meets the maximal retry limit for direct packets. This " +
                     "value SHALL only be reset upon a Node reboot",
            xref: { document: "core", section: "11.13.6.35" }
        },

        {
            tag: "attribute", id: 0x0023, name: "TxIndirectMaxRetryExpiryCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The TxIndirectMaxRetryExpiryCount attribute SHALL indicate the total " +
                     "number of unique MAC transmission packets that meet maximal retry " +
                     "limit for indirect packets. The TxIndirectMaxRetryExpiryCount " +
                     "attribute SHALL only be incremented by 1 for each unique MAC " +
                     "transmission packets that meets the maximal retry limit for indirect " +
                     "packets. This value SHALL only be reset upon a Node reboot",
            xref: { document: "core", section: "11.13.6.36" }
        },

        {
            tag: "attribute", id: 0x0024, name: "TxErrCcaCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The TxErrCcaCount attribute SHALL indicate the total number of CCA " +
                     "failures. The TxErrCcaCount attribute SHALL only be incremented by 1 " +
                     "for each instance of a CCA failure. This value SHALL only be reset " +
                     "upon a Node reboot",
            xref: { document: "core", section: "11.13.6.37" }
        },

        {
            tag: "attribute", id: 0x0025, name: "TxErrAbortCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The TxErrAbortCount attribute SHALL indicate the total number of " +
                     "unique MAC transmission request failures caused by an abort error. The" +
                     " TxErrAbortCount attribute SHALL only be incremented by 1 for each " +
                     "unique MAC transmission request failure caused by an abort error",
            xref: { document: "core", section: "11.13.6.38" }
        },

        {
            tag: "attribute", id: 0x0026, name: "TxErrBusyChannelCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The TxErrBusyChannelCount attribute SHALL indicate the total number of" +
                     " unique MAC transmission request failures caused by an error as the " +
                     "result of a busy channel (a CSMA/CA fail). The TxErrBusyChannelCount " +
                     "attribute SHALL only be incremented by 1 for each unique MAC " +
                     "transmission request failure caused by a busy channel such as a CSMA/" +
                     "CA failure",
            xref: { document: "core", section: "11.13.6.39" }
        },

        {
            tag: "attribute", id: 0x0027, name: "RxTotalCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The RxTotalCount attribute SHALL indicate the total number of received" +
                     " unique MAC frames. This value SHALL only be reset upon a Node reboot",
            xref: { document: "core", section: "11.13.6.40" }
        },

        {
            tag: "attribute", id: 0x0028, name: "RxUnicastCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The RxUnicastCount attribute SHALL indicate the total number of " +
                     "received unique unicast MAC frames. This value SHALL only be reset " +
                     "upon a Node reboot",
            xref: { document: "core", section: "11.13.6.41" }
        },

        {
            tag: "attribute", id: 0x0029, name: "RxBroadcastCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The RxBroadcastCount attribute SHALL indicate the total number of " +
                     "received unique broadcast MAC frames. This value SHALL only be reset " +
                     "upon a Node reboot",
            xref: { document: "core", section: "11.13.6.42" }
        },

        {
            tag: "attribute", id: 0x002a, name: "RxDataCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The RxDataCount attribute SHALL indicate the total number of received " +
                     "unique MAC Data frames. This value SHALL only be reset upon a Node " +
                     "reboot",
            xref: { document: "core", section: "11.13.6.43" }
        },

        {
            tag: "attribute", id: 0x002b, name: "RxDataPollCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The RxDataPollCount attribute SHALL indicate the total number of " +
                     "received unique MAC Data Poll frames. This value SHALL only be reset " +
                     "upon a Node reboot",
            xref: { document: "core", section: "11.13.6.44" }
        },

        {
            tag: "attribute", id: 0x002c, name: "RxBeaconCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The RxBeaconCount attribute SHALL indicate the total number of " +
                     "received unique MAC Beacon frames. This value SHALL only be reset upon" +
                     " a Node reboot",
            xref: { document: "core", section: "11.13.6.45" }
        },

        {
            tag: "attribute", id: 0x002d, name: "RxBeaconRequestCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The RxBeaconRequestCount attribute SHALL indicate the total number of " +
                     "received unique MAC Beacon Request frames. This value SHALL only be " +
                     "reset upon a Node reboot",
            xref: { document: "core", section: "11.13.6.46" }
        },

        {
            tag: "attribute", id: 0x002e, name: "RxOtherCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The RxOtherCount attribute SHALL indicate the total number of received" +
                     " unique MAC frame requests that are not counted by any other attribute" +
                     ". This value SHALL only be reset upon a Node reboot",
            xref: { document: "core", section: "11.13.6.47" }
        },

        {
            tag: "attribute", id: 0x002f, name: "RxAddressFilteredCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The RxAddressFilteredCount attribute SHALL indicate the total number " +
                     "of received unique MAC frame requests that have been dropped as a " +
                     "result of MAC filtering. This value SHALL only be reset upon a Node " +
                     "reboot",
            xref: { document: "core", section: "11.13.6.48" }
        },

        {
            tag: "attribute", id: 0x0030, name: "RxDestAddrFilteredCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The RxDestAddrFilteredCount attribute SHALL indicate the total number " +
                     "of received unique MAC frame requests that have been dropped as a " +
                     "result of a destination address check. This value SHALL only be reset " +
                     "upon a Node reboot",
            xref: { document: "core", section: "11.13.6.49" }
        },

        {
            tag: "attribute", id: 0x0031, name: "RxDuplicatedCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The RxDuplicatedCount attribute SHALL indicate the total number of " +
                     "received MAC frame requests that have been dropped as a result of " +
                     "being a duplicate of a previously received MAC frame request. This " +
                     "value SHALL only be reset upon a Node reboot",
            xref: { document: "core", section: "11.13.6.50" }
        },

        {
            tag: "attribute", id: 0x0032, name: "RxErrNoFrameCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The RxErrNoFrameCount attribute SHALL indicate the total number of " +
                     "received unique MAC frame requests that have been dropped as a result " +
                     "of missing or malformed frame contents. This value SHALL only be reset" +
                     " upon a Node reboot",
            xref: { document: "core", section: "11.13.6.51" }
        },

        {
            tag: "attribute", id: 0x0033, name: "RxErrUnknownNeighborCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The RxErrUnknownNeighborCount attribute SHALL indicate the total " +
                     "number of received unique MAC frame requests that have been dropped as" +
                     " a result of originating from an unknown neighbor device. This value " +
                     "SHALL only be reset upon a Node reboot",
            xref: { document: "core", section: "11.13.6.52" }
        },

        {
            tag: "attribute", id: 0x0034, name: "RxErrInvalidScrAddrCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The RxErrInvalidScrAddrCount attribute SHALL indicate the total number" +
                     " of received unique MAC frame requests that have been dropped as a " +
                     "result of containing an invalid source address. This value SHALL only " +
                     "be reset upon a Node reboot",
            xref: { document: "core", section: "11.13.6.53" }
        },

        {
            tag: "attribute", id: 0x0035, name: "RxErrSecCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The RxErrSecCount attribute SHALL indicate the total number of " +
                     "received unique MAC frame requests that have been dropped as a result " +
                     "of an error with the security of the received frame. This value SHALL " +
                     "only be reset upon a Node reboot",
            xref: { document: "core", section: "11.13.6.54" }
        },

        {
            tag: "attribute", id: 0x0036, name: "RxErrFcsCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The RxErrFcsCount attribute SHALL indicate the total number of " +
                     "received unique MAC frame requests that have been dropped as a result " +
                     "of an error with the FCS of the received frame. This value SHALL only " +
                     "be reset upon a Node reboot",
            xref: { document: "core", section: "11.13.6.55" }
        },

        {
            tag: "attribute", id: 0x0037, name: "RxErrOtherCount",
            access: "R V", conformance: "[M, ACCNT]", default: undefined, quality: "C", type: "uint32",
            details: "The RxErrOtherCount attribute SHALL indicate the total number of " +
                     "received unique MAC frame requests that have been dropped as a result " +
                     "of an error that is not counted by any other attribute. This value " +
                     "SHALL only be reset upon a Node reboot",
            xref: { document: "core", section: "11.13.6.56" }
        },

        {
            tag: "attribute", id: 0x0038, name: "ActiveTimestamp",
            access: "R V", conformance: "O", default: undefined, quality: "X", type: "uint64",
            details: "This attribute SHALL be null when there is no dataset configured",
            xref: { document: "core", section: "11.13.6.57" }
        },

        {
            tag: "attribute", id: 0x0039, name: "PendingTimestamp",
            access: "R V", conformance: "O", default: undefined, quality: "X", type: "uint64",
            details: "This attribute SHALL be null when there is no dataset configured",
            xref: { document: "core", section: "11.13.6.58" }
        },

        {
            tag: "attribute", id: 0x003a, name: "Delay",
            access: "R V", conformance: "O", default: undefined, quality: "X", type: "uint32",
            details: "This attribute SHALL be null when there is no dataset configured",
            xref: { document: "core", section: "11.13.6.59" }
        },

        {
            tag: "attribute", id: 0x003b, name: "SecurityPolicy",
            access: "R V", conformance: "M", default: undefined, quality: "X", type: "SecurityPolicy",
            details: "The SecurityPolicy attribute indicates the current security policies " +
                     "for the Thread partition to which a Node is connected. This attribute " +
                     "SHALL be null when there is no dataset configured",
            xref: { document: "core", section: "11.13.6.60" }
        },

        {
            tag: "attribute", id: 0x003c, name: "ChannelPage0Mask",
            access: "R V", conformance: "M", constraint: "4", default: undefined, quality: "X", type: "octstr",
            details: "The ChannelPage0Mask attribute indicates the channels within channel " +
                     "page 0, in the 2.4GHz ISM band. The channels are represented in most " +
                     "significant bit order, with bit value 1 meaning selected, bit value 0 " +
                     "meaning unselected. For example, the most significant bit of the left-" +
                     "most byte indicates channel 0. If channel 0 and channel 10 are " +
                     "selected, the mask would be: 80 20 00 00. This attribute SHALL be null" +
                     " when there is no dataset configured",
            xref: { document: "core", section: "11.13.6.61" }
        },

        {
            tag: "attribute", id: 0x003d, name: "OperationalDatasetComponents",
            access: "R V", conformance: "M", default: undefined, quality: "X", type: "OperationalDatasetComponents",
            details: "The OperationalDatasetComponents attribute is a collection of flags to" +
                     " indicate the presence of various operationally acquired values",
            xref: { document: "core", section: "11.13.6.62" }
        },

        {
            tag: "attribute", id: 0x003e, name: "ActiveNetworkFaults",
            access: "R V", conformance: "M", constraint: "max 4", default: undefined, type: "list",
            details: "The ActiveNetworkFaults attribute SHALL indicate the set of faults " +
                     "currently detected by the Node",
            xref: { document: "core", section: "11.13.6.63" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "NetworkFaultEnum"
                }
            ]
        },

        {
            tag: "event", id: 0x0000, name: "ConnectionStatus",
            access: "V", conformance: "O", priority: "info",
            details: "The ConnectionStatus Event SHALL indicate that a Node’s connection " +
                     "status to a Thread network has changed",
            xref: { document: "core", section: "11.13.8.2" },
            children: [
                {
                    tag: "datatype", name: "ConnectionStatus",
                    conformance: "M", type: "ConnectionStatusEnum"
                }
            ]
        },

        {
            tag: "event", id: 0x0001, name: "NetworkFaultChange",
            access: "V", conformance: "O", priority: "info",
            details: "The NetworkFaultChange Event SHALL indicate a change in the set of " +
                     "network faults currently detected by the Node",
            xref: { document: "core", section: "11.13.8.1" },
            children: [
                {
                    tag: "datatype", name: "Current",
                    conformance: "M", type: "NetworkFault"
                },

                {
                    tag: "datatype", name: "Previous",
                    conformance: "M", type: "NetworkFault"
                }
            ]
        },

        {
            tag: "command", id: 0x0000, name: "ResetCounts",
            access: "M", conformance: "ERRCNT", direction: "request", response: "status",
            details: "Reception of this command SHALL reset the following attributes to 0",
            xref: { document: "core", section: "11.13.7.1" }
        },

        {
            tag: "datatype", name: "NetworkFaultEnum",
            conformance: "M", type: "enum8",
            details: "This data type is derived from enum8",
            xref: { document: "core", section: "11.13.5.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Unspecified",
                    conformance: "M",
                    xref: { document: "core", section: "11.13.5.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "LinkDown",
                    conformance: "M",
                    xref: { document: "core", section: "11.13.5.1" }
                },

                {
                    tag: "datatype", id: 0x0002, name: "HardwareFailure",
                    conformance: "M",
                    xref: { document: "core", section: "11.13.5.1" }
                },

                {
                    tag: "datatype", id: 0x0003, name: "NetworkJammed",
                    conformance: "M",
                    xref: { document: "core", section: "11.13.5.1" }
                },

                {
                    tag: "datatype", id: 0x0004, name: "MleCounts",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "MacCounts",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "NetworkFault",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Unspecified",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "LinkDown",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "HardwareFailure",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "NetworkJammed",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "RoutingRole",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Unspecified",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Unassigned",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "SleepyEndDevice",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "EndDevice",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Reed",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "Router",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0006, name: "Leader",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "ConnectionStatusEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Connected",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "NotConnected",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "NeighborTable",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "ExtAddress",
                    conformance: "M", type: "uint64"
                },

                {
                    tag: "datatype", name: "Age",
                    conformance: "M", type: "uint32"
                },

                {
                    tag: "datatype", name: "Rloc16",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "LinkFrameCounter",
                    conformance: "M", type: "uint32"
                },

                {
                    tag: "datatype", name: "MleFrameCounter",
                    conformance: "M", type: "uint32"
                },

                {
                    tag: "datatype", name: "Lqi",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "AverageRssi",
                    conformance: "M", quality: "X", type: "int8"
                },

                {
                    tag: "datatype", name: "LastRssi",
                    conformance: "M", quality: "X", type: "int8"
                },

                {
                    tag: "datatype", name: "FrameErrorRate",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "MessageErrorRate",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "RxOnWhenIdle",
                    conformance: "M", type: "bool"
                },

                {
                    tag: "datatype", name: "FullThreadDevice",
                    conformance: "M", type: "bool"
                },

                {
                    tag: "datatype", name: "FullNetworkData",
                    conformance: "M", type: "bool"
                },

                {
                    tag: "datatype", name: "IsChild",
                    conformance: "M", type: "bool"
                }
            ]
        },

        {
            tag: "datatype", name: "RouteTable",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "ExtAddress",
                    conformance: "M", type: "uint64"
                },

                {
                    tag: "datatype", name: "Rloc16",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "RouterId",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "NextHop",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "PathCost",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "LqiIn",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "LqiOut",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "Age",
                    conformance: "M", type: "uint8"
                },

                {
                    tag: "datatype", name: "Allocated",
                    conformance: "M", type: "bool"
                },

                {
                    tag: "datatype", name: "LinkEstablished",
                    conformance: "M", type: "bool"
                }
            ]
        },

        {
            tag: "datatype", name: "SecurityPolicy",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "RotationTime",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "Flags",
                    conformance: "M", type: "uint16"
                }
            ]
        },

        {
            tag: "datatype", name: "OperationalDatasetComponents",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "ActiveTimestampPresent",
                    conformance: "M", type: "bool"
                },

                {
                    tag: "datatype", name: "PendingTimestampPresent",
                    conformance: "M", type: "bool"
                },

                {
                    tag: "datatype", name: "MasterKeyPresent",
                    conformance: "M", type: "bool"
                },

                {
                    tag: "datatype", name: "NetworkNamePresent",
                    conformance: "M", type: "bool"
                },

                {
                    tag: "datatype", name: "ExtendedPanIdPresent",
                    conformance: "M", type: "bool"
                },

                {
                    tag: "datatype", name: "MeshLocalPrefixPresent",
                    conformance: "M", type: "bool"
                },

                {
                    tag: "datatype", name: "DelayPresent",
                    conformance: "M", type: "bool"
                },

                {
                    tag: "datatype", name: "PanIdPresent",
                    conformance: "M", type: "bool"
                },

                {
                    tag: "datatype", name: "ChannelPresent",
                    conformance: "M", type: "bool"
                },

                {
                    tag: "datatype", name: "PskcPresent",
                    conformance: "M", type: "bool"
                },

                {
                    tag: "datatype", name: "SecurityPolicyPresent",
                    conformance: "M", type: "bool"
                },

                {
                    tag: "datatype", name: "ChannelMaskPresent",
                    conformance: "M", type: "bool"
                }
            ]
        }
    ]
});
