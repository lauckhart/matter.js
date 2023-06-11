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
            id: 0x0000, name: "networkInterfaces", base: "list",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0001, name: "rebootCount", base: "uint16",
            access: { rw: "R" }, conformance: [ "M" ], value: "0x0000"
        }),

        AttributeElement({
            id: 0x0002, name: "upTime", base: "uint64",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0000000000000000"
        }),

        AttributeElement({
            id: 0x0003, name: "totalOperationalHours", base: "uint32",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x00000000"
        }),

        AttributeElement({
            id: 0x0004, name: "bootReasons", base: "BootReasonEnum",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0005, name: "activeHardwareFaults", base: "list",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0006, name: "activeRadioFaults", base: "list",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0007, name: "activeNetworkFaults", base: "list",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0008, name: "testEventTriggersEnabled", base: "bool",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        CommandElement({
            id: 0x0000, name: "TestEventTrigger",
            access: { rw: "R", writePriv: "M" }, conformance: [ "M" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "enableKey", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "enableKey", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "eventTrigger", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "eventTrigger", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        EventElement({
            id: 0x0000, name: "HardwareFaultChange",
            access: { rw: "R" }, conformance: [ "O" ], priority: "critical",
            children: [
                DatatypeElement({
                    name: "current", base: "HardwareFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "current", base: "HardwareFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "previous", base: "HardwareFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "previous", base: "HardwareFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "RadioFaultChange",
            access: { rw: "R" }, conformance: [ "O" ], priority: "critical",
            children: [
                DatatypeElement({
                    name: "current", base: "RadioFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "current", base: "RadioFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "previous", base: "RadioFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "previous", base: "RadioFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        EventElement({
            id: 0x0002, name: "NetworkFaultChange",
            access: { rw: "R" }, conformance: [ "O" ], priority: "critical",
            children: [
                DatatypeElement({
                    name: "current", base: "NetworkFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "current", base: "NetworkFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "previous", base: "NetworkFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "previous", base: "NetworkFaultEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        EventElement({
            id: 0x0003, name: "BootReason",
            access: { rw: "R" }, conformance: [ "M" ], priority: "critical",
            children: [
                DatatypeElement({
                    name: "bootReason", base: "BootReasonEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "bootReason", base: "BootReasonEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "HardwareFaultEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "radio",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "radio",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "sensor",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "sensor",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "resettableOverTemp",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "resettableOverTemp",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "nonResettableOverTemp",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "nonResettableOverTemp",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "powerSource",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                }),

                DatatypeElement({
                    name: "powerSource",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                }),

                DatatypeElement({
                    name: "visualDisplayFault",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x06"
                }),

                DatatypeElement({
                    name: "visualDisplayFault",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x06"
                }),

                DatatypeElement({
                    name: "audioOutputFault",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x07"
                }),

                DatatypeElement({
                    name: "audioOutputFault",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x07"
                }),

                DatatypeElement({
                    name: "userInterfaceFault",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "userInterfaceFault",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x08"
                }),

                DatatypeElement({
                    name: "nonVolatileMemoryError",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x09"
                }),

                DatatypeElement({
                    name: "nonVolatileMemoryError",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x09"
                }),

                DatatypeElement({
                    name: "tamperDetected",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0A"
                }),

                DatatypeElement({
                    name: "tamperDetected",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x0A"
                })
            ]
        }),

        DatatypeElement({
            name: "RadioFaultEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "wiFiFault",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "wiFiFault",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "cellularFault",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "cellularFault",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "threadFault",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "threadFault",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "nfcFault",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "nfcFault",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "bleFault",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                }),

                DatatypeElement({
                    name: "bleFault",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                }),

                DatatypeElement({
                    name: "ethernetFault",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x06"
                }),

                DatatypeElement({
                    name: "ethernetFault",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x06"
                })
            ]
        }),

        DatatypeElement({
            name: "NetworkFaultEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "hardwareFailure",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "hardwareFailure",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "networkJammed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "networkJammed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "connectionFailed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "connectionFailed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                })
            ]
        }),

        DatatypeElement({
            name: "BootReasonEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "powerOnReboot",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "powerOnReboot",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "brownOutReset",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "brownOutReset",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "softwareWatchdogReset",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "softwareWatchdogReset",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "hardwareWatchdogReset",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "hardwareWatchdogReset",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "softwareUpdateCompleted",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                }),

                DatatypeElement({
                    name: "softwareUpdateCompleted",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                }),

                DatatypeElement({
                    name: "softwareReset",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x06"
                }),

                DatatypeElement({
                    name: "softwareReset",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x06"
                })
            ]
        }),

        DatatypeElement({
            name: "InterfaceTypeEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "unspecified",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "wiFi",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "wiFi",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "ethernet",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "ethernet",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "cellular",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "cellular",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "thread",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "thread",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                })
            ]
        }),

        DatatypeElement({
            name: "NetworkInterface", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "name", base: "string",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "name", base: "string",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "isOperational", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "isOperational", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "offPremiseServicesReachableIPv4", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "offPremiseServicesReachableIPv4", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "offPremiseServicesReachableIPv6", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "offPremiseServicesReachableIPv6", base: "bool",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "hardwareAddress", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "hardwareAddress", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "iPv4Addresses", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "iPv4Addresses", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "iPv6Addresses", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "iPv6Addresses", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "type", base: "InterfaceTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "type", base: "InterfaceTypeEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}));
