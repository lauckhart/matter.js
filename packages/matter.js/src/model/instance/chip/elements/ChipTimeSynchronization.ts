/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0038, name: "TimeSynchronization",
    description: "Time Synchronization",
    details: "Accurate time is required for a number of reasons, including scheduling, display and validating security materials.",
    children: [
        AttributeElement({
            id: 0x0000, name: "UtcTime", base: "epoch-us",
            access: "R", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0001, name: "Granularity", base: "GranularityEnum",
            access: "R", conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0002, name: "TimeSource", base: "TimeSourceEnum",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0003, name: "TrustedTimeNodeId", base: "node-id",
            access: "W VA", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0004, name: "DefaultNtp", base: "string",
            access: "W VA", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0005, name: "TimeZone", base: "list",
            access: "W VM", conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", base: "TimeZoneStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0006, name: "DstOffset", base: "list",
            access: "W VM", conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", base: "DstOffsetStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0007, name: "LocalTime", base: "epoch-us",
            access: "R", conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0008, name: "TimeZoneDatabase", base: "bool",
            access: "R", conformance: "O", default: true
        }),

        AttributeElement({
            id: 0x0009, name: "NtpServerPort", base: "uint16",
            access: "R", conformance: "O", quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "SetUtcTime",
            access: "R", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "UtcTime", base: "epoch-us",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Granularity", base: "GranularityEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "TimeSource", base: "TimeSourceEnum",
                    access: "R", conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "GranularityEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "NoTimeGranularity",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "MinutesGranularity",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "SecondsGranularity",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "MillisecondsGranularity",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "MicrosecondsGranularity",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "TimeSourceEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "None",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Unknown",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Admin",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "NodeTimeCluster",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "NonFabricSntp",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "NonFabricNtp",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "FabricSntp",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "FabricNtp",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "MixedNtp",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "NonFabricSntpNts",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000a, name: "NonFabricNtpNts",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000b, name: "FabricSntpNts",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000c, name: "FabricNtpNts",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000d, name: "MixedNtpNts",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000e, name: "CloudSource",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000f, name: "Ptp",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "Gnss",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "TimeZoneStruct", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "Offset", base: "int32",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "ValidAt", base: "epoch-us",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Name", base: "string",
                    access: "R", conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "DstOffsetStruct", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "Offset", base: "int32",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "ValidStarting", base: "epoch-us",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "ValidUntil", base: "epoch-us",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
