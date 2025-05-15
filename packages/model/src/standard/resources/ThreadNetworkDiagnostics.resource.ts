/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ThreadNetworkDiagnostics } from "#index.js";

ThreadNetworkDiagnostics.patch({
    classification: "node", pics: "DGTHREAD",
    details: "The Thread Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics " +
        "that may be used by a Node to assist a user or Administrator in diagnosing potential problems. The " +
        "Thread Network Diagnostics Cluster attempts to centralize all metrics that are relevant to a " +
        "potential Thread radio running on a Node.",
    xref: { document: "core", section: "11.14" },

    children: [
        undefined,

        {
            xref: { document: "core", section: "11.14.4" },

            children: [
                {
                    description: "PacketCounts",
                    details: "Server supports the counts for the number of received and transmitted packets on the Thread " +
                        "interface."
                },
                {
                    description: "ErrorCounts",
                    details: "Server supports the counts for the number of errors that have occurred during the reception and " +
                        "transmission of packets on the Thread interface."
                },
                { description: "MleCounts", details: "Server supports the counts for various MLE layer happenings." },
                { description: "MacCounts", details: "Server supports the counts for various MAC layer happenings." }
            ]
        },

        {
            details: "The Channel attribute shall indicate the 802.15.4 channel number configured on the Node’s Thread " +
                "interface (that is, the Active Operational Dataset’s current Channel value). A value of null shall " +
                "indicate that the Thread interface is not currently configured or operational.",
            xref: { document: "core", section: "11.14.6.1" }
        },

        {
            details: "The RoutingRole attribute shall indicate the role that this Node has within the routing of messages " +
                "through the Thread network, as defined by RoutingRoleEnum. The potential roles are defined" +
                "\n" +
                "in the following table. A value of null shall indicate that the Thread interface is not currently " +
                "configured or operational.",
            xref: { document: "core", section: "11.14.6.2" }
        },

        {
            details: "The NetworkName attribute shall indicate a human-readable (displayable) name for the Thread network " +
                "that the Node has been configured to join to. A value of null shall indicate that the Thread " +
                "interface is not currently configured or operational.",
            xref: { document: "core", section: "11.14.6.3" }
        },

        {
            details: "The PanId attribute shall indicate the 16-bit identifier of the Node on the Thread network. A value " +
                "of null shall indicate that the Thread interface is not currently configured or operational.",
            xref: { document: "core", section: "11.14.6.4" }
        },

        {
            details: "The ExtendedPanId attribute shall indicate the unique 64-bit identifier of the Node on the Thread " +
                "network. A value of null shall indicate that the Thread interface is not currently configured or " +
                "operational.",
            xref: { document: "core", section: "11.14.6.5" }
        },

        {
            details: "The MeshLocalPrefix attribute shall indicate the mesh-local IPv6 prefix for the Thread network that " +
                "the Node has been configured to join to. A value of null shall indicate that the Thread interface is " +
                "not currently configured or operational.",
            xref: { document: "core", section: "11.14.6.6" }
        },

        {
            details: "The OverrunCount attribute shall indicate the number of packets dropped either at ingress or egress, " +
                "due to lack of buffer memory to retain all packets on the ethernet network interface. The " +
                "OverrunCount attribute shall be reset to 0 upon a reboot of the Node.",
            xref: { document: "core", section: "11.14.6.7" }
        },

        {
            details: "The NeighborTable attribute shall indicate the current list of Nodes that comprise the neighbor " +
                "table on the Node.",
            xref: { document: "core", section: "11.14.6.8" }
        },
        {
            details: "The RouteTable attribute shall indicate the current list of router capable Nodes for which routes " +
                "have been established.",
            xref: { document: "core", section: "11.14.6.9" }
        },
        {
            details: "The PartitionId attribute shall indicate the Thread Leader Partition Id for the Thread network to " +
                "which the Node is joined. Null if not attached to a Thread network.",
            xref: { document: "core", section: "11.14.6.10" }
        },
        {
            details: "The Weighting attribute shall indicate the Thread Leader Weight used when operating in the Leader " +
                "role. Null if not attached to a Thread network.",
            xref: { document: "core", section: "11.14.6.11" }
        },
        {
            details: "The DataVersion attribute shall indicate the full Network Data Version the Node currently uses. Null " +
                "if not attached to a Thread network.",
            xref: { document: "core", section: "11.14.6.12" }
        },
        {
            details: "The StableDataVersion attribute shall indicate the Network Data Version for the stable subset of " +
                "data the Node currently uses. Null if not attached to a Thread network.",
            xref: { document: "core", section: "11.14.6.13" }
        },

        {
            details: "The LeaderRouterId attribute shall indicate the 8-bit LeaderRouterId the Node shall attempt to " +
                "utilize upon becoming a router or leader on the Thread network. Null if not attached to a Thread " +
                "network.",
            xref: { document: "core", section: "11.14.6.14" }
        },

        {
            details: "The DetachedRoleCount attribute shall indicate the number of times the Node entered the " +
                "OT_DEVICE_ROLE_DETACHED role as specified within the Thread specification. This value shall only be " +
                "reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.15" }
        },

        {
            details: "The ChildRoleCount attribute shall indicate the number of times the Node entered the " +
                "OT_DEVICE_ROLE_CHILD role as specified within the Thread specification. This value shall only be " +
                "reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.16" }
        },

        {
            details: "The RouterRoleCount attribute shall indicate the number of times the Node entered the " +
                "OT_DEVICE_ROLE_ROUTER role as specified within the Thread specification. This value shall only be " +
                "reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.17" }
        },

        {
            details: "The LeaderRoleCount attribute shall indicate the number of times the Node entered the " +
                "OT_DEVICE_ROLE_LEADER role as specified within the Thread specification. This value shall only be " +
                "reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.18" }
        },

        {
            details: "The AttachAttemptCount attribute shall indicate the number of attempts that have been made to attach " +
                "to a Thread network while the Node was detached from all Thread networks. This value shall only be " +
                "reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.19" }
        },

        {
            details: "The PartitionIdChangeCount attribute shall indicate the number of times that the Thread network that " +
                "the Node is connected to has changed its Partition ID. This value shall only be reset upon a Node " +
                "reboot.",
            xref: { document: "core", section: "11.14.6.20" }
        },

        {
            details: "The BetterPartitionAttachAttemptCount attribute shall indicate the number of times a Node has " +
                "attempted to attach to a different Thread partition that it has determined is better than the " +
                "partition it is currently attached to. This value shall only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.21" }
        },

        {
            details: "The ParentChangeCount attribute shall indicate the number of times a Node has changed its parent. " +
                "This value shall only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.22" }
        },

        {
            details: "The TxTotalCount attribute shall indicate the total number of unique MAC frame transmission " +
                "requests. The TxTotalCount attribute shall only be incremented by 1 for each MAC transmission " +
                "request regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions. This value " +
                "shall only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.23" }
        },

        {
            details: "The TxUnicastCount attribute shall indicate the total number of unique unicast MAC frame " +
                "transmission requests. The TxUnicastCount attribute shall only be incremented by 1 for each unicast " +
                "MAC transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or " +
                "retransmissions. This value shall only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.24" }
        },

        {
            details: "The TxBroadcastCount attribute shall indicate the total number of unique broadcast MAC frame " +
                "transmission requests. The TxBroadcastCount attribute shall only be incremented by 1 for each " +
                "broadcast MAC transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or " +
                "retransmissions. This value shall only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.25" }
        },

        {
            details: "The TxAckRequestedCount attribute shall indicate the total number of unique MAC frame transmission " +
                "requests with requested acknowledgment. The TxAckRequestedCount attribute shall only be incremented " +
                "by 1 for each MAC transmission request with requested acknowledgment regardless of the amount of CCA " +
                "failures, CSMA-CA attempts, or retransmissions. This value shall only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.26" }
        },

        {
            details: "The TxAckedCount attribute shall indicate the total number of unique MAC frame transmission requests " +
                "that were acked. The TxAckedCount attribute shall only be incremented by 1 for each MAC transmission " +
                "request that is acked regardless of the amount of CCA failures, CSMA-CA attempts, or " +
                "retransmissions. This value shall only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.27" }
        },

        {
            details: "The TxNoAckRequestedCount attribute shall indicate the total number of unique MAC frame" +
                "\n" +
                "transmission requests without requested acknowledgment. The TxNoAckRequestedCount attribute shall " +
                "only be incremented by 1 for each MAC transmission request that is does not request acknowledgement " +
                "regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions.",
            xref: { document: "core", section: "11.14.6.28" }
        },

        {
            details: "The TxDataCount attribute shall indicate the total number of unique MAC Data frame transmission " +
                "requests. The TxDataCount attribute shall only be incremented by 1 for each MAC Data frame " +
                "transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions. " +
                "This value shall only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.29" }
        },

        {
            details: "The TxDataPollCount attribute shall indicate the total number of unique MAC Data Poll frame " +
                "transmission requests. The TxDataPollCount attribute shall only be incremented by 1 for each MAC " +
                "Data Poll frame transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or " +
                "retransmissions. This value shall only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.30" }
        },

        {
            details: "The TxBeaconCount attribute shall indicate the total number of unique MAC Beacon frame transmission " +
                "requests. The TxBeaconCount attribute shall only be incremented by 1 for each MAC Beacon frame " +
                "transmission request regardless of the amount of CCA failures, CSMA-CA attempts, or retransmissions.",
            xref: { document: "core", section: "11.14.6.31" }
        },

        {
            details: "The TxBeaconRequestCount attribute shall indicate the total number of unique MAC Beacon Request " +
                "frame transmission requests. The TxBeaconRequestCount attribute shall only be incremented by 1 for " +
                "each MAC Beacon Request frame transmission request regardless of the amount of CCA failures, CSMA-CA " +
                "attempts, or retransmissions. This value shall only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.32" }
        },

        {
            details: "The TxOtherCount attribute shall indicate the total number of unique MAC frame transmission requests " +
                "that are not counted by any other attribute. The TxOtherCount attribute shall only be incremented by " +
                "1 for each MAC frame transmission request regardless of the amount of CCA failures, CSMA-CA " +
                "attempts, or retransmissions. This value shall only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.33" }
        },

        {
            details: "The TxRetryCount attribute shall indicate the total number of MAC retransmission attempts. The " +
                "TxRetryCount attribute shall only be incremented by 1 for each retransmission attempt that may be " +
                "triggered by lack of acknowledgement, CSMA/CA failure, or other type of transmission error. This " +
                "value shall only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.34" }
        },

        {
            details: "The TxDirectMaxRetryExpiryCount attribute shall indicate the total number of unique MAC" +
                "\n" +
                "transmission packets that meet maximal retry limit for direct packets. The " +
                "TxDirectMaxRetryExpiryCount attribute shall only be incremented by 1 for each unique MAC " +
                "transmission packets that meets the maximal retry limit for direct packets. This value shall only be " +
                "reset upon a Node reboot.",

            xref: { document: "core", section: "11.14.6.35" }
        },

        {
            details: "The TxIndirectMaxRetryExpiryCount attribute shall indicate the total number of unique MAC " +
                "transmission packets that meet maximal retry limit for indirect packets. The " +
                "TxIndirectMaxRetryExpiryCount attribute shall only be incremented by 1 for each unique MAC " +
                "transmission packets that meets the maximal retry limit for indirect packets. This value shall only " +
                "be reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.36" }
        },

        {
            details: "The TxErrCcaCount attribute shall indicate the total number of CCA failures. The TxErrCcaCount " +
                "attribute shall only be incremented by 1 for each instance of a CCA failure. This value shall only " +
                "be reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.37" }
        },

        {
            details: "The TxErrAbortCount attribute shall indicate the total number of unique MAC transmission request " +
                "failures caused by an abort error. The TxErrAbortCount attribute shall only be incremented by 1 for " +
                "each unique MAC transmission request failure caused by an abort error.",
            xref: { document: "core", section: "11.14.6.38" }
        },

        {
            details: "The TxErrBusyChannelCount attribute shall indicate the total number of unique MAC transmission " +
                "request failures caused by an error as the result of a busy channel (a CSMA/CA fail). The " +
                "TxErrBusyChannelCount attribute shall only be incremented by 1 for each unique MAC transmission " +
                "request failure caused by a busy channel such as a CSMA/CA failure.",
            xref: { document: "core", section: "11.14.6.39" }
        },

        {
            details: "The RxTotalCount attribute shall indicate the total number of received unique MAC frames. This value " +
                "shall only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.40" }
        },
        {
            details: "The RxUnicastCount attribute shall indicate the total number of received unique unicast MAC frames. " +
                "This value shall only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.41" }
        },
        {
            details: "The RxBroadcastCount attribute shall indicate the total number of received unique broadcast MAC " +
                "frames. This value shall only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.42" }
        },

        {
            details: "The RxDataCount attribute shall indicate the total number of received unique MAC Data frames." +
                "\n" +
                "This value shall only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.43" }
        },

        {
            details: "The RxDataPollCount attribute shall indicate the total number of received unique MAC Data Poll " +
                "frames. This value shall only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.44" }
        },
        {
            details: "The RxBeaconCount attribute shall indicate the total number of received unique MAC Beacon frames. " +
                "This value shall only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.45" }
        },
        {
            details: "The RxBeaconRequestCount attribute shall indicate the total number of received unique MAC Beacon " +
                "Request frames. This value shall only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.46" }
        },
        {
            details: "The RxOtherCount attribute shall indicate the total number of received unique MAC frame requests " +
                "that are not counted by any other attribute. This value shall only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.47" }
        },

        {
            details: "The RxAddressFilteredCount attribute shall indicate the total number of received unique MAC frame " +
                "requests that have been dropped as a result of MAC filtering. This value shall only be reset upon a " +
                "Node reboot.",
            xref: { document: "core", section: "11.14.6.48" }
        },

        {
            details: "The RxDestAddrFilteredCount attribute shall indicate the total number of received unique MAC frame " +
                "requests that have been dropped as a result of a destination address check. This value shall only be " +
                "reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.49" }
        },

        {
            details: "The RxDuplicatedCount attribute shall indicate the total number of received MAC frame requests that " +
                "have been dropped as a result of being a duplicate of a previously received MAC frame request. This " +
                "value shall only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.50" }
        },

        {
            details: "The RxErrNoFrameCount attribute shall indicate the total number of received unique MAC frame " +
                "requests that have been dropped as a result of missing or malformed frame contents. This value shall " +
                "only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.51" }
        },

        {
            details: "The RxErrUnknownNeighborCount attribute shall indicate the total number of received unique MAC frame " +
                "requests that have been dropped as a result of originating from an unknown neighbor" +
                "\n" +
                "device. This value shall only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.52" }
        },

        {
            details: "The RxErrInvalidSrcAddrCount attribute shall indicate the total number of received unique MAC frame " +
                "requests that have been dropped as a result of containing an invalid source address. This value " +
                "shall only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.53" }
        },

        {
            details: "The RxErrSecCount attribute shall indicate the total number of received unique MAC frame requests " +
                "that have been dropped as a result of an error with the security of the received frame. This value " +
                "shall only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.54" }
        },

        {
            details: "The RxErrFcsCount attribute shall indicate the total number of received unique MAC frame requests " +
                "that have been dropped as a result of an error with the FCS of the received frame. This value shall " +
                "only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.55" }
        },

        {
            details: "The RxErrOtherCount attribute shall indicate the total number of received unique MAC frame requests " +
                "that have been dropped as a result of an error that is not counted by any other attribute. This " +
                "value shall only be reset upon a Node reboot.",
            xref: { document: "core", section: "11.14.6.56" }
        },

        { details: "Null when there is no dataset configured.", xref: { document: "core", section: "11.14.6.57" } },
        { details: "Null when there is no dataset configured.", xref: { document: "core", section: "11.14.6.58" } },
        { details: "Null when there is no dataset configured.", xref: { document: "core", section: "11.14.6.59" } },
        {
            details: "The SecurityPolicy attribute indicates the current security policies for the Thread partition to " +
                "which a Node is connected. Null when there is no dataset configured.",
            xref: { document: "core", section: "11.14.6.60" }
        },

        {
            details: "The ChannelPage0Mask attribute indicates the channels within channel page 0, in the 2.4GHz ISM band. " +
                "The channels are represented in most significant bit order, with bit value 1 meaning selected, bit " +
                "value 0 meaning unselected. For example, the most significant bit of the left-most byte indicates " +
                "channel 0. If channel 0 and channel 10 are selected, the mask would be: 80 20 00 00. Null when there " +
                "is no dataset configured.",
            xref: { document: "core", section: "11.14.6.61" }
        },

        {
            details: "The OperationalDatasetComponents attribute is a collection of flags to indicate the presence of " +
                "various operationally acquired values.",
            xref: { document: "core", section: "11.14.6.62" }
        },
        { xref: { document: "core", section: "11.14.6" } },
        { xref: { document: "core", section: "11.14.6" } },
        { xref: { document: "core", section: "11.14.6" } },
        {
            details: "The ConnectionStatus Event shall indicate that a Node’s connection status to a Thread network has " +
                "changed.",
            xref: { document: "core", section: "11.14.8.2" }
        },

        {
            details: "The NetworkFaultChange Event shall indicate a change in the set of network faults currently detected " +
                "by the Node.",
            xref: { document: "core", section: "11.14.8.1" },

            children: [
                {
                    details: "This field shall represent the set of faults currently detected, as per Section 11.14.5.1, " +
                        "“NetworkFaultEnum Type”.",
                    xref: { document: "core", section: "11.14.8.1.1" }
                },
                {
                    details: "This field shall represent the set of faults detected prior to this change event, as per Section " +
                        "11.14.5.1, “NetworkFaultEnum Type”.",
                    xref: { document: "core", section: "11.14.8.1.2" }
                }
            ]
        },

        {
            details: "Reception of this command shall reset the following attributes to 0:" +
                "\n" +
                "  • OverrunCount" +
                "\n" +
                "This command has no associated data. Upon completion, this command shall send a status code set to a " +
                "value of SUCCESS back to the initiator.",

            xref: { document: "core", section: "11.14.7.1" }
        },

        {
            xref: { document: "core", section: "11.14.5.1" },

            children: [
                { description: "Indicates an unspecified fault." },
                { description: "Indicates the Thread link is down." },
                { description: "Indicates there has been Thread hardware failure." },
                { description: "Indicates the Thread network is jammed." }
            ]
        },

        {
            xref: { document: "core", section: "11.14.5.2" },
            children: [{ description: "Node is connected" }, { description: "Node is not connected" }]
        },

        {
            xref: { document: "core", section: "11.14.5.3" },

            children: [
                { description: "Unspecified routing role." },
                {
                    description: "The Node does not currently have a role as a result of the Thread interface not currently being configured or operational."
                },
                { description: "The Node acts as a Sleepy End Device with RX-off-when-idle sleepy radio behavior." },
                { description: "The Node acts as an End Device without RX- off-when-idle sleepy radio behavior." },
                { description: "The Node acts as an Router Eligible End Device." },
                { description: "The Node acts as a Router Device." },
                { description: "The Node acts as a Leader Device." }
            ]
        },

        {
            xref: { document: "core", section: "11.14.5.4" },

            children: [
                {
                    details: "This field shall specify the IEEE 802.15.4 extended address for the neighboring Node.",
                    xref: { document: "core", section: "11.14.5.4.1" }
                },
                {
                    details: "This field shall specify the duration of time, in seconds, since a frame has been received from the " +
                        "neighboring Node.",
                    xref: { document: "core", section: "11.14.5.4.2" }
                },
                {
                    details: "This field shall specify the RLOC16 of the neighboring Node.",
                    xref: { document: "core", section: "11.14.5.4.3" }
                },
                {
                    details: "This field shall specify the number of link layer frames that have been received from the " +
                        "neighboring node. This field shall be reset to 0 upon a reboot of the Node.",
                    xref: { document: "core", section: "11.14.5.4.4" }
                },
                {
                    details: "This field shall specify the number of Mesh Link Establishment frames that have been received from " +
                        "the neighboring node. This field shall be reset to 0 upon a reboot of the Node.",
                    xref: { document: "core", section: "11.14.5.4.5" }
                },
                {
                    details: "This field shall specify the implementation specific mix of IEEE 802.15.4 PDU receive quality " +
                        "indicators, scaled from 0 to 255.",
                    xref: { document: "core", section: "11.14.5.4.6" }
                },

                {
                    details: "This field SHOULD specify the average RSSI across all received frames from the neighboring Node " +
                        "since the receiving Node’s last reboot. If there is no known received frames this field SHOULD have " +
                        "the value of null. This field shall have the units of dBm, having the range -128 dBm to 0 dBm.",
                    xref: { document: "core", section: "11.14.5.4.7" }
                },

                {
                    details: "This field shall specify the RSSI of the most recently received frame from the neighboring Node. If " +
                        "there is no known last received frame the LastRssi field SHOULD have the value of null. This field " +
                        "shall have the units of dBm, having the range -128 dBm to 0 dBm.",
                    xref: { document: "core", section: "11.14.5.4.8" }
                },

                {
                    details: "This field shall specify the percentage of received frames from the neighboring Node that have " +
                        "resulted in errors.",
                    xref: { document: "core", section: "11.14.5.4.9" }
                },
                {
                    details: "This field shall specify the percentage of received messages from the neighboring Node that have " +
                        "resulted in errors.",
                    xref: { document: "core", section: "11.14.5.4.10" }
                },
                {
                    details: "This field shall specify if the neighboring Node is capable of receiving frames while the Node is in " +
                        "an idle state.",
                    xref: { document: "core", section: "11.14.5.4.11" }
                },
                {
                    details: "This field shall specify if the neighboring Node is a full Thread device.",
                    xref: { document: "core", section: "11.14.5.4.12" }
                },
                {
                    details: "This field shall specify if the neighboring Node requires the full Network Data. If set to False, " +
                        "the neighboring Node only requires the stable Network Data.",
                    xref: { document: "core", section: "11.14.5.4.13" }
                },
                {
                    details: "This field shall specify if the neighboring Node is a direct child of the Node reporting the " +
                        "NeighborTable attribute.",
                    xref: { document: "core", section: "11.14.5.4.14" }
                }
            ]
        },

        {
            xref: { document: "core", section: "11.14.5.5" },

            children: [
                {
                    details: "This field shall specify the IEEE 802.15.4 extended address for the Node for which this route table " +
                        "entry corresponds.",
                    xref: { document: "core", section: "11.14.5.5.1" }
                },
                {
                    details: "This field shall specify the RLOC16 for the Node for which this route table entry corresponds.",
                    xref: { document: "core", section: "11.14.5.5.2" }
                },
                {
                    details: "This field shall specify the Router ID for the Node for which this route table entry corresponds.",
                    xref: { document: "core", section: "11.14.5.5.3" }
                },
                {
                    details: "This field shall specify the Router ID for the next hop in the route to the Node for which this " +
                        "route table entry corresponds.",
                    xref: { document: "core", section: "11.14.5.5.4" }
                },
                {
                    details: "This Field shall specify the cost of the route to the Node for which this route table entry " +
                        "corresponds.",
                    xref: { document: "core", section: "11.14.5.5.5" }
                },
                {
                    details: "This field shall specify the implementation specific mix of IEEE 802.15.4 PDU receive quality " +
                        "indicators, scaled from 0 to 255, from the perspective of the Node reporting the neighbor table.",
                    xref: { document: "core", section: "11.14.5.5.6" }
                },

                {
                    details: "This field shall specify the implementation specific mix of IEEE 802.15.4 PDU receive quality " +
                        "indicators, scaled from 0 to 255, from the perspective of the Node specified within the NextHop " +
                        "field.",
                    xref: { document: "core", section: "11.14.5.5.7" }
                },

                {
                    details: "This field shall specify the duration of time, in seconds, since a frame has been received from the " +
                        "Node for which this route table entry corresponds.",
                    xref: { document: "core", section: "11.14.5.5.8" }
                },
                {
                    details: "This field shall specify if the router ID as defined within the RouterId field has been allocated.",
                    xref: { document: "core", section: "11.14.5.5.9" }
                },
                {
                    details: "This field shall specify if a link has been established to the Node for which this route table entry " +
                        "corresponds.",
                    xref: { document: "core", section: "11.14.5.5.10" }
                }
            ]
        },

        {
            xref: { document: "core", section: "11.14.5.6" },

            children: [
                {
                    details: "This field shall specify the interval of time, in hours, that Thread security keys are rotated. Null " +
                        "when there is no dataset configured.",
                    xref: { document: "core", section: "11.14.5.6.1" }
                },
                {
                    details: "This field shall specify the flags as specified in Thread 1.3.0 section 8.10.1.15. Null when there " +
                        "is no dataset configured.",
                    xref: { document: "core", section: "11.14.5.6.2" }
                }
            ]
        },

        {
            xref: { document: "core", section: "11.14.5.7" },

            children: [
                {
                    details: "This field shall be True if the Node has an active timestamp present, else False.",
                    xref: { document: "core", section: "11.14.5.7.1" }
                },
                {
                    details: "This field shall be True if the Node has a pending timestamp is present, else False.",
                    xref: { document: "core", section: "11.14.5.7.2" }
                },
                {
                    details: "This field shall be True if the Node has the Thread master key, else False.",
                    xref: { document: "core", section: "11.14.5.7.3" }
                },
                {
                    details: "This field shall be True if the Node has the Thread network’s name, else False.",
                    xref: { document: "core", section: "11.14.5.7.4" }
                },
                {
                    details: "This field shall be True if the Node has an extended Pan ID, else False.",
                    xref: { document: "core", section: "11.14.5.7.5" }
                },
                {
                    details: "This field shall be True if the Node has the mesh local prefix, else False.",
                    xref: { document: "core", section: "11.14.5.7.6" }
                },
                {
                    details: "This field shall be True if the Node has the Thread network delay set, else False.",
                    xref: { document: "core", section: "11.14.5.7.7" }
                },
                {
                    details: "This field shall be True if the Node has a Pan ID, else False.",
                    xref: { document: "core", section: "11.14.5.7.8" }
                },
                {
                    details: "This field shall be True if the Node has configured an operational channel for the Thread network, " +
                        "else False.",
                    xref: { document: "core", section: "11.14.5.7.9" }
                },
                {
                    details: "This field shall be True if the Node has been configured with the Thread network Pskc, else False.",
                    xref: { document: "core", section: "11.14.5.7.10" }
                },
                {
                    details: "This field shall be True if the Node has been configured with the Thread network security policies, " +
                        "else False.",
                    xref: { document: "core", section: "11.14.5.7.11" }
                },
                {
                    details: "This field shall be True if the Node has available a mask of available channels, else False.",
                    xref: { document: "core", section: "11.14.5.7.12" }
                }
            ]
        }
    ]
});
