/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlag } from "../../schema/BitmapSchema.js";
import { Attribute, AccessLevel, Command, OptionalCommand, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvEnum, TlvUInt64, TlvFloat } from "../../tlv/TlvNumber.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvByteString } from "../../tlv/TlvString.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * PlaybackStateEnum Data Type is derived from enum8.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.5.1
 */
export const enum PlaybackStateEnum {
    /**
     * Media is currently playing (includes FF and REW)
     */
    Playing = 0,

    /**
     * Media is currently paused
     */
    Paused = 1,

    /**
     * Media is not currently playing
     */
    NotPlaying = 2,

    /**
     * Media is not currently buffering and playback will start when buffer has
     * been filled
     */
    Buffering = 3
};

/**
 * Status Data Type is derived from enum8.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.5.2
 */
export const enum StatusEnum {
    /**
     * Command succeeded
     */
    Success = 0,

    /**
     * Command failed: Requested playback command is invalid in the current
     * playback state.
     */
    InvalidStateForCommand = 1,

    /**
     * Command failed: Requested playback command is not allowed in the current
     * playback state. For example, attempting to fast-forward during a
     * commercial might return NotAllowed.
     */
    NotAllowed = 2,

    /**
     * Command failed: This endpoint is not active for playback.
     */
    NotActive = 3,

    /**
     * Command failed: The FastForward or Rewind Command was issued but the
     * media is already playing back at the fastest speed supported by the
     * server in the respective direction.
     */
    SpeedOutOfRange = 4,

    /**
     * Command failed: The Seek Command was issued with a value of position
     * outside of the allowed seek range of the media.
     */
    SeekOutOfRange = 5
};

/**
 * This command SHALL be generated in response to various Playback Commands.
 * The data for this command SHALL be as follows:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.12
 */
export const PlaybackResponseRequest = TlvObject({
    /**
     * This SHALL indicate the status of the command which resulted in this
     * response.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.12.1
     */
    Status: TlvField(0, TlvEnum<StatusEnum>()),

    /**
     * This SHALL indicate Optional app-specific data.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.12.2
     */
    Data: TlvOptionalField(1, TlvByteString)
});

/**
 * Upon receipt, this SHALL Skip forward in the media by the given number of
 * milliseconds, using the data as follows:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.9
 */
export const SkipForwardRequest = TlvObject({
    /**
     * This SHALL indicate the duration of the time span to skip forward in the
     * media, in milliseconds. In case the resulting position falls in the
     * middle of a frame, the server SHALL set the position to the beginning of
     * that frame and set the SampledPosition attribute on the cluster
     * accordingly. If the resultant position falls beyond the furthest valid
     * position in the media the client MAY seek forward to, the position
     * should be set to that furthest valid position. If the SampledPosition
     * attribute is supported it SHALL be updated on the cluster accordingly.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.9.1
     */
    DeltaPositionMilliseconds: TlvField(0, TlvUInt64)
});

/**
 * Upon receipt, this SHALL Skip backward in the media by the given number of
 * milliseconds, using the data as follows:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.10
 */
export const SkipBackwardRequest = TlvObject({
    /**
     * This SHALL indicate the duration of the time span to skip backward in
     * the media, in milliseconds. In case the resulting position falls in the
     * middle of a frame, the server SHALL set the position to the beginning of
     * that frame and set the SampledPosition attribute on the cluster
     * accordingly. If the resultant position falls before the earliest valid
     * position to which a client MAY seek back to, the position should be set
     * to that earliest valid position. If the SampledPosition attribute is
     * supported it SHALL be updated on the cluster accordingly.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.10.1
     */
    DeltaPositionMilliseconds: TlvField(0, TlvUInt64)
});

/**
 * This structure defines a playback position within a media stream being
 * played.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.5.3
 */
