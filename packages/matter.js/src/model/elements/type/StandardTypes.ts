/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import {
    BoolElement,
    Constraint,
    FloatElement,
    IntElement,
    OctetElement,
    Datatype,
    MatterElement,
    ListElement,
    StructElement,
    EnumElement,
    Conformance,
    Priority,
    StatusCode
} from "../../index.js";

const bool = (id: number, name: string, description: string) =>
    BoolElement({ id, name, description });
const map = (id: number, name: string, description: string, size: EnumElement.Size) =>
    EnumElement({ id, name, description, size, values: [] });
const int = (id: number, name: string, description: string, size?: IntElement.Size) =>
    IntElement({ id, name, description, size });
const extint = (id: number, name: string, description: string, base: string) =>
    IntElement({ id, name, description, base });
const depint = (id: number, name: string, description: string, base: string) =>
    IntElement({ id, name, description, base, conformance: Conformance.Flag.Deprecated });
const float = (id: number, name: string, description: string, size: FloatElement.Size) =>
    FloatElement({ type: FloatElement.Type, id, name, description, size });
const octet = (id: number, name: string, description: string, constraint?: Constraint) =>
    OctetElement({ id, name, constraint, description });
const enum8 = (id: number, name: string, description: string, values: EnumElement.ValueMap) =>
    EnumElement({ id, name, description, values: EnumElement.Values(values) });
const list = (id: number, name: string, description: string, entry: MatterElement) =>
    ListElement({ type: ListElement.Type, id, name, description, entry });
const struct = (id: number, name: string, description: string, fields: StructElement.Fields) =>
    StructElement({ id, name, description, fields });

const TodFields = [
    IntElement({ id: 1, base: "uint8", name: "hours" }),
    IntElement({ id: 2, base: "uint8", name: "minutes" }),
    IntElement({ id: 3, base: "uint8", name: "seconds" }),
    IntElement({ id: 4, base: "uint8", name: "hundredths" })
];

const DateFields = [
    IntElement({ id: 1, base: "uint8", name: "year" }),
    IntElement({ id: 2, base: "uint8", name: "month" }),
    IntElement({ id: 3, base: "uint8", name: "day" }),
    IntElement({ id: 4, base: "uint8", name: "dow" })
];

/**
 * These are all of the types defined in the "Data Types" section of the Matter
 * specification.
 * 
 * According to the specification, any type that is used by more than one
 * cluster should be defined here.  Various cluster-specific elements reference
 * these types or derive new types.
 */
