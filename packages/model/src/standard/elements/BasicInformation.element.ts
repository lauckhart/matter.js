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
    EventElement as Event,
    FieldElement as Field,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const BasicInformation = Cluster(
    { name: "BasicInformation", id: 0x28 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 4 }),
    Attribute({
        name: "DataModelRevision", id: 0x0, type: "uint16",
        constraint: "desc", conformance: "M", access: "R V", quality: "F"
    }),
    Attribute({
        name: "VendorName", id: 0x1, type: "string",
        constraint: "max 32", conformance: "M", access: "R V", quality: "F"
    }),
    Attribute({ name: "VendorId", id: 0x2, type: "vendor-id", conformance: "M", access: "R V", quality: "F" }),
    Attribute({
        name: "ProductName", id: 0x3, type: "string",
        constraint: "max 32", conformance: "M", access: "R V", quality: "F"
    }),
    Attribute({ name: "ProductId", id: 0x4, type: "uint16", conformance: "M", access: "R V", quality: "F" }),
    Attribute({
        name: "NodeLabel", id: 0x5, type: "string",
        constraint: "max 32", conformance: "M", access: "RW VM", quality: "N"
    }),
    Attribute({
        name: "Location", id: 0x6, type: "string",
        default: "XX", constraint: "2", conformance: "M", access: "RW VA", quality: "N"
    }),
    Attribute(
        { name: "HardwareVersion", id: 0x7, type: "uint16", default: 0, conformance: "M", access: "R V", quality: "F" }
    ),
    Attribute({
        name: "HardwareVersionString", id: 0x8, type: "string",
        constraint: "1 to 64", conformance: "M", access: "R V", quality: "F"
    }),
    Attribute({
        name: "SoftwareVersion", id: 0x9, type: "uint32",
        default: 0, constraint: "desc", conformance: "M", access: "R V", quality: "F"
    }),
    Attribute({
        name: "SoftwareVersionString", id: 0xa, type: "string",
        constraint: "1 to 64", conformance: "M", access: "R V", quality: "F"
    }),
    Attribute({
        name: "ManufacturingDate", id: 0xb, type: "string",
        constraint: "8 to 16", conformance: "O", access: "R V", quality: "F"
    }),
    Attribute({
        name: "PartNumber", id: 0xc, type: "string",
        constraint: "max 32", conformance: "O", access: "R V", quality: "F"
    }),
    Attribute({
        name: "ProductUrl", id: 0xd, type: "string",
        constraint: "max 256", conformance: "O", access: "R V", quality: "F"
    }),
    Attribute({
        name: "ProductLabel", id: 0xe, type: "string",
        constraint: "max 64", conformance: "O", access: "R V", quality: "F"
    }),
    Attribute({
        name: "SerialNumber", id: 0xf, type: "string",
        constraint: "max 32", conformance: "O", access: "R V", quality: "F"
    }),
    Attribute({
        name: "LocalConfigDisabled", id: 0x10, type: "bool",
        default: false, conformance: "O", access: "RW VM", quality: "N"
    }),
    Attribute({ name: "Reachable", id: 0x11, type: "bool", default: true, conformance: "O", access: "R V" }),
    Attribute({ name: "UniqueId", id: 0x12, type: "string", constraint: "max 32", conformance: "M", access: "R V", quality: "F" }),
    Attribute({
        name: "CapabilityMinima", id: 0x13, type: "CapabilityMinimaStruct",
        conformance: "M", access: "R V", quality: "F"
    }),
    Attribute({
        name: "ProductAppearance", id: 0x14, type: "ProductAppearanceStruct",
        conformance: "O", access: "R V", quality: "F"
    }),
    Attribute({
        name: "SpecificationVersion", id: 0x15, type: "uint32",
        default: 0, constraint: "desc", conformance: "M", access: "R V", quality: "F"
    }),
    Attribute({
        name: "MaxPathsPerInvoke", id: 0x16, type: "uint16",
        default: 1, constraint: "min 1", conformance: "M", access: "R V", quality: "F"
    }),
    Event(
        { name: "StartUp", id: 0x0, conformance: "M", access: "V", priority: "critical" },
        Field({ name: "SoftwareVersion", id: 0x0, type: "uint32", conformance: "M" })
    ),
    Event({ name: "ShutDown", id: 0x1, conformance: "O", access: "V", priority: "critical" }),
    Event(
        { name: "Leave", id: 0x2, conformance: "O", access: "V", priority: "info" },
        Field({ name: "FabricIndex", id: 0x0, type: "fabric-idx", constraint: "1 to 254", conformance: "M" })
    ),
    Event(
        { name: "ReachableChanged", id: 0x3, conformance: "desc", access: "V", priority: "info" },
        Field({ name: "ReachableNewValue", id: 0x0, type: "bool", conformance: "M" })
    ),

    Datatype(
        { name: "ProductFinishEnum", type: "enum8" },
        Field({ name: "Other", id: 0x0, conformance: "M" }),
        Field({ name: "Matte", id: 0x1, conformance: "M" }),
        Field({ name: "Satin", id: 0x2, conformance: "M" }),
        Field({ name: "Polished", id: 0x3, conformance: "M" }),
        Field({ name: "Rugged", id: 0x4, conformance: "M" }),
        Field({ name: "Fabric", id: 0x5, conformance: "M" })
    ),

    Datatype(
        { name: "ColorEnum", type: "enum8" },
        Field({ name: "Black", id: 0x0, conformance: "M" }),
        Field({ name: "Navy", id: 0x1, conformance: "M" }),
        Field({ name: "Green", id: 0x2, conformance: "M" }),
        Field({ name: "Teal", id: 0x3, conformance: "M" }),
        Field({ name: "Maroon", id: 0x4, conformance: "M" }),
        Field({ name: "Purple", id: 0x5, conformance: "M" }),
        Field({ name: "Olive", id: 0x6, conformance: "M" }),
        Field({ name: "Gray", id: 0x7, conformance: "M" }),
        Field({ name: "Blue", id: 0x8, conformance: "M" }),
        Field({ name: "Lime", id: 0x9, conformance: "M" }),
        Field({ name: "Aqua", id: 0xa, conformance: "M" }),
        Field({ name: "Red", id: 0xb, conformance: "M" }),
        Field({ name: "Fuchsia", id: 0xc, conformance: "M" }),
        Field({ name: "Yellow", id: 0xd, conformance: "M" }),
        Field({ name: "White", id: 0xe, conformance: "M" }),
        Field({ name: "Nickel", id: 0xf, conformance: "M" }),
        Field({ name: "Chrome", id: 0x10, conformance: "M" }),
        Field({ name: "Brass", id: 0x11, conformance: "M" }),
        Field({ name: "Copper", id: 0x12, conformance: "M" }),
        Field({ name: "Silver", id: 0x13, conformance: "M" }),
        Field({ name: "Gold", id: 0x14, conformance: "M" })
    ),

    Datatype(
        { name: "ProductAppearanceStruct", type: "struct" },
        Field({ name: "Finish", id: 0x0, type: "ProductFinishEnum", conformance: "M" }),
        Field({ name: "PrimaryColor", id: 0x1, type: "ColorEnum", conformance: "M", quality: "X" })
    ),
    Datatype(
        { name: "CapabilityMinimaStruct", type: "struct" },
        Field({ name: "CaseSessionsPerFabric", id: 0x0, type: "uint16", default: 3, constraint: "min 3", conformance: "M" }),
        Field({ name: "SubscriptionsPerFabric", id: 0x1, type: "uint16", default: 3, constraint: "min 3", conformance: "M" })
    )
);

MatterDefinition.children.push(BasicInformation);
