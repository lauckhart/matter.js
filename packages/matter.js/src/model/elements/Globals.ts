/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { Conformance, Constraint } from "../aspects/index.js";
import { Datatype, Metatype, StatusCode } from "../definitions/index.js";
import { AttributeElement } from "./AttributeElement.js";
import { ValueElement } from "./ValueElement.js";
import { DatatypeElement } from "./DatatypeElement.js";
import { EventElement } from "./EventElement.js";

// Base type factories (types with metatypes)
const bool = (id: number, name: string, description: string) =>
    DatatypeElement({ id, name, description, metatype: Metatype.boolean });
const map = (id: number, name: string, description: string, byteSize: ValueElement.BitmapSize) =>
    DatatypeElement({ id, name, description, byteSize, metatype: Metatype.bitmap });
const int = (id: number, name: string, description: string, byteSize: ValueElement.Size) =>
    DatatypeElement({ id, name, description, byteSize, metatype: Metatype.integer });
const float = (id: number, name: string, description: string, byteSize: ValueElement.Size) =>
    DatatypeElement({ id, name, description, byteSize, metatype: Metatype.float });
const octet = (id: number, name: string, description: string) =>
    DatatypeElement({ id, name, description, metatype: Metatype.bytes });
const string = (id: number, name: string, description: string) =>
    DatatypeElement({ id, name, description, metatype: Metatype.string });
const list = (id: number, name: string, description: string) =>
    DatatypeElement({ id, name, description, metatype: Metatype.array });
const struct = (id: number, name: string, description: string) =>
    DatatypeElement({ id, name, description, metatype: Metatype.object });
const enumt = (id: number, name: string, description: string, type: string) =>
    DatatypeElement({ id, name, description, metatype: Metatype.enum, type });

// Derivative type factories (types that inherit metatypes)
const extInt = (id: number, name: string, description: string, type: string) =>
    DatatypeElement({ id, name, description, type });
const depInt = (id: number, name: string, description: string, type: string) =>
    DatatypeElement({ id, name, description, type, conformance: Conformance.Flag.Deprecated });
const extOctet = (id: number, name: string, description: string, constraint?: Constraint.Definition) =>
    DatatypeElement({ id, name, description, type: Datatype.octstr, constraint });
const extEnum = (id: number, name: string, description: string, values: DatatypeElement.ValueMap) =>
    DatatypeElement({ id, name, description, type: "enum8", children: DatatypeElement.ListValues(values) });
const extStruct = (id: number, name: string, description: string, children: DatatypeElement[]) =>
    DatatypeElement({ id, name, description, type: Datatype.struct, children });

const TodFields = [
    DatatypeElement({ type: "uint8", name: "hours" }),
    DatatypeElement({ type: "uint8", name: "minutes" }),
    DatatypeElement({ type: "uint8", name: "seconds" }),
    DatatypeElement({ type: "uint8", name: "hundredths" })
];

const DateFields = [
    DatatypeElement({ type: "uint8", name: "year" }),
    DatatypeElement({ type: "uint8", name: "month" }),
    DatatypeElement({ type: "uint8", name: "day" }),
    DatatypeElement({ type: "uint8", name: "dow" })
];

/**
 * These are all of the global elements defined in the Matter Specification.
 * This includes types from the "data types" section and other elements from
 * the "global elements" section.
 * 
 * According to the specification, any type that is used by more than one
 * cluster should be defined here.  Various cluster-specific elements reference
 * these types or derive new types.
 */
