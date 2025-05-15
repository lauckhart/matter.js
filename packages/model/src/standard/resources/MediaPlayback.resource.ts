/**
 * @license
 * Copyright 2022-2025 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MediaPlayback } from "#index.js";

MediaPlayback.patch({
    details: "This cluster provides an interface for controlling Media Playback (PLAY, PAUSE, etc) on a media " +
        "device such as a TV, Set-top Box, or Smart Speaker." +
        "\n" +
        "This cluster server would be supported on Video Player devices or endpoints that provide media " +
        "playback, such as a Content App. This cluster provides an interface for controlling Media Playback.",
    xref: { document: "cluster", section: "6.10" },

    children: [
        undefined,

        {
            children: [
                { description: "AdvancedSeek" },
                { description: "VariableSpeed" },
                { description: "TextTracks" },
                { description: "AudioTracks" },
                { description: "AudioAdvance" }
            ]
        },

        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,
        undefined,

        {
            children: [
                { description: "Media is currently playing (includes FF and REW)" },
                { description: "Media is currently paused" },
                { description: "Media is not currently playing" },
                { description: "Media is not currently buffering and playback will start when buffer has been filled" }
            ]
        },

        {
            children: [
                { description: "Succeeded" },
                { description: "Requested playback command is invalid in the current playback state." },
                {
                    description: "Requested playback command is not allowed in the current playback state. For example, attempting to fast-forward during a commercial might return NotAllowed."
                },
                { description: "This endpoint is not active for playback." },
                {
                    description: "The FastForward or Rewind Command was issued but the media is already playing back at the fastest speed supported by the server in the respective direction."
                },
                {
                    description: "The Seek Command was issued with a value of position outside of the allowed seek range of the media."
                }
            ]
        },

        {
            children: [
                {
                    description: "Textual information meant for display when no other text representation is selected. It is used to clarify dialogue, alternate languages, texted graphics or location/person IDs that are not otherwise covered in the dubbed/localized audio."
                },
                {
                    description: "Textual or audio media component containing a textual description (intended for audio synthesis) or an audio description describing a visual component"
                },
                {
                    description: "Simplified or reduced captions as specified in [United States Code Title 47 CFR 79.103(c)(9)]."
                },
                {
                    description: "A media characteristic that indicates that a track selection option includes frame-based content."
                },
                {
                    description: "Main media component(s) which is/are intended for presentation if no other information is provided"
                },
                {
                    description: "A media characteristic that indicates that a track or media selection option contains original content."
                },
                {
                    description: "A media characteristic that indicates that a track or media selection option contains a language translation and verbal interpretation of spoken dialog."
                },
                {
                    description: "Textual media component containing transcriptions of spoken dialog and auditory cues such as sound effects and music for the hearing impaired."
                },
                { description: "Textual transcriptions of spoken dialog." },
                {
                    description: "Textual media component containing transcriptions of spoken dialog and auditory cues such as sound effects and music for the hearing impaired."
                },
                {
                    description: "Media content component that is supplementary to a media content component of a different media component type."
                },
                { description: "Experience that contains a commentary (e.g. director’s commentary) (typically audio)" },
                {
                    description: "Experience that contains an element that is presented in a different language from the original (e.g. dubbed audio, translated captions)"
                },
                {
                    description: "Textual or audio media component containing a textual description (intended for audio synthesis) or an audio description describing a visual component"
                },
                {
                    description: "Media component containing information intended to be processed by application specific elements."
                },
                { description: "Experience containing an element for improved intelligibility of the dialogue." },
                {
                    description: "Experience that provides information, about a current emergency, that is intended to enable the protection of life, health, safety, and property, and may also include critical details regarding the emergency and how to respond to the emergency."
                },
                {
                    description: "Textual representation of a songs’ lyrics, usually in the same language as the associated song as specified in [SMPTE ST 2067-2]."
                }
            ]
        }
    ]
});
