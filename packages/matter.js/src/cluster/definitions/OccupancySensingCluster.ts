/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, Attribute, OptionalWritableAttribute, AccessLevel } from "../../cluster/Cluster.js";
import { TlvBitmap, TlvUInt8, TlvEnum, TlvUInt16 } from "../../tlv/TlvNumber.js";
import { BitFlag } from "../../schema/BitmapSchema.js";

/**
 * This data type is derived from bitmap8.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.5.1
 */
export const OccupancyBitmap = TlvBitmap(TlvUInt8, {
    /**
     * Indicates the sensed occupancy state; 1 = occupied, 0 = unoccupied.
     */
    Occupied: BitFlag(1)
});

/**
 * This data type is derived from enum8.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.5.2
 */
export const enum OccupancySensorTypeEnum {
    Pir = 0,
    Ultrasonic = 1,
    PirAndUltrasonic = 2,
    PhysicalContact = 3
};

/**
 * This data type is derived from bitmap8.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.5.3
 */
export const OccupancySensorTypeBitmap = TlvBitmap(TlvUInt8, {
    /**
     * Indicates a ultrasonic sensor.
     */
    Ultrasonic: BitFlag(1),

    /**
     * Indicates a physical contact sensor.
     */
    PhysicalContact: BitFlag(4)
});

export namespace OccupancySensingCluster {
    /**
     * Occupancy Sensing
     *
     * Attributes and commands for configuring occupancy sensing, and reporting
     * occupancy status.
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `OccupancySensing.with()` and a list of
     * supported features.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7
     */
    export const Complete = Cluster({
        id: 0x406,
        name: "OccupancySensing",
        revision: 1,

        attributes: {
            occupancy: Attribute(0, OccupancyBitmap),
            occupancySensorType: Attribute(1, TlvEnum<OccupancySensorTypeEnum>()),
            occupancySensorTypeBitmap: Attribute(2, OccupancySensorTypeBitmap),
            pirOccupiedToUnoccupiedDelay: OptionalWritableAttribute(16, TlvUInt16, { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }),
            pirUnoccupiedToOccupiedDelay: OptionalWritableAttribute(17, TlvUInt16, { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }),
            pirUnoccupiedToOccupiedThreshold: OptionalWritableAttribute(18, TlvUInt8, { default: 1, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }),
            ultrasonicOccupiedToUnoccupiedDelay: OptionalWritableAttribute(32, TlvUInt16, { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }),
            ultrasonicUnoccupiedToOccupiedDelay: OptionalWritableAttribute(33, TlvUInt16, { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }),
            ultrasonicUnoccupiedToOccupiedThreshold: OptionalWritableAttribute(34, TlvUInt8, { default: 1, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }),
            physicalContactOccupiedToUnoccupiedDelay: OptionalWritableAttribute(48, TlvUInt16, { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }),
            physicalContactUnoccupiedToOccupiedDelay: OptionalWritableAttribute(49, TlvUInt16, { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }),
            physicalContactUnoccupiedToOccupiedThreshold: OptionalWritableAttribute(50, TlvUInt8, { default: 1, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage })
        }
    });
};