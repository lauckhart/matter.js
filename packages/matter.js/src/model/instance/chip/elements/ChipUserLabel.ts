/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0041, name: "UserLabel",
    description: "User Label",
    details: "The User Label Cluster provides a feature to tag an endpoint with zero or more labels.",
    children: [
        AttributeElement({
            id: 0x0000, name: "LabelList", base: "list",
            access: "W VM", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "LabelStruct"
                })
            ]
        }),

        DatatypeElement({
            name: "LabelStruct", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "Label", base: "string",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Value", base: "string",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
