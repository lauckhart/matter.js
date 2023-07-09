/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { BitFlags, TypeFromPartialBitSchema, BitFlag } from "../../schema/BitmapSchema.js";
import { extendCluster, ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { GlobalAttributes, Attribute, AccessLevel, OptionalAttribute, Cluster } from "../../cluster/Cluster.js";
import { TlvInt16, TlvUInt16, TlvInt8 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";

/**
 * Pressure Measurement
 *
 * Attributes and commands for configuring the measurement of pressure, and reporting pressure measurements.
 *
 * Use this factory function to create a PressureMeasurement cluster supporting a specific set of features.  Include
 * each {@link PressureMeasurementCluster.Feature} you wish to support.
 *
 * @param features a list of {@link PressureMeasurementCluster.Feature} to support
 * @returns a PressureMeasurement cluster with specified features enabled
 * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4
 */
export function PressureMeasurementCluster<T extends PressureMeasurementCluster.Feature[]>(...features: [ ...T ]) {
    const cluster = Cluster({
        ...PressureMeasurementCluster.Metadata,
        supportedFeatures: BitFlags(PressureMeasurementCluster.Metadata.features, ...features),
        ...PressureMeasurementCluster.BaseComponent
    });
    extendCluster(cluster, PressureMeasurementCluster.ExtendedComponent, { extended: true });
    return cluster as unknown as PressureMeasurementCluster.Type<BitFlags<typeof PressureMeasurementCluster.Metadata.features, T>>;
}

export namespace PressureMeasurementCluster {
    /**
     * These are optional features supported by PressureMeasurementCluster.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4.4
     */
    export enum Feature {
        /**
         * Extended
         *
         * The cluster is capable of extended range and resolution
         */
        Extended = "Extended"
    }

    export type Type<T extends TypeFromPartialBitSchema<typeof Metadata.features>> = 
        typeof Metadata
        & { attributes: GlobalAttributes<typeof Metadata.features> }
        & { supportedFeatures: T }
        & typeof BaseComponent
        & (T extends { extended: true } ? typeof ExtendedComponent : {});

    /**
     * PressureMeasurement cluster metadata.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4
     */
    export const Metadata = ClusterMetadata({
        id: 0x403,
        name: "PressureMeasurement",
        revision: 1,

        features: {
            /**
             * Extended
             *
             * The cluster is capable of extended range and resolution
             */
            extended: BitFlag(0)
        }
    });

    /**
     * A PressureMeasurementCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute represents the pressure in kPa as follows:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4.5.1
             */
            measuredValue: Attribute(0, TlvNullable(TlvInt16), { readAcl: AccessLevel.View }),

            /**
             * This attribute indicates the minimum value of MeasuredValue that can be measured. See Measured Value for
             * more details.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4.5.2
             */
            minMeasuredValue: Attribute(1, TlvNullable(TlvInt16.bound({ min: -32767 })), { readAcl: AccessLevel.View }),

            /**
             * This attribute indicates the maximum value of MeasuredValue that can be measured. See Measured Value for
             * more details.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4.5.3
             */
            maxMeasuredValue: Attribute(2, TlvNullable(TlvInt16.bound({ max: 32767 })), { readAcl: AccessLevel.View }),

            /**
             * This attribute indicates the magnitude of the possible error that is associated with ScaledValue.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4.5.4
             */
            tolerance: OptionalAttribute(3, TlvUInt16.bound({ max: 2048 }), { default: 0, readAcl: AccessLevel.View })
        }
    });

    /**
     * A PressureMeasurementCluster supports these elements if it supports feature Extended.
     */
    export const ExtendedComponent = ClusterComponent({
        attributes: {
            /**
             * ScaledValue represents the pressure in Pascals as follows:
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4.5.5
             */
            scaledValue: Attribute(16, TlvNullable(TlvInt16), { default: 0, readAcl: AccessLevel.View }),

            /**
             * The MinScaledValue attribute indicates the minimum value of ScaledValue that can be measured. The null
             * value indicates that the value is not available.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4.5.6
             */
            minScaledValue: Attribute(
                17,
                TlvNullable(TlvInt16.bound({ min: -32767 })),
                { default: 0, readAcl: AccessLevel.View }
            ),

            /**
             * This attribute indicates the maximum value of ScaledValue that can be measured. MaxScaledValue SHALL be
             * greater than MinScaledValue.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4.5.7
             */
            maxScaledValue: Attribute(
                18,
                TlvNullable(TlvInt16.bound({ max: 32767 })),
                { default: 0, readAcl: AccessLevel.View }
            ),

            /**
             * This attribute indicates the magnitude of the possible error that is associated with ScaledValue. The
             * true value is located in the range
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4.5.8
             */
            scaledTolerance: OptionalAttribute(
                19,
                TlvUInt16.bound({ max: 2048 }),
                { default: 0, readAcl: AccessLevel.View }
            ),

            /**
             * This attribute indicates the base 10 exponent used to obtain ScaledValue (see ScaledValue Attribute).
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 2.4.5.9
             */
            scale: Attribute(20, TlvInt8.bound({ min: -127, max: 127 }), { default: 0, readAcl: AccessLevel.View })
        }
    });

    /**
     * This cluster supports all PressureMeasurement features.  It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export const Complete = Cluster({
        ...Metadata,
        attributes: { ...BaseComponent.attributes, ...ExtendedComponent.attributes }
    });
}
