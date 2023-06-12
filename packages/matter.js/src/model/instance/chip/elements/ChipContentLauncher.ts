/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x050a, name: "ContentLauncher",
    description: "Content Launcher",
    details: "This cluster provides an interface for launching content on a media player device such as a TV or Speaker.",
    children: [
        AttributeElement({
            id: 0x0000, name: "ContentLauncherAcceptHeader", base: "list",
            access: "R", conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", base: "string"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "ContentLauncherSupportedStreamingProtocols", base: "map32",
            access: "W", conformance: "O", default: 0
        }),

        CommandElement({
            id: 0x0000, name: "LaunchContent",
            access: "R", conformance: "O", direction: "request", response: "LauncherResponse",
            children: [
                DatatypeElement({
                    name: "Search", base: "ContentSearchStruct",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "AutoPlay", base: "bool",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Data", base: "string",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "LaunchUrl",
            access: "R", conformance: "O", direction: "request", response: "LauncherResponse",
            children: [
                DatatypeElement({
                    name: "ContentUrl", base: "string",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "DisplayString", base: "string",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "BrandingInformation", base: "BrandingInformationStruct",
                    access: "R", conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "LauncherResponse",
            access: "R", conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "ContentLaunchStatusEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Data", base: "string",
                    access: "R", conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "ContentSearchStruct", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "ParameterList", base: "ParameterStruct",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "AdditionalInfoStruct", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "Name", base: "string",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Value", base: "string",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "MetricTypeEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Pixels",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Percentage",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DimensionStruct", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "Width", base: "double",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Height", base: "double",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Metric", base: "MetricTypeEnum",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "StyleInformationStruct", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "ImageUrl", base: "string",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "Color", base: "string",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "Size", base: "DimensionStruct",
                    access: "R", conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "BrandingInformationStruct", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "ProviderName", base: "string",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Background", base: "StyleInformationStruct",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "Logo", base: "StyleInformationStruct",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "ProgressBar", base: "StyleInformationStruct",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "Splash", base: "StyleInformationStruct",
                    access: "R", conformance: "O"
                }),

                DatatypeElement({
                    name: "WaterMark", base: "StyleInformationStruct",
                    access: "R", conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "ParameterEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Actor",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Channel",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Character",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Director",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Event",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Franchise",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "Genre",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "League",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Popularity",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "Provider",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000a, name: "Sport",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000b, name: "SportsTeam",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000c, name: "Type",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000d, name: "Video",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ContentLaunchStatusEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "UrlNotAvailable",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "AuthFailed",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ParameterStruct", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "Type", base: "ParameterEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Value", base: "string",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "ExternalIdList", base: "AdditionalInfoStruct",
                    access: "R", conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "SupportedStreamingProtocol", base: "map32",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Dash",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Hls",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ContentLauncherFeature", base: "map32",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "ContentSearch",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "UrlPlayback",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
