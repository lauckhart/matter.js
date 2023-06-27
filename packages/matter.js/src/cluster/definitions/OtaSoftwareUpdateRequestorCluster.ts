/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, WritableAttribute, Attribute, AccessLevel, OptionalCommand, TlvNoResponse, Event, EventPriority } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvUInt16, TlvUInt64, TlvEnum, TlvUInt8, TlvUInt32, TlvInt64 } from "../../tlv/TlvNumber.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvByteString } from "../../tlv/TlvString.js";

/**
 * This structure encodes a fabric-scoped location of an OTA provider on a
 * given fabric.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.4.20
 */
export const ProviderLocationStruct = TlvObject({
    Endpoint: TlvField(2, TlvUInt16),
    ProviderNodeId: TlvField(1, TlvUInt64)
});

/**
 * This data type is derived from enum8.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.4.5
 */
export const enum UpdateStateEnum {
    Unknown = 0,
    Idle = 1,
    Querying = 2,
    DelayedOnQuery = 3,
    Downloading = 4,
    Applying = 5,
    DelayedOnApply = 6,
    RollingBack = 7,
    DelayedOnUserConsent = 8
};

/**
 * This data type is derived from enum8.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.4.1
 */
export const enum AnnouncementReasonEnum {
    SimpleAnnouncement = 0,
    UpdateAvailable = 1,
    UrgentUpdateAvailable = 2
};

/**
 * This command MAY be invoked by Administrators to announce the presence of a
 * particular OTA Provider.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.6.1
 */
export const AnnounceOtaProviderRequest = TlvObject({
    ProviderNodeId: TlvField(0, TlvUInt64),
    VendorId: TlvField(1, TlvUInt16),
    AnnouncementReason: TlvField(2, TlvEnum<AnnouncementReasonEnum>()),
    MetadataForNode: TlvOptionalField(3, TlvByteString.bound({ maxLength: 512 })),
    Endpoint: TlvField(4, TlvUInt16)
});

/**
 * The ChangeReasonEnum Data Type is derived from enum8.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.4.15
 */
export const enum ChangeReasonEnum {
    Unknown = 0,
    Success = 1,
    Failure = 2,
    TimeOut = 3,
    DelayByProvider = 4
};

/**
 * This event SHALL be generated when a change of the UpdateState attribute
 * occurs due to an OTA Requestor moving through the states necessary to query
 * for updates.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.7.1
 */
export const StateTransitionEvent = TlvObject({
    PreviousState: TlvField(0, TlvEnum<UpdateStateEnum>()),
    NewState: TlvField(1, TlvEnum<UpdateStateEnum>()),
    Reason: TlvField(2, TlvEnum<ChangeReasonEnum>()),
    TargetSoftwareVersion: TlvField(3, TlvNullable(TlvUInt32))
});

/**
 * This event SHALL be generated whenever a new version starts executing after
 * being applied due to a software update. This event SHOULD be generated even
 * if a software update was done using means outside of this cluster.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.7.6
 */
export const VersionAppliedEvent = TlvObject({
    SoftwareVersion: TlvField(0, TlvUInt32),
    ProductId: TlvField(1, TlvUInt16)
});

/**
 * This event SHALL be generated whenever an error occurs during OTA Requestor
 * download operation.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.7.9
 */
export const DownloadErrorEvent = TlvObject({
    SoftwareVersion: TlvField(0, TlvUInt32),
    BytesDownloaded: TlvField(1, TlvUInt64),
    ProgressPercent: TlvField(2, TlvNullable(TlvUInt8)),
    PlatformCode: TlvField(3, TlvNullable(TlvInt64))
});

export namespace OtaSoftwareUpdateRequestorCluster {
    /**
     * OTA Software Update Requestor
     *
     * Provides an interface for downloading and applying OTA software updates
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `OtaSoftwareUpdateRequestor.with()` and a
     * list of supported features.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.19.7
     */
    export const Complete = Cluster({
        id: 0x2a,
        name: "OtaSoftwareUpdateRequestor",
        revision: 1,

        attributes: {
            /**
             * This field is a list of ProviderLocationStruct whose entries
             * SHALL be set by Administrators, either during Commissioning or
             * at a later time, to set the Provider Location for the default
             * OTA Provider Node to use for software updates on a given Fabric.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.5.1
             */
            defaultOtaProviders: WritableAttribute(0, TlvArray(ProviderLocationStruct)),

            /**
             * This field SHALL be set to True if the OTA Requestor is
             * currently able to be updated. Otherwise, it SHALL be set to
             * False in case of any condition preventing update being possible,
             * such as insufficient capacity of an internal battery. This field
             * is merely informational for diagnostics purposes and SHALL NOT
             * affect the responses provided by an OTA Provider to an OTA
             * Requestor.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.5.2
             */
            updatePossible: Attribute(1, TlvBoolean, { default: true, readAcl: AccessLevel.View }),

            /**
             * This field SHALL reflect the current state of the OTA Requestor
             * with regards to obtaining software updates. See Section
             * 11.19.7.4.2, “UpdateStateEnum” for possible values.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.5.3
             */
            updateState: Attribute(2, TlvEnum<UpdateStateEnum>(), { readAcl: AccessLevel.View }),

            /**
             * This field SHALL reflect the percentage value of progress,
             * relative to the current UpdateState, if applicable to the state.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.5.4
             */
            updateStateProgress: Attribute(3, TlvNullable(TlvUInt8), { default: null, readAcl: AccessLevel.View })
        },

        commands: {
            /**
             * This command MAY be invoked by Administrators to announce the
             * presence of a particular OTA Provider.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.6.1
             */
            announceOtaProvider: OptionalCommand(0, AnnounceOtaProviderRequest, 0, TlvNoResponse)
        },

        events: {
            /**
             * This event SHALL be generated when a change of the UpdateState
             * attribute occurs due to an OTA Requestor moving through the
             * states necessary to query for updates.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.7.1
             */
            stateTransition: Event(0, EventPriority.Info, StateTransitionEvent),

            /**
             * This event SHALL be generated whenever a new version starts
             * executing after being applied due to a software update. This
             * event SHOULD be generated even if a software update was done
             * using means outside of this cluster.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.7.6
             */
            versionApplied: Event(1, EventPriority.Critical, VersionAppliedEvent),

            /**
             * This event SHALL be generated whenever an error occurs during
             * OTA Requestor download operation.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.7.9
             */
            downloadError: Event(2, EventPriority.Info, DownloadErrorEvent)
        }
    });
};