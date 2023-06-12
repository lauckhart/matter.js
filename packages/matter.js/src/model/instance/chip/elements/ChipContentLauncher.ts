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
            conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", base: "string"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "ContentLauncherSupportedStreamingProtocols", base: "map32",
            access: "RW", conformance: "O", default: 0
        }),

        CommandElement({
            id: 0x0000, name: "LaunchContent",
            conformance: "O", direction: "request", response: "LauncherResponse",
            children: [
                DatatypeElement({
                    name: "Search", base: "ContentSearchStruct"
                }),

                DatatypeElement({
                    name: "AutoPlay", base: "bool"
                }),

                DatatypeElement({
                    name: "Data", base: "string",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "LaunchUrl",
            conformance: "O", direction: "request", response: "LauncherResponse",
            children: [
                DatatypeElement({
                    name: "ContentUrl", base: "string"
                }),

                DatatypeElement({
                    name: "DisplayString", base: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "BrandingInformation", base: "BrandingInformationStruct",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "LauncherResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "ContentLaunchStatusEnum"
                }),

                DatatypeElement({
                    name: "Data", base: "string",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "ContentSearchStruct", base: "struct",
            children: [
                DatatypeElement({
                    name: "ParameterList", base: "ParameterStruct"
                })
            ]
        }),

        DatatypeElement({
            name: "AdditionalInfoStruct", base: "struct",
            children: [
                DatatypeElement({
                    name: "Name", base: "string"
                }),

                DatatypeElement({
                    name: "Value", base: "string"
                })
            ]
        }),

        DatatypeElement({
            name: "MetricTypeEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Pixels"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Percentage"
                })
            ]
        }),

        DatatypeElement({
            name: "DimensionStruct", base: "struct",
            children: [
                DatatypeElement({
                    name: "Width", base: "double"
                }),

                DatatypeElement({
                    name: "Height", base: "double"
                }),

                DatatypeElement({
                    name: "Metric", base: "MetricTypeEnum"
                })
            ]
        }),

        DatatypeElement({
            name: "StyleInformationStruct", base: "struct",
            children: [
                DatatypeElement({
                    name: "ImageUrl", base: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "Color", base: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "Size", base: "DimensionStruct",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "BrandingInformationStruct", base: "struct",
            children: [
                DatatypeElement({
                    name: "ProviderName", base: "string"
                }),

                DatatypeElement({
                    name: "Background", base: "StyleInformationStruct",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "Logo", base: "StyleInformationStruct",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "ProgressBar", base: "StyleInformationStruct",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "Splash", base: "StyleInformationStruct",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "WaterMark", base: "StyleInformationStruct",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "ParameterEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Actor"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Channel"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Character"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Director"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Event"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Franchise"
                }),

                DatatypeElement({
                    id: 0x0006, name: "Genre"
                }),

                DatatypeElement({
                    id: 0x0007, name: "League"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Popularity"
                }),

                DatatypeElement({
                    id: 0x0009, name: "Provider"
                }),

                DatatypeElement({
                    id: 0x000a, name: "Sport"
                }),

                DatatypeElement({
                    id: 0x000b, name: "SportsTeam"
                }),

                DatatypeElement({
                    id: 0x000c, name: "Type"
                }),

                DatatypeElement({
                    id: 0x000d, name: "Video"
                })
            ]
        }),

        DatatypeElement({
            name: "ContentLaunchStatusEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success"
                }),

                DatatypeElement({
                    id: 0x0001, name: "UrlNotAvailable"
                }),

                DatatypeElement({
                    id: 0x0002, name: "AuthFailed"
                })
            ]
        }),

        DatatypeElement({
            name: "ParameterStruct", base: "struct",
            children: [
                DatatypeElement({
                    name: "Type", base: "ParameterEnum"
                }),

                DatatypeElement({
                    name: "Value", base: "string"
                }),

                DatatypeElement({
                    name: "ExternalIdList", base: "AdditionalInfoStruct",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "SupportedStreamingProtocol", base: "map32",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Dash"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Hls"
                })
            ]
        }),

        DatatypeElement({
            name: "ContentLauncherFeature", base: "map32",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "ContentSearch"
                }),

                DatatypeElement({
                    id: 0x0002, name: "UrlPlayback"
                })
            ]
        })
    ]
}));
