/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../SpecMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../elements/index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x050a, name: "ContentLauncher",
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
                    id: 0x0000, name: "CS",
                    description: "Device supports content search (non-app specific)",
                    xref: { document: "cluster", section: "6.7.2", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "UP",
                    description: "Device supports basic URL-based file playback",
                    xref: { document: "cluster", section: "6.7.2", version: "1.1" }
                })
            ]
        }),

        AttributeElement({
            id: 0x0000, name: "AcceptHeader", base: "list",
            access: "R V", conformance: "UP", constraint: "max 100[max 1024]", default: "empty", quality: "N",
            details: "This list provides list of content types supported by the Video Player" +
                     " or Content App in the form of entries in the HTTP \"Accept\" request " +
                     "header",
            xref: { document: "cluster", section: "6.7.3.1", version: "1.1" },
            children: [
                DatatypeElement({
                    name: "entry", base: "string"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "SupportedStreamingProtocols", base: "map32",
            access: "R V", conformance: "UP", default: 0, quality: "N",
            details: "This attribute provides information about supported streaming " +
                     "protocols",
            xref: { document: "cluster", section: "6.7.3.2", version: "1.1" }
        }),

        CommandElement({
            id: 0x0000, name: "LaunchContent",
            access: "O", conformance: "CS", direction: "request", response: "LauncherResponse",
            details: "Upon receipt, this SHALL launch the specified content with optional " +
                     "search criteria. This command returns a Launch Response",
            xref: { document: "cluster", section: "6.7.4.1", version: "1.1" }
        }),

        CommandElement({
            id: 0x0001, name: "LaunchUrl",
            access: "O", conformance: "UP", direction: "request", response: "LauncherResponse",
            details: "Upon receipt, this SHALL launch content from the specified URL",
            xref: { document: "cluster", section: "6.7.4.2", version: "1.1" }
        }),

        CommandElement({
            id: 0x0002, name: "LauncherResponse",
            conformance: "CS | UP", direction: "response",
            details: "This command SHALL be generated in response to LaunchContent and " +
                     "LaunchURL commands",
            xref: { document: "cluster", section: "6.7.4.3", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "StatusEnum", base: "enum8",
            details: "StatusEnum Data Type is derived from enum8",
            xref: { document: "cluster", section: "6.7.5.1", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success",
                    conformance: "M", description: "Command succeeded",
                    xref: { document: "cluster", section: "6.7.5.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "UrlNotAvailable",
                    conformance: "M", description: "Requested URL could not be reached by device.",
                    xref: { document: "cluster", section: "6.7.5.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "AuthFailed",
                    conformance: "M", description: "Requested URL returned 401 error code.",
                    xref: { document: "cluster", section: "6.7.5.1", version: "1.1" }
                })
            ]
        })
    ]
}));
