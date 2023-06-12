/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x050c, name: "ApplicationLauncher",
    description: "Application Launcher",
    details: "This cluster provides an interface for launching content on a media player device such as a TV or Speaker.",
    children: [
        AttributeElement({
            id: 0x0000, name: "ApplicationLauncherList", base: "list",
            access: "R", conformance: "O", quality: "P",
            children: [
                DatatypeElement({
                    name: "entry", base: "uint16"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "ApplicationLauncherCurrentApp", base: "ApplicationEpStruct",
            access: "W", conformance: "O", default: undefined, quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "LaunchApp",
            access: "R", conformance: "M", direction: "request", response: "LauncherResponse",
            children: [
                DatatypeElement({
                    name: "Application", base: "ApplicationStruct",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "Data", base: "octstr",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "StopApp",
            access: "R", conformance: "M", direction: "request", response: "LauncherResponse",
            children: [
                DatatypeElement({
                    name: "Application", base: "ApplicationStruct",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "HideApp",
            access: "R", conformance: "M", direction: "request", response: "LauncherResponse",
            children: [
                DatatypeElement({
                    name: "Application", base: "ApplicationStruct",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "LauncherResponse",
            access: "R", conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "ApplicationLauncherStatusEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Data", base: "octstr",
                    access: "R", conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "ApplicationEpStruct", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "Application", base: "ApplicationStruct",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Endpoint", base: "endpoint-no",
                    access: "R", conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "ApplicationStruct", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "CatalogVendorId", base: "uint16",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "ApplicationId", base: "string",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ApplicationLauncherStatusEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "AppNotAvailable",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "SystemBusy",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ApplicationLauncherFeature", base: "map32",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "ApplicationPlatform",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
