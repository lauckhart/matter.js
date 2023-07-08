/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { WritableAttribute, AccessLevel, FixedAttribute, Attribute, Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvUInt64, TlvUInt16, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { TypeFromPartialBitSchema, BitFlags } from "../../schema/BitmapSchema.js";

/**
 * This structure provides some constant values that MAY be of use to all commissioners.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.9.4.3
 */
export const TlvBasicCommissioningInfo = TlvObject({
    /**
     * This field SHALL contain a conservative initial duration (in seconds) to set in the FailSafe for the
     * commissioning flow to complete successfully. This may vary depending on the speed or sleepiness of the
     * Commissionee. This value, if used in the ArmFailSafe command’s ExpiryLengthSeconds field SHOULD allow a
     * Commissioner to proceed with a nominal commissioning without having to-rearm the fail-safe, with some margin.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.9.4.3.1
     */
    failSafeExpiryLengthSeconds: TlvField(0, TlvUInt16),

    /**
     * This field SHALL contain a conservative value in seconds denoting the maximum total duration for which a fail
     * safe timer can be re-armed. See Section 11.9.6.2.1, “Fail Safe Context”.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.9.4.3.2
     */
    maxCumulativeFailsafeSeconds: TlvField(1, TlvUInt16)
});

/**
 * This enumeration is used by the RegulatoryConfig and LocationCapability attributes to indicate possible radio usage.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.9.4.2
 */
export const enum TlvRegulatoryLocationTypeEnum {
    Indoor = 0,
    Outdoor = 1,
    IndoorOutdoor = 2
};

/**
 * The arguments for this command are as follows:
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.9.6.2
 */
export const TlvArmFailSafeRequest = TlvObject({
    expiryLengthSeconds: TlvField(0, TlvUInt16),
    breadcrumb: TlvField(1, TlvUInt64)
});

/**
 * This enumeration is used by several response commands in this cluster to indicate particular errors.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.9.4.1
 */
export const enum TlvCommissioningErrorEnum {
    Ok = 0,
    ValueOutsideRange = 1,
    InvalidAuthentication = 2,
    NoFailSafe = 3,
    BusyWithOtherAdmin = 4
};

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.9.6.3
 */
export const TlvArmFailSafeResponseRequest = TlvObject({
    /**
     * This field SHALL contain the result of the operation, based on the behavior specified in the functional
     * description of the ArmFailSafe command.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.9.6.3.1
     */
    errorCode: TlvField(0, TlvEnum<TlvCommissioningErrorEnum>()),

    /**
     * See Section 11.9.6.1, “Common fields in General Commissioning cluster responses”.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.9.6.3.2
     */
    debugText: TlvField(1, TlvString.bound({ maxLength: 128 }))
});

/**
 * This SHALL add or update the regulatory configuration in the RegulatoryConfig Attribute to the value provided in the
 * NewRegulatoryConfig field.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.9.6.4
 */
export const TlvSetRegulatoryConfigRequest = TlvObject({
    newRegulatoryConfig: TlvField(0, TlvEnum<TlvRegulatoryLocationTypeEnum>()),
    countryCode: TlvField(1, TlvString.bound({ minLength: 2, maxLength: 2 })),
    breadcrumb: TlvField(2, TlvUInt64)
});

/**
 * The data for this command is as follows:
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.9.6.5
 */
export const TlvSetRegulatoryConfigResponseRequest = TlvObject({
    errorCode: TlvField(0, TlvEnum<TlvCommissioningErrorEnum>()),
    debugText: TlvField(1, TlvString)
});

/**
 * The data for this command is as follows:
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.9.6.7
 */
export const TlvCommissioningCompleteResponseRequest = TlvObject({
    errorCode: TlvField(0, TlvEnum<TlvCommissioningErrorEnum>()),
    debugText: TlvField(1, TlvString)
});

/**
 * Standard GeneralCommissioning cluster properties.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.9
 */
export const GeneralCommissioningMetadata = ClusterMetadata({ id: 0x30, name: "GeneralCommissioning", revision: 1 });

/**
 * A GeneralCommissioningCluster supports these elements for all feature combinations.
 */
export const BaseComponent = ClusterComponent({
    attributes: {
        /**
         * This attribute allows for the storage of a client-provided small payload which Administrators and
         * Commissioners MAY write and then subsequently read, to keep track of their own progress. This MAY be used by
         * the Commissioner to avoid repeating already-executed actions upon re-establishing a commissioning link after
         * an error.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.9.5.1
         */
        breadcrumb: WritableAttribute(0, TlvUInt64, { readAcl: AccessLevel.View, writeAcl: AccessLevel.Administer }),

        /**
         * This attribute SHALL describe critical parameters needed at the beginning of commissioning flow. See
         * BasicCommissioningInfo for more information.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.9.5.2
         */
        basicCommissioningInfo: FixedAttribute(1, TlvBasicCommissioningInfo, { readAcl: AccessLevel.View }),

        /**
         * This attribute SHALL indicate the regulatory configuration for the product.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.9.5.3
         */
        regulatoryConfig: Attribute(2, TlvEnum<TlvRegulatoryLocationTypeEnum>(), { readAcl: AccessLevel.View }),

        /**
         * LocationCapability is statically set by the manufacturer and indicates if this Node needs to be told an
         * exact RegulatoryLocation. For example a Node which is "Indoor Only" would not be certified for outdoor use
         * at all, and thus there is no need for a commissioner to set or ask the user about whether the device will be
         * used inside or outside. However a device which states its capability is "Indoor/Outdoor" means it would like
         * clarification if possible.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.9.5.4
         */
        locationCapability: FixedAttribute(
            3,
            TlvEnum<TlvRegulatoryLocationTypeEnum>(),
            { default: 2, readAcl: AccessLevel.View }
        ),

        /**
         * This attribute SHALL indicate whether this device supports "concurrent connection flow" commissioning mode
         * (see Section 5.5, “Commissioning Flows”). If false, the device only supports "non-concurrent connection
         * flow" mode.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.9.5.5
         */
        supportsConcurrentConnection: FixedAttribute(4, TlvBoolean, { default: true, readAcl: AccessLevel.View })
    },

    commands: {
        /**
         * The arguments for this command are as follows:
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.9.6.2
         */
        armFailSafe: Command(0, TlvArmFailSafeRequest, 1, TlvArmFailSafeResponseRequest),

        /**
         * @see {@link MatterCoreSpecificationV1_1} § 11.9.6.3
         */
        armFailSafeResponse: Command(1, TlvArmFailSafeResponseRequest, 1, TlvNoResponse),

        /**
         * This SHALL add or update the regulatory configuration in the RegulatoryConfig Attribute to the value
         * provided in the NewRegulatoryConfig field.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.9.6.4
         */
        setRegulatoryConfig: Command(2, TlvSetRegulatoryConfigRequest, 3, TlvSetRegulatoryConfigResponseRequest),

        /**
         * The data for this command is as follows:
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.9.6.5
         */
        setRegulatoryConfigResponse: Command(3, TlvSetRegulatoryConfigResponseRequest, 3, TlvNoResponse),

        /**
         * This command has no data.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.9.6.6
         */
        commissioningComplete: Command(4, TlvNoArguments, 5, TlvCommissioningCompleteResponseRequest),

        /**
         * The data for this command is as follows:
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.9.6.7
         */
        commissioningCompleteResponse: Command(5, TlvCommissioningCompleteResponseRequest, 5, TlvNoResponse)
    }
});

export type GeneralCommissioningCluster<T extends TypeFromPartialBitSchema<typeof GeneralCommissioningMetadata.features>> = 
    typeof GeneralCommissioningMetadata
    & { supportedFeatures: T }
    & typeof BaseComponent;

export function GeneralCommissioningCluster<T extends (keyof typeof GeneralCommissioningMetadata.features)[]>(...features: [ ...T ]) {
    const cluster = {
        ...GeneralCommissioningMetadata,
        supportedFeatures: BitFlags(GeneralCommissioningMetadata.features, ...features),
        ...BaseComponent
    };
    
    return cluster as unknown as GeneralCommissioningCluster<BitFlags<typeof GeneralCommissioningMetadata.features, T>>;
};