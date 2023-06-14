/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x002e, name: "PowerSourceConfiguration",
    classification: "endpoint",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: "min 1", default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "Sources", base: "list",
            access: "R V", conformance: "M", constraint: "max 6", default: "", quality: "N",
            details: "This list SHALL contain the set of all power sources capable of participating in the power system of this Node. Each entry in the list SHALL be the endpoint number of an endpoint having a Power Source cluster, which corresponds to a physical power source. The endpoint number SHALL be unique within the list.",
            xref: { document: "core", section: "11.6.4.1", version: "1.1" },
            children: [
                DatatypeElement({
                    name: "entry", base: "endpoint-no"
                })
            ]
        })
    ]
}));
