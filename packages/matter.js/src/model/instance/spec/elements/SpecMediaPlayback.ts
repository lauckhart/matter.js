/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { SpecMatter } from "../internal.js";
import { ClusterElement, AttributeElement, DatatypeElement } from "../../../index.js";

SpecMatter.children!.push(ClusterElement({
    id: 0x0506, name: "MediaPlayback",
    classification: "application",
    children: [
        AttributeElement({
            id: 0xfffd, name: "ClusterRevision", base: "uint16",
            access: "R V", conformance: "M", constraint: { min: 1 }, value: 1, quality: "F"
        }),

        AttributeElement({
            id: 0xfffc, name: "FeatureMap", base: "map32",
            access: "R V", conformance: "M", value: 0, quality: "F"
        }),

        AttributeElement({
            id: 0x0000, name: "CurrentState", base: "PlaybackStateEnum",
            access: "R V", conformance: "M", constraint: "desc", value: "",
            details: "This SHALL indicate the current playback state of media.",
            xref: { section: "6.10.3.1", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0001, name: "StartTime", base: "epoch-us",
            access: "R V", conformance: "AS", constraint: "desc", value: "null", quality: "X",
            details: "This SHALL indicate the start time of the media, in case the media has a fixed start time (for example, live stream or television broadcast), or null when start time does not apply to the current",
            xref: { section: "6.10.3.2", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0002, name: "Duration", base: "uint64",
            access: "R V", conformance: "AS", constraint: "desc", value: "null", quality: "X",
            details: "This SHALL indicate the duration, in milliseconds, of the current media being played back or null when duration is not applicable (for example, in live streaming content with no known duration). This attribute SHALL never be 0.",
            xref: { section: "6.10.3.3", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0003, name: "SampledPosition", base: "PlaybackPositionStruct",
            access: "R V", conformance: "AS", constraint: "desc", value: "null", quality: "X",
            details: "This SHALL indicate the position of playback (Position field) at the time (UpdateAt field) specified in the attribute. The client MAY use the SampledPosition attribute to compute the current position within the media stream based on the PlaybackSpeed, PlaybackPositionStruct.UpdatedAt and PlaybackPositionStruct.Position fields. To enable this, the SampledPosition attribute SHALL be updated whenever a change in either the playback speed or the playback position is triggered outside the normal playback of the media. The events which MAY cause this to happen include:",
            xref: { section: "6.10.3.4", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0004, name: "PlaybackSpeed", base: "single",
            access: "R V", conformance: "AS", constraint: "desc", value: "0",
            details: "This SHALL indicate the speed at which the current media is being played. The new PlaybackSpeed",
            xref: { section: "6.10.3.5", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0005, name: "SeekRangeEnd", base: "uint64",
            access: "R V", conformance: "AS", constraint: "desc", value: "null", quality: "X",
            details: "This SHALL indicate the furthest forward valid position to which a client MAY seek forward, in milliseconds from the start of the media. When the media has an associated StartTime, a value of null SHALL indicate that a seek forward is valid only until the current time within the media, using a position computed from the difference between the current time offset and StartTime, in milliseconds from start of the media, truncating fractional milliseconds towards 0. A value of Nas when StartTime is not specified SHALL indicate that seeking forward is not allowed.",
            xref: { section: "6.10.3.7", document: "cluster", version: "1.1" }
        }),

        AttributeElement({
            id: 0x0006, name: "SeekRangeStart", base: "uint64",
            access: "R V", conformance: "AS", constraint: "desc", value: "null", quality: "X",
            details: "This SHALL indicate the earliest valid position to which a client MAY seek back, in milliseconds from start of the media. A value of Nas SHALL indicate that seeking backwards is not allowed.",
            xref: { section: "6.10.3.6", document: "cluster", version: "1.1" }
        }),

        DatatypeElement({
            id: -1, name: "PlaybackStateEnum", base: "enum8",
            details: "PlaybackStateEnum Data Type is derived from enum8.",
            xref: { section: "6.10.5.1", document: "cluster", version: "1.1" }
        })
    ]
}));
