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
            id: 0x0000, name: "ContentLauncherAcceptHeader", type: "list",
            conformance: "O",
            children: [
                DatatypeElement({
                    name: "entry", type: "string"
                })
            ]
        }),

        AttributeElement({
            id: 0x0001, name: "ContentLauncherSupportedStreamingProtocols", type: "map32",
            access: "RW", conformance: "O", default: 0
        }),

        CommandElement({
            id: 0x0000, name: "LaunchContent",
            conformance: "O", direction: "request", response: "LauncherResponse",
            children: [
                DatatypeElement({
                    name: "Search", type: "ContentSearchStruct",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "AutoPlay", type: "bool",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Data", type: "string",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0001, name: "LaunchUrl",
            conformance: "O", direction: "request", response: "LauncherResponse",
            children: [
                DatatypeElement({
                    name: "ContentUrl", type: "string",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "DisplayString", type: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "BrandingInformation", type: "BrandingInformationStruct",
                    conformance: "O"
                })
            ]
        }),

        CommandElement({
            id: 0x0002, name: "LauncherResponse",
            conformance: "O", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", type: "ContentLaunchStatusEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Data", type: "string",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "ContentSearchStruct", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "ParameterList", type: "ParameterStruct",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "AdditionalInfoStruct", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "Name", type: "string",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Value", type: "string",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "MetricTypeEnum", type: "enum8",
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
            name: "DimensionStruct", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "Width", type: "double",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Height", type: "double",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Metric", type: "MetricTypeEnum",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "StyleInformationStruct", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "ImageUrl", type: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "Color", type: "string",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "Size", type: "DimensionStruct",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "BrandingInformationStruct", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "ProviderName", type: "string",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Background", type: "StyleInformationStruct",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "Logo", type: "StyleInformationStruct",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "ProgressBar", type: "StyleInformationStruct",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "Splash", type: "StyleInformationStruct",
                    conformance: "O"
                }),

                DatatypeElement({
                    name: "WaterMark", type: "StyleInformationStruct",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "ParameterEnum", type: "enum8",
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
            name: "ContentLaunchStatusEnum", type: "enum8",
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
            name: "ParameterStruct", type: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "Type", type: "ParameterEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Value", type: "string",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "ExternalIdList", type: "AdditionalInfoStruct",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "SupportedStreamingProtocol", type: "map32",
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
            name: "ContentLauncherFeature", type: "map32",
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
