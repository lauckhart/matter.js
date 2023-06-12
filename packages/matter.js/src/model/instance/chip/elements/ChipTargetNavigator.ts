/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0505, name: "TargetNavigator",
    description: "Target Navigator",
    details: "This cluster provides an interface for UX navigation within a set of targets on a device or endpoint.",
    children: [
        AttributeElement({
            id: 0x0000, name: "TargetNavigatorList", base: "list",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "TargetInfoStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "TargetNavigatorCurrentTarget", base: "uint8",
            access: "R", conformance: "O", default: 0
        }),

        CommandElement({
            id: 0x0000, name: "NavigateTarget",
            access: "R", conformance: "M", direction: "request", response: "NavigateTargetResponse",
            children: [
                DatatypeElement({
                    name: "Target", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Data", base: "string",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "NavigateTargetResponse",
            access: "R", conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "TargetNavigatorStatusEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Data", base: "string",
                    access: "R", conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "TargetNavigatorStatusEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "TargetNotFound",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "NotAllowed",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "TargetInfoStruct", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "Identifier", base: "uint8",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Name", base: "string",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
