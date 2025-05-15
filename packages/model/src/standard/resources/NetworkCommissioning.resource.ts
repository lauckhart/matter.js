/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { NetworkCommissioning } from "#index.js";

NetworkCommissioning.patch({
    details: "Network commissioning is part of the overall Node commissioning. The main goal of Network " +
        "Commissioning Cluster is to associate a Node with or manage a Node’s one or more network interfaces. " +
        "These network interfaces can include the following types." +
        "\n" +
        "  • Wi-Fi (IEEE 802.11-2020)" +
        "\n" +
        "  • Ethernet (802.3)" +
        "\n" +
        "  • Thread (802.15.4)" +
        "\n" +
        "An instance of the Network Commissioning Cluster only applies to a single network interface instance " +
        "present. An interface, in this context, is a unique entity that can have an IPv6 address assigned to " +
        "it and ingress and egress IP packets.",

    xref: { document: "core", section: "11.9" },

    children: [
        undefined,

        {
            children: [
                { description: "WiFiNetworkInterface" },
                { description: "ThreadNetworkInterface" },
                { description: "EthernetNetworkInterface" }
            ]
        },

        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "Supports unencrypted Wi-Fi" },
                { description: "Supports Wi-Fi using WEP security" },
                { description: "Supports Wi-Fi using WPA-Personal security" },
                { description: "Supports Wi-Fi using WPA2-Personal security" },
                { description: "Supports Wi-Fi using WPA3-Personal security" }
            ]
        },

        {
            children: [
                { description: "Thread Border Router functionality is present" },
                { description: "Router mode is supported (interface could be in router or REED mode)" },
                { description: "Sleepy end-device mode is supported" },
                { description: "Device is a full Thread device (opposite of Minimal Thread Device)" },
                { description: "Synchronized sleepy end-device mode is supported" }
            ]
        },

        {
            children: [
                { description: "2.4GHz - 2.401GHz to2.495GHz(802.11b/g/n/ax)" },
                { description: "3.65GHz - 3.655GHz to3.695GHz (802.11y)" },
                { description: "5GHz - 5.150GHz to5.895GHz(802.11a/n/ac/ax)" },
                { description: "6GHz - 5.925GHz to7.125GHz (802.11ax / Wi-Fi 6E)" },
                { description: "60GHz - 57.24GHz to70.20GHz (802.11ad/ay)" },
                { description: "Sub-1GHz - 755MHz to 931MHz (802.11ah)" }
            ]
        },

        {
            children: [
                { description: "OK, no error" },
                { description: "Value Outside Range" },
                { description: "A collection would exceed its size limit" },
                { description: "The NetworkID is not among the collection of added networks" },
                { description: "The NetworkID is already among the collection of added networks" },
                { description: "Cannot find AP: SSID Not found" },
                { description: "Cannot find AP: Mismatch on band/channels/regulatory domain/ 2.4GHz vs 5GHz" },
                { description: "Cannot associate due to authentication failure" },
                { description: "Cannot associate due to unsupported security mode" },
                { description: "Other association failure" },
                { description: "Failure to generate an IPv6 address" },
                { description: "Failure to bind Wi-Fi <-> IP interfaces" },
                { description: "Unknown error" }
            ]
        }
    ]
});
