/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x003c, name: "AdministratorCommissioning",
    description: "Administrator Commissioning",
    details: "Commands to trigger a Node to allow a new Administrator to commission it.",
    children: [
        AttributeElement({
            id: 0x0000, name: "WindowStatus", base: "CommissioningWindowStatusEnum",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0001, name: "AdminFabricIndex", base: "fabricIdx",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0002, name: "AdminVendorId", base: "uint16",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        CommandElement({
            id: 0x0000, name: "OpenCommissioningWindow", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "M" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "CommissioningTimeout", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "CommissioningTimeout", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "PakePasscodeVerifier", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "PakePasscodeVerifier", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Discriminator", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Discriminator", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Iterations", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Iterations", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Salt", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Salt", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "OpenBasicCommissioningWindow", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "CommissioningTimeout", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "CommissioningTimeout", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "RevokeCommissioning", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "M" ], direction: "request"
        }),

        DatatypeElement({
            name: "StatusCode", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "Busy", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Busy", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "PakeParameterError", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "PakeParameterError", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "WindowNotOpen", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "WindowNotOpen", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "CommissioningWindowStatusEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "WindowNotOpen", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "WindowNotOpen", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "EnhancedWindowOpen", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "EnhancedWindowOpen", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "BasicWindowOpen", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "BasicWindowOpen", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}));