export const Globals = {
    // Discrete
    bool:          bool      (0x10,   "bool",          "Boolean"),
    map8:          map       (0x18,   "map8",          "8-bit bitmap",                1),
    map16:         map       (0x19,   "map16",         "16-bit bitmap",               2),
    map24:         map       (0x19,   "map16",         "16-bit bitmap",               2),
    map32:         map       (0x1b,   "map32",         "32-bit bitmap",               4),
    map64:         map       (0x1f,   "map64",         "64-bit bitmap",               8),

    // Analog integer
    uint8:         int       (0x20,   "uint8",         "Signed 8-bit integer",        1),
    uint16:        int       (0x21,   "uint16",        "Signed 16-bit integer",       2),
    uint24:        int       (0x22,   "uint24",        "Signed 24-bit integer",       3),
    uint32:        int       (0x23,   "uint32",        "Signed 32-bit integer",       4),
    uint40:        int       (0x24,   "uint40",        "Signed 40-bit integer",       5),
    uint48:        int       (0x25,   "uint48",        "Signed 48-bit integer",       6),
    uint56:        int       (0x26,   "uint56",        "Signed 56-bit integer",       7),
    uint64:        int       (0x27,   "uint64",        "Signed 64-bit integer",       8),
    int8:          int       (0x28,   "int8",          "Unsigned 8-bit integer",      1),
    int16:         int       (0x29,   "int16",         "Unsigned 16-bit integer",     2),
    int24:         int       (0x2a,   "int24",         "Unsigned 24-bit integer",     3),
    int32:         int       (0x2b,   "int32",         "Unsigned 32-bit integer",     4),
    int40:         int       (0x2c,   "int40",         "Unsigned 40-bit integer",     5),
    int48:         int       (0x2d,   "int48",         "Unsigned 48-bit integer",     6),
    int56:         int       (0x2e,   "int56",         "Unsigned 56-bit integer",     7),
    int64:         int       (0x2f,   "int64",         "Unsigned 64-bit integer",     8),

    // Analog float
    single:        float     (0x39,   "single",        "Single precision",            4),
    double:        float     (0x3a,   "double",        "Double precision",            8),

    // Composite
    octstr:        octet     (0x41,   "octstr",        "Octet string"),
    list:          list      (0x48,   "list",          "List"),
    struct:        struct    (0x4c,   "struct",        "Struct"),

    // Analog relative
    percent:       extInt    (0x32,   "percent",       "Percentage units 1%",         Datatype.uint8),
    percent100ths: extInt    (0x33,   "percent100ths", "Percentage units 0.01%",      Datatype.uint16),

    // Analog time
    tod:           extStruct (0xe0,   "tod",           "Time of day",                 TodFields),
    date:          extStruct (0xe1,   "date",          "Date",                        DateFields),
    epochUs:       extInt    (0xe3,   "epoch-us",      "Epoch time in microseconds",  Datatype.uint64),
    epochS:        extInt    (0xe2,   "epoch-s",       "Epoch time in seconds",       Datatype.uint32),
    /** @deprecated by Matter specification */
    utc:           depInt    (0xe2,   "utc",           "UTC time",                    Datatype.uint32),
    posixMs:       extInt    (0xf3,   "posix-ms",      "POSIX time in milliseconds",  Datatype.uint64),
    systimeUs:     extInt    (0xe4,   "systime-us",    "Sytem time in microseconds",  Datatype.uint64),
    systimeMs:     extInt    (0xf4,   "systime-ms",    "System time in milliseconds", Datatype.uint64),

    // Discrete enumeration
    enum8:         enumt     (0x30,   "enum8",         "8-bit enumeration",           Datatype.uint8),
    enum16:        enumt     (0x31,   "enum16",        "16-bit enumeration",          Datatype.uint16),
    priority:      extEnum   (0x34,   "priority",      "Priority",                    EventElement.PriorityId),
    status:        extEnum   (0xe7,   "status",        "Status Code",                 StatusCode),

    // Identifier
    fabricId:      extInt    (0xd1,   "fabric-id",     "Fabric ID",                   Datatype.uint64),
    fabricIdx:     extInt    (0xd2,   "fabric-idx",    "Fabric Index",                Datatype.uint8),
    nodeId:        extInt    (0xf0,   "node-id",       "Node ID",                     Datatype.uint64),
    /** @deprecated by Matter specification */
    eui64:         depInt    (0xf0,   "eui64",         "IEEE address",                Datatype.uint64),
    groupId:       extInt    (0xf1,   "group-id",      "Group ID",                    Datatype.uint16),
    endpointNo:    extInt    (0xe5,   "endpoint-no",   "Endpoint number",             Datatype.uint16),
    vendorId:      extInt    (0xd3,   "vendor-id",     "Vendor ID",                   Datatype.uint16),
    deviceTypeId:  extInt    (0xed,   "devtype-id",    "Device type ID",              Datatype.uint32),
    clusterId:     extInt    (0xe8,   "cluster-id",    "Cluster ID",                  Datatype.uint32),
    attributeId:   extInt    (0xe9,   "attrib-id",     "Attribute ID",                Datatype.uint32),
    fieldId:       extInt    (0xef,   "field-id",      "Field ID",                    Datatype.uint32),
    eventId:       extInt    (0xee,   "event-id",      "Event ID",                    Datatype.uint32),
    commandId:     extInt    (0xec,   "command-id",    "Command ID",                  Datatype.uint32),
    actionId:      extInt    (0xea,   "action-id",     "Action ID",                   Datatype.uint8),
    transactionId: extInt    (0xeb,   "trans-id",      "Transaction ID",              Datatype.uint32),

    // Index
    entryIdx:      extInt    (0xf2,   "entry-idx",     "Entry index",                 Datatype.uint16),

    // Counter
    dataVer:       extInt    (0xd0,   "data-ver",      "Data version",                Datatype.uint32),
    eventNo:       extInt    (0xe6,   "event-no",      "Event number",                Datatype.uint64),

    // Composite string
    string:        string    (0x42,   "string",        "Character string"),

    // Composite address
    ipadr:         extOctet  (0xd3,   "ipadr",         "IP Address",                  { min: 4, max: 16 }),
    ipv4adr:       extOctet  (0xd4,   "ipv4adr",       "IPv4 address",                4),
    ipv6adr:       extOctet  (0xd5,   "ipv6adr",       "IPv6 address",                16),
    ipv6pre:       extOctet  (0xd6,   "ipv6pre",       "IPv6 prefix",                 { min: 1, max: 17 }),
    hwadr:         extOctet  (0xd7,   "hwadr",         "Hardware address",            { min: 6, max: 8 }),

    // Global elements
    ClusterRevision: AttributeElement({
        id: 0xfffd, name: "ClusterRevision", type: "uint16",
        constraint: { min: 1 }, quality: "F", access: "R V", conformance: "M" }),
    FeatureMap: AttributeElement({
        id: 0xfffc, name: "FeatureMap", type: "map32",
        quality: "F", access: "R V", default: 0, conformance: "M" }),
    AttributeList: AttributeElement({
        id: 0xfffb, name: "AttributeList", type: "list[attrib-id]",
        quality: "F", access: "R V", conformance: "M" }),
    EventList: AttributeElement({
        id: 0xfffa, name: "EventList", type: "list[event-id]",
        quality: "F", access: "R V", conformance: "P, M" }),
    AcceptedCommandListList: AttributeElement({
        id: 0xfff9, name: "AcceptedCommandList", type: "list[command-id]",
        quality: "F", access: "R V", conformance: "M" }),
    GeneratedCommandList: AttributeElement({
        id: 0xfff8, name: "GeneratedCommandList", type: "list[command-id]",
        quality: "F", access: "R V", conformance: "M" }),
    FabricIndex: DatatypeElement({
        id: 0xfe, name: "FabricIndex", type: "fabric-idx",
        constraint: "1 to 254", access: "R V F" })
}
