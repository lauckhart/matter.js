/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "FixedLabel", id: 0x40, type: "Label", classification: "endpoint",
    description: "Fixed Label",
    details: "The Fixed Label Cluster provides a feature for the device to tag an endpoint with zero or more read " +
             "only labels",
    xref: { document: "core", section: "9.8" },
    children: [
        {
            tag: "attribute", name: "LabelList", id: 0x0, type: "list", access: "R V", conformance: "M",
            quality: "N",
            xref: { document: "core", section: "9.8.4" },
            children: [
                {
                    tag: "datatype", name: "entry", type: "LabelStruct"
                }
            ]
        },

        {
            tag: "datatype", name: "LabelStruct", type: "struct", conformance: "M",
            children: [
                {
                    tag: "datatype", name: "Label", type: "string", conformance: "M"
                },

                {
                    tag: "datatype", name: "Value", type: "string", conformance: "M"
                }
            ]
        }
    ]
});
