/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x050a, name: "ContentLauncher",
    description: "Content Launcher",
    details: "This cluster provides an interface for launching content on a media player device such as a TV or Speaker.",
    children: [
        AttributeElement({
            id: 0x0000, name: "ContentLauncherAcceptHeader", base: "AcceptHeader",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0001, name: "ContentLauncherSupportedStreamingProtocols", base: "SupportedStreamingProtocols",
            access: { rw: "W" }, conformance: [ "O" ]
        }),

        CommandElement({
            id: 0x0000, name: "LaunchContent", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "LauncherResponse",
            children: [
                DatatypeElement({
                    name: "Search", base: "ContentSearchStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Search", base: "ContentSearchStruct",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "AutoPlay", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "AutoPlay", base: "BOOLEAN",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Data", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "Data", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "LaunchUrl", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "LauncherResponse",
            children: [
                DatatypeElement({
                    name: "ContentUrl", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "ContentUrl", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "DisplayString", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "DisplayString", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "BrandingInformation", base: "BrandingInformationStruct",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "BrandingInformation", base: "BrandingInformationStruct",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "LauncherResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "ContentLaunchStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Status", base: "ContentLaunchStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Data", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "Data", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        })
    ]
}))