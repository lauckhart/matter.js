/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement, EventElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0033, name: "GeneralDiagnostics",
    description: "General Diagnostics",
    details: "The General Diagnostics Cluster, along with other diagnostics clusters, provide a means to acquire standardized diagnostics metrics that MAY be used by a Node to assist a user or Administrative Node in diagnosing potential problems.",
    children: [
        AttributeElement({
            id: 0x0000, name: "NetworkInterfaces", base: "NetworkInterfaces",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0001, name: "RebootCount", base: "RebootCount",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0002, name: "UpTime", base: "UpTime",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0003, name: "TotalOperationalHours", base: "TotalOperationalHours",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0004, name: "BootReasons", base: "BootReason",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0005, name: "ActiveHardwareFaults", base: "ActiveHardwareFaults",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0006, name: "ActiveRadioFaults", base: "ActiveRadioFaults",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0007, name: "ActiveNetworkFaults", base: "ActiveNetworkFaults",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0008, name: "TestEventTriggersEnabled", base: "TestEventTriggersEnabled",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        CommandElement({
            id: 0x0000, name: "TestEventTrigger", base: "struct",
            access: { rw: "R", writePrivilege: "M" }, conformance: [ "M" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "EnableKey", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "EnableKey", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "EventTrigger", base: "INT64U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "EventTrigger", base: "INT64U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        EventElement({
            id: 0x0000, name: "HardwareFaultChange", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "critical",
            children: [
                DatatypeElement({
                    name: "Current", base: "HardwareFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Current", base: "HardwareFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Previous", base: "HardwareFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Previous", base: "HardwareFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "RadioFaultChange", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "critical",
            children: [
                DatatypeElement({
                    name: "Current", base: "RadioFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Current", base: "RadioFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Previous", base: "RadioFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Previous", base: "RadioFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        EventElement({
            id: 0x0002, name: "NetworkFaultChange", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], priority: "critical",
            children: [
                DatatypeElement({
                    name: "Current", base: "NetworkFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Current", base: "NetworkFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Previous", base: "NetworkFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Previous", base: "NetworkFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        EventElement({
            id: 0x0003, name: "BootReason", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], priority: "critical",
            children: [
                DatatypeElement({
                    name: "BootReason", base: "BootReasonEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "BootReason", base: "BootReasonEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}));
