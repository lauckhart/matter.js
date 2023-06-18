/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0038, name: "TimeSynchronization",
    classification: "node", description: "Time Synchronization",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "UtcTime",
            access: "R V", conformance: "M", default: "null", quality: "X C", type: "epoch-us",
            details: "If the server has achieved time synchronization, this SHALL indicate " +
                     "the current time as a UTC epoch-us (Epoch Time in Microseconds",
            xref: { document: "core", section: "11.16.8.1" }
        },

        {
            tag: "attribute", id: 0x0001, name: "Granularity",
            access: "R V", conformance: "M", constraint: "desc", default: 0, type: "GranularityEnum",
            details: "The granularity of the error that the server is willing to guarantee " +
                     "on the time synchronization. It is of type GranularityEnum",
            xref: { document: "core", section: "11.16.8.2" }
        },

        {
            tag: "attribute", id: 0x0002, name: "TimeSource",
            access: "R V", conformance: "O", constraint: "desc", default: 0, type: "TimeSourceEnum",
            details: "The server’s time source. This attribute indicates what method the " +
                     "server is using to sync, whether the source uses NTS or not and " +
                     "whether the source is internal or external to the Fabric. This " +
                     "attribute MAY be used by a client to determine its level of trust in " +
                     "the UTCTime. It is of type TimeSourceEnum",
            xref: { document: "core", section: "11.16.8.3" }
        },

        {
            tag: "attribute", id: 0x0003, name: "TrustedTimeNodeId",
            access: "RW VA", conformance: "M", default: "null", quality: "X", type: "node-id",
            details: "The Node ID of a trusted Time Cluster. The TrustedTimeNodeId Node is " +
                     "used as a check on external time sync sources and MAY be used as the " +
                     "primary time source if other time sources are unavailable. See Section" +
                     " 11.16.13, “Time source prioritization”. This attribute is writeable " +
                     "only by an Administrator. It SHOULD be set by the Commissioner during " +
                     "commissioning. If no appropriate TrustedTimeNodeId is available, the " +
                     "commissioner MAY set this value to null",
            xref: { document: "core", section: "11.16.8.5" }
        },

        {
            tag: "attribute", id: 0x0004, name: "DefaultNtp",
            access: "RW VA", conformance: "NTPC", constraint: "max 128", default: "null", quality: "X", type: "string",
            details: "The default NTP server the server’s Node may use if other time sources" +
                     " are unavailable. This attribute may contain a domain name or a static" +
                     " IPv6 address in text format as specified in RFC 5952 [https://tools." +
                     "ietf.org/html/rfc5952]. See Section 11.16.13, “Time source " +
                     "prioritization”. This attribute is writeable only by an Administrator" +
                     ". It SHOULD be set by the Commissioner during commissioning. If no " +
                     "default NTP is available, the Commissioner MAY set this value to null",
            xref: { document: "core", section: "11.16.8.4" }
        },

        {
            tag: "attribute", id: 0x0005, name: "TimeZone",
            access: "RW VM", conformance: "TZ", constraint: "1 to 2", default: "{0,0}", type: "list",
            details: "A list of time zone offsets from UTC and when they SHALL take effect. " +
                     "This attribute uses a list of time offset configurations to allow " +
                     "Nodes to handle scheduled regulatory time zone changes. This attribute" +
                     " SHALL NOT be used to indicate daylight savings time changes (see " +
                     "Section 11.16.8.7, “DSTOffset Attribute” for daylight savings time",
            xref: { document: "core", section: "11.16.8.6" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "TimeZoneStruct"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0006, name: "DstOffset",
            access: "RW VM", conformance: "TZ", constraint: "max 20", default: "{}", type: "list",
            details: "A list of offsets to apply for daylight savings time, and their " +
                     "validity period. List entries SHALL be sorted by ValidStarting time",
            xref: { document: "core", section: "11.16.8.7" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "DstOffsetStruct"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0007, name: "LocalTime",
            access: "R V", conformance: "TZ", default: 0, quality: "X C", type: "epoch-us",
            details: "The computed current local time of the server as a epoch-us (Epoch " +
                     "Time in Microseconds). The local time offset of the value is the sum " +
                     "of the currently used TimeZoneEntry’s offset and the currently used " +
                     "DST offset, if any",
            xref: { document: "core", section: "11.16.8.8" }
        },

        {
            tag: "attribute", id: 0x0008, name: "TimeZoneDatabase",
            access: "R V", conformance: "TZ", default: true, quality: "F", type: "bool",
            details: "Indicates whether the server has access to a time zone database. Nodes" +
                     " with a time zone database MAY update their own DSTOffset attribute to" +
                     " add new entries and MAY push DSTOffset updates to other Nodes in the " +
                     "same time zone as required",
            xref: { document: "core", section: "11.16.8.9" }
        },

        {
            tag: "attribute", id: 0x0009, name: "NtpServerPort",
            access: "R V", conformance: "NTPS", default: "null", quality: "X", type: "uint16",
            details: "If the server is running an NTP server, this value SHALL be the port " +
                     "number for the service. If the server is not currently running an NTP " +
                     "server, this value SHALL be null",
            xref: { document: "core", section: "11.16.8.10" }
        },

        {
            tag: "event", id: 0x0000, name: "DstTableEmpty",
            access: "V", conformance: "TZ", priority: "info",
            details: "This event SHALL be generated when the server stops applying the " +
                     "current DSTOffset and there are no entries in the list with a larger " +
                     "ValidStarting time, indicating the need to possibly get new DST data",
            xref: { document: "core", section: "11.16.10.1" }
        },

        {
            tag: "event", id: 0x0001, name: "DstStatus",
            access: "V", conformance: "TZ", priority: "info",
            details: "This event SHALL be generated when the server starts or stops applying" +
                     " a DST offset",
            xref: { document: "core", section: "11.16.10.2" }
        },

        {
            tag: "event", id: 0x0002, name: "TimeZoneStatus",
            access: "V", conformance: "TZ", priority: "info",
            details: "This event SHALL be generated when the server changes its time zone " +
                     "offset or name. It SHALL NOT be sent for DST changes that are not " +
                     "accompanied by a time zone change",
            xref: { document: "core", section: "11.16.10.3" }
        },

        {
            tag: "command", id: 0x0000, name: "SetUtcTime",
            access: "A", conformance: "M", direction: "request", response: "status",
            details: "The data for this command are as follows",
            xref: { document: "core", section: "11.16.9.1" },
            children: [
                {
                    tag: "datatype", name: "UtcTime",
                    conformance: "M", type: "epoch-us"
                },

                {
                    tag: "datatype", name: "Granularity",
                    conformance: "M", type: "GranularityEnum"
                },

                {
                    tag: "datatype", name: "TimeSource",
                    conformance: "O", type: "TimeSourceEnum"
                }
            ]
        },

        {
            tag: "datatype", name: "GranularityEnum",
            conformance: "M", type: "enum8",
            details: "This data type is derived from enum8",
            xref: { document: "core", section: "11.16.6.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "NoTimeGranularity",
                    conformance: "M",
                    xref: { document: "core", section: "11.16.6.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "MinutesGranularity",
                    conformance: "M",
                    xref: { document: "core", section: "11.16.6.1" }
                },

                {
                    tag: "datatype", id: 0x0002, name: "SecondsGranularity",
                    conformance: "M",
                    xref: { document: "core", section: "11.16.6.1" }
                },

                {
                    tag: "datatype", id: 0x0003, name: "MillisecondsGranularity",
                    conformance: "M",
                    xref: { document: "core", section: "11.16.6.1" }
                },

                {
                    tag: "datatype", id: 0x0004, name: "MicrosecondsGranularity",
                    conformance: "M",
                    xref: { document: "core", section: "11.16.6.1" }
                }
            ]
        },

        {
            tag: "datatype", name: "TimeSourceEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "None",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Unknown",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Admin",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "NodeTimeCluster",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "NonFabricSntp",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "NonFabricNtp",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0006, name: "FabricSntp",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0007, name: "FabricNtp",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "MixedNtp",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0009, name: "NonFabricSntpNts",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000a, name: "NonFabricNtpNts",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000b, name: "FabricSntpNts",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000c, name: "FabricNtpNts",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000d, name: "MixedNtpNts",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000e, name: "CloudSource",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000f, name: "Ptp",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0010, name: "Gnss",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "TimeZoneStruct",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "Offset",
                    conformance: "M", type: "int32"
                },

                {
                    tag: "datatype", name: "ValidAt",
                    conformance: "M", type: "epoch-us"
                },

                {
                    tag: "datatype", name: "Name",
                    conformance: "O", type: "string"
                }
            ]
        },

        {
            tag: "datatype", name: "DstOffsetStruct",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "Offset",
                    conformance: "M", type: "int32"
                },

                {
                    tag: "datatype", name: "ValidStarting",
                    conformance: "M", type: "epoch-us"
                },

                {
                    tag: "datatype", name: "ValidUntil",
                    conformance: "M", type: "epoch-us"
                }
            ]
        }
    ]
});
