/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { WiFiNetworkDiagnostics } from "#index.js";

WiFiNetworkDiagnostics.patch({
    details: "The Wi-Fi Network Diagnostics Cluster provides a means to acquire standardized diagnostics metrics " +
        "that may be used by a Node to assist a user or Administrator in diagnosing potential problems. The " +
        "Wi-Fi Network Diagnostics Cluster attempts to centralize all metrics that are relevant to a " +
        "potential Wi-Fi radio running on a Node.",
    xref: { document: "core", section: "11.15" },

    children: [
        undefined,
        { children: [{ description: "PacketCounts" }, { description: "ErrorCounts" }] },
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
                { description: "Indicate the usage of an unspecified Wi-Fi security type" },
                { description: "Indicate the usage of no Wi-Fi security" },
                { description: "Indicate the usage of WEP Wi-Fi security" },
                { description: "Indicate the usage of WPA Wi-Fi security" },
                { description: "Indicate the usage of WPA2 Wi-Fi security" },
                { description: "Indicate the usage of WPA3 Wi-Fi security" }
            ]
        },

        {
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
            children: [
                { description: "The reason for the failure is unknown." },
                { description: "An error occurred during association." },
                { description: "An error occurred during authentication." },
                { description: "The specified SSID could not be found." }
            ]
        },

        {
            children: [
                { description: "Indicate the node is connected" },
                { description: "Indicate the node is not connected" }
            ]
        }
    ]
});
