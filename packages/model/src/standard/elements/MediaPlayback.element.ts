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
    { name: "MediaPlayback", id: 0x506 },
    Attribute({ name: "ClusterRevision", id: 0xfffd, type: "ClusterRevision", default: 2 }),

    Attribute(
        { name: "FeatureMap", id: 0xfffc, type: "FeatureMap" },
        Field({ name: "AS", constraint: "0", longName: "AdvancedSeek" }),
        Field({ name: "VS", constraint: "1", longName: "VariableSpeed" }),
        Field({ name: "TT", constraint: "2", longName: "TextTracks" }),
        Field({ name: "AT", constraint: "3", longName: "AudioTracks" }),
        Field({ name: "AA", constraint: "4", longName: "AudioAdvance" })
    ),

    Attribute({ name: "CurrentState", id: 0x0, type: "PlaybackStateEnum", constraint: "desc", conformance: "M", access: "R V" }),
    Attribute({
        name: "StartTime", id: 0x1, type: "epoch-us",
        default: null, constraint: "desc", conformance: "AS", access: "R V", quality: "X"
    }),
    Attribute({
        name: "Duration", id: 0x2, type: "uint64",
        default: null, constraint: "desc", conformance: "AS", access: "R V", quality: "X"
    }),
    Attribute({
        name: "SampledPosition", id: 0x3, type: "PlaybackPositionStruct",
        default: null, constraint: "desc", conformance: "AS", access: "R V", quality: "X"
    }),
    Attribute({
        name: "PlaybackSpeed", id: 0x4, type: "single",
        default: 0, constraint: "desc", conformance: "AS", access: "R V"
    }),
    Attribute({
        name: "SeekRangeEnd", id: 0x5, type: "uint64",
        default: null, constraint: "desc", conformance: "AS", access: "R V", quality: "X"
    }),
    Attribute({
        name: "SeekRangeStart", id: 0x6, type: "uint64",
        default: null, constraint: "desc", conformance: "AS", access: "R V", quality: "X"
    }),
    Attribute({
        name: "ActiveAudioTrack", id: 0x7, type: "TrackStruct",
        default: null, constraint: "desc", conformance: "AT", access: "R V", quality: "X"
    }),

    Attribute(
        {
            name: "AvailableAudioTracks", id: 0x8, type: "list",
            default: null, constraint: "desc", conformance: "AT", access: "R V", quality: "X"
        },
        Field({ name: "entry", type: "TrackStruct" })
    ),

    Attribute({
        name: "ActiveTextTrack", id: 0x9, type: "TrackStruct",
        default: null, constraint: "desc", conformance: "TT", access: "R V", quality: "X"
    }),

    Attribute(
        {
            name: "AvailableTextTracks", id: 0xa, type: "list",
            default: null, constraint: "desc", conformance: "TT", access: "R V", quality: "X"
        },
        Field({ name: "entry", type: "TrackStruct" })
    ),

    Event(
        { name: "StateChanged", id: 0x0, conformance: "O", access: "V", priority: "info" },
        Field({ name: "CurrentState", id: 0x0, type: "PlaybackStateEnum", constraint: "desc", conformance: "M" }),
        Field({ name: "StartTime", id: 0x1, type: "epoch-us", constraint: "desc", conformance: "AS" }),
        Field({ name: "Duration", id: 0x2, type: "uint64", constraint: "desc", conformance: "AS" }),
        Field({ name: "SampledPosition", id: 0x3, type: "PlaybackPositionStruct", constraint: "desc", conformance: "AS" }),
        Field({ name: "PlaybackSpeed", id: 0x4, type: "single", constraint: "desc", conformance: "AS" }),
        Field({ name: "SeekRangeEnd", id: 0x5, type: "uint64", constraint: "desc", conformance: "AS" }),
        Field({ name: "SeekRangeStart", id: 0x6, type: "uint64", constraint: "desc", conformance: "AS" }),
        Field({ name: "Data", id: 0x7, type: "octstr", constraint: "max 900", conformance: "O" }),
        Field({ name: "AudioAdvanceUnmuted", id: 0x8, type: "bool", default: false, constraint: "desc", conformance: "AA" })
    ),

    Command({ name: "Play", id: 0x0, conformance: "M", access: "O", direction: "request", response: "PlaybackResponse" }),
    Command({ name: "Pause", id: 0x1, conformance: "M", access: "O", direction: "request", response: "PlaybackResponse" }),
    Command({ name: "Stop", id: 0x2, conformance: "M", access: "O", direction: "request", response: "PlaybackResponse" }),
    Command({ name: "StartOver", id: 0x3, conformance: "O", access: "O", direction: "request", response: "PlaybackResponse" }),
    Command({ name: "Previous", id: 0x4, conformance: "O", access: "O", direction: "request", response: "PlaybackResponse" }),
    Command({ name: "Next", id: 0x5, conformance: "O", access: "O", direction: "request", response: "PlaybackResponse" }),
    Command(
        { name: "Rewind", id: 0x6, conformance: "VS", access: "O", direction: "request", response: "PlaybackResponse" },
        Field({ name: "AudioAdvanceUnmuted", id: 0x0, type: "bool", default: false, conformance: "AA" })
    ),

    Command(
        {
            name: "FastForward", id: 0x7,
            conformance: "VS", access: "O", direction: "request", response: "PlaybackResponse"
        },
        Field({ name: "AudioAdvanceUnmuted", id: 0x0, type: "bool", default: false, conformance: "AA" })
    ),

    Command(
        {
            name: "SkipForward", id: 0x8,
            conformance: "O", access: "O", direction: "request", response: "PlaybackResponse"
        },
        Field({ name: "DeltaPositionMilliseconds", id: 0x0, type: "uint64", conformance: "M" })
    ),

    Command(
        {
            name: "SkipBackward", id: 0x9,
            conformance: "O", access: "O", direction: "request", response: "PlaybackResponse"
        },
        Field({ name: "DeltaPositionMilliseconds", id: 0x0, type: "uint64", conformance: "M" })
    ),

    Command(
        { name: "PlaybackResponse", id: 0xa, conformance: "M", direction: "response" },
        Field({ name: "Status", id: 0x0, type: "StatusEnum", constraint: "desc", conformance: "M" }),
        Field({ name: "Data", id: 0x1, type: "string", constraint: "any", conformance: "O" })
    ),
    Command(
        { name: "Seek", id: 0xb, conformance: "AS", access: "O", direction: "request", response: "PlaybackResponse" },
        Field({ name: "Position", id: 0x0, type: "uint64", conformance: "M" })
    ),

    Command(
        {
            name: "ActivateAudioTrack", id: 0xc,
            conformance: "AT", access: "O", direction: "request", response: "status"
        },
        Field({ name: "TrackId", id: 0x0, type: "string", constraint: "max 32", conformance: "M" }),
        Field({ name: "AudioOutputIndex", id: 0x1, type: "uint8", conformance: "AT", quality: "X" })
    ),

    Command(
        {
            name: "ActivateTextTrack", id: 0xd,
            conformance: "TT", access: "O", direction: "request", response: "status"
        },
        Field({ name: "TrackId", id: 0x0, type: "string", constraint: "max 32", conformance: "M" })
    ),

    Command({ name: "DeactivateTextTrack", id: 0xe, conformance: "TT", access: "O", direction: "request", response: "status" }),

    Datatype(
        { name: "PlaybackStateEnum", type: "enum8" },
        Field({ name: "Playing", id: 0x0, conformance: "M" }),
        Field({ name: "Paused", id: 0x1, conformance: "M" }),
        Field({ name: "NotPlaying", id: 0x2, conformance: "M" }),
        Field({ name: "Buffering", id: 0x3, conformance: "M" })
    ),

    Datatype(
        { name: "StatusEnum", type: "enum8" },
        Field({ name: "Success", id: 0x0, conformance: "M" }),
        Field({ name: "InvalidStateForCommand", id: 0x1, conformance: "M" }),
        Field({ name: "NotAllowed", id: 0x2, conformance: "M" }),
        Field({ name: "NotActive", id: 0x3, conformance: "M" }),
        Field({ name: "SpeedOutOfRange", id: 0x4, conformance: "VS" }),
        Field({ name: "SeekOutOfRange", id: 0x5, conformance: "AS" })
    ),

    Datatype(
        { name: "CharacteristicEnum", type: "enum8" },
        Field({ name: "ForcedSubtitles", id: 0x0, conformance: "M" }),
        Field({ name: "DescribesVideo", id: 0x1, conformance: "M" }),
        Field({ name: "EasyToRead", id: 0x2, conformance: "M" }),
        Field({ name: "FrameBased", id: 0x3, conformance: "M" }),
        Field({ name: "MainProgram", id: 0x4, conformance: "M" }),
        Field({ name: "OriginalContent", id: 0x5, conformance: "M" }),
        Field({ name: "VoiceOverTranslation", id: 0x6, conformance: "M" }),
        Field({ name: "Caption", id: 0x7, conformance: "M" }),
        Field({ name: "Subtitle", id: 0x8, conformance: "M" }),
        Field({ name: "Alternate", id: 0x9, conformance: "M" }),
        Field({ name: "Supplementary", id: 0xa, conformance: "M" }),
        Field({ name: "Commentary", id: 0xb, conformance: "M" }),
        Field({ name: "DubbedTranslation", id: 0xc, conformance: "M" }),
        Field({ name: "Description", id: 0xd, conformance: "M" }),
        Field({ name: "Metadata", id: 0xe, conformance: "M" }),
        Field({ name: "EnhancedAudioIntelligibility", id: 0xf, conformance: "M" }),
        Field({ name: "Emergency", id: 0x10, conformance: "M" }),
        Field({ name: "Karaoke", id: 0x11, conformance: "M" })
    ),

    Datatype(
        { name: "PlaybackPositionStruct", type: "struct" },
        Field({ name: "UpdatedAt", id: 0x0, type: "epoch-us", conformance: "M" }),
        Field({ name: "Position", id: 0x1, type: "uint64", conformance: "M", quality: "X" })
    ),
    Datatype(
        { name: "TrackStruct", type: "struct" },
        Field({ name: "Id", id: 0x0, type: "string", constraint: "max 32", conformance: "M" }),
        Field({ name: "TrackAttributes", id: 0x1, type: "TrackAttributesStruct", conformance: "M" })
    ),

    Datatype(
        { name: "TrackAttributesStruct", type: "struct" },
        Field({ name: "LanguageCode", id: 0x0, type: "string", constraint: "max 32", conformance: "M" }),
        Field(
            { name: "Characteristics", id: 0x1, type: "list", default: null, conformance: "O", quality: "X" },
            Field({ name: "entry", type: "CharacteristicEnum" })
        ),
        Field({
            name: "DisplayName", id: 0x2, type: "string",
            default: null, constraint: "max 256", conformance: "O", quality: "X"
        })
    )
);

MatterDefinition.children.push(MediaPlayback);
