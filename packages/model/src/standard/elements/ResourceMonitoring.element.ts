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
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const ResourceMonitoring = Cluster(
    { name: "ResourceMonitoring" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "CON", conformance: "O", constraint: "0", longName: "Condition" }),
        Field({ name: "WRN", conformance: "O", constraint: "1", longName: "Warning" }),
        Field({ name: "REP", conformance: "O", constraint: "2", longName: "ReplacementProductList" })
    ),

    Attribute({ id: 0x0, name: "Condition", type: "percent", access: "R V", conformance: "CON" }),
    Attribute({
        id: 0x1, name: "DegradationDirection", type: "DegradationDirectionEnum",
        access: "R V", conformance: "CON", constraint: "desc", quality: "F"
    }),
    Attribute({ id: 0x2, name: "ChangeIndication", type: "ChangeIndicationEnum", access: "R V", conformance: "M", default: 0 }),
    Attribute({ id: 0x3, name: "InPlaceIndicator", type: "bool", access: "R V", conformance: "O" }),
    Attribute({
        id: 0x4, name: "LastChangedTime", type: "epoch-s",
        access: "RW VO", conformance: "O", default: null, quality: "X N"
    }),

    Attribute(
        {
            id: 0x5, name: "ReplacementProductList", type: "list",
            access: "R V", conformance: "REP", constraint: "max 5", quality: "F"
        },
        Field({ name: "entry", type: "ReplacementProductStruct" })
    ),

    Command({ id: 0x0, name: "ResetCondition", access: "O", conformance: "O", direction: "request", response: "status" }),
    Datatype(
        { name: "DegradationDirectionEnum", type: "enum8" },
        Field({ id: 0x0, name: "Up", conformance: "M" }),
        Field({ id: 0x1, name: "Down", conformance: "M" })
    ),

    Datatype(
        { name: "ChangeIndicationEnum", type: "enum8" },
        Field({ id: 0x0, name: "Ok", conformance: "M" }),
        Field({ id: 0x1, name: "Warning", conformance: "WRN" }),
        Field({ id: 0x2, name: "Critical", conformance: "M" })
    ),

    Datatype(
        { name: "ProductIdentifierTypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Upc", conformance: "M" }),
        Field({ id: 0x1, name: "Gtin8", conformance: "M" }),
        Field({ id: 0x2, name: "Ean", conformance: "M" }),
        Field({ id: 0x3, name: "Gtin14", conformance: "M" }),
        Field({ id: 0x4, name: "Oem", conformance: "M" })
    ),

    Datatype(
        { name: "ReplacementProductStruct", type: "struct" },
        Field({
            id: 0x0, name: "ProductIdentifierType", type: "ProductIdentifierTypeEnum",
            conformance: "M", constraint: "desc"
        }),
        Field({ id: 0x1, name: "ProductIdentifierValue", type: "string", conformance: "M", constraint: "max 20" })
    )
);

MatterDefinition.children.push(ResourceMonitoring);
