/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0505, name: "TargetNavigator",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, value: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", value: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "TargetList", base: "list[TargetInfoStruct]",
            access: "R V", conformance: "M", constraint: "", value: "",
            details: "The TargetList attribute SHALL represent a list of targets that can be navigated to within the experience presented to the user by the Endpoint (Video Player or Content App). The list SHALL not contain any entries with the same Identifier in the TargetInfoStruct object.",
            xref: { section: "6.11.3.1", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "CurrentTarget", base: "uint8",
            access: "R V", conformance: "O", constraint: "desc", value: "null", quality: "X",
            details: "The CurrentTarget attribute SHALL represent the Identifier for the target which is currently in foreground on the corresponding Endpoint (Video Player or Content App), or null to indicate that no target is in the foreground.",
            xref: { section: "6.11.3.2", document: "cluster", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "TargetInfoStruct", base: "struct",
            details: "This indicates an object describing the navigable target.",
            xref: { section: "6.11.5.1", document: "cluster", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Identifier", base: "uint8",
                    conformance: "M", value: "",
                    details: "An unique id within the TargetList.",
                    xref: { section: "6.11.5.1.1", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "Name", base: "string",
                    conformance: "M", constraint: "", value: "",
                    details: "A name string for the TargetInfoStruct.",
                    xref: { section: "6.11.5.1.2", document: "cluster", version: "1.1" }
                })
            ]
        })
    ]
}));
