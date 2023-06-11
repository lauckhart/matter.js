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
            id: 0x0000, name: "windowStatus", base: "CommissioningWindowStatusEnum",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0001, name: "adminFabricIndex", base: "fabricIdx",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0002, name: "adminVendorId", base: "uint16",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        CommandElement({
            id: 0x0000, name: "OpenCommissioningWindow",
            access: { rw: "R", writePriv: "A" }, conformance: [ "M" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "commissioningTimeout", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "commissioningTimeout", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "pakePasscodeVerifier", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "pakePasscodeVerifier", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "discriminator", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "discriminator", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "iterations", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "iterations", base: "uint32",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "salt", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "salt", base: "octstr",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "OpenBasicCommissioningWindow",
            access: { rw: "R", writePriv: "A" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "commissioningTimeout", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "commissioningTimeout", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "RevokeCommissioning",
            access: { rw: "R", writePriv: "A" }, conformance: [ "M" ], direction: "request"
        }),

        DatatypeElement({
            name: "StatusCode", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "busy",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "busy",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "pakeParameterError",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "pakeParameterError",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "windowNotOpen",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "windowNotOpen",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                })
            ]
        }),

        DatatypeElement({
            name: "CommissioningWindowStatusEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "windowNotOpen",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "windowNotOpen",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "enhancedWindowOpen",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "enhancedWindowOpen",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "basicWindowOpen",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "basicWindowOpen",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                })
            ]
        })
    ]
}));
