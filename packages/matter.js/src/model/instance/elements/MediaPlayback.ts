/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Matter } from "../Matter.js";

Matter.children.push({
    tag: "cluster", name: "MediaPlayback", id: 0x506, classification: "application",
    description: "Media Playback",
    details: "This cluster provides an interface for controlling Media Playback (PLAY, PAUSE, etc) on a media " +
             "device such as a TV or Speaker.",
    xref: { document: "cluster", section: "6.10" },

    children: [
        {
            tag: "attribute", name: "FeatureMap", id: 0xfffc, type: "FeatureMap",

            children: [
                {
                    tag: "datatype", name: "AS", id: 0x0,
                    description: "Enables clients to implement more advanced media seeking behavior in their user interface, such as for example a \"seek bar\". Adds support for Attributes and Commands related to advanced seek support",
                    xref: { document: "cluster", section: "6.10.2" }
                },
                {
                    tag: "datatype", name: "VS", id: 0x1,
                    description: "Support for commands to support variable speed playback on media that supports it.",
                    xref: { document: "cluster", section: "6.10.2" }
                }
            ]
        },

        {
            tag: "attribute", name: "CurrentState", id: 0x0, type: "PlaybackStateEnum", access: "R V",
            conformance: "M", constraint: "desc",
            details: "This SHALL indicate the current playback state of media.",
            xref: { document: "cluster", section: "6.10.3.1" }
        },

        {
            tag: "attribute", name: "StartTime", id: 0x1, type: "epoch-us", access: "R V", conformance: "AS",
            constraint: "desc", quality: "X",
            details: "This SHALL indicate the start time of the media, in case the media has a fixed start time (for " +
                     "example, live stream or television broadcast), or null when start time does not apply to the current",
            xref: { document: "cluster", section: "6.10.3.2" }
        },

        {
            tag: "attribute", name: "Duration", id: 0x2, type: "uint64", access: "R V", conformance: "AS",
            constraint: "desc", quality: "X",
            details: "This SHALL indicate the duration, in milliseconds, of the current media being played back or null " +
                     "when duration is not applicable (for example, in live streaming content with no known duration). " +
                     "This attribute SHALL never be 0.",
            xref: { document: "cluster", section: "6.10.3.3" }
        },

        {
            tag: "attribute", name: "SampledPosition", id: 0x3, type: "PlaybackPositionStruct", access: "R V",
            conformance: "AS", constraint: "desc", default: null, quality: "X",

            details: "This SHALL indicate the position of playback (Position field) at the time (UpdateAt field) " +
                     "specified in the attribute. The client MAY use the SampledPosition attribute to compute the current " +
                     "position within the media stream based on the PlaybackSpeed, PlaybackPositionStruct.UpdatedAt and " +
                     "PlaybackPositionStruct.Position fields. To enable this, the SampledPosition attribute SHALL be " +
                     "updated whenever a change in either the playback speed or the playback position is triggered " +
                     "outside the normal playback of the media. The events which MAY cause this to happen include:",

            xref: { document: "cluster", section: "6.10.3.4" }
        },

        {
            tag: "attribute", name: "PlaybackSpeed", id: 0x4, type: "single", access: "R V", conformance: "AS",
            constraint: "desc",
            details: "This SHALL indicate the speed at which the current media is being played. The new PlaybackSpeed",
            xref: { document: "cluster", section: "6.10.3.5" }
        },

        {
            tag: "attribute", name: "SeekRangeEnd", id: 0x5, type: "uint64", access: "R V", conformance: "AS",
            constraint: "desc", default: null, quality: "X",

            details: "This SHALL indicate the furthest forward valid position to which a client MAY seek forward, in " +
                     "milliseconds from the start of the media. When the media has an associated StartTime, a value of " +
                     "null SHALL indicate that a seek forward is valid only until the current time within the media, " +
                     "using a position computed from the difference between the current time offset and StartTime, in " +
                     "milliseconds from start of the media, truncating fractional milliseconds towards 0. A value of Nas " +
                     "when StartTime is not specified SHALL indicate that seeking forward is not allowed.",

            xref: { document: "cluster", section: "6.10.3.7" }
        },

        {
            tag: "attribute", name: "SeekRangeStart", id: 0x6, type: "uint64", access: "R V", conformance: "AS",
            constraint: "desc", default: null, quality: "X",
            details: "This SHALL indicate the earliest valid position to which a client MAY seek back, in milliseconds " +
                     "from start of the media. A value of Nas SHALL indicate that seeking backwards is not allowed.",
            xref: { document: "cluster", section: "6.10.3.6" }
        },

        {
            tag: "command", name: "Play", id: 0x0, access: "O", conformance: "M", direction: "request",
            response: "PlaybackResponse",
            details: "Upon receipt, this SHALL play media. If content is currently in a FastForward or Rewind state. Play " +
                     "SHALL return media to normal playback speed.",
            xref: { document: "cluster", section: "6.10.4.1" }
        },

        {
            tag: "command", name: "Pause", id: 0x1, access: "O", conformance: "M", direction: "request",
            response: "PlaybackResponse",
            details: "Upon receipt, this SHALL pause playback of the media.",
            xref: { document: "cluster", section: "6.10.4.2" }
        },

        {
            tag: "command", name: "Stop", id: 0x2, access: "O", conformance: "M", direction: "request",
            response: "PlaybackResponse",
            details: "Upon receipt, this SHALL stop playback of the media. User-visible outcome is context-specific. This " +
                     "MAY navigate the user back to the location from where the media was originally launched.",
            xref: { document: "cluster", section: "6.10.4.3" }
        },

        {
            tag: "command", name: "StartOver", id: 0x3, access: "O", conformance: "O", direction: "request",
            response: "PlaybackResponse",
            details: "Upon receipt, this SHALL Start Over with the current media playback item.",
            xref: { document: "cluster", section: "6.10.4.4" }
        },

        {
            tag: "command", name: "Previous", id: 0x4, access: "O", conformance: "O", direction: "request",
            response: "PlaybackResponse",
            details: "Upon receipt, this SHALL cause the handler to be invoked for \"Previous\". User experience is " +
                     "context-specific. This will often Go back to the previous media playback item.",
            xref: { document: "cluster", section: "6.10.4.5" }
        },

        {
            tag: "command", name: "Next", id: 0x5, access: "O", conformance: "O", direction: "request",
            response: "PlaybackResponse",
            details: "Upon receipt, this SHALL cause the handler to be invoked for \"Next\". User experience is context- " +
                     "specific. This will often Go forward to the next media playback item.",
            xref: { document: "cluster", section: "6.10.4.6" }
        },

        {
            tag: "command", name: "Rewind", id: 0x6, access: "O", conformance: "VS", direction: "request",
            response: "PlaybackResponse",
            details: "Upon receipt, this SHALL start playback of the media backward in case the media is currently " +
                     "playing in the forward direction or is not playing. If the playback is already happening in the " +
                     "backwards direction receipt of this command SHALL increase the speed of the media playback back",
            xref: { document: "cluster", section: "6.10.4.7" }
        },

        {
            tag: "command", name: "FastForward", id: 0x7, access: "O", conformance: "VS", direction: "request",
            response: "PlaybackResponse",
            details: "Upon receipt, this SHALL start playback of the media in the forward direction in case the media is " +
                     "currently playing in the backward direction or is not playing. If the playback is already happening " +
                     "in the forward direction receipt of this command SHALL increase the speed of the media playback.",
            xref: { document: "cluster", section: "6.10.4.8" }
        },

        {
            tag: "command", name: "SkipForward", id: 0x8, access: "O", conformance: "O", direction: "request",
            response: "PlaybackResponse",
            details: "Upon receipt, this SHALL Skip forward in the media by the given number of milliseconds, using the " +
                     "data as follows:",
            xref: { document: "cluster", section: "6.10.4.9" },

            children: [
                {
                    tag: "datatype", name: "DeltaPositionMilliseconds", id: 0x0, type: "uint64", conformance: "M",
                    xref: { document: "cluster", section: "6.10.4.9" }
                }
            ]
        },

        {
            tag: "command", name: "SkipBackward", id: 0x9, access: "O", conformance: "O", direction: "request",
            response: "PlaybackResponse",
            details: "Upon receipt, this SHALL Skip backward in the media by the given number of milliseconds, using the " +
                     "data as follows:",
            xref: { document: "cluster", section: "6.10.4.10" },

            children: [
                {
                    tag: "datatype", name: "DeltaPositionMilliseconds", id: 0x0, type: "uint64", conformance: "M",
                    xref: { document: "cluster", section: "6.10.4.10" }
                }
            ]
        },

        {
            tag: "command", name: "PlaybackResponse", id: 0xa, conformance: "M", direction: "response",
            details: "This command SHALL be generated in response to various Playback Commands. The data for this command " +
                     "SHALL be as follows:",
            xref: { document: "cluster", section: "6.10.4.12" },

            children: [
                {
                    tag: "datatype", name: "Status", id: 0x0, type: "StatusEnum", conformance: "M", constraint: "desc",
                    xref: { document: "cluster", section: "6.10.4.12" }
                },
                {
                    tag: "datatype", name: "Data", id: 0x1, type: "octstr", conformance: "O", constraint: "Any",
                    xref: { document: "cluster", section: "6.10.4.12" }
                }
            ]
        },

        {
            tag: "command", name: "Seek", id: 0xb, access: "O", conformance: "AS", direction: "request",
            response: "PlaybackResponse",
            details: "Upon receipt, this SHALL change the playback position in the media to the given position using data " +
                     "as follows:",
            xref: { document: "cluster", section: "6.10.4.11" },

            children: [
                {
                    tag: "datatype", name: "Position", id: 0x0, type: "uint64", conformance: "M",
                    xref: { document: "cluster", section: "6.10.4.11" }
                }
            ]
        },

        {
            tag: "datatype", name: "PlaybackStateEnum", type: "enum8", conformance: "M",
            details: "PlaybackStateEnum Data Type is derived from enum8.",
            xref: { document: "cluster", section: "6.10.5.1" },

            children: [
                {
                    tag: "datatype", name: "Playing", id: 0x0, conformance: "M",
                    description: "Media is currently playing (includes FF and REW)",
                    xref: { document: "cluster", section: "6.10.5.1" }
                },
                {
                    tag: "datatype", name: "Paused", id: 0x1, conformance: "M",
                    description: "Media is currently paused",
                    xref: { document: "cluster", section: "6.10.5.1" }
                },
                {
                    tag: "datatype", name: "NotPlaying", id: 0x2, conformance: "M",
                    description: "Media is not currently playing",
                    xref: { document: "cluster", section: "6.10.5.1" }
                },
                {
                    tag: "datatype", name: "Buffering", id: 0x3, conformance: "M",
                    description: "Media is not currently buffering and playback will start when buffer has been filled",
                    xref: { document: "cluster", section: "6.10.5.1" }
                }
            ]
        },

        {
            tag: "datatype", name: "StatusEnum", type: "enum8",
            details: "Status Data Type is derived from enum8.",
            xref: { document: "cluster", section: "6.10.5.2" },

            children: [
                {
                    tag: "datatype", name: "Success", id: 0x0, conformance: "M", description: "Command succeeded",
                    xref: { document: "cluster", section: "6.10.5.2" }
                },
                {
                    tag: "datatype", name: "InvalidStateForCommand", id: 0x1, conformance: "M",
                    description: "Command failed: Requested playback command is invalid in the current playback state.",
                    xref: { document: "cluster", section: "6.10.5.2" }
                },
                {
                    tag: "datatype", name: "NotAllowed", id: 0x2, conformance: "M",
                    description: "Command failed: Requested playback command is not allowed in the current playback state. For example, attempting to fast-forward during a commercial might return NotAllowed.",
                    xref: { document: "cluster", section: "6.10.5.2" }
                },
                {
                    tag: "datatype", name: "NotActive", id: 0x3, conformance: "M",
                    description: "Command failed: This endpoint is not active for playback.",
                    xref: { document: "cluster", section: "6.10.5.2" }
                },
                {
                    tag: "datatype", name: "SpeedOutOfRange", id: 0x4, conformance: "VS",
                    description: "Command failed: The FastForward or Rewind Command was issued but the media is already playing back at the fastest speed supported by the server in the respective direction.",
                    xref: { document: "cluster", section: "6.10.5.2" }
                },
                {
                    tag: "datatype", name: "SeekOutOfRange", id: 0x5, conformance: "AS",
                    description: "Command failed: The Seek Command was issued with a value of position outside of the allowed seek range of the media.",
                    xref: { document: "cluster", section: "6.10.5.2" }
                }
            ]
        },

        {
            tag: "datatype", name: "PlaybackPositionStruct", type: "struct", conformance: "M",
            details: "This structure defines a playback position within a media stream being played.",
            xref: { document: "cluster", section: "6.10.5.3" },

            children: [
                {
                    tag: "datatype", name: "UpdatedAt", id: 0x0, type: "epoch-us", conformance: "M",
                    details: "This SHALL indicate the time when the position was last updated.",
                    xref: { document: "cluster", section: "6.10.5.3.1" }
                },

                {
                    tag: "datatype", name: "Position", id: 0x1, type: "uint64", conformance: "M", quality: "X",
                    details: "This SHALL indicate the associated discrete position within the media stream, in milliseconds from " +
                             "the beginning of the stream, being associated with the time indicated by the UpdatedAt field. The " +
                             "Position SHALL not be greater than the duration of the media if duration is specified. The Position " +
                             "SHALL not be greater than the time difference between current time and start time of the media when " +
                             "start time is specified.",
                    xref: { document: "cluster", section: "6.10.5.3.2" }
                }
            ]
        },

        {
            tag: "datatype", name: "MediaPlaybackStatusEnum", type: "enum8", conformance: "M",

            children: [
                { tag: "datatype", name: "Success", id: 0x0, conformance: "M" },
                { tag: "datatype", name: "InvalidStateForCommand", id: 0x1, conformance: "M" },
                { tag: "datatype", name: "NotAllowed", id: 0x2, conformance: "M" },
                { tag: "datatype", name: "NotActive", id: 0x3, conformance: "M" },
                { tag: "datatype", name: "SpeedOutOfRange", id: 0x4, conformance: "M" },
                { tag: "datatype", name: "SeekOutOfRange", id: 0x5, conformance: "M" }
            ]
        }
    ]
});