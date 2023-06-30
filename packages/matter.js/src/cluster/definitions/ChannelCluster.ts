/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlag } from "../../schema/BitmapSchema.js";
import { OptionalAttribute, AccessLevel, Command, TlvNoResponse, Attribute } from "../../cluster/Cluster.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvUInt16, TlvInt16, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * This indicates a channel in a channel lineup.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.1
 */
export const ChannelInfoStruct = TlvObject({
    /**
     * This SHALL indicate the channel major number value (for example, using
     * ATSC format). When the channel number is expressed as a string, such as
     * "13.1" or "256", the major number would be 13 or 256, respectively.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.1.1
     */
    MajorNumber: TlvField(0, TlvUInt16),

    /**
     * This SHALL indicate the channel minor number value (for example, using
     * ATSC format). When the channel number is expressed as a string, such as
     * "13.1" or "256", the minor number would be 1 or 0, respectively.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.1.2
     */
    MinorNumber: TlvField(1, TlvUInt16),

    /**
     * This SHALL indicate the marketing name for the channel, such as “The CW"
     * or "Comedy Central". This field is optional, but SHOULD be provided when
     * known.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.1.3
     */
    Name: TlvOptionalField(2, TlvString),

    /**
     * This SHALL indicate the call sign of the channel, such as "PBS". This
     * field is optional, but SHOULD be provided when known.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.1.4
     */
    CallSign: TlvOptionalField(3, TlvString),

    /**
     * This SHALL indicate the local affiliate call sign, such as "KCTS". This
     * field is optional, but SHOULD be provided when known.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.1.5
     */
    AffiliateCallSign: TlvOptionalField(4, TlvString)
});

/**
 * Change the channel to the channel with the given Number in the ChannelList
 * attribute. The data for this command SHALL be as follows:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.3
 */
export const ChangeChannelByNumberRequest = TlvObject({
    /**
     * This SHALL indicate the channel major number value (ATSC format) to
     * which the channel should change.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.3.1
     */
    MajorNumber: TlvField(0, TlvUInt16),

    /**
     * This SHALL indicate the channel minor number value (ATSC format) to
     * which the channel should change.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.3.2
     */
    MinorNumber: TlvField(1, TlvUInt16)
});

/**
 * This command provides channel up and channel down functionality, but allows
 * channel index jumps of size Count.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.4
 */
export const SkipChannelRequest = TlvObject({
    /**
     * This SHALL indicate the number of steps to increase (Count is positive)
     * or decrease (Count is negative) the current channel.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.4.1
     */
    Count: TlvField(0, TlvInt16)
});

/**
 * LineupInfoTypeEnum Data Type is derived from enum8.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.3
 */
export const enum LineupInfoTypeEnum {
    /**
     * MultiSystemOperator
     */
    Mso = 0
};

/**
 * The Lineup Info allows references to external lineup sources like Gracenote.
 * The combination of OperatorName, LineupName, and PostalCode MUST uniquely
 * identify a lineup.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.2
 */
export const LineupInfoStruct = TlvObject({
    /**
     * This SHALL indicate the name of the operator, for example “Comcast”.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.2.1
     */
    OperatorName: TlvField(0, TlvString),

    LineupName: TlvOptionalField(1, TlvString),
    PostalCode: TlvOptionalField(2, TlvString),

    /**
     * This SHALL indicate the type of lineup. This field is optional, but
     * SHOULD be provided when known.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.5.2.4
     */
    LineupInfoType: TlvField(3, TlvEnum<LineupInfoTypeEnum>())
});

export namespace ChannelCluster {
    export const id = 1284;
    export const name = "Channel";
    export const revision = 1;

    export const featureMap = {
        /**
         * ChannelList
         *
         * Provides list of available channels.
         */
        CL: BitFlag(0),

        /**
         * LineupInfo
         *
         * Provides lineup info, which is a reference to an external source of
         * lineup information.
         */
        LI: BitFlag(1)
    };

    const Base = {
        attributes: {
            /**
             * This optional field contains the current channel. When supported
             * but a channel is not currently tuned to (if a content
             * application is in foreground), the value of the field SHALL be
             * null.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.3.3
             */
            currentChannel: OptionalAttribute(2, TlvNullable(ChannelInfoStruct), { default: null, readAcl: AccessLevel.View })
        },

        commands: {
            /**
             * Change the channel to the channel with the given Number in the
             * ChannelList attribute. The data for this command SHALL be as
             * follows:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.3
             */
            changeChannelByNumber: Command(2, ChangeChannelByNumberRequest, 2, TlvNoResponse),

            /**
             * This command provides channel up and channel down functionality,
             * but allows channel index jumps of size Count.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.4.4
             */
            skipChannel: Command(3, SkipChannelRequest, 3, TlvNoResponse)
        }
    };

    const CL = {
        attributes: {
            /**
             * This optional list provides the channels supported.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.3.1
             */
            channelList: Attribute(0, TlvArray(ChannelInfoStruct), { readAcl: AccessLevel.View })
        }
    };

    const LI = {
        attributes: {
            /**
             * This optional field identifies the channel lineup using external
             * data sources.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.3.2
             */
            lineup: Attribute(1, TlvNullable(LineupInfoStruct), { default: null, readAcl: AccessLevel.View })
        }
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        features: featureMap,
        supportedFeatures: {
            CL: true,
            LI: true
        },
        elements: [
            Base,
            CL,
            LI
        ]
    });
};