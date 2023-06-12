/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x050d, name: "ApplicationBasic",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: "min 1", default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "VendorName", base: "string",
            access: "R V", conformance: "O", constraint: "max 32", quality: "F",
            details: "This attribute SHALL specify a human readable (displayable) name of the vendor for the Content App.",
            xref: { document: "cluster", section: "6.3.3.1", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "VendorId", base: "vendor-id",
            access: "R V", conformance: "O", quality: "F",
            details: "This attribute, if present, SHALL specify the Connectivity Standards Alliance assigned Vendor ID for the Content App.",
            xref: { document: "cluster", section: "6.3.3.2", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "ApplicationName", base: "string",
            access: "R V", conformance: "M", constraint: "desc", quality: "F",
            details: "This attribute SHALL specify a human readable (displayable) name of the Content App assigned by the vendor. For example, \"NPR On Demand\". The maximum length of the ApplicationName attribute is 256 bytes of UTF-8 characters.",
            xref: { document: "cluster", section: "6.3.3.3", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "ProductId", base: "uint16",
            access: "R V", conformance: "O", quality: "F",
            details: "This attribute, if present, SHALL specify a numeric ID assigned by the vendor to identify a specific Content App made by them. If the Content App is certified by the Connectivity Standards Alliance, then this would be the Product ID as specified by the vendor for the certification.",
            xref: { document: "cluster", section: "6.3.3.4", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0004, name: "Application", base: "ApplicationStruct",
            access: "R V", conformance: "M", constraint: "desc", quality: "F",
            details: "This attribute SHALL specify a Content App which consists of an Application ID using a specified catalog.",
            xref: { document: "cluster", section: "6.3.3.5", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0005, name: "Status", base: "ApplicationStatusEnum",
            access: "R V", conformance: "M", constraint: "desc",
            details: "This attribute SHALL specify the current running status of the application.",
            xref: { document: "cluster", section: "6.3.3.6", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0006, name: "ApplicationVersion", base: "string",
            access: "R V", conformance: "M", constraint: "max 32", quality: "F",
            details: "This attribute SHALL specify a human readable (displayable) version of the Content App assigned by the vendor. The maximum length of the ApplicationVersion attribute is 32 bytes of UTF-8 charac",
            xref: { document: "cluster", section: "6.3.3.7", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0007, name: "AllowedVendorList", base: "list",
            access: "R A", conformance: "M", constraint: "None", quality: "F",
            details: "This is a list of vendor IDs. Each entry is a vendor-id.",
            xref: { document: "cluster", section: "6.3.3.8", version: "1.1" },
            children: [
                DatatypeElement({
                    name: "entry", base: "vendor-id"
                })
            ]
        }),

        DatatypeElement({
            id: -1, name: "ApplicationStruct", base: "struct",
            details: "This indicates a global identifier for an Application given a catalog.",
            xref: { document: "cluster", section: "6.3.4.1", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "CatalogVendorId", base: "uint16",
                    conformance: "M",
                    details: "This SHALL indicate the Connectivity Standards Alliance issued vendor ID for the catalog. The DIAL registry SHALL use value 0x0000.",
                    xref: { document: "cluster", section: "6.3.4.1.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "ApplicationId", base: "string",
                    conformance: "M",
                    details: "This SHALL indicate the application identifier, expressed as a string, such as \"123456-5433\", \"PruneVideo\" or \"Company X\". This field SHALL be unique within a catalog.",
                    xref: { document: "cluster", section: "6.3.4.1.2", version: "1.1" }
                })
            ]
        })
    ]
}));
