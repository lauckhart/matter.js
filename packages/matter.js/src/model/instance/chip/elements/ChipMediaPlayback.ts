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
            id: 0x0000, name: "MediaPlaybackState", base: "PlaybackStateEnum",
            access: { rw: "R" }, conformance: [ "M" ]
        }),

        AttributeElement({
            id: 0x0001, name: "MediaPlaybackStartTime", base: "epochUs",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0002, name: "MediaPlaybackDuration", base: "uint64",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0003, name: "MediaPlaybackPlaybackPosition", base: "PlaybackPositionStruct",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0004, name: "MediaPlaybackPlaybackSpeed", base: "single",
            access: { rw: "R" }, conformance: [ "O" ]
        }),

        AttributeElement({
            id: 0x0005, name: "MediaPlaybackPlaybackSeekRangeEnd", base: "uint64",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0006, name: "MediaPlaybackPlaybackSeekRangeStart", base: "uint64",
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
                    name: "DeltaPositionMilliseconds", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "DeltaPositionMilliseconds", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0009, name: "SkipBackward", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "PlaybackResponse",
            children: [
                DatatypeElement({
                    name: "DeltaPositionMilliseconds", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "DeltaPositionMilliseconds", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000b, name: "Seek", base: "struct",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "PlaybackResponse",
            children: [
                DatatypeElement({
                    name: "Position", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Position", base: "uint64",
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
                    name: "Data", base: "string",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "Data", base: "string",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        DatatypeElement({
            name: "PlaybackPositionStruct", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "UpdatedAt", base: "epochUs",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "UpdatedAt", base: "epochUs",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Position", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "Position", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                })
            ]
        }),

        DatatypeElement({
            name: "PlaybackStateEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "Playing", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Playing", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Paused", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Paused", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NotPlaying", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NotPlaying", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Buffering", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Buffering", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "MediaPlaybackStatusEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "Success", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "Success", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "InvalidStateForCommand", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "InvalidStateForCommand", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NotAllowed", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NotAllowed", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NotActive", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "NotActive", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "SpeedOutOfRange", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "SpeedOutOfRange", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "SeekOutOfRange", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "SeekOutOfRange", base: "uint8",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        DatatypeElement({
            name: "MediaPlaybackFeature", base: "map32",
            access: { rw: "R" }, conformance: [ "M" ]
        })
    ]
}));
