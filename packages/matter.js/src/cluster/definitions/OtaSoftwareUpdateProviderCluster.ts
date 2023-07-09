/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { GlobalAttributes, Command, TlvNoResponse, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvUInt16, TlvUInt32, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvString, TlvByteString } from "../../tlv/TlvString.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";

/**
 * OTA Software Update Provider
 *
 * Provides an interface for providing OTA software updates
 *
 * This function creates an OtaSoftwareUpdateProvider cluster.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.6
 */
export function OtaSoftwareUpdateProviderCluster() {
    const cluster = Cluster({
        ...OtaSoftwareUpdateProviderCluster.Metadata,
        ...OtaSoftwareUpdateProviderCluster.BaseComponent
    });
    return cluster as unknown as OtaSoftwareUpdateProviderCluster.Type;
}

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.4.3
 */
export const enum DownloadProtocolEnum {
    BdxSynchronous = 0,
    BdxAsynchronous = 1,
    Https = 2,
    VendorSpecific = 3
}

/**
 * Upon receipt, this command SHALL trigger an attempt to find an updated Software Image by the OTA Provider to match
 * the OTA Requestor’s constraints provided in the payload fields.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.1
 */
export const TlvQueryImageRequest = TlvObject({
    vendorId: TlvField(0, TlvUInt16),
    productId: TlvField(1, TlvUInt16),
    softwareVersion: TlvField(2, TlvUInt32),
    protocolsSupported: TlvField(3, TlvArray(TlvEnum<DownloadProtocolEnum>())),
    hardwareVersion: TlvOptionalField(4, TlvUInt16),
    location: TlvOptionalField(5, TlvString.bound({ minLength: 2, maxLength: 2 })),
    requestorCanConsent: TlvOptionalField(6, TlvBoolean),
    metadataForProvider: TlvOptionalField(7, TlvByteString.bound({ maxLength: 512 }))
});

/**
 * See Section 11.19.3.2, “Querying the OTA Provider” for the semantics of these values.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.4.1
 */
export const enum StatusEnum {
    UpdateAvailable = 0,
    Busy = 1,
    NotAvailable = 2,
    DownloadProtocolNotSupported = 3
}

/**
 * < Previous | Contents | Next >
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.10
 */
export const TlvQueryImageResponseRequest = TlvObject({
    status: TlvField(0, TlvEnum<StatusEnum>()),
    delayedActionTime: TlvOptionalField(1, TlvUInt32),
    imageUri: TlvOptionalField(2, TlvString.bound({ maxLength: 256 })),
    softwareVersion: TlvOptionalField(3, TlvUInt32),
    softwareVersionString: TlvOptionalField(4, TlvString.bound({ minLength: 1, maxLength: 64 })),
    updateToken: TlvOptionalField(5, TlvByteString.bound({ minLength: 8, maxLength: 32 })),
    userConsentNeeded: TlvOptionalField(6, TlvBoolean),
    metadataForRequestor: TlvOptionalField(7, TlvByteString.bound({ maxLength: 512 }))
});

/**
 * < Previous | Contents | Next >
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.18
 */
export const TlvApplyUpdateRequestRequest = TlvObject({
    updateToken: TlvField(0, TlvByteString.bound({ minLength: 8, maxLength: 32 })),
    newVersion: TlvField(1, TlvUInt32)
});

/**
 * See Section 11.19.3.6, “Applying a software update” for the semantics of the values. This enumeration is used in the
 * Action field of the ApplyUpdateResponse command. See (Section 11.19.6.5.4.1, “Action Field”).
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.4.2
 */
export const enum ApplyUpdateActionEnum {
    Proceed = 0,
    AwaitNextAction = 1,
    Discontinue = 2
}

/**
 * < Previous | Contents | Next >
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.20
 */
export const TlvApplyUpdateResponseRequest = TlvObject({
    action: TlvField(0, TlvEnum<ApplyUpdateActionEnum>()),
    delayedActionTime: TlvField(1, TlvUInt32)
});

/**
 * < Previous | Contents | Next >
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.22
 */
export const TlvNotifyUpdateAppliedRequest = TlvObject({
    updateToken: TlvField(0, TlvByteString.bound({ minLength: 8, maxLength: 32 })),
    softwareVersion: TlvField(1, TlvUInt32)
});

export namespace OtaSoftwareUpdateProviderCluster {
    export type Type = 
        typeof Metadata
        & { attributes: GlobalAttributes<{}> }
        & typeof BaseComponent;

    /**
     * OtaSoftwareUpdateProvider cluster metadata.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.19.6
     */
    export const Metadata = ClusterMetadata({ id: 0x29, name: "OtaSoftwareUpdateProvider", revision: 1, features: {} });

    /**
     * A OtaSoftwareUpdateProviderCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        commands: {
            /**
             * Upon receipt, this command SHALL trigger an attempt to find an updated Software Image by the OTA
             * Provider to match the OTA Requestor’s constraints provided in the payload fields.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.1
             */
            queryImage: Command(0, TlvQueryImageRequest, 1, TlvQueryImageResponseRequest),

            /**
             * < Previous | Contents | Next >
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.10
             */
            queryImageResponse: Command(1, TlvQueryImageResponseRequest, 1, TlvNoResponse),

            /**
             * < Previous | Contents | Next >
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.18
             */
            applyUpdateRequest: Command(2, TlvApplyUpdateRequestRequest, 3, TlvApplyUpdateResponseRequest),

            /**
             * < Previous | Contents | Next >
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.20
             */
            applyUpdateResponse: Command(3, TlvApplyUpdateResponseRequest, 3, TlvNoResponse),

            /**
             * < Previous | Contents | Next >
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.22
             */
            notifyUpdateApplied: Command(4, TlvNotifyUpdateAppliedRequest, 4, TlvNoResponse)
        }
    });

    /**
     * This cluster supports all OtaSoftwareUpdateProvider features.
     */
    export const Complete = Cluster({ ...Metadata, commands: { ...BaseComponent.commands } });
}
