/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x050c, name: "ApplicationLauncher",
    classification: "application", description: "Application Launcher",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "CatalogList",
            access: "R V", conformance: "AP", constraint: "None", default: "", quality: "N", type: "list",
            details: "This attribute SHALL specify the list of supported application " +
                     "catalogs, where each entry in the list is the CSA-issued vendor ID for" +
                     " the catalog. The DIAL registry (see [DIAL Registry]) SHALL use value " +
                     "0x0000",
            xref: { document: "cluster", section: "6.4.3.1" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "uint16"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0001, name: "ApplicationLauncherCurrentApp",
            access: "RW", conformance: "O", constraint: "desc", default: undefined, quality: "X", type: "ApplicationEpStruct",
            details: "This attribute SHALL specify the current in-focus application, " +
                     "identified using an Application ID, catalog vendor ID and the " +
                     "corresponding endpoint number when the application is represented by a" +
                     " Content App endpoint. A null SHALL be used to indicate there is no " +
                     "current in-focus application",
            xref: { document: "cluster", section: "6.4.3.2" }
        },

        {
            tag: "attribute", id: 0x0000, name: "ApplicationLauncherList",
            conformance: "O", quality: "P", type: "list",
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "uint16"
                }
            ]
        },

        {
            tag: "command", id: 0x0000, name: "LaunchApp",
            access: "O", conformance: "M", direction: "request", response: "LauncherResponse",
            details: "Upon receipt of this command, the server SHALL launch the application " +
                     "with optional data. The application SHALL be either",
            xref: { document: "cluster", section: "6.4.4.1" },
            children: [
                {
                    tag: "datatype", name: "Application",
                    conformance: "O", type: "ApplicationStruct"
                },

                {
                    tag: "datatype", name: "Data",
                    conformance: "O", type: "octstr"
                }
            ]
        },

        {
            tag: "command", id: 0x0001, name: "StopApp",
            access: "O", conformance: "M", direction: "request", response: "LauncherResponse",
            details: "Upon receipt of this command, the server SHALL stop the application if" +
                     " it is running. The application SHALL be either",
            xref: { document: "cluster", section: "6.4.4.2" },
            children: [
                {
                    tag: "datatype", name: "Application",
                    conformance: "O", type: "ApplicationStruct"
                }
            ]
        },

        {
            tag: "command", id: 0x0002, name: "HideApp",
            access: "O", conformance: "M", direction: "request", response: "LauncherResponse",
            details: "Upon receipt of this command, the server SHALL hide the application. " +
                     "The application SHALL be either",
            xref: { document: "cluster", section: "6.4.4.3" },
            children: [
                {
                    tag: "datatype", name: "Application",
                    conformance: "O", type: "ApplicationStruct"
                }
            ]
        },

        {
            tag: "command", id: 0x0003, name: "LauncherResponse",
            conformance: "M", direction: "response",
            details: "This command SHALL be generated in response to LaunchApp/StopApp/" +
                     "HideApp commands",
            xref: { document: "cluster", section: "6.4.4.4" },
            children: [
                {
                    tag: "datatype", name: "Status",
                    conformance: "M", type: "ApplicationLauncherStatusEnum"
                },

                {
                    tag: "datatype", name: "Data",
                    conformance: "O", type: "octstr"
                }
            ]
        },

        {
            tag: "datatype", name: "ApplicationLauncherFeature",
            conformance: "M", type: "map32",
            details: "StatusEnum Data Type is derived from enum8",
            xref: { document: "cluster", section: "6.4.5.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Success",
                    conformance: "M", description: "Command succeeded",
                    xref: { document: "cluster", section: "6.4.5.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "ApplicationPlatform",
                    conformance: "M", description: "Requested app is not available.",
                    xref: { document: "cluster", section: "6.4.5.1" }
                },

                {
                    tag: "datatype", id: 0x0002, name: "SystemBusy",
                    conformance: "M", description: "Video platform unable to honor command.",
                    xref: { document: "cluster", section: "6.4.5.1" }
                }
            ]
        },

        {
            tag: "datatype", name: "ApplicationEpStruct",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "Application",
                    conformance: "M", type: "ApplicationStruct"
                },

                {
                    tag: "datatype", name: "Endpoint",
                    conformance: "O", type: "endpoint-no"
                }
            ]
        },

        {
            tag: "datatype", name: "ApplicationStruct",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "CatalogVendorId",
                    conformance: "M", type: "uint16"
                },

                {
                    tag: "datatype", name: "ApplicationId",
                    conformance: "M", type: "string"
                }
            ]
        },

        {
            tag: "datatype", name: "ApplicationLauncherStatusEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Success",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "AppNotAvailable",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "SystemBusy",
                    conformance: "M"
                }
            ]
        }
    ]
});
