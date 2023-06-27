/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, Attribute, OptionalAttribute, WritableAttribute, OptionalWritableAttribute } from "../../cluster/Cluster.js";
import { TlvUInt8, TlvBitmap, TlvUInt24 } from "../../tlv/TlvNumber.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvString } from "../../tlv/TlvString.js";

export const BallastStatus = TlvBitmap(TlvUInt8, {
    NonOperational: BitFlag(1),
    LampNotInSocket: BitFlag(2)
});

export const LampAlarmMode = TlvBitmap(TlvUInt8, { LampBurnHours: BitFlag(1) });

export namespace BallastConfigurationCluster {
    /**
     * Ballast Configuration
     *
     * Attributes and commands for configuring a lighting ballast.
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `BallastConfiguration.with()` and a list
     * of supported features.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 3.3
     */
    export const Complete = Cluster({
        id: 0x301,
        name: "BallastConfiguration",
        revision: 1,

        attributes: {
            physicalMinLevel: Attribute(0, TlvUInt8, { default: 1 }),
            physicalMaxLevel: Attribute(1, TlvUInt8, { default: 254 }),
            ballastStatus: OptionalAttribute(2, BallastStatus),
            minLevel: WritableAttribute(16, TlvUInt8, { default: 1 }),
            maxLevel: WritableAttribute(17, TlvUInt8, { default: 254 }),
            intrinsicBallastFactor: OptionalWritableAttribute(20, TlvNullable(TlvUInt8)),
            ballastFactorAdjustment: OptionalWritableAttribute(21, TlvNullable(TlvUInt8), { default: 255 }),
            lampQuantity: Attribute(32, TlvUInt8),
            lampType: OptionalWritableAttribute(48, TlvString),
            lampManufacturer: OptionalWritableAttribute(49, TlvString),
            lampRatedHours: OptionalWritableAttribute(50, TlvNullable(TlvUInt24), { default: 16777215 }),
            lampBurnHours: OptionalWritableAttribute(51, TlvNullable(TlvUInt24)),
            lampAlarmMode: OptionalWritableAttribute(52, LampAlarmMode),
            lampBurnHoursTripPoint: OptionalWritableAttribute(53, TlvNullable(TlvUInt24), { default: 16777215 })
        }
    });
};