/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x050d, name: "ApplicationBasic",
    description: "Application Basic",
    details: "This cluster provides information about an application running on a TV or media player device which is represented as an endpoint.",
    children: [
        AttributeElement({
            id: 0x0000, name: "ApplicationVendorName", type: "string",
            conformance: "O", default: ""
        }),

        AttributeElement({
            id: 0x0001, name: "ApplicationVendorId", type: "vendor-id",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0002, name: "ApplicationName", type: "string",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0003, name: "ApplicationProductId", type: "uint16",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0004, name: "ApplicationApp", type: "ApplicationStruct",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0005, name: "ApplicationStatus", type: "ApplicationStatusEnum",
            conformance: "M", default: 1
        }),

        AttributeElement({
            id: 0x0006, name: "ApplicationVersion", type: "string",
            conformance: "M"
        }),

        AttributeElement({
            id: 0x0007, name: "ApplicationAllowedVendorList", type: "list",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "entry", type: "vendor-id"
                })
            ]
        }),

        DatatypeElement({
            name: "ApplicationStatusEnum", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Stopped",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "ActiveVisibleFocus",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "ActiveHidden",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "ActiveVisibleNotFocus",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ApplicationStruct", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "CatalogVendorId", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ApplicationId", type: "string",
                    conformance: "M"
                })
            ]
        })
    ]
}));
