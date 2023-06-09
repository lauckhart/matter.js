/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x050c, name: "ApplicationLauncher",
    description: "Application Launcher",
    details: "This cluster provides an interface for launching content on a media player device such as a TV or Speaker.",
    children: [
        AttributeElement({
            id: 0x0000, name: "ApplicationLauncherList", base: "CatalogList",
            access: { rw: "R" }, conformance: [ "O" ], quality: { reportable: true }
        }),

        AttributeElement({
            id: 0x0001, name: "ApplicationLauncherCurrentApp", base: "CurrentApp",
            access: { rw: "W" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        CommandElement({
            id: 0x0000, name: "LaunchApp", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request", response: "LauncherResponse",
            children: [
                DatatypeElement({
                    name: "Application", base: "ApplicationStruct",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "Application", base: "ApplicationStruct",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "Data", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "Data", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "StopApp", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request", response: "LauncherResponse",
            children: [
                DatatypeElement({
                    name: "Application", base: "ApplicationStruct",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "Application", base: "ApplicationStruct",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "HideApp", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request", response: "LauncherResponse",
            children: [
                DatatypeElement({
                    name: "Application", base: "ApplicationStruct",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "Application", base: "ApplicationStruct",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0003, name: "LauncherResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "ApplicationLauncherStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Status", base: "ApplicationLauncherStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Data", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "Data", base: "OCTET_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        })
    ]
}))