export const PlaybackPositionStruct = TlvObject({
    /**
     * This SHALL indicate the time when the position was last updated.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.5.3.1
     */
    UpdatedAt: TlvField(0, TlvUInt64),

    /**
     * This SHALL indicate the associated discrete position within the media
     * stream, in milliseconds from the beginning of the stream, being
     * associated with the time indicated by the UpdatedAt field. The Position
     * SHALL not be greater than the duration of the media if duration is
     * specified. The Position SHALL not be greater than the time difference
     * between current time and start time of the media when start time is
     * specified.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.5.3.2
     */
    Position: TlvField(1, TlvNullable(TlvUInt64))
});

/**
 * Upon receipt, this SHALL change the playback position in the media to the
 * given position using data as follows:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.11
 */
export const SeekRequest = TlvObject({
    /**
     * This SHALL indicate the position (in milliseconds) in the media to seek
     * to. In case the position falls in the middle of a frame, the server
     * SHALL set the position to the beginning of that frame and set the
     * SampledPosition attribute on the cluster accordingly. If the position
     * falls before the earliest valid position or beyond the furthest valid
     * position to which a client MAY seek back or forward to respectively, the
     * status of SEEK_OUT_OF_RANGE SHALL be returned and no change SHALL be
     * made to the position of the playback.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.11.1
     */
    Position: TlvField(0, TlvUInt64)
});

export namespace MediaPlaybackCluster {
    export const id = 1286;
    export const name = "MediaPlayback";
    export const revision = 1;

    export const featureMap = {
        /**
         * AdvancedSeek
         *
         * Enables clients to implement more advanced media seeking behavior in
         * their user interface, such as for example a "seek bar". Adds support
         * for Attributes and Commands related to advanced seek support
         */
        AS: BitFlag(0),

        /**
         * VariableSpeed
         *
         * Support for commands to support variable speed playback on media
         * that supports it.
         */
        VS: BitFlag(1)
    };

    const Base = {
        attributes: {
            /**
             * This SHALL indicate the current playback state of media.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.3.1
             */
            currentState: Attribute(0, TlvEnum<PlaybackStateEnum>(), { readAcl: AccessLevel.View })
        },

        commands: {
            /**
             * Upon receipt, this SHALL play media. If content is currently in
             * a FastForward or Rewind state. Play SHALL return media to normal
             * playback speed.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.1
             */
            play: Command(0, TlvNoArguments, 10, PlaybackResponseRequest),

            /**
             * Upon receipt, this SHALL pause playback of the media.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.2
             */
            pause: Command(1, TlvNoArguments, 10, PlaybackResponseRequest),

            /**
             * Upon receipt, this SHALL stop playback of the media.
             * User-visible outcome is context-specific. This MAY navigate the
             * user back to the location from where the media was originally
             * launched.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.3
             */
            stop: Command(2, TlvNoArguments, 10, PlaybackResponseRequest),

            /**
             * Upon receipt, this SHALL Start Over with the current media
             * playback item.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.4
             */
            startOver: OptionalCommand(3, TlvNoArguments, 10, PlaybackResponseRequest),

            /**
             * Upon receipt, this SHALL cause the handler to be invoked for
             * "Previous". User experience is context-specific. This will often
             * Go back to the previous media playback item.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.5
             */
            previous: OptionalCommand(4, TlvNoArguments, 10, PlaybackResponseRequest),

            /**
             * Upon receipt, this SHALL cause the handler to be invoked for
             * "Next". User experience is context- specific. This will often Go
             * forward to the next media playback item.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.6
             */
            next: OptionalCommand(5, TlvNoArguments, 10, PlaybackResponseRequest),

            /**
             * Upon receipt, this SHALL Skip forward in the media by the given
             * number of milliseconds, using the data as follows:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.9
             */
            skipForward: OptionalCommand(8, SkipForwardRequest, 10, PlaybackResponseRequest),

            /**
             * Upon receipt, this SHALL Skip backward in the media by the given
             * number of milliseconds, using the data as follows:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.10
             */
            skipBackward: OptionalCommand(9, SkipBackwardRequest, 10, PlaybackResponseRequest),

            /**
             * This command SHALL be generated in response to various Playback
             * Commands. The data for this command SHALL be as follows:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.12
             */
            playbackResponse: Command(10, PlaybackResponseRequest, 10, TlvNoResponse)
        }
    };

