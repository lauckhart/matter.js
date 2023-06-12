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
            conformance: "O", default: ""
        }),

        AttributeElement({
            id: 0x0001, name: "ApplicationVendorId", base: "vendor-id",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0002, name: "ApplicationName", base: "string"
        }),

        AttributeElement({
            id: 0x0003, name: "ApplicationProductId", base: "uint16",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0004, name: "ApplicationApp", base: "ApplicationStruct"
        }),

        AttributeElement({
            id: 0x0005, name: "ApplicationStatus", base: "ApplicationStatusEnum",
            default: 1
        }),

        AttributeElement({
            id: 0x0006, name: "ApplicationVersion", base: "string"
        }),

        AttributeElement({
            id: 0x0007, name: "ApplicationAllowedVendorList", base: "list",
            children: [
                DatatypeElement({
                    name: "entry", base: "vendor-id"
                })
            ]
        }),

        DatatypeElement({
            name: "ApplicationStatusEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Stopped"
                }),

                DatatypeElement({
                    id: 0x0001, name: "ActiveVisibleFocus"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ActiveHidden"
                }),

                DatatypeElement({
                    id: 0x0003, name: "ActiveVisibleNotFocus"
                })
            ]
        }),

        DatatypeElement({
            name: "ApplicationStruct", base: "struct",
            children: [
                DatatypeElement({
                    name: "CatalogVendorId", base: "uint16"
                }),

                DatatypeElement({
                    name: "ApplicationId", base: "string"
                })
            ]
        })
    ]
}));
