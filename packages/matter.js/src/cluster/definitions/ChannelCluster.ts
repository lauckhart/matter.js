/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlag } from "../../schema/BitmapSchema.js";
import { Attribute, AccessLevel, OptionalAttribute, Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvUInt16, TlvEnum, TlvInt16 } from "../../tlv/TlvNumber.js";
import { TlvString, TlvByteString } from "../../tlv/TlvString.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * This indicates a channel in a channel lineup.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.1
 */
export const TlvChannelInfoStruct = TlvObject({
    /**
     * This SHALL indicate the channel major number value (for example, using ATSC format). When the channel number is
     * expressed as a string, such as "13.1" or "256", the major number would be 13 or 256, respectively.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.1.1
     */
    majorNumber: TlvField(0, TlvUInt16),

    /**
     * This SHALL indicate the channel minor number value (for example, using ATSC format). When the channel number is
     * expressed as a string, such as "13.1" or "256", the minor number would be 1 or 0, respectively.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.1.2
     */
    minorNumber: TlvField(1, TlvUInt16),

    /**
     * This SHALL indicate the marketing name for the channel, such as “The CW" or "Comedy Central". This field is
     * optional, but SHOULD be provided when known.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.1.3
     */
    name: TlvOptionalField(2, TlvString),

    /**
     * This SHALL indicate the call sign of the channel, such as "PBS". This field is optional, but SHOULD be provided
     * when known.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.1.4
     */
    callSign: TlvOptionalField(3, TlvString),

    /**
     * This SHALL indicate the local affiliate call sign, such as "KCTS". This field is optional, but SHOULD be
     * provided when known.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.1.5
     */
    affiliateCallSign: TlvOptionalField(4, TlvString)
});

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.3
 */
export const enum TlvLineupInfoTypeEnum {
    /**
     * MultiSystemOperator
     */
    Mso = 0
};

/**
 * The Lineup Info allows references to external lineup sources like Gracenote. The combination of OperatorName,
 * LineupName, and PostalCode MUST uniquely identify a lineup.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.2
 */
export const TlvLineupInfoStruct = TlvObject({
    /**
     * This SHALL indicate the name of the operator, for example “Comcast”.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.2.1
     */
    operatorName: TlvField(0, TlvString),

    lineupName: TlvOptionalField(1, TlvString),
    postalCode: TlvOptionalField(2, TlvString),

    /**
     * This SHALL indicate the type of lineup. This field is optional, but SHOULD be provided when known.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.2.4
     */
    lineupInfoType: TlvField(3, TlvEnum<TlvLineupInfoTypeEnum>())
});

/**
 * Change the channel to the channel with the given Number in the ChannelList attribute. The data for this command
 * SHALL be as follows:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.3
 */
export const TlvChangeChannelByNumberRequest = TlvObject({
    /**
     * This SHALL indicate the channel major number value (ATSC format) to which the channel should change.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.3.1
     */
    majorNumber: TlvField(0, TlvUInt16),

    /**
     * This SHALL indicate the channel minor number value (ATSC format) to which the channel should change.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.3.2
     */
    minorNumber: TlvField(1, TlvUInt16)
});

/**
 * This command provides channel up and channel down functionality, but allows channel index jumps of size Count.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.4
 */
export const TlvSkipChannelRequest = TlvObject({
    /**
     * This SHALL indicate the number of steps to increase (Count is positive) or decrease (Count is negative) the
     * current channel.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.4.1
     */
    count: TlvField(0, TlvInt16)
});

/**
 * Change the channel to the channel case-insensitive exact matching the value passed as an argument.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.1
 */
export const TlvChangeChannelRequest = TlvObject({
    /**
     * This SHALL contain a user-input string to match in order to identify the target channel.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.1.1
     */
    match: TlvField(0, TlvString)
});

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.4
 */
export const enum TlvStatusEnum {
    /**
     * Command succeeded
     */
    Success = 0,

    /**
     * More than one equal match for the ChannelInfoStruct passed in.
     */
    MultipleMatches = 1,

    /**
     * No matches for the ChannelInfoStruct passed in.
     */
    NoMatches = 2
};

/**
 * This command SHALL be generated in response to a ChangeChannel command. The data for this command SHALL be as
 * follows:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.2
 */
export const TlvChangeChannelResponseRequest = TlvObject({
    /**
     * This SHALL indicate the status of the command which resulted in this response.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.2.1
     */
    status: TlvField(0, TlvEnum<TlvStatusEnum>()),

    /**
     * This SHALL indicate Optional app-specific data.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.2.2
     */
    data: TlvOptionalField(1, TlvByteString)
});

export namespace ChannelCluster {
    export const id = 0x504;
    export const name = "Channel";
    export const revision = 1;

    export const featureMap = {
        /**
         * ChannelList
         *
         * Provides list of available channels.
         */
        channelList: BitFlag(0),

        /**
         * LineupInfo
         *
         * Provides lineup info, which is a reference to an external source of lineup information.
         */
        lineupInfo: BitFlag(1)
    };

    const ChannelList = {
        attributes: {
            /**
             * This optional list provides the channels supported.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.3.1
             */
            channelList: Attribute(0, TlvArray(TlvChannelInfoStruct), { readAcl: AccessLevel.View })
        }
    };

    const LineupInfo = {
        attributes: {
            /**
             * This optional field identifies the channel lineup using external data sources.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.3.2
             */
            lineup: Attribute(1, TlvNullable(TlvLineupInfoStruct), { default: null, readAcl: AccessLevel.View })
        }
    };

    const Base = {
        attributes: {
            /**
             * This optional field contains the current channel. When supported but a channel is not currently tuned to
             * (if a content application is in foreground), the value of the field SHALL be null.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.3.3
             */
            currentChannel: OptionalAttribute(
                2,
                TlvNullable(TlvChannelInfoStruct),
                { default: null, readAcl: AccessLevel.View }
            )
        },

        commands: {
            /**
             * Change the channel to the channel with the given Number in the ChannelList attribute. The data for this
             * command SHALL be as follows:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.3
             */
            changeChannelByNumber: Command(2, TlvChangeChannelByNumberRequest, 2, TlvNoResponse),

            /**
             * This command provides channel up and channel down functionality, but allows channel index jumps of size
             * Count.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.4
             */
            skipChannel: Command(3, TlvSkipChannelRequest, 3, TlvNoResponse)
        }
    };

    const ChannelListOrLineupInfo = {
        commands: {
            /**
             * Change the channel to the channel case-insensitive exact matching the value passed as an argument.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.1
             */
            changeChannel: Command(0, TlvChangeChannelRequest, 1, TlvChangeChannelResponseRequest),

            /**
             * This command SHALL be generated in response to a ChangeChannel command. The data for this command SHALL
             * be as follows:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.2
             */
            changeChannelResponse: Command(1, TlvChangeChannelResponseRequest, 1, TlvNoResponse)
        }
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        features: featureMap,
        supportedFeatures: { channelList: true, lineupInfo: true },
        elements: [ ChannelList, LineupInfo, Base, ChannelListOrLineupInfo ]
    });
};