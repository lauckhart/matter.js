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
            id: 0x0000, name: "mediaPlaybackState", base: "PlaybackStateEnum",
            access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
        }),

        AttributeElement({
            id: 0x0001, name: "mediaPlaybackStartTime", base: "epochUs",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }, value: "0x00"
        }),

        AttributeElement({
            id: 0x0002, name: "mediaPlaybackDuration", base: "uint64",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }, value: "0"
        }),

        AttributeElement({
            id: 0x0003, name: "mediaPlaybackPlaybackPosition", base: "PlaybackPositionStruct",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0004, name: "mediaPlaybackPlaybackSpeed", base: "single",
            access: { rw: "R" }, conformance: [ "O" ], value: "0"
        }),

        AttributeElement({
            id: 0x0005, name: "mediaPlaybackPlaybackSeekRangeEnd", base: "uint64",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        AttributeElement({
            id: 0x0006, name: "mediaPlaybackPlaybackSeekRangeStart", base: "uint64",
            access: { rw: "R" }, conformance: [ "O" ], quality: { nullable: true }
        }),

        CommandElement({
            id: 0x0000, name: "Play",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0001, name: "Pause",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0002, name: "Stop",
            access: { rw: "R" }, conformance: [ "M" ], direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0003, name: "StartOver",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0004, name: "Previous",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0005, name: "Next",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0006, name: "Rewind",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0007, name: "FastForward",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0008, name: "SkipForward",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "PlaybackResponse",
            children: [
                DatatypeElement({
                    name: "deltaPositionMilliseconds", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "deltaPositionMilliseconds", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x0009, name: "SkipBackward",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "PlaybackResponse",
            children: [
                DatatypeElement({
                    name: "deltaPositionMilliseconds", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "deltaPositionMilliseconds", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000b, name: "Seek",
            access: { rw: "R" }, conformance: [ "O" ], direction: "request", response: "PlaybackResponse",
            children: [
                DatatypeElement({
                    name: "position", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "position", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ]
                })
            ]
        }),

        CommandElement({
            id: 0x000a, name: "PlaybackResponse",
            access: { rw: "R" }, conformance: [ "M" ], direction: "response",
            children: [
                DatatypeElement({
                    name: "status", base: "MediaPlaybackStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "status", base: "MediaPlaybackStatusEnum",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "data", base: "string",
                    access: { rw: "R" }, conformance: [ "O" ]
                }),

                DatatypeElement({
                    name: "data", base: "string",
                    access: { rw: "R" }, conformance: [ "O" ]
                })
            ]
        }),

        DatatypeElement({
            name: "PlaybackPositionStruct", base: "struct",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "updatedAt", base: "epochUs",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "updatedAt", base: "epochUs",
                    access: { rw: "R" }, conformance: [ "M" ]
                }),

                DatatypeElement({
                    name: "position", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                }),

                DatatypeElement({
                    name: "position", base: "uint64",
                    access: { rw: "R" }, conformance: [ "M" ], quality: { nullable: true }
                })
            ]
        }),

        DatatypeElement({
            name: "PlaybackStateEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "playing",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "playing",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "paused",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "paused",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "notPlaying",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "notPlaying",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "buffering",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "buffering",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                })
            ]
        }),

        DatatypeElement({
            name: "MediaPlaybackStatusEnum", base: "enum8",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "success",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "success",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x00"
                }),

                DatatypeElement({
                    name: "invalidStateForCommand",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "invalidStateForCommand",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x01"
                }),

                DatatypeElement({
                    name: "notAllowed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "notAllowed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x02"
                }),

                DatatypeElement({
                    name: "notActive",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "notActive",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x03"
                }),

                DatatypeElement({
                    name: "speedOutOfRange",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "speedOutOfRange",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x04"
                }),

                DatatypeElement({
                    name: "seekOutOfRange",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                }),

                DatatypeElement({
                    name: "seekOutOfRange",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x05"
                })
            ]
        }),

        DatatypeElement({
            name: "MediaPlaybackFeature", base: "map32",
            access: { rw: "R" }, conformance: [ "M" ],
            children: [
                DatatypeElement({
                    name: "advancedSeek",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "advancedSeek",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x1"
                }),

                DatatypeElement({
                    name: "variableSpeed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                }),

                DatatypeElement({
                    name: "variableSpeed",
                    access: { rw: "R" }, conformance: [ "M" ], value: "0x2"
                })
            ]
        })
    ]
}));
