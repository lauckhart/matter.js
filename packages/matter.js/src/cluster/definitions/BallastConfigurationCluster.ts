/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Attribute, AccessLevel, OptionalAttribute, WritableAttribute, OptionalWritableAttribute } from "../../cluster/Cluster.js";
import { TlvUInt8, TlvBitmap, TlvUInt24 } from "../../tlv/TlvNumber.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvString } from "../../tlv/TlvString.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * The BallastStatus attribute specifies the activity status of the ballast functions. The usage of the bits is
 * specified in Bit Usage of the BallastStatus Attribute. Where a function is active, the corresponding bit SHALL be
 * set to 1. Where a function is not active, the corresponding bit SHALL be set to 0.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.3.6.3
 */
export const TlvBallastStatusBits = {
    ballastNonOperational: BitFlag(0),
    lampFailure: BitFlag(1),
    lampNotInSocket: BitFlag(2)
};

export const TlvBallastStatus = TlvBitmap(TlvUInt8, TlvBallastStatusBits);

/**
 * The LampAlarmMode attribute specifies which attributes MAY cause an alarm notification to be generated, as listed in
 * Values of the LampAlarmMode Attribute. A ‘1’ in each bit position causes its associated attribute to be able to
 * generate an alarm. (Note: All alarms are also logged in the alarm table – see Alarms cluster).
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.3.9.5
 */
export const TlvLampAlarmModeBits = { lampBurnHours: BitFlag(1) };

export const TlvLampAlarmMode = TlvBitmap(TlvUInt8, TlvLampAlarmModeBits);

export namespace BallastConfigurationCluster {
    export const id = 0x301;
    export const name = "BallastConfiguration";
    export const revision = 1;

    const Base = {
        attributes: {
            /**
             * The PhysicalMinLevel attribute specifies the minimum light output the ballast can achieve according to
             * the dimming light curve (see The Dimming Light Curve).
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.3.6.1
             */
            physicalMinLevel: Attribute(
                0,
                TlvUInt8.bound({ min: 1, max: 254 }),
                { default: 1, readAcl: AccessLevel.View }
            ),

            /**
             * The PhysicalMaxLevel attribute specifies the maximum light output the ballast can achieve according to
             * the dimming light curve (see The Dimming Light Curve).
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.3.6.2
             */
            physicalMaxLevel: Attribute(1, TlvUInt8.bound({ min: 1, max: 254 }), { readAcl: AccessLevel.View }),

            /**
             * The BallastStatus attribute specifies the activity status of the ballast functions. The usage of the
             * bits is specified in Bit Usage of the BallastStatus Attribute. Where a function is active, the
             * corresponding bit SHALL be set to 1. Where a function is not active, the corresponding bit SHALL be set
             * to 0.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.3.6.3
             */
            ballastStatus: OptionalAttribute(2, TlvBallastStatus, { readAcl: AccessLevel.View }),

            /**
             * The MinLevel attribute specifies the light output of the ballast according to the dimming light curve
             * (see The Dimming Light Curve) when the Level Control Cluster’s CurrentLevel attribute equals to 1 (and
             * the On/Off Cluster’s OnOff attribute equals to TRUE).
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.3.7.1
             */
            minLevel: WritableAttribute(
                16,
                TlvUInt8.bound({ min: 1, max: 254 }),
                { default: 1, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The MaxLevel attribute specifies the light output of the ballast according to the dimming light curve
             * (see The Dimming Light Curve) when the Level Control Cluster’s CurrentLevel attribute equals to 254 (and
             * the On/Off Cluster’s OnOff attribute equals to TRUE).
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.3.7.2
             */
            maxLevel: WritableAttribute(
                17,
                TlvUInt8.bound({ min: 1, max: 254 }),
                { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The IntrinsicBallastFactor attribute specifies as a percentage the ballast factor of the ballast/lamp
             * combination, prior to any adjustment.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.3.7.3
             */
            intrinsicBallastFactor: OptionalWritableAttribute(
                20,
                TlvNullable(TlvUInt8),
                { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The BallastFactorAdjustment attribute specifies the multiplication factor, as a percentage, to be
             * applied to the configured light output of the lamps. A typical usage of this mechanism is to compensate
             * for reduction in efficiency over the lifetime of a lamp.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.3.7.4
             */
            ballastFactorAdjustment: OptionalWritableAttribute(
                21,
                TlvNullable(TlvUInt8.bound({ min: 100, max: "Ms" })),
                { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The LampQuantity attribute and specifies the number of lamps connected to this ballast. (Note 1:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.3.8.1
             */
            lampQuantity: Attribute(32, TlvUInt8, { readAcl: AccessLevel.View }),

            /**
             * The LampType attribute specifies the type of lamps (including their wattage) connected to the ballast.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.3.9.1
             */
            lampType: OptionalWritableAttribute(
                48,
                TlvString.bound({ maxLength: 16 }),
                { default: "emptystring", readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The LampManufacturer attribute specifies the name of the manufacturer of the currently connected lamps.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.3.9.2
             */
            lampManufacturer: OptionalWritableAttribute(
                49,
                TlvString.bound({ maxLength: 16 }),
                { default: "emptystring", readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The LampRatedHours attribute specifies the number of hours of use the lamps are rated for by the
             * manufacturer.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.3.9.3
             */
            lampRatedHours: OptionalWritableAttribute(
                50,
                TlvNullable(TlvUInt24),
                { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The LampBurnHours attribute specifies the length of time, in hours, the currently connected lamps have
             * been operated, cumulative since the last re-lamping. Burn hours SHALL not be accumulated if the lamps
             * are off.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.3.9.4
             */
            lampBurnHours: OptionalWritableAttribute(
                51,
                TlvNullable(TlvUInt24),
                { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The LampAlarmMode attribute specifies which attributes MAY cause an alarm notification to be generated,
             * as listed in Values of the LampAlarmMode Attribute. A ‘1’ in each bit position causes its associated
             * attribute to be able to generate an alarm. (Note: All alarms are also logged in the alarm table – see
             * Alarms cluster).
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.3.9.5
             */
            lampAlarmMode: OptionalWritableAttribute(
                52,
                TlvLampAlarmMode,
                { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The LampBurnHoursTripPoint attribute specifies the number of hours the LampBurnHours attribute MAY reach
             * before an alarm is generated.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.3.9.6
             */
            lampBurnHoursTripPoint: OptionalWritableAttribute(
                53,
                TlvNullable(TlvUInt24),
                { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            )
        }
    };

    export const Complete = BuildCluster({ id, name, revision, elements: [ Base ] });
};