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
            children: [
                DatatypeElement({
                    name: "entry", base: "NetworkInterface"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "RebootCount", base: "uint16",
            default: 0
        }),

        AttributeElement({
            id: 0x0002, name: "UpTime", base: "uint64",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0003, name: "TotalOperationalHours", base: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0004, name: "BootReasons", base: "BootReasonEnum",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0005, name: "ActiveHardwareFaults", base: "list",
            conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", base: "HardwareFaultEnum"
                })
            ]
        }),

        AttributeElement({
            id: 0x0006, name: "ActiveRadioFaults", base: "list",
            conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", base: "RadioFaultEnum"
                })
            ]
        }),

        AttributeElement({
            id: 0x0007, name: "ActiveNetworkFaults", base: "list",
            conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", base: "NetworkFaultEnum"
                })
            ]
        }),

        AttributeElement({
            id: 0x0008, name: "TestEventTriggersEnabled", base: "bool"
        }),

        CommandElement({
            id: 0x0000, name: "TestEventTrigger",
            access: "R M", direction: "request",
            children: [
                DatatypeElement({
                    name: "EnableKey", base: "octstr"
                }),

                DatatypeElement({
                    name: "EventTrigger", base: "uint64"
                })
            ]
        }),

        EventElement({
            id: 0x0000, name: "HardwareFaultChange",
            conformance: "O", priority: "critical",
            children: [
                DatatypeElement({
                    name: "Current", base: "HardwareFaultEnum"
                }),

                DatatypeElement({
                    name: "Previous", base: "HardwareFaultEnum"
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "RadioFaultChange",
            conformance: "O", priority: "critical",
            children: [
                DatatypeElement({
                    name: "Current", base: "RadioFaultEnum"
                }),

                DatatypeElement({
                    name: "Previous", base: "RadioFaultEnum"
                })
            ]
        }),

        EventElement({
            id: 0x0002, name: "NetworkFaultChange",
            conformance: "O", priority: "critical",
            children: [
                DatatypeElement({
                    name: "Current", base: "NetworkFaultEnum"
                }),

                DatatypeElement({
                    name: "Previous", base: "NetworkFaultEnum"
                })
            ]
        }),

        EventElement({
            id: 0x0003, name: "BootReason",
            priority: "critical",
            children: [
                DatatypeElement({
                    name: "BootReason", base: "BootReasonEnum"
                })
            ]
        }),

        DatatypeElement({
            name: "HardwareFaultEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Radio"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Sensor"
                }),

                DatatypeElement({
                    id: 0x0003, name: "ResettableOverTemp"
                }),

                DatatypeElement({
                    id: 0x0004, name: "NonResettableOverTemp"
                }),

                DatatypeElement({
                    id: 0x0005, name: "PowerSource"
                }),

                DatatypeElement({
                    id: 0x0006, name: "VisualDisplayFault"
                }),

                DatatypeElement({
                    id: 0x0007, name: "AudioOutputFault"
                }),

                DatatypeElement({
                    id: 0x0008, name: "UserInterfaceFault"
                }),

                DatatypeElement({
                    id: 0x0009, name: "NonVolatileMemoryError"
                }),

                DatatypeElement({
                    id: 0x000a, name: "TamperDetected"
                })
            ]
        }),

        DatatypeElement({
            name: "RadioFaultEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified"
                }),

                DatatypeElement({
                    id: 0x0001, name: "WiFiFault"
                }),

                DatatypeElement({
                    id: 0x0002, name: "CellularFault"
                }),

                DatatypeElement({
                    id: 0x0003, name: "ThreadFault"
                }),

                DatatypeElement({
                    id: 0x0004, name: "NfcFault"
                }),

                DatatypeElement({
                    id: 0x0005, name: "BleFault"
                }),

                DatatypeElement({
                    id: 0x0006, name: "EthernetFault"
                })
            ]
        }),

        DatatypeElement({
            name: "NetworkFaultEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified"
                }),

                DatatypeElement({
                    id: 0x0001, name: "HardwareFailure"
                }),

                DatatypeElement({
                    id: 0x0002, name: "NetworkJammed"
                }),

                DatatypeElement({
                    id: 0x0003, name: "ConnectionFailed"
                })
            ]
        }),

        DatatypeElement({
            name: "BootReasonEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified"
                }),

                DatatypeElement({
                    id: 0x0001, name: "PowerOnReboot"
                }),

                DatatypeElement({
                    id: 0x0002, name: "BrownOutReset"
                }),

                DatatypeElement({
                    id: 0x0003, name: "SoftwareWatchdogReset"
                }),

                DatatypeElement({
                    id: 0x0004, name: "HardwareWatchdogReset"
                }),

                DatatypeElement({
                    id: 0x0005, name: "SoftwareUpdateCompleted"
                }),

                DatatypeElement({
                    id: 0x0006, name: "SoftwareReset"
                })
            ]
        }),

        DatatypeElement({
            name: "InterfaceTypeEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified"
                }),

                DatatypeElement({
                    id: 0x0001, name: "WiFi"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Ethernet"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Cellular"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Thread"
                })
            ]
        }),

        DatatypeElement({
            name: "NetworkInterface", base: "struct",
            children: [
                DatatypeElement({
                    name: "Name", base: "string"
                }),

                DatatypeElement({
                    name: "IsOperational", base: "bool"
                }),

                DatatypeElement({
                    name: "OffPremiseServicesReachableIPv4", base: "bool",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "OffPremiseServicesReachableIPv6", base: "bool",
                    quality: "X"
                }),

                DatatypeElement({
                    name: "HardwareAddress", base: "octstr"
                }),

                DatatypeElement({
                    name: "IPv4Addresses", base: "octstr"
                }),

                DatatypeElement({
                    name: "IPv6Addresses", base: "octstr"
                }),

                DatatypeElement({
                    name: "Type", base: "InterfaceTypeEnum"
                })
            ]
        })
    ]
}));
