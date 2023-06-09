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
            id: 0x0000, name: "WindowStatus", base: "WindowStatus",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0001, name: "AdminFabricIndex", base: "AdminFabricIndex",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0002, name: "AdminVendorId", base: "AdminVendorId",
            access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
        }),

        CommandElement({
            id: 0x0000, name: "OpenCommissioningWindow", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "M" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "CommissioningTimeout", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "CommissioningTimeout", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "PakePasscodeVerifier", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "PakePasscodeVerifier", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Discriminator", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Discriminator", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Iterations", base: "INT32U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Iterations", base: "INT32U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Salt", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Salt", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "OpenBasicCommissioningWindow", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "O" ], direction: "request",
            children: [
                DatatypeElement({
                    name: "CommissioningTimeout", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "CommissioningTimeout", base: "INT16U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "RevokeCommissioning", base: "struct",
            access: { rw: "R", writePrivilege: "A" }, conformance: [ "M" ], direction: "request"
        })
    ]
}));
