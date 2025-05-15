/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Resource } from "#models/Resource.js";

Resource.add({
    name: "Channel", tag: "cluster",
    classification: "application", pics: "CHANNEL",

    details: "This cluster provides an interface for controlling the current Channel on a device or endpoint." +
        "\n" +
        "This cluster server would be supported on Video Player devices or endpoints that allow Channel " +
        "control such as a Content App. This cluster provides a list of available channels and provides " +
        "commands for absolute and relative channel changes. Some of these commands and/or their responses " +
        "may be large (see Large Message Quality under Data Model section in [MatterCore]), but they do not " +
        "have the Large quality indicator (L) because they can also be transferred over MRP (see Message " +
        "Reliability Protocol in [MatterCore]) in pages that fit within the MRP MTU limit. However, an " +
        "implementation may leverage a transport like TCP that allows large payloads, if available, to " +
        "minimize the number of messages required to transfer the corresponding payload." +
        "\n" +
        "The cluster server for Channel is implemented by an endpoint that controls the current Channel.",

    xref: "cluster§6.6",

    children: [
        {
            name: "FeatureMap", tag: "attribute",
            xref: "cluster§6.6.4",

            children: [
                { name: "CL", tag: "field", details: "Provides list of available channels." },
                {
                    name: "LI", tag: "field",
                    details: "Provides lineup info, which is a reference to an external source of lineup information."
                },
                { name: "EG", tag: "field", details: "Provides electronic program guide information." },
                { name: "RP", tag: "field", details: "Provides ability to record program." }
            ]
        },

        {
            name: "ChannelList", tag: "attribute",
            details: "This attribute shall provide the list of supported channels.",
            xref: "cluster§6.6.6.1"
        },
        {
            name: "Lineup", tag: "attribute",
            details: "This attribute shall identify the channel lineup using external data sources.",
            xref: "cluster§6.6.6.2"
        },

        {
            name: "CurrentChannel", tag: "attribute",
            details: "This attribute shall contain the current channel. When supported but a channel is not currently " +
                "tuned to (if a content application is in foreground), the value of the field shall be null.",
            xref: "cluster§6.6.6.3"
        },

        {
            name: "ChangeChannel", tag: "command",

            details: "Change the channel to the channel case-insensitive exact matching the value passed as an argument." +
                "\n" +
                "The match priority order shall be: Identifier, AffiliateCallSign, CallSign, Name, Number. In the " +
                "match string, the Channel number should be presented in the \"Major.Minor\" format, such as \"13.1\"." +
                "\n" +
                "Upon receipt, this shall generate a ChangeChannelResponse command." +
                "\n" +
                "Upon success, the CurrentChannel attribute, if supported, shall be updated to reflect the change.",

            xref: "cluster§6.6.7.1",
            children: [{
                name: "Match", tag: "field",
                details: "This field shall contain a user-input string to match in order to identify the target channel.",
                xref: "cluster§6.6.7.1.1"
            }]
        },

        {
            name: "ChangeChannelResponse", tag: "command",
            details: "This command shall be generated in response to a ChangeChannel command.",
            xref: "cluster§6.6.7.2",

            children: [
                {
                    name: "Status", tag: "field",
                    details: "This field shall indicate the status of the command which resulted in this response.",
                    xref: "cluster§6.6.7.2.1"
                },
                {
                    name: "Data", tag: "field",
                    details: "This field shall indicate Optional app-specific data.",
                    xref: "cluster§6.6.7.2.2"
                }
            ]
        },

        {
            name: "ChangeChannelByNumber", tag: "command",
            details: "Change the channel to the channel with the given Number in the ChannelList attribute.",
            xref: "cluster§6.6.7.3",

            children: [
                {
                    name: "MajorNumber", tag: "field",
                    details: "This field shall indicate the channel major number value (ATSC format) to which the channel should " +
                        "change.",
                    xref: "cluster§6.6.7.3.1"
                },

                {
                    name: "MinorNumber", tag: "field",
                    details: "This field shall indicate the channel minor number value (ATSC format) to which the channel should " +
                        "change.",
                    xref: "cluster§6.6.7.3.2"
                }
            ]
        },

        {
            name: "SkipChannel", tag: "command",

            details: "This command provides channel up and channel down functionality, but allows channel index jumps of " +
                "size Count." +
                "\n" +
                "When the value of the increase or decrease is larger than the number of channels remaining in the " +
                "given direction, then the behavior shall be to return to the beginning (or end) of the channel list " +
                "and continue. For example, if the current channel is at index 0 and count value of -1 is given, then " +
                "the current channel should change to the last channel.",

            xref: "cluster§6.6.7.4",

            children: [{
                name: "Count", tag: "field",
                details: "This field shall indicate the number of steps to increase (Count is positive) or decrease (Count is " +
                    "negative) the current channel.",
                xref: "cluster§6.6.7.4.1"
            }]
        },

        {
            name: "GetProgramGuide", tag: "command",
            details: "This command retrieves the program guide. It accepts several filter parameters to return specific " +
                "schedule and program information from a content app. The command shall receive in response a " +
                "ProgramGuideResponse. Standard error codes shall be used when arguments provided are not valid. For " +
                "example, if StartTime is greater than EndTime, the status code INVALID_ACTION shall be returned.",
            xref: "cluster§6.6.7.5",

            children: [
                {
                    name: "StartTime", tag: "field",
                    details: "This field shall indicate the beginning of the time window for which program guide entries are to be " +
                        "retrieved, as a UTC time. Entries with a start time on or after this value will be included in the " +
                        "results.",
                    xref: "cluster§6.6.7.5.1"
                },

                {
                    name: "EndTime", tag: "field",
                    details: "This field shall indicate the end of the time window for which program guide entries are to be " +
                        "retrieved, as a UTC time. Entries with an end time on or before this value will be included in the " +
                        "results. This field can represent a past or future value but shall be greater than the StartTime.",
                    xref: "cluster§6.6.7.5.2"
                },

                {
                    name: "ChannelList", tag: "field",
                    details: "This field shall indicate the set of channels for which program guide entries should be fetched. By " +
                        "providing a list of channels in this field, the response will only include entries corresponding to " +
                        "the specified channels.",
                    xref: "cluster§6.6.7.5.3"
                },

                {
                    name: "PageToken", tag: "field",
                    details: "This field shall indicate the pagination token used for managing pagination progression.",
                    xref: "cluster§6.6.7.5.4"
                },
                {
                    name: "RecordingFlag", tag: "field",
                    details: "This field shall indicate the flags of the programs for which entries should be fetched.",
                    xref: "cluster§6.6.7.5.5"
                },
                {
                    name: "ExternalIdList", tag: "field",
                    details: "This field shall indicate the list of additional external content identifiers.",
                    xref: "cluster§6.6.7.5.6"
                },
                {
                    name: "Data", tag: "field",
                    details: "This field shall indicate Optional app-specific data.",
                    xref: "cluster§6.6.7.5.7"
                }
            ]
        },

        {
            name: "ProgramGuideResponse", tag: "command",
            details: "This command is a response to the GetProgramGuide command.",
            xref: "cluster§6.6.7.6",

            children: [
                {
                    name: "Paging", tag: "field",
                    details: "This field shall indicate the necessary pagination attributes that define information for both the " +
                        "succeeding and preceding data pages.",
                    xref: "cluster§6.6.7.6.1"
                },

                {
                    name: "ProgramList", tag: "field",
                    details: "This field shall indicate the list of programs.",
                    xref: "cluster§6.6.7.6.2"
                }
            ]
        },

        {
            name: "RecordProgram", tag: "command",
            details: "Record a specific program or series when it goes live. This functionality enables DVR recording " +
                "features.",
            xref: "cluster§6.6.7.7",

            children: [
                {
                    name: "ProgramIdentifier", tag: "field",
                    details: "This field shall indicate the program identifier for the program that should be recorded. This value " +
                        "is provided by the identifier field in ProgramStruct.",
                    xref: "cluster§6.6.7.7.1"
                },

                {
                    name: "ShouldRecordSeries", tag: "field",
                    details: "This field shall indicate whether the whole series associated to the program should be recorded. For " +
                        "example, invoking record program on an episode with that flag set to true, the target should " +
                        "schedule record the whole series.",
                    xref: "cluster§6.6.7.7.2"
                },

                {
                    name: "ExternalIdList", tag: "field",
                    details: "This field, if present, shall indicate the list of additional external content identifiers.",
                    xref: "cluster§6.6.7.7.3"
                },
                {
                    name: "Data", tag: "field",
                    details: "This field, if present, shall indicate app-specific data.",
                    xref: "cluster§6.6.7.7.4"
                }
            ]
        },

        {
            name: "CancelRecordProgram", tag: "command",
            details: "Cancel recording for a specific program or series.",
            xref: "cluster§6.6.7.8",

            children: [
                {
                    name: "ProgramIdentifier", tag: "field",
                    details: "This field shall indicate the program identifier for the program that should be cancelled from " +
                        "recording. This value is provided by the identifier field in ProgramStruct.",
                    xref: "cluster§6.6.7.8.1"
                },

                {
                    name: "ShouldRecordSeries", tag: "field",
                    details: "This field shall indicate whether the whole series associated to the program should be cancelled " +
                        "from recording. For example, invoking record program on an episode with that flag set to true, the " +
                        "target should schedule record the whole series.",
                    xref: "cluster§6.6.7.8.2"
                },

                {
                    name: "ExternalIdList", tag: "field",
                    details: "This field, if present, shall indicate the list of additional external content identifiers.",
                    xref: "cluster§6.6.7.8.3"
                },
                {
                    name: "Data", tag: "field",
                    details: "This field, if present, shall indicate app-specific data.",
                    xref: "cluster§6.6.7.8.4"
                }
            ]
        },

        {
            name: "RecordingFlagBitmap", tag: "datatype",
            xref: "cluster§6.6.5.1",
            children: [
                { name: "Scheduled", tag: "field", description: "The program is scheduled for recording." },
                { name: "RecordSeries", tag: "field", description: "The program series is scheduled for recording." },
                { name: "Recorded", tag: "field", description: "The program is recorded and available to be played." }
            ]
        },

        {
            name: "LineupInfoTypeEnum", tag: "datatype",
            xref: "cluster§6.6.5.2",
            children: [{ name: "Mso", tag: "field", description: "Multi System Operator" }]
        },

        {
            name: "StatusEnum", tag: "datatype",
            xref: "cluster§6.6.5.3",

            children: [
                { name: "Success", tag: "field", description: "Command succeeded" },
                {
                    name: "MultipleMatches", tag: "field",
                    description: "More than one equal match for the ChannelInfoStruct passed in."
                },
                { name: "NoMatches", tag: "field", description: "No matches for the ChannelInfoStruct passed in." }
            ]
        },

        {
            name: "ChannelTypeEnum", tag: "datatype",
            xref: "cluster§6.6.5.4",

            children: [
                { name: "Satellite", tag: "field", description: "The channel is sourced from a satellite provider." },
                { name: "Cable", tag: "field", description: "The channel is sourced from a cable provider." },
                {
                    name: "Terrestrial", tag: "field",
                    description: "The channel is sourced from a terrestrial provider."
                },
                { name: "Ott", tag: "field", description: "The channel is sourced from an OTT provider." }
            ]
        },

        {
            name: "ChannelInfoStruct", tag: "datatype",
            details: "This indicates a channel in a channel lineup." +
                "\n" +
                "While the major and minor numbers in the ChannelInfoStruct support use of ATSC channel format, a " +
                "lineup may use other formats which can map into these numeric values.",
            xref: "cluster§6.6.5.5",

            children: [
                {
                    name: "MajorNumber", tag: "field",
                    details: "This field shall indicate the channel major number value (for example, using ATSC format). When the " +
                        "channel number is expressed as a string, such as \"13.1\" or \"256\", the major number would be 13 or " +
                        "256, respectively. This field is required but shall be set to 0 for channels such as over-the-top " +
                        "channels that are not represented by a major or minor number.",
                    xref: "cluster§6.6.5.5.1"
                },

                {
                    name: "MinorNumber", tag: "field",
                    details: "This field shall indicate the channel minor number value (for example, using ATSC format). When the " +
                        "channel number is expressed as a string, such as \"13.1\" or \"256\", the minor number would be 1 or 0, " +
                        "respectively. This field is required but shall be set to 0 for channels such as over-the-top " +
                        "channels that are not represented by a major or minor number.",
                    xref: "cluster§6.6.5.5.2"
                },

                {
                    name: "Name", tag: "field",
                    details: "This field shall indicate the marketing name for the channel, such as “The CW\" or \"Comedy Central\". " +
                        "This field is optional, but SHOULD be provided when known.",
                    xref: "cluster§6.6.5.5.3"
                },

                {
                    name: "CallSign", tag: "field",
                    details: "This field shall indicate the call sign of the channel, such as \"PBS\". This field is optional, but " +
                        "SHOULD be provided when known.",
                    xref: "cluster§6.6.5.5.4"
                },

                {
                    name: "AffiliateCallSign", tag: "field",
                    details: "This field shall indicate the local affiliate call sign, such as \"KCTS\". This field is optional, but " +
                        "SHOULD be provided when known.",
                    xref: "cluster§6.6.5.5.5"
                },

                {
                    name: "Identifier", tag: "field",
                    details: "This shall indicate the unique identifier for a specific channel. This field is optional, but SHOULD " +
                        "be provided when MajorNumber and MinorNumber are not available.",
                    xref: "cluster§6.6.5.5.6"
                },

                {
                    name: "Type", tag: "field",
                    details: "This shall indicate the type or grouping of a specific channel. This field is optional, but SHOULD " +
                        "be provided when known.",
                    xref: "cluster§6.6.5.5.7"
                }
            ]
        },

        {
            name: "LineupInfoStruct", tag: "datatype",
            details: "The Lineup Info allows references to external lineup sources like Gracenote. The combination of " +
                "OperatorName, LineupName, and PostalCode MUST uniquely identify a lineup.",
            xref: "cluster§6.6.5.6",

            children: [
                {
                    name: "OperatorName", tag: "field",
                    details: "This field shall indicate the name of the operator, for example “Comcast”.",
                    xref: "cluster§6.6.5.6.1"
                },

                {
                    name: "LineupName", tag: "field",
                    details: "This field shall indicate the name of the provider lineup, for example \"Comcast King County\". This " +
                        "field is optional, but SHOULD be provided when known.",
                    xref: "cluster§6.6.5.6.2"
                },

                {
                    name: "PostalCode", tag: "field",
                    details: "This field shall indicate the postal code (zip code) for the location of the device, such as " +
                        "\"98052\". This field is optional, but SHOULD be provided when known.",
                    xref: "cluster§6.6.5.6.3"
                },

                {
                    name: "LineupInfoType", tag: "field",
                    details: "This field shall indicate the type of lineup. This field is optional, but SHOULD be provided when " +
                        "known.",
                    xref: "cluster§6.6.5.6.4"
                }
            ]
        },

        {
            name: "ProgramStruct", tag: "datatype",
            details: "This indicates a program within an electronic program guide (EPG).",
            xref: "cluster§6.6.5.7",

            children: [
                {
                    name: "Identifier", tag: "field",
                    details: "This field shall indicate a unique identifier for a program within an electronic program guide list. " +
                        "The identifier shall be unique across multiple channels.",
                    xref: "cluster§6.6.5.7.1"
                },

                {
                    name: "Channel", tag: "field",
                    details: "This field shall indicate the channel associated to the program.",
                    xref: "cluster§6.6.5.7.2"
                },

                {
                    name: "StartTime", tag: "field",
                    details: "This field shall indicate an epoch time in seconds indicating the start time of a program, as a UTC " +
                        "time. This field can represent a past or future value.",
                    xref: "cluster§6.6.5.7.3"
                },

                {
                    name: "EndTime", tag: "field",
                    details: "This field shall indicate an epoch time in seconds indicating the end time of a program, as a UTC " +
                        "time. This field can represent a past or future value but shall be greater than the StartTime.",
                    xref: "cluster§6.6.5.7.4"
                },

                {
                    name: "Title", tag: "field",
                    details: "This field shall indicate the title or name for the specific program. For example, “MCIS: Los " +
                        "Angeles”.",
                    xref: "cluster§6.6.5.7.5"
                },

                {
                    name: "Subtitle", tag: "field",
                    details: "This field shall indicate the subtitle for the specific program. For example, “Maybe Today\" which is " +
                        "an episode name for “MCIS: Los Angeles”. This field is optional but shall be provided if applicable " +
                        "and known.",
                    xref: "cluster§6.6.5.7.6"
                },

                {
                    name: "Description", tag: "field",
                    details: "This field shall indicate the brief description for the specific program. For example, a description " +
                        "of an episode. This field is optional but shall be provided if known.",
                    xref: "cluster§6.6.5.7.7"
                },

                {
                    name: "AudioLanguages", tag: "field",
                    details: "This field shall indicate the audio language for the specific program. The value is a string " +
                        "containing one of the standard Tags for Identifying Languages RFC 5646. This field is optional but " +
                        "shall be provided if known.",
                    xref: "cluster§6.6.5.7.8"
                },

                {
                    name: "Ratings", tag: "field",
                    details: "This field shall be used for indicating the level of parental guidance recommended for of a " +
                        "particular program. This can be any rating system used in the country or region where the program is " +
                        "broadcast. For example, in the United States “TV-PG” may contain material that parents can find not " +
                        "suitable for younger children but can be accepted in general for older children. This field is " +
                        "optional but shall be provided if known.",
                    xref: "cluster§6.6.5.7.9"
                },

                {
                    name: "ThumbnailUrl", tag: "field",
                    details: "This field shall represent a URL of a thumbnail that clients can use to render an image for the " +
                        "program. The syntax of this field shall follow the syntax as specified in RFC 1738 and shall use the " +
                        "https scheme.",
                    xref: "cluster§6.6.5.7.10"
                },

                {
                    name: "PosterArtUrl", tag: "field",
                    details: "This field shall represent a URL of a poster that clients can use to render an image for the program " +
                        "on the detail view. The syntax of this field shall follow the syntax as specified in RFC 1738 and " +
                        "shall use the https scheme.",
                    xref: "cluster§6.6.5.7.11"
                },

                {
                    name: "DvbiUrl", tag: "field",
                    details: "This field shall represent the DVB-I URL associated to the program. The syntax of this field shall " +
                        "follow the syntax as specified in RFC 1738 and shall use the https scheme.",
                    xref: "cluster§6.6.5.7.12"
                },

                {
                    name: "ReleaseDate", tag: "field",
                    details: "This field shall be a string, in ISO 8601 format, representing the date on which the program was " +
                        "released. This field is optional but when provided, the year shall be provided as part of the " +
                        "string.",
                    xref: "cluster§6.6.5.7.13"
                },

                {
                    name: "ParentalGuidanceText", tag: "field",
                    details: "This field shall represent a string providing additional information on the parental guidance. This " +
                        "field is optional.",
                    xref: "cluster§6.6.5.7.14"
                },

                {
                    name: "RecordingFlag", tag: "field",
                    details: "This field shall represent the recording status of the program. This field is required if the " +
                        "RecordProgram feature is set.",
                    xref: "cluster§6.6.5.7.15"
                },

                {
                    name: "SeriesInfo", tag: "field",
                    details: "This field shall represent the information of a series such as season and episode number. This field " +
                        "is optional but SHOULD be provided if the program represents a series and this information is " +
                        "available.",
                    xref: "cluster§6.6.5.7.16"
                },

                {
                    name: "CategoryList", tag: "field",
                    details: "This field shall represent the category of a particular program. This field is optional but shall be " +
                        "provided if known.",
                    xref: "cluster§6.6.5.7.17"
                },

                {
                    name: "CastList", tag: "field",
                    details: "This field shall represent a list of the cast or the crew on the program. A single cast member may " +
                        "have more than one role. This field is optional but shall be provided if known.",
                    xref: "cluster§6.6.5.7.18"
                },

                {
                    name: "ExternalIdList", tag: "field",
                    details: "This field shall indicate the list of additional external content identifiers.",
                    xref: "cluster§6.6.5.7.19"
                }
            ]
        },

        {
            name: "ProgramCategoryStruct", tag: "datatype",
            details: "This object defines the category associated to a program.",
            xref: "cluster§6.6.5.8",

            children: [
                {
                    name: "Category", tag: "field",
                    details: "This field shall represent the category or genre of the program. Ex. News.",
                    xref: "cluster§6.6.5.8.1"
                },
                {
                    name: "SubCategory", tag: "field",
                    details: "This field shall represent the sub-category or sub-genre of the program. Ex. Local.",
                    xref: "cluster§6.6.5.8.2"
                }
            ]
        },

        {
            name: "SeriesInfoStruct", tag: "datatype",
            details: "This object provides the episode information related to a program.",
            xref: "cluster§6.6.5.9",

            children: [
                {
                    name: "Season", tag: "field",
                    details: "This field shall represent the season of the series associated to the program.",
                    xref: "cluster§6.6.5.9.1"
                },
                {
                    name: "Episode", tag: "field",
                    details: "This field shall represent the episode of the program.",
                    xref: "cluster§6.6.5.9.2"
                }
            ]
        },

        {
            name: "ProgramCastStruct", tag: "datatype",
            details: "This object provides the cast information related to a program.",
            xref: "cluster§6.6.5.10",

            children: [
                {
                    name: "Name", tag: "field",
                    details: "This field shall represent the name of the cast member.",
                    xref: "cluster§6.6.5.10.1"
                },
                {
                    name: "Role", tag: "field",
                    details: "This field shall represent the role of the cast member. Ex. Actor, Director.",
                    xref: "cluster§6.6.5.10.2"
                }
            ]
        },

        {
            name: "PageTokenStruct", tag: "datatype",
            details: "This object defines the pagination structure.",
            xref: "cluster§6.6.5.11",

            children: [
                {
                    name: "Limit", tag: "field",
                    details: "This field shall indicate the maximum number of entries that should be retrieved from the program " +
                        "guide in a single response. It allows clients to specify the size of the paginated result set based " +
                        "on their needs.",
                    xref: "cluster§6.6.5.11.1"
                },

                {
                    name: "After", tag: "field",
                    details: "This field shall indicate the cursor that pinpoints the start of the upcoming data page. In a " +
                        "Cursor- based pagination system, the field acts as a reference point, ensuring the set of results " +
                        "corresponds directly to the data following the specified cursor. In a Offset-based pagination " +
                        "system, the field, along with limit, indicate the offset from which entries in the program guide " +
                        "will be retrieved.",
                    xref: "cluster§6.6.5.11.2"
                },

                {
                    name: "Before", tag: "field",
                    details: "This field shall indicate the cursor that pinpoints the end of the upcoming data page. In a Cursor- " +
                        "based pagination system, the field acts as a reference point, ensuring the set of results " +
                        "corresponds directly to the data preceding the specified cursor. In a Offset-based pagination " +
                        "system, the field, along with limit, indicate the offset from which entries in the program guide " +
                        "will be retrieved.",
                    xref: "cluster§6.6.5.11.3"
                }
            ]
        },

        {
            name: "ChannelPagingStruct", tag: "datatype",
            details: "This object defines the paging structure that includes the previous and next pagination tokens.",
            xref: "cluster§6.6.5.12",

            children: [
                {
                    name: "PreviousToken", tag: "field",
                    details: "This field shall indicate the token to retrieve the preceding page. Absence of this field denotes " +
                        "the response as the initial page.",
                    xref: "cluster§6.6.5.12.1"
                },

                {
                    name: "NextToken", tag: "field",
                    details: "This field shall indicate the token to retrieve the next page. Absence of this field denotes the " +
                        "response as the last page.",
                    xref: "cluster§6.6.5.12.2"
                }
            ]
        }
    ]
});
