/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x050d, name: "ApplicationBasic",
    description: "Application Basic",
    details: "This cluster provides information about an application running on a TV or media player device which is represented as an endpoint.",
    children: [
        AttributeElement({
            id: 0x0000, name: "applicationVendorName", base: "string",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0001, name: "applicationVendorId", base: "vendorId",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0"
        }),

        AttributeElement({
            id: 0x0002, name: "applicationName", base: "string",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0003, name: "applicationProductId", base: "uint16",
            access: { rw: "R" }, conformance: [ "O" ], value: "0x0"
        }),

        AttributeElement({
            id: 0x0004, name: "applicationApp", base: "ApplicationStruct",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0005, name: "applicationStatus", base: "ApplicationStatusEnum",
            access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
        }),

        AttributeElement({
            id: 0x0006, name: "applicationVersion", base: "string",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0007, name: "applicationAllowedVendorList", base: "list",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        DatatypeElement({
            name: "ApplicationStatusEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "stopped",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "stopped",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "activeVisibleFocus",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "activeVisibleFocus",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "activeHidden",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "activeHidden",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "activeVisibleNotFocus",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "activeVisibleNotFocus",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                })
            ]
        }),

        DatatypeElement({
            name: "ApplicationStruct", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "catalogVendorId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "catalogVendorId", base: "uint16",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "applicationId", base: "string",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "applicationId", base: "string",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        })
    ]
}));
