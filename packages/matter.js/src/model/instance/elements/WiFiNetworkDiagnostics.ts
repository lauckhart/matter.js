/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0036, name: "WiFiNetworkDiagnostics",
    classification: "node", description: "WiFi Network Diagnostics",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "Bssid",
            access: "R V", conformance: "M", constraint: "6", default: undefined, quality: "X", type: "octstr",
            details: "The BSSID attribute SHALL indicate the BSSID for which the Wi-Fi " +
                     "network the Node is currently connected",
            xref: { document: "core", section: "11.14.6.1" }
        },

        {
            tag: "attribute", id: 0x0001, name: "SecurityType",
            access: "R V", conformance: "M", default: undefined, quality: "X", type: "SecurityTypeEnum",
            details: "The SecurityType attribute SHALL indicate the current type of Wi-Fi " +
                     "security used",
            xref: { document: "core", section: "11.14.6.2" }
        },

        {
            tag: "attribute", id: 0x0002, name: "WiFiVersion",
            access: "R V", conformance: "M", default: undefined, quality: "X", type: "WiFiVersionEnum",
            details: "The WiFiVersion attribute SHALL indicate the current 802.11 standard " +
                     "version in use by the Node, per the table below",
            xref: { document: "core", section: "11.14.6.3" }
        },

        {
            tag: "attribute", id: 0x0003, name: "ChannelNumber",
            access: "R V", conformance: "M", default: undefined, quality: "X", type: "uint16",
            details: "The ChannelNumber attribute SHALL indicate the channel that Wi-Fi " +
                     "communication is currently operating on",
            xref: { document: "core", section: "11.14.6.4" }
        },

        {
            tag: "attribute", id: 0x0004, name: "Rssi",
            access: "R V", conformance: "M", constraint: "-120 to 0", default: undefined, quality: "X C", type: "int8",
            details: "The RSSI attribute SHALL indicate the current RSSI of the Node’s Wi-Fi" +
                     " radio in dBm",
            xref: { document: "core", section: "11.14.6.5" }
        },

        {
            tag: "attribute", id: 0x0005, name: "BeaconLostCount",
            access: "R V", conformance: "ERRCNT", default: undefined, quality: "X C", type: "uint32",
            details: "The BeaconLostCount attribute SHALL indicate the count of the number " +
                     "of missed beacons the Node has detected. If the Node does not have an " +
                     "ability to count beacons expected and not received, this value MAY " +
                     "remain set to zero",
            xref: { document: "core", section: "11.14.6.6" }
        },

        {
            tag: "attribute", id: 0x0006, name: "BeaconRxCount",
            access: "R V", conformance: "P, KTCNT", default: undefined, quality: "X C", type: "uint32",
            details: "The BeaconRxCount attribute SHALL indicate the count of the number of " +
                     "received beacons. The total number of expected beacons that could have" +
                     " been received during the interval since association SHOULD match the " +
                     "sum of BeaconRxCount and BeaconLostCount. If the Node does not have an" +
                     " ability to report count of beacons received, this value MAY remain " +
                     "set to zero",
            xref: { document: "core", section: "11.14.6.7" }
        },

        {
            tag: "attribute", id: 0x0007, name: "PacketMulticastRxCount",
            access: "R V", conformance: "P, KTCNT", default: undefined, quality: "X C", type: "uint32",
            details: "The PacketMulticastRxCount attribute SHALL indicate the number of " +
                     "multicast packets received by",
            xref: { document: "core", section: "11.14.6.8" }
        },

        {
            tag: "attribute", id: 0x0008, name: "PacketMulticastTxCount",
            access: "R V", conformance: "P, KTCNT", default: undefined, quality: "X C", type: "uint32",
            details: "The PacketMulticastTxCount attribute SHALL indicate the number of " +
                     "multicast packets transmitted by the Node",
            xref: { document: "core", section: "11.14.6.9" }
        },

        {
            tag: "attribute", id: 0x0009, name: "PacketUnicastRxCount",
            access: "R V", conformance: "P, KTCNT", default: undefined, quality: "X C", type: "uint32",
            details: "The PacketUnicastRxCount attribute SHALL indicate the number of " +
                     "unicast packets received by the Node",
            xref: { document: "core", section: "11.14.6.10" }
        },

        {
            tag: "attribute", id: 0x000a, name: "PacketUnicastTxCount",
            access: "R V", conformance: "P, KTCNT", default: undefined, quality: "X C", type: "uint32",
            details: "The PacketUnicastTxCount attribute SHALL indicate the number of " +
                     "unicast packets transmitted by the Node",
            xref: { document: "core", section: "11.14.6.11" }
        },

        {
            tag: "attribute", id: 0x000b, name: "CurrentMaxRate",
            access: "R V", conformance: "O", default: undefined, quality: "X C", type: "uint64",
            details: "The CurrentMaxRate attribute SHALL indicate the current maximum PHY " +
                     "rate of transfer of data in bits-per-second",
            xref: { document: "core", section: "11.14.6.12" }
        },

        {
            tag: "attribute", id: 0x000c, name: "OverrunCount",
            access: "R V", conformance: "ERRCNT", default: undefined, quality: "X C", type: "uint64",
            details: "The OverrunCount attribute SHALL indicate the number of packets " +
                     "dropped either at ingress or egress, due to lack of buffer memory to " +
                     "retain all packets on the network interface. The OverrunCount " +
                     "attribute SHALL be reset to 0 upon a reboot of the Node",
            xref: { document: "core", section: "11.14.6.13" }
        },

        {
            tag: "event", id: 0x0000, name: "Disconnection",
            access: "V", conformance: "O", priority: "info",
            details: "The Disconnection Event SHALL indicate that a Node’s Wi-Fi connection " +
                     "has been disconnected as a result of de-authenticated or dis-" +
                     "association and indicates the reason",
            xref: { document: "core", section: "11.14.8.1" },
            children: [
                {
                    tag: "datatype", name: "ReasonCode",
                    conformance: "M", type: "uint16"
                }
            ]
        },

        {
            tag: "event", id: 0x0001, name: "AssociationFailure",
            access: "V", conformance: "O", priority: "info",
            details: "The AssociationFailure event SHALL indicate that a Node has attempted " +
                     "to connect, or reconnect, to a Wi-Fi access point, but is unable to " +
                     "successfully associate or authenticate, after exhausting all internal " +
                     "retries of its supplicant",
            xref: { document: "core", section: "11.14.8.2" },
            children: [
                {
                    tag: "datatype", name: "AssociationFailure",
                    conformance: "M", type: "AssociationFailureCauseEnum"
                },

                {
                    tag: "datatype", name: "Status",
                    conformance: "M", type: "uint16"
                }
            ]
        },

        {
            tag: "event", id: 0x0002, name: "ConnectionStatus",
            access: "V", conformance: "O", priority: "info",
            details: "The ConnectionStatus Event SHALL indicate that a Node’s connection " +
                     "status to a Wi-Fi network has changed. Connected, in this context, " +
                     "SHALL mean that a Node acting as a Wi-Fi station is successfully " +
                     "associated to a Wi-Fi Access Point",
            xref: { document: "core", section: "11.14.8.3" },
            children: [
                {
                    tag: "datatype", name: "ConnectionStatus",
                    conformance: "M", type: "ConnectionStatusEnum"
                }
            ]
        },

        {
            tag: "command", id: 0x0000, name: "ResetCounts",
            access: "O", conformance: "ERRCNT", direction: "request", response: "status",
            details: "Reception of this command SHALL reset the following attributes to 0",
            xref: { document: "core", section: "11.14.7.1" }
        },

        {
            tag: "datatype", name: "SecurityTypeEnum",
            conformance: "M", type: "enum8",
            details: "This data type is derived from enum8",
            xref: { document: "core", section: "11.14.5.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Unspecified",
                    conformance: "M",
                    xref: { document: "core", section: "11.14.5.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "None",
                    conformance: "M",
                    xref: { document: "core", section: "11.14.5.1" }
                },

                {
                    tag: "datatype", id: 0x0002, name: "Wep",
                    conformance: "M",
                    xref: { document: "core", section: "11.14.5.1" }
                },

                {
                    tag: "datatype", id: 0x0003, name: "Wpa",
                    conformance: "M",
                    xref: { document: "core", section: "11.14.5.1" }
                },

                {
                    tag: "datatype", id: 0x0004, name: "Wpa2",
                    conformance: "M",
                    xref: { document: "core", section: "11.14.5.1" }
                },

                {
                    tag: "datatype", id: 0x0005, name: "Wpa3",
                    conformance: "M",
                    xref: { document: "core", section: "11.14.5.1" }
                }
            ]
        },

        {
            tag: "datatype", name: "SecurityTypeEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Unspecified",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "None",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Wep",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "Wpa",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Wpa2",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "Wpa3",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "WiFiVersionEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "A",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "B",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "G",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "N",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Ac",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "Ax",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "AssociationFailureCauseEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Unknown",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "AssociationFailed",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "AuthenticationFailed",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "SsidNotFound",
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
        }
    ]
});
