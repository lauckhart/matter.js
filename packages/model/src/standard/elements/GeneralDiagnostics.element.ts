/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    EventElement as Event,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const GeneralDiagnostics = Cluster(
    { id: 0x33, name: "GeneralDiagnostics" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 2 }),
    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "DMTEST", conformance: "desc", constraint: "0", description: "DataModelTest" })
    ),
    Attribute(
        { id: 0x0, name: "NetworkInterfaces", type: "list", access: "R V", conformance: "M", constraint: "max 8" },
        Field({ name: "entry", type: "NetworkInterface" })
    ),
    Attribute({ id: 0x1, name: "RebootCount", type: "uint16", access: "R V", conformance: "M", quality: "N" }),
    Attribute({ id: 0x2, name: "UpTime", type: "uint64", access: "R V", conformance: "M", quality: "C" }),
    Attribute({ id: 0x3, name: "TotalOperationalHours", type: "uint32", access: "R V", conformance: "O", quality: "N C" }),
    Attribute({ id: 0x4, name: "BootReason", type: "BootReasonEnum", access: "R V", conformance: "O" }),
    Attribute(
        { id: 0x5, name: "ActiveHardwareFaults", type: "list", access: "R V", conformance: "O", constraint: "max 11" },
        Field({ name: "entry", type: "HardwareFaultEnum" })
    ),
    Attribute(
        { id: 0x6, name: "ActiveRadioFaults", type: "list", access: "R V", conformance: "O", constraint: "max 7" },
        Field({ name: "entry", type: "RadioFaultEnum" })
    ),
    Attribute(
        { id: 0x7, name: "ActiveNetworkFaults", type: "list", access: "R V", conformance: "O", constraint: "max 4" },
        Field({ name: "entry", type: "NetworkFaultEnum" })
    ),
    Attribute({ id: 0x8, name: "TestEventTriggersEnabled", type: "bool", access: "R V", conformance: "M" }),
    Attribute({ id: 0x9, name: "DoNotUse", conformance: "X" }),

    Event(
        { id: 0x0, name: "HardwareFaultChange", access: "V", conformance: "O", priority: "critical" },
        Field(
            { id: 0x0, name: "Current", type: "list", conformance: "M", constraint: "max 11" },
            Field({ name: "entry", type: "HardwareFaultEnum" })
        ),
        Field(
            { id: 0x1, name: "Previous", type: "list", conformance: "M", constraint: "max 11" },
            Field({ name: "entry", type: "HardwareFaultEnum" })
        )
    ),

    Event(
        { id: 0x1, name: "RadioFaultChange", access: "V", conformance: "O", priority: "critical" },
        Field(
            { id: 0x0, name: "Current", type: "list", conformance: "M", constraint: "max 7" },
            Field({ name: "entry", type: "RadioFaultEnum" })
        ),
        Field(
            { id: 0x1, name: "Previous", type: "list", conformance: "M", constraint: "max 7" },
            Field({ name: "entry", type: "RadioFaultEnum" })
        )
    ),

    Event(
        { id: 0x2, name: "NetworkFaultChange", access: "V", conformance: "O", priority: "critical" },
        Field(
            { id: 0x0, name: "Current", type: "list", conformance: "M", constraint: "max 4" },
            Field({ name: "entry", type: "NetworkFaultEnum" })
        ),
        Field(
            { id: 0x1, name: "Previous", type: "list", conformance: "M", constraint: "max 4" },
            Field({ name: "entry", type: "NetworkFaultEnum" })
        )
    ),

    Event(
        { id: 0x3, name: "BootReason", access: "V", conformance: "M", priority: "critical" },
        Field({ id: 0x0, name: "BootReason", type: "BootReasonEnum", conformance: "M" })
    ),
    Command(
        { id: 0x0, name: "TestEventTrigger", access: "M", conformance: "M", direction: "request", response: "status" },
        Field({ id: 0x0, name: "EnableKey", type: "octstr", conformance: "M", constraint: "16" }),
        Field({ id: 0x1, name: "EventTrigger", type: "uint64", conformance: "M" })
    ),
    Command({
        id: 0x1, name: "TimeSnapshot",
        access: "O", conformance: "M", direction: "request", response: "TimeSnapshotResponse"
    }),
    Command(
        { id: 0x2, name: "TimeSnapshotResponse", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "SystemTimeMs", type: "systime-ms", conformance: "M" }),
        Field({ id: 0x1, name: "PosixTimeMs", type: "posix-ms", conformance: "M", default: null, quality: "X" })
    ),

    Command(
        {
            id: 0x3, name: "PayloadTestRequest",
            access: "M", conformance: "DMTEST", direction: "request", response: "PayloadTestResponse"
        },
        Field({ id: 0x0, name: "EnableKey", type: "octstr", conformance: "M", constraint: "16" }),
        Field({ id: 0x1, name: "Value", type: "uint8", conformance: "M" }),
        Field({ id: 0x2, name: "Count", type: "uint16", conformance: "M", constraint: "max 2048" })
    ),

    Command(
        { id: 0x4, name: "PayloadTestResponse", conformance: "DMTEST", direction: "response" },
        Field({ id: 0x0, name: "Payload", type: "octstr", conformance: "M", constraint: "max 2048" })
    ),

    Datatype(
        { name: "HardwareFaultEnum", type: "enum8" },
        Field({ id: 0x0, name: "Unspecified", conformance: "M" }),
        Field({ id: 0x1, name: "Radio", conformance: "O" }),
        Field({ id: 0x2, name: "Sensor", conformance: "O" }),
        Field({ id: 0x3, name: "ResettableOverTemp", conformance: "O" }),
        Field({ id: 0x4, name: "NonResettableOverTemp", conformance: "O" }),
        Field({ id: 0x5, name: "PowerSource", conformance: "O" }),
        Field({ id: 0x6, name: "VisualDisplayFault", conformance: "O" }),
        Field({ id: 0x7, name: "AudioOutputFault", conformance: "O" }),
        Field({ id: 0x8, name: "UserInterfaceFault", conformance: "O" }),
        Field({ id: 0x9, name: "NonVolatileMemoryError", conformance: "O" }),
        Field({ id: 0xa, name: "TamperDetected", conformance: "O" })
    ),

    Datatype(
        { name: "RadioFaultEnum", type: "enum8" },
        Field({ id: 0x0, name: "Unspecified", conformance: "M" }),
        Field({ id: 0x1, name: "WiFiFault", conformance: "O" }),
        Field({ id: 0x2, name: "CellularFault", conformance: "O" }),
        Field({ id: 0x3, name: "ThreadFault", conformance: "O" }),
        Field({ id: 0x4, name: "NfcFault", conformance: "O" }),
        Field({ id: 0x5, name: "BleFault", conformance: "O" }),
        Field({ id: 0x6, name: "EthernetFault", conformance: "O" })
    ),

    Datatype(
        { name: "NetworkFaultEnum", type: "enum8" },
        Field({ id: 0x0, name: "Unspecified", conformance: "M" }),
        Field({ id: 0x1, name: "HardwareFailure", conformance: "O" }),
        Field({ id: 0x2, name: "NetworkJammed", conformance: "O" }),
        Field({ id: 0x3, name: "ConnectionFailed", conformance: "O" })
    ),

    Datatype(
        { name: "InterfaceTypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Unspecified", conformance: "M" }),
        Field({ id: 0x1, name: "WiFi", conformance: "O" }),
        Field({ id: 0x2, name: "Ethernet", conformance: "O" }),
        Field({ id: 0x3, name: "Cellular", conformance: "O" }),
        Field({ id: 0x4, name: "Thread", conformance: "O" })
    ),

    Datatype(
        { name: "BootReasonEnum", type: "enum8" },
        Field({ id: 0x0, name: "Unspecified", conformance: "M" }),
        Field({ id: 0x1, name: "PowerOnReboot", conformance: "M" }),
        Field({ id: 0x2, name: "BrownOutReset", conformance: "M" }),
        Field({ id: 0x3, name: "SoftwareWatchdogReset", conformance: "M" }),
        Field({ id: 0x4, name: "HardwareWatchdogReset", conformance: "M" }),
        Field({ id: 0x5, name: "SoftwareUpdateCompleted", conformance: "M" }),
        Field({ id: 0x6, name: "SoftwareReset", conformance: "M" })
    ),

    Datatype(
        { name: "NetworkInterface", type: "struct" },
        Field({ id: 0x0, name: "Name", type: "string", conformance: "M", constraint: "max 32" }),
        Field({ id: 0x1, name: "IsOperational", type: "bool", conformance: "M" }),
        Field({
            id: 0x2, name: "OffPremiseServicesReachableIPv4", type: "bool",
            conformance: "M", default: null, quality: "X"
        }),
        Field({
            id: 0x3, name: "OffPremiseServicesReachableIPv6", type: "bool",
            conformance: "M", default: null, quality: "X"
        }),
        Field({ id: 0x4, name: "HardwareAddress", type: "hwadr", conformance: "M" }),
        Field(
            { id: 0x5, name: "IPv4Addresses", type: "list", conformance: "M", constraint: "max 4" },
            Field({ name: "entry", type: "ipv4adr" })
        ),
        Field(
            { id: 0x6, name: "IPv6Addresses", type: "list", conformance: "M", constraint: "max 8" },
            Field({ name: "entry", type: "ipv6adr" })
        ),
        Field({ id: 0x7, name: "Type", type: "InterfaceTypeEnum", conformance: "M" })
    )
);

MatterDefinition.children.push(GeneralDiagnostics);
