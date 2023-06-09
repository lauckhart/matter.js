/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../internal.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0506, name: "MediaPlayback",
    description: "Media Playback",
    details: "This cluster provides an interface for controlling Media Playback (PLAY, PAUSE, etc) on a media device such as a TV or Speaker.",
    children: [
        AttributeElement({
            id: 0x0000, name: "MediaPlaybackState", base: "CurrentState",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0001, name: "MediaPlaybackStartTime", base: "StartTime",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0002, name: "MediaPlaybackDuration", base: "Duration",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0003, name: "MediaPlaybackPlaybackPosition", base: "SampledPosition",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0004, name: "MediaPlaybackPlaybackSpeed", base: "PlaybackSpeed",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0005, name: "MediaPlaybackPlaybackSeekRangeEnd", base: "SeekRangeEnd",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0006, name: "MediaPlaybackPlaybackSeekRangeStart", base: "SeekRangeStart",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        CommandElement({
            id: 0x0000, name: "Play", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0001, name: "Pause", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0002, name: "Stop", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0003, name: "StartOver", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0004, name: "Previous", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0005, name: "Next", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0006, name: "Rewind", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0007, name: "FastForward", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0008, name: "SkipForward", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "PlaybackResponse",
            children: [
                DatatypeElement({
                    name: "DeltaPositionMilliseconds", base: "INT64U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "DeltaPositionMilliseconds", base: "INT64U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0009, name: "SkipBackward", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "PlaybackResponse",
            children: [
                DatatypeElement({
                    name: "DeltaPositionMilliseconds", base: "INT64U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "DeltaPositionMilliseconds", base: "INT64U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000b, name: "Seek", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "PlaybackResponse",
            children: [
                DatatypeElement({
                    name: "Position", base: "INT64U",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Position", base: "INT64U",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000a, name: "PlaybackResponse", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "MediaPlaybackStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Status", base: "MediaPlaybackStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Data", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "Data", base: "CHAR_STRING",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        })
    ]
}))