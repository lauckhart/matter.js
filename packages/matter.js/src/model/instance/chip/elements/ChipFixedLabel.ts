/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0040, name: "FixedLabel",
    description: "Fixed Label",
    details: "The Fixed Label Cluster provides a feature for the device to tag an endpoint with zero or more read only labels.",
    children: [
        AttributeElement({
            id: 0x0000, name: "LabelList", type: "list",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", type: "LabelStruct"
                })
            ]
        }),

        DatatypeElement({
            name: "LabelStruct", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "Label", type: "string",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Value", type: "string",
                    conformance: "M"
                })
            ]
        })
    ]
}));
