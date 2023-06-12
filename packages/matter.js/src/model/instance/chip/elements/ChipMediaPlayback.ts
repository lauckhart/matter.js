/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../index.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0506, name: "MediaPlayback",
    description: "Media Playback",
    details: "This cluster provides an interface for controlling Media Playback (PLAY, PAUSE, etc) on a media device such as a TV or Speaker.",
    children: [
        AttributeElement({
            id: 0x0000, name: "MediaPlaybackState", base: "PlaybackStateEnum",
            default: 0
        }),

        AttributeElement({
            id: 0x0001, name: "MediaPlaybackStartTime", base: "epoch-us",
            conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0002, name: "MediaPlaybackDuration", base: "uint64",
            conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0003, name: "MediaPlaybackPlaybackPosition", base: "PlaybackPositionStruct",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0004, name: "MediaPlaybackPlaybackSpeed", base: "single",
            conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0005, name: "MediaPlaybackPlaybackSeekRangeEnd", base: "uint64",
            conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0006, name: "MediaPlaybackPlaybackSeekRangeStart", base: "uint64",
            conformance: "O", quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "Play",
            direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0001, name: "Pause",
            direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0002, name: "Stop",
            direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0003, name: "StartOver",
            conformance: "O", direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0004, name: "Previous",
            conformance: "O", direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0005, name: "Next",
            conformance: "O", direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0006, name: "Rewind",
            conformance: "O", direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0007, name: "FastForward",
            conformance: "O", direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0008, name: "SkipForward",
            conformance: "O", direction: "request", response: "PlaybackResponse",
            children: [
                DatatypeElement({
                    name: "DeltaPositionMilliseconds", base: "uint64"
                })
            ]
        }),

        CommandElement({
            id: 0x0009, name: "SkipBackward",
            conformance: "O", direction: "request", response: "PlaybackResponse",
            children: [
                DatatypeElement({
                    name: "DeltaPositionMilliseconds", base: "uint64"
                })
            ]
        }),

        CommandElement({
            id: 0x000b, name: "Seek",
            conformance: "O", direction: "request", response: "PlaybackResponse",
            children: [
                DatatypeElement({
                    name: "Position", base: "uint64"
                })
            ]
        }),

        CommandElement({
            id: 0x000a, name: "PlaybackResponse",
            direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "MediaPlaybackStatusEnum"
                }),

                DatatypeElement({
                    name: "Data", base: "string",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "PlaybackPositionStruct", base: "struct",
            children: [
                DatatypeElement({
                    name: "UpdatedAt", base: "epoch-us"
                }),

                DatatypeElement({
                    name: "Position", base: "uint64",
                    quality: "X"
                })
            ]
        }),

        DatatypeElement({
            name: "PlaybackStateEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Playing"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Paused"
                }),

                DatatypeElement({
                    id: 0x0002, name: "NotPlaying"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Buffering"
                })
            ]
        }),

        DatatypeElement({
            name: "MediaPlaybackStatusEnum", base: "enum8",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success"
                }),

                DatatypeElement({
                    id: 0x0001, name: "InvalidStateForCommand"
                }),

                DatatypeElement({
                    id: 0x0002, name: "NotAllowed"
                }),

                DatatypeElement({
                    id: 0x0003, name: "NotActive"
                }),

                DatatypeElement({
                    id: 0x0004, name: "SpeedOutOfRange"
                }),

                DatatypeElement({
                    id: 0x0005, name: "SeekOutOfRange"
                })
            ]
        }),

        DatatypeElement({
            name: "MediaPlaybackFeature", base: "map32",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "AdvancedSeek"
                }),

                DatatypeElement({
                    id: 0x0002, name: "VariableSpeed"
                })
            ]
        })
    ]
}));
