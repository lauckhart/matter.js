/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x002c, name: "TimeFormatLocalization",
    description: "Time Format Localization",
    details: "Nodes should be expected to be deployed to any and all regions of the world. These global regions may have differing preferences for how dates and times are conveyed. As such, Nodes that visually or audibly convey time information need a mechanism by which they can be configured to use a user’s preferred format.",
    children: [
        AttributeElement({
            id: 0x0000, name: "HourFormat", base: "HourFormatEnum",
            access: "RW"
        }),

        AttributeElement({
            id: 0x0001, name: "ActiveCalendarType", base: "CalendarTypeEnum",
            access: "RW", conformance: "O"
        }),

        AttributeElement({
            id: 0x0002, name: "SupportedCalendarTypes", base: "list",
            conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", base: "CalendarTypeEnum"
                })
            ]
        }),

        DatatypeElement({
            name: "HourFormatEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "12Hr"
                }),

                DatatypeElement({
                    id: 0x0001, name: "24Hr"
                })
            ]
        }),

        DatatypeElement({
            name: "CalendarTypeEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Buddhist"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Chinese"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Coptic"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Ethiopian"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Gregorian"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Hebrew"
                }),

                DatatypeElement({
                    id: 0x0006, name: "Indian"
                }),

                DatatypeElement({
                    id: 0x0007, name: "Islamic"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Japanese"
                }),

                DatatypeElement({
                    id: 0x0009, name: "Korean"
                }),

                DatatypeElement({
                    id: 0x000a, name: "Persian"
                }),

                DatatypeElement({
                    id: 0x000b, name: "Taiwanese"
                })
            ]
        })
    ]
}));
