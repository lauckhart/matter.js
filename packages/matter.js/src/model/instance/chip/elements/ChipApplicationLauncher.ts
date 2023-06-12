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
            conformance: "O", quality: "P",
            children: [
                DatatypeElement({
                    name: "entry", base: "uint16"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "ApplicationLauncherCurrentApp", base: "ApplicationEpStruct",
            access: "RW", conformance: "O", default: undefined, quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "LaunchApp",
            direction: "request", response: "LauncherResponse",
            children: [
                DatatypeElement({
                    name: "Application", base: "ApplicationStruct",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "Data", base: "octstr",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "StopApp",
            direction: "request", response: "LauncherResponse",
            children: [
                DatatypeElement({
                    name: "Application", base: "ApplicationStruct",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "HideApp",
            direction: "request", response: "LauncherResponse",
            children: [
                DatatypeElement({
                    name: "Application", base: "ApplicationStruct",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "LauncherResponse",
            direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "ApplicationLauncherStatusEnum"
                }),

                DatatypeElement({
                    name: "Data", base: "octstr",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "ApplicationEpStruct", base: "struct",
            children: [
                DatatypeElement({
                    name: "Application", base: "ApplicationStruct"
                }),

                DatatypeElement({
                    name: "Endpoint", base: "endpoint-no",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "ApplicationStruct", base: "struct",
            children: [
                DatatypeElement({
                    name: "CatalogVendorId", base: "uint16"
                }),

                DatatypeElement({
                    name: "ApplicationId", base: "string"
                })
            ]
        }),

        DatatypeElement({
            name: "ApplicationLauncherStatusEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success"
                }),

                DatatypeElement({
                    id: 0x0001, name: "AppNotAvailable"
                }),

                DatatypeElement({
                    id: 0x0002, name: "SystemBusy"
                })
            ]
        }),

        DatatypeElement({
            name: "ApplicationLauncherFeature", base: "map32",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "ApplicationPlatform"
                })
            ]
        })
    ]
}));
