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

export const ContentLauncher = Cluster(
    { id: 0x50a, name: "ContentLauncher" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 2 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "CS", constraint: "0" }),
        Field({ name: "UP", constraint: "1" }),
        Field({ name: "AS", constraint: "2" }),
        Field({ name: "TT", constraint: "3" }),
        Field({ name: "AT", constraint: "4" })
    ),

    Attribute(
        {
            id: 0x0, name: "AcceptHeader", type: "list",
            access: "R V", conformance: "UP", constraint: "max 100[max 1024]", default: [], quality: "N"
        },
        Field({ name: "entry", type: "string" })
    ),

    Attribute({
        id: 0x1, name: "SupportedStreamingProtocols", type: "SupportedProtocolsBitmap",
        access: "R V", conformance: "UP", default: 0, quality: "N"
    }),

    Command(
        {
            id: 0x0, name: "LaunchContent",
            access: "O", conformance: "CS", direction: "request", response: "LauncherResponse"
        },
        Field({ id: 0x0, name: "Search", type: "ContentSearchStruct", conformance: "M", constraint: "all" }),
        Field({ id: 0x1, name: "AutoPlay", type: "bool", conformance: "M", constraint: "all" }),
        Field({ id: 0x2, name: "Data", type: "string", conformance: "O" }),
        Field({ id: 0x3, name: "PlaybackPreferences", type: "PlaybackPreferencesStruct", conformance: "O" }),
        Field({ id: 0x4, name: "UseCurrentContext", type: "bool", conformance: "O", constraint: "all", default: true })
    ),

    Command(
        {
            id: 0x1, name: "LaunchUrl",
            access: "O", conformance: "UP", direction: "request", response: "LauncherResponse"
        },
        Field({ id: 0x0, name: "ContentUrl", type: "string", conformance: "M", constraint: "any" }),
        Field({ id: 0x1, name: "DisplayString", type: "string", conformance: "O", constraint: "any" }),
        Field({
            id: 0x2, name: "BrandingInformation", type: "BrandingInformationStruct",
            conformance: "O", constraint: "any"
        }),
        Field({
            id: 0x3, name: "PlaybackPreferences", type: "PlaybackPreferencesStruct",
            conformance: "O", constraint: "any"
        })
    ),

    Command(
        { id: 0x2, name: "LauncherResponse", conformance: "CS | UP", direction: "response" },
        Field({ id: 0x0, name: "Status", type: "StatusEnum", conformance: "M" }),
        Field({ id: 0x1, name: "Data", type: "string", conformance: "O" })
    ),
    Datatype(
        { name: "SupportedProtocolsBitmap", type: "map32" },
        Field({ name: "Dash", constraint: "0" }),
        Field({ name: "Hls", constraint: "1" })
    ),

    Datatype(
        { name: "StatusEnum", type: "enum8" },
        Field({ id: 0x0, name: "Success", conformance: "M" }),
        Field({ id: 0x1, name: "UrlNotAvailable", conformance: "M" }),
        Field({ id: 0x2, name: "AuthFailed", conformance: "M" }),
        Field({ id: 0x3, name: "TextTrackNotAvailable", conformance: "TT" }),
        Field({ id: 0x4, name: "AudioTrackNotAvailable", conformance: "AT" })
    ),

    Datatype(
        { name: "ParameterEnum", type: "enum8" },
        Field({ id: 0x0, name: "Actor", conformance: "M" }),
        Field({ id: 0x1, name: "Channel", conformance: "M" }),
        Field({ id: 0x2, name: "Character", conformance: "M" }),
        Field({ id: 0x3, name: "Director", conformance: "M" }),
        Field({ id: 0x4, name: "Event", conformance: "M" }),
        Field({ id: 0x5, name: "Franchise", conformance: "M" }),
        Field({ id: 0x6, name: "Genre", conformance: "M" }),
        Field({ id: 0x7, name: "League", conformance: "M" }),
        Field({ id: 0x8, name: "Popularity", conformance: "M" }),
        Field({ id: 0x9, name: "Provider", conformance: "M" }),
        Field({ id: 0xa, name: "Sport", conformance: "M" }),
        Field({ id: 0xb, name: "SportsTeam", conformance: "M" }),
        Field({ id: 0xc, name: "Type", conformance: "M" }),
        Field({ id: 0xd, name: "Video", conformance: "M" }),
        Field({ id: 0xe, name: "Season", conformance: "O" }),
        Field({ id: 0xf, name: "Episode", conformance: "O" }),
        Field({ id: 0x10, name: "Any", conformance: "O" })
    ),

    Datatype(
        { name: "MetricTypeEnum", type: "enum8" },
        Field({ id: 0x0, name: "Pixels", conformance: "M" }),
        Field({ id: 0x1, name: "Percentage", conformance: "M" })
    ),
    Datatype(
        { name: "AdditionalInfoStruct", type: "struct" },
        Field({ id: 0x0, name: "Name", type: "string", conformance: "M", constraint: "max 256" }),
        Field({ id: 0x1, name: "Value", type: "string", conformance: "M", constraint: "max 8192" })
    ),

    Datatype(
        { name: "ParameterStruct", type: "struct" },
        Field({ id: 0x0, name: "Type", type: "ParameterEnum", conformance: "M" }),
        Field({ id: 0x1, name: "Value", type: "string", conformance: "M", constraint: "max 1024" }),
        Field(
            { id: 0x2, name: "ExternalIdList", type: "list", conformance: "O", default: [] },
            Field({ name: "entry", type: "AdditionalInfoStruct" })
        )
    ),

    Datatype(
        { name: "ContentSearchStruct", type: "struct" },
        Field(
            { id: 0x0, name: "ParameterList", type: "list", conformance: "M" },
            Field({ name: "entry", type: "ParameterStruct" })
        )
    ),

    Datatype(
        { name: "DimensionStruct", type: "struct" },
        Field({ id: 0x0, name: "Width", type: "double", conformance: "M" }),
        Field({ id: 0x1, name: "Height", type: "double", conformance: "M" }),
        Field({ id: 0x2, name: "Metric", type: "MetricTypeEnum", conformance: "M" })
    ),

    Datatype(
        { name: "StyleInformationStruct", type: "struct" },
        Field({ id: 0x0, name: "ImageUrl", type: "string", conformance: "O", constraint: "max 8192" }),
        Field({ id: 0x1, name: "Color", type: "string", conformance: "O", constraint: "7, 9" }),
        Field({ id: 0x2, name: "Size", type: "DimensionStruct", conformance: "O" })
    ),

    Datatype(
        { name: "BrandingInformationStruct", type: "struct" },
        Field({ id: 0x0, name: "ProviderName", type: "string", conformance: "M", constraint: "max 256" }),
        Field({ id: 0x1, name: "Background", type: "StyleInformationStruct", conformance: "O" }),
        Field({ id: 0x2, name: "Logo", type: "StyleInformationStruct", conformance: "O" }),
        Field({ id: 0x3, name: "ProgressBar", type: "StyleInformationStruct", conformance: "O" }),
        Field({ id: 0x4, name: "Splash", type: "StyleInformationStruct", conformance: "O" }),
        Field({ id: 0x5, name: "WaterMark", type: "StyleInformationStruct", conformance: "O" })
    ),

    Datatype(
        { name: "PlaybackPreferencesStruct", type: "struct" },
        Field({ id: 0x0, name: "PlaybackPosition", type: "uint64", conformance: "AS", quality: "X" }),
        Field({ id: 0x1, name: "TextTrack", type: "TrackPreferenceStruct", conformance: "TT", quality: "X" }),
        Field(
            { id: 0x2, name: "AudioTracks", type: "list", conformance: "AT", quality: "X" },
            Field({ name: "entry", type: "TrackPreferenceStruct" })
        )
    ),

    Datatype(
        { name: "TrackPreferenceStruct", type: "struct" },
        Field({ id: 0x0, name: "LanguageCode", type: "string", conformance: "M", constraint: "max 32" }),
        Field(
            { id: 0x1, name: "Characteristics", type: "list", conformance: "O", default: null, quality: "X" },
            Field({ name: "entry", type: "MediaPlayback.CharacteristicEnum" })
        ),
        Field({ id: 0x2, name: "AudioOutputIndex", type: "uint8", conformance: "AT", quality: "X" })
    )
);

MatterDefinition.children.push(ContentLauncher);
