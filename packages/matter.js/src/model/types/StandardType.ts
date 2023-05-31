/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

import { BoolTypeDefinition, Constraint, Datatype, EnumTypeDefinition, FloatTypeDefinition, IntTypeDefinition, ArrayTypeDefinition, Metatype, Never, OctetTypeDefinition, ObjectTypeDefinition, derive } from "./index.js";
import { TypeDefinition } from "./TypeDefinition.js";

const bool = (code: number, name: Metatype.BooleanName, description: string): BoolTypeDefinition =>
    ({ datatype: Datatype.bool, code, name, description });
const baseint = (code: number, name: Metatype.IntegerName, description: string, size: IntTypeDefinition.Size): IntTypeDefinition =>
    ({ datatype: Datatype[name], code, name, description, size });
const int = (code: number, name: string, description: string, datatype: Metatype.Integer): IntTypeDefinition =>
    ({ datatype: datatype, code, name, description });
const float = (code: number, name: Metatype.FloatName, description: string, size: FloatTypeDefinition.Size): FloatTypeDefinition =>
    ({ datatype: Datatype[name], code, name, description, size });
const octet = (code: number, name: string, description: string, constraint?: Constraint): OctetTypeDefinition =>
    ({ datatype: Datatype.octstr, code, name, constraint, description });
const enum8 = (code: number, name: string, description: string, values: EnumTypeDefinition.Values) =>
    ({ datatype: Datatype.enum8, code, name, description, values });
const list = (code: number, name: string, description: string, entry: TypeDefinition): ArrayTypeDefinition =>
    ({ datatype: Datatype.list, code, name, description, entry });
const struct = (code: number, name: string, description: string, fields: { [name: string]: TypeDefinition }): StructTypeDefinition =>
    ({ datatype: Datatype.struct, code, name, description, fields });

const TodFields = {} as ObjectTypeDefinition.Fields;
const DateFields = {} as ObjectTypeDefinition.Fields;

/**
 * Matter specification "base data types".
 */
