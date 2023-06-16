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
            id: 0x0000, name: "NetworkInterfaces", type: "list",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", type: "NetworkInterface"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "RebootCount", type: "uint16",
            conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0002, name: "UpTime", type: "uint64",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0003, name: "TotalOperationalHours", type: "uint32",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0004, name: "BootReasons", type: "BootReasonEnum",
            conformance: "O"
        }),

        AttributeElement({
            id: 0x0005, name: "ActiveHardwareFaults", type: "list",
            conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", type: "HardwareFaultEnum"
                })
            ]
        }),

        AttributeElement({
            id: 0x0006, name: "ActiveRadioFaults", type: "list",
            conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", type: "RadioFaultEnum"
                })
            ]
        }),

        AttributeElement({
            id: 0x0007, name: "ActiveNetworkFaults", type: "list",
            conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", type: "NetworkFaultEnum"
                })
            ]
        }),

        AttributeElement({
            id: 0x0008, name: "TestEventTriggersEnabled", type: "bool",
            conformance: "M"
        }),

        CommandElement({
            id: 0x0000, name: "TestEventTrigger",
            access: "R M", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "EnableKey", type: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "EventTrigger", type: "uint64",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0000, name: "HardwareFaultChange",
            conformance: "O", priority: "critical",
            children: [
                DatatypeElement({
                    name: "Current", type: "HardwareFaultEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Previous", type: "HardwareFaultEnum",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "RadioFaultChange",
            conformance: "O", priority: "critical",
            children: [
                DatatypeElement({
                    name: "Current", type: "RadioFaultEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Previous", type: "RadioFaultEnum",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0002, name: "NetworkFaultChange",
            conformance: "O", priority: "critical",
            children: [
                DatatypeElement({
                    name: "Current", type: "NetworkFaultEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Previous", type: "NetworkFaultEnum",
                    conformance: "M"
                })
            ]
        }),

        EventElement({
            id: 0x0003, name: "BootReason",
            conformance: "M", priority: "critical",
            children: [
                DatatypeElement({
                    name: "BootReason", type: "BootReasonEnum",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "HardwareFaultEnum", type: "enum8",
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
            name: "RadioFaultEnum", type: "enum8",
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
            name: "NetworkFaultEnum", type: "enum8",
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
            name: "BootReasonEnum", type: "enum8",
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
            name: "InterfaceTypeEnum", type: "enum8",
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
            name: "NetworkInterface", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "Name", type: "string",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "IsOperational", type: "bool",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "OffPremiseServicesReachableIPv4", type: "bool",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "OffPremiseServicesReachableIPv6", type: "bool",
                    conformance: "M", quality: "X"
                }),

                DatatypeElement({
                    name: "HardwareAddress", type: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "IPv4Addresses", type: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "IPv6Addresses", type: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Type", type: "InterfaceTypeEnum",
                    conformance: "M"
                })
            ]
        })
    ]
}));
