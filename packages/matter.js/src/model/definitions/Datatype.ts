/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * An identifier for every standard datatype from the Matter Core
 * Specification.
 */
export enum Datatype {
    // Not part of the specification, used as a placeholder when actual type
    // information is unavailable
    never = "never",

    bool = "bool",
    map8 = "map8",
    map16 = "map16",
    map32 = "map32",
    map64 = "map64",
    uint8 = "uint8",
    uint16 = "uint16",
    uint24 = "uint24",
    uint32 = "uint32",
    uint40 = "uint40",
    uint48 = "uint48",
    uint56 = "uint56",
    uint64 = "uint64",
    int8 = "int8",
    int16 = "int16",
    int24 = "int24",
    int32 = "int32",
    int40 = "int40",
    int48 = "int48",
    int56 = "int56",
    int64 = "int64",
    single = "single",
    double = "double",
    octstr = "octstr",
    list = "list",
    struct = "struct",

    // Formally these are derived types, not datatypes, but we treat them
    // like datatypes because the metadata structure is different.  That is,
    // we need a TypeScript type that defines enum values.
    enum8 = "enum8",
    enum16 = "enum16"
}
