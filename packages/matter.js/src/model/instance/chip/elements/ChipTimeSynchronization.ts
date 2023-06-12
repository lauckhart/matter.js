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
            quality: "X"
        }),

        AttributeElement({
            id: 0x0001, name: "Granularity", base: "GranularityEnum",
            default: 0
        }),

        AttributeElement({
            id: 0x0002, name: "TimeSource", base: "TimeSourceEnum",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0003, name: "TrustedTimeNodeId", base: "node-id",
            access: "RW VA", quality: "X"
        }),

        AttributeElement({
            id: 0x0004, name: "DefaultNtp", base: "string",
            access: "RW VA", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0005, name: "TimeZone", base: "list",
            access: "RW VM", conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", base: "TimeZoneStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0006, name: "DstOffset", base: "list",
            access: "RW VM", conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", base: "DstOffsetStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0007, name: "LocalTime", base: "epoch-us",
            conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0008, name: "TimeZoneDatabase", base: "bool",
            conformance: "O", default: true
        }),

        AttributeElement({
            id: 0x0009, name: "NtpServerPort", base: "uint16",
            conformance: "O", quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "SetUtcTime",
            direction: "request",
            children: [
                DatatypeElement({
                    name: "UtcTime", base: "epoch-us"
                }),

                DatatypeElement({
                    name: "Granularity", base: "GranularityEnum"
                }),

                DatatypeElement({
                    name: "TimeSource", base: "TimeSourceEnum",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "GranularityEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "NoTimeGranularity"
                }),

                DatatypeElement({
                    id: 0x0001, name: "MinutesGranularity"
                }),

                DatatypeElement({
                    id: 0x0002, name: "SecondsGranularity"
                }),

                DatatypeElement({
                    id: 0x0003, name: "MillisecondsGranularity"
                }),

                DatatypeElement({
                    id: 0x0004, name: "MicrosecondsGranularity"
                })
            ]
        }),

        DatatypeElement({
            name: "TimeSourceEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "None"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Unknown"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Admin"
                }),

                DatatypeElement({
                    id: 0x0003, name: "NodeTimeCluster"
                }),

                DatatypeElement({
                    id: 0x0004, name: "NonFabricSntp"
                }),

                DatatypeElement({
                    id: 0x0005, name: "NonFabricNtp"
                }),

                DatatypeElement({
                    id: 0x0006, name: "FabricSntp"
                }),

                DatatypeElement({
                    id: 0x0007, name: "FabricNtp"
                }),

                DatatypeElement({
                    id: 0x0008, name: "MixedNtp"
                }),

                DatatypeElement({
                    id: 0x0009, name: "NonFabricSntpNts"
                }),

                DatatypeElement({
                    id: 0x000a, name: "NonFabricNtpNts"
                }),

                DatatypeElement({
                    id: 0x000b, name: "FabricSntpNts"
                }),

                DatatypeElement({
                    id: 0x000c, name: "FabricNtpNts"
                }),

                DatatypeElement({
                    id: 0x000d, name: "MixedNtpNts"
                }),

                DatatypeElement({
                    id: 0x000e, name: "CloudSource"
                }),

                DatatypeElement({
                    id: 0x000f, name: "Ptp"
                }),

                DatatypeElement({
                    id: 0x0010, name: "Gnss"
                })
            ]
        }),

        DatatypeElement({
            name: "TimeZoneStruct", base: "struct",
            children: [
                DatatypeElement({
                    name: "Offset", base: "int32"
                }),

                DatatypeElement({
                    name: "ValidAt", base: "epoch-us"
                }),

                DatatypeElement({
                    name: "Name", base: "string",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "DstOffsetStruct", base: "struct",
            children: [
                DatatypeElement({
                    name: "Offset", base: "int32"
                }),

                DatatypeElement({
                    name: "ValidStarting", base: "epoch-us"
                }),

                DatatypeElement({
                    name: "ValidUntil", base: "epoch-us"
                })
            ]
        })
    ]
}));
