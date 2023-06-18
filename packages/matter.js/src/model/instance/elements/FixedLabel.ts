/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x0040, name: "FixedLabel",
    classification: "endpoint", description: "Fixed Label",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "LabelList",
            access: "R V", conformance: "M", default: "empty", quality: "N", type: "list",
            xref: { document: "core", section: "9.8.4" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "LabelStruct"
                }
            ]
        },

        {
            tag: "datatype", name: "LabelStruct",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "Label",
                    conformance: "M", type: "string"
                },

                {
                    tag: "datatype", name: "Value",
                    conformance: "M", type: "string"
                }
            ]
        }
    ]
});
