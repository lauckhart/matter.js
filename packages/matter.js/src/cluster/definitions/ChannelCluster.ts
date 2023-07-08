/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlags, TypeFromPartialBitSchema, BitFlag } from "../../schema/BitmapSchema.js";
import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { extendCluster, ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { OptionalAttribute, AccessLevel, Command, TlvNoResponse, Attribute } from "../../cluster/Cluster.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvUInt16, TlvInt16, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvString, TlvByteString } from "../../tlv/TlvString.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvArray } from "../../tlv/TlvArray.js";

/**
 * Channel
 *
 * This cluster provides an interface for controlling the current Channel on a device.
 *
 * This function creates a Channel cluster supporting a specific set of features.  Include each
 * {@link ChannelCluster.Feature} you wish to support.
 *
 * @param features a list of {@link ChannelCluster.Feature} to support
 * @returns a Channel cluster with specified features enabled
 * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6
 */
export function ChannelCluster<T extends ChannelCluster.Feature[]>(...features: [ ...T ]) {
    const cluster = {
        ...ChannelCluster.Metadata,
        supportedFeatures: BitFlags(ChannelCluster.Metadata.features, ...features),
        ...ChannelCluster.BaseComponent
    };
    extendCluster(cluster, ChannelCluster.ChannelListComponent, { channelList: true });
    extendCluster(cluster, ChannelCluster.LineupInfoComponent, { lineupInfo: true });
    extendCluster(cluster, ChannelCluster.ChannelListOrLineupInfoComponent, { channelList: true }, { lineupInfo: true });
    return cluster as unknown as ChannelCluster.Type<BitFlags<typeof ChannelCluster.Metadata.features, T>>;
};

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
    /**
     * These are optional features supported by ChannelCluster.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.2
     */
    export enum Feature {
        /**
         * ChannelList
         *
         * Provides list of available channels.
         */
        ChannelList = "ChannelList",

        /**
         * LineupInfo
         *
         * Provides lineup info, which is a reference to an external source of lineup information.
         */
        LineupInfo = "LineupInfo"
    };

    export type Type<T extends TypeFromPartialBitSchema<typeof Metadata.features>> = 
        typeof Metadata
        & { supportedFeatures: T }
        & typeof BaseComponent
        & (T extends { channelList: true } ? typeof ChannelListComponent : {})
        & (T extends { lineupInfo: true } ? typeof LineupInfoComponent : {})
        & (T extends { channelList: true } | { lineupInfo: true } ? typeof ChannelListOrLineupInfoComponent : {});

    /**
     * Channel cluster metadata.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6
     */
    export const Metadata = ClusterMetadata({
        id: 0x504,
        name: "Channel",
        revision: 1,

        features: {
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
        }
    });

    /**
     * A ChannelCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
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
    });

    /**
     * A ChannelCluster supports these elements if it supports feature ChannelList.
     */
    export const ChannelListComponent = ClusterComponent({
        attributes: {
            /**
             * This optional list provides the channels supported.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.3.1
             */
            channelList: Attribute(0, TlvArray(TlvChannelInfoStruct), { default: [], readAcl: AccessLevel.View })
        }
    });

    /**
     * A ChannelCluster supports these elements if it supports feature LineupInfo.
     */
    export const LineupInfoComponent = ClusterComponent({
        attributes: {
            /**
             * This optional field identifies the channel lineup using external data sources.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.6.3.2
             */
            lineup: Attribute(1, TlvNullable(TlvLineupInfoStruct), { default: null, readAcl: AccessLevel.View })
        }
    });

    /**
     * A ChannelCluster supports these elements if it supports features ChannelList, or LineupInfo.
     */
    export const ChannelListOrLineupInfoComponent = ClusterComponent({
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
    });

    /**
     * This cluster supports all Channel features.  It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export const Complete = {
        ...Metadata,
        attributes: { ...BaseComponent.attributes, ...ChannelListComponent.attributes, ...LineupInfoComponent.attributes },
        commands: { ...BaseComponent.commands, ...ChannelListOrLineupInfoComponent.commands }
    };
};
