/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "ApplicationLauncher", id: 0x50c, classification: "application",
    description: "Application Launcher",
    details: "This cluster provides an interface for launching content on a media player device such as a TV or " +
             "Speaker.",
    xref: { document: "cluster", section: "6.4" },

    children: [
        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",

            children: [
                {
                    tag: "datatype", name: "AP", id: 0x0,
                    description: "Support for attributes and commands required for endpoint to support launching any application within the supported application catalogs",
                    xref: { document: "cluster", section: "6.4.2" }
                }
            ]
        },

        {
            tag: "attribute", name: "CatalogList", id: 0x0, type: "list", access: "R V", conformance: "AP",
            constraint: "None", quality: "N",
            details: "This attribute SHALL specify the list of supported application catalogs, where each entry in the " +
                     "list is the CSA-issued vendor ID for the catalog. The DIAL registry (see [DIAL Registry]) SHALL use " +
                     "value 0x0000.",
            xref: { document: "cluster", section: "6.4.3.1" },
            children: [ { tag: "datatype", name: "entry", type: "uint16" } ]
        },

        {
            tag: "attribute", name: "CurrentApp", id: 0x1, type: "ApplicationEPStruct", access: "RW",
            conformance: "O", constraint: "desc", default: null, quality: "X",
            details: "This attribute SHALL specify the current in-focus application, identified using an Application ID, " +
                     "catalog vendor ID and the corresponding endpoint number when the application is represented by a " +
                     "Content App endpoint. A null SHALL be used to indicate there is no current in-focus application.",
            xref: { document: "cluster", section: "6.4.3.2" }
        },

        {
            tag: "command", name: "LaunchApp", id: 0x0, access: "O", conformance: "M", direction: "request",
            response: "LauncherResponse",
            details: "Upon receipt of this command, the server SHALL launch the application with optional data. The " +
                     "application SHALL be either",
            xref: { document: "cluster", section: "6.4.4.1" },

            children: [
                {
                    tag: "datatype", name: "Application", id: 0x0, type: "ApplicationStruct", conformance: "AP",
                    constraint: "desc",
                    xref: { document: "cluster", section: "6.4.4.1" }
                },
                {
                    tag: "datatype", name: "Data", id: 0x1, type: "octstr", conformance: "O", constraint: "Any",
                    xref: { document: "cluster", section: "6.4.4.1" }
                }
            ]
        },

        {
            tag: "command", name: "StopApp", id: 0x1, access: "O", conformance: "M", direction: "request",
            response: "LauncherResponse",
            details: "Upon receipt of this command, the server SHALL stop the application if it is running. The " +
                     "application SHALL be either",
            xref: { document: "cluster", section: "6.4.4.2" },

            children: [
                {
                    tag: "datatype", name: "Application", id: 0x0, type: "ApplicationStruct", conformance: "AP",
                    constraint: "desc",
                    xref: { document: "cluster", section: "6.4.4.2" }
                }
            ]
        },

        {
            tag: "command", name: "HideApp", id: 0x2, access: "O", conformance: "M", direction: "request",
            response: "LauncherResponse",
            details: "Upon receipt of this command, the server SHALL hide the application. The application SHALL be either",
            xref: { document: "cluster", section: "6.4.4.3" },

            children: [
                {
                    tag: "datatype", name: "Application", id: 0x0, type: "ApplicationStruct", conformance: "AP",
                    constraint: "desc",
                    xref: { document: "cluster", section: "6.4.4.3" }
                }
            ]
        },

        {
            tag: "command", name: "LauncherResponse", id: 0x3, conformance: "M", direction: "response",
            details: "This command SHALL be generated in response to LaunchApp/StopApp/HideApp commands.",
            xref: { document: "cluster", section: "6.4.4.4" },

            children: [
                {
                    tag: "datatype", name: "Status", id: 0x0, type: "StatusEnum", conformance: "M",
                    xref: { document: "cluster", section: "6.4.4.4" }
                },
                {
                    tag: "datatype", name: "Data", id: 0x1, type: "octstr", conformance: "O", constraint: "Any",
                    xref: { document: "cluster", section: "6.4.4.4" }
                }
            ]
        },

        {
            tag: "datatype", name: "StatusEnum", type: "enum8",
            details: "StatusEnum Data Type is derived from enum8.",
            xref: { document: "cluster", section: "6.4.5.1" },

            children: [
                {
                    tag: "datatype", name: "Success", id: 0x0, conformance: "M", description: "Command succeeded",
                    xref: { document: "cluster", section: "6.4.5.1" }
                },
                {
                    tag: "datatype", name: "AppNotAvailable", id: 0x1, conformance: "M",
                    description: "Requested app is not available.",
                    xref: { document: "cluster", section: "6.4.5.1" }
                },
                {
                    tag: "datatype", name: "SystemBusy", id: 0x2, conformance: "M",
                    description: "Video platform unable to honor command.",
                    xref: { document: "cluster", section: "6.4.5.1" }
                }
            ]
        },

        {
            tag: "datatype", name: "ApplicationStruct", type: "struct", conformance: "M",
            details: "This indicates a global identifier for an Application given a catalog.",
            xref: { document: "cluster", section: "6.4.5.2" },

            children: [
                {
                    tag: "datatype", name: "CatalogVendorId", id: 0x0, type: "uint16", conformance: "M",
                    details: "This SHALL indicate the CSA-issued vendor ID for the catalog. The DIAL registry SHALL use value " +
                             "0x0000.",
                    xref: { document: "cluster", section: "6.4.5.2.1" }
                },

                {
                    tag: "datatype", name: "ApplicationId", id: 0x1, type: "string", conformance: "M",
                    details: "This SHALL indicate the application identifier, expressed as a string, such as \"PruneVideo\" or " +
                             "\"Company X\". This field SHALL be unique within a catalog.",
                    xref: { document: "cluster", section: "6.4.5.2.2" }
                }
            ]
        },

        {
            tag: "datatype", name: "ApplicationEPStruct", type: "struct",
            details: "This specifies an app along with its corresponding endpoint.",
            xref: { document: "cluster", section: "6.4.5.3" },

            children: [
                {
                    tag: "datatype", name: "Application", id: 0x0, type: "ApplicationStruct", conformance: "M",
                    xref: { document: "cluster", section: "6.4.5.3" }
                },
                {
                    tag: "datatype", name: "Endpoint", id: 0x1, type: "endpoint-no", conformance: "O",
                    xref: { document: "cluster", section: "6.4.5.3" }
                }
            ]
        },

        {
            tag: "datatype", name: "ApplicationEpStruct", type: "struct", conformance: "M",
            children: [
                { tag: "datatype", name: "Application", type: "ApplicationStruct", conformance: "M" },
                { tag: "datatype", name: "Endpoint", type: "endpoint-no", conformance: "O" }
            ]
        },

        {
            tag: "datatype", name: "ApplicationLauncherStatusEnum", type: "enum8", conformance: "M",
            children: [
                { tag: "datatype", name: "Success", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "AppNotAvailable", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "SystemBusy", id: 0x2, conformance: "M" }
            ]
        }
    ]
});