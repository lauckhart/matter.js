/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x050c, name: "ApplicationLauncher",
    description: "Application Launcher",
    details: "This cluster provides an interface for launching content on a media player device such as a TV or Speaker.",
    children: [
        AttributeElement({
            id: 0x0000, name: "ApplicationLauncherList", type: "list",
            conformance: "O", quality: "P",
            children: [
                DatatypeElement({
                    name: "entry", type: "uint16"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "ApplicationLauncherCurrentApp", type: "ApplicationEpStruct",
            access: "RW", conformance: "O", default: undefined, quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "LaunchApp",
            conformance: "M", direction: "request", response: "LauncherResponse",
            children: [
                DatatypeElement({
                    name: "Application", type: "ApplicationStruct",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "Data", type: "octstr",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "StopApp",
            conformance: "M", direction: "request", response: "LauncherResponse",
            children: [
                DatatypeElement({
                    name: "Application", type: "ApplicationStruct",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "HideApp",
            conformance: "M", direction: "request", response: "LauncherResponse",
            children: [
                DatatypeElement({
                    name: "Application", type: "ApplicationStruct",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "LauncherResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", type: "ApplicationLauncherStatusEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Data", type: "octstr",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "ApplicationEpStruct", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "Application", type: "ApplicationStruct",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Endpoint", type: "endpoint-no",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "ApplicationStruct", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "CatalogVendorId", type: "uint16",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ApplicationId", type: "string",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ApplicationLauncherStatusEnum", type: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "AppNotAvailable",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "SystemBusy",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ApplicationLauncherFeature", type: "map32",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "ApplicationPlatform",
                    conformance: "M"
                })
            ]
        })
    ]
}));
