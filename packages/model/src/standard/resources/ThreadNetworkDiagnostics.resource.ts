/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "ThreadNetworkDiagnostics", tag: "cluster",
    classification: "node", pics: "DGTHREAD",
    details: "The Thread Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics " +
        "that may be used by a Node to assist a user or Administrator in diagnosing potential problems. The " +
        "Thread Network Diagnostics Cluster attempts to centralize all metrics that are relevant to a " +
        "potential Thread radio running on a Node.",
    xref: "core§11.14",

    children: [
        {
            name: "FeatureMap", tag: "attribute",
            xref: "core§11.14.4",

            children: [
                {
                    name: "PKTCNT", tag: "field",
                    details: "Server supports the counts for the number of received and transmitted packets on the Thread " +
                        "interface."
                },
                {
                    name: "ERRCNT", tag: "field",
                    details: "Server supports the counts for the number of errors that have occurred during the reception and " +
                        "transmission of packets on the Thread interface."
                },
                {
                    name: "MLECNT", tag: "field",
                    details: "Server supports the counts for various MLE layer happenings."
                },
                {
                    name: "MACCNT", tag: "field",
                    details: "Server supports the counts for various MAC layer happenings."
                }
            ]
        },

        {
            name: "Channel", tag: "attribute",
            details: "The Channel attribute shall indicate the 802.15.4 channel number configured on the Node’s Thread " +
                "interface (that is, the Active Operational Dataset’s current Channel value). A value of null shall " +
                "indicate that the Thread interface is not currently configured or operational.",
            xref: "core§11.14.6.1"
        },

        {
            name: "RoutingRole", tag: "attribute",
            details: "The RoutingRole attribute shall indicate the role that this Node has within the routing of messages " +
                "through the Thread network, as defined by RoutingRoleEnum. The potential roles are defined" +
                "\n" +
                "in the following table. A value of null shall indicate that the Thread interface is not currently " +
                "configured or operational.",
            xref: "core§11.14.6.2"
        },

        {
            name: "NetworkName", tag: "attribute",
            details: "The NetworkName attribute shall indicate a human-readable (displayable) name for the Thread network " +
                "that the Node has been configured to join to. A value of null shall indicate that the Thread " +
                "interface is not currently configured or operational.",
            xref: "core§11.14.6.3"
        },

        {
            name: "PanId", tag: "attribute",
            details: "The PanId attribute shall indicate the 16-bit identifier of the Node on the Thread network. A value " +
                "of null shall indicate that the Thread interface is not currently configured or operational.",
            xref: "core§11.14.6.4"
        },

        {
            name: "ExtendedPanId", tag: "attribute",
            details: "The ExtendedPanId attribute shall indicate the unique 64-bit identifier of the Node on the Thread " +
                "network. A value of null shall indicate that the Thread interface is not currently configured or " +
                "operational.",
            xref: "core§11.14.6.5"
        },

        {
            name: "MeshLocalPrefix", tag: "attribute",
            details: "The MeshLocalPrefix attribute shall indicate the mesh-local IPv6 prefix for the Thread network that " +
                "the Node has been configured to join to. A value of null shall indicate that the Thread interface is " +
                "not currently configured or operational.",
            xref: "core§11.14.6.6"
        },

        {
            name: "OverrunCount", tag: "attribute",
            details: "The OverrunCount attribute shall indicate the number of packets dropped either at ingress or egress, " +
                "due to lack of buffer memory to retain all packets on the ethernet network interface. The " +
                "OverrunCount attribute shall be reset to 0 upon a reboot of the Node.",
            xref: "core§11.14.6.7"
        },

        {
            name: "NeighborTable", tag: "attribute",
            details: "The NeighborTable attribute shall indicate the current list of Nodes that comprise the neighbor " +
                "table on the Node.",
            xref: "core§11.14.6.8"
        },

        {
            name: "RouteTable", tag: "attribute",
            details: "The RouteTable attribute shall indicate the current list of router capable Nodes for which routes " +
                "have been established.",
            xref: "core§11.14.6.9"
        },

        {
            name: "PartitionId", tag: "attribute",
            details: "The PartitionId attribute shall indicate the Thread Leader Partition Id for the Thread network to " +
                "which the Node is joined. Null if not attached to a Thread network.",
            xref: "core§11.14.6.10"
        },

        {
            name: "Weighting", tag: "attribute",
            details: "The Weighting attribute shall indicate the Thread Leader Weight used when operating in the Leader " +
                "role. Null if not attached to a Thread network.",
            xref: "core§11.14.6.11"
        },

        {
            name: "DataVersion", tag: "attribute",
            details: "The DataVersion attribute shall indicate the full Network Data Version the Node currently uses. Null " +
                "if not attached to a Thread network.",
            xref: "core§11.14.6.12"
        },

        {
            name: "StableDataVersion", tag: "attribute",
            details: "The StableDataVersion attribute shall indicate the Network Data Version for the stable subset of " +
                "data the Node currently uses. Null if not attached to a Thread network.",
            xref: "core§11.14.6.13"
        },

        {
            name: "LeaderRouterId", tag: "attribute",
            details: "The LeaderRouterId attribute shall indicate the 8-bit LeaderRouterId the Node shall attempt to " +
                "utilize upon becoming a router or leader on the Thread network. Null if not attached to a Thread " +
                "network.",
            xref: "core§11.14.6.14"
        },

        {
            name: "DetachedRoleCount", tag: "attribute",
            details: "The DetachedRoleCount attribute shall indicate the number of times the Node entered the " +
                "OT_DEVICE_ROLE_DETACHED role as specified within the Thread specification. This value shall only be " +
                "reset upon a Node reboot.",
            xref: "core§11.14.6.15"
        },

        {
            name: "ChildRoleCount", tag: "attribute",
            details: "The ChildRoleCount attribute shall indicate the number of times the Node entered the " +
                "OT_DEVICE_ROLE_CHILD role as specified within the Thread specification. This value shall only be " +
                "reset upon a Node reboot.",
            xref: "core§11.14.6.16"
        },

        {
            name: "RouterRoleCount", tag: "attribute",
            details: "The RouterRoleCount attribute shall indicate the number of times the Node entered the " +
                "OT_DEVICE_ROLE_ROUTER role as specified within the Thread specification. This value shall only be " +
                "reset upon a Node reboot.",
            xref: "core§11.14.6.17"
        },

        {
            name: "LeaderRoleCount", tag: "attribute",
            details: "The LeaderRoleCount attribute shall indicate the number of times the Node entered the " +
                "OT_DEVICE_ROLE_LEADER role as specified within the Thread specification. This value shall only be " +
                "reset upon a Node reboot.",
            xref: "core§11.14.6.18"
        },

        {
            name: "AttachAttemptCount", tag: "attribute",
            details: "The AttachAttemptCount attribute shall indicate the number of attempts that have been made to attach " +
                "to a Thread network while the Node was detached from all Thread networks. This value shall only be " +
                "reset upon a Node reboot.",
            xref: "core§11.14.6.19"
        },

        {
            name: "PartitionIdChangeCount", tag: "attribute",
            details: "The PartitionIdChangeCount attribute shall indicate the number of times that the Thread network that " +
                "the Node is connected to has changed its Partition ID. This value shall only be reset upon a Node " +
                "reboot.",
            xref: "core§11.14.6.20"
        },

        {
            name: "BetterPartitionAttachAttemptCount", tag: "attribute",
            details: "The BetterPartitionAttachAttemptCount attribute shall indicate the number of times a Node has " +
                "attempted to attach to a different Thread partition that it has determined is better than the " +
                "partition it is currently attached to. This value shall only be reset upon a Node reboot.",
            xref: "core§11.14.6.21"
        },

        {
            name: "ParentChangeCount", tag: "attribute",
            details: "The ParentChangeCount attribute shall indicate the number of times a Node has changed its parent. " +
                "This value shall only be reset upon a Node reboot.",
            xref: "core§11.14.6.22"
        },

        {
            name: "TxTotalCount", tag: "attribute",
            details: "The TxTotalCount attribute shall indicate the total number of unique MAC frame transmission " +
                "requests. The TxTotalCount attribute shall only be incremented by 1 for each MAC transmission " +
                "request regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions. This value " +
                "shall only be reset upon a Node reboot.",
            xref: "core§11.14.6.23"
        },

        {
            name: "TxUnicastCount", tag: "attribute",
            details: "The TxUnicastCount attribute shall indicate the total number of unique unicast MAC frame " +
                "transmission requests. The TxUnicastCount attribute shall only be incremented by 1 for each unicast " +
                "MAC transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or " +
                "retransmissions. This value shall only be reset upon a Node reboot.",
            xref: "core§11.14.6.24"
        },

        {
            name: "TxBroadcastCount", tag: "attribute",
            details: "The TxBroadcastCount attribute shall indicate the total number of unique broadcast MAC frame " +
                "transmission requests. The TxBroadcastCount attribute shall only be incremented by 1 for each " +
                "broadcast MAC transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or " +
                "retransmissions. This value shall only be reset upon a Node reboot.",
            xref: "core§11.14.6.25"
        },

        {
            name: "TxAckRequestedCount", tag: "attribute",
            details: "The TxAckRequestedCount attribute shall indicate the total number of unique MAC frame transmission " +
                "requests with requested acknowledgment. The TxAckRequestedCount attribute shall only be incremented " +
                "by 1 for each MAC transmission request with requested acknowledgment regardless of the amount of CCA " +
                "failures, CSMA-CA attempts, or retransmissions. This value shall only be reset upon a Node reboot.",
            xref: "core§11.14.6.26"
        },

        {
            name: "TxAckedCount", tag: "attribute",
            details: "The TxAckedCount attribute shall indicate the total number of unique MAC frame transmission requests " +
                "that were acked. The TxAckedCount attribute shall only be incremented by 1 for each MAC transmission " +
                "request that is acked regardless of the amount of CCA failures, CSMA-CA attempts, or " +
                "retransmissions. This value shall only be reset upon a Node reboot.",
            xref: "core§11.14.6.27"
        },

        {
            name: "TxNoAckRequestedCount", tag: "attribute",
            details: "The TxNoAckRequestedCount attribute shall indicate the total number of unique MAC frame" +
                "\n" +
                "transmission requests without requested acknowledgment. The TxNoAckRequestedCount attribute shall " +
                "only be incremented by 1 for each MAC transmission request that is does not request acknowledgement " +
                "regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions.",
            xref: "core§11.14.6.28"
        },

        {
            name: "TxDataCount", tag: "attribute",
            details: "The TxDataCount attribute shall indicate the total number of unique MAC Data frame transmission " +
                "requests. The TxDataCount attribute shall only be incremented by 1 for each MAC Data frame " +
                "transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions. " +
                "This value shall only be reset upon a Node reboot.",
            xref: "core§11.14.6.29"
        },

        {
            name: "TxDataPollCount", tag: "attribute",
            details: "The TxDataPollCount attribute shall indicate the total number of unique MAC Data Poll frame " +
                "transmission requests. The TxDataPollCount attribute shall only be incremented by 1 for each MAC " +
                "Data Poll frame transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or " +
                "retransmissions. This value shall only be reset upon a Node reboot.",
            xref: "core§11.14.6.30"
        },

        {
            name: "TxBeaconCount", tag: "attribute",
            details: "The TxBeaconCount attribute shall indicate the total number of unique MAC Beacon frame transmission " +
                "requests. The TxBeaconCount attribute shall only be incremented by 1 for each MAC Beacon frame " +
                "transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions.",
            xref: "core§11.14.6.31"
        },

        {
            name: "TxBeaconRequestCount", tag: "attribute",
            details: "The TxBeaconRequestCount attribute shall indicate the total number of unique MAC Beacon Request " +
                "frame transmission requests. The TxBeaconRequestCount attribute shall only be incremented by 1 for " +
                "each MAC Beacon Request frame transmission request regardless of the amount of CCA failures, CSMA-CA " +
                "attempts, or retransmissions. This value shall only be reset upon a Node reboot.",
            xref: "core§11.14.6.32"
        },

        {
            name: "TxOtherCount", tag: "attribute",
            details: "The TxOtherCount attribute shall indicate the total number of unique MAC frame transmission requests " +
                "that are not counted by any other attribute. The TxOtherCount attribute shall only be incremented by " +
                "1 for each MAC frame transmission request regardless of the amount of CCA failures, CSMA-CA " +
                "attempts, or retransmissions. This value shall only be reset upon a Node reboot.",
            xref: "core§11.14.6.33"
        },

        {
            name: "TxRetryCount", tag: "attribute",
            details: "The TxRetryCount attribute shall indicate the total number of MAC retransmission attempts. The " +
                "TxRetryCount attribute shall only be incremented by 1 for each retransmission attempt that may be " +
                "triggered by lack of acknowledgement, CSMA/CA failure, or other type of transmission error. This " +
                "value shall only be reset upon a Node reboot.",
            xref: "core§11.14.6.34"
        },

        {
            name: "TxDirectMaxRetryExpiryCount", tag: "attribute",

            details: "The TxDirectMaxRetryExpiryCount attribute shall indicate the total number of unique MAC" +
                "\n" +
                "transmission packets that meet maximal retry limit for direct packets. The " +
                "TxDirectMaxRetryExpiryCount attribute shall only be incremented by 1 for each unique MAC " +
                "transmission packets that meets the maximal retry limit for direct packets. This value shall only be " +
                "reset upon a Node reboot.",

            xref: "core§11.14.6.35"
        },

        {
            name: "TxIndirectMaxRetryExpiryCount", tag: "attribute",
            details: "The TxIndirectMaxRetryExpiryCount attribute shall indicate the total number of unique MAC " +
                "transmission packets that meet maximal retry limit for indirect packets. The " +
                "TxIndirectMaxRetryExpiryCount attribute shall only be incremented by 1 for each unique MAC " +
                "transmission packets that meets the maximal retry limit for indirect packets. This value shall only " +
                "be reset upon a Node reboot.",
            xref: "core§11.14.6.36"
        },

        {
            name: "TxErrCcaCount", tag: "attribute",
            details: "The TxErrCcaCount attribute shall indicate the total number of CCA failures. The TxErrCcaCount " +
                "attribute shall only be incremented by 1 for each instance of a CCA failure. This value shall only " +
                "be reset upon a Node reboot.",
            xref: "core§11.14.6.37"
        },

        {
            name: "TxErrAbortCount", tag: "attribute",
            details: "The TxErrAbortCount attribute shall indicate the total number of unique MAC transmission request " +
                "failures caused by an abort error. The TxErrAbortCount attribute shall only be incremented by 1 for " +
                "each unique MAC transmission request failure caused by an abort error.",
            xref: "core§11.14.6.38"
        },

        {
            name: "TxErrBusyChannelCount", tag: "attribute",
            details: "The TxErrBusyChannelCount attribute shall indicate the total number of unique MAC transmission " +
                "request failures caused by an error as the result of a busy channel (a CSMA/CA fail). The " +
                "TxErrBusyChannelCount attribute shall only be incremented by 1 for each unique MAC transmission " +
                "request failure caused by a busy channel such as a CSMA/CA failure.",
            xref: "core§11.14.6.39"
        },

        {
            name: "RxTotalCount", tag: "attribute",
            details: "The RxTotalCount attribute shall indicate the total number of received unique MAC frames. This value " +
                "shall only be reset upon a Node reboot.",
            xref: "core§11.14.6.40"
        },

        {
            name: "RxUnicastCount", tag: "attribute",
            details: "The RxUnicastCount attribute shall indicate the total number of received unique unicast MAC frames. " +
                "This value shall only be reset upon a Node reboot.",
            xref: "core§11.14.6.41"
        },

        {
            name: "RxBroadcastCount", tag: "attribute",
            details: "The RxBroadcastCount attribute shall indicate the total number of received unique broadcast MAC " +
                "frames. This value shall only be reset upon a Node reboot.",
            xref: "core§11.14.6.42"
        },

        {
            name: "RxDataCount", tag: "attribute",
            details: "The RxDataCount attribute shall indicate the total number of received unique MAC Data frames." +
                "\n" +
                "This value shall only be reset upon a Node reboot.",
            xref: "core§11.14.6.43"
        },

        {
            name: "RxDataPollCount", tag: "attribute",
            details: "The RxDataPollCount attribute shall indicate the total number of received unique MAC Data Poll " +
                "frames. This value shall only be reset upon a Node reboot.",
            xref: "core§11.14.6.44"
        },

        {
            name: "RxBeaconCount", tag: "attribute",
            details: "The RxBeaconCount attribute shall indicate the total number of received unique MAC Beacon frames. " +
                "This value shall only be reset upon a Node reboot.",
            xref: "core§11.14.6.45"
        },

        {
            name: "RxBeaconRequestCount", tag: "attribute",
            details: "The RxBeaconRequestCount attribute shall indicate the total number of received unique MAC Beacon " +
                "Request frames. This value shall only be reset upon a Node reboot.",
            xref: "core§11.14.6.46"
        },

        {
            name: "RxOtherCount", tag: "attribute",
            details: "The RxOtherCount attribute shall indicate the total number of received unique MAC frame requests " +
                "that are not counted by any other attribute. This value shall only be reset upon a Node reboot.",
            xref: "core§11.14.6.47"
        },

        {
            name: "RxAddressFilteredCount", tag: "attribute",
            details: "The RxAddressFilteredCount attribute shall indicate the total number of received unique MAC frame " +
                "requests that have been dropped as a result of MAC filtering. This value shall only be reset upon a " +
                "Node reboot.",
            xref: "core§11.14.6.48"
        },

        {
            name: "RxDestAddrFilteredCount", tag: "attribute",
            details: "The RxDestAddrFilteredCount attribute shall indicate the total number of received unique MAC frame " +
                "requests that have been dropped as a result of a destination address check. This value shall only be " +
                "reset upon a Node reboot.",
            xref: "core§11.14.6.49"
        },

        {
            name: "RxDuplicatedCount", tag: "attribute",
            details: "The RxDuplicatedCount attribute shall indicate the total number of received MAC frame requests that " +
                "have been dropped as a result of being a duplicate of a previously received MAC frame request. This " +
                "value shall only be reset upon a Node reboot.",
            xref: "core§11.14.6.50"
        },

        {
            name: "RxErrNoFrameCount", tag: "attribute",
            details: "The RxErrNoFrameCount attribute shall indicate the total number of received unique MAC frame " +
                "requests that have been dropped as a result of missing or malformed frame contents. This value shall " +
                "only be reset upon a Node reboot.",
            xref: "core§11.14.6.51"
        },

        {
            name: "RxErrUnknownNeighborCount", tag: "attribute",
            details: "The RxErrUnknownNeighborCount attribute shall indicate the total number of received unique MAC frame " +
                "requests that have been dropped as a result of originating from an unknown neighbor" +
                "\n" +
                "device. This value shall only be reset upon a Node reboot.",
            xref: "core§11.14.6.52"
        },

        {
            name: "RxErrInvalidSrcAddrCount", tag: "attribute",
            details: "The RxErrInvalidSrcAddrCount attribute shall indicate the total number of received unique MAC frame " +
                "requests that have been dropped as a result of containing an invalid source address. This value " +
                "shall only be reset upon a Node reboot.",
            xref: "core§11.14.6.53"
        },

        {
            name: "RxErrSecCount", tag: "attribute",
            details: "The RxErrSecCount attribute shall indicate the total number of received unique MAC frame requests " +
                "that have been dropped as a result of an error with the security of the received frame. This value " +
                "shall only be reset upon a Node reboot.",
            xref: "core§11.14.6.54"
        },

        {
            name: "RxErrFcsCount", tag: "attribute",
            details: "The RxErrFcsCount attribute shall indicate the total number of received unique MAC frame requests " +
                "that have been dropped as a result of an error with the FCS of the received frame. This value shall " +
                "only be reset upon a Node reboot.",
            xref: "core§11.14.6.55"
        },

        {
            name: "RxErrOtherCount", tag: "attribute",
            details: "The RxErrOtherCount attribute shall indicate the total number of received unique MAC frame requests " +
                "that have been dropped as a result of an error that is not counted by any other attribute. This " +
                "value shall only be reset upon a Node reboot.",
            xref: "core§11.14.6.56"
        },

        {
            name: "ActiveTimestamp", tag: "attribute",
            details: "Null when there is no dataset configured.",
            xref: "core§11.14.6.57"
        },
        {
            name: "PendingTimestamp", tag: "attribute",
            details: "Null when there is no dataset configured.",
            xref: "core§11.14.6.58"
        },
        {
            name: "Delay", tag: "attribute",
            details: "Null when there is no dataset configured.",
            xref: "core§11.14.6.59"
        },

        {
            name: "SecurityPolicy", tag: "attribute",
            details: "The SecurityPolicy attribute indicates the current security policies for the Thread partition to " +
                "which a Node is connected. Null when there is no dataset configured.",
            xref: "core§11.14.6.60"
        },

        {
            name: "ChannelPage0Mask", tag: "attribute",
            details: "The ChannelPage0Mask attribute indicates the channels within channel page 0, in the 2.4GHz ISM band. " +
                "The channels are represented in most significant bit order, with bit value 1 meaning selected, bit " +
                "value 0 meaning unselected. For example, the most significant bit of the left-most byte indicates " +
                "channel 0. If channel 0 and channel 10 are selected, the mask would be: 80 20 00 00. Null when there " +
                "is no dataset configured.",
            xref: "core§11.14.6.61"
        },

        {
            name: "OperationalDatasetComponents", tag: "attribute",
            details: "The OperationalDatasetComponents attribute is a collection of flags to indicate the presence of " +
                "various operationally acquired values.",
            xref: "core§11.14.6.62"
        },

        { name: "ActiveNetworkFaultsList", tag: "attribute", xref: "core§11.14.6" },
        { name: "ExtAddress", tag: "attribute", xref: "core§11.14.6" },
        { name: "Rloc16", tag: "attribute", xref: "core§11.14.6" },

        {
            name: "ConnectionStatus", tag: "event",
            details: "The ConnectionStatus Event shall indicate that a Node’s connection status to a Thread network has " +
                "changed.",
            xref: "core§11.14.8.2"
        },

        {
            name: "NetworkFaultChange", tag: "event",
            details: "The NetworkFaultChange Event shall indicate a change in the set of network faults currently detected " +
                "by the Node.",
            xref: "core§11.14.8.1",

            children: [
                {
                    name: "Current", tag: "field",
                    details: "This field shall represent the set of faults currently detected, as per Section 11.14.5.1, " +
                        "“NetworkFaultEnum Type”.",
                    xref: "core§11.14.8.1.1"
                },

                {
                    name: "Previous", tag: "field",
                    details: "This field shall represent the set of faults detected prior to this change event, as per Section " +
                        "11.14.5.1, “NetworkFaultEnum Type”.",
                    xref: "core§11.14.8.1.2"
                }
            ]
        },

        {
            name: "ResetCounts", tag: "command",

            details: "Reception of this command shall reset the following attributes to 0:" +
                "\n" +
                "  • OverrunCount" +
                "\n" +
                "This command has no associated data. Upon completion, this command shall send a status code set to a " +
                "value of SUCCESS back to the initiator.",

            xref: "core§11.14.7.1"
        },

        {
            name: "NetworkFaultEnum", tag: "datatype",
            xref: "core§11.14.5.1",

            children: [
                { name: "Unspecified", tag: "field", description: "Indicates an unspecified fault." },
                { name: "LinkDown", tag: "field", description: "Indicates the Thread link is down." },
                {
                    name: "HardwareFailure", tag: "field",
                    description: "Indicates there has been Thread hardware failure."
                },
                { name: "NetworkJammed", tag: "field", description: "Indicates the Thread network is jammed." }
            ]
        },

        {
            name: "ConnectionStatusEnum", tag: "datatype",
            xref: "core§11.14.5.2",
            children: [
                { name: "Connected", tag: "field", description: "Node is connected" },
                { name: "NotConnected", tag: "field", description: "Node is not connected" }
            ]
        },

        {
            name: "RoutingRoleEnum", tag: "datatype",
            xref: "core§11.14.5.3",

            children: [
                { name: "Unspecified", tag: "field", description: "Unspecified routing role." },
                {
                    name: "Unassigned", tag: "field",
                    description: "The Node does not currently have a role as a result of the Thread interface not currently being configured or operational."
                },
                {
                    name: "SleepyEndDevice", tag: "field",
                    description: "The Node acts as a Sleepy End Device with RX-off-when-idle sleepy radio behavior."
                },
                {
                    name: "EndDevice", tag: "field",
                    description: "The Node acts as an End Device without RX- off-when-idle sleepy radio behavior."
                },
                { name: "Reed", tag: "field", description: "The Node acts as an Router Eligible End Device." },
                { name: "Router", tag: "field", description: "The Node acts as a Router Device." },
                { name: "Leader", tag: "field", description: "The Node acts as a Leader Device." }
            ]
        },

        {
            name: "NeighborTableStruct", tag: "datatype",
            xref: "core§11.14.5.4",

            children: [
                {
                    name: "ExtAddress", tag: "field",
                    details: "This field shall specify the IEEE 802.15.4 extended address for the neighboring Node.",
                    xref: "core§11.14.5.4.1"
                },

                {
                    name: "Age", tag: "field",
                    details: "This field shall specify the duration of time, in seconds, since a frame has been received from the " +
                        "neighboring Node.",
                    xref: "core§11.14.5.4.2"
                },

                {
                    name: "Rloc16", tag: "field",
                    details: "This field shall specify the RLOC16 of the neighboring Node.",
                    xref: "core§11.14.5.4.3"
                },

                {
                    name: "LinkFrameCounter", tag: "field",
                    details: "This field shall specify the number of link layer frames that have been received from the " +
                        "neighboring node. This field shall be reset to 0 upon a reboot of the Node.",
                    xref: "core§11.14.5.4.4"
                },

                {
                    name: "MleFrameCounter", tag: "field",
                    details: "This field shall specify the number of Mesh Link Establishment frames that have been received from " +
                        "the neighboring node. This field shall be reset to 0 upon a reboot of the Node.",
                    xref: "core§11.14.5.4.5"
                },

                {
                    name: "Lqi", tag: "field",
                    details: "This field shall specify the implementation specific mix of IEEE 802.15.4 PDU receive quality " +
                        "indicators, scaled from 0 to 255.",
                    xref: "core§11.14.5.4.6"
                },

                {
                    name: "AverageRssi", tag: "field",
                    details: "This field SHOULD specify the average RSSI across all received frames from the neighboring Node " +
                        "since the receiving Node’s last reboot. If there is no known received frames this field SHOULD have " +
                        "the value of null. This field shall have the units of dBm, having the range -128 dBm to 0 dBm.",
                    xref: "core§11.14.5.4.7"
                },

                {
                    name: "LastRssi", tag: "field",
                    details: "This field shall specify the RSSI of the most recently received frame from the neighboring Node. If " +
                        "there is no known last received frame the LastRssi field SHOULD have the value of null. This field " +
                        "shall have the units of dBm, having the range -128 dBm to 0 dBm.",
                    xref: "core§11.14.5.4.8"
                },

                {
                    name: "FrameErrorRate", tag: "field",
                    details: "This field shall specify the percentage of received frames from the neighboring Node that have " +
                        "resulted in errors.",
                    xref: "core§11.14.5.4.9"
                },

                {
                    name: "MessageErrorRate", tag: "field",
                    details: "This field shall specify the percentage of received messages from the neighboring Node that have " +
                        "resulted in errors.",
                    xref: "core§11.14.5.4.10"
                },

                {
                    name: "RxOnWhenIdle", tag: "field",
                    details: "This field shall specify if the neighboring Node is capable of receiving frames while the Node is in " +
                        "an idle state.",
                    xref: "core§11.14.5.4.11"
                },

                {
                    name: "FullThreadDevice", tag: "field",
                    details: "This field shall specify if the neighboring Node is a full Thread device.",
                    xref: "core§11.14.5.4.12"
                },

                {
                    name: "FullNetworkData", tag: "field",
                    details: "This field shall specify if the neighboring Node requires the full Network Data. If set to False, " +
                        "the neighboring Node only requires the stable Network Data.",
                    xref: "core§11.14.5.4.13"
                },

                {
                    name: "IsChild", tag: "field",
                    details: "This field shall specify if the neighboring Node is a direct child of the Node reporting the " +
                        "NeighborTable attribute.",
                    xref: "core§11.14.5.4.14"
                }
            ]
        },

        {
            name: "RouteTableStruct", tag: "datatype",
            xref: "core§11.14.5.5",

            children: [
                {
                    name: "ExtAddress", tag: "field",
                    details: "This field shall specify the IEEE 802.15.4 extended address for the Node for which this route table " +
                        "entry corresponds.",
                    xref: "core§11.14.5.5.1"
                },

                {
                    name: "Rloc16", tag: "field",
                    details: "This field shall specify the RLOC16 for the Node for which this route table entry corresponds.",
                    xref: "core§11.14.5.5.2"
                },
                {
                    name: "RouterId", tag: "field",
                    details: "This field shall specify the Router ID for the Node for which this route table entry corresponds.",
                    xref: "core§11.14.5.5.3"
                },

                {
                    name: "NextHop", tag: "field",
                    details: "This field shall specify the Router ID for the next hop in the route to the Node for which this " +
                        "route table entry corresponds.",
                    xref: "core§11.14.5.5.4"
                },

                {
                    name: "PathCost", tag: "field",
                    details: "This Field shall specify the cost of the route to the Node for which this route table entry " +
                        "corresponds.",
                    xref: "core§11.14.5.5.5"
                },

                {
                    name: "LqiIn", tag: "field",
                    details: "This field shall specify the implementation specific mix of IEEE 802.15.4 PDU receive quality " +
                        "indicators, scaled from 0 to 255, from the perspective of the Node reporting the neighbor table.",
                    xref: "core§11.14.5.5.6"
                },

                {
                    name: "LqiOut", tag: "field",
                    details: "This field shall specify the implementation specific mix of IEEE 802.15.4 PDU receive quality " +
                        "indicators, scaled from 0 to 255, from the perspective of the Node specified within the NextHop " +
                        "field.",
                    xref: "core§11.14.5.5.7"
                },

                {
                    name: "Age", tag: "field",
                    details: "This field shall specify the duration of time, in seconds, since a frame has been received from the " +
                        "Node for which this route table entry corresponds.",
                    xref: "core§11.14.5.5.8"
                },

                {
                    name: "Allocated", tag: "field",
                    details: "This field shall specify if the router ID as defined within the RouterId field has been allocated.",
                    xref: "core§11.14.5.5.9"
                },

                {
                    name: "LinkEstablished", tag: "field",
                    details: "This field shall specify if a link has been established to the Node for which this route table entry " +
                        "corresponds.",
                    xref: "core§11.14.5.5.10"
                }
            ]
        },

        {
            name: "SecurityPolicy", tag: "datatype",
            xref: "core§11.14.5.6",

            children: [
                {
                    name: "RotationTime", tag: "field",
                    details: "This field shall specify the interval of time, in hours, that Thread security keys are rotated. Null " +
                        "when there is no dataset configured.",
                    xref: "core§11.14.5.6.1"
                },

                {
                    name: "Flags", tag: "field",
                    details: "This field shall specify the flags as specified in Thread 1.3.0 section 8.10.1.15. Null when there " +
                        "is no dataset configured.",
                    xref: "core§11.14.5.6.2"
                }
            ]
        },

        {
            name: "OperationalDatasetComponents", tag: "datatype",
            xref: "core§11.14.5.7",

            children: [
                {
                    name: "ActiveTimestampPresent", tag: "field",
                    details: "This field shall be True if the Node has an active timestamp present, else False.",
                    xref: "core§11.14.5.7.1"
                },
                {
                    name: "PendingTimestampPresent", tag: "field",
                    details: "This field shall be True if the Node has a pending timestamp is present, else False.",
                    xref: "core§11.14.5.7.2"
                },
                {
                    name: "MasterKeyPresent", tag: "field",
                    details: "This field shall be True if the Node has the Thread master key, else False.",
                    xref: "core§11.14.5.7.3"
                },
                {
                    name: "NetworkNamePresent", tag: "field",
                    details: "This field shall be True if the Node has the Thread network’s name, else False.",
                    xref: "core§11.14.5.7.4"
                },
                {
                    name: "ExtendedPanIdPresent", tag: "field",
                    details: "This field shall be True if the Node has an extended Pan ID, else False.",
                    xref: "core§11.14.5.7.5"
                },
                {
                    name: "MeshLocalPrefixPresent", tag: "field",
                    details: "This field shall be True if the Node has the mesh local prefix, else False.",
                    xref: "core§11.14.5.7.6"
                },
                {
                    name: "DelayPresent", tag: "field",
                    details: "This field shall be True if the Node has the Thread network delay set, else False.",
                    xref: "core§11.14.5.7.7"
                },
                {
                    name: "PanIdPresent", tag: "field",
                    details: "This field shall be True if the Node has a Pan ID, else False.",
                    xref: "core§11.14.5.7.8"
                },

                {
                    name: "ChannelPresent", tag: "field",
                    details: "This field shall be True if the Node has configured an operational channel for the Thread network, " +
                        "else False.",
                    xref: "core§11.14.5.7.9"
                },

                {
                    name: "PskcPresent", tag: "field",
                    details: "This field shall be True if the Node has been configured with the Thread network Pskc, else False.",
                    xref: "core§11.14.5.7.10"
                },

                {
                    name: "SecurityPolicyPresent", tag: "field",
                    details: "This field shall be True if the Node has been configured with the Thread network security policies, " +
                        "else False.",
                    xref: "core§11.14.5.7.11"
                },

                {
                    name: "ChannelMaskPresent", tag: "field",
                    details: "This field shall be True if the Node has available a mask of available channels, else False.",
                    xref: "core§11.14.5.7.12"
                }
            ]
        }
    ]
});
