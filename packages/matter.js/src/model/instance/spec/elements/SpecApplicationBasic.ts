/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x050d, name: "ApplicationBasic",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "VendorName", base: "string",
            access: "R V", conformance: "O", constraint: "max 32", default: "empty", quality: "F",
            details: "This attribute SHALL specify a human readable (displayable) name of the vendor for the Content App.",
            xref: { section: "6.3.3.1", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "VendorId", base: "vendor-id",
            access: "R V", conformance: "O", default: "", quality: "F",
            details: "This attribute, if present, SHALL specify the Connectivity Standards Alliance assigned Vendor ID for the Content App.",
            xref: { section: "6.3.3.2", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "ApplicationName", base: "string",
            access: "R V", conformance: "M", constraint: "desc", default: "", quality: "F",
            details: "This attribute SHALL specify a human readable (displayable) name of the Content App assigned by the vendor. For example, \"NPR On Demand\". The maximum length of the ApplicationName attribute is 256 bytes of UTF-8 characters.",
            xref: { section: "6.3.3.3", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "ProductId", base: "uint16",
            access: "R V", conformance: "O", default: "", quality: "F",
            details: "This attribute, if present, SHALL specify a numeric ID assigned by the vendor to identify a specific Content App made by them. If the Content App is certified by the Connectivity Standards Alliance, then this would be the Product ID as specified by the vendor for the certification.",
            xref: { section: "6.3.3.4", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0004, name: "Application", base: "ApplicationStruct",
            access: "R V", conformance: "M", constraint: "desc", default: "", quality: "F",
            details: "This attribute SHALL specify a Content App which consists of an Application ID using a specified catalog.",
            xref: { section: "6.3.3.5", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0005, name: "Status", base: "ApplicationStatusEnum",
            access: "R V", conformance: "M", constraint: "desc", default: "ms",
            details: "This attribute SHALL specify the current running status of the application.",
            xref: { section: "6.3.3.6", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0006, name: "ApplicationVersion", base: "string",
            access: "R V", conformance: "M", constraint: "max 32", default: "", quality: "F",
            details: "This attribute SHALL specify a human readable (displayable) version of the Content App assigned by the vendor. The maximum length of the ApplicationVersion attribute is 32 bytes of UTF-8 charac",
            xref: { section: "6.3.3.7", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0007, name: "AllowedVendorList", base: "list[vendor-id]",
            access: "R A", conformance: "M", constraint: "none", default: "", quality: "F",
            details: "This is a list of vendor IDs. Each entry is a vendor-id.",
            xref: { section: "6.3.3.8", document: "cluster", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "ApplicationStruct", base: "struct",
            details: "This indicates a global identifier for an Application given a catalog.",
            xref: { section: "6.3.4.1", document: "cluster", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "CatalogVendorId", base: "uint16",
                    conformance: "M", default: "",
                    details: "This SHALL indicate the Connectivity Standards Alliance issued vendor ID for the catalog. The DIAL registry SHALL use value 0x0000.",
                    xref: { section: "6.3.4.1.1", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "ApplicationId", base: "string",
                    conformance: "M", default: "",
                    details: "This SHALL indicate the application identifier, expressed as a string, such as \"123456-5433\", \"PruneVideo\" or \"Company X\". This field SHALL be unique within a catalog.",
                    xref: { section: "6.3.4.1.2", document: "cluster", version: "1.1" }
                })
            ]
        })
    ]
}));
