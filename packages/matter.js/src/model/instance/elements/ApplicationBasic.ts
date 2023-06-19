/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x050d, name: "ApplicationBasic",
    classification: "application", description: "Application Basic",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "VendorName",
            access: "R V", conformance: "O", constraint: "max 32", default: "empty", quality: "F", type: "string",
            details: "This attribute SHALL specify a human readable (displayable) name of " +
                     "the vendor for the Content App",
            xref: { document: "cluster", section: "6.3.3.1" }
        },

        {
            tag: "attribute", id: 0x0001, name: "VendorId",
            access: "R V", conformance: "O", default: undefined, quality: "F", type: "vendor-id",
            details: "This attribute, if present, SHALL specify the Connectivity Standards " +
                     "Alliance assigned Vendor ID for the Content App",
            xref: { document: "cluster", section: "6.3.3.2" }
        },

        {
            tag: "attribute", id: 0x0002, name: "ApplicationName",
            access: "R V", conformance: "M", constraint: "desc", default: "", quality: "F", type: "string",
            details: "This attribute SHALL specify a human readable (displayable) name of " +
                     "the Content App assigned by the vendor. For example, \"NPR On Demand\". " +
                     "The maximum length of the ApplicationName attribute is 256 bytes of " +
                     "UTF-8 characters",
            xref: { document: "cluster", section: "6.3.3.3" }
        },

        {
            tag: "attribute", id: 0x0003, name: "ProductId",
            access: "R V", conformance: "O", default: undefined, quality: "F", type: "uint16",
            details: "This attribute, if present, SHALL specify a numeric ID assigned by the" +
                     " vendor to identify a specific Content App made by them. If the " +
                     "Content App is certified by the Connectivity Standards Alliance, then " +
                     "this would be the Product ID as specified by the vendor for the " +
                     "certification",
            xref: { document: "cluster", section: "6.3.3.4" }
        },

        {
            tag: "attribute", id: 0x0004, name: "Application",
            access: "R V", conformance: "M", constraint: "desc", default: undefined, quality: "F", type: "ApplicationStruct",
            details: "This attribute SHALL specify a Content App which consists of an " +
                     "Application ID using a specified catalog",
            xref: { document: "cluster", section: "6.3.3.5" }
        },

        {
            tag: "attribute", id: 0x0005, name: "Status",
            access: "R V", conformance: "M", constraint: "desc", default: 1, type: "ApplicationStatusEnum",
            details: "This attribute SHALL specify the current running status of the " +
                     "application",
            xref: { document: "cluster", section: "6.3.3.6" }
        },

        {
            tag: "attribute", id: 0x0006, name: "ApplicationVersion",
            access: "R V", conformance: "M", constraint: "max 32", default: "", quality: "F", type: "string",
            details: "This attribute SHALL specify a human readable (displayable) version of" +
                     " the Content App assigned by the vendor. The maximum length of the " +
                     "ApplicationVersion attribute is 32 bytes of UTF-8 charac",
            xref: { document: "cluster", section: "6.3.3.7" }
        },

        {
            tag: "attribute", id: 0x0007, name: "AllowedVendorList",
            access: "R A", conformance: "M", constraint: "None", default: undefined, quality: "F", type: "list",
            details: "This is a list of vendor IDs. Each entry is a vendor-id",
            xref: { document: "cluster", section: "6.3.3.8" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "vendor-id"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0000, name: "ApplicationVendorName",
            conformance: "O", default: "", type: "string"
        },

        {
            tag: "datatype", name: "ApplicationStruct",
            conformance: "M", type: "struct",
            details: "This indicates a global identifier for an Application given a catalog",
            xref: { document: "cluster", section: "6.3.4.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "CatalogVendorId",
                    conformance: "M", default: undefined, type: "uint16",
                    details: "This SHALL indicate the Connectivity Standards Alliance issued vendor " +
                             "ID for the catalog. The DIAL registry SHALL use value 0x0000",
                    xref: { document: "cluster", section: "6.3.4.1.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "ApplicationId",
                    conformance: "M", default: "", type: "string",
                    details: "This SHALL indicate the application identifier, expressed as a string" +
                             ", such as \"123456-5433\", \"PruneVideo\" or \"Company X\". This field SHALL" +
                             " be unique within a catalog",
                    xref: { document: "cluster", section: "6.3.4.1.2" }
                },

                {
                    tag: "datatype", id: 0x0000, name: "Stopped",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "ActiveHidden",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "ActiveVisibleNotFocus",
                    conformance: "M"
                }
            ]
        }
    ]
});
