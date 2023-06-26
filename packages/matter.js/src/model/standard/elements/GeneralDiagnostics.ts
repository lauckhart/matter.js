/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "GeneralDiagnostics", id: 0x33, classification: "node",
    description: "General Diagnostics",
    details: "The General Diagnostics Cluster, along with other diagnostics clusters, provide a means to acquire " +
             "standardized diagnostics metrics that MAY be used by a Node to assist a user or Administrative Node " +
             "in diagnosing potential problems.",
    xref: { document: "core", section: "11.11" },

    children: [
        {
            tag: "attribute", name: "NetworkInterfaces", id: 0x0, type: "list", access: "R V", conformance: "M",
            constraint: "max 8",
            details: "The NetworkInterfaces attribute SHALL be a list of NetworkInterface structs. Each logical network " +
                     "interface on the Node SHALL be represented by a single entry within the NetworkInterfaces attribute.",
            xref: { document: "core", section: "11.11.6.1" },
            children: [ { tag: "datatype", name: "entry", type: "NetworkInterface" } ]
        },

        {
            tag: "attribute", name: "RebootCount", id: 0x1, type: "uint16", access: "R V", conformance: "M",
            quality: "N",
            details: "The RebootCount attribute SHALL indicate a best-effort count of the number of times the Node has " +
                     "rebooted. The RebootCount attribute SHOULD be incremented each time the Node reboots. The " +
                     "RebootCount attribute SHALL NOT be incremented when a Node wakes from a low-power or sleep state. " +
                     "The RebootCount attribute SHALL only be reset to 0 upon a factory reset of the Node.",
            xref: { document: "core", section: "11.11.6.2" }
        },

        {
            tag: "attribute", name: "UpTime", id: 0x2, type: "uint64", access: "R V", conformance: "O",
            quality: "C",
            details: "The UpTime attribute SHALL indicate a best-effort assessment of the length of time, in seconds, " +
                     "since the Node’s last reboot. The UpTime attribute SHOULD be incremented to account for the periods " +
                     "of time that a Node is in a low-power or sleep state. The UpTime attribute SHALL only be reset upon " +
                     "a device reboot.",
            xref: { document: "core", section: "11.11.6.3" }
        },

        {
            tag: "attribute", name: "TotalOperationalHours", id: 0x3, type: "uint32", access: "R V",
            conformance: "O", quality: "N C",
            details: "The TotalOperationalHours attribute SHALL indicate a best-effort attempt at tracking the length of " +
                     "time, in hours, that the Node has been operational. The TotalOperationalHours attribute SHOULD be " +
                     "incremented to account for the periods of time that a Node is in a low-power or sleep state. The",
            xref: { document: "core", section: "11.11.6.4" }
        },

        {
            tag: "attribute", name: "BootReason", id: 0x4, type: "BootReasonEnum", access: "R V",
            conformance: "O",
            details: "The BootReason attribute SHALL indicate the reason for the Node’s most recent boot.",
            xref: { document: "core", section: "11.11.6.5" }
        },

        {
            tag: "attribute", name: "ActiveHardwareFaults", id: 0x5, type: "list", access: "R V",
            conformance: "O", constraint: "max 11",

            details: "The ActiveHardwareFaults attribute SHALL indicate the set of faults currently detected by the Node. " +
                     "When the Node detects a fault has been raised, the appropriate HardwareFaultEnum value SHALL be " +
                     "added to this list. This list SHALL NOT contain more than one instance of a specific " +
                     "HardwareFaultEnum value. When the Node detects that all conditions contributing to a fault has been " +
                     "cleared, the corresponding HardwareFaultEnum value SHALL be removed from this list. An empty list " +
                     "SHALL indicate there are currently no active faults. The order of this list SHOULD have no " +
                     "significance. Clients interested in monitoring changes in active faults MAY subscribe to this " +
                     "attribute, or they MAY subscribe to HardwareFaultChange.",

            xref: { document: "core", section: "11.11.6.6" },
            children: [ { tag: "datatype", name: "entry", type: "HardwareFaultEnum" } ]
        },

        {
            tag: "attribute", name: "ActiveRadioFaults", id: 0x6, type: "list", access: "R V", conformance: "O",
            constraint: "max 7",

            details: "The ActiveRadioFaults attribute SHALL indicate the set of faults currently detected by the Node. " +
                     "When the Node detects a fault has been raised, the appropriate RadioFaultEnum value SHALL be added " +
                     "to this list. This list SHALL NOT contain more than one instance of a specific RadioFaultEnum " +
                     "value. When the Node detects that all conditions contributing to a fault has been cleared, the " +
                     "corresponding RadioFaultEnum value SHALL be removed from this list. An empty list SHALL indicate " +
                     "there are currently no active faults. The order of this list SHOULD have no significance. Clients " +
                     "interested in monitoring changes in active faults MAY subscribe to this attribute, or they MAY " +
                     "subscribe to RadioFaultChange.",

            xref: { document: "core", section: "11.11.6.7" },
            children: [ { tag: "datatype", name: "entry", type: "RadioFaultEnum" } ]
        },

        {
            tag: "attribute", name: "ActiveNetworkFaults", id: 0x7, type: "list", access: "R V",
            conformance: "O", constraint: "max 4",

            details: "The ActiveNetworkFaults attribute SHALL indicate the set of faults currently detected by the Node. " +
                     "When the Node detects a fault has been raised, the appropriate NetworkFaultEnum value SHALL be " +
                     "added to this list. This list SHALL NOT contain more than one instance of a specific " +
                     "NetworkFaultEnum value. When the Node detects that all conditions contributing to a fault has been " +
                     "cleared, the corresponding NetworkFaultEnum value SHALL be removed from this list. An empty list " +
                     "SHALL indicate there are currently no active faults. The order of this list SHOULD have no " +
                     "significance. Clients interested in monitoring changes in active faults MAY subscribe to this " +
                     "attribute, or they MAY subscribe to NetworkFaultChange.",

            xref: { document: "core", section: "11.11.6.8" },
            children: [ { tag: "datatype", name: "entry", type: "NetworkFaultEnum" } ]
        },

        {
            tag: "attribute", name: "TestEventTriggersEnabled", id: 0x8, type: "bool", access: "R V",
            conformance: "M",

            details: "The TestEventTriggersEnabled attribute SHALL indicate whether the Node has any TestEventTrigger " +
                     "configured. When this attribute is true, the Node has been configured with one or more test event " +
                     "triggers by virtue of the internally programmed EnableKey value (see Section 11.11.7.1, " +
                     "“TestEventTrigger Command”) being set to a non-zero value. This attribute can be used by " +
                     "Administrators to detect if a device was inadvertently commissioned with test event trigger mode " +
                     "enabled, and take appropriate action (e.g. warn the user and/or offer to remove all fabrics on the " +
                     "Node).",

            xref: { document: "core", section: "11.11.6.9" }
        },

        {
            tag: "event", name: "HardwareFaultChange", id: 0x0, access: "V", conformance: "O",
            priority: "critical",
            details: "The HardwareFaultChange Event SHALL indicate a change in the set of hardware faults currently " +
                     "detected by the Node.",
            xref: { document: "core", section: "11.11.8.1" },

            children: [
                {
                    tag: "datatype", name: "Current", id: 0x0, type: "list", conformance: "M", constraint: "max 11",
                    children: [ { tag: "datatype", name: "entry", type: "HardwareFaultEnum" } ]
                },
                {
                    tag: "datatype", name: "Previous", id: 0x1, type: "list", conformance: "M", constraint: "max 11",
                    children: [ { tag: "datatype", name: "entry", type: "HardwareFaultEnum" } ]
                }
            ]
        },

        {
            tag: "event", name: "RadioFaultChange", id: 0x1, access: "V", conformance: "O",
            priority: "critical",
            details: "The RadioFaultChange Event SHALL indicate a change in the set of radio faults currently detected by " +
                     "the Node.",
            xref: { document: "core", section: "11.11.8.2" },

            children: [
                {
                    tag: "datatype", name: "Current", id: 0x0, type: "list", conformance: "M", constraint: "max 7",
                    children: [ { tag: "datatype", name: "entry", type: "RadioFaultEnum" } ]
                },
                {
                    tag: "datatype", name: "Previous", id: 0x1, type: "list", conformance: "M", constraint: "max 7",
                    children: [ { tag: "datatype", name: "entry", type: "RadioFaultEnum" } ]
                }
            ]
        },

        {
            tag: "event", name: "NetworkFaultChange", id: 0x2, access: "V", conformance: "O",
            priority: "critical",
            details: "The NetworkFaultChange Event SHALL indicate a change in the set of network faults currently " +
                     "detected by the Node.",
            xref: { document: "core", section: "11.11.8.3" },

            children: [
                {
                    tag: "datatype", name: "Current", id: 0x0, type: "list", conformance: "M", constraint: "max 4",
                    children: [ { tag: "datatype", name: "entry", type: "NetworkFaultEnum" } ]
                },
                {
                    tag: "datatype", name: "Previous", id: 0x1, type: "list", conformance: "M", constraint: "max 4",
                    children: [ { tag: "datatype", name: "entry", type: "NetworkFaultEnum" } ]
                }
            ]
        },

        {
            tag: "event", name: "BootReason", id: 0x3, access: "V", conformance: "M", priority: "critical",
            details: "The BootReason Event SHALL indicate the reason that caused the device to start-up. The data of this " +
                     "event SHALL contain the following information:",
            xref: { document: "core", section: "11.11.8.4" },
            children: [ { tag: "datatype", name: "BootReason", id: 0x0, type: "BootReasonEnum", conformance: "M" } ]
        },

        {
            tag: "command", name: "TestEventTrigger", id: 0x0, access: "R M", conformance: "M",
            direction: "request", response: "status",
            details: "This command SHALL be supported to provide a means for certification tests to trigger some test- " +
                     "plan-specific events, necessary to assist in automation of device interactions for some " +
                     "certification test cases. This command SHALL NOT cause any changes to the state of the device that " +
                     "persist after the last fabric is removed.",
            xref: { document: "core", section: "11.11.7.1" },
            children: [
                { tag: "datatype", name: "EnableKey", id: 0x0, type: "octstr", conformance: "M", constraint: "16" },
                { tag: "datatype", name: "EventTrigger", id: 0x1, type: "uint64", conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "StatusCode", type: "status",

            children: [
                {
                    tag: "datatype", name: "EnableKeyMismatch", id: 0x2,
                    details: "Provided EnableKey does not match the previously configured value.",
                    xref: { document: "core", section: "11.11.5" }
                }
            ]
        },

        {
            tag: "datatype", name: "HardwareFaultEnum", type: "enum8", conformance: "M",
            details: "This data type is derived from enum8.",
            xref: { document: "core", section: "11.11.4.1" },

            children: [
                { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "Radio", id: 0x1, conformance: "O" },
                { tag: "datatype", name: "Sensor", id: 0x2, conformance: "O" },
                { tag: "datatype", name: "ResettableOverTemp", id: 0x3, conformance: "O" },
                { tag: "datatype", name: "NonResettableOverTemp", id: 0x4, conformance: "O" },
                { tag: "datatype", name: "PowerSource", id: 0x5, conformance: "O" },
                { tag: "datatype", name: "VisualDisplayFault", id: 0x6, conformance: "O" },
                { tag: "datatype", name: "AudioOutputFault", id: 0x7, conformance: "O" },
                { tag: "datatype", name: "UserInterfaceFault", id: 0x8, conformance: "O" },
                { tag: "datatype", name: "NonVolatileMemoryError", id: 0x9, conformance: "O" },
                { tag: "datatype", name: "TamperDetected", id: 0xa, conformance: "O" }
            ]
        },

        {
            tag: "datatype", name: "RadioFaultEnum", type: "enum8", conformance: "M",
            details: "This data type is derived from enum8.",
            xref: { document: "core", section: "11.11.4.2" },

            children: [
                { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "WiFiFault", id: 0x1, conformance: "O" },
                { tag: "datatype", name: "CellularFault", id: 0x2, conformance: "O" },
                { tag: "datatype", name: "ThreadFault", id: 0x3, conformance: "O" },
                { tag: "datatype", name: "NfcFault", id: 0x4, conformance: "O" },
                { tag: "datatype", name: "BleFault", id: 0x5, conformance: "O" },
                { tag: "datatype", name: "EthernetFault", id: 0x6, conformance: "O" }
            ]
        },

        {
            tag: "datatype", name: "NetworkFaultEnum", type: "enum8", conformance: "M",
            details: "This data type is derived from enum8.",
            xref: { document: "core", section: "11.11.4.3" },

            children: [
                { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "HardwareFailure", id: 0x1, conformance: "O" },
                { tag: "datatype", name: "NetworkJammed", id: 0x2, conformance: "O" },
                { tag: "datatype", name: "ConnectionFailed", id: 0x3, conformance: "O" }
            ]
        },

        {
            tag: "datatype", name: "InterfaceTypeEnum", type: "enum8", conformance: "M",
            details: "This data type is derived from enum8.",
            xref: { document: "core", section: "11.11.4.4" },

            children: [
                { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "WiFi", id: 0x1, conformance: "O" },
                { tag: "datatype", name: "Ethernet", id: 0x2, conformance: "O" },
                { tag: "datatype", name: "Cellular", id: 0x3, conformance: "O" },
                { tag: "datatype", name: "Thread", id: 0x4, conformance: "O" }
            ]
        },

        {
            tag: "datatype", name: "BootReasonEnum", type: "enum8", conformance: "M",
            details: "This data type is derived from enum8.",
            xref: { document: "core", section: "11.11.4.5" },

            children: [
                { tag: "datatype", name: "Unspecified", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "PowerOnReboot", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "BrownOutReset", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "SoftwareWatchdogReset", id: 0x3, conformance: "M" },
                { tag: "datatype", name: "HardwareWatchdogReset", id: 0x4, conformance: "M" },
                { tag: "datatype", name: "SoftwareUpdateCompleted", id: 0x5, conformance: "M" },
                { tag: "datatype", name: "SoftwareReset", id: 0x6, conformance: "M" }
            ]
        },

        {
            tag: "datatype", name: "NetworkInterface", type: "struct", conformance: "M",
            details: "This structure describes a network interface supported by the Node, as provided in the " +
                     "NetworkInterfaces attribute.",
            xref: { document: "core", section: "11.11.4.6" },

            children: [
                {
                    tag: "datatype", name: "Name", id: 0x0, type: "string", access: "R V", conformance: "M",
                    constraint: "max 32"
                },
                { tag: "datatype", name: "IsOperational", id: 0x1, type: "bool", access: "R V", conformance: "M" },
                {
                    tag: "datatype", name: "OffPremiseServicesReachableIPv4", id: 0x2, type: "bool", access: "R V",
                    conformance: "M", default: null, quality: "X"
                },
                {
                    tag: "datatype", name: "OffPremiseServicesReachableIPv6", id: 0x3, type: "bool", access: "R V",
                    conformance: "M", default: null, quality: "X"
                },
                { tag: "datatype", name: "HardwareAddress", id: 0x4, type: "hwadr", access: "R V", conformance: "M" },
                {
                    tag: "datatype", name: "IPv4Addresses", id: 0x5, type: "list", access: "R V", conformance: "M",
                    constraint: "max 4",
                    children: [ { tag: "datatype", name: "entry", type: "ipv4adr" } ]
                },
                {
                    tag: "datatype", name: "IPv6Addresses", id: 0x6, type: "list", access: "R V", conformance: "M",
                    constraint: "max 8",
                    children: [ { tag: "datatype", name: "entry", type: "ipv6adr" } ]
                },
                { tag: "datatype", name: "Type", id: 0x7, type: "InterfaceTypeEnum", access: "R V", conformance: "M" }
            ]
        }
    ]
});