    const AS = {
        attributes: {
            /**
             * This SHALL indicate the start time of the media, in case the
             * media has a fixed start time (for example, live stream or
             * television broadcast), or null when start time does not apply to
             * the current
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.3.2
             */
            startTime: Attribute(1, TlvNullable(TlvUInt64), { readAcl: AccessLevel.View }),

            /**
             * This SHALL indicate the duration, in milliseconds, of the
             * current media being played back or null when duration is not
             * applicable (for example, in live streaming content with no known
             * duration). This attribute SHALL never be 0.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.3.3
             */
            duration: Attribute(2, TlvNullable(TlvUInt64), { readAcl: AccessLevel.View }),

            /**
             * This SHALL indicate the position of playback (Position field) at
             * the time (UpdateAt field) specified in the attribute. The client
             * MAY use the SampledPosition attribute to compute the current
             * position within the media stream based on the PlaybackSpeed,
             * PlaybackPositionStruct.UpdatedAt and
             * PlaybackPositionStruct.Position fields. To enable this, the
             * SampledPosition attribute SHALL be updated whenever a change in
             * either the playback speed or the playback position is triggered
             * outside the normal playback of the media. The events which MAY
             * cause this to happen include:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.3.4
             */
            sampledPosition: Attribute(3, TlvNullable(PlaybackPositionStruct), { default: null, readAcl: AccessLevel.View }),

            /**
             * This SHALL indicate the speed at which the current media is
             * being played. The new PlaybackSpeed
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.3.5
             */
            playbackSpeed: Attribute(4, TlvFloat, { readAcl: AccessLevel.View }),

            /**
             * This SHALL indicate the furthest forward valid position to which
             * a client MAY seek forward, in milliseconds from the start of the
             * media. When the media has an associated StartTime, a value of
             * null SHALL indicate that a seek forward is valid only until the
             * current time within the media, using a position computed from
             * the difference between the current time offset and StartTime, in
             * milliseconds from start of the media, truncating fractional
             * milliseconds towards 0. A value of Nas when StartTime is not
             * specified SHALL indicate that seeking forward is not allowed.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.3.7
             */
            seekRangeEnd: Attribute(5, TlvNullable(TlvUInt64), { default: null, readAcl: AccessLevel.View }),

            /**
             * This SHALL indicate the earliest valid position to which a
             * client MAY seek back, in milliseconds from start of the media. A
             * value of Nas SHALL indicate that seeking backwards is not
             * allowed.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.3.6
             */
            seekRangeStart: Attribute(6, TlvNullable(TlvUInt64), { default: null, readAcl: AccessLevel.View })
        },

        commands: {
            /**
             * Upon receipt, this SHALL change the playback position in the
             * media to the given position using data as follows:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.11
             */
            seek: Command(11, SeekRequest, 10, PlaybackResponseRequest)
        }
    };

    const VS = {
        commands: {
            /**
             * Upon receipt, this SHALL start playback of the media backward in
             * case the media is currently playing in the forward direction or
             * is not playing. If the playback is already happening in the
             * backwards direction receipt of this command SHALL increase the
             * speed of the media playback back
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.7
             */
            rewind: Command(6, TlvNoArguments, 10, PlaybackResponseRequest),

            /**
             * Upon receipt, this SHALL start playback of the media in the
             * forward direction in case the media is currently playing in the
             * backward direction or is not playing. If the playback is already
             * happening in the forward direction receipt of this command SHALL
             * increase the speed of the media playback.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.10.4.8
             */
            fastForward: Command(7, TlvNoArguments, 10, PlaybackResponseRequest)
        }
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        features: featureMap,
        supportedFeatures: {
            AS: true,
            VS: true
        },
        elements: [
            Base,
            AS,
            VS
        ]
    });
};