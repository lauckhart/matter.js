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
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";

/**
 * InputType Data Type is derived from enum8.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.5.2
 */
export const enum InputTypeEnum {
    /**
     * Indicates content not coming from a physical input.
     */
    Internal = 0,

    Aux = 1,
    Coax = 2,
    Composite = 3,
    Hdmi = 4,
    Input = 5,
    Line = 6,
    Optical = 7,
    Video = 8,
    Scart = 9,
    Usb = 10,
    Other = 11
};

/**
 * This contains information about an input.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.5.1
 */
export const InputInfoStruct = TlvObject({
    /**
     * This SHALL indicate the unique index into the list of Inputs.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.5.1.1
     */
    Index: TlvField(0, TlvUInt8),

    /**
     * This SHALL indicate the type of input
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.5.1.2
     */
    InputType: TlvField(1, TlvEnum<InputTypeEnum>()),

    /**
     * This SHALL indicate the input name, such as “HDMI 1”. This field may be
     * blank, but SHOULD be provided when known.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.5.1.3
     */
    Name: TlvField(2, TlvString),

    /**
     * This SHALL indicate the user editable input description, such as “Living
     * room Playstation”. This field may be blank, but SHOULD be provided when
     * known.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.5.1.4
     */
    Description: TlvField(3, TlvString)
});

/**
 * Upon receipt, this SHALL change the media input on the device to the input
 * at a specific index in the Input List.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.4.1
 */
export const SelectInputRequest = TlvObject({
    /**
     * This SHALL indicate the index field of the InputInfoStruct from the
     * InputList attribute in which to change to.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.4.1.1
     */
    Index: TlvField(0, TlvUInt8)
});

/**
 * Upon receipt, this SHALL rename the input at a specific index in the Input
 * List. Updates to the input name SHALL appear in the device’s settings menus.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.4.4
 */
export const RenameInputRequest = TlvObject({
    Index: TlvField(0, TlvUInt8),
    Name: TlvField(1, TlvString)
});

export namespace MediaInputCluster {
    export const id = 1287;
    export const name = "MediaInput";
    export const revision = 1;

    export const featureMap = {
        /**
         * NameUpdates
         *
         * Supports updates to the input names
         */
        NU: BitFlag(0)
    };

    const Base = {
        attributes: {
            /**
             * This list provides the media inputs supported by the device.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.3.1
             */
            inputList: Attribute(0, TlvArray(InputInfoStruct), { readAcl: AccessLevel.View }),

            /**
             * This field contains the value of the index field of the
             * currently selected InputInfoStruct.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.3.2
             */
            currentInput: Attribute(1, TlvUInt8, { readAcl: AccessLevel.View })
        },

        commands: {
            /**
             * Upon receipt, this SHALL change the media input on the device to
             * the input at a specific index in the Input List.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.4.1
             */
            selectInput: Command(0, SelectInputRequest, 0, TlvNoResponse),

            /**
             * Upon receipt, this SHALL display the active status of the input
             * list on screen.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.4.2
             */
            showInputStatus: Command(1, TlvNoArguments, 1, TlvNoResponse),

            /**
             * Upon receipt, this SHALL hide the input list from the screen.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.4.3
             */
            hideInputStatus: Command(2, TlvNoArguments, 2, TlvNoResponse)
        }
    };

    const NameUpdates = {
        commands: {
            /**
             * Upon receipt, this SHALL rename the input at a specific index in
             * the Input List. Updates to the input name SHALL appear in the
             * device’s settings menus.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.4.4
             */
            renameInput: Command(3, RenameInputRequest, 3, TlvNoResponse)
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