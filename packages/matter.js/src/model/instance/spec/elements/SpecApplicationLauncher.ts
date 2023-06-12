/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x050c, name: "ApplicationLauncher",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: "min 1", default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "AP",
                    description: "Support for attributes and commands required for endpoint to support launching any application within the supported application catalogs",
                    xref: { document: "cluster", section: "6.4.2", version: "1.1" }
                })
            ]
        }),

        AttributeElement({
            id: 0x0000, name: "CatalogList", base: "list",
            access: "R V", conformance: "AP", constraint: "None", quality: "N",
            details: "This attribute SHALL specify the list of supported application catalogs, where each entry in the list is the CSA-issued vendor ID for the catalog. The DIAL registry (see [DIAL Registry]) SHALL use value 0x0000.",
            xref: { document: "cluster", section: "6.4.3.1", version: "1.1" },
            children: [
                DatatypeElement({
                    name: "entry", base: "uint16"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "CurrentApp", base: "ApplicationEPStruct",
            access: "R V", conformance: "O", constraint: "desc", quality: "X",
            details: "This attribute SHALL specify the current in-focus application, identified using an Application ID, catalog vendor ID and the corresponding endpoint number when the application is represented by a Content App endpoint. A null SHALL be used to indicate there is no current in-focus application.",
            xref: { document: "cluster", section: "6.4.3.2", version: "1.1" }
        }),

        CommandElement({
            id: 0x0000, name: "LaunchApp",
            access: "O", conformance: "M", direction: "request", response: "LauncherResponse",
            details: "Upon receipt of this command, the server SHALL launch the application with optional data. The application SHALL be either",
            xref: { document: "cluster", section: "6.4.4.1", version: "1.1" }
        }),

        CommandElement({
            id: 0x0001, name: "StopApp",
            access: "O", conformance: "M", direction: "request", response: "LauncherResponse",
            details: "Upon receipt of this command, the server SHALL stop the application if it is running. The application SHALL be either",
            xref: { document: "cluster", section: "6.4.4.2", version: "1.1" }
        }),

        CommandElement({
            id: 0x0002, name: "HideApp",
            access: "O", conformance: "M", direction: "request", response: "LauncherResponse",
            details: "Upon receipt of this command, the server SHALL hide the application. The application SHALL be either",
            xref: { document: "cluster", section: "6.4.4.3", version: "1.1" }
        }),

        CommandElement({
            id: 0x0003, name: "LauncherResponse",
            conformance: "M", direction: "response",
            details: "This command SHALL be generated in response to LaunchApp/StopApp/HideApp commands.",
            xref: { document: "cluster", section: "6.4.4.4", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "StatusEnum", base: "enum8",
            details: "StatusEnum Data Type is derived from enum8.",
            xref: { document: "cluster", section: "6.4.5.1", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success",
                    conformance: "M", description: "Command succeeded",
                    xref: { document: "cluster", section: "6.4.5.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "AppNotAvailable",
                    conformance: "M", description: "Requested app is not available.",
                    xref: { document: "cluster", section: "6.4.5.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "SystemBusy",
                    conformance: "M", description: "Video platform unable to honor command.",
                    xref: { document: "cluster", section: "6.4.5.1", version: "1.1" }
                })
            ]
        })
    ]
}));
