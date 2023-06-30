/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlag } from "../../schema/BitmapSchema.js";
import { Attribute, AccessLevel, OptionalAttribute, WritableAttribute, Command, TlvNoResponse, FixedAttribute, Event, EventPriority } from "../../cluster/Cluster.js";
import { TlvUInt64, TlvEnum, TlvInt32, TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * This data type is derived from enum8.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.16.6.1
 */
export const enum GranularityEnum {
    NoTimeGranularity = 0,
    MinutesGranularity = 1,
    SecondsGranularity = 2,
    MillisecondsGranularity = 3,
    MicrosecondsGranularity = 4
};

/**
 * This data type is derived from enum8.
 *
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
     * NTP from multiple servers on Fabric and external. None of the servers
     * used NTS.
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
     * NTP from multiple servers on the Fabric and external. NTS is used on at
     * least one server.
     */
    MixedNtpNts = 13,

    /**
     * Time synchronization comes from a vendor cloud-based source (e.g. "Date"
     * header in authenticated HTTPS connection).
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
};

/**
 * The data for this command are as follows:
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.16.9.1
 */
export const SetUtcTimeRequest = TlvObject({
    /**
     * This SHALL give the Client’s UTC Time.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.16.9.1.1
     */
    UtcTime: TlvField(0, TlvUInt64),

    /**
     * This SHALL give the Client’s Granularity, as described in Section
     * 11.16.8.2, “Granularity Attribute”.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.16.9.1.2
     */
    Granularity: TlvField(1, TlvEnum<GranularityEnum>()),

    /**
     * This SHALL give the Client’s TimeSource, as described in Section
     * 11.16.8.3, “TimeSource Attribute”.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.16.9.1.3
     */
    TimeSource: TlvOptionalField(2, TlvEnum<TimeSourceEnum>())
});

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.16.6.3
 */
export const TimeZoneStruct = TlvObject({
    /**
     * The time zone offset from UTC in seconds.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.16.6.3.1
     */
    Offset: TlvField(0, TlvInt32),

    /**
     * The UTC time when the offset SHALL be applied.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.16.6.3.2
     */
    ValidAt: TlvField(1, TlvUInt64),

    /**
     * The time zone name SHOULD provide a human-readable time zone name and it
     * SHOULD use the country/city format specified by the IANA time zone
     * database [https://www.iana.org/time-zones].
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.16.6.3.3
     */
    Name: TlvOptionalField(2, TlvString.bound({ maxLength: 64 }))
});

/**
 * The DST offset in seconds. Normally this is in the range of 0 to 3600
 * seconds (1 hour), but this field will accept any values in the int32 range
 * to accommodate potential future legislation that does not fit with these
 * assumptions.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.16.6.4
 */
export const DSTOffsetStruct = TlvObject({
    Offset: TlvField(0, TlvInt32),

    /**
     * The UTC time when the offset SHALL be applied.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.16.6.4.1
     */
    ValidStarting: TlvField(1, TlvUInt64),

    /**
     * The UTC time when the offset SHALL stop being applied. This value SHALL
     * be larger than the ValidStarting time.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.16.6.4.2
     */
    ValidUntil: TlvField(2, TlvUInt64)
});

/**
 * This event SHALL be generated when the server changes its time zone offset
 * or name. It SHALL NOT be sent for DST changes that are not accompanied by a
 * time zone change.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.16.10.3
 */
export const TimeZoneStatusEvent = TlvObject({
    Offset: TlvField(0, TlvInt32),
    Name: TlvOptionalField(1, TlvString)
});

export namespace TimeSyncCluster {
    export const id = 56;
    export const name = "TimeSync";
    export const revision = 1;

    export const featureMap = {
        /**
         * TimeZone
         *
         * Server supports time zone.
         */
        TZ: BitFlag(0),

        /**
         * NtpClient
         *
         * Server supports an NTP or SNTP client.
         */
        NTPC: BitFlag(1),

        /**
         * NtpServer
         *
         * Server supports an NTP server role.
         */
        NTPS: BitFlag(2)
    };

    const Base = {
        attributes: {
            /**
             * If the server has achieved time synchronization, this SHALL
             * indicate the current time as a UTC epoch-us (Epoch Time in
             * Microseconds).
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.8.1
             */
            utcTime: Attribute(0, TlvNullable(TlvUInt64), { omitChanges: true, default: null, readAcl: AccessLevel.View }),

            /**
             * The granularity of the error that the server is willing to
             * guarantee on the time synchronization. It is of type
             * GranularityEnum.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.8.2
             */
            granularity: Attribute(1, TlvEnum<GranularityEnum>(), { readAcl: AccessLevel.View }),

            /**
             * The server’s time source. This attribute indicates what method
             * the server is using to sync, whether the source uses NTS or not
             * and whether the source is internal or external to the Fabric.
             * This attribute MAY be used by a client to determine its level of
             * trust in the UTCTime. It is of type TimeSourceEnum.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.8.3
             */
            timeSource: OptionalAttribute(2, TlvEnum<TimeSourceEnum>(), { readAcl: AccessLevel.View }),

            /**
             * The Node ID of a trusted Time Cluster. The TrustedTimeNodeId
             * Node is used as a check on external time sync sources and MAY be
             * used as the primary time source if other time sources are
             * unavailable. See Section 11.16.13, “Time source prioritization”.
             * This attribute is writeable only by an Administrator. It SHOULD
             * be set by the Commissioner during commissioning. If no
             * appropriate TrustedTimeNodeId is available, the commissioner MAY
             * set this value to null.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.8.5
             */
            trustedTimeNodeId: WritableAttribute(3, TlvNullable(TlvUInt64), { default: null, readAcl: AccessLevel.View, writeAcl: AccessLevel.Administer })
        },

        commands: {
            /**
             * The data for this command are as follows:
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.9.1
             */
            setUtcTime: Command(0, SetUtcTimeRequest, 0, TlvNoResponse)
        }
    };

    const NTPC = {
        attributes: {
            /**
             * The default NTP server the server’s Node may use if other time
             * sources are unavailable. This attribute may contain a domain
             * name or a static IPv6 address in text format as specified in RFC
             * 5952 [https://tools.ietf.org/html/rfc5952]. See Section
             * 11.16.13, “Time source prioritization”. This attribute is
             * writeable only by an Administrator. It SHOULD be set by the
             * Commissioner during commissioning. If no default NTP is
             * available, the Commissioner MAY set this value to null.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.8.4
             */
            defaultNtp: WritableAttribute(4, TlvNullable(TlvString.bound({ maxLength: 128 })), { default: null, readAcl: AccessLevel.View, writeAcl: AccessLevel.Administer })
        }
    };

    const TZ = {
        attributes: {
            /**
             * A list of time zone offsets from UTC and when they SHALL take
             * effect. This attribute uses a list of time offset configurations
             * to allow Nodes to handle scheduled regulatory time zone changes.
             * This attribute SHALL NOT be used to indicate daylight savings
             * time changes (see Section 11.16.8.7, “DSTOffset Attribute” for
             * daylight savings time).
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.8.6
             */
            timeZone: WritableAttribute(5, TlvArray(TimeZoneStruct), { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }),

            /**
             * A list of offsets to apply for daylight savings time, and their
             * validity period. List entries SHALL be sorted by ValidStarting
             * time.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.8.7
             */
            dstOffset: WritableAttribute(6, TlvArray(DSTOffsetStruct), { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }),

            /**
             * The computed current local time of the server as a epoch-us
             * (Epoch Time in Microseconds). The local time offset of the value
             * is the sum of the currently used TimeZoneEntry’s offset and the
             * currently used DST offset, if any.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.8.8
             */
            localTime: Attribute(7, TlvNullable(TlvUInt64), { omitChanges: true, readAcl: AccessLevel.View }),

            /**
             * Indicates whether the server has access to a time zone database.
             * Nodes with a time zone database MAY update their own DSTOffset
             * attribute to add new entries and MAY push DSTOffset updates to
             * other Nodes in the same time zone as required.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.8.9
             */
            timeZoneDatabase: FixedAttribute(8, TlvBoolean, { default: true, readAcl: AccessLevel.View })
        },

        events: {
            /**
             * This event SHALL be generated when the server stops applying the
             * current DSTOffset and there are no entries in the list with a
             * larger ValidStarting time, indicating the need to possibly get
             * new DST data.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.10.1
             */
            dstTableEmpty: Event(0, EventPriority.Info, TlvNoArguments),

            /**
             * This event SHALL be generated when the server starts or stops
             * applying a DST offset.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.10.2
             */
            dstStatus: Event(1, EventPriority.Info, TlvNoArguments),

            /**
             * This event SHALL be generated when the server changes its time
             * zone offset or name. It SHALL NOT be sent for DST changes that
             * are not accompanied by a time zone change.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.10.3
             */
            timeZoneStatus: Event(2, EventPriority.Info, TimeZoneStatusEvent)
        }
    };

    const NTPS = {
        attributes: {
            /**
             * If the server is running an NTP server, this value SHALL be the
             * port number for the service. If the server is not currently
             * running an NTP server, this value SHALL be null.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.16.8.10
             */
            ntpServerPort: Attribute(9, TlvNullable(TlvUInt16), { default: null, readAcl: AccessLevel.View })
        }
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        features: featureMap,
        supportedFeatures: {
            TZ: true,
            NTPC: true,
            NTPS: true
        },

        elements: [
            Base,
            NTPC,
            TZ,
            NTPS
        ]
    });
};