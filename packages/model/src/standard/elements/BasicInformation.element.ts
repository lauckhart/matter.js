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
    { id: 0x28, name: "BasicInformation" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 4 }),
    Attribute({
        id: 0x0, name: "DataModelRevision", type: "uint16",
        access: "R V", conformance: "M", constraint: "all", quality: "F"
    }),
    Attribute({
        id: 0x1, name: "VendorName", type: "string",
        access: "R V", conformance: "M", constraint: "max 32", quality: "F"
    }),
    Attribute({ id: 0x2, name: "VendorId", type: "vendor-id", access: "R V", conformance: "M", quality: "F" }),
    Attribute({
        id: 0x3, name: "ProductName", type: "string",
        access: "R V", conformance: "M", constraint: "max 32", quality: "F"
    }),
    Attribute({ id: 0x4, name: "ProductId", type: "uint16", access: "R V", conformance: "M", quality: "F" }),
    Attribute({
        id: 0x5, name: "NodeLabel", type: "string",
        access: "RW VM", conformance: "M", constraint: "max 32", quality: "N"
    }),
    Attribute({
        id: 0x6, name: "Location", type: "string",
        access: "RW VA", conformance: "M", constraint: "2", default: "XX", quality: "N"
    }),
    Attribute(
        { id: 0x7, name: "HardwareVersion", type: "uint16", access: "R V", conformance: "M", default: 0, quality: "F" }
    ),
    Attribute({
        id: 0x8, name: "HardwareVersionString", type: "string",
        access: "R V", conformance: "M", constraint: "1 to 64", quality: "F"
    }),
    Attribute({
        id: 0x9, name: "SoftwareVersion", type: "uint32",
        access: "R V", conformance: "M", constraint: "all", default: 0, quality: "F"
    }),
    Attribute({
        id: 0xa, name: "SoftwareVersionString", type: "string",
        access: "R V", conformance: "M", constraint: "1 to 64", quality: "F"
    }),
    Attribute({
        id: 0xb, name: "ManufacturingDate", type: "string",
        access: "R V", conformance: "O", constraint: "8 to 16", quality: "F"
    }),
    Attribute({
        id: 0xc, name: "PartNumber", type: "string",
        access: "R V", conformance: "O", constraint: "max 32", quality: "F"
    }),
    Attribute({
        id: 0xd, name: "ProductUrl", type: "string",
        access: "R V", conformance: "O", constraint: "max 256", quality: "F"
    }),
    Attribute({
        id: 0xe, name: "ProductLabel", type: "string",
        access: "R V", conformance: "O", constraint: "max 64", quality: "F"
    }),
    Attribute({
        id: 0xf, name: "SerialNumber", type: "string",
        access: "R V", conformance: "O", constraint: "max 32", quality: "F"
    }),
    Attribute({
        id: 0x10, name: "LocalConfigDisabled", type: "bool",
        access: "RW VM", conformance: "O", default: false, quality: "N"
    }),
    Attribute({ id: 0x11, name: "Reachable", type: "bool", access: "R V", conformance: "O", default: true }),
    Attribute({ id: 0x12, name: "UniqueId", type: "string", access: "R V", conformance: "M", constraint: "max 32", quality: "F" }),
    Attribute({
        id: 0x13, name: "CapabilityMinima", type: "CapabilityMinimaStruct",
        access: "R V", conformance: "M", quality: "F"
    }),
    Attribute({
        id: 0x14, name: "ProductAppearance", type: "ProductAppearanceStruct",
        access: "R V", conformance: "O", quality: "F"
    }),
    Attribute({
        id: 0x15, name: "SpecificationVersion", type: "uint32",
        access: "R V", conformance: "M", constraint: "all", default: 0, quality: "F"
    }),
    Attribute({
        id: 0x16, name: "MaxPathsPerInvoke", type: "uint16",
        access: "R V", conformance: "M", constraint: "min 1", default: 1, quality: "F"
    }),
    Event(
        { id: 0x0, name: "StartUp", access: "V", conformance: "M", priority: "critical" },
        Field({ id: 0x0, name: "SoftwareVersion", type: "uint32", conformance: "M" })
    ),
    Event({ id: 0x1, name: "ShutDown", access: "V", conformance: "O", priority: "critical" }),
    Event(
        { id: 0x2, name: "Leave", access: "V", conformance: "O", priority: "info" },
        Field({ id: 0x0, name: "FabricIndex", type: "fabric-idx", conformance: "M", constraint: "1 to 254" })
    ),
    Event(
        { id: 0x3, name: "ReachableChanged", access: "V", conformance: "desc", priority: "info" },
        Field({ id: 0x0, name: "ReachableNewValue", type: "bool", conformance: "M" })
    ),

    Datatype(
        { name: "ProductFinishEnum", type: "enum8" },
        Field({ id: 0x0, name: "Other", conformance: "M" }),
        Field({ id: 0x1, name: "Matte", conformance: "M" }),
        Field({ id: 0x2, name: "Satin", conformance: "M" }),
        Field({ id: 0x3, name: "Polished", conformance: "M" }),
        Field({ id: 0x4, name: "Rugged", conformance: "M" }),
        Field({ id: 0x5, name: "Fabric", conformance: "M" })
    ),

    Datatype(
        { name: "ColorEnum", type: "enum8" },
        Field({ id: 0x0, name: "Black", conformance: "M" }),
        Field({ id: 0x1, name: "Navy", conformance: "M" }),
        Field({ id: 0x2, name: "Green", conformance: "M" }),
        Field({ id: 0x3, name: "Teal", conformance: "M" }),
        Field({ id: 0x4, name: "Maroon", conformance: "M" }),
        Field({ id: 0x5, name: "Purple", conformance: "M" }),
        Field({ id: 0x6, name: "Olive", conformance: "M" }),
        Field({ id: 0x7, name: "Gray", conformance: "M" }),
        Field({ id: 0x8, name: "Blue", conformance: "M" }),
        Field({ id: 0x9, name: "Lime", conformance: "M" }),
        Field({ id: 0xa, name: "Aqua", conformance: "M" }),
        Field({ id: 0xb, name: "Red", conformance: "M" }),
        Field({ id: 0xc, name: "Fuchsia", conformance: "M" }),
        Field({ id: 0xd, name: "Yellow", conformance: "M" }),
        Field({ id: 0xe, name: "White", conformance: "M" }),
        Field({ id: 0xf, name: "Nickel", conformance: "M" }),
        Field({ id: 0x10, name: "Chrome", conformance: "M" }),
        Field({ id: 0x11, name: "Brass", conformance: "M" }),
        Field({ id: 0x12, name: "Copper", conformance: "M" }),
        Field({ id: 0x13, name: "Silver", conformance: "M" }),
        Field({ id: 0x14, name: "Gold", conformance: "M" })
    ),

    Datatype(
        { name: "ProductAppearanceStruct", type: "struct" },
        Field({ id: 0x0, name: "Finish", type: "ProductFinishEnum", conformance: "M" }),
        Field({ id: 0x1, name: "PrimaryColor", type: "ColorEnum", conformance: "M", quality: "X" })
    ),
    Datatype(
        { name: "CapabilityMinimaStruct", type: "struct" },
        Field({ id: 0x0, name: "CaseSessionsPerFabric", type: "uint16", conformance: "M", constraint: "min 3", default: 3 }),
        Field({ id: 0x1, name: "SubscriptionsPerFabric", type: "uint16", conformance: "M", constraint: "min 3", default: 3 })
    )
);

MatterDefinition.children.push(BasicInformation);
