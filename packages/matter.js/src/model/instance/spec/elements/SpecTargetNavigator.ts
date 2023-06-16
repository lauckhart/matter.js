/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../SpecMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../elements/index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0505, name: "TargetNavigator",
    classification: "application",
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
            id: 0x0000, name: "TargetList", base: "list",
            access: "R V", conformance: "M", default: "",
            details: "The TargetList attribute SHALL represent a list of targets that can be" +
                     " navigated to within the experience presented to the user by the " +
                     "Endpoint (Video Player or Content App). The list SHALL not contain any" +
                     " entries with the same Identifier in the TargetInfoStruct object",
            xref: { document: "cluster", section: "6.11.3.1", version: "1.1" },
            children: [
                DatatypeElement({
                    name: "entry", base: "TargetInfoStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "CurrentTarget", base: "uint8",
            access: "R V", conformance: "O", constraint: "desc", default: "null", quality: "X",
            details: "The CurrentTarget attribute SHALL represent the Identifier for the " +
                     "target which is currently in foreground on the corresponding Endpoint" +
                     " (Video Player or Content App), or null to indicate that no target is " +
                     "in the foreground",
            xref: { document: "cluster", section: "6.11.3.2", version: "1.1" }
        }),

        CommandElement({
            id: 0x0000, name: "NavigateTarget",
            access: "O", conformance: "M", direction: "request", response: "NavigateTargetResponse",
            details: "Upon receipt, this SHALL navigation the UX to the target identified",
            xref: { document: "cluster", section: "6.11.4.1", version: "1.1" }
        }),

        CommandElement({
            id: 0x0001, name: "NavigateTargetResponse",
            conformance: "M", direction: "response",
            details: "This command SHALL be generated in response to NavigateTarget command",
            xref: { document: "cluster", section: "6.11.4.2", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "TargetInfoStruct", base: "struct",
            details: "This indicates an object describing the navigable target",
            xref: { document: "cluster", section: "6.11.5.1", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Identifier", base: "uint8",
                    conformance: "M", default: 0,
                    details: "An unique id within the TargetList",
                    xref: { document: "cluster", section: "6.11.5.1.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "Name", base: "string",
                    conformance: "M", default: "",
                    details: "A name string for the TargetInfoStruct",
                    xref: { document: "cluster", section: "6.11.5.1.2", version: "1.1" }
                })
            ]
        })
    ]
}));
