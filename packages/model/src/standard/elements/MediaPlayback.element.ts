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
    EventElement as Event,
    CommandElement as Command,
    DatatypeElement as Datatype
} from "../../elements/index.js";

export const MediaPlayback = Cluster(
    { id: 0x506, name: "MediaPlayback" },
    Attribute({ id: 0xfffd, name: "ClusterRevision", type: "ClusterRevision", default: 2 }),

    Attribute(
        { id: 0xfffc, name: "FeatureMap", type: "FeatureMap" },
        Field({ name: "AS", constraint: "0", description: "AdvancedSeek" }),
        Field({ name: "VS", constraint: "1", description: "VariableSpeed" }),
        Field({ name: "TT", constraint: "2", description: "TextTracks" }),
        Field({ name: "AT", constraint: "3", description: "AudioTracks" }),
        Field({ name: "AA", constraint: "4", description: "AudioAdvance" })
    ),

    Attribute({ id: 0x0, name: "CurrentState", type: "PlaybackStateEnum", access: "R V", conformance: "M", constraint: "desc" }),
    Attribute({
        id: 0x1, name: "StartTime", type: "epoch-us",
        access: "R V", conformance: "AS", constraint: "desc", default: null, quality: "X"
    }),
    Attribute({
        id: 0x2, name: "Duration", type: "uint64",
        access: "R V", conformance: "AS", constraint: "desc", default: null, quality: "X"
    }),
    Attribute({
        id: 0x3, name: "SampledPosition", type: "PlaybackPositionStruct",
        access: "R V", conformance: "AS", constraint: "desc", default: null, quality: "X"
    }),
    Attribute({
        id: 0x4, name: "PlaybackSpeed", type: "single",
        access: "R V", conformance: "AS", constraint: "desc", default: 0
    }),
    Attribute({
        id: 0x5, name: "SeekRangeEnd", type: "uint64",
        access: "R V", conformance: "AS", constraint: "desc", default: null, quality: "X"
    }),
    Attribute({
        id: 0x6, name: "SeekRangeStart", type: "uint64",
        access: "R V", conformance: "AS", constraint: "desc", default: null, quality: "X"
    }),
    Attribute({
        id: 0x7, name: "ActiveAudioTrack", type: "TrackStruct",
        access: "R V", conformance: "AT", constraint: "desc", default: null, quality: "X"
    }),

    Attribute(
        {
            id: 0x8, name: "AvailableAudioTracks", type: "list",
            access: "R V", conformance: "AT", constraint: "desc", default: null, quality: "X"
        },
        Field({ name: "entry", type: "TrackStruct" })
    ),

    Attribute({
        id: 0x9, name: "ActiveTextTrack", type: "TrackStruct",
        access: "R V", conformance: "TT", constraint: "desc", default: null, quality: "X"
    }),

    Attribute(
        {
            id: 0xa, name: "AvailableTextTracks", type: "list",
            access: "R V", conformance: "TT", constraint: "desc", default: null, quality: "X"
        },
        Field({ name: "entry", type: "TrackStruct" })
    ),

    Event(
        { id: 0x0, name: "StateChanged", access: "V", conformance: "O", priority: "info" },
        Field({ id: 0x0, name: "CurrentState", type: "PlaybackStateEnum", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "StartTime", type: "epoch-us", conformance: "AS", constraint: "desc" }),
        Field({ id: 0x2, name: "Duration", type: "uint64", conformance: "AS", constraint: "desc" }),
        Field({ id: 0x3, name: "SampledPosition", type: "PlaybackPositionStruct", conformance: "AS", constraint: "desc" }),
        Field({ id: 0x4, name: "PlaybackSpeed", type: "single", conformance: "AS", constraint: "desc" }),
        Field({ id: 0x5, name: "SeekRangeEnd", type: "uint64", conformance: "AS", constraint: "desc" }),
        Field({ id: 0x6, name: "SeekRangeStart", type: "uint64", conformance: "AS", constraint: "desc" }),
        Field({ id: 0x7, name: "Data", type: "octstr", conformance: "O", constraint: "max 900" }),
        Field({ id: 0x8, name: "AudioAdvanceUnmuted", type: "bool", conformance: "AA", constraint: "desc", default: false })
    ),

    Command({ id: 0x0, name: "Play", access: "O", conformance: "M", direction: "request", response: "PlaybackResponse" }),
    Command({ id: 0x1, name: "Pause", access: "O", conformance: "M", direction: "request", response: "PlaybackResponse" }),
    Command({ id: 0x2, name: "Stop", access: "O", conformance: "M", direction: "request", response: "PlaybackResponse" }),
    Command({ id: 0x3, name: "StartOver", access: "O", conformance: "O", direction: "request", response: "PlaybackResponse" }),
    Command({ id: 0x4, name: "Previous", access: "O", conformance: "O", direction: "request", response: "PlaybackResponse" }),
    Command({ id: 0x5, name: "Next", access: "O", conformance: "O", direction: "request", response: "PlaybackResponse" }),
    Command(
        { id: 0x6, name: "Rewind", access: "O", conformance: "VS", direction: "request", response: "PlaybackResponse" },
        Field({ id: 0x0, name: "AudioAdvanceUnmuted", type: "bool", conformance: "AA", default: false })
    ),

    Command(
        {
            id: 0x7, name: "FastForward",
            access: "O", conformance: "VS", direction: "request", response: "PlaybackResponse"
        },
        Field({ id: 0x0, name: "AudioAdvanceUnmuted", type: "bool", conformance: "AA", default: false })
    ),

    Command(
        {
            id: 0x8, name: "SkipForward",
            access: "O", conformance: "O", direction: "request", response: "PlaybackResponse"
        },
        Field({ id: 0x0, name: "DeltaPositionMilliseconds", type: "uint64", conformance: "M" })
    ),

    Command(
        {
            id: 0x9, name: "SkipBackward",
            access: "O", conformance: "O", direction: "request", response: "PlaybackResponse"
        },
        Field({ id: 0x0, name: "DeltaPositionMilliseconds", type: "uint64", conformance: "M" })
    ),

    Command(
        { id: 0xa, name: "PlaybackResponse", conformance: "M", direction: "response" },
        Field({ id: 0x0, name: "Status", type: "StatusEnum", conformance: "M", constraint: "desc" }),
        Field({ id: 0x1, name: "Data", type: "string", conformance: "O", constraint: "any" })
    ),
    Command(
        { id: 0xb, name: "Seek", access: "O", conformance: "AS", direction: "request", response: "PlaybackResponse" },
        Field({ id: 0x0, name: "Position", type: "uint64", conformance: "M" })
    ),

    Command(
        {
            id: 0xc, name: "ActivateAudioTrack",
            access: "O", conformance: "AT", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "TrackId", type: "string", conformance: "M", constraint: "max 32" }),
        Field({ id: 0x1, name: "AudioOutputIndex", type: "uint8", conformance: "AT", quality: "X" })
    ),

    Command(
        {
            id: 0xd, name: "ActivateTextTrack",
            access: "O", conformance: "TT", direction: "request", response: "status"
        },
        Field({ id: 0x0, name: "TrackId", type: "string", conformance: "M", constraint: "max 32" })
    ),

    Command({ id: 0xe, name: "DeactivateTextTrack", access: "O", conformance: "TT", direction: "request", response: "status" }),

    Datatype(
        { name: "PlaybackStateEnum", type: "enum8" },
        Field({ id: 0x0, name: "Playing", conformance: "M" }),
        Field({ id: 0x1, name: "Paused", conformance: "M" }),
        Field({ id: 0x2, name: "NotPlaying", conformance: "M" }),
        Field({ id: 0x3, name: "Buffering", conformance: "M" })
    ),

    Datatype(
        { name: "StatusEnum", type: "enum8" },
        Field({ id: 0x0, name: "Success", conformance: "M" }),
        Field({ id: 0x1, name: "InvalidStateForCommand", conformance: "M" }),
        Field({ id: 0x2, name: "NotAllowed", conformance: "M" }),
        Field({ id: 0x3, name: "NotActive", conformance: "M" }),
        Field({ id: 0x4, name: "SpeedOutOfRange", conformance: "VS" }),
        Field({ id: 0x5, name: "SeekOutOfRange", conformance: "AS" })
    ),

    Datatype(
        { name: "CharacteristicEnum", type: "enum8" },
        Field({ id: 0x0, name: "ForcedSubtitles", conformance: "M" }),
        Field({ id: 0x1, name: "DescribesVideo", conformance: "M" }),
        Field({ id: 0x2, name: "EasyToRead", conformance: "M" }),
        Field({ id: 0x3, name: "FrameBased", conformance: "M" }),
        Field({ id: 0x4, name: "MainProgram", conformance: "M" }),
        Field({ id: 0x5, name: "OriginalContent", conformance: "M" }),
        Field({ id: 0x6, name: "VoiceOverTranslation", conformance: "M" }),
        Field({ id: 0x7, name: "Caption", conformance: "M" }),
        Field({ id: 0x8, name: "Subtitle", conformance: "M" }),
        Field({ id: 0x9, name: "Alternate", conformance: "M" }),
        Field({ id: 0xa, name: "Supplementary", conformance: "M" }),
        Field({ id: 0xb, name: "Commentary", conformance: "M" }),
        Field({ id: 0xc, name: "DubbedTranslation", conformance: "M" }),
        Field({ id: 0xd, name: "Description", conformance: "M" }),
        Field({ id: 0xe, name: "Metadata", conformance: "M" }),
        Field({ id: 0xf, name: "EnhancedAudioIntelligibility", conformance: "M" }),
        Field({ id: 0x10, name: "Emergency", conformance: "M" }),
        Field({ id: 0x11, name: "Karaoke", conformance: "M" })
    ),

    Datatype(
        { name: "PlaybackPositionStruct", type: "struct" },
        Field({ id: 0x0, name: "UpdatedAt", type: "epoch-us", conformance: "M" }),
        Field({ id: 0x1, name: "Position", type: "uint64", conformance: "M", quality: "X" })
    ),
    Datatype(
        { name: "TrackStruct", type: "struct" },
        Field({ id: 0x0, name: "Id", type: "string", conformance: "M", constraint: "max 32" }),
        Field({ id: 0x1, name: "TrackAttributes", type: "TrackAttributesStruct", conformance: "M" })
    ),

    Datatype(
        { name: "TrackAttributesStruct", type: "struct" },
        Field({ id: 0x0, name: "LanguageCode", type: "string", conformance: "M", constraint: "max 32" }),
        Field(
            { id: 0x1, name: "Characteristics", type: "list", conformance: "O", default: null, quality: "X" },
            Field({ name: "entry", type: "CharacteristicEnum" })
        ),
        Field({
            id: 0x2, name: "DisplayName", type: "string",
            conformance: "O", constraint: "max 256", default: null, quality: "X"
        })
    )
);

MatterDefinition.children.push(MediaPlayback);
