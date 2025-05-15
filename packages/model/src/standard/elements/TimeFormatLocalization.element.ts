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

export const TimeFormatLocalization = Cluster(
    { id: 0x2c, name: "TimeFormatLocalization" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 1 }),
    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "CALFMT", constraint: "0", longName: "CalendarFormat" })
    ),
    Attribute({ id: 0x0, name: "HourFormat", type: "HourFormatEnum", access: "RW VM", conformance: "M", quality: "N" }),
    Attribute({
        id: 0x1, name: "ActiveCalendarType", type: "CalendarTypeEnum",
        access: "RW VM", constraint: "in SupportedCalendarTypes", quality: "N"
    }),

    Attribute(
        {
            id: 0x2, name: "SupportedCalendarTypes", type: "list",
            access: "R V", conformance: "CALFMT", constraint: "desc", quality: "F"
        },
        Field({ name: "entry", type: "CalendarTypeEnum" })
    ),

    Datatype(
        { name: "HourFormatEnum", type: "enum8" },
        Field({ id: 0x0, name: "12Hr", conformance: "M" }),
        Field({ id: 0x1, name: "24Hr", conformance: "M" }),
        Field({ id: 0xff, name: "UseActiveLocale", conformance: "M" })
    ),

    Datatype(
        { name: "CalendarTypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Buddhist", conformance: "O.a+" }),
        Field({ id: 0x1, name: "Chinese", conformance: "O.a+" }),
        Field({ id: 0x2, name: "Coptic", conformance: "O.a+" }),
        Field({ id: 0x3, name: "Ethiopian", conformance: "O.a+" }),
        Field({ id: 0x4, name: "Gregorian", conformance: "O.a+" }),
        Field({ id: 0x5, name: "Hebrew", conformance: "O.a+" }),
        Field({ id: 0x6, name: "Indian", conformance: "O.a+" }),
        Field({ id: 0x7, name: "Islamic", conformance: "O.a+" }),
        Field({ id: 0x8, name: "Japanese", conformance: "O.a+" }),
        Field({ id: 0x9, name: "Korean", conformance: "O.a+" }),
        Field({ id: 0xa, name: "Persian", conformance: "O.a+" }),
        Field({ id: 0xb, name: "Taiwanese", conformance: "O.a+" }),
        Field({ id: 0xff, name: "UseActiveLocale", conformance: "O.a+" })
    )
);

MatterDefinition.children.push(TimeFormatLocalization);
