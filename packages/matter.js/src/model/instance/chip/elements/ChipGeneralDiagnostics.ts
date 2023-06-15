/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement, EventElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0033, name: "GeneralDiagnostics",
    description: "General Diagnostics",
    details: "The General Diagnostics Cluster, along with other diagnostics clusters, provide a means to acquire standardized diagnostics metrics that MAY be used by a Node to assist a user or Administrative Node in diagnosing potential problems.",
    children: [
        AttributeElement({
            id: 0x0000, name: "NetworkInterfaces", base: "list",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "NetworkInterface"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "RebootCount", base: "uint16",
            conformance: "M", default: 0
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
            id: 0x0008, name: "TestEventTriggersEnabled", base: "bool",
            conformance: "M"
        }),

        CommandElement({
            id: 0x0000, name: "TestEventTrigger",
            access: "R M", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "EnableKey", base: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "EventTrigger", base: "uint64",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0000, name: "HardwareFaultChange",
            conformance: "O", priority: "critical",
            children: [
                DatatypeElement({
                    name: "Current", base: "HardwareFaultEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Previous", base: "HardwareFaultEnum",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "RadioFaultChange",
            conformance: "O", priority: "critical",
            children: [
                DatatypeElement({
                    name: "Current", base: "RadioFaultEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Previous", base: "RadioFaultEnum",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0002, name: "NetworkFaultChange",
            conformance: "O", priority: "critical",
            children: [
                DatatypeElement({
                    name: "Current", base: "NetworkFaultEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Previous", base: "NetworkFaultEnum",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0003, name: "BootReason",
            conformance: "M", priority: "critical",
            children: [
                DatatypeElement({
                    name: "BootReason", base: "BootReasonEnum",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "HardwareFaultEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Radio",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Sensor",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "ResettableOverTemp",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "NonResettableOverTemp",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "PowerSource",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "VisualDisplayFault",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "AudioOutputFault",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "UserInterfaceFault",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "NonVolatileMemoryError",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000a, name: "TamperDetected",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "RadioFaultEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "WiFiFault",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "CellularFault",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "ThreadFault",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "NfcFault",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "BleFault",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "EthernetFault",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "NetworkFaultEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "HardwareFailure",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "NetworkJammed",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "ConnectionFailed",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "BootReasonEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "PowerOnReboot",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "BrownOutReset",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "SoftwareWatchdogReset",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "HardwareWatchdogReset",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "SoftwareUpdateCompleted",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "SoftwareReset",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "InterfaceTypeEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Unspecified",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "WiFi",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Ethernet",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Cellular",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Thread",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "NetworkInterface", base: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "Name", base: "string",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "IsOperational", base: "bool",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OffPremiseServicesReachableIPv4", base: "bool",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "OffPremiseServicesReachableIPv6", base: "bool",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "HardwareAddress", base: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "IPv4Addresses", base: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "IPv6Addresses", base: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Type", base: "InterfaceTypeEnum",
                    conformance: "M"
                })
            ]
        })
    ]
}));
