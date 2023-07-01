/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvEnum, TlvUInt32, TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvString, TlvByteString } from "../../tlv/TlvString.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * See Section 11.19.3.2, “Querying the OTA Provider” for the semantics of
 * these values.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.4.1
 */
export const enum StatusEnum {
    UpdateAvailable = 0,
    Busy = 1,
    NotAvailable = 2,
    DownloadProtocolNotSupported = 3
};

/**
 * < Previous | Contents | Next >
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.10
 */
export const QueryImageResponseRequest = TlvObject({
    Status: TlvField(0, TlvEnum<StatusEnum>()),
    DelayedActionTime: TlvOptionalField(1, TlvUInt32),
    ImageUri: TlvOptionalField(2, TlvString.bound({ maxLength: 256 })),
    SoftwareVersion: TlvOptionalField(3, TlvUInt32),
    SoftwareVersionString: TlvOptionalField(4, TlvString.bound({ minLength: 1, maxLength: 64 })),
    UpdateToken: TlvOptionalField(5, TlvByteString.bound({ minLength: 8, maxLength: 32 })),
    UserConsentNeeded: TlvOptionalField(6, TlvBoolean),
    MetadataForRequestor: TlvOptionalField(7, TlvByteString.bound({ maxLength: 512 }))
});

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.4.3
 */
export const enum DownloadProtocolEnum {
    BdxSynchronous = 0,
    BdxAsynchronous = 1,
    Https = 2,
    VendorSpecific = 3
};

/**
 * Upon receipt, this command SHALL trigger an attempt to find an updated
 * Software Image by the OTA Provider to match the OTA Requestor’s constraints
 * provided in the payload fields.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.1
 */
export const QueryImageRequest = TlvObject({
    VendorId: TlvField(0, TlvUInt16),
    ProductId: TlvField(1, TlvUInt16),
    SoftwareVersion: TlvField(2, TlvUInt32),
    ProtocolsSupported: TlvField(3, TlvArray(TlvEnum<DownloadProtocolEnum>())),
    HardwareVersion: TlvOptionalField(4, TlvUInt16),
    Location: TlvOptionalField(5, TlvString.bound({ minLength: 2, maxLength: 2 })),
    RequestorCanConsent: TlvOptionalField(6, TlvBoolean),
    MetadataForProvider: TlvOptionalField(7, TlvByteString.bound({ maxLength: 512 }))
});

/**
 * See Section 11.19.3.6, “Applying a software update” for the semantics of the
 * values. This enumeration is used in the Action field of the
 * ApplyUpdateResponse command. See (Section 11.19.6.5.4.1, “Action Field”).
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.4.2
 */
export const enum ApplyUpdateActionEnum {
    Proceed = 0,
    AwaitNextAction = 1,
    Discontinue = 2
};

/**
 * < Previous | Contents | Next >
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.20
 */
export const ApplyUpdateResponseRequest = TlvObject({
    Action: TlvField(0, TlvEnum<ApplyUpdateActionEnum>()),
    DelayedActionTime: TlvField(1, TlvUInt32)
});

/**
 * < Previous | Contents | Next >
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.18
 */
export const ApplyUpdateRequestRequest = TlvObject({
    UpdateToken: TlvField(0, TlvByteString.bound({ minLength: 8, maxLength: 32 })),
    NewVersion: TlvField(1, TlvUInt32)
});

/**
 * < Previous | Contents | Next >
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.22
 */
export const NotifyUpdateAppliedRequest = TlvObject({
    UpdateToken: TlvField(0, TlvByteString.bound({ minLength: 8, maxLength: 32 })),
    SoftwareVersion: TlvField(1, TlvUInt32)
});

export namespace OtaSoftwareUpdateProviderCluster {
    export const id = 41;
    export const name = "OtaSoftwareUpdateProvider";
    export const revision = 1;

    const Base = {
        commands: {
            /**
             * Upon receipt, this command SHALL trigger an attempt to find an
             * updated Software Image by the OTA Provider to match the OTA
             * Requestor’s constraints provided in the payload fields.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.1
             */
            queryImage: Command(0, QueryImageRequest, 1, QueryImageResponseRequest),

            /**
             * < Previous | Contents | Next >
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.10
             */
            queryImageResponse: Command(1, QueryImageResponseRequest, 1, TlvNoResponse),

            /**
             * < Previous | Contents | Next >
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.18
             */
            applyUpdateRequest: Command(2, ApplyUpdateRequestRequest, 3, ApplyUpdateResponseRequest),

            /**
             * < Previous | Contents | Next >
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.20
             */
            applyUpdateResponse: Command(3, ApplyUpdateResponseRequest, 3, TlvNoResponse),

            /**
             * < Previous | Contents | Next >
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.19.6.5.22
             */
            notifyUpdateApplied: Command(4, NotifyUpdateAppliedRequest, 4, TlvNoResponse)
        }
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        elements: [ Base ]
    });
};