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
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 1 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "CON", constraint: "0", conformance: "O", longName: "Condition" }),
        Field({ name: "WRN", constraint: "1", conformance: "O", longName: "Warning" }),
        Field({ name: "REP", constraint: "2", conformance: "O", longName: "ReplacementProductList" })
    ),

    Attribute({ name: "Condition", id: 0x0, type: "percent", conformance: "CON", access: "R V" }),
    Attribute({
        name: "DegradationDirection", id: 0x1, type: "DegradationDirectionEnum",
        constraint: "desc", conformance: "CON", access: "R V", quality: "F"
    }),
    Attribute({ name: "ChangeIndication", id: 0x2, type: "ChangeIndicationEnum", default: 0, conformance: "M", access: "R V" }),
    Attribute({ name: "InPlaceIndicator", id: 0x3, type: "bool", conformance: "O", access: "R V" }),
    Attribute({
        name: "LastChangedTime", id: 0x4, type: "epoch-s",
        default: null, conformance: "O", access: "RW VO", quality: "X N"
    }),

    Attribute(
        {
            name: "ReplacementProductList", id: 0x5, type: "list",
            constraint: "max 5", conformance: "REP", access: "R V", quality: "F"
        },
        Field({ name: "entry", type: "ReplacementProductStruct" })
    ),

    Command({ name: "ResetCondition", id: 0x0, conformance: "O", access: "O", direction: "request", response: "status" }),
    Datatype(
        { name: "DegradationDirectionEnum", type: "enum8" },
        Field({ name: "Up", id: 0x0, conformance: "M" }),
        Field({ name: "Down", id: 0x1, conformance: "M" })
    ),

    Datatype(
        { name: "ChangeIndicationEnum", type: "enum8" },
        Field({ name: "Ok", id: 0x0, conformance: "M" }),
        Field({ name: "Warning", id: 0x1, conformance: "WRN" }),
        Field({ name: "Critical", id: 0x2, conformance: "M" })
    ),

    Datatype(
        { name: "ProductIdentifierTypeEnum", type: "enum8" },
        Field({ name: "Upc", id: 0x0, conformance: "M" }),
        Field({ name: "Gtin8", id: 0x1, conformance: "M" }),
        Field({ name: "Ean", id: 0x2, conformance: "M" }),
        Field({ name: "Gtin14", id: 0x3, conformance: "M" }),
        Field({ name: "Oem", id: 0x4, conformance: "M" })
    ),

    Datatype(
        { name: "ReplacementProductStruct", type: "struct" },
        Field({
            name: "ProductIdentifierType", id: 0x0, type: "ProductIdentifierTypeEnum",
            constraint: "desc", conformance: "M"
        }),
        Field({ name: "ProductIdentifierValue", id: 0x1, type: "string", constraint: "max 20", conformance: "M" })
    )
);

MatterDefinition.children.push(ResourceMonitoring);