export const StandardTypes = {
    // Discrete
    bool:          bool      (0x10, "bool",          "Boolean"),
    map8:          map       (0x18, "map8",          "8-bit bitmap",                1),
    map16:         map       (0x19, "map16",         "16-bit bitmap",               2),
    map32:         map       (0x1b, "map32",         "32-bit bitmap",               4),
    map64:         map       (0x1f, "map64",         "64-bit bitmap",               8),

    // Analog integer
    uint8:         int       (0x20, "uint8",         "Signed 8-bit integer",        1),
    uint16:        int       (0x21, "uint16",        "Signed 16-bit integer",       2),
    uint24:        int       (0x22, "uint24",        "Signed 24-bit integer",       3),
    uint32:        int       (0x23, "uint32",        "Signed 32-bit integer",       4),
    uint40:        int       (0x24, "uint40",        "Signed 40-bit integer",       5),
    uint48:        int       (0x25, "uint48",        "Signed 48-bit integer",       6),
    uint56:        int       (0x26, "uint56",        "Signed 56-bit integer",       7),
    uint64:        int       (0x27, "uint64",        "Signed 64-bit integer",       8),
    int8:          int       (0x28, "int8",          "Unsigned 8-bit integer",      1),
    int16:         int       (0x29, "int16",         "Unsigned 16-bit integer",     2),
    int24:         int       (0x2a, "int24",         "Unsigned 24-bit integer",     3),
    int32:         int       (0x2b, "int32",         "Unsigned 32-bit integer",     4),
    int40:         int       (0x2c, "int40",         "Unsigned 40-bit integer",     5),
    int48:         int       (0x2d, "int48",         "Unsigned 48-bit integer",     6),
    int56:         int       (0x2e, "int56",         "Unsigned 56-bit integer",     7),
    int64:         int       (0x2f, "int64",         "Unsigned 64-bit integer",     8),

    // Analog float
    single:        float     (0x39, "single",        "Single precision",            4),
    double:        float     (0x3a, "double",        "Double precision",            8),

    // Composite
    octstr:        octet     (0x41, "octstr",        "Octet string",                undefined),
    list:          list      (0x48, "list",          "List",                        { never: true }),
    struct:        struct    (0x4c, "struct",        "Struct",                      []),

    // Analog relative
    percent:       extint    (0x32, "percent",       "Percentage units 1%",         Datatype.uint8),
    percent100ths: extint    (0x33, "percent100ths", "Percentage units 0.01%",      Datatype.uint16),

    // Analog time
    tod:           struct    (0xe0, "tod",           "Time of day",                 TodFields),
    date:          struct    (0xe1, "date",          "Date",                        DateFields),
    epochUs:       extint    (0xe3, "epoch-us",      "Epoch time in microseconds",  Datatype.uint64),
    epochS:        extint    (0xe2, "epoch-s",       "Epoch time in seconds",       Datatype.uint32),
    /** @deprecated by Matter specification */
    utc:           depint    (0xe2, "utc",           "UTC time",                    Datatype.uint32),
    posixMs:       extint    (0xf3, "posix-ms",      "POSIX time in milliseconds",  Datatype.uint64),
    systimeUs:     extint    (0xe4, "systime-us",    "Sytem time in microseconds",  Datatype.uint64),
    systimeMs:     extint    (0xf4, "systime-ms",    "System time in milliseconds", Datatype.uint64),

    // Discrete enumeration
    enum8:         extint    (0x30, "enum8",         "8-bit enumeration",           Datatype.uint8),
    enum16:        extint    (0x31, "enum16",        "16-bit enumeration",          Datatype.uint16),
    priority:      enum8     (0x34, "priority",      "Priority",                    Priority),
    status:        enum8     (0xe7, "status",        "Status Code",                 StatusCode),

    // Identifier
    fabricId:      extint     (0xd1, "fabric-id",     "Fabric ID",                  Datatype.uint64),
    fabricIdx:     extint    (0xd2, "fabric-idx",    "Fabric Index",                Datatype.uint8),
    nodeId:        extint    (0xf0, "node-id",       "Node ID",                     Datatype.uint64),
    /** @deprecated by Matter specification */
    eui64:         depint    (0xf0, "eui64",         "IEEE address",                Datatype.uint64),
    groupId:       extint    (0xf1, "group-id",      "Group ID",                    Datatype.uint16),
    endpointNo:    extint    (0xe5, "endpoint-no",   "Endpoint number",             Datatype.uint16),
    vendorId:      extint    (0xd3, "vendor-id",     "Vendor ID",                   Datatype.uint16),
    deviceTypeId:  extint    (0xed, "devtype-id",    "Device type ID",              Datatype.uint32),
    clusterId:     extint    (0xe8, "cluster-id",    "Cluster ID",                  Datatype.uint32),
    attributeId:   extint    (0xe9, "attrib-id",     "Attribute ID",                Datatype.uint32),
    fieldId:       extint    (0xef, "field-id",      "Field ID",                    Datatype.uint32),
    eventId:       extint    (0xee, "event-id",      "Event ID",                    Datatype.uint32),
    commandId:     extint    (0xec, "command-id",    "Command ID",                  Datatype.uint32),
    actionId:      extint    (0xea, "action-id",     "Action ID",                   Datatype.uint8),
    transactionId: extint    (0xeb, "trans-id",      "Transaction ID",              Datatype.uint32),

    // Index
    entryIdx:      extint    (0xf2, "entry-idx",     "Entry index",                 Datatype.uint16),

    // Counter
    dataVer:       extint    (0xd0, "data-ver",      "Data version",                Datatype.uint32),
    eventNumber:   extint    (0xe6, "event-no",      "Event number",                Datatype.uint64),

    // Composite string
    string:        octet     (0x42, "string",        "Character string"),

    // Composite Address
    ipadr:         octet     (0xd3, "ipadr",         "IP Address",                  [ 4, 16 ]),
    ipv4adr:       octet     (0xd4, "ipv4adr",       "IPv4 address",                [ 4 ]),
    ipv6adr:       octet     (0xd5, "ipv6adr",       "IPv6 address",                [ 16 ]),
    ipv6pre:       octet     (0xd6, "ipv6pre",       "IPv6 prefix",                 { min: 1, max: 17 }),
    hwadr:         octet     (0xd7, "hwadr",         "Hardware address",            [ 6, 8 ])
}
