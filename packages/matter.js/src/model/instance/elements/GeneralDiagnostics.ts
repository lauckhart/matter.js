/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0033, name: "GeneralDiagnostics",
    classification: "node", description: "General Diagnostics",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "NetworkInterfaces",
            access: "R V", conformance: "M", constraint: "max 8", default: "", type: "list",
            details: "The NetworkInterfaces attribute SHALL be a list of NetworkInterface " +
                     "structs. Each logical network interface on the Node SHALL be " +
                     "represented by a single entry within the NetworkInterfaces attribute",
            xref: { document: "core", section: "11.11.6.1" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "NetworkInterface"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0001, name: "RebootCount",
            access: "R V", conformance: "M", default: 0, quality: "N", type: "uint16",
            details: "The RebootCount attribute SHALL indicate a best-effort count of the " +
                     "number of times the Node has rebooted. The RebootCount attribute " +
                     "SHOULD be incremented each time the Node reboots. The RebootCount " +
                     "attribute SHALL NOT be incremented when a Node wakes from a low-power " +
                     "or sleep state. The RebootCount attribute SHALL only be reset to 0 " +
                     "upon a factory reset of the Node",
            xref: { document: "core", section: "11.11.6.2" }
        },

        {
            tag: "attribute", id: 0x0002, name: "UpTime",
            access: "R V", conformance: "O", default: 0, quality: "C", type: "uint64",
            details: "The UpTime attribute SHALL indicate a best-effort assessment of the " +
                     "length of time, in seconds, since the Node’s last reboot. The UpTime " +
                     "attribute SHOULD be incremented to account for the periods of time " +
                     "that a Node is in a low-power or sleep state. The UpTime attribute " +
                     "SHALL only be reset upon a device reboot",
            xref: { document: "core", section: "11.11.6.3" }
        },

        {
            tag: "attribute", id: 0x0003, name: "TotalOperationalHours",
            access: "R V", conformance: "O", default: 0, quality: "N C", type: "uint32",
            details: "The TotalOperationalHours attribute SHALL indicate a best-effort " +
                     "attempt at tracking the length of time, in hours, that the Node has " +
                     "been operational. The TotalOperationalHours attribute SHOULD be " +
                     "incremented to account for the periods of time that a Node is in a low" +
                     "-power or sleep state. The",
            xref: { document: "core", section: "11.11.6.4" }
        },

        {
            tag: "attribute", id: 0x0004, name: "BootReasons",
            access: "R V", conformance: "O", default: 0, type: "BootReasonEnum",
            details: "The BootReason attribute SHALL indicate the reason for the Node’s most" +
                     " recent boot",
            xref: { document: "core", section: "11.11.6.5" }
        },

        {
            tag: "attribute", id: 0x0005, name: "ActiveHardwareFaults",
            access: "R V", conformance: "O", constraint: "max 11", default: "", type: "list",
            details: "The ActiveHardwareFaults attribute SHALL indicate the set of faults " +
                     "currently detected by the Node. When the Node detects a fault has been" +
                     " raised, the appropriate HardwareFaultEnum value SHALL be added to " +
                     "this list. This list SHALL NOT contain more than one instance of a " +
                     "specific HardwareFaultEnum value. When the Node detects that all " +
                     "conditions contributing to a fault has been cleared, the corresponding" +
                     " HardwareFaultEnum value SHALL be removed from this list. An empty " +
                     "list SHALL indicate there are currently no active faults. The order of" +
                     " this list SHOULD have no significance. Clients interested in " +
                     "monitoring changes in active faults MAY subscribe to this attribute, " +
                     "or they MAY subscribe to HardwareFaultChange",
            xref: { document: "core", section: "11.11.6.6" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "HardwareFaultEnum"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0006, name: "ActiveRadioFaults",
            access: "R V", conformance: "O", constraint: "max 7", default: "", type: "list",
            details: "The ActiveRadioFaults attribute SHALL indicate the set of faults " +
                     "currently detected by the Node. When the Node detects a fault has been" +
                     " raised, the appropriate RadioFaultEnum value SHALL be added to this " +
                     "list. This list SHALL NOT contain more than one instance of a specific" +
                     " RadioFaultEnum value. When the Node detects that all conditions " +
                     "contributing to a fault has been cleared, the corresponding " +
                     "RadioFaultEnum value SHALL be removed from this list. An empty list " +
                     "SHALL indicate there are currently no active faults. The order of this" +
                     " list SHOULD have no significance. Clients interested in monitoring " +
                     "changes in active faults MAY subscribe to this attribute, or they MAY " +
                     "subscribe to RadioFaultChange",
            xref: { document: "core", section: "11.11.6.7" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "RadioFaultEnum"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0007, name: "ActiveNetworkFaults",
            access: "R V", conformance: "O", constraint: "max 4", default: "", type: "list",
            details: "The ActiveNetworkFaults attribute SHALL indicate the set of faults " +
                     "currently detected by the Node. When the Node detects a fault has been" +
                     " raised, the appropriate NetworkFaultEnum value SHALL be added to this" +
                     " list. This list SHALL NOT contain more than one instance of a " +
                     "specific NetworkFaultEnum value. When the Node detects that all " +
                     "conditions contributing to a fault has been cleared, the corresponding" +
                     " NetworkFaultEnum value SHALL be removed from this list. An empty list" +
                     " SHALL indicate there are currently no active faults. The order of " +
                     "this list SHOULD have no significance. Clients interested in " +
                     "monitoring changes in active faults MAY subscribe to this attribute, " +
                     "or they MAY subscribe to NetworkFaultChange",
            xref: { document: "core", section: "11.11.6.8" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "NetworkFaultEnum"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0008, name: "TestEventTriggersEnabled",
            access: "R V", conformance: "M", default: false, type: "bool",
            details: "The TestEventTriggersEnabled attribute SHALL indicate whether the Node" +
                     " has any TestEventTrigger configured. When this attribute is true, the" +
                     " Node has been configured with one or more test event triggers by " +
                     "virtue of the internally programmed EnableKey value (see Section 11.11" +
                     ".7.1, “TestEventTrigger Command”) being set to a non-zero value. This " +
                     "attribute can be used by Administrators to detect if a device was " +
                     "inadvertently commissioned with test event trigger mode enabled, and " +
                     "take appropriate action (e.g. warn the user and/or offer to remove all" +
                     " fabrics on the Node",
            xref: { document: "core", section: "11.11.6.9" }
        },

        {
            tag: "event", id: 0x0000, name: "HardwareFaultChange",
            access: "V", conformance: "O", priority: "critical",
            details: "The HardwareFaultChange Event SHALL indicate a change in the set of " +
                     "hardware faults currently detected by the Node",
            xref: { document: "core", section: "11.11.8.1" },
            children: [
                {
                    tag: "datatype", name: "Current",
                    conformance: "M", type: "HardwareFaultEnum"
                },

                {
                    tag: "datatype", name: "Previous",
                    conformance: "M", type: "HardwareFaultEnum"
                }
            ]
        },

        {
            tag: "event", id: 0x0001, name: "RadioFaultChange",
            access: "V", conformance: "O", priority: "critical",
            details: "The RadioFaultChange Event SHALL indicate a change in the set of radio" +
                     " faults currently detected by the Node",
            xref: { document: "core", section: "11.11.8.2" },
            children: [
                {
                    tag: "datatype", name: "Current",
                    conformance: "M", type: "RadioFaultEnum"
                },

                {
                    tag: "datatype", name: "Previous",
                    conformance: "M", type: "RadioFaultEnum"
                }
            ]
        },

        {
            tag: "event", id: 0x0002, name: "NetworkFaultChange",
            access: "V", conformance: "O", priority: "critical",
            details: "The NetworkFaultChange Event SHALL indicate a change in the set of " +
                     "network faults currently detected by the Node",
            xref: { document: "core", section: "11.11.8.3" },
            children: [
                {
                    tag: "datatype", name: "Current",
                    conformance: "M", type: "NetworkFaultEnum"
                },

                {
                    tag: "datatype", name: "Previous",
                    conformance: "M", type: "NetworkFaultEnum"
                }
            ]
        },

        {
            tag: "event", id: 0x0003, name: "BootReason",
            access: "V", conformance: "M", priority: "critical",
            details: "The BootReason Event SHALL indicate the reason that caused the device " +
                     "to start-up. The data of this event SHALL contain the following " +
                     "information",
            xref: { document: "core", section: "11.11.8.4" },
            children: [
                {
                    tag: "datatype", name: "BootReason",
                    conformance: "M", type: "BootReasonEnum"
                }
            ]
        },

        {
            tag: "command", id: 0x0000, name: "TestEventTrigger",
            access: "R M", conformance: "M", direction: "request", response: "status",
            details: "This command SHALL be supported to provide a means for certification " +
                     "tests to trigger some test- plan-specific events, necessary to assist " +
                     "in automation of device interactions for some certification test cases" +
                     ". This command SHALL NOT cause any changes to the state of the device " +
                     "that persist after the last fabric is removed",
            xref: { document: "core", section: "11.11.7.1" },
            children: [
                {
                    tag: "datatype", name: "EnableKey",
                    conformance: "M", type: "octstr"
                },

                {
                    tag: "datatype", name: "EventTrigger",
                    conformance: "M", type: "uint64"
                }
            ]
        },

        {
            tag: "datatype", name: "NetworkInterface",
            conformance: "M", type: "struct",
            details: "This data type is derived from enum8",
            xref: { document: "core", section: "11.11.4.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Unspecified",
                    conformance: "M",
                    xref: { document: "core", section: "11.11.4.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "IsOperational",
                    conformance: "O", type: "bool",
                    xref: { document: "core", section: "11.11.4.1" }
                },

                {
                    tag: "datatype", id: 0x0002, name: "OffPremiseServicesReachableIPv4",
                    conformance: "O", quality: "X", type: "bool",
                    xref: { document: "core", section: "11.11.4.1" }
                },

                {
                    tag: "datatype", id: 0x0003, name: "OffPremiseServicesReachableIPv6",
                    conformance: "O", quality: "X", type: "bool",
                    xref: { document: "core", section: "11.11.4.1" }
                },

                {
                    tag: "datatype", id: 0x0004, name: "HardwareAddress",
                    conformance: "O", type: "octstr",
                    xref: { document: "core", section: "11.11.4.1" }
                },

                {
                    tag: "datatype", id: 0x0005, name: "IPv4Addresses",
                    conformance: "O", type: "octstr",
                    xref: { document: "core", section: "11.11.4.1" }
                },

                {
                    tag: "datatype", id: 0x0006, name: "IPv6Addresses",
                    conformance: "O", type: "octstr",
                    xref: { document: "core", section: "11.11.4.1" }
                },

                {
                    tag: "datatype", id: 0x0007, name: "Type",
                    conformance: "O", type: "InterfaceTypeEnum",
                    xref: { document: "core", section: "11.11.4.1" }
                },

                {
                    tag: "datatype", id: 0x0008, name: "UserInterfaceFault",
                    conformance: "O",
                    xref: { document: "core", section: "11.11.4.1" }
                },

                {
                    tag: "datatype", id: 0x0009, name: "NonVolatileMemoryError",
                    conformance: "O",
                    xref: { document: "core", section: "11.11.4.1" }
                },

                {
                    tag: "datatype", id: 0x000a, name: "TamperDetected",
                    conformance: "O",
                    xref: { document: "core", section: "11.11.4.1" }
                },

                {
                    tag: "datatype", name: "Name",
                    conformance: "M", type: "string"
                }
            ]
        },

        {
            tag: "datatype", name: "RadioFaultEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Unspecified",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "WiFiFault",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "CellularFault",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "ThreadFault",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "NfcFault",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "BleFault",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0006, name: "EthernetFault",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "NetworkFaultEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Unspecified",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "HardwareFailure",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "NetworkJammed",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "ConnectionFailed",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "BootReasonEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Unspecified",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "PowerOnReboot",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "BrownOutReset",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "SoftwareWatchdogReset",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "HardwareWatchdogReset",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "SoftwareUpdateCompleted",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0006, name: "SoftwareReset",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "InterfaceTypeEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Unspecified",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "WiFi",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Ethernet",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "Cellular",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Thread",
                    conformance: "M"
                }
            ]
        }
    ]
});
