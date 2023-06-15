/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0505, name: "TargetNavigator",
    description: "Target Navigator",
    details: "This cluster provides an interface for UX navigation within a set of targets on a device or endpoint.",
    children: [
        AttributeElement({
            id: 0x0000, name: "TargetNavigatorList", base: "list",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "TargetInfoStruct"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "TargetNavigatorCurrentTarget", base: "uint8",
            conformance: "O", default: 0
        }),

        CommandElement({
            id: 0x0000, name: "NavigateTarget",
            conformance: "M", direction: "request", response: "NavigateTargetResponse",
            children: [
                DatatypeElement({
                    name: "Target", base: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Data", base: "string",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "NavigateTargetResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "TargetNavigatorStatusEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Data", base: "string",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "TargetNavigatorStatusEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "TargetNotFound",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "NotAllowed",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "TargetInfoStruct", base: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "Identifier", base: "uint8",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Name", base: "string",
                    conformance: "M"
                })
            ]
        })
    ]
}));
