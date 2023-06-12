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
            id: 0x0000, name: "WindowStatus", base: "CommissioningWindowStatusEnum",
            access: "R", conformance: "M"
        }),

        AttributeElement({
            id: 0x0001, name: "AdminFabricIndex", base: "fabric-idx",
            access: "R", conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0002, name: "AdminVendorId", base: "uint16",
            access: "R", conformance: "M", quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "OpenCommissioningWindow",
            access: "R A", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "CommissioningTimeout", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "PakePasscodeVerifier", base: "octstr",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Discriminator", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Iterations", base: "uint32",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Salt", base: "octstr",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "OpenBasicCommissioningWindow",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "CommissioningTimeout", base: "uint16",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "RevokeCommissioning",
            access: "R A", conformance: "M", direction: "request"
        }),

        DatatypeElement({
            name: "StatusCode", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0002, name: "Busy",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "PakeParameterError",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "WindowNotOpen",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "CommissioningWindowStatusEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "WindowNotOpen",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "EnhancedWindowOpen",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "BasicWindowOpen",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
