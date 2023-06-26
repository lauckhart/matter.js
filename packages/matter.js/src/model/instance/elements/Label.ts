/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "Label", classification: "endpoint",
    xref: { document: "core", section: "9.7" },

    children: [
        {
            tag: "attribute", name: "LabelList", id: 0x0, type: "list", conformance: "M", constraint: "Derived",
            quality: "I",
            details: "This is a list of string tuples. Each entry is a LabelStruct.",
            xref: { document: "core", section: "9.7.5.1" },
            children: [ { tag: "datatype", name: "entry", type: "LabelStruct" } ]
        },

        {
            tag: "datatype", name: "LabelStruct", type: "struct",
            details: "This is a string tuple with strings that are user defined.",
            xref: { document: "core", section: "9.7.4.1" },

            children: [
                {
                    tag: "datatype", name: "Label", id: 0x0, type: "string", conformance: "M", constraint: "max 16",
                    default: "empty",
                    xref: { document: "core", section: "9.7.4.1" }
                },
                {
                    tag: "datatype", name: "Value", id: 0x1, type: "string", conformance: "M", constraint: "max 16",
                    default: "empty",
                    xref: { document: "core", section: "9.7.4.1" }
                }
            ]
        }
    ]
});