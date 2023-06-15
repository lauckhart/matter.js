/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../elements/index.js";

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
                    name: "Search", base: "ContentSearchStruct",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "AutoPlay", base: "bool",
                    conformance: "M"
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
                    name: "ContentUrl", base: "string",
                    conformance: "M"
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
                    name: "Status", base: "ContentLaunchStatusEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Data", base: "string",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "ContentSearchStruct", base: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "ParameterList", base: "ParameterStruct",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "AdditionalInfoStruct", base: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "Name", base: "string",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Value", base: "string",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "MetricTypeEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Pixels",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Percentage",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "DimensionStruct", base: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "Width", base: "double",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Height", base: "double",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Metric", base: "MetricTypeEnum",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "StyleInformationStruct", base: "struct",
            conformance: "M",
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
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "ProviderName", base: "string",
                    conformance: "M"
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
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Actor",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Channel",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Character",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Director",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "Event",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "Franchise",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0006, name: "Genre",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0007, name: "League",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0008, name: "Popularity",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0009, name: "Provider",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000a, name: "Sport",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000b, name: "SportsTeam",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000c, name: "Type",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x000d, name: "Video",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ContentLaunchStatusEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "UrlNotAvailable",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "AuthFailed",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ParameterStruct", base: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "Type", base: "ParameterEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Value", base: "string",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ExternalIdList", base: "AdditionalInfoStruct",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "SupportedStreamingProtocol", base: "map32",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "Dash",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "Hls",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "ContentLauncherFeature", base: "map32",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "ContentSearch",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "UrlPlayback",
                    conformance: "M"
                })
            ]
        })
    ]
}));
