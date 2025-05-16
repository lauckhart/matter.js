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
    { name: "ApplicationBasic", id: 0x50d },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),
    Attribute({
        name: "VendorName", id: 0x0, type: "string",
        constraint: "max 32", conformance: "O", access: "R V", quality: "F"
    }),
    Attribute({ name: "VendorId", id: 0x1, type: "vendor-id", conformance: "O", access: "R V", quality: "F" }),
    Attribute({
        name: "ApplicationName", id: 0x2, type: "string",
        constraint: "desc", conformance: "M", access: "R V", quality: "F"
    }),
    Attribute({ name: "ProductId", id: 0x3, type: "uint16", conformance: "O", access: "R V", quality: "F" }),
    Attribute({
        name: "Application", id: 0x4, type: "ApplicationStruct",
        constraint: "desc", conformance: "M", access: "R V", quality: "F"
    }),
    Attribute(
        { name: "Status", id: 0x5, type: "ApplicationStatusEnum", constraint: "desc", conformance: "M", access: "R V" }
    ),
    Attribute({
        name: "ApplicationVersion", id: 0x6, type: "string",
        constraint: "max 32", conformance: "M", access: "R V", quality: "F"
    }),
    Attribute(
        { name: "AllowedVendorList", id: 0x7, type: "list", conformance: "M", access: "R A", quality: "F" },
        Field({ name: "entry", type: "vendor-id" })
    ),

    Datatype(
        { name: "ApplicationStatusEnum", type: "enum8" },
        Field({ name: "Stopped", id: 0x0, conformance: "M" }),
        Field({ name: "ActiveVisibleFocus", id: 0x1, conformance: "M" }),
        Field({ name: "ActiveHidden", id: 0x2, conformance: "M" }),
        Field({ name: "ActiveVisibleNotFocus", id: 0x3, conformance: "M" })
    ),

    Datatype(
        { name: "ApplicationStruct", type: "struct" },
        Field({ name: "CatalogVendorId", id: 0x0, type: "uint16", conformance: "M" }),
        Field({ name: "ApplicationId", id: 0x1, type: "string", conformance: "M" })
    )
);

MatterDefinition.children.push(ApplicationBasic);
