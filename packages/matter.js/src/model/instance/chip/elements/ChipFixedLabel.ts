/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0040, name: "FixedLabel",
    description: "Fixed Label",
    details: "The Fixed Label Cluster provides a feature for the device to tag an endpoint with zero or more read only labels.",
    children: [
        AttributeElement({
            id: 0x0000, name: "labelList", base: "list",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        DatatypeElement({
            name: "LabelStruct", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "label", base: "string",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "label", base: "string",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "value", base: "string",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "value", base: "string",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}));
