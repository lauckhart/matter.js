/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { WiFiNetworkDiagnostics } from "#index.js";

WiFiNetworkDiagnostics.patch({
    classification: "node", pics: "DGWIFI",
    details: "The Wi-Fi Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics " +
        "that may be used by a Node to assist a user or Administrator in diagnosing potential problems. The " +
        "Wi-Fi Network Diagnostics Cluster attempts to centralize all metrics that are relevant to a " +
        "potential Wi-Fi radio running on a Node.",
    xref: "core§11.15",

    children: [
        undefined,

        {
            xref: "core§11.15.4",

            children: [
                {
                    description: "PacketCounts",
                    details: "Node makes available the counts for the number of received and transmitted packets on the Wi-Fi " +
                        "interface."
                },
                {
                    description: "ErrorCounts",
                    details: "Node makes available the counts for the number of errors that have occurred during the reception and " +
                        "transmission of packets on the Wi-Fi interface."
                }
            ]
        },

        {
            details: "The BSSID attribute shall indicate the BSSID for which the Wi-Fi network the Node is currently " +
                "connected.",
            xref: "core§11.15.6.1"
        },
        {
            details: "The SecurityType attribute shall indicate the current type of Wi-Fi security used.",
            xref: "core§11.15.6.2"
        },
        {
            details: "The WiFiVersion attribute shall indicate the current 802.11 standard version in use by the Node, per " +
                "the table below.",
            xref: "core§11.15.6.3"
        },
        {
            details: "The ChannelNumber attribute shall indicate the channel that Wi-Fi communication is currently " +
                "operating on.",
            xref: "core§11.15.6.4"
        },
        {
            details: "The RSSI attribute shall indicate the current RSSI of the Node’s Wi-Fi radio in dBm.",
            xref: "core§11.15.6.5"
        },

        {
            details: "The BeaconLostCount attribute shall indicate the count of the number of missed beacons the Node has " +
                "detected. If the Node does not have an ability to count beacons expected and not received, this " +
                "value may remain set to zero.",
            xref: "core§11.15.6.6"
        },

        {
            details: "The BeaconRxCount attribute shall indicate the count of the number of received beacons. The total " +
                "number of expected beacons that could have been received during the interval since association " +
                "SHOULD match the sum of BeaconRxCount and BeaconLostCount. If the Node does not have an ability to " +
                "report count of beacons received, this value may remain set to zero.",
            xref: "core§11.15.6.7"
        },

        {
            details: "The PacketMulticastRxCount attribute shall indicate the number of multicast packets received by the " +
                "Node.",
            xref: "core§11.15.6.8"
        },
        {
            details: "The PacketMulticastTxCount attribute shall indicate the number of multicast packets transmitted by " +
                "the Node.",
            xref: "core§11.15.6.9"
        },
        {
            details: "The PacketUnicastRxCount attribute shall indicate the number of unicast packets received by the " +
                "Node.",
            xref: "core§11.15.6.10"
        },
        {
            details: "The PacketUnicastTxCount attribute shall indicate the number of unicast packets transmitted by the " +
                "Node.",
            xref: "core§11.15.6.11"
        },
        {
            details: "The CurrentMaxRate attribute shall indicate the current maximum PHY rate of transfer of data in " +
                "bits-per-second.",
            xref: "core§11.15.6.12"
        },

        {
            details: "The OverrunCount attribute shall indicate the number of packets dropped either at ingress or egress, " +
                "due to lack of buffer memory to retain all packets on the network interface. The OverrunCount " +
                "attribute shall be reset to 0 upon a reboot of the Node.",
            xref: "core§11.15.6.13"
        },

        {
            details: "The Disconnection Event shall indicate that a Node’s Wi-Fi connection has been disconnected as a " +
                "result of de-authenticated or dis-association and indicates the reason.",
            xref: "core§11.15.8.1",

            children: [{
                details: "This field shall contain the Reason Code field value for the Disassociation or Deauthentication " +
                    "event that caused the disconnection and the value shall align with Table 9-49 \"Reason codes\" of IEEE " +
                    "802.11-2020.",
                xref: "core§11.15.8.1.1"
            }]
        },

        {
            details: "The AssociationFailure event shall indicate that a Node has attempted to connect, or reconnect, to a " +
                "Wi-Fi access point, but is unable to successfully associate or authenticate, after exhausting all " +
                "internal retries of its supplicant.",
            xref: "core§11.15.8.2",

            children: [
                {
                    details: "The Status field shall be set to a value from the AssociationFailureCauseEnum.",
                    xref: "core§11.15.8.2.1"
                },

                {
                    details: "The Status field shall be set to the Status Code value that was present in the last frame related to " +
                        "association where Status Code was not equal to zero and which caused the failure of a last trial " +
                        "attempt, if this last failure was due to one of the following Management frames:" +
                        "\n" +
                        "  • Association Response (Type 0, Subtype 1)" +
                        "\n" +
                        "  • Reassociation Response (Type 0, Subtype 3)" +
                        "\n" +
                        "  • Authentication (Type 0, Subtype 11)" +
                        "\n" +
                        "Table 9-50 \"Status codes\" of IEEE 802.11-2020 contains a description of all values possible.",

                    xref: "core§11.15.8.2.2"
                }
            ]
        },

        {
            details: "The ConnectionStatus Event shall indicate that a Node’s connection status to a Wi-Fi network has " +
                "changed. Connected, in this context, shall mean that a Node acting as a Wi-Fi station is " +
                "successfully associated to a Wi-Fi Access Point.",
            xref: "core§11.15.8.3"
        },

        {
            details: "Reception of this command shall reset the following attributes to 0:" +
                "\n" +
                "  • BeaconLostCount" +
                "\n" +
                "  • BeaconRxCount" +
                "\n" +
                "  • PacketMulticastRxCount" +
                "\n" +
                "  • PacketMulticastTxCount" +
                "\n" +
                "  • PacketUnicastRxCount" +
                "\n" +
                "  • PacketUnicastTxCount" +
                "\n" +
                "This command has no associated data.",

            xref: "core§11.15.7.1"
        },

        {
            xref: "core§11.15.5.1",

            children: [
                { description: "Indicate the usage of an unspecified Wi-Fi security type" },
                { description: "Indicate the usage of no Wi-Fi security" },
                { description: "Indicate the usage of WEP Wi-Fi security" },
                { description: "Indicate the usage of WPA Wi-Fi security" },
                { description: "Indicate the usage of WPA2 Wi-Fi security" },
                { description: "Indicate the usage of WPA3 Wi-Fi security" }
            ]
        },

        {
            xref: "core§11.15.5.2",

            children: [
                {
                    description: "Indicate the network interface is currently using 802.11a against the wireless access point."
                },
                {
                    description: "Indicate the network interface is currently using 802.11b against the wireless access point."
                },
                {
                    description: "Indicate the network interface is currently using 802.11g against the wireless access point."
                },
                {
                    description: "Indicate the network interface is currently using 802.11n against the wireless access point."
                },
                {
                    description: "Indicate the network interface is currently using 802.11ac against the wireless access point."
                },
                {
                    description: "Indicate the network interface is currently using 802.11ax against the wireless access point."
                },
                {
                    description: "Indicate the network interface is currently using 802.11ah against the wireless access point."
                }
            ]
        },

        {
            xref: "core§11.15.5.3",

            children: [
                { description: "The reason for the failure is unknown." },
                { description: "An error occurred during association." },
                { description: "An error occurred during authentication." },
                { description: "The specified SSID could not be found." }
            ]
        },

        {
            xref: "core§11.15.5.4",
            children: [
                { description: "Indicate the node is connected" },
                { description: "Indicate the node is not connected" }
            ]
        }
    ]
});
