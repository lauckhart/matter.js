/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { WritableAttribute, AccessLevel, FixedAttribute, Attribute, Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvUInt64, TlvUInt16, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * This structure provides some constant values that MAY be of use to all
 * commissioners.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.9.4.3
 */
export const BasicCommissioningInfo = TlvObject({
    /**
     * This field SHALL contain a conservative initial duration (in seconds) to
     * set in the FailSafe for the commissioning flow to complete successfully.
     * This may vary depending on the speed or sleepiness of the Commissionee.
     * This value, if used in the ArmFailSafe command’s ExpiryLengthSeconds
     * field SHOULD allow a Commissioner to proceed with a nominal
     * commissioning without having to-rearm the fail-safe, with some margin.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.9.4.3.1
     */
    FailSafeExpiryLengthSeconds: TlvField(0, TlvUInt16),

    /**
     * This field SHALL contain a conservative value in seconds denoting the
     * maximum total duration for which a fail safe timer can be re-armed. See
     * Section 11.9.6.2.1, “Fail Safe Context”.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.9.4.3.2
     */
    MaxCumulativeFailsafeSeconds: TlvField(1, TlvUInt16)
});

/**
 * This data type is derived from enum8.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.9.4.2
 */
export const enum RegulatoryLocationTypeEnum {
    Indoor = 0,
    Outdoor = 1,
    IndoorOutdoor = 2
};

/**
 * This data type is derived from enum8.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.9.4.1
 */
export const enum CommissioningErrorEnum {
    Ok = 0,
    ValueOutsideRange = 1,
    InvalidAuthentication = 2,
    NoFailSafe = 3,
    BusyWithOtherAdmin = 4
};

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.9.6.3
 */
export const ArmFailSafeResponseRequest = TlvObject({
    /**
     * This field SHALL contain the result of the operation, based on the
     * behavior specified in the functional description of the ArmFailSafe
     * command.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.9.6.3.1
     */
    ErrorCode: TlvField(0, TlvEnum<CommissioningErrorEnum>()),

    /**
     * See Section 11.9.6.1, “Common fields in General Commissioning cluster
     * responses”.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.9.6.3.2
     */
    DebugText: TlvField(1, TlvString.bound({ maxLength: 128 }))
});

/**
 * The arguments for this command are as follows:
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.9.6.2
 */
export const ArmFailSafeRequest = TlvObject({
    ExpiryLengthSeconds: TlvField(0, TlvUInt16),
    Breadcrumb: TlvField(1, TlvUInt64)
});

/**
 * The data for this command is as follows:
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.9.6.5
 */
export const SetRegulatoryConfigResponseRequest = TlvObject({
    ErrorCode: TlvField(0, TlvEnum<CommissioningErrorEnum>()),
    DebugText: TlvField(1, TlvString)
});

/**
 * This SHALL add or update the regulatory configuration in the
 * RegulatoryConfig Attribute to the value provided in the NewRegulatoryConfig
 * field.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.9.6.4
 */
export const SetRegulatoryConfigRequest = TlvObject({
    NewRegulatoryConfig: TlvField(0, TlvEnum<RegulatoryLocationTypeEnum>()),
    CountryCode: TlvField(1, TlvString.bound({ minLength: 2, maxLength: 2 })),
    Breadcrumb: TlvField(2, TlvUInt64)
});

/**
 * The data for this command is as follows:
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.9.6.7
 */
export const CommissioningCompleteResponseRequest = TlvObject({
    ErrorCode: TlvField(0, TlvEnum<CommissioningErrorEnum>()),
    DebugText: TlvField(1, TlvString)
});

export namespace GeneralCommissioningCluster {
    export const id = 48;
    export const name = "GeneralCommissioning";
    export const revision = 1;

    const Base = {
        attributes: {
            /**
             * This attribute allows for the storage of a client-provided small
             * payload which Administrators and Commissioners MAY write and
             * then subsequently read, to keep track of their own progress.
             * This MAY be used by the Commissioner to avoid repeating
             * already-executed actions upon re-establishing a commissioning
             * link after an error.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.9.5.1
             */
            breadcrumb: WritableAttribute(0, TlvUInt64, { readAcl: AccessLevel.View, writeAcl: AccessLevel.Administer }),

            /**
             * This attribute SHALL describe critical parameters needed at the
             * beginning of commissioning flow. See BasicCommissioningInfo for
             * more information.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.9.5.2
             */
            basicCommissioningInfo: FixedAttribute(1, BasicCommissioningInfo, { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL indicate the regulatory configuration for
             * the product.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.9.5.3
             */
            regulatoryConfig: Attribute(2, TlvEnum<RegulatoryLocationTypeEnum>(), { readAcl: AccessLevel.View }),

            /**
             * LocationCapability is statically set by the manufacturer and
             * indicates if this Node needs to be told an exact
             * RegulatoryLocation. For example a Node which is "Indoor Only"
             * would not be certified for outdoor use at all, and thus there is
             * no need for a commissioner to set or ask the user about whether
             * the device will be used inside or outside. However a device
             * which states its capability is "Indoor/Outdoor" means it would
             * like clarification if possible.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.9.5.4
             */
            locationCapability: FixedAttribute(3, TlvEnum<RegulatoryLocationTypeEnum>(), { default: 2, readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL indicate whether this device supports
             * "concurrent connection flow" commissioning mode (see Section
             * 5.5, “Commissioning Flows”). If false, the device only supports
             * "non-concurrent connection flow" mode.
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
            armFailSafe: Command(0, ArmFailSafeRequest, 1, ArmFailSafeResponseRequest),

            /**
             * @see {@link MatterCoreSpecificationV1_1} § 11.9.6.3
             */
            armFailSafeResponse: Command(1, ArmFailSafeResponseRequest, 1, TlvNoResponse),

            /**
             * This SHALL add or update the regulatory configuration in the
             * RegulatoryConfig Attribute to the value provided in the
             * NewRegulatoryConfig field.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.9.6.4
             */
            setRegulatoryConfig: Command(2, SetRegulatoryConfigRequest, 3, SetRegulatoryConfigResponseRequest),

            /**
             * The data for this command is as follows:
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.9.6.5
             */
            setRegulatoryConfigResponse: Command(3, SetRegulatoryConfigResponseRequest, 3, TlvNoResponse),

            /**
             * This command has no data.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.9.6.6
             */
            commissioningComplete: Command(4, TlvNoArguments, 5, CommissioningCompleteResponseRequest),

            /**
             * The data for this command is as follows:
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.9.6.7
             */
            commissioningCompleteResponse: Command(5, CommissioningCompleteResponseRequest, 5, TlvNoResponse)
        }
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        elements: [ Base ]
    });
};