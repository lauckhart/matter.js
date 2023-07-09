/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { BitFlags, TypeFromPartialBitSchema, BitFlag } from "../../schema/BitmapSchema.js";
import { extendCluster, ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { GlobalAttributes, Attribute, AccessLevel, FixedAttribute, OptionalAttribute, OptionalFixedAttribute, OptionalEvent, EventPriority, Cluster } from "../../cluster/Cluster.js";
import { TlvEnum, TlvUInt8, TlvUInt32, TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";

/**
 * Power Source
 *
 * This cluster is used to describe the configuration and capabilities of a physical power source that provides power
 * to the Node.
 *
 * Use this factory function to create a PowerSource cluster supporting a specific set of features.  Include each
 * {@link PowerSourceCluster.Feature} you wish to support.
 *
 * @param features a list of {@link PowerSourceCluster.Feature} to support
 * @returns a PowerSource cluster with specified features enabled
 * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.7
 */
export function PowerSourceCluster<T extends PowerSourceCluster.Feature[]>(...features: [ ...T ]) {
    const cluster = Cluster({
        ...PowerSourceCluster.Metadata,
        supportedFeatures: BitFlags(PowerSourceCluster.Metadata.features, ...features),
        ...PowerSourceCluster.BaseComponent
    });
    extendCluster(cluster, PowerSourceCluster.WiredComponent, { wired: true });
    extendCluster(cluster, PowerSourceCluster.BatteryComponent, { battery: true });
    extendCluster(cluster, PowerSourceCluster.ReplaceableComponent, { replaceable: true });
    extendCluster(cluster, PowerSourceCluster.RechargeableComponent, { rechargeable: true });
    return cluster as unknown as PowerSourceCluster.Type<BitFlags<typeof PowerSourceCluster.Metadata.features, T>>;
};

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.7.5.4
 */
export const enum PowerSourceStatusEnum {
    Unspecified = 0,
    Active = 1,
    Standby = 2,
    Unavailable = 3
};

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.7.5.5
 */
export const enum WiredCurrentTypeEnum {
    Ac = 0,
    Dc = 1
};

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.7.5.1
 */
export const enum WiredFaultEnum {
    Unspecified = 0,
    OverVoltage = 1,
    UnderVoltage = 2
};

/**
 * The WiredFaultChange Event SHALL be generated when the set of wired faults currently detected by the Node on this
 * wired power source changes. This event SHALL correspond to a change in value of ActiveWiredFaults.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.7.7.1
 */
export const TlvWiredFaultChangeEvent = TlvObject({
    /**
     * This field SHALL represent the set of faults currently detected, as per Section 11.7.6.11, “ActiveWiredFaults
     * Attribute”.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.7.7.1.1
     */
    current: TlvField(0, TlvArray(TlvEnum<WiredFaultEnum>())),

    /**
     * This field SHALL represent the set of faults detected prior to this change event, as per Section 11.7.6.11,
     * “ActiveWiredFaults Attribute”.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.7.7.1.2
     */
    previous: TlvField(1, TlvArray(TlvEnum<WiredFaultEnum>()))
});

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.7.5.6
 */
export const enum BatChargeLevelEnum {
    Ok = 0,
    Warning = 1,
    Critical = 2
};

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.7.5.7
 */
export const enum BatReplaceabilityEnum {
    Unspecified = 0,
    NotReplaceable = 1,
    UserReplaceable = 2,
    FactoryReplaceable = 3
};

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.7.5.2
 */
export const enum BatFaultEnum {
    Unspecified = 0,
    OverTemp = 1,
    UnderTemp = 2
};

/**
 * The BatFaultChange Event SHALL be generated when the set of battery faults currently detected by the Node on this
 * battery power source changes. This event SHALL correspond to a change in value of ActiveBatFaults.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.7.7.2
 */
export const TlvBatFaultChangeEvent = TlvObject({
    current: TlvField(0, TlvArray(TlvEnum<BatFaultEnum>())),
    previous: TlvField(1, TlvArray(TlvEnum<BatFaultEnum>()))
});

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.7.5.8
 */
export const enum BatCommonDesignationEnum {
    Unspecified = 0,
    Aaa = 1,
    Aa = 2,
    C = 3,
    D = 4,
    "4V5" = 5,
    "6V0" = 6,
    "9V0" = 7,
    "12Aa" = 8,
    Aaaa = 9,
    A = 10,
    B = 11,
    F = 12,
    N = 13,
    No6 = 14,
    SubC = 15,
    A23 = 16,
    A27 = 17,
    Ba5800 = 18,
    Duplex = 19,
    "4Sr44" = 20,
    E523 = 21,
    E531 = 22,
    "15V0" = 23,
    "22V5" = 24,
    "30V0" = 25,
    "45V0" = 26,
    "67V5" = 27,
    J = 28,
    Cr123A = 29,
    Cr2 = 30,
    "2Cr5" = 31,
    CrP2 = 32,
    CrV3 = 33,
    Sr41 = 34,
    Sr43 = 35,
    Sr44 = 36,
    Sr45 = 37,
    Sr48 = 38,
    Sr54 = 39,
    Sr55 = 40,
    Sr57 = 41,
    Sr58 = 42,
    Sr59 = 43,
    Sr60 = 44,
    Sr63 = 45,
    Sr64 = 46,
    Sr65 = 47,
    Sr66 = 48,
    Sr67 = 49,
    Sr68 = 50,
    Sr69 = 51,
    Sr516 = 52,
    Sr731 = 53,
    Sr712 = 54,
    Lr932 = 55,
    A5 = 56,
    A10 = 57,
    A13 = 58,
    A312 = 59,
    A675 = 60,
    Ac41E = 61,
    E10180 = 62,
    E10280 = 63,
    E10440 = 64,
    E14250 = 65,
    E14430 = 66,
    E14500 = 67,
    E14650 = 68,
    E15270 = 69,
    E16340 = 70,
    Rcr123A = 71,
    E17500 = 72,
    E17670 = 73,
    E18350 = 74,
    E18500 = 75,
    E18650 = 76,
    E19670 = 77,
    E25500 = 78,
    E26650 = 79,
    E32600 = 80
};

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.7.5.9
 */
export const enum BatApprovedChemistryEnum {
    Unspecified = 0,
    Alkaline = 1,
    LithiumCarbonFluoride = 2,
    LithiumChromiumOxide = 3,
    LithiumCopperOxide = 4,
    LithiumIronDisulfide = 5,
    LithiumManganeseDioxide = 6,
    LithiumThionylChloride = 7,
    Magnesium = 8,
    MercuryOxide = 9,
    NickelOxyhydride = 10,
    SilverOxide = 11,
    ZincAir = 12,
    ZincCarbon = 13,
    ZincChloride = 14,
    ZincManganeseDioxide = 15,
    LeadAcid = 16,
    LithiumCobaltOxide = 17,
    LithiumIon = 18,
    LithiumIonPolymer = 19,
    LithiumIronPhosphate = 20,
    LithiumSulfur = 21,
    LithiumTitanate = 22,
    NickelCadmium = 23,
    NickelHydrogen = 24,
    NickelIron = 25,
    NickelMetalHydride = 26,
    NickelZinc = 27,
    SilverZinc = 28,
    SodiumIon = 29,
    SodiumSulfur = 30,
    ZincBromide = 31,
    ZincCerium = 32
};

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.7.5.10
 */
export const enum BatChargeStateEnum {
    Unknown = 0,
    IsCharging = 1,
    IsAtFullCharge = 2,
    IsNotCharging = 3
};

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.7.5.3
 */
export const enum BatChargeFaultEnum {
    Unspecified = 0,
    AmbientTooHot = 1,
    AmbientTooCold = 2,
    BatteryTooHot = 3,
    BatteryTooCold = 4,
    BatteryAbsent = 5,
    BatteryOverVoltage = 6,
    BatteryUnderVoltage = 7,
    ChargerOverVoltage = 8,
    ChargerUnderVoltage = 9,
    SafetyTimeout = 10
};

/**
 * The BatChargeFaultChange Event SHALL be generated when the set of charge faults currently
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.7.7.3
 */
export const TlvBatChargeFaultChangeEvent = TlvObject({
    current: TlvField(0, TlvArray(TlvEnum<BatChargeFaultEnum>())),
    previous: TlvField(1, TlvArray(TlvEnum<BatChargeFaultEnum>()))
});

export namespace PowerSourceCluster {
    /**
     * These are optional features supported by PowerSourceCluster.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.7.4
     */
    export enum Feature {
        /**
         * Wired
         *
         * A wired power source
         */
        Wired = "Wired",

        /**
         * Battery
         *
         * A battery power source
         */
        Battery = "Battery",

        /**
         * Rechargeable
         *
         * A rechargeable battery power source (requires Battery feature)
         */
        Rechargeable = "Rechargeable",

        /**
         * Replaceable
         *
         * A replaceable battery power source (requires Battery feature)
         */
        Replaceable = "Replaceable"
    };

    export type Type<T extends TypeFromPartialBitSchema<typeof Metadata.features>> = 
        typeof Metadata
        & { attributes: GlobalAttributes<typeof Metadata.features> }
        & { supportedFeatures: T }
        & typeof BaseComponent
        & (T extends { wired: true } ? typeof WiredComponent : {})
        & (T extends { battery: true } ? typeof BatteryComponent : {})
        & (T extends { replaceable: true } ? typeof ReplaceableComponent : {})
        & (T extends { rechargeable: true } ? typeof RechargeableComponent : {});

    /**
     * PowerSource cluster metadata.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.7
     */
    export const Metadata = ClusterMetadata({
        id: 0x2f,
        name: "PowerSource",
        revision: 1,

        features: {
            /**
             * Wired
             *
             * A wired power source
             */
            wired: BitFlag(0),

            /**
             * Battery
             *
             * A battery power source
             */
            battery: BitFlag(1),

            /**
             * Rechargeable
             *
             * A rechargeable battery power source (requires Battery feature)
             */
            rechargeable: BitFlag(2),

            /**
             * Replaceable
             *
             * A replaceable battery power source (requires Battery feature)
             */
            replaceable: BitFlag(3)
        }
    });

    /**
     * A PowerSourceCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute SHALL indicate the participation of this power source in providing power to the Node as
             * specified in PowerSourceStatusEnum.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.1
             */
            status: Attribute(0, TlvEnum<PowerSourceStatusEnum>(), { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL indicate the relative preference with which the Node will select this source to
             * provide power. A source with a lower order SHALL be selected by the Node to provide power before any
             * other source with a higher order, if the lower order source is available (see Status).
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.2
             */
            order: Attribute(1, TlvUInt8, { persistent: true, readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL provide a user-facing description of this source, used to distinguish it from other
             * power sources, e.g. "DC Power", "Primary Battery" or "Battery back-up". This attribute SHALL NOT be used
             * to convey information such as battery form factor, or chemistry.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.3
             */
            description: FixedAttribute(2, TlvString.bound({ maxLength: 60 }), { readAcl: AccessLevel.View })
        }
    });

    /**
     * A PowerSourceCluster supports these elements if it supports feature Wired.
     */
    export const WiredComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute SHALL indicate the assessed RMS or DC voltage currently provided by the hard-wired
             * source, in mV (millivolts). A value of NULL SHALL indicate the Node is currently unable to assess the
             * value. If the wired source is not connected, but the Node is still able to assess a value, then the
             * assessed value MAY be reported.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.4
             */
            wiredAssessedInputVoltage: OptionalAttribute(
                3,
                TlvNullable(TlvUInt32),
                { omitChanges: true, readAcl: AccessLevel.View }
            ),

            /**
             * This attribute SHALL indicate the assessed frequency of the voltage, currently provided by the
             * hard-wired source, in Hz. A value of NULL SHALL indicate the Node is currently unable to assess the
             * value. If the wired source is not connected, but the Node is still able to assess a value, then the
             * assessed value MAY be reported.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.5
             */
            wiredAssessedInputFrequency: OptionalAttribute(
                4,
                TlvNullable(TlvUInt16),
                { omitChanges: true, readAcl: AccessLevel.View }
            ),

            /**
             * This attribute SHALL indicate the type of current the Node expects to be provided by the hard- wired
             * source as specified in WiredCurrentTypeEnum.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.6
             */
            wiredCurrentType: FixedAttribute(5, TlvEnum<WiredCurrentTypeEnum>(), { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL indicate the assessed instantaneous current draw of the Node on the hard- wired
             * source, in mA (milliamps). A value of NULL SHALL indicate the Node is currently unable to assess the
             * value. If the wired source is not connected, but the Node is still able to assess a value, then the
             * assessed value MAY be reported.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.7
             */
            wiredAssessedCurrent: OptionalAttribute(
                6,
                TlvNullable(TlvUInt32),
                { omitChanges: true, readAcl: AccessLevel.View }
            ),

            /**
             * This attribute SHALL indicate the nominal voltage, printed as part of the Node’s regulatory compliance
             * label in mV (millivolts), expected to be provided by the hard-wired source.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.8
             */
            wiredNominalVoltage: OptionalFixedAttribute(7, TlvUInt32, { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL indicate the maximum current, printed as part of the Node’s regulatory compliance
             * label in mA (milliamps), expected to be provided by the hard-wired source.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.9
             */
            wiredMaximumCurrent: OptionalFixedAttribute(8, TlvUInt32, { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL indicate if the Node detects that the hard-wired power source is properly connected.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.10
             */
            wiredPresent: OptionalAttribute(9, TlvBoolean, { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL indicate the set of wired faults currently detected by the Node on this power
             * source. This set is represented as a list of WiredFaultEnum. When the Node detects a fault has been
             * raised, the appropriate WiredFaultEnum value SHALL be added to this list, provided it is not already
             * present. This list SHALL NOT contain more than one instance of a specific WiredFaultEnum value. When the
             * Node detects all conditions contributing to a fault have been cleared, the corresponding WiredFaultEnum
             * value SHALL be removed from this list. An empty list SHALL indicate there are currently no active
             * faults. The order of this list SHOULD have no significance. Clients interested in monitoring changes in
             * active faults MAY subscribe to this attribute, or they MAY subscribe to WiredFaultChange.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.11
             */
            activeWiredFaults: OptionalAttribute(
                10,
                TlvArray(TlvEnum<WiredFaultEnum>()),
                { default: [], readAcl: AccessLevel.View }
            )
        },

        events: {
            /**
             * The WiredFaultChange Event SHALL be generated when the set of wired faults currently detected by the
             * Node on this wired power source changes. This event SHALL correspond to a change in value of
             * ActiveWiredFaults.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.7.1
             */
            wiredFaultChange: OptionalEvent(0, EventPriority.Info, TlvWiredFaultChangeEvent)
        }
    });

    /**
     * A PowerSourceCluster supports these elements if it supports feature Battery.
     */
    export const BatteryComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute SHALL indicate the currently measured output voltage of the battery in mV (millivolts). A
             * value of NULL SHALL indicate the Node is currently unable to assess the value.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.12
             */
            batVoltage: OptionalAttribute(11, TlvNullable(TlvUInt32), { omitChanges: true, readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL indicate the estimated percentage of battery charge remaining until the battery
             * will no longer be able to provide power to the Node. Values are expressed in half percent units, ranging
             * from 0 to 200. E.g. a value of 48 is equivalent to 24%. A value of NULL SHALL indicate the Node is
             * currently unable to assess the value.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.13
             */
            batPercentRemaining: OptionalAttribute(
                12,
                TlvNullable(TlvUInt8.bound({ max: 200 })),
                { omitChanges: true, readAcl: AccessLevel.View }
            ),

            /**
             * This attribute SHALL indicate the estimated time in seconds before the battery will no longer be able to
             * provide power to the Node. A value of NULL SHALL indicate the Node is currently unable to assess the
             * value.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.14
             */
            batTimeRemaining: OptionalAttribute(
                13,
                TlvNullable(TlvUInt32),
                { omitChanges: true, readAcl: AccessLevel.View }
            ),

            /**
             * This attribute SHALL indicate a coarse ranking of the charge level of the battery, used to indicate when
             * intervention is required as specified in BatChargeLevelEnum.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.15
             */
            batChargeLevel: Attribute(14, TlvEnum<BatChargeLevelEnum>(), { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL indicate if the battery needs to be replaced. Replacement MAY be simple routine
             * maintenance, such as with a single use, non-rechargeable cell. Replacement, however, MAY also indicate
             * end of life, or serious fault with a rechargeable or even non-replaceable cell.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.16
             */
            batReplacementNeeded: Attribute(15, TlvBoolean, { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL indicate the replaceability of the battery as specified in BatReplaceabilityEnum.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.17
             */
            batReplaceability: FixedAttribute(16, TlvEnum<BatReplaceabilityEnum>(), { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL indicate whether the Node detects that the batteries are properly installed.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.18
             */
            batPresent: OptionalAttribute(17, TlvBoolean, { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL indicate the set of battery faults currently detected by the Node on this power
             * source. This set is represented as a list of BatFaultEnum. When the Node detects a fault has been
             * raised, the appropriate BatFaultEnum value SHALL be added to this list, provided it is not already
             * present. This list SHALL NOT contain more than one instance of a specific BatFaultEnum value. When the
             * Node detects all conditions contributing to a fault have been cleared, the corresponding BatFaultEnum
             * value SHALL be removed from this list. An empty list SHALL indicate there are currently no active
             * faults. The order of this list SHOULD have no significance. Clients interested in monitoring changes in
             * active faults MAY subscribe to this attribute, or they MAY subscribe to Section 11.7.7.2,
             * “BatFaultChange Event”.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.19
             */
            activeBatFaults: OptionalAttribute(
                18,
                TlvArray(TlvEnum<BatFaultEnum>()),
                { default: [], readAcl: AccessLevel.View }
            )
        },

        events: {
            /**
             * The BatFaultChange Event SHALL be generated when the set of battery faults currently detected by the
             * Node on this battery power source changes. This event SHALL correspond to a change in value of
             * ActiveBatFaults.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.7.2
             */
            batFaultChange: OptionalEvent(1, EventPriority.Info, TlvBatFaultChangeEvent)
        }
    });

    /**
     * A PowerSourceCluster supports these elements if it supports feature Replaceable.
     */
    export const ReplaceableComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute SHALL provide a user-facing description of this battery, which SHOULD contain information
             * required to identify a replacement, such as form factor, chemistry or preferred manufacturer.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.20
             */
            batReplacementDescription: FixedAttribute(19, TlvString.bound({ maxLength: 60 }), { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL indicate the ID of the common or colloquial designation of the battery, as
             * specified in BatCommonDesignationEnum.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.21
             */
            batCommonDesignation: OptionalFixedAttribute(
                20,
                TlvEnum<BatCommonDesignationEnum>(),
                { readAcl: AccessLevel.View }
            ),

            /**
             * This attribute SHALL indicate the string representing the ANSI designation for the battery as specified
             * in ANSI C18.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.22
             */
            batAnsiDesignation: OptionalFixedAttribute(
                21,
                TlvString.bound({ maxLength: 20 }),
                { readAcl: AccessLevel.View }
            ),

            /**
             * This attribute SHALL indicate the string representing the IEC designation for the battery as specified
             * in IEC 60086.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.23
             */
            batIecDesignation: OptionalFixedAttribute(22, TlvString.bound({ maxLength: 20 }), { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL indicate the ID of the preferred chemistry of the battery source as specified in
             * BatApprovedChemistryEnum.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.24
             */
            batApprovedChemistry: OptionalFixedAttribute(
                23,
                TlvEnum<BatApprovedChemistryEnum>(),
                { readAcl: AccessLevel.View }
            ),

            /**
             * This attribute SHALL indicate the preferred minimum charge capacity rating in mAh of individual, user-
             * or factory-serviceable battery cells or packs in the battery source.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.25
             */
            batCapacity: OptionalFixedAttribute(24, TlvUInt32, { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL indicate the quantity of individual, user- or factory-serviceable battery cells or
             * packs in the battery source.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.26
             */
            batQuantity: FixedAttribute(25, TlvUInt8, { readAcl: AccessLevel.View })
        }
    });

    /**
     * A PowerSourceCluster supports these elements if it supports feature Rechargeable.
     */
    export const RechargeableComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute SHALL indicate the current state of the battery source with respect to charging as
             * specified in BatChargeStateEnum.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.27
             */
            batChargeState: Attribute(26, TlvEnum<BatChargeStateEnum>(), { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL indicate the estimated time in seconds before the battery source will be at full
             * charge. A value of NULL SHALL indicate the Node is currently unable to assess the value.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.28
             */
            batTimeToFullCharge: OptionalAttribute(
                27,
                TlvNullable(TlvUInt32),
                { omitChanges: true, readAcl: AccessLevel.View }
            ),

            /**
             * This attribute SHALL indicate whether the Node can remain operational while the battery source is
             * charging.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.29
             */
            batFunctionalWhileCharging: Attribute(28, TlvBoolean, { readAcl: AccessLevel.View }),

            /**
             * This attribute SHALL indicate assessed current in mA (milliamps) presently supplied to charge the
             * battery source. A value of NULL SHALL indicate the Node is currently unable to assess the value.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.30
             */
            batChargingCurrent: OptionalAttribute(
                29,
                TlvNullable(TlvUInt32),
                { omitChanges: true, readAcl: AccessLevel.View }
            ),

            /**
             * This attribute SHALL indicate the set of charge faults currently detected by the Node on this power
             * source. This set is represented as a list of BatChargeFaultEnum. When the Node detects a fault has been
             * raised, the appropriate BatChargeFaultEnum value SHALL be added to this list, provided it is not already
             * present. This list SHALL NOT contain more than one instance of a specific BatChargeFaultEnum value. When
             * the Node detects all conditions contributing to a fault have been cleared, the corresponding
             * BatChargeFaultEnum value SHALL be removed from this list. An empty list SHALL indicate there are
             * currently no active faults. The order of this list SHOULD have no significance. Clients interested in
             * monitoring changes in active faults MAY subscribe to this attribute, or they MAY subscribe to the
             * BatFaultChange event.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.6.31
             */
            activeBatChargeFaults: OptionalAttribute(
                30,
                TlvArray(TlvEnum<BatChargeFaultEnum>()),
                { default: [], readAcl: AccessLevel.View }
            )
        },

        events: {
            /**
             * The BatChargeFaultChange Event SHALL be generated when the set of charge faults currently
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.7.7.3
             */
            batChargeFaultChange: OptionalEvent(2, EventPriority.Info, TlvBatChargeFaultChangeEvent)
        }
    });

    /**
     * This cluster supports all PowerSource features.  It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export const Complete = Cluster({
        ...Metadata,

        attributes: {
            ...BaseComponent.attributes,
            ...WiredComponent.attributes,
            ...BatteryComponent.attributes,
            ...ReplaceableComponent.attributes,
            ...RechargeableComponent.attributes
        },

        events: { ...WiredComponent.events, ...BatteryComponent.events, ...RechargeableComponent.events }
    });
};
