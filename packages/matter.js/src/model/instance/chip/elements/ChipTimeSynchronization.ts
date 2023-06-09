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
            id: 0x0000, name: "UtcTime", base: "UTCTime",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0001, name: "Granularity", base: "Granularity",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0002, name: "TimeSource", base: "TimeSource",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0003, name: "TrustedTimeNodeId", base: "TrustedTimeNodeId",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "A" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0004, name: "DefaultNtp", base: "DefaultNtp",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "A" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0005, name: "TimeZone", base: "TimeZone",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0006, name: "DstOffset", base: "DSTOffset",
            access: { rw: "W", readPrivilege: "V", writePrivilege: "M" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0007, name: "LocalTime", base: "LocalTime",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0008, name: "TimeZoneDatabase", base: "TimeZoneDatabase",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0009, name: "NtpServerPort", base: "NtpServerPort",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        CommandElement({
            id: 0x0000, name: "SetUtcTime", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "UtcTime", base: "epoch_us",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UtcTime", base: "epoch_us",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Granularity", base: "GranularityEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Granularity", base: "GranularityEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "TimeSource", base: "TimeSourceEnum",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "TimeSource", base: "TimeSourceEnum",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        })
    ]
}));
