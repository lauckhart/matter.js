/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x003c, name: "AdministratorCommissioning",
    description: "Administrator Commissioning",
    details: "Commands to trigger a Node to allow a new Administrator to commission it.",
    children: [
        AttributeElement({
            id: 0x0000, name: "WindowStatus", base: "CommissioningWindowStatusEnum"
        }),

        AttributeElement({
            id: 0x0001, name: "AdminFabricIndex", base: "fabric-idx",
            quality: "X"
        }),

        AttributeElement({
            id: 0x0002, name: "AdminVendorId", base: "uint16",
            quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "OpenCommissioningWindow",
            access: "R A", direction: "request",
            children: [
                DatatypeElement({
                    name: "CommissioningTimeout", base: "uint16"
                }),

                DatatypeElement({
                    name: "PakePasscodeVerifier", base: "octstr"
                }),

                DatatypeElement({
                    name: "Discriminator", base: "uint16"
                }),

                DatatypeElement({
                    name: "Iterations", base: "uint32"
                }),

                DatatypeElement({
                    name: "Salt", base: "octstr"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "OpenBasicCommissioningWindow",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "CommissioningTimeout", base: "uint16"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "RevokeCommissioning",
            access: "R A", direction: "request"
        }),

        DatatypeElement({
            name: "StatusCode", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0002, name: "Busy"
                }),

                DatatypeElement({
                    id: 0x0003, name: "PakeParameterError"
                }),

                DatatypeElement({
                    id: 0x0004, name: "WindowNotOpen"
                })
            ]
        }),

        DatatypeElement({
            name: "CommissioningWindowStatusEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "WindowNotOpen"
                }),

                DatatypeElement({
                    id: 0x0001, name: "EnhancedWindowOpen"
                }),

                DatatypeElement({
                    id: 0x0002, name: "BasicWindowOpen"
                })
            ]
        })
    ]
}));
