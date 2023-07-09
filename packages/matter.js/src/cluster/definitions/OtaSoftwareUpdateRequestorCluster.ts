/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { GlobalAttributes, WritableFabricScopedAttribute, AccessLevel, Attribute, OptionalCommand, TlvNoResponse, Event, EventPriority, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvUInt64, TlvUInt16, TlvEnum, TlvUInt8, TlvUInt32, TlvInt64 } from "../../tlv/TlvNumber.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvByteString } from "../../tlv/TlvString.js";

/**
 * OTA Software Update Requestor
 *
 * Provides an interface for downloading and applying OTA software updates
 *
 * This function creates an OtaSoftwareUpdateRequestor cluster.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.7
 */
export function OtaSoftwareUpdateRequestorCluster() {
    const cluster = Cluster({
        ...OtaSoftwareUpdateRequestorCluster.Metadata,
        ...OtaSoftwareUpdateRequestorCluster.BaseComponent
    });
    return cluster as unknown as OtaSoftwareUpdateRequestorCluster.Type;
}

/**
 * This structure encodes a fabric-scoped location of an OTA provider on a given fabric.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.4.20
 */
export const TlvProviderLocationStruct = TlvObject({
    providerNodeId: TlvField(1, TlvUInt64),
    endpoint: TlvField(2, TlvUInt16)
});

/**
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
}

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.4.1
 */
export const enum AnnouncementReasonEnum {
    SimpleAnnouncement = 0,
    UpdateAvailable = 1,
    UrgentUpdateAvailable = 2
}

/**
 * This command MAY be invoked by Administrators to announce the presence of a particular OTA Provider.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.6.1
 */
export const TlvAnnounceOtaProviderRequest = TlvObject({
    providerNodeId: TlvField(0, TlvUInt64),
    vendorId: TlvField(1, TlvUInt16),
    announcementReason: TlvField(2, TlvEnum<AnnouncementReasonEnum>()),
    metadataForNode: TlvOptionalField(3, TlvByteString.bound({ maxLength: 512 })),
    endpoint: TlvField(4, TlvUInt16)
});

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.4.15
 */
export const enum ChangeReasonEnum {
    Unknown = 0,
    Success = 1,
    Failure = 2,
    TimeOut = 3,
    DelayByProvider = 4
}

/**
 * This event SHALL be generated when a change of the UpdateState attribute occurs due to an OTA Requestor moving
 * through the states necessary to query for updates.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.7.1
 */
export const TlvStateTransitionEvent = TlvObject({
    previousState: TlvField(0, TlvEnum<UpdateStateEnum>()),
    newState: TlvField(1, TlvEnum<UpdateStateEnum>()),
    reason: TlvField(2, TlvEnum<ChangeReasonEnum>()),
    targetSoftwareVersion: TlvField(3, TlvNullable(TlvUInt32))
});

/**
 * This event SHALL be generated whenever a new version starts executing after being applied due to a software update.
 * This event SHOULD be generated even if a software update was done using means outside of this cluster.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.7.6
 */
export const TlvVersionAppliedEvent = TlvObject({
    softwareVersion: TlvField(0, TlvUInt32),
    productId: TlvField(1, TlvUInt16)
});

/**
 * This event SHALL be generated whenever an error occurs during OTA Requestor download operation.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.7.9
 */
export const TlvDownloadErrorEvent = TlvObject({
    softwareVersion: TlvField(0, TlvUInt32),
    bytesDownloaded: TlvField(1, TlvUInt64),
    progressPercent: TlvField(2, TlvNullable(TlvUInt8.bound({ max: 100 }))),
    platformCode: TlvField(3, TlvNullable(TlvInt64))
});

export namespace OtaSoftwareUpdateRequestorCluster {
    export type Type =
        typeof Metadata
        & { attributes: GlobalAttributes<{}> }
        & typeof BaseComponent;

    /**
     * OtaSoftwareUpdateRequestor cluster metadata.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.19.7
     */
    export const Metadata = ClusterMetadata({ id: 0x2a, name: "OtaSoftwareUpdateRequestor", revision: 1, features: {} });

    /**
     * A OtaSoftwareUpdateRequestorCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * This field is a list of ProviderLocationStruct whose entries SHALL be set by Administrators, either
             * during Commissioning or at a later time, to set the Provider Location for the default OTA Provider Node
             * to use for software updates on a given Fabric.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.5.1
             */
            defaultOtaProviders: WritableFabricScopedAttribute(
                0,
                TlvArray(TlvProviderLocationStruct),
                { default: [], readAcl: AccessLevel.View, writeAcl: AccessLevel.Administer }
            ),

            /**
             * This field SHALL be set to True if the OTA Requestor is currently able to be updated. Otherwise, it
             * SHALL be set to False in case of any condition preventing update being possible, such as insufficient
             * capacity of an internal battery. This field is merely informational for diagnostics purposes and SHALL
             * NOT affect the responses provided by an OTA Provider to an OTA Requestor.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.5.2
             */
            updatePossible: Attribute(1, TlvBoolean, { default: true, readAcl: AccessLevel.View }),

            /**
             * This field SHALL reflect the current state of the OTA Requestor with regards to obtaining software
             * updates. See Section 11.19.7.4.2, “UpdateStateEnum” for possible values.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.5.3
             */
            updateState: Attribute(2, TlvEnum<UpdateStateEnum>(), { default: 0, readAcl: AccessLevel.View }),

            /**
             * This field SHALL reflect the percentage value of progress, relative to the current UpdateState, if
             * applicable to the state.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.5.4
             */
            updateStateProgress: Attribute(
                3,
                TlvNullable(TlvUInt8.bound({ max: 100 })),
                { default: null, readAcl: AccessLevel.View }
            )
        },

        commands: {
            /**
             * This command MAY be invoked by Administrators to announce the presence of a particular OTA Provider.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.6.1
             */
            announceOtaProvider: OptionalCommand(0, TlvAnnounceOtaProviderRequest, 0, TlvNoResponse)
        },

        events: {
            /**
             * This event SHALL be generated when a change of the UpdateState attribute occurs due to an OTA Requestor
             * moving through the states necessary to query for updates.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.7.1
             */
            stateTransition: Event(0, EventPriority.Info, TlvStateTransitionEvent),

            /**
             * This event SHALL be generated whenever a new version starts executing after being applied due to a
             * software update. This event SHOULD be generated even if a software update was done using means outside
             * of this cluster.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.7.6
             */
            versionApplied: Event(1, EventPriority.Critical, TlvVersionAppliedEvent),

            /**
             * This event SHALL be generated whenever an error occurs during OTA Requestor download operation.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.19.7.7.9
             */
            downloadError: Event(2, EventPriority.Info, TlvDownloadErrorEvent)
        }
    });

    /**
     * This cluster supports all OtaSoftwareUpdateRequestor features.
     */
    export const Complete = Cluster({
        ...Metadata,
        attributes: { ...BaseComponent.attributes },
        commands: { ...BaseComponent.commands },
        events: { ...BaseComponent.events }
    });
}
