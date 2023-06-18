/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", id: 0x050a, name: "ContentLauncher",
    classification: "application", description: "Content Launcher",
    children: [
        {
            tag: "attribute", id: 0x0000, name: "AcceptHeader",
            access: "R V", conformance: "UP", constraint: "max 100[max 1024]", default: "empty", quality: "N", type: "list",
            details: "This list provides list of content types supported by the Video Player" +
                     " or Content App in the form of entries in the HTTP \"Accept\" request " +
                     "header",
            xref: { document: "cluster", section: "6.7.3.1" },
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "string"
                }
            ]
        },

        {
            tag: "attribute", id: 0x0001, name: "ContentLauncherSupportedStreamingProtocols",
            access: "RW", conformance: "UP", default: 0, quality: "N", type: "map32",
            details: "This attribute provides information about supported streaming " +
                     "protocols",
            xref: { document: "cluster", section: "6.7.3.2" }
        },

        {
            tag: "attribute", id: 0x0000, name: "ContentLauncherAcceptHeader",
            conformance: "O", type: "list",
            children: [
                {
                    tag: "datatype", name: "entry",
                    type: "string"
                }
            ]
        },

        {
            tag: "command", id: 0x0000, name: "LaunchContent",
            access: "O", conformance: "CS", direction: "request", response: "LauncherResponse",
            details: "Upon receipt, this SHALL launch the specified content with optional " +
                     "search criteria. This command returns a Launch Response",
            xref: { document: "cluster", section: "6.7.4.1" },
            children: [
                {
                    tag: "datatype", name: "Search",
                    conformance: "M", type: "ContentSearchStruct"
                },

                {
                    tag: "datatype", name: "AutoPlay",
                    conformance: "M", type: "bool"
                },

                {
                    tag: "datatype", name: "Data",
                    conformance: "O", type: "string"
                }
            ]
        },

        {
            tag: "command", id: 0x0001, name: "LaunchUrl",
            access: "O", conformance: "UP", direction: "request", response: "LauncherResponse",
            details: "Upon receipt, this SHALL launch content from the specified URL",
            xref: { document: "cluster", section: "6.7.4.2" },
            children: [
                {
                    tag: "datatype", name: "ContentUrl",
                    conformance: "M", type: "string"
                },

                {
                    tag: "datatype", name: "DisplayString",
                    conformance: "O", type: "string"
                },

                {
                    tag: "datatype", name: "BrandingInformation",
                    conformance: "O", type: "BrandingInformationStruct"
                }
            ]
        },

        {
            tag: "command", id: 0x0002, name: "LauncherResponse",
            conformance: "CS | UP", direction: "response",
            details: "This command SHALL be generated in response to LaunchContent and " +
                     "LaunchURL commands",
            xref: { document: "cluster", section: "6.7.4.3" },
            children: [
                {
                    tag: "datatype", name: "Status",
                    conformance: "M", type: "ContentLaunchStatusEnum"
                },

                {
                    tag: "datatype", name: "Data",
                    conformance: "O", type: "string"
                }
            ]
        },

        {
            tag: "datatype", name: "ContentLauncherFeature",
            conformance: "M", type: "map32",
            details: "StatusEnum Data Type is derived from enum8",
            xref: { document: "cluster", section: "6.7.5.1" },
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Success",
                    conformance: "M", description: "Command succeeded",
                    xref: { document: "cluster", section: "6.7.5.1" }
                },

                {
                    tag: "datatype", id: 0x0001, name: "ContentSearch",
                    conformance: "M", description: "Requested URL could not be reached by device.",
                    xref: { document: "cluster", section: "6.7.5.1" }
                },

                {
                    tag: "datatype", id: 0x0002, name: "UrlPlayback",
                    conformance: "M", description: "Requested URL returned 401 error code.",
                    xref: { document: "cluster", section: "6.7.5.1" }
                }
            ]
        },

        {
            tag: "datatype", name: "ContentSearchStruct",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "ParameterList",
                    conformance: "M", type: "ParameterStruct"
                }
            ]
        },

        {
            tag: "datatype", name: "AdditionalInfoStruct",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "Name",
                    conformance: "M", type: "string"
                },

                {
                    tag: "datatype", name: "Value",
                    conformance: "M", type: "string"
                }
            ]
        },

        {
            tag: "datatype", name: "MetricTypeEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Pixels",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Percentage",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "DimensionStruct",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "Width",
                    conformance: "M", type: "double"
                },

                {
                    tag: "datatype", name: "Height",
                    conformance: "M", type: "double"
                },

                {
                    tag: "datatype", name: "Metric",
                    conformance: "M", type: "MetricTypeEnum"
                }
            ]
        },

        {
            tag: "datatype", name: "StyleInformationStruct",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "ImageUrl",
                    conformance: "O", type: "string"
                },

                {
                    tag: "datatype", name: "Color",
                    conformance: "O", type: "string"
                },

                {
                    tag: "datatype", name: "Size",
                    conformance: "O", type: "DimensionStruct"
                }
            ]
        },

        {
            tag: "datatype", name: "BrandingInformationStruct",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "ProviderName",
                    conformance: "M", type: "string"
                },

                {
                    tag: "datatype", name: "Background",
                    conformance: "O", type: "StyleInformationStruct"
                },

                {
                    tag: "datatype", name: "Logo",
                    conformance: "O", type: "StyleInformationStruct"
                },

                {
                    tag: "datatype", name: "ProgressBar",
                    conformance: "O", type: "StyleInformationStruct"
                },

                {
                    tag: "datatype", name: "Splash",
                    conformance: "O", type: "StyleInformationStruct"
                },

                {
                    tag: "datatype", name: "WaterMark",
                    conformance: "O", type: "StyleInformationStruct"
                }
            ]
        },

        {
            tag: "datatype", name: "ParameterEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Actor",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "Channel",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Character",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0003, name: "Director",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0004, name: "Event",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0005, name: "Franchise",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0006, name: "Genre",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0007, name: "League",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0008, name: "Popularity",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0009, name: "Provider",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000a, name: "Sport",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000b, name: "SportsTeam",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000c, name: "Type",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x000d, name: "Video",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "ContentLaunchStatusEnum",
            conformance: "M", type: "enum8",
            children: [
                {
                    tag: "datatype", id: 0x0000, name: "Success",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0001, name: "UrlNotAvailable",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "AuthFailed",
                    conformance: "M"
                }
            ]
        },

        {
            tag: "datatype", name: "ParameterStruct",
            conformance: "M", type: "struct",
            children: [
                {
                    tag: "datatype", name: "Type",
                    conformance: "M", type: "ParameterEnum"
                },

                {
                    tag: "datatype", name: "Value",
                    conformance: "M", type: "string"
                },

                {
                    tag: "datatype", name: "ExternalIdList",
                    conformance: "O", type: "AdditionalInfoStruct"
                }
            ]
        },

        {
            tag: "datatype", name: "SupportedStreamingProtocol",
            conformance: "M", type: "map32",
            children: [
                {
                    tag: "datatype", id: 0x0001, name: "Dash",
                    conformance: "M"
                },

                {
                    tag: "datatype", id: 0x0002, name: "Hls",
                    conformance: "M"
                }
            ]
        }
    ]
});