export const StandardType = {
    // Discrete
    bool:          bool      (0x10, "bool",          "Boolean"),
    map8:          baseint   (0x18, "map8",          "8-bit bitmap",                1),
    map16:         baseint   (0x19, "map16",         "16-bit bitmap",               2),
    map32:         baseint   (0x1b, "map32",         "32-bit bitmap",               4),
    map64:         baseint   (0x1f, "map64",         "64-bit bitmap",               8),

    // Analog integer
    uint8:         baseint   (0x20, "uint8",         "Signed 8-bit integer",        1),
    uint16:        baseint   (0x21, "uint16",        "Signed 16-bit integer",       2),
    uint24:        baseint   (0x22, "uint24",        "Signed 24-bit integer",       3),
    uint32:        baseint   (0x23, "uint32",        "Signed 32-bit integer",       4),
    uint40:        baseint   (0x24, "uint40",        "Signed 40-bit integer",       5),
    uint48:        baseint   (0x25, "uint48",        "Signed 48-bit integer",       6),
    uint56:        baseint   (0x26, "uint56",        "Signed 56-bit integer",       7),
    uint64:        baseint   (0x27, "uint64",        "Signed 64-bit integer",       8),
    int8:          baseint   (0x28, "int8",          "Unsigned 8-bit integer",      1),
    int16:         baseint   (0x29, "int16",         "Unsigned 16-bit integer",     2),
    int24:         baseint   (0x2a, "int24",         "Unsigned 24-bit integer",     3),
    int32:         baseint   (0x2b, "int32",         "Unsigned 32-bit integer",     4),
    int40:         baseint   (0x2c, "int40",         "Unsigned 40-bit integer",     5),
    int48:         baseint   (0x2d, "int48",         "Unsigned 48-bit integer",     6),
    int56:         baseint   (0x2e, "int56",         "Unsigned 56-bit integer",     7),
    int64:         baseint   (0x2f, "int64",         "Unsigned 64-bit integer",     8),

    // Analog float
    single:        float     (0x39, "single",        "Single precision",            4),
    double:        float     (0x3a, "double",        "Double precision",            8),

    // Composite
    octstr:        octet     (0x41, "octstr",        "Octet string",                undefined),
    list:          list      (0x48, "list",          "List",                        Never),
    struct:        struct    (0x4c, "struct",        "Struct",                      {}),

    // Analog relative
    percent:       int       (0x32, "percent",       "Percentage units 1%",         Datatype.uint8),
    percent100ths: int       (0x33, "percent100ths", "Percentage units 0.01%",      Datatype.uint16),

    // Analog time
    tod:           struct    (0xe0, "tod",           "Time of day",                 TodFields),
    date:          struct    (0xe1, "date",          "Date",                        DateFields),
    epochUs:       int       (0xe3, "epoch-us",      "Epoch time in microseconds",  Datatype.uint64),
    epochS:        int       (0xe2, "epoch-s",       "Epoch time in seconds",       Datatype.uint32),
    /** @deprecated by Matter specification */
    utc:           depint    (0xe2, "utc",           "UTC time",                    Datatype.uint32),
    posixMs:       int       (0xf3, "posix-ms",      "POSIX time in milliseconds",  Datatype.uint64),
    systimeUs:     int       (0xe4, "systime-us",    "Sytem time in microseconds",  Datatype.uint64),
    systimeMs:     int       (0xf4, "systime-ms",    "System time in milliseconds", Datatype.uint64),

    // Discrete enumeration
    enum8:         int       (0x30, "enum8",         "8-bit enumeration",           Datatype.uint8),
    enum16:        int       (0x31, "enum16",        "16-bit enumeration",          Datatype.uint16),
    priority:      enum8     (0x34, "priority",      "Priority",                    Priority),
    status:        enum8     (0xe7, "status",        "Status Code",                 StatusCode),

    // Identifier
    fabricId:      int       (0xd1, "fabric-id",     "Fabric ID",                   Datatype.uint64),
    fabricIdx:     int       (0xd2, "fabric-idx",    "Fabric Index",                Datatype.uint8),
    nodeId:        int       (0xf0, "node-id",       "Node ID",                     Datatype.uint64),
    /** @deprecated by Matter specification */
    eui64:         depint    (0xf0, "eui64",         "IEEE address",                Datatype.uint64),
    groupId:       int       (0xf1, "group-id",      "Group ID",                    Datatype.uint16),
    endpointNo:    int       (0xe5, "endpoint-no",   "Endpoint number",             Datatype.uint16),
    vendorId:      int       (0xd3, "vendor-id",     "Vendor ID",                   Datatype.uint16),
    deviceTypeId:  int       (0xed, "devtype-id",    "Device type ID",              Datatype.uint32),
    clusterId:     int       (0xe8, "cluster-id",    "Cluster ID",                  Datatype.uint32),
    attributeId:   int       (0xe9, "attrib-id",     "Attribute ID",                Datatype.uint32),
    fieldId:       int       (0xef, "field-id",      "Field ID",                    Datatype.uint32),
    eventId:       int       (0xee, "event-id",      "Event ID",                    Datatype.uint32),
    commandId:     int       (0xec, "command-id",    "Command ID",                  Datatype.uint32),
    actionId:      int       (0xea, "action-id",     "Action ID",                   Datatype.uint8),
    transactionId: int       (0xeb, "trans-id",      "Transaction ID",              Datatype.uint32),

    // Index
    entryIdx:      int       (0xf2, "entry-idx",     "Entry index",                 Datatype.uint16),

    // Counter
    dataVer:       int       (0xd0, "data-ver",      "Data version",                Datatype.uint32),
    eventNumber:   int       (0xe6, "event-no",      "Event number",                Datatype.uint64),

    // Composite string
    string:        octet     (0x42, "string",        "Character string"),

    // Composite Address
    ipadr:         octet     (0xd3, "ipadr",         "IP Address",                  [ 4, 16 ]),
    ipv4adr:       octet     (0xd4, "ipv4adr",       "IPv4 address",                [ 4 ]),
    ipv6adr:       octet     (0xd5, "ipv6adr",       "IPv6 address",                [ 16 ]),
    ipv6pre:       octet     (0xd6, "ipv6pre",       "IPv6 prefix",                 { min: 1, max: 17 }),
    hwadr:         octet     (0xd7, "hwadr",         "Hardware address",            [ 6, 8 ])
}

Object.assign(TodFields, {
    hours: StandardType.uint8,
    minutes: StandardType.uint8,
    seconds: StandardType.uint8,
    hundredths: StandardType.uint8
});

Object.assign(DateFields, {
    year: derive(StandardType.uint8, { quality: { nullable: true } }),
    month: derive(StandardType.uint8, { quality: { nullable: true } }),
    day: derive(StandardType.uint8, { quality: { nullable: true } }),
    dow: derive(StandardType.uint8, {quality: { nullable: true } })
});
