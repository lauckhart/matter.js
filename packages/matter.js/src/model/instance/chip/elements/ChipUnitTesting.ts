/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement, EventElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0xfff1fc05, name: "UnitTesting",
    description: "Unit Testing",
    details: "The Test Cluster is meant to validate the generated code",
    children: [
        AttributeElement({
            id: 0x0000, name: "Boolean", base: "boolean",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0001, name: "Bitmap", base: "bitmap8",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0002, name: "Bitmap", base: "bitmap16",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0003, name: "Bitmap", base: "bitmap32",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0004, name: "Bitmap", base: "bitmap64",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0005, name: "IntU", base: "int8u",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0006, name: "IntU", base: "int16u",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0007, name: "IntU", base: "int24u",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0008, name: "IntU", base: "int32u",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0009, name: "IntU", base: "int40u",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x000a, name: "IntU", base: "int48u",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x000b, name: "IntU", base: "int56u",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x000c, name: "IntU", base: "int64u",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x000d, name: "IntS", base: "int8s",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x000e, name: "IntS", base: "int16s",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x000f, name: "IntS", base: "int24s",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0010, name: "IntS", base: "int32s",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0011, name: "IntS", base: "int40s",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0012, name: "IntS", base: "int48s",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0013, name: "IntS", base: "int56s",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0014, name: "IntS", base: "int64s",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0015, name: "Enum", base: "enum8",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0016, name: "Enum", base: "enum16",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0017, name: "FloatSingle", base: "float_single",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0018, name: "FloatDouble", base: "float_double",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0019, name: "OctetString", base: "octet_string",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x001a, name: "List", base: "list_int8u",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x001b, name: "ListOctetString", base: "list_octet_string",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x001c, name: "ListStructOctetString", base: "list_struct_octet_string",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x001d, name: "LongOctetString", base: "long_octet_string",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x001e, name: "CharString", base: "char_string",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x001f, name: "LongCharString", base: "long_char_string",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0020, name: "EpochUs", base: "epoch_us",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0021, name: "EpochS", base: "epoch_s",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0022, name: "TestVendorId", base: "vendor_id",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0023, name: "ListOfStructsWithOptionals", base: "list_nullables_and_optionals_struct",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0024, name: "SimpleEnum", base: "enum_attr",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0025, name: "Struct", base: "struct_attr",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0026, name: "RangeRestrictedIntU", base: "range_restricted_int8u",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0027, name: "RangeRestrictedIntS", base: "range_restricted_int8s",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0028, name: "RangeRestrictedIntU", base: "range_restricted_int16u",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0029, name: "RangeRestrictedIntS", base: "range_restricted_int16s",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x002a, name: "ListLongOctetString", base: "list_long_octet_string",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x002b, name: "ListFabricScoped", base: "list_fabric_scoped",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0030, name: "TimedWriteBoolean", base: "timed_write_boolean",
            access: { rw: "W", timed: true }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0031, name: "GeneralErrorBoolean", base: "general_error_boolean",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0032, name: "ClusterErrorBoolean", base: "cluster_error_boolean",
            access: { rw: "W" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x4000, name: "NullableBoolean", base: "nullable_boolean",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x4001, name: "NullableBitmap", base: "nullable_bitmap8",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x4002, name: "NullableBitmap", base: "nullable_bitmap16",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x4003, name: "NullableBitmap", base: "nullable_bitmap32",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x4004, name: "NullableBitmap", base: "nullable_bitmap64",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x4005, name: "NullableIntU", base: "nullable_int8u",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x4006, name: "NullableIntU", base: "nullable_int16u",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x4007, name: "NullableIntU", base: "nullable_int24u",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x4008, name: "NullableIntU", base: "nullable_int32u",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x4009, name: "NullableIntU", base: "nullable_int40u",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x400a, name: "NullableIntU", base: "nullable_int48u",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x400b, name: "NullableIntU", base: "nullable_int56u",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x400c, name: "NullableIntU", base: "nullable_int64u",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x400d, name: "NullableIntS", base: "nullable_int8s",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x400e, name: "NullableIntS", base: "nullable_int16s",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x400f, name: "NullableIntS", base: "nullable_int24s",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x4010, name: "NullableIntS", base: "nullable_int32s",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x4011, name: "NullableIntS", base: "nullable_int40s",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x4012, name: "NullableIntS", base: "nullable_int48s",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x4013, name: "NullableIntS", base: "nullable_int56s",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x4014, name: "NullableIntS", base: "nullable_int64s",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x4015, name: "NullableEnum", base: "nullable_enum8",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x4016, name: "NullableEnum", base: "nullable_enum16",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x4017, name: "NullableFloatSingle", base: "nullable_float_single",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x4018, name: "NullableFloatDouble", base: "nullable_float_double",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x4019, name: "NullableOctetString", base: "nullable_octet_string",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x401e, name: "NullableCharString", base: "nullable_char_string",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x4024, name: "NullableSimpleEnum", base: "nullable_enum_attr",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x4025, name: "NullableStruct", base: "nullable_struct",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x4026, name: "NullableRangeRestrictedIntU", base: "nullable_range_restricted_int8u",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x4027, name: "NullableRangeRestrictedIntS", base: "nullable_range_restricted_int8s",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x4028, name: "NullableRangeRestrictedIntU", base: "nullable_range_restricted_int16u",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x4029, name: "NullableRangeRestrictedIntS", base: "nullable_range_restricted_int16s",
            access: { rw: "W" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x402a, name: "WriteOnlyIntU", base: "write_only_int8u",
            access: { rw: "W" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x00ff, name: "Unsupported", base: "unsupported",
            access: { rw: "W" }, conformance: [ "O" ]
        }),

        CommandElement({
            id: 0x0000, name: "Test", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request"
        }),

        CommandElement({
            id: 0x0001, name: "TestNotHandled", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request"
        }),

        CommandElement({
            id: 0x0002, name: "TestSpecific", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request", response: "TestSpecificResponse"
        }),

        CommandElement({
            id: 0x0003, name: "TestUnknownCommand", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request"
        }),

        CommandElement({
            id: 0x0004, name: "TestAddArguments", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "TestAddArgumentsResponse",
            children: [
                DatatypeElement({
                    name: "Arg", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "TestSimpleArgumentRequest", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "TestSimpleArgumentResponse",
            children: [
                DatatypeElement({
                    name: "Arg", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0006, name: "TestStructArrayArgumentRequest", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "TestStructArrayArgumentResponse",
            children: [
                DatatypeElement({
                    name: "Arg", base: "NestedStructList",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "NestedStructList",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "SimpleStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "SimpleStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "SimpleEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "SimpleEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "SimpleEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "SimpleEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0007, name: "TestStructArgumentRequest", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "BooleanResponse",
            children: [
                DatatypeElement({
                    name: "Arg", base: "SimpleStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "SimpleStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0008, name: "TestNestedStructArgumentRequest", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "BooleanResponse",
            children: [
                DatatypeElement({
                    name: "Arg", base: "NestedStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "NestedStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0009, name: "TestListStructArgumentRequest", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "BooleanResponse",
            children: [
                DatatypeElement({
                    name: "Arg", base: "SimpleStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "SimpleStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000a, name: "TestListIntUArgumentRequest", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "BooleanResponse",
            children: [
                DatatypeElement({
                    name: "Arg", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000b, name: "TestNestedStructListArgumentRequest", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "BooleanResponse",
            children: [
                DatatypeElement({
                    name: "Arg", base: "NestedStructList",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "NestedStructList",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000c, name: "TestListNestedStructListArgumentRequest", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "BooleanResponse",
            children: [
                DatatypeElement({
                    name: "Arg", base: "NestedStructList",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "NestedStructList",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000d, name: "TestListIntUReverseRequest", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "TestListInt8UReverseResponse",
            children: [
                DatatypeElement({
                    name: "Arg", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000e, name: "TestEnumsRequest", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "TestEnumsResponse",
            children: [
                DatatypeElement({
                    name: "Arg", base: "vendor_id",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "vendor_id",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "SimpleEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "SimpleEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000f, name: "TestNullableOptionalRequest", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "TestNullableOptionalResponse",
            children: [
                DatatypeElement({
                    name: "Arg", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "Arg", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
                })
            ]
        }),

        CommandElement({
            id: 0x0010, name: "TestComplexNullableOptionalRequest", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "TestComplexNullableOptionalResponse",
            children: [
                DatatypeElement({
                    name: "NullableInt", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "NullableInt", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "OptionalInt", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "OptionalInt", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "NullableOptionalInt", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "NullableOptionalInt", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "NullableString", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "NullableString", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "OptionalString", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "OptionalString", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "NullableOptionalString", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "NullableOptionalString", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "NullableStruct", base: "SimpleStruct",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "NullableStruct", base: "SimpleStruct",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "OptionalStruct", base: "SimpleStruct",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "OptionalStruct", base: "SimpleStruct",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "NullableOptionalStruct", base: "SimpleStruct",
                    access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "NullableOptionalStruct", base: "SimpleStruct",
                    access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "NullableList", base: "SimpleEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "NullableList", base: "SimpleEnum",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "OptionalList", base: "SimpleEnum",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "OptionalList", base: "SimpleEnum",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "NullableOptionalList", base: "SimpleEnum",
                    access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "NullableOptionalList", base: "SimpleEnum",
                    access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
                })
            ]
        }),

        CommandElement({
            id: 0x0011, name: "SimpleStructEchoRequest", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "SimpleStructResponse",
            children: [
                DatatypeElement({
                    name: "Arg", base: "SimpleStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "SimpleStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0012, name: "TimedInvokeRequest", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request"
        }),

        CommandElement({
            id: 0x0013, name: "TestSimpleOptionalArgumentRequest", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "Arg", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0014, name: "TestEmitTestEventRequest", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "TestEmitTestEventResponse",
            children: [
                DatatypeElement({
                    name: "Arg", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "SimpleEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "SimpleEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0015, name: "TestEmitTestFabricScopedEventRequest", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "TestEmitTestFabricScopedEventResponse",
            children: [
                DatatypeElement({
                    name: "Arg", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0000, name: "TestSpecificResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "ReturnValue", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ReturnValue", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "TestAddArgumentsResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "ReturnValue", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ReturnValue", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "TestSimpleArgumentResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "ReturnValue", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ReturnValue", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "TestStructArrayArgumentResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "Arg", base: "NestedStructList",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "NestedStructList",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "SimpleStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "SimpleStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "SimpleEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "SimpleEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "SimpleEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "SimpleEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0004, name: "TestListIntUReverseResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "Arg", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0005, name: "TestEnumsResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "Arg", base: "vendor_id",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "vendor_id",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "SimpleEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "SimpleEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0006, name: "TestNullableOptionalResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "WasPresent", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "WasPresent", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "WasNull", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "WasNull", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "Value", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "Value", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "OriginalValue", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "OriginalValue", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
                })
            ]
        }),

        CommandElement({
            id: 0x0007, name: "TestComplexNullableOptionalResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "NullableIntWasNull", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NullableIntWasNull", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NullableIntValue", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "NullableIntValue", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "OptionalIntWasPresent", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "OptionalIntWasPresent", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "OptionalIntValue", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "OptionalIntValue", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "NullableOptionalIntWasPresent", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NullableOptionalIntWasPresent", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NullableOptionalIntWasNull", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "NullableOptionalIntWasNull", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "NullableOptionalIntValue", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "NullableOptionalIntValue", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "NullableStringWasNull", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NullableStringWasNull", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NullableStringValue", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "NullableStringValue", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "OptionalStringWasPresent", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "OptionalStringWasPresent", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "OptionalStringValue", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "OptionalStringValue", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "NullableOptionalStringWasPresent", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NullableOptionalStringWasPresent", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NullableOptionalStringWasNull", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "NullableOptionalStringWasNull", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "NullableOptionalStringValue", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "NullableOptionalStringValue", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "NullableStructWasNull", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NullableStructWasNull", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NullableStructValue", base: "SimpleStruct",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "NullableStructValue", base: "SimpleStruct",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "OptionalStructWasPresent", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "OptionalStructWasPresent", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "OptionalStructValue", base: "SimpleStruct",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "OptionalStructValue", base: "SimpleStruct",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "NullableOptionalStructWasPresent", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NullableOptionalStructWasPresent", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NullableOptionalStructWasNull", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "NullableOptionalStructWasNull", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "NullableOptionalStructValue", base: "SimpleStruct",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "NullableOptionalStructValue", base: "SimpleStruct",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "NullableListWasNull", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NullableListWasNull", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NullableListValue", base: "SimpleEnum",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "NullableListValue", base: "SimpleEnum",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "OptionalListWasPresent", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "OptionalListWasPresent", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "OptionalListValue", base: "SimpleEnum",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "OptionalListValue", base: "SimpleEnum",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "NullableOptionalListWasPresent", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NullableOptionalListWasPresent", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NullableOptionalListWasNull", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "NullableOptionalListWasNull", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "NullableOptionalListValue", base: "SimpleEnum",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "NullableOptionalListValue", base: "SimpleEnum",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0008, name: "BooleanResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "Value", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Value", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0009, name: "SimpleStructResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "Arg", base: "SimpleStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "SimpleStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000a, name: "TestEmitTestEventResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "Value", base: "INT64U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Value", base: "INT64U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000b, name: "TestEmitTestFabricScopedEventResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "Value", base: "INT64U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Value", base: "INT64U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        EventElement({
            id: 0x0001, name: "TestEvent", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], priority: "info",
            children: [
                DatatypeElement({
                    name: "Arg", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "INT8U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "SimpleEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "SimpleEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "SimpleStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "SimpleStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "SimpleStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "SimpleStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "SimpleEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Arg", base: "SimpleEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        EventElement({
            id: 0x0002, name: "TestFabricScopedEvent", base: "struct",
            access: { rw: "R", fabric: "S" }, conformance: [ "M" ], priority: "info"
        })
    ]
}));
