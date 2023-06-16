/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../SpecMatter.js";
import { ClusterElement, AttributeElement, DatatypeElement, CommandElement } from "../../../elements/index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0506, name: "MediaPlayback",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", type: "uint16",
            access: "R V", conformance: "M", constraint: "min 1", default: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", type: "map32",
            access: "R V", conformance: "M", default: 0, quality: "F",
            children: [
                DatatypeElement({
                    id: 0x0000, name: "AS",
                    description: "Enables clients to implement more advanced media seeking behavior in their user interface, such as for example a \"seek bar\". Adds support for Attributes and Commands related to advanced seek support",
                    xref: { document: "cluster", section: "6.10.2", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "VS",
                    description: "Support for commands to support variable speed playback on media that supports it.",
                    xref: { document: "cluster", section: "6.10.2", version: "1.1" }
                })
            ]
        }),

        AttributeElement({
            id: 0x0000, name: "CurrentState", type: "PlaybackStateEnum",
            access: "R V", conformance: "M", constraint: "desc", default: 0,
            details: "This SHALL indicate the current playback state of media",
            xref: { document: "cluster", section: "6.10.3.1", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "StartTime", type: "epoch-us",
            access: "R V", conformance: "AS", constraint: "desc", default: "null", quality: "X",
            details: "This SHALL indicate the start time of the media, in case the media has" +
                     " a fixed start time (for example, live stream or television broadcast" +
                     "), or null when start time does not apply to the current",
            xref: { document: "cluster", section: "6.10.3.2", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "Duration", type: "uint64",
            access: "R V", conformance: "AS", constraint: "desc", default: "null", quality: "X",
            details: "This SHALL indicate the duration, in milliseconds, of the current " +
                     "media being played back or null when duration is not applicable (for " +
                     "example, in live streaming content with no known duration). This " +
                     "attribute SHALL never be 0",
            xref: { document: "cluster", section: "6.10.3.3", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "SampledPosition", type: "PlaybackPositionStruct",
            access: "R V", conformance: "AS", constraint: "desc", default: "null", quality: "X",
            details: "This SHALL indicate the position of playback (Position field) at the " +
                     "time (UpdateAt field) specified in the attribute. The client MAY use " +
                     "the SampledPosition attribute to compute the current position within " +
                     "the media stream based on the PlaybackSpeed, PlaybackPositionStruct." +
                     "UpdatedAt and PlaybackPositionStruct.Position fields. To enable this, " +
                     "the SampledPosition attribute SHALL be updated whenever a change in " +
                     "either the playback speed or the playback position is triggered " +
                     "outside the normal playback of the media. The events which MAY cause " +
                     "this to happen include",
            xref: { document: "cluster", section: "6.10.3.4", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0004, name: "PlaybackSpeed", type: "single",
            access: "R V", conformance: "AS", constraint: "desc", default: 0,
            details: "This SHALL indicate the speed at which the current media is being " +
                     "played. The new PlaybackSpeed",
            xref: { document: "cluster", section: "6.10.3.5", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0005, name: "SeekRangeEnd", type: "uint64",
            access: "R V", conformance: "AS", constraint: "desc", default: "null", quality: "X",
            details: "This SHALL indicate the furthest forward valid position to which a " +
                     "client MAY seek forward, in milliseconds from the start of the media. " +
                     "When the media has an associated StartTime, a value of null SHALL " +
                     "indicate that a seek forward is valid only until the current time " +
                     "within the media, using a position computed from the difference " +
                     "between the current time offset and StartTime, in milliseconds from " +
                     "start of the media, truncating fractional milliseconds towards 0. A " +
                     "value of Nas when StartTime is not specified SHALL indicate that " +
                     "seeking forward is not allowed",
            xref: { document: "cluster", section: "6.10.3.7", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0006, name: "SeekRangeStart", type: "uint64",
            access: "R V", conformance: "AS", constraint: "desc", default: "null", quality: "X",
            details: "This SHALL indicate the earliest valid position to which a client MAY " +
                     "seek back, in milliseconds from start of the media. A value of Nas " +
                     "SHALL indicate that seeking backwards is not allowed",
            xref: { document: "cluster", section: "6.10.3.6", version: "1.1" }
        }),

        CommandElement({
            id: 0x0000, name: "Play",
            access: "O", conformance: "M", direction: "request", response: "PlaybackResponse",
            details: "Upon receipt, this SHALL play media. If content is currently in a " +
                     "FastForward or Rewind state. Play SHALL return media to normal " +
                     "playback speed",
            xref: { document: "cluster", section: "6.10.4.1", version: "1.1" }
        }),

        CommandElement({
            id: 0x0001, name: "Pause",
            access: "O", conformance: "M", direction: "request", response: "PlaybackResponse",
            details: "Upon receipt, this SHALL pause playback of the media",
            xref: { document: "cluster", section: "6.10.4.2", version: "1.1" }
        }),

        CommandElement({
            id: 0x0002, name: "Stop",
            access: "O", conformance: "M", direction: "request", response: "PlaybackResponse",
            details: "Upon receipt, this SHALL stop playback of the media. User-visible " +
                     "outcome is context-specific. This MAY navigate the user back to the " +
                     "location from where the media was originally launched",
            xref: { document: "cluster", section: "6.10.4.3", version: "1.1" }
        }),

        CommandElement({
            id: 0x0003, name: "StartOver",
            access: "O", conformance: "O", direction: "request", response: "PlaybackResponse",
            details: "Upon receipt, this SHALL Start Over with the current media playback " +
                     "item",
            xref: { document: "cluster", section: "6.10.4.4", version: "1.1" }
        }),

        CommandElement({
            id: 0x0004, name: "Previous",
            access: "O", conformance: "O", direction: "request", response: "PlaybackResponse",
            details: "Upon receipt, this SHALL cause the handler to be invoked for \"Previous" +
                     "\". User experience is context-specific. This will often Go back to the" +
                     " previous media playback item",
            xref: { document: "cluster", section: "6.10.4.5", version: "1.1" }
        }),

        CommandElement({
            id: 0x0005, name: "Next",
            access: "O", conformance: "O", direction: "request", response: "PlaybackResponse",
            details: "Upon receipt, this SHALL cause the handler to be invoked for \"Next\". " +
                     "User experience is context- specific. This will often Go forward to " +
                     "the next media playback item",
            xref: { document: "cluster", section: "6.10.4.6", version: "1.1" }
        }),

        CommandElement({
            id: 0x0006, name: "Rewind",
            access: "O", conformance: "VS", direction: "request", response: "PlaybackResponse",
            details: "Upon receipt, this SHALL start playback of the media backward in case " +
                     "the media is currently playing in the forward direction or is not " +
                     "playing. If the playback is already happening in the backwards " +
                     "direction receipt of this command SHALL increase the speed of the " +
                     "media playback back",
            xref: { document: "cluster", section: "6.10.4.7", version: "1.1" }
        }),

        CommandElement({
            id: 0x0007, name: "FastForward",
            access: "O", conformance: "VS", direction: "request", response: "PlaybackResponse",
            details: "Upon receipt, this SHALL start playback of the media in the forward " +
                     "direction in case the media is currently playing in the backward " +
                     "direction or is not playing. If the playback is already happening in " +
                     "the forward direction receipt of this command SHALL increase the speed" +
                     " of the media playback",
            xref: { document: "cluster", section: "6.10.4.8", version: "1.1" }
        }),

        CommandElement({
            id: 0x0008, name: "SkipForward",
            access: "O", conformance: "O", direction: "request", response: "PlaybackResponse",
            details: "Upon receipt, this SHALL Skip forward in the media by the given number" +
                     " of milliseconds, using the data as follows",
            xref: { document: "cluster", section: "6.10.4.9", version: "1.1" }
        }),

        CommandElement({
            id: 0x0009, name: "SkipBackward",
            access: "O", conformance: "O", direction: "request", response: "PlaybackResponse",
            details: "Upon receipt, this SHALL Skip backward in the media by the given " +
                     "number of milliseconds, using the data as follows",
            xref: { document: "cluster", section: "6.10.4.10", version: "1.1" }
        }),

        CommandElement({
            id: 0x000a, name: "PlaybackResponse",
            conformance: "M", direction: "response",
            details: "This command SHALL be generated in response to various Playback " +
                     "Commands. The data for this command SHALL be as follows",
            xref: { document: "cluster", section: "6.10.4.12", version: "1.1" }
        }),

        CommandElement({
            id: 0x000b, name: "Seek",
            access: "O", conformance: "AS", direction: "request", response: "PlaybackResponse",
            details: "Upon receipt, this SHALL change the playback position in the media to " +
                     "the given position using data as follows",
            xref: { document: "cluster", section: "6.10.4.11", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "PlaybackStateEnum", type: "enum8",
            details: "PlaybackStateEnum Data Type is derived from enum8",
            xref: { document: "cluster", section: "6.10.5.1", version: "1.1" },
            children: [
                DatatypeElement({
                    id: 0x0000, name: "Playing",
                    conformance: "M", description: "Media is currently playing (includes FF and REW)",
                    xref: { document: "cluster", section: "6.10.5.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0001, name: "Paused",
                    conformance: "M", description: "Media is currently paused",
                    xref: { document: "cluster", section: "6.10.5.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0002, name: "NotPlaying",
                    conformance: "M", description: "Media is not currently playing",
                    xref: { document: "cluster", section: "6.10.5.1", version: "1.1" }
                }),

                DatatypeElement({
                    id: 0x0003, name: "Buffering",
                    conformance: "M", description: "Media is not currently buffering and playback will start when buffer has been filled",
                    xref: { document: "cluster", section: "6.10.5.1", version: "1.1" }
                })
            ]
        })
    ]
}));
