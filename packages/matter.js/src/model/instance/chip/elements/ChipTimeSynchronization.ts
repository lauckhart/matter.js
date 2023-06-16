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
            id: 0x0000, name: "UtcTime", type: "epoch-us",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0001, name: "Granularity", type: "GranularityEnum",
            conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0002, name: "TimeSource", type: "TimeSourceEnum",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0003, name: "TrustedTimeNodeId", type: "node-id",
            access: "RW VA", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0004, name: "DefaultNtp", type: "string",
            access: "RW VA", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0005, name: "TimeZone", type: "list",
            access: "RW VM", conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", type: "TimeZoneStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0006, name: "DstOffset", type: "list",
            access: "RW VM", conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", type: "DstOffsetStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0007, name: "LocalTime", type: "epoch-us",
            conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0008, name: "TimeZoneDatabase", type: "bool",
            conformance: "O", default: true
        }),

        AttributeElement({
            id: 0x0009, name: "NtpServerPort", type: "uint16",
            conformance: "O", quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "SetUtcTime",
            conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "UtcTime", type: "epoch-us",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Granularity", type: "GranularityEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "TimeSource", type: "TimeSourceEnum",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "GranularityEnum", type: "enum8",
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
            name: "TimeSourceEnum", type: "enum8",
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
            name: "TimeZoneStruct", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "Offset", type: "int32",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ValidAt", type: "epoch-us",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Name", type: "string",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "DstOffsetStruct", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "Offset", type: "int32",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ValidStarting", type: "epoch-us",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ValidUntil", type: "epoch-us",
                    conformance: "M"
                })
            ]
        })
    ]
}));
