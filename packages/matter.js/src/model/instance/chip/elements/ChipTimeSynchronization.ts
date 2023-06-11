/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0038, name: "TimeSynchronization",
    description: "Time Synchronization",
    details: "Accurate time is required for a number of reasons, including scheduling, display and validating security materials.",
    children: [
        AttributeElement({
            id: 0x0000, name: "utcTime", base: "epochUs",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0001, name: "granularity", base: "GranularityEnum",
            access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
        }),

        AttributeElement({
            id: 0x0002, name: "timeSource", base: "TimeSourceEnum",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x00"
        }),

        AttributeElement({
            id: 0x0003, name: "trustedTimeNodeId", base: "nodeId",
            access: { rw: "W", readPriv: "V", writePriv: "A" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0004, name: "defaultNtp", base: "string",
            access: { rw: "W", readPriv: "V", writePriv: "A" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0005, name: "timeZone", base: "list",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0006, name: "dstOffset", base: "list",
            access: { rw: "W", readPriv: "V", writePriv: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0007, name: "localTime", base: "epochUs",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }, value: "0x00"
        }),

        AttributeElement({
            id: 0x0008, name: "timeZoneDatabase", base: "bool",
            access: { rw: "R" }, conformance: [ "O" ], value: "0"
        }),

        AttributeElement({
            id: 0x0009, name: "ntpServerPort", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        CommandElement({
            id: 0x0000, name: "SetUtcTime",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "utcTime", base: "epochUs",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "utcTime", base: "epochUs",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "granularity", base: "GranularityEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "granularity", base: "GranularityEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "timeSource", base: "TimeSourceEnum",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "timeSource", base: "TimeSourceEnum",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        DatatypeElement({
            name: "GranularityEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "noTimeGranularity",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "noTimeGranularity",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "minutesGranularity",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "minutesGranularity",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "secondsGranularity",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "secondsGranularity",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "millisecondsGranularity",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "millisecondsGranularity",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "microsecondsGranularity",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "microsecondsGranularity",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                })
            ]
        }),

        DatatypeElement({
            name: "TimeSourceEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "none",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "none",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "unknown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "unknown",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "admin",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "admin",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "nodeTimeCluster",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "nodeTimeCluster",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "nonFabricSntp",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "nonFabricSntp",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "nonFabricNtp",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                }),

                DatatypeElement({
                    name: "nonFabricNtp",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                }),

                DatatypeElement({
                    name: "fabricSntp",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x06"
                }),

                DatatypeElement({
                    name: "fabricSntp",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x06"
                }),

                DatatypeElement({
                    name: "fabricNtp",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x07"
                }),

                DatatypeElement({
                    name: "fabricNtp",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x07"
                }),

                DatatypeElement({
                    name: "mixedNtp",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "mixedNtp",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "nonFabricSntpNts",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x09"
                }),

                DatatypeElement({
                    name: "nonFabricSntpNts",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x09"
                }),

                DatatypeElement({
                    name: "nonFabricNtpNts",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0A"
                }),

                DatatypeElement({
                    name: "nonFabricNtpNts",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0A"
                }),

                DatatypeElement({
                    name: "fabricSntpNts",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0B"
                }),

                DatatypeElement({
                    name: "fabricSntpNts",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0B"
                }),

                DatatypeElement({
                    name: "fabricNtpNts",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0C"
                }),

                DatatypeElement({
                    name: "fabricNtpNts",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0C"
                }),

                DatatypeElement({
                    name: "mixedNtpNts",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0D"
                }),

                DatatypeElement({
                    name: "mixedNtpNts",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0D"
                }),

                DatatypeElement({
                    name: "cloudSource",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0E"
                }),

                DatatypeElement({
                    name: "cloudSource",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0E"
                }),

                DatatypeElement({
                    name: "ptp",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0F"
                }),

                DatatypeElement({
                    name: "ptp",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0F"
                }),

                DatatypeElement({
                    name: "gnss",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                }),

                DatatypeElement({
                    name: "gnss",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x10"
                })
            ]
        }),

        DatatypeElement({
            name: "TimeZoneStruct", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "offset", base: "int32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "offset", base: "int32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "validAt", base: "epochUs",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "validAt", base: "epochUs",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "name", base: "string",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "name", base: "string",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        DatatypeElement({
            name: "DstOffsetStruct", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "offset", base: "int32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "offset", base: "int32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "validStarting", base: "epochUs",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "validStarting", base: "epochUs",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "validUntil", base: "epochUs",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "validUntil", base: "epochUs",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}));
