/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { BitFlags, TypeFromPartialBitSchema, BitFlag } from "../../schema/BitmapSchema.js";
import { extendCluster, ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { GlobalAttributes, Attribute, Command, TlvNoResponse, Cluster } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvUInt8, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvString } from "../../tlv/TlvString.js";

/**
 * Audio Output
 *
 * This cluster provides an interface for controlling the Output on a media device such as a TV.
 *
 * Use this factory function to create an AudioOutput cluster supporting a specific set of features. Include each
 * {@link AudioOutputCluster.Feature} you wish to support.
 *
 * @param features a list of {@link AudioOutputCluster.Feature} to support
 * @returns an AudioOutput cluster with specified features enabled
 * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5
 */
export function AudioOutputCluster<T extends AudioOutputCluster.Feature[]>(...features: [...T]) {
    const cluster = Cluster({
        ...AudioOutputCluster.Metadata,
        supportedFeatures: BitFlags(AudioOutputCluster.Metadata.features, ...features),
        ...AudioOutputCluster.BaseComponent
    });
    extendCluster(cluster, AudioOutputCluster.NameUpdatesComponent, { nameUpdates: true });
    return cluster as unknown as AudioOutputCluster.Type<BitFlags<typeof AudioOutputCluster.Metadata.features, T>>;
}

/**
 * The type of output, expressed as an enum, with the following values:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.5.2
 */
export const enum OutputType {
    /**
     * HDMI
     */
    Hdmi = 0,

    Bt = 1,
    Optical = 2,
    Headphone = 3,
    Internal = 4,
    Other = 5
}

/**
 * This contains information about an output.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.5.1
 */
export const TlvOutputInfoStruct = TlvObject({
    /**
     * This shall indicate the unique index into the list of outputs.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.5.1.1
     */
    index: TlvField(0, TlvUInt8),

    /**
     * This shall indicate the type of output
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.5.1.2
     */
    outputType: TlvField(1, TlvEnum<OutputType>()),

    /**
     * The device defined and user editable output name, such as “Soundbar”, “Speakers”. This field may be blank, but
     * SHOULD be provided when known.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.5.1.3
     */
    name: TlvField(2, TlvString)
});

/**
 * Input to the AudioOutput selectOutput command
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.4
 */
export const TlvSelectOutputRequest = TlvObject({ index: TlvField(0, TlvUInt8) });

/**
 * Input to the AudioOutput renameOutput command
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.4.2
 */
export const TlvRenameOutputRequest = TlvObject({ index: TlvField(0, TlvUInt8), name: TlvField(1, TlvString) });

export namespace AudioOutputCluster {
    /**
     * These are optional features supported by AudioOutputCluster.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.2
     */
    export enum Feature {
        /**
         * NameUpdates
         *
         * Supports updates to output names
         */
        NameUpdates = "NameUpdates"
    }

    export type Type<T extends TypeFromPartialBitSchema<typeof Metadata.features>> =
        typeof Metadata
        & { attributes: GlobalAttributes<typeof Metadata.features> }
        & { supportedFeatures: T }
        & typeof BaseComponent
        & (T extends { nameUpdates: true } ? typeof NameUpdatesComponent : {});

    /**
     * AudioOutput cluster metadata.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5
     */
    export const Metadata = ClusterMetadata({
        id: 0x50b,
        name: "AudioOutput",
        revision: 1,

        features: {
            /**
             * NameUpdates
             *
             * Supports updates to output names
             */
            nameUpdates: BitFlag(0)
        }
    });

    /**
     * A AudioOutputCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * This list provides the outputs supported by the device.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.3.1
             */
            outputList: Attribute(0, TlvArray(TlvOutputInfoStruct), { default: [] }),

            /**
             * This field contains the value of the index field of the currently selected OutputInfoStruct.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.3.2
             */
            currentOutput: Attribute(1, TlvUInt8, { default: 0 })
        },

        commands: {
            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.4
             */
            selectOutput: Command(0, TlvSelectOutputRequest, 0, TlvNoResponse)
        }
    });

    /**
     * A AudioOutputCluster supports these elements if it supports feature NameUpdates.
     */
    export const NameUpdatesComponent = ClusterComponent({
        commands: {
            /**
             * Upon receipt, this shall rename the output at a specific index in the Output List.
             *
             * Updates to the output name shall appear in the device’s settings menus. Name updates MAY automatically
             * be sent to the actual device to which the output connects.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.4.2
             */
            renameOutput: Command(1, TlvRenameOutputRequest, 1, TlvNoResponse)
        }
    });

    /**
     * This cluster supports all AudioOutput features. It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export const Complete = Cluster({
        ...Metadata,
        attributes: { ...BaseComponent.attributes },
        commands: { ...BaseComponent.commands, ...NameUpdatesComponent.commands }
    });
}
