/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ChipMatter } from "../ChipMatter.js";
import { ClusterElement, AttributeElement, CommandElement, DatatypeElement } from "../../../elements/index.js";

ChipMatter.children!.push(ClusterElement({
    id: 0x0506, name: "MediaPlayback",
    description: "Media Playback",
    details: "This cluster provides an interface for controlling Media Playback (PLAY, PAUSE, etc) on a media device such as a TV or Speaker.",
    children: [
        AttributeElement({
            id: 0x0000, name: "MediaPlaybackState", base: "PlaybackStateEnum",
            conformance: "M", default: 0
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
            conformance: "M", direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0001, name: "Pause",
            conformance: "M", direction: "request", response: "PlaybackResponse"
        }),

        CommandElement({
            id: 0x0002, name: "Stop",
            conformance: "M", direction: "request", response: "PlaybackResponse"
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
                    name: "DeltaPositionMilliseconds", base: "uint64",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x0009, name: "SkipBackward",
            conformance: "O", direction: "request", response: "PlaybackResponse",
            children: [
                DatatypeElement({
                    name: "DeltaPositionMilliseconds", base: "uint64",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x000b, name: "Seek",
            conformance: "O", direction: "request", response: "PlaybackResponse",
            children: [
                DatatypeElement({
                    name: "Position", base: "uint64",
                    conformance: "M"
                })
            ]
        }),

        CommandElement({
            id: 0x000a, name: "PlaybackResponse",
            conformance: "M", direction: "response",
            children: [
                DatatypeElement({
                    name: "Status", base: "MediaPlaybackStatusEnum",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Data", base: "string",
                    conformance: "O"
                })
            ]
        }),

        DatatypeElement({
            name: "PlaybackPositionStruct", base: "struct",
            conformance: "M",
            children: [
                DatatypeElement({
                    name: "UpdatedAt", base: "epoch-us",
                    conformance: "M"
                }),

                DatatypeElement({
                    name: "Position", base: "uint64",
                    conformance: "M", quality: "X"
                })
            ]
        }),

        DatatypeElement({
            name: "PlaybackStateEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Playing",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "Paused",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "NotPlaying",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "Buffering",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "MediaPlaybackStatusEnum", base: "enum8",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Success",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0001, name: "InvalidStateForCommand",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "NotAllowed",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0003, name: "NotActive",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0004, name: "SpeedOutOfRange",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0005, name: "SeekOutOfRange",
                    conformance: "M"
                })
            ]
        }),

        DatatypeElement({
            name: "MediaPlaybackFeature", base: "map32",
            conformance: "M",
            children: [
                DatatypeElement({
                    id: 0x0001, name: "AdvancedSeek",
                    conformance: "M"
                }),

                DatatypeElement({
                    id: 0x0002, name: "VariableSpeed",
                    conformance: "M"
                })
            ]
        })
    ]
}));
