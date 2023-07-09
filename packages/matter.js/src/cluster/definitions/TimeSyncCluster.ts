/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { BitFlags, TypeFromPartialBitSchema, BitFlag } from "../../schema/BitmapSchema.js";
import { extendCluster, ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { GlobalAttributes, Attribute, AccessLevel, OptionalAttribute, WritableAttribute, Command, TlvNoResponse, FixedAttribute, Event, EventPriority, Cluster } from "../../cluster/Cluster.js";
import { TlvUInt64, TlvEnum, TlvInt32, TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

/**
 * Time Synchronization
 *
 * Accurate time is required for a number of reasons, including scheduling, display and validating security materials.
 *
 * Use this factory function to create a TimeSync cluster supporting a specific set of features.  Include each
 * {@link TimeSyncCluster.Feature} you wish to support.
 *
 * @param features a list of {@link TimeSyncCluster.Feature} to support
 * @returns a TimeSync cluster with specified features enabled
 * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.16
 */
export function TimeSyncCluster<T extends TimeSyncCluster.Feature[]>(...features: [...T]) {
    const cluster = Cluster({
        ...TimeSyncCluster.Metadata,
        supportedFeatures: BitFlags(TimeSyncCluster.Metadata.features, ...features),
        ...TimeSyncCluster.BaseComponent
    });
    extendCluster(cluster, TimeSyncCluster.NtpClientComponent, { ntpClient: true });
    extendCluster(cluster, TimeSyncCluster.TimeZoneComponent, { timeZone: true });
    extendCluster(cluster, TimeSyncCluster.NtpServerComponent, { ntpServer: true });
    return cluster as unknown as TimeSyncCluster.Type<BitFlags<typeof TimeSyncCluster.Metadata.features, T>>;
}

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.16.6.1
 */
export const enum GranularityEnum {
    NoTimeGranularity = 0,
    MinutesGranularity = 1,
    SecondsGranularity = 2,
    MillisecondsGranularity = 3,
    MicrosecondsGranularity = 4
}

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.16.6.2
 */
export const enum TimeSourceEnum {
    /**
     * Server is not currently synchronized with a UTC Time source.
     */
    None = 0,

    /**
     * Server uses an unlisted time source.
     */
    Unknown = 1,

    /**
     * Server received time from the Section 11.16.9.1, “SetUtcTime Command”.
     */
    Admin = 2,

    /**
     * Synchronized time by querying the Time Cluster of another Node.
     */
    NodeTimeCluster = 3,

    /**
     * SNTP from a server not in the Fabric. NTS is not used.
     */
    NonFabricSntp = 4,

    /**
     * NTP from servers not in the Fabric. None of the servers used NTS.
     */
    NonFabricNtp = 5,

    /**
     * SNTP from a server within the Fabric. NTS is not used.
     */
    FabricSntp = 6,

    /**
     * NTP from a servers within the Fabric. None of the servers used NTS.
     */
    FabricNtp = 7,

    /**
     * NTP from multiple servers on Fabric and external. None of the servers used NTS.
     */
    MixedNtp = 8,

    /**
     * SNTP from a server not in the Fabric. NTS is used.
     */
    NonFabricSntpNts = 9,

    /**
     * NTP from servers not in the Fabric. NTS is used on at least one server.
     */
    NonFabricNtpNts = 10,

    /**
     * SNTP from a server within the Fabric. NTS is used.
     */
    FabricSntpNts = 11,

    /**
     * NTP from a server within the Fabric. NTS is used on at least one server.
     */
    FabricNtpNts = 12,

    /**
     * NTP from multiple servers on the Fabric and external. NTS is used on at least one server.
     */
    MixedNtpNts = 13,

    /**
     * Time synchronization comes from a vendor cloud-based source (e.g. "Date" header in authenticated HTTPS
     * connection).
     */
    CloudSource = 14,

    /**
     * Time synchronization comes from PTP.
     */
    Ptp = 15,

    /**
     * Time synchronization comes from a GNSS source.
     */
    Gnss = 16
}

/**
 * The data for this command are as follows:
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.16.9.1
 */
export const TlvSetUtcTimeRequest = TlvObject({
    /**
     * This SHALL give the Client’s UTC Time.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.16.9.1.1
     */
    utcTime: TlvField(0, TlvUInt64),

    /**
     * This SHALL give the Client’s Granularity, as described in Section 11.16.8.2, “Granularity Attribute”.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.16.9.1.2
     */
    granularity: TlvField(1, TlvEnum<GranularityEnum>()),

    /**
     * This SHALL give the Client’s TimeSource, as described in Section 11.16.8.3, “TimeSource Attribute”.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.16.9.1.3
     */
    timeSource: TlvOptionalField(2, TlvEnum<TimeSourceEnum>())
});

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.16.6.3
 */
export const TlvTimeZoneStruct = TlvObject({
    /**
     * The time zone offset from UTC in seconds.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.16.6.3.1
     */
    offset: TlvField(0, TlvInt32.bound({ min: -43200, max: 50400 })),

    /**
     * The UTC time when the offset SHALL be applied.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.16.6.3.2
     */
    validAt: TlvField(1, TlvUInt64),

    /**
     * The time zone name SHOULD provide a human-readable time zone name and it SHOULD use the country/city format
     * specified by the IANA time zone database [https://www.iana.org/time-zones].
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.16.6.3.3
     */
    name: TlvOptionalField(2, TlvString.bound({ maxLength: 64 }))
});

/**
 * The DST offset in seconds. Normally this is in the range of 0 to 3600 seconds (1 hour), but this field will accept
 * any values in the int32 range to accommodate potential future legislation that does not fit with these assumptions.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.16.6.4
 */
export const TlvDSTOffsetStruct = TlvObject({
    offset: TlvField(0, TlvInt32),

    /**
     * The UTC time when the offset SHALL be applied.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.16.6.4.1
     */
    validStarting: TlvField(1, TlvUInt64),

    /**
     * The UTC time when the offset SHALL stop being applied. This value SHALL be larger than the ValidStarting time.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.16.6.4.2
     */
    validUntil: TlvField(2, TlvUInt64)
});

/**
 * This event SHALL be generated when the server changes its time zone offset or name. It SHALL NOT be sent for DST
 * changes that are not accompanied by a time zone change.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.16.10.3
 */
export const TlvTimeZoneStatusEvent = TlvObject({
    offset: TlvField(0, TlvInt32.bound({ min: -43200, max: 50400 })),
    name: TlvOptionalField(1, TlvString.bound({ maxLength: 64 }))
});

export namespace TimeSyncCluster {
    /**
     * These are optional features supported by TimeSyncCluster.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.16.5
     */
    export enum Feature {
        /**
         * TimeZone
         *
         * Server supports time zone.
         */
        TimeZone = "TimeZone",

        /**
         * NtpClient
         *
         * Server supports an NTP or SNTP client.
         */
        NtpClient = "NtpClient",

        /**
         * NtpServer
         *
         * Server supports an NTP server role.
         */
        NtpServer = "NtpServer"
    }

    export type Type<T extends TypeFromPartialBitSchema<typeof Metadata.features>> =
        typeof Metadata
        & { attributes: GlobalAttributes<typeof Metadata.features> }
        & { supportedFeatures: T }
        & typeof BaseComponent
        & (T extends { ntpClient: true } ? typeof NtpClientComponent : {})
        & (T extends { timeZone: true } ? typeof TimeZoneComponent : {})
        & (T extends { ntpServer: true } ? typeof NtpServerComponent : {});

    /**
     * TimeSync cluster metadata.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.16
     */
    export const Metadata = ClusterMetadata({
        id: 0x38,
        name: "TimeSync",
        revision: 1,

        features: {
            /**
             * TimeZone
             *
             * Server supports time zone.
             */
            timeZone: BitFlag(0),

            /**
             * NtpClient
             *
             * Server supports an NTP or SNTP client.
             */
            ntpClient: BitFlag(1),

            /**
             * NtpServer
             *
             * Server supports an NTP server role.
             */
            ntpServer: BitFlag(2)
        }
    });

    /**
     * A TimeSyncCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * If the server has achieved time synchronization, this SHALL indicate the current time as a UTC epoch-us
             * (Epoch Time in Microseconds).
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.8.1
             */
            utcTime: Attribute(0, TlvNullable(TlvUInt64), { omitChanges: true, default: null, readAcl: AccessLevel.View }),

            /**
             * The granularity of the error that the server is willing to guarantee on the time synchronization. It is
             * of type GranularityEnum.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.8.2
             */
            granularity: Attribute(1, TlvEnum<GranularityEnum>(), { default: 0, readAcl: AccessLevel.View }),

            /**
             * The server’s time source. This attribute indicates what method the server is using to sync, whether the
             * source uses NTS or not and whether the source is internal or external to the Fabric. This attribute MAY
             * be used by a client to determine its level of trust in the UTCTime. It is of type TimeSourceEnum.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.8.3
             */
            timeSource: OptionalAttribute(2, TlvEnum<TimeSourceEnum>(), { default: 0, readAcl: AccessLevel.View }),

            /**
             * The Node ID of a trusted Time Cluster. The TrustedTimeNodeId Node is used as a check on external time
             * sync sources and MAY be used as the primary time source if other time sources are unavailable. See
             * Section 11.16.13, “Time source prioritization”. This attribute is writeable only by an Administrator. It
             * SHOULD be set by the Commissioner during commissioning. If no appropriate TrustedTimeNodeId is
             * available, the commissioner MAY set this value to null.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.8.5
             */
            trustedTimeNodeId: WritableAttribute(
                3,
                TlvNullable(TlvUInt64),
                { default: null, readAcl: AccessLevel.View, writeAcl: AccessLevel.Administer }
            )
        },

        commands: {
            /**
             * The data for this command are as follows:
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.9.1
             */
            setUtcTime: Command(0, TlvSetUtcTimeRequest, 0, TlvNoResponse)
        }
    });

    /**
     * A TimeSyncCluster supports these elements if it supports feature NtpClient.
     */
    export const NtpClientComponent = ClusterComponent({
        attributes: {
            /**
             * The default NTP server the server’s Node may use if other time sources are unavailable. This attribute
             * may contain a domain name or a static IPv6 address in text format as specified in RFC 5952
             * [https://tools.ietf.org/html/rfc5952]. See Section 11.16.13, “Time source prioritization”. This
             * attribute is writeable only by an Administrator. It SHOULD be set by the Commissioner during
             * commissioning. If no default NTP is available, the Commissioner MAY set this value to null.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.8.4
             */
            defaultNtp: WritableAttribute(
                4,
                TlvNullable(TlvString.bound({ maxLength: 128 })),
                { default: null, readAcl: AccessLevel.View, writeAcl: AccessLevel.Administer }
            )
        }
    });

    /**
     * A TimeSyncCluster supports these elements if it supports feature TimeZone.
     */
    export const TimeZoneComponent = ClusterComponent({
        attributes: {
            /**
             * A list of time zone offsets from UTC and when they SHALL take effect. This attribute uses a list of time
             * offset configurations to allow Nodes to handle scheduled regulatory time zone changes. This attribute
             * SHALL NOT be used to indicate daylight savings time changes (see Section 11.16.8.7, “DSTOffset
             * Attribute” for daylight savings time).
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.8.6
             */
            timeZone: WritableAttribute(
                5,
                TlvArray(TlvTimeZoneStruct),
                { default: [], readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * A list of offsets to apply for daylight savings time, and their validity period. List entries SHALL be
             * sorted by ValidStarting time.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.8.7
             */
            dstOffset: WritableAttribute(
                6,
                TlvArray(TlvDSTOffsetStruct),
                { default: [], readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The computed current local time of the server as a epoch-us (Epoch Time in Microseconds). The local time
             * offset of the value is the sum of the currently used TimeZoneEntry’s offset and the currently used DST
             * offset, if any.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.8.8
             */
            localTime: Attribute(7, TlvNullable(TlvUInt64), { omitChanges: true, default: 0, readAcl: AccessLevel.View }),

            /**
             * Indicates whether the server has access to a time zone database. Nodes with a time zone database MAY
             * update their own DSTOffset attribute to add new entries and MAY push DSTOffset updates to other Nodes in
             * the same time zone as required.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.8.9
             */
            timeZoneDatabase: FixedAttribute(8, TlvBoolean, { default: true, readAcl: AccessLevel.View })
        },

        events: {
            /**
             * This event SHALL be generated when the server stops applying the current DSTOffset and there are no
             * entries in the list with a larger ValidStarting time, indicating the need to possibly get new DST data.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.10.1
             */
            dstTableEmpty: Event(0, EventPriority.Info, TlvNoArguments),

            /**
             * This event SHALL be generated when the server starts or stops applying a DST offset.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.10.2
             */
            dstStatus: Event(1, EventPriority.Info, TlvNoArguments),

            /**
             * This event SHALL be generated when the server changes its time zone offset or name. It SHALL NOT be sent
             * for DST changes that are not accompanied by a time zone change.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.10.3
             */
            timeZoneStatus: Event(2, EventPriority.Info, TlvTimeZoneStatusEvent)
        }
    });

    /**
     * A TimeSyncCluster supports these elements if it supports feature NtpServer.
     */
    export const NtpServerComponent = ClusterComponent({
        attributes: {
            /**
             * If the server is running an NTP server, this value SHALL be the port number for the service. If the
             * server is not currently running an NTP server, this value SHALL be null.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.8.10
             */
            ntpServerPort: Attribute(9, TlvNullable(TlvUInt16), { default: null, readAcl: AccessLevel.View })
        }
    });

    /**
     * This cluster supports all TimeSync features.  It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export const Complete = Cluster({
        ...Metadata,

        attributes: {
            ...BaseComponent.attributes,
            ...NtpClientComponent.attributes,
            ...TimeZoneComponent.attributes,
            ...NtpServerComponent.attributes
        },

        commands: { ...BaseComponent.commands },
        events: { ...TimeZoneComponent.events }
    });
}
