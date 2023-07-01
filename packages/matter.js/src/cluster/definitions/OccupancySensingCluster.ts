/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Attribute, AccessLevel, OptionalWritableAttribute } from "../../cluster/Cluster.js";
import { TlvUInt8, TlvBitmap, TlvEnum, TlvUInt16 } from "../../tlv/TlvNumber.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.5.1
 */
export const TlvOccupancyBitmapBits = {
    /**
     * Indicates the sensed occupancy state; 1 = occupied, 0 = unoccupied.
     */
    occupied: BitFlag(1)
};

export const TlvOccupancyBitmap = TlvBitmap(TlvUInt8, TlvOccupancyBitmapBits);

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.5.2
 */
export const enum TlvOccupancySensorTypeEnum {
    Pir = 0,
    Ultrasonic = 1,
    PirAndUltrasonic = 2,
    PhysicalContact = 3
};

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.5.3
 */
export const TlvOccupancySensorTypeBitmapBits = {
    /**
     * Indicates a ultrasonic sensor.
     */
    ultrasonic: BitFlag(1),

    /**
     * Indicates a physical contact sensor.
     */
    physicalContact: BitFlag(4)
};

export const TlvOccupancySensorTypeBitmap = TlvBitmap(TlvUInt8, TlvOccupancySensorTypeBitmapBits);

export namespace OccupancySensingCluster {
    export const id = 0x406;
    export const name = "OccupancySensing";
    export const revision = 1;

    const Base = {
        attributes: {
            /**
             * The Occupancy attribute indicates the status of occupancy.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.6.1
             */
            occupancy: Attribute(0, TlvOccupancyBitmap, { readAcl: AccessLevel.View }),

            /**
             * The OccupancySensorType attribute specifies the type of the occupancy sensor.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.6.2
             */
            occupancySensorType: Attribute(1, TlvEnum<TlvOccupancySensorTypeEnum>(), { readAcl: AccessLevel.View }),

            /**
             * The OccupancySensorTypeBitmap attribute specifies the types of the occupancy sensor. A ‘1’ in each bit
             * position indicates the capability is implemented.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.6.3
             */
            occupancySensorTypeBitmap: Attribute(2, TlvOccupancySensorTypeBitmap, { readAcl: AccessLevel.View }),

            /**
             * The PIROccupiedToUnoccupiedDelay attribute specifies the time delay, in seconds, before the PIR sensor
             * changes to its unoccupied state after the last detection of movement in the sensed area.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.7.1
             */
            pirOccupiedToUnoccupiedDelay: OptionalWritableAttribute(
                16,
                TlvUInt16,
                { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The PIRUnoccupiedToOccupiedDelay attribute specifies the time delay, in seconds, before the PIR sensor
             * changes to its occupied state after the detection of movement in the sensed area. This attribute is
             * mandatory if the PIRUnoccupiedToOccupiedThreshold attribute is implemented.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.7.2
             */
            pirUnoccupiedToOccupiedDelay: OptionalWritableAttribute(
                17,
                TlvUInt16,
                { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The PIRUnoccupiedToOccupiedThreshold attribute specifies the number of movement detection events that
             * must occur in the period PIRUnoccupiedToOccupiedDelay, before the PIR sensor changes to its occupied
             * state. This attribute is mandatory if the PIRUnoccupiedToOccupiedDelay attribute is implemented.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.7.3
             */
            pirUnoccupiedToOccupiedThreshold: OptionalWritableAttribute(
                18,
                TlvUInt8.bound({ min: 1, max: 254 }),
                { default: 1, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The UltrasonicOccupiedToUnoccupiedDelay attribute and specifies the time delay, in seconds, before the
             * Ultrasonic sensor changes to its unoccupied state after the last detection of movement in the sensed
             * area.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.8.1
             */
            ultrasonicOccupiedToUnoccupiedDelay: OptionalWritableAttribute(
                32,
                TlvUInt16,
                { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The UltrasonicUnoccupiedToOccupiedDelay attribute and specifies the time delay, in seconds, before the
             * Ultrasonic sensor changes to its occupied state after the detection of movement in the sensed area. This
             * attribute is mandatory if the UltrasonicUnoccupiedToOccupiedThreshold attribute is implemented.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.8.2
             */
            ultrasonicUnoccupiedToOccupiedDelay: OptionalWritableAttribute(
                33,
                TlvUInt16,
                { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The UltrasonicUnoccupiedToOccupiedThreshold attribute specifies the number of movement detection events
             * that must occur in the period UltrasonicUnoccupiedToOccupiedDelay, before the Ultrasonic sensor changes
             * to its occupied state. This attribute is mandatory if the UltrasonicUnoccupiedToOccupiedDelay attribute
             * is implemented.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.8.3
             */
            ultrasonicUnoccupiedToOccupiedThreshold: OptionalWritableAttribute(
                34,
                TlvUInt8.bound({ min: 1, max: 254 }),
                { default: 1, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The PhysicalContactOccupiedToUnoccupiedDelay attribute specifies the time delay, in seconds, before the
             * physical contact occupancy sensor changes to its unoccupied state after detecting the unoccupied event.
             * The null value indicates that the sensor does not report occupied to unoccupied transition.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.9.1
             */
            physicalContactOccupiedToUnoccupiedDelay: OptionalWritableAttribute(
                48,
                TlvNullable(TlvUInt16),
                { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The PhysicalContactUnoccupiedToOccupiedDelay attribute specifies the time delay, in seconds, before the
             * physical contact sensor changes to its occupied state after the detection of the occupied event.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.9.2
             */
            physicalContactUnoccupiedToOccupiedDelay: OptionalWritableAttribute(
                49,
                TlvNullable(TlvUInt16),
                { readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            ),

            /**
             * The PhysicalContactUnoccupiedToOccupiedThreshold attribute specifies the number of movement detection
             * events that must occur in the period PhysicalContactUnoccupiedToOccupiedDelay, before the PIR sensor
             * changes to its occupied state. This attribute is mandatory if the
             * PhysicalContactUnoccupiedToOccupiedDelay attribute is implemented.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.7.9.3
             */
            physicalContactUnoccupiedToOccupiedThreshold: OptionalWritableAttribute(
                50,
                TlvUInt8.bound({ min: 1, max: 254 }),
                { default: 1, readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            )
        }
    };

    export const Complete = BuildCluster({ id, name, revision, elements: [ Base ] });
};