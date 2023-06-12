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
            access: "R", conformance: "M", default: 0
        }),

        AttributeElement({
            id: 0x0001, name: "MediaPlaybackStartTime", base: "epoch-us",
            access: "R", conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0002, name: "MediaPlaybackDuration", base: "uint64",
            access: "R", conformance: "O", default: 0, quality: "X"
        }),

        AttributeElement({
            id: 0x0003, name: "MediaPlaybackPlaybackPosition", base: "PlaybackPositionStruct",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0004, name: "MediaPlaybackPlaybackSpeed", base: "single",
            access: "R", conformance: "O", default: 0
        }),

        AttributeElement({
            id: 0x0005, name: "MediaPlaybackPlaybackSeekRangeEnd", base: "uint64",
            access: "R", conformance: "O", quality: "X"
        }),

        AttributeElement({
            id: 0x0006, name: "MediaPlaybackPlaybackSeekRangeStart", base: "uint64",
            access: "R", conformance: "O", quality: "X"
        }),

        CommandElement({
            id: 0x0000, name: "Play",
            access: "R", conformance: "M", direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0001, name: "Pause",
            access: "R", conformance: "M", direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0002, name: "Stop",
            access: "R", conformance: "M", direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0003, name: "StartOver",
            access: "R", conformance: "O", direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0004, name: "Previous",
            access: "R", conformance: "O", direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0005, name: "Next",
            access: "R", conformance: "O", direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0006, name: "Rewind",
            access: "R", conformance: "O", direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0007, name: "FastForward",
            access: "R", conformance: "O", direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0008, name: "SkipForward",
            access: "R", conformance: "O", direction: "request", response: "PlaybackResponse",
            children: [
                DatatypeElement({
                    name: "DeltaPositionMilliseconds", base: "uint64",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0009, name: "SkipBackward",
            access: "R", conformance: "O", direction: "request", response: "PlaybackResponse",
            children: [
                DatatypeElement({
                    name: "DeltaPositionMilliseconds", base: "uint64",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x000b, name: "Seek",
            access: "R", conformance: "O", direction: "request", response: "PlaybackResponse",
            children: [
                DatatypeElement({
                    name: "Position", base: "uint64",
                    access: "R", conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x000a, name: "PlaybackResponse",
            access: "R", conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "MediaPlaybackStatusEnum",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Data", base: "string",
                    access: "R", conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "PlaybackPositionStruct", base: "struct",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    name: "UpdatedAt", base: "epoch-us",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    name: "Position", base: "uint64",
                    access: "R", conformance: "M", quality: "X"
                })
            ]
        }),

        DatatypeElement({
            name: "PlaybackStateEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Playing",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Paused",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "NotPlaying",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Buffering",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "MediaPlaybackStatusEnum", base: "enum8",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "InvalidStateForCommand",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "NotAllowed",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "NotActive",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "SpeedOutOfRange",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "SeekOutOfRange",
                    access: "R", conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "MediaPlaybackFeature", base: "map32",
            access: "R", conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "AdvancedSeek",
                    access: "R", conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "VariableSpeed",
                    access: "R", conformance: "M"
                })
            ]
        })
    ]
}));
