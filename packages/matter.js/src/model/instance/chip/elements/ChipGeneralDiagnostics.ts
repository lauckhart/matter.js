/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement, EventElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0033, name: "GeneralDiagnostics",
    description: "General Diagnostics",
    details: "The General Diagnostics Cluster, along with other diagnostics clusters, provide a means to acquire standardized diagnostics metrics that MAY be used by a Node to assist a user or Administrative Node in diagnosing potential problems.",
    children: [
        AttributeElement({
            id: 0x0000, name: "NetworkInterfaces", base: "list",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "NetworkInterface"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "RebootCount", base: "uint16",
            access: "R", conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0002, name: "UpTime", base: "uint64",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0003, name: "TotalOperationalHours", base: "uint32",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0004, name: "BootReasons", base: "BootReasonEnum",
            access: "R", conformance: "O"
        }),

        AttributeElement({
            id: 0x0005, name: "ActiveHardwareFaults", base: "list",
            access: "R", conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", base: "HardwareFaultEnum"
                })
            ]
        }),

        AttributeElement({
            id: 0x0006, name: "ActiveRadioFaults", base: "list",
            access: "R", conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", base: "RadioFaultEnum"
                })
            ]
        }),

        AttributeElement({
            id: 0x0007, name: "ActiveNetworkFaults", base: "list",
            access: "R", conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", base: "NetworkFaultEnum"
                })
            ]
        }),

        AttributeElement({
            id: 0x0008, name: "TestEventTriggersEnabled", base: "bool",
            access: "R", conformance: "M"
        }),

        CommandElement({
            id: 0x0000, name: "TestEventTrigger",
            access: "R M", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "EnableKey", base: "octstr",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "EventTrigger", base: "uint64",
                    access: "R", conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0000, name: "HardwareFaultChange",
            access: "R", conformance: "O", priority: "critical",
            children: [
                DatatypeElement({
                    name: "Current", base: "HardwareFaultEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Previous", base: "HardwareFaultEnum",
                    access: "R", conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "RadioFaultChange",
            access: "R", conformance: "O", priority: "critical",
            children: [
                DatatypeElement({
                    name: "Current", base: "RadioFaultEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Previous", base: "RadioFaultEnum",
                    access: "R", conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0002, name: "NetworkFaultChange",
            access: "R", conformance: "O", priority: "critical",
            children: [
                DatatypeElement({
                    name: "Current", base: "NetworkFaultEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Previous", base: "NetworkFaultEnum",
                    access: "R", conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0003, name: "BootReason",
            access: "R", conformance: "M", priority: "critical",
            children: [
                DatatypeElement({
                    name: "BootReason", base: "BootReasonEnum",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "HardwareFaultEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Radio",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Sensor",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "ResettableOverTemp",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "NonResettableOverTemp",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "PowerSource",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "VisualDisplayFault",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "AudioOutputFault",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "UserInterfaceFault",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "NonVolatileMemoryError",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000a, name: "TamperDetected",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "RadioFaultEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "WiFiFault",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "CellularFault",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "ThreadFault",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "NfcFault",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "BleFault",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "EthernetFault",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "NetworkFaultEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "HardwareFailure",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "NetworkJammed",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "ConnectionFailed",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "BootReasonEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "PowerOnReboot",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "BrownOutReset",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "SoftwareWatchdogReset",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "HardwareWatchdogReset",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "SoftwareUpdateCompleted",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "SoftwareReset",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "InterfaceTypeEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "WiFi",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Ethernet",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Cellular",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Thread",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "NetworkInterface", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "Name", base: "string",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "IsOperational", base: "bool",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "OffPremiseServicesReachableIPv4", base: "bool",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "OffPremiseServicesReachableIPv6", base: "bool",
                    access: "R", conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "HardwareAddress", base: "octstr",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "IPv4Addresses", base: "octstr",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "IPv6Addresses", base: "octstr",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Type", base: "InterfaceTypeEnum",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
