/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../index.js";

Matter.children.push(ClusterElement({
    id: 0x050c, name: "ApplicationLauncher",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "AP",
                    description: "Support for attributes and commands required for endpoint to support launching any application within the supported application catalogs",
                    xref: { section: "6.4.2", document: "cluster", version: "1.1" }
                })
            ]
        }),

        AttributeElement({
            id: 0x0000, name: "CatalogList", base: "list[uint16]",
            access: "R V", conformance: "AP", constraint: "none", default: "", quality: "N",
            details: "This attribute SHALL specify the list of supported application catalogs, where each entry in the list is the CSA-issued vendor ID for the catalog. The DIAL registry (see [DIAL Registry]) SHALL use value 0x0000.",
            xref: { section: "6.4.3.1", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "CurrentApp", base: "ApplicationEPStruct",
            access: "R V", conformance: "O", constraint: "desc", default: "null", quality: "X",
            details: "This attribute SHALL specify the current in-focus application, identified using an Application ID, catalog vendor ID and the corresponding endpoint number when the application is represented by a Content App endpoint. A null SHALL be used to indicate there is no current in-focus application.",
            xref: { section: "6.4.3.2", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0000, name: "LaunchApp",
            access: "O", conformance: "M", direction: "request", response: "LauncherResponse",
            details: "Upon receipt of this command, the server SHALL launch the application with optional data. The application SHALL be either",
            xref: { section: "6.4.4.1", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0001, name: "StopApp",
            access: "O", conformance: "M", direction: "request", response: "LauncherResponse",
            details: "Upon receipt of this command, the server SHALL stop the application if it is running. The application SHALL be either",
            xref: { section: "6.4.4.2", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0002, name: "HideApp",
            access: "O", conformance: "M", direction: "request", response: "LauncherResponse",
            details: "Upon receipt of this command, the server SHALL hide the application. The application SHALL be either",
            xref: { section: "6.4.4.3", document: "cluster", version: "1.1" }
        }),

        CommandElement({
            id: 0x0003, name: "LauncherResponse",
            conformance: "M", direction: "response",
            details: "This command SHALL be generated in response to LaunchApp/StopApp/HideApp commands.",
            xref: { section: "6.4.4.4", document: "cluster", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "StatusEnum", base: "enum8.",
            details: "StatusEnum Data Type is derived from enum8.",
            xref: { section: "6.4.5.1", document: "cluster", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success",
                    conformance: "M", description: "Command succeeded",
                    xref: { section: "6.4.5.1", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "AppNotAvailable",
                    conformance: "M", description: "Requested app is not available.",
                    xref: { section: "6.4.5.1", document: "cluster", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "SystemBusy",
                    conformance: "M", description: "Video platform unable to honor command.",
                    xref: { section: "6.4.5.1", document: "cluster", version: "1.1" }
                })
            ]
        })
    ]
}))
