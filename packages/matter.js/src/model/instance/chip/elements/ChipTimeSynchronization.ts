/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0038, name: "TimeSynchronization",
    description: "Time Synchronization",
    details: "Accurate time is required for a number of reasons, including scheduling, display and validating security materials.",
    children: [
        AttributeElement({
            id: 0x0000, name: "UtcTime", base: "epoch-us",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0001, name: "Granularity", base: "GranularityEnum",
            conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0002, name: "TimeSource", base: "TimeSourceEnum",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0003, name: "TrustedTimeNodeId", base: "node-id",
            access: "RW VA", conformance: "M", quality: "X"
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
            conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "UtcTime", base: "epoch-us",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Granularity", base: "GranularityEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "TimeSource", base: "TimeSourceEnum",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "GranularityEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "NoTimeGranularity",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "MinutesGranularity",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "SecondsGranularity",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "MillisecondsGranularity",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "MicrosecondsGranularity",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "TimeSourceEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "None",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Unknown",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Admin",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "NodeTimeCluster",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "NonFabricSntp",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "NonFabricNtp",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "FabricSntp",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "FabricNtp",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "MixedNtp",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "NonFabricSntpNts",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000a, name: "NonFabricNtpNts",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000b, name: "FabricSntpNts",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000c, name: "FabricNtpNts",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000d, name: "MixedNtpNts",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000e, name: "CloudSource",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000f, name: "Ptp",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0010, name: "Gnss",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "TimeZoneStruct", base: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "Offset", base: "int32",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ValidAt", base: "epoch-us",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Name", base: "string",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "DstOffsetStruct", base: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "Offset", base: "int32",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ValidStarting", base: "epoch-us",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ValidUntil", base: "epoch-us",
                    conformance: "M"
                })
            ]
        })
    ]
}));
