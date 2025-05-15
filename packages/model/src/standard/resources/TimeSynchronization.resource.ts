/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { TimeSynchronization } from "#index.js";

TimeSynchronization.patch({
    details: "Accurate time is required for a number of reasons, including scheduling, display and validating " +
        "security materials." +
        "\n" +
        "This section describes a mechanism for Nodes to achieve and maintain time synchronization. The Time " +
        "Synchronization cluster provides attributes for reading a Node’s current time. It also allows " +
        "Administrators to set current time, time zone and daylight savings time (DST) settings." +
        "\n" +
        "The Time Synchronization cluster may be present on the root node endpoint, and shall NOT be present " +
        "on any other Endpoint of any Node.",

    xref: { document: "core", section: "11.17" },

    children: [
        undefined,

        {
            children: [
                { description: "TimeZone" },
                { description: "NtpClient" },
                { description: "NtpServer" },
                { description: "TimeSyncClient" }
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
        undefined,
        undefined,
        undefined,
        undefined,

        {
            children: [
                {
                    description: "This indicates that the node is not currently synchronized with a UTC Time source and its clock is based on the Last Known Good UTC Time only."
                },
                {
                    description: "This indicates the node was synchronized to an upstream source in the past, but sufficient clock drift has occurred such that the clock error is now > 5 seconds."
                },
                {
                    description: "This indicates the node is synchronized to an upstream source using a low resolution protocol. UTC Time is accurate to ± 5 seconds."
                },
                {
                    description: "This indicates the node is synchronized to an upstream source using high resolution time- synchronization protocol such as NTP, or has built-in GNSS with some amount of jitter applying its GNSS timestamp. UTC Time is accurate to ± 50 ms."
                },
                {
                    description: "This indicates the node is synchronized to an upstream source using a highly precise time- synchronization protocol such as PTP, or has built-in GNSS. UTC time is accurate to ± 10 μs."
                }
            ]
        },

        {
            children: [
                { description: "Node is not currently synchronized with a UTC Time source." },
                { description: "Node uses an unlisted time source." },
                { description: "Node received time from a client using the SetUTCTime Command." },
                { description: "Synchronized time by querying the Time Synchronization cluster of another Node." },
                { description: "SNTP from a server not in the Matter network. NTS is not used." },
                { description: "NTP from servers not in the Matter network. None of the servers used NTS." },
                { description: "SNTP from a server within the Matter network. NTS is not used." },
                { description: "NTP from servers within the Matter network. None of the servers used NTS." },
                {
                    description: "NTP from multiple servers in the Matter network and external. None of the servers used NTS."
                },
                { description: "SNTP from a server not in the Matter network. NTS is used." },
                { description: "NTP from servers not in the Matter network. NTS is used on at least one server." },
                { description: "SNTP from a server within the Matter network. NTS is used." },
                { description: "NTP from a server within the Matter network. NTS is used on at least one server." },
                {
                    description: "NTP from multiple servers in the Matter network and external. NTS is used on at least one server."
                },
                {
                    description: "Time synchronization comes from a vendor cloud-based source (e.g. \"Date\" header in authenticated HTTPS connection)."
                },
                { description: "Time synchronization comes from PTP." },
                { description: "Time synchronization comes from a GNSS source." }
            ]
        },

        {
            children: [
                { description: "Node has a full list of the available time zones" },
                { description: "Node has a partial list of the available time zones" },
                { description: "Node does not have a time zone database" }
            ]
        },

        undefined,
        undefined,
        undefined,
        undefined,
        { children: [{ description: "Node rejected the attempt to set the UTC time" }] }
    ]
});
