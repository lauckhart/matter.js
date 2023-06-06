/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { ClusterElement, AttributeElement, DatatypeElement, EventElement, CommandElement } from "../../index.js";

Matter.children.push(ClusterElement({
    id: 0x0038, name: "TimeSync",
    classification: "node",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "TZ",
                    description: "Server supports time zone.",
                    xref: { section: "11.16.5", document: "core", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "NTPC",
                    description: "Server supports an NTP or SNTP client.",
                    xref: { section: "11.16.5", document: "core", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "NTPS",
                    description: "Server supports an NTP server role.",
                    xref: { section: "11.16.5", document: "core", version: "1.1" }
                })
            ]
        }),

        AttributeElement({
            id: 0x0000, name: "UtcTime", base: "epoch-us",
            access: "R V", conformance: "M", default: "null", quality: "X C",
            details: "If the server has achieved time synchronization, this SHALL indicate the current time as a UTC epoch-us (Epoch Time in Microseconds).",
            xref: { section: "11.16.8.1", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "Granularity", base: "GranularityEnum",
            access: "R V", conformance: "M", constraint: "desc", default: "NoTimeGranularity",
            details: "The granularity of the error that the server is willing to guarantee on the time synchronization. It is of type GranularityEnum.",
            xref: { section: "11.16.8.2", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "TimeSource", base: "TimeSourceEnum",
            access: "R V", conformance: "O", constraint: "desc", default: "None",
            details: "The server’s time source. This attribute indicates what method the server is using to sync, whether the source uses NTS or not and whether the source is internal or external to the Fabric. This attribute MAY be used by a client to determine its level of trust in the UTCTime. It is of type TimeSourceEnum.",
            xref: { section: "11.16.8.3", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "TrustedTimeNodeId", base: "node-id",
            access: "RW VA", conformance: "M", default: "null", quality: "X",
            details: "The Node ID of a trusted Time Cluster. The TrustedTimeNodeId Node is used as a check on external time sync sources and MAY be used as the primary time source if other time sources are unavailable. See Section 11.16.13, “Time source prioritization”. This attribute is writeable only by an Administrator. It SHOULD be set by the Commissioner during commissioning. If no appropriate TrustedTimeNodeId is available, the commissioner MAY set this value to null.",
            xref: { section: "11.16.8.5", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0004, name: "DefaultNtp", base: "string",
            access: "RW VA", conformance: "NTPC", constraint: "max 128", default: "null", quality: "X",
            details: "The default NTP server the server’s Node may use if other time sources are unavailable. This attribute may contain a domain name or a static IPv6 address in text format as specified in RFC 5952 [https://tools.ietf.org/html/rfc5952]. See Section 11.16.13, “Time source prioritization”. This attribute is writeable only by an Administrator. It SHOULD be set by the Commissioner during commissioning. If no default NTP is available, the Commissioner MAY set this value to null.",
            xref: { section: "11.16.8.4", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0005, name: "TimeZone", base: "list[TimeZoneStruct]",
            access: "RW VM", conformance: "TZ", constraint: "1 to 2", default: "{0,0}",
            details: "A list of time zone offsets from UTC and when they SHALL take effect. This attribute uses a list of time offset configurations to allow Nodes to handle scheduled regulatory time zone changes. This attribute SHALL NOT be used to indicate daylight savings time changes (see Section 11.16.8.7, “DSTOffset Attribute” for daylight savings time).",
            xref: { section: "11.16.8.6", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0006, name: "DstOffset", base: "list[DSTOffsetStruct]",
            access: "RW VM", conformance: "TZ", constraint: "max 20", default: "{}",
            details: "A list of offsets to apply for daylight savings time, and their validity period. List entries SHALL be sorted by ValidStarting time.",
            xref: { section: "11.16.8.7", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0007, name: "LocalTime", base: "epoch-us",
            access: "R V", conformance: "TZ", default: "0", quality: "X C",
            details: "The computed current local time of the server as a epoch-us (Epoch Time in Microseconds). The local time offset of the value is the sum of the currently used TimeZoneEntry’s offset and the currently used DST offset, if any.",
            xref: { section: "11.16.8.8", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0008, name: "TimeZoneDatabase", base: "bool",
            access: "R V", conformance: "TZ", default: {}, quality: "F",
            details: "Indicates whether the server has access to a time zone database. Nodes with a time zone database MAY update their own DSTOffset attribute to add new entries and MAY push DSTOffset updates to other Nodes in the same time zone as required.",
            xref: { section: "11.16.8.9", document: "core", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0009, name: "NtpServerPort", base: "uint16",
            access: "R V", conformance: "NTPS", default: NaN, quality: "X",
            details: "If the server is running an NTP server, this value SHALL be the port number for the service. If the server is not currently running an NTP server, this value SHALL be null.",
            xref: { section: "11.16.8.10", document: "core", version: "1.1" }
        }),

        EventElement({
            id: 0x0000, name: "DstTableEmpty",
            access: "V", conformance: "TZ", priority: "info",
            details: "This event SHALL be generated when the server stops applying the current DSTOffset and there are no entries in the list with a larger ValidStarting time, indicating the need to possibly get new DST data.",
            xref: { section: "11.16.10.1", document: "core", version: "1.1" }
        }),

        EventElement({
            id: 0x0001, name: "DstStatus",
            access: "V", conformance: "TZ", priority: "info",
            details: "This event SHALL be generated when the server starts or stops applying a DST offset.",
            xref: { section: "11.16.10.2", document: "core", version: "1.1" }
        }),

        EventElement({
            id: 0x0002, name: "TimeZoneStatus",
            access: "V", conformance: "TZ", priority: "info",
            details: "This event SHALL be generated when the server changes its time zone offset or name. It SHALL NOT be sent for DST changes that are not accompanied by a time zone change.",
            xref: { section: "11.16.10.3", document: "core", version: "1.1" }
        }),

        CommandElement({
            id: 0x0000, name: "SetUtcTime",
            access: "A", conformance: "M", direction: "request", response: "status",
            details: "The data for this command are as follows:",
            xref: { section: "11.16.9.1", document: "core", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "GranularityEnum", base: "enum8.",
            details: "This data type is derived from enum8.",
            xref: { section: "11.16.6.1", document: "core", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "NoTimeGranularity",
                    conformance: "M",
                    xref: { section: "11.16.6.1", document: "core", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "MinutesGranularity",
                    conformance: "M",
                    xref: { section: "11.16.6.1", document: "core", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "SecondsGranularity",
                    conformance: "M",
                    xref: { section: "11.16.6.1", document: "core", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0003, name: "MillisecondsGranularity",
                    conformance: "M",
                    xref: { section: "11.16.6.1", document: "core", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0004, name: "MicrosecondsGranularity",
                    conformance: "M",
                    xref: { section: "11.16.6.1", document: "core", version: "1.1" }
                })
            ]
        })
    ]
}))
