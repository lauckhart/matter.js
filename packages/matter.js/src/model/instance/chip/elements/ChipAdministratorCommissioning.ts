/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x003c, name: "AdministratorCommissioning",
    description: "Administrator Commissioning",
    details: "Commands to trigger a Node to allow a new Administrator to commission it.",
    children: [
        AttributeElement({
            id: 0x0000, name: "WindowStatus", type: "CommissioningWindowStatusEnum",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0001, name: "AdminFabricIndex", type: "fabric-idx",
            conformance: "M", quality: "X"
        }),

        AttributeElement({
            id: 0x0002, name: "AdminVendorId", type: "uint16",
            conformance: "M", quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "OpenCommissioningWindow",
            access: "R A", conformance: "M", direction: "request",
            children: [
                DatatypeElement({
                    name: "CommissioningTimeout", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "PakePasscodeVerifier", type: "octstr",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Discriminator", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Iterations", type: "uint32",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Salt", type: "octstr",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "OpenBasicCommissioningWindow",
            access: "R A", conformance: "O", direction: "request",
            children: [
                DatatypeElement({
                    name: "CommissioningTimeout", type: "uint16",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "RevokeCommissioning",
            access: "R A", conformance: "M", direction: "request"
        }),

        DatatypeElement({
            name: "StatusCode", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0002, name: "Busy",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "PakeParameterError",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "WindowNotOpen",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "CommissioningWindowStatusEnum", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "WindowNotOpen",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "EnhancedWindowOpen",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "BasicWindowOpen",
                    conformance: "M"
                })
            ]
        })
    ]
}));
