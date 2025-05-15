/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterDefinition } from "../MatterDefinition.js";
import {
    ClusterElement as Cluster,
    AttributeElement as Attribute,
    FieldElement as Field,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const Channel = Cluster(
    { id: 0x504, name: "Channel" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 2 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "CL", constraint: "0", description: "ChannelList" }),
        Field({ name: "LI", constraint: "1", description: "LineupInfo" }),
        Field({ name: "EG", constraint: "2", description: "ElectronicGuide" }),
        Field({ name: "RP", constraint: "3", description: "RecordProgram" })
    ),

    Attribute(
        { id: 0x0, name: "ChannelList", type: "list", access: "R V", conformance: "CL", default: [] },
        Field({ name: "entry", type: "ChannelInfoStruct" })
    ),
    Attribute({
        id: 0x1, name: "Lineup", type: "LineupInfoStruct",
        access: "R V", conformance: "LI", constraint: "desc", default: null, quality: "X"
    }),
    Attribute({
        id: 0x2, name: "CurrentChannel", type: "ChannelInfoStruct",
        access: "R V", conformance: "O", constraint: "desc", default: null, quality: "X"
    }),

    Command(
        {
            id: 0x0, name: "ChangeChannel",
            access: "O", conformance: "CL | LI", direction: "request", response: "ChangeChannelResponse"
        },
        Field({ id: 0x0, name: "Match", type: "string", conformance: "M" })
    ),

    Command(
        { id: 0x1, name: "ChangeChannelResponse", conformance: "CL | LI", direction: "response" },
        Field({ id: 0x0, name: "Status", type: "StatusEnum", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "Data", type: "string", conformance: "O", constraint: "any" })
    ),

    Command(
        {
            id: 0x2, name: "ChangeChannelByNumber",
            access: "O", conformance: "M", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "MajorNumber", type: "uint16", conformance: "M" }),
        Field({ id: 0x1, name: "MinorNumber", type: "uint16", conformance: "M" })
    ),

    Command(
        { id: 0x3, name: "SkipChannel", access: "O", conformance: "M", direction: "request", response: "status" },
        Field({ id: 0x0, name: "Count", type: "int16", conformance: "M" })
    ),

    Command(
        {
            id: 0x4, name: "GetProgramGuide",
            access: "O", conformance: "EG", direction: "request", response: "ProgramGuideResponse"
        },
        Field({ id: 0x0, name: "StartTime", type: "epoch-s", conformance: "M" }),
        Field({ id: 0x1, name: "EndTime", type: "epoch-s", conformance: "M" }),
        Field(
            { id: 0x2, name: "ChannelList", type: "list", conformance: "O", constraint: "max 255", default: [] },
            Field({ name: "entry", type: "ChannelInfoStruct" })
        ),
        Field({ id: 0x3, name: "PageToken", type: "PageTokenStruct", conformance: "O", default: null, quality: "X" }),
        Field({ id: 0x5, name: "RecordingFlag", type: "RecordingFlagBitmap", conformance: "O", default: null, quality: "X" }),
        Field(
            { id: 0x6, name: "ExternalIdList", type: "list", conformance: "O", constraint: "max 255", default: [] },
            Field({ name: "entry", type: "ContentLauncher.AdditionalInfoStruct" })
        ),
        Field({ id: 0x7, name: "Data", type: "octstr", conformance: "O", constraint: "max 8092" })
    ),

    Command(
        { id: 0x5, name: "ProgramGuideResponse", conformance: "EG", direction: "response" },
        Field({ id: 0x0, name: "Paging", type: "ChannelPagingStruct", conformance: "M" }),
        Field(
            { id: 0x1, name: "ProgramList", type: "list", conformance: "M", default: [] },
            Field({ name: "entry", type: "ProgramStruct" })
        )
    ),

    Command(
        {
            id: 0x6, name: "RecordProgram",
            access: "O", conformance: "RP & EG", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "ProgramIdentifier", type: "string", conformance: "M", constraint: "max 255" }),
        Field({ id: 0x1, name: "ShouldRecordSeries", type: "bool", conformance: "M" }),
        Field(
            { id: 0x2, name: "ExternalIdList", type: "list", conformance: "O", constraint: "max 255", default: [] },
            Field({ name: "entry", type: "ContentLauncher.AdditionalInfoStruct" })
        ),
        Field({ id: 0x3, name: "Data", type: "octstr", conformance: "O", constraint: "max 8092" })
    ),

    Command(
        {
            id: 0x7, name: "CancelRecordProgram",
            access: "O", conformance: "RP & EG", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "ProgramIdentifier", type: "string", conformance: "M", constraint: "max 255" }),
        Field({ id: 0x1, name: "ShouldRecordSeries", type: "bool", conformance: "M" }),
        Field(
            { id: 0x2, name: "ExternalIdList", type: "list", conformance: "O", constraint: "max 255", default: [] },
            Field({ name: "entry", type: "ContentLauncher.AdditionalInfoStruct" })
        ),
        Field({ id: 0x3, name: "Data", type: "octstr", conformance: "O", constraint: "max 8092" })
    ),

    Datatype(
        { name: "RecordingFlagBitmap", type: "map8" },
        Field({ name: "Scheduled", constraint: "0" }),
        Field({ name: "RecordSeries", constraint: "1" }),
        Field({ name: "Recorded", constraint: "2" })
    ),

    Datatype({ name: "LineupInfoTypeEnum", type: "enum8" }, Field({ id: 0x0, name: "Mso", conformance: "M" })),

    Datatype(
        { name: "StatusEnum", type: "enum8" },
        Field({ id: 0x0, name: "Success", conformance: "M" }),
        Field({ id: 0x1, name: "MultipleMatches", conformance: "M" }),
        Field({ id: 0x2, name: "NoMatches", conformance: "M" })
    ),

    Datatype(
        { name: "ChannelTypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Satellite", conformance: "M" }),
        Field({ id: 0x1, name: "Cable", conformance: "M" }),
        Field({ id: 0x2, name: "Terrestrial", conformance: "M" }),
        Field({ id: 0x3, name: "Ott", conformance: "M" })
    ),

    Datatype(
        { name: "ChannelInfoStruct", type: "struct" },
        Field({ id: 0x0, name: "MajorNumber", type: "uint16", conformance: "M" }),
        Field({ id: 0x1, name: "MinorNumber", type: "uint16", conformance: "M" }),
        Field({ id: 0x2, name: "Name", type: "string", conformance: "O" }),
        Field({ id: 0x3, name: "CallSign", type: "string", conformance: "O" }),
        Field({ id: 0x4, name: "AffiliateCallSign", type: "string", conformance: "O" }),
        Field({ id: 0x5, name: "Identifier", type: "string", conformance: "O" }),
        Field({ id: 0x6, name: "Type", type: "ChannelTypeEnum", conformance: "O" })
    ),

    Datatype(
        { name: "LineupInfoStruct", type: "struct" },
        Field({ id: 0x0, name: "OperatorName", type: "string", conformance: "M" }),
        Field({ id: 0x1, name: "LineupName", type: "string", conformance: "O" }),
        Field({ id: 0x2, name: "PostalCode", type: "string", conformance: "O" }),
        Field({ id: 0x3, name: "LineupInfoType", type: "LineupInfoTypeEnum", conformance: "M", constraint: "desc" })
    ),

    Datatype(
        { name: "ProgramStruct", type: "struct" },
        Field({ id: 0x0, name: "Identifier", type: "string", conformance: "M", constraint: "max 255" }),
        Field({ id: 0x1, name: "Channel", type: "ChannelInfoStruct", conformance: "M" }),
        Field({ id: 0x2, name: "StartTime", type: "epoch-s", conformance: "M" }),
        Field({ id: 0x3, name: "EndTime", type: "epoch-s", conformance: "M" }),
        Field({ id: 0x4, name: "Title", type: "string", conformance: "M", constraint: "max 255" }),
        Field({ id: 0x5, name: "Subtitle", type: "string", conformance: "O", constraint: "max 255" }),
        Field({ id: 0x6, name: "Description", type: "string", conformance: "O", constraint: "max 8192" }),

        Field(
            {
                id: 0x7, name: "AudioLanguages", type: "list",
                conformance: "O", constraint: "max 10[max 50]", default: []
            },
            Field({ name: "entry", type: "string" })
        ),

        Field(
            { id: 0x8, name: "Ratings", type: "list", conformance: "O", constraint: "max 255", default: [] },
            Field({ name: "entry", type: "string" })
        ),
        Field({ id: 0x9, name: "ThumbnailUrl", type: "string", conformance: "O", constraint: "max 8192" }),
        Field({ id: 0xa, name: "PosterArtUrl", type: "string", conformance: "O", constraint: "max 8192" }),
        Field({ id: 0xb, name: "DvbiUrl", type: "string", conformance: "O", constraint: "max 8192" }),
        Field({ id: 0xc, name: "ReleaseDate", type: "string", conformance: "O", constraint: "max 30" }),
        Field({ id: 0xd, name: "ParentalGuidanceText", type: "string", conformance: "O", constraint: "max 255" }),
        Field({ id: 0xe, name: "RecordingFlag", type: "RecordingFlagBitmap", conformance: "RP" }),
        Field({ id: 0xf, name: "SeriesInfo", type: "SeriesInfoStruct", conformance: "O", default: null, quality: "X" }),
        Field(
            { id: 0x10, name: "CategoryList", type: "list", conformance: "O", constraint: "max 255", default: [] },
            Field({ name: "entry", type: "ProgramCategoryStruct" })
        ),
        Field(
            { id: 0x11, name: "CastList", type: "list", conformance: "O", constraint: "max 255", default: [] },
            Field({ name: "entry", type: "ProgramCastStruct" })
        ),
        Field(
            { id: 0x12, name: "ExternalIdList", type: "list", conformance: "O", constraint: "max 255", default: [] },
            Field({ name: "entry", type: "ContentLauncher.AdditionalInfoStruct" })
        )
    ),

    Datatype(
        { name: "ProgramCategoryStruct", type: "struct" },
        Field({ id: 0x0, name: "Category", type: "string", conformance: "M", constraint: "max 256" }),
        Field({ id: 0x1, name: "SubCategory", type: "string", conformance: "O", constraint: "max 256" })
    ),
    Datatype(
        { name: "SeriesInfoStruct", type: "struct" },
        Field({ id: 0x0, name: "Season", type: "string", conformance: "M", constraint: "max 256" }),
        Field({ id: 0x1, name: "Episode", type: "string", conformance: "M", constraint: "max 256" })
    ),
    Datatype(
        { name: "ProgramCastStruct", type: "struct" },
        Field({ id: 0x0, name: "Name", type: "string", conformance: "M", constraint: "max 256" }),
        Field({ id: 0x1, name: "Role", type: "string", conformance: "M", constraint: "max 256" })
    ),

    Datatype(
        { name: "PageTokenStruct", type: "struct" },
        Field({ id: 0x0, name: "Limit", type: "uint16", conformance: "O", default: 0 }),
        Field({ id: 0x1, name: "After", type: "string", conformance: "O", constraint: "max 8192" }),
        Field({ id: 0x2, name: "Before", type: "string", conformance: "O", constraint: "max 8192" })
    ),

    Datatype(
        { name: "ChannelPagingStruct", type: "struct" },
        Field({ id: 0x0, name: "PreviousToken", type: "PageTokenStruct", conformance: "O", default: null, quality: "X" }),
        Field({ id: 0x1, name: "NextToken", type: "PageTokenStruct", conformance: "O", default: null, quality: "X" })
    )
);

MatterDefinition.children.push(Channel);
