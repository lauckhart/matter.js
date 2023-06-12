/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x050d, name: "ApplicationBasic",
    description: "Application Basic",
    details: "This cluster provides information about an application running on a TV or media player device which is represented as an endpoint.",
    children: [
        AttributeElement({
            id: 0x0000, name: "ApplicationVendorName", base: "string",
            access: "R", conformance: "O", default: ""
        }),

        AttributeElement({
            id: 0x0001, name: "ApplicationVendorId", base: "vendor-id",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0002, name: "ApplicationName", base: "string",
            access: "R", conformance: "M"
        }),

        AttributeElement({
            id: 0x0003, name: "ApplicationProductId", base: "uint16",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0004, name: "ApplicationApp", base: "ApplicationStruct",
            access: "R", conformance: "M"
        }),

        AttributeElement({
            id: 0x0005, name: "ApplicationStatus", base: "ApplicationStatusEnum",
            access: "R", conformance: "M", default: 1
        }),

        AttributeElement({
            id: 0x0006, name: "ApplicationVersion", base: "string",
            access: "R", conformance: "M"
        }),

        AttributeElement({
            id: 0x0007, name: "ApplicationAllowedVendorList", base: "list",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", base: "vendor-id"
                })
            ]
        }),

        DatatypeElement({
            name: "ApplicationStatusEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Stopped",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "ActiveVisibleFocus",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ActiveHidden",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "ActiveVisibleNotFocus",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ApplicationStruct", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "CatalogVendorId", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "ApplicationId", base: "string",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
