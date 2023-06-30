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
 * OutputType Data Type is derived from enum8.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.5.2
 */
export const enum OutputTypeEnum {
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
export const OutputInfoStruct = TlvObject({
    /**
     * This SHALL indicate the unique index into the list of outputs.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.5.1.1
     */
    Index: TlvField(0, TlvUInt8),

    /**
     * This SHALL indicate the type of output
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.5.1.2
     */
    OutputType: TlvField(1, TlvEnum<OutputTypeEnum>()),

    /**
     * The device defined and user editable output name, such as “Soundbar”,
     * “Speakers”. This field may be blank, but SHOULD be provided when known.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.5.1.3
     */
    Name: TlvField(2, TlvString)
});

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.4
 */
export const SelectOutputRequest = TlvObject({ Index: TlvField(0, TlvUInt8) });

/**
 * Upon receipt, this SHALL rename the output at a specific index in the Output
 * List.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.4.2
 */
export const RenameOutputRequest = TlvObject({
    Index: TlvField(0, TlvUInt8),
    Name: TlvField(1, TlvString)
});

export namespace AudioOutputCluster {
    export const id = 1291;
    export const name = "AudioOutput";
    export const revision = 1;

    export const featureMap = {
        /**
         * NameUpdates
         *
         * Supports updates to output names
         */
        NU: BitFlag(0)
    };

    const Base = {
        attributes: {
            /**
             * This list provides the outputs supported by the device.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.3.1
             */
            outputList: Attribute(0, TlvArray(OutputInfoStruct), { readAcl: AccessLevel.View }),

            /**
             * This field contains the value of the index field of the
             * currently selected OutputInfoStruct.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.3.2
             */
            currentOutput: Attribute(1, TlvUInt8, { readAcl: AccessLevel.View })
        },

        commands: {
            /**
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.4
             */
            selectOutput: Command(0, SelectOutputRequest, 0, TlvNoResponse)
        }
    };

    const NameUpdates = {
        commands: {
            /**
             * Upon receipt, this SHALL rename the output at a specific index
             * in the Output List.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.5.4.2
             */
            renameOutput: Command(1, RenameOutputRequest, 1, TlvNoResponse)
        }
    };

    export const Complete = BuildCluster({
        id,
        name,
        revision,
        features: featureMap,
        supportedFeatures: { NU: true },
        elements: [
            Base,
            NameUpdates
        ]
    });
};