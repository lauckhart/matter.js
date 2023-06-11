/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0036, name: "WiFiNetworkDiagnostics",
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
            id: 0x0000, name: "Bssid", base: "octstr",
            access: "R V", conformance: "M", constraint: "6", value: "null", quality: "X",
            details: "The BSSID attribute SHALL indicate the BSSID for which the Wi-Fi network the Node is currently connected.",
            xref: { section: "11.14.6.1", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "SecurityType", base: "SecurityTypeEnum",
            access: "R V", conformance: "M", value: "null", quality: "X",
            details: "The SecurityType attribute SHALL indicate the current type of Wi-Fi security used.",
            xref: { section: "11.14.6.2", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "WiFiVersion", base: "WiFiVersionEnum",
            access: "R V", conformance: "M", value: "null", quality: "X",
            details: "The WiFiVersion attribute SHALL indicate the current 802.11 standard version in use by the Node, per the table below.",
            xref: { section: "11.14.6.3", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "ChannelNumber", base: "uint16",
            access: "R V", conformance: "M", value: "null", quality: "X",
            details: "The ChannelNumber attribute SHALL indicate the channel that Wi-Fi communication is currently operating on.",
            xref: { section: "11.14.6.4", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0004, name: "Rssi", base: "int8",
            access: "R V", conformance: "M", constraint: "-120 to 0", value: "null", quality: "X C",
            details: "The RSSI attribute SHALL indicate the current RSSI of the Node’s Wi-Fi radio in dBm.",
            xref: { section: "11.14.6.5", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0005, name: "BeaconLostCount", base: "uint32",
            access: "R V", conformance: "ERRCNT", value: "0", quality: "X C",
            details: "The BeaconLostCount attribute SHALL indicate the count of the number of missed beacons the Node has detected. If the Node does not have an ability to count beacons expected and not received, this value MAY remain set to zero.",
            xref: { section: "11.14.6.6", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0006, name: "BeaconRxCount", base: "uint32",
            access: "R V", conformance: "PKTCNT", value: "0", quality: "X C",
            details: "The BeaconRxCount attribute SHALL indicate the count of the number of received beacons. The total number of expected beacons that could have been received during the interval since association SHOULD match the sum of BeaconRxCount and BeaconLostCount. If the Node does not have an ability to report count of beacons received, this value MAY remain set to zero.",
            xref: { section: "11.14.6.7", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0007, name: "PacketMulticastRxCount", base: "uint32",
            access: "R V", conformance: "PKTCNT", value: "0", quality: "X C",
            details: "The PacketMulticastRxCount attribute SHALL indicate the number of multicast packets received by",
            xref: { section: "11.14.6.8", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0008, name: "PacketMulticastTxCount", base: "uint32",
            access: "R V", conformance: "PKTCNT", value: "0", quality: "X C",
            details: "The PacketMulticastTxCount attribute SHALL indicate the number of multicast packets transmitted by the Node.",
            xref: { section: "11.14.6.9", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0009, name: "PacketUnicastRxCount", base: "uint32",
            access: "R V", conformance: "PKTCNT", value: "0", quality: "X C",
            details: "The PacketUnicastRxCount attribute SHALL indicate the number of unicast packets received by the Node.",
            xref: { section: "11.14.6.10", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000a, name: "PacketUnicastTxCount", base: "uint32",
            access: "R V", conformance: "PKTCNT", value: "0", quality: "X C",
            details: "The PacketUnicastTxCount attribute SHALL indicate the number of unicast packets transmitted by the Node.",
            xref: { section: "11.14.6.11", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000b, name: "CurrentMaxRate", base: "uint64",
            access: "R V", conformance: "O", value: "0", quality: "X C",
            details: "The CurrentMaxRate attribute SHALL indicate the current maximum PHY rate of transfer of data in bits-per-second.",
            xref: { section: "11.14.6.12", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x000c, name: "OverrunCount", base: "uint64",
            access: "R V", conformance: "ERRCNT", value: "0", quality: "X C",
            details: "The OverrunCount attribute SHALL indicate the number of packets dropped either at ingress or egress, due to lack of buffer memory to retain all packets on the network interface. The OverrunCount attribute SHALL be reset to 0 upon a reboot of the Node.",
            xref: { section: "11.14.6.13", document: "core", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "SecurityTypeEnum", base: "enum8",
            details: "This data type is derived from enum8.",
            xref: { section: "11.14.5.1", document: "core", version: "1.1" }
        })
    ]
}));
