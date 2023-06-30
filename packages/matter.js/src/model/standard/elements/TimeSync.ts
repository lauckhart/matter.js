/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "TimeSync", id: 0x38, classification: "node",
    description: "Time Synchronization",
    details: "Accurate time is required for a number of reasons, including scheduling, display and validating " +
             "security materials.",
    xref: { document: "core", section: "11.16" },

    children: [
        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",
            xref: { document: "core", section: "11.16.5" },

            children: [
                {
                    tag: "datatype", name: "TZ", id: 0x0, description: "TimeZone",
                    details: "Server supports time zone."
                },
                {
                    tag: "datatype", name: "NTPC", id: 0x1, description: "NtpClient",
                    details: "Server supports an NTP or SNTP client."
                },
                {
                    tag: "datatype", name: "NTPS", id: 0x2, description: "NtpServer",
                    details: "Server supports an NTP server role."
                }
            ]
        },

        {
            tag: "attribute", name: "UtcTime", id: 0x0, type: "epoch-us", access: "R V", conformance: "M",
            default: null, quality: "X C",
            details: "If the server has achieved time synchronization, this SHALL indicate the current time as a UTC " +
                     "epoch-us (Epoch Time in Microseconds).",
            xref: { document: "core", section: "11.16.8.1" }
        },

        {
            tag: "attribute", name: "Granularity", id: 0x1, type: "GranularityEnum", access: "R V",
            conformance: "M", constraint: "desc",
            details: "The granularity of the error that the server is willing to guarantee on the time synchronization. " +
                     "It is of type GranularityEnum.",
            xref: { document: "core", section: "11.16.8.2" }
        },

        {
            tag: "attribute", name: "TimeSource", id: 0x2, type: "TimeSourceEnum", access: "R V",
            conformance: "O", constraint: "desc",
            details: "The server’s time source. This attribute indicates what method the server is using to sync, whether " +
                     "the source uses NTS or not and whether the source is internal or external to the Fabric. This " +
                     "attribute MAY be used by a client to determine its level of trust in the UTCTime. It is of type " +
                     "TimeSourceEnum.",
            xref: { document: "core", section: "11.16.8.3" }
        },

        {
            tag: "attribute", name: "TrustedTimeNodeId", id: 0x3, type: "node-id", access: "RW VA",
            conformance: "M", default: null, quality: "X",
            details: "The Node ID of a trusted Time Cluster. The TrustedTimeNodeId Node is used as a check on external " +
                     "time sync sources and MAY be used as the primary time source if other time sources are unavailable. " +
                     "See Section 11.16.13, “Time source prioritization”. This attribute is writeable only by an " +
                     "Administrator. It SHOULD be set by the Commissioner during commissioning. If no appropriate " +
                     "TrustedTimeNodeId is available, the commissioner MAY set this value to null.",
            xref: { document: "core", section: "11.16.8.5" }
        },

        {
            tag: "attribute", name: "DefaultNtp", id: 0x4, type: "string", access: "RW VA", conformance: "NTPC",
            constraint: "max 128", default: null, quality: "X",
            details: "The default NTP server the server’s Node may use if other time sources are unavailable. This " +
                     "attribute may contain a domain name or a static IPv6 address in text format as specified in RFC " +
                     "5952 [https://tools.ietf.org/html/rfc5952]. See Section 11.16.13, “Time source prioritization”. " +
                     "This attribute is writeable only by an Administrator. It SHOULD be set by the Commissioner during " +
                     "commissioning. If no default NTP is available, the Commissioner MAY set this value to null.",
            xref: { document: "core", section: "11.16.8.4" }
        },

        {
            tag: "attribute", name: "TimeZone", id: 0x5, type: "list", access: "RW VM", conformance: "TZ",
            constraint: "1 to 2",
            details: "A list of time zone offsets from UTC and when they SHALL take effect. This attribute uses a list of " +
                     "time offset configurations to allow Nodes to handle scheduled regulatory time zone changes. This " +
                     "attribute SHALL NOT be used to indicate daylight savings time changes (see Section 11.16.8.7, " +
                     "“DSTOffset Attribute” for daylight savings time).",
            xref: { document: "core", section: "11.16.8.6" },
            children: [ { tag: "datatype", name: "entry", type: "TimeZoneStruct" } ]
        },

        {
            tag: "attribute", name: "DstOffset", id: 0x6, type: "list", access: "RW VM", conformance: "TZ",
            constraint: "max 20",
            details: "A list of offsets to apply for daylight savings time, and their validity period. List entries SHALL " +
                     "be sorted by ValidStarting time.",
            xref: { document: "core", section: "11.16.8.7" },
            children: [ { tag: "datatype", name: "entry", type: "DSTOffsetStruct" } ]
        },

        {
            tag: "attribute", name: "LocalTime", id: 0x7, type: "epoch-us", access: "R V", conformance: "TZ",
            quality: "X C",
            details: "The computed current local time of the server as a epoch-us (Epoch Time in Microseconds). The local " +
                     "time offset of the value is the sum of the currently used TimeZoneEntry’s offset and the currently " +
                     "used DST offset, if any.",
            xref: { document: "core", section: "11.16.8.8" }
        },

        {
            tag: "attribute", name: "TimeZoneDatabase", id: 0x8, type: "bool", access: "R V", conformance: "TZ",
            default: true, quality: "F",
            details: "Indicates whether the server has access to a time zone database. Nodes with a time zone database " +
                     "MAY update their own DSTOffset attribute to add new entries and MAY push DSTOffset updates to other " +
                     "Nodes in the same time zone as required.",
            xref: { document: "core", section: "11.16.8.9" }
        },

        {
            tag: "attribute", name: "NtpServerPort", id: 0x9, type: "uint16", access: "R V",
            conformance: "NTPS", default: null, quality: "X",
            details: "If the server is running an NTP server, this value SHALL be the port number for the service. If the " +
                     "server is not currently running an NTP server, this value SHALL be null.",
            xref: { document: "core", section: "11.16.8.10" }
        },

        {
            tag: "event", name: "DstTableEmpty", id: 0x0, access: "V", conformance: "TZ", priority: "info",
            details: "This event SHALL be generated when the server stops applying the current DSTOffset and there are no " +
                     "entries in the list with a larger ValidStarting time, indicating the need to possibly get new DST " +
                     "data.",
            xref: { document: "core", section: "11.16.10.1" }
        },

        {
            tag: "event", name: "DstStatus", id: 0x1, access: "V", conformance: "TZ", priority: "info",
            details: "This event SHALL be generated when the server starts or stops applying a DST offset.",
            xref: { document: "core", section: "11.16.10.2" }
        },

        {
            tag: "event", name: "TimeZoneStatus", id: 0x2, access: "V", conformance: "TZ", priority: "info",
            details: "This event SHALL be generated when the server changes its time zone offset or name. It SHALL NOT be " +
                     "sent for DST changes that are not accompanied by a time zone change.",
            xref: { document: "core", section: "11.16.10.3" },
            children: [
                { tag: "datatype", name: "Offset", id: 0x0, type: "int32", conformance: "M" },
                { tag: "datatype", name: "Name", id: 0x1, type: "string", conformance: "O" }
            ]
        },

        {
            tag: "command", name: "SetUtcTime", id: 0x0, access: "A", conformance: "M", direction: "request",
            response: "status",
            details: "The data for this command are as follows:",
            xref: { document: "core", section: "11.16.9.1" },

            children: [
                {
                    tag: "datatype", name: "UtcTime", id: 0x0, type: "epoch-us", conformance: "M",
                    details: "This SHALL give the Client’s UTC Time.",
                    xref: { document: "core", section: "11.16.9.1.1" }
                },

                {
                    tag: "datatype", name: "Granularity", id: 0x1, type: "GranularityEnum", conformance: "M",
                    details: "This SHALL give the Client’s Granularity, as described in Section 11.16.8.2, “Granularity " +
                             "Attribute”.",
                    xref: { document: "core", section: "11.16.9.1.2" }
                },

                {
                    tag: "datatype", name: "TimeSource", id: 0x2, type: "TimeSourceEnum", conformance: "O",
                    details: "This SHALL give the Client’s TimeSource, as described in Section 11.16.8.3, “TimeSource Attribute”.",
                    xref: { document: "core", section: "11.16.9.1.3" }
                }
            ]
        },

        {
            tag: "datatype", name: "StatusCode", type: "status",

            children: [
                {
                    tag: "datatype", name: "TimeNotAccepted", id: 0x2,
                    details: "Server rejected the attempt to set the UTC time",
                    xref: { document: "core", section: "11.16.7" }
                }
            ]
        },

        {
            tag: "datatype", name: "GranularityEnum", type: "enum8", conformance: "M",
            details: "This data type is derived from enum8.",
            xref: { document: "core", section: "11.16.6.1" },

            children: [
                { tag: "datatype", name: "NoTimeGranularity", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "MinutesGranularity", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "SecondsGranularity", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "MillisecondsGranularity", id: 0x3, conformance: "M" },
                { tag: "datatype", name: "MicrosecondsGranularity", id: 0x4, conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "TimeSourceEnum", type: "enum8", conformance: "M",
            details: "This data type is derived from enum8.",
            xref: { document: "core", section: "11.16.6.2" },

            children: [
                {
                    tag: "datatype", name: "None", id: 0x0, conformance: "M",
                    description: "Server is not currently synchronized with a UTC Time source."
                },
                {
                    tag: "datatype", name: "Unknown", id: 0x1, conformance: "M",
                    description: "Server uses an unlisted time source."
                },
                {
                    tag: "datatype", name: "Admin", id: 0x2, conformance: "M",
                    description: "Server received time from the Section 11.16.9.1, “SetUtcTime Command”."
                },
                {
                    tag: "datatype", name: "NodeTimeCluster", id: 0x3, conformance: "M",
                    description: "Synchronized time by querying the Time Cluster of another Node."
                },
                {
                    tag: "datatype", name: "NonFabricSntp", id: 0x4, conformance: "M",
                    description: "SNTP from a server not in the Fabric. NTS is not used."
                },
                {
                    tag: "datatype", name: "NonFabricNtp", id: 0x5, conformance: "M",
                    description: "NTP from servers not in the Fabric. None of the servers used NTS."
                },
                {
                    tag: "datatype", name: "FabricSntp", id: 0x6, conformance: "M",
                    description: "SNTP from a server within the Fabric. NTS is not used."
                },
                {
                    tag: "datatype", name: "FabricNtp", id: 0x7, conformance: "M",
                    description: "NTP from a servers within the Fabric. None of the servers used NTS."
                },
                {
                    tag: "datatype", name: "MixedNtp", id: 0x8, conformance: "M",
                    description: "NTP from multiple servers on Fabric and external. None of the servers used NTS."
                },
                {
                    tag: "datatype", name: "NonFabricSntpNts", id: 0x9, conformance: "M",
                    description: "SNTP from a server not in the Fabric. NTS is used."
                },
                {
                    tag: "datatype", name: "NonFabricNtpNts", id: 0xa, conformance: "M",
                    description: "NTP from servers not in the Fabric. NTS is used on at least one server."
                },
                {
                    tag: "datatype", name: "FabricSntpNts", id: 0xb, conformance: "M",
                    description: "SNTP from a server within the Fabric. NTS is used."
                },
                {
                    tag: "datatype", name: "FabricNtpNts", id: 0xc, conformance: "M",
                    description: "NTP from a server within the Fabric. NTS is used on at least one server."
                },
                {
                    tag: "datatype", name: "MixedNtpNts", id: 0xd, conformance: "M",
                    description: "NTP from multiple servers on the Fabric and external. NTS is used on at least one server."
                },
                {
                    tag: "datatype", name: "CloudSource", id: 0xe, conformance: "M",
                    description: "Time synchronization comes from a vendor cloud-based source (e.g. \"Date\" header in authenticated HTTPS connection)."
                },
                {
                    tag: "datatype", name: "Ptp", id: 0xf, conformance: "M",
                    description: "Time synchronization comes from PTP."
                },
                {
                    tag: "datatype", name: "Gnss", id: 0x10, conformance: "M",
                    description: "Time synchronization comes from a GNSS source."
                }
            ]
        },

        {
            tag: "datatype", name: "TimeZoneStruct", type: "struct", conformance: "M",
            xref: { document: "core", section: "11.16.6.3" },

            children: [
                {
                    tag: "datatype", name: "Offset", id: 0x0, type: "int32", conformance: "M",
                    details: "The time zone offset from UTC in seconds.",
                    xref: { document: "core", section: "11.16.6.3.1" }
                },
                {
                    tag: "datatype", name: "ValidAt", id: 0x1, type: "epoch-us", conformance: "M",
                    details: "The UTC time when the offset SHALL be applied.",
                    xref: { document: "core", section: "11.16.6.3.2" }
                },

                {
                    tag: "datatype", name: "Name", id: 0x2, type: "string", conformance: "O", constraint: "0 to 64",
                    details: "The time zone name SHOULD provide a human-readable time zone name and it SHOULD use the " +
                             "country/city format specified by the IANA time zone database [https://www.iana.org/time-zones].",
                    xref: { document: "core", section: "11.16.6.3.3" }
                }
            ]
        },

        {
            tag: "datatype", name: "DSTOffsetStruct", type: "struct", conformance: "M",
            details: "The DST offset in seconds. Normally this is in the range of 0 to 3600 seconds (1 hour), but this " +
                     "field will accept any values in the int32 range to accommodate potential future legislation that " +
                     "does not fit with these assumptions.",
            xref: { document: "core", section: "11.16.6.4" },

            children: [
                { tag: "datatype", name: "Offset", id: 0x0, type: "int32", conformance: "M", constraint: "desc" },
                {
                    tag: "datatype", name: "ValidStarting", id: 0x1, type: "epoch-us", conformance: "M",
                    details: "The UTC time when the offset SHALL be applied.",
                    xref: { document: "core", section: "11.16.6.4.1" }
                },

                {
                    tag: "datatype", name: "ValidUntil", id: 0x2, type: "epoch-us", conformance: "M",
                    details: "The UTC time when the offset SHALL stop being applied. This value SHALL be larger than the " +
                             "ValidStarting time.",
                    xref: { document: "core", section: "11.16.6.4.2" }
                }
            ]
        }
    ]
});