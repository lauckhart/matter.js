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
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const ApplicationBasic = Cluster(
    { id: 0x50d, name: "ApplicationBasic" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),
    Attribute({
        id: 0x0, name: "VendorName", type: "string",
        access: "R V", conformance: "O", constraint: "max 32", quality: "F"
    }),
    Attribute({ id: 0x1, name: "VendorId", type: "vendor-id", access: "R V", conformance: "O", quality: "F" }),
    Attribute({
        id: 0x2, name: "ApplicationName", type: "string",
        access: "R V", conformance: "M", constraint: "all", quality: "F"
    }),
    Attribute({ id: 0x3, name: "ProductId", type: "uint16", access: "R V", conformance: "O", quality: "F" }),
    Attribute({
        id: 0x4, name: "Application", type: "ApplicationStruct",
        access: "R V", conformance: "M", constraint: "all", quality: "F"
    }),
    Attribute(
        { id: 0x5, name: "Status", type: "ApplicationStatusEnum", access: "R V", conformance: "M", constraint: "all" }
    ),
    Attribute({
        id: 0x6, name: "ApplicationVersion", type: "string",
        access: "R V", conformance: "M", constraint: "max 32", quality: "F"
    }),
    Attribute(
        { id: 0x7, name: "AllowedVendorList", type: "list", access: "R A", conformance: "M", quality: "F" },
        Field({ name: "entry", type: "vendor-id" })
    ),

    Datatype(
        { name: "ApplicationStatusEnum", type: "enum8" },
        Field({ id: 0x0, name: "Stopped", conformance: "M" }),
        Field({ id: 0x1, name: "ActiveVisibleFocus", conformance: "M" }),
        Field({ id: 0x2, name: "ActiveHidden", conformance: "M" }),
        Field({ id: 0x3, name: "ActiveVisibleNotFocus", conformance: "M" })
    ),

    Datatype(
        { name: "ApplicationStruct", type: "struct" },
        Field({ id: 0x0, name: "CatalogVendorId", type: "uint16", conformance: "M" }),
        Field({ id: 0x1, name: "ApplicationId", type: "string", conformance: "M" })
    )
);

MatterDefinition.children.push(ApplicationBasic);
