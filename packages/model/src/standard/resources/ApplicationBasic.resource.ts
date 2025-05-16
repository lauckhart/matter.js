/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    tag: "cluster", name: "ApplicationBasic",
    classification: "application", pics: "APBSC",

    details: "This cluster provides information about a Content App running on a Video Player device which is " +
        "represented as an endpoint (see Device Type Library document)." +
        "\n" +
        "The cluster server for this cluster should be supported on each endpoint that represents a Content " +
        "App on a Video Player device. This cluster provides identification information about the Content App " +
        "such as vendor and product.",

    xref: "cluster§6.3",

    children: [
        {
            tag: "attribute", name: "VendorName",
            details: "This attribute shall specify a human readable (displayable) name of the vendor for the Content App.",
            xref: "cluster§6.3.5.1"
        },

        {
            tag: "attribute", name: "VendorId",
            details: "This attribute, if present, shall specify the Connectivity Standards Alliance assigned Vendor ID for " +
                "the Content App.",
            xref: "cluster§6.3.5.2"
        },

        {
            tag: "attribute", name: "ApplicationName",
            details: "This attribute shall specify a human readable (displayable) name of the Content App assigned by the " +
                "vendor. For example, \"NPR On Demand\". The maximum length of the ApplicationName attribute is 256 " +
                "bytes of UTF-8 characters.",
            xref: "cluster§6.3.5.3"
        },

        {
            tag: "attribute", name: "ProductId",
            details: "This attribute, if present, shall specify a numeric ID assigned by the vendor to identify a specific " +
                "Content App made by them. If the Content App is certified by the Connectivity Standards Alliance, " +
                "then this would be the Product ID as specified by the vendor for the certification.",
            xref: "cluster§6.3.5.4"
        },

        {
            tag: "attribute", name: "Application",
            details: "This attribute shall specify a Content App which consists of an Application ID using a specified " +
                "catalog.",
            xref: "cluster§6.3.5.5"
        },

        {
            tag: "attribute", name: "Status",
            details: "This attribute shall specify the current running status of the application.",
            xref: "cluster§6.3.5.6"
        },

        {
            tag: "attribute", name: "ApplicationVersion",
            details: "This attribute shall specify a human readable (displayable) version of the Content App assigned by " +
                "the vendor. The maximum length of the ApplicationVersion attribute is 32 bytes of UTF-8 characters.",
            xref: "cluster§6.3.5.7"
        },

        {
            tag: "attribute", name: "AllowedVendorList",
            details: "This attribute is a list of vendor IDs. Each entry is a vendor-id.",
            xref: "cluster§6.3.5.8"
        },

        {
            tag: "datatype", name: "ApplicationStatusEnum",
            xref: "cluster§6.3.4.1",

            children: [
                { tag: "field", name: "Stopped", description: "Application is not running." },
                {
                    tag: "field", name: "ActiveVisibleFocus",
                    description: "Application is running, is visible to the user, and is the active target for input."
                },
                {
                    tag: "field", name: "ActiveHidden",
                    description: "Application is running but not visible to the user."
                },
                {
                    tag: "field", name: "ActiveVisibleNotFocus",
                    description: "Application is running and visible, but is not the active target for input."
                }
            ]
        },

        {
            tag: "datatype", name: "ApplicationStruct",
            details: "This indicates a global identifier for an Application given a catalog.",
            xref: "cluster§6.3.4.2",

            children: [
                {
                    tag: "field", name: "CatalogVendorId",

                    details: "This field shall indicate the Connectivity Standards Alliance issued vendor ID for the catalog. The " +
                        "DIAL registry shall use value 0x0000." +
                        "\n" +
                        "It is assumed that Content App Platform providers (see Video Player Architecture section in " +
                        "[MatterDevLib]) will have their own catalog vendor ID (set to their own Vendor ID) and will assign " +
                        "an ApplicationID to each Content App.",

                    xref: "cluster§6.3.4.2.1"
                },

                {
                    tag: "field", name: "ApplicationId",
                    details: "This field shall indicate the application identifier, expressed as a string, such as \"123456-5433\", " +
                        "\"PruneVideo\" or \"Company X\". This field shall be unique within a catalog." +
                        "\n" +
                        "For the DIAL registry catalog, this value shall be the DIAL prefix.",
                    xref: "cluster§6.3.4.2.2"
                }
            ]
        }
    ]
});
