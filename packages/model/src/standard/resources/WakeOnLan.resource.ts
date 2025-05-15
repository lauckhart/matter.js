/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { WakeOnLan } from "#index.js";

WakeOnLan.patch({
    details: "This cluster provides an interface for managing low power mode on a device that supports the Wake On " +
        "LAN or Wake On Wireless LAN (WLAN) protocol (see [Wake On LAN])." +
        "\n" +
        "This cluster would be supported on IP devices that have a low power mode AND support the ability to " +
        "be woken up using the Wake on LAN or Wake on WLAN protocol. This cluster provides the device MAC " +
        "address which is a required input to the Wake on LAN protocol. Besides the MAC address, this cluster " +
        "provides an optional link-local IPv6 address which is useful to support \"Wake on Direct Packet\" used " +
        "by some Ethernet and Wi-Fi devices." +
        "\n" +
        "Acting on the MAC address or link-local IPv6 address information does require the caller to be in " +
        "the same broadcast domain as the destination. To wake the destination up, the caller sends a " +
        "multicast-based magic UDP packet that contains destination’s MAC address in the UDP payload to " +
        "FF02::1, the IPv6 all-nodes link-local multicast group address. If the optional link-local address " +
        "is provided by the destination through this cluster, the caller also sends the magic UDP packet in " +
        "unicast to that link-local address. This unicast-based method is particularly useful for Wi-Fi " +
        "devices, since due to lack of MAC layer retransmission mechanism, multicast over Wi-Fi is not as " +
        "reliable as unicast. If a device provides the link-local address in this cluster, its Ethernet " +
        "controller or Wi-Fi radio shall respond to the IPv6 neighbor solicitation message for the link-local " +
        "address without the need to wake host CPU up. In order to receive the magic or neighbor solicitation " +
        "packets in multicast, the Wi-Fi devices must support Group Temporal Key (GTK) rekey operation in low " +
        "power mode." +
        "\n" +
        "Most devices automatically enter low power mode based upon inactivity." +
        "\n" +
        "The cluster server for Wake on LAN or Wake on WLAN is implemented by a device that supports the Wake " +
        "on LAN/WLAN protocol, such as a TV, Set-top Box, or Smart Speaker.",

    xref: { document: "cluster", section: "1.12" }
});
