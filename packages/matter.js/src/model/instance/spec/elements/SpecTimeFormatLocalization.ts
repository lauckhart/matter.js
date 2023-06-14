/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x002c, name: "TimeFormatLocalization",
    classification: "node",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: "min 1", default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "CALFMT",
                    description: "The Node can be configured to use different calendar formats when conveying values to a user.",
                    xref: { document: "core", section: "11.4.4", version: "1.1" }
                })
            ]
        }),

        AttributeElement({
            id: 0x0000, name: "HourFormat", base: "HourFormatEnum",
            access: "RW VM", conformance: "M", default: "null", quality: "X N",
            details: "The HourFormat attribute SHALL represent the format that the Node is currently configured to use when conveying the hour unit of time. If provided, this value SHALL take priority over any unit",
            xref: { document: "core", section: "11.4.6.1", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "ActiveCalendarType", base: "CalendarTypeEnum",
            access: "RW VM", conformance: "CALFMT", default: "null", quality: "X N",
            details: "The ActiveCalendarType attribute SHALL represent the calendar format that the Node is currently configured to use when conveying dates. If provided, this value SHALL take priority over any unit implied through the ActiveLocale Attribute.",
            xref: { document: "core", section: "11.4.6.2", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "SupportedCalendarTypes", base: "list",
            access: "R V", conformance: "CALFMT", constraint: "desc", default: "N/A", quality: "F",
            details: "The SupportedCalendarTypes attribute SHALL represent a list of CalendarTypeEnum values that are supported by the Node. The list SHALL NOT contain any duplicate entries. The ordering of items within the list SHOULD NOT express any meaning. The maximum length of the SupportedCalendarTypes list SHALL be equivalent to the number of enumerations within CalendarTypeEnum.",
            xref: { document: "core", section: "11.4.6.3", version: "1.1" },
            children: [
                DatatypeElement({
                    name: "entry", base: "CalendarTypeEnum"
                })
            ]
        }),

        DatatypeElement({
            id: -1, name: "HourFormatEnum", base: "enum8",
            details: "This data type is derived from enum8.",
            xref: { document: "core", section: "11.4.5.1", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "12Hr",
                    conformance: "M",
                    xref: { document: "core", section: "11.4.5.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "24Hr",
                    conformance: "M",
                    xref: { document: "core", section: "11.4.5.1", version: "1.1" }
                })
            ]
        })
    ]
}));
