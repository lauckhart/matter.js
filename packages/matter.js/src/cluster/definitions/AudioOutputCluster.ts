/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlag } from "../../schema/BitmapSchema.js";
import { Attribute, AccessLevel, Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvUInt8, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvString } from "../../tlv/TlvString.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * The type of output, expressed as an enum, with the following values:
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.5.2
 */
export const enum TlvOutputTypeEnum {
    /**
     * HDMI
     */
    Hdmi = 0,

    Bt = 1,
    Optical = 2,
    Headphone = 3,
    Internal = 4,
    Other = 5
};

/**
 * This contains information about an output.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.5.1
 */
export const TlvOutputInfoStruct = TlvObject({
    /**
     * This SHALL indicate the unique index into the list of outputs.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.5.1.1
     */
    index: TlvField(0, TlvUInt8),

    /**
     * This SHALL indicate the type of output
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.5.1.2
     */
    outputType: TlvField(1, TlvEnum<TlvOutputTypeEnum>()),

    /**
     * The device defined and user editable output name, such as “Soundbar”, “Speakers”. This field may be blank, but
     * SHOULD be provided when known.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.5.1.3
     */
    name: TlvField(2, TlvString)
});

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.4
 */
export const TlvSelectOutputRequest = TlvObject({ index: TlvField(0, TlvUInt8) });

/**
 * Upon receipt, this SHALL rename the output at a specific index in the Output List.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.4.2
 */
export const TlvRenameOutputRequest = TlvObject({ index: TlvField(0, TlvUInt8), name: TlvField(1, TlvString) });

export namespace AudioOutputCluster {
    export const id = 0x50b;
    export const name = "AudioOutput";
    export const revision = 1;

    export const featureMap = {
        /**
         * NameUpdates
         *
         * Supports updates to output names
         */
        nameUpdates: BitFlag(0)
    };

    const Base = {
        attributes: {
            /**
             * This list provides the outputs supported by the device.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.3.1
             */
            outputList: Attribute(0, TlvArray(TlvOutputInfoStruct), { readAcl: AccessLevel.View }),

            /**
             * This field contains the value of the index field of the currently selected OutputInfoStruct.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.3.2
             */
            currentOutput: Attribute(1, TlvUInt8, { readAcl: AccessLevel.View })
        },

        commands: {
            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.4
             */
            selectOutput: Command(0, TlvSelectOutputRequest, 0, TlvNoResponse)
        }
    };

    const NameUpdates = {
        commands: {
            /**
             * Upon receipt, this SHALL rename the output at a specific index in the Output List.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.4.2
             */
            renameOutput: Command(1, TlvRenameOutputRequest, 1, TlvNoResponse)
        }
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        features: featureMap,
        supportedFeatures: { nameUpdates: true },
        elements: [ Base, NameUpdates ]
    });
};