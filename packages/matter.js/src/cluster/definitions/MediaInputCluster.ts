/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { BitFlags, TypeFromPartialBitSchema, BitFlag } from "../../schema/BitmapSchema.js";
import { extendCluster, ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { GlobalAttributes, Attribute, AccessLevel, Command, TlvNoResponse, Cluster } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvUInt8, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

/**
 * Media Input
 *
 * This cluster provides an interface for controlling the Input Selector on a media device such as a TV.
 *
 * Use this factory function to create a MediaInput cluster supporting a specific set of features.  Include each
 * {@link MediaInputCluster.Feature} you wish to support.
 *
 * @param features a list of {@link MediaInputCluster.Feature} to support
 * @returns a MediaInput cluster with specified features enabled
 * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9
 */
export function MediaInputCluster<T extends MediaInputCluster.Feature[]>(...features: [...T]) {
    const cluster = Cluster({
        ...MediaInputCluster.Metadata,
        supportedFeatures: BitFlags(MediaInputCluster.Metadata.features, ...features),
        ...MediaInputCluster.BaseComponent
    });
    extendCluster(cluster, MediaInputCluster.NameUpdatesComponent, { nameUpdates: true });
    return cluster as unknown as MediaInputCluster.Type<BitFlags<typeof MediaInputCluster.Metadata.features, T>>;
}

/**
 * The type of input, expressed as an enum, with the following values:
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
}

/**
 * This contains information about an input.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.5.1
 */
export const TlvInputInfoStruct = TlvObject({
    /**
     * This SHALL indicate the unique index into the list of Inputs.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.5.1.1
     */
    index: TlvField(0, TlvUInt8),

    /**
     * This SHALL indicate the type of input
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.5.1.2
     */
    inputType: TlvField(1, TlvEnum<InputTypeEnum>()),

    /**
     * This SHALL indicate the input name, such as “HDMI 1”. This field may be blank, but SHOULD be provided when known.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.5.1.3
     */
    name: TlvField(2, TlvString),

    /**
     * This SHALL indicate the user editable input description, such as “Living room Playstation”. This field may be
     * blank, but SHOULD be provided when known.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.5.1.4
     */
    description: TlvField(3, TlvString)
});

/**
 * Upon receipt, this SHALL change the media input on the device to the input at a specific index in the Input List.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.4.1
 */
export const TlvSelectInputRequest = TlvObject({
    /**
     * This SHALL indicate the index field of the InputInfoStruct from the InputList attribute in which to change to.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.4.1.1
     */
    index: TlvField(0, TlvUInt8)
});

/**
 * Upon receipt, this SHALL rename the input at a specific index in the Input List. Updates to the input name SHALL
 * appear in the device’s settings menus.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.4.4
 */
export const TlvRenameInputRequest = TlvObject({ index: TlvField(0, TlvUInt8), name: TlvField(1, TlvString) });

export namespace MediaInputCluster {
    /**
     * These are optional features supported by MediaInputCluster.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.2
     */
    export enum Feature {
        /**
         * NameUpdates
         *
         * Supports updates to the input names
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
     * MediaInput cluster metadata.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9
     */
    export const Metadata = ClusterMetadata({
        id: 0x507,
        name: "MediaInput",
        revision: 1,

        features: {
            /**
             * NameUpdates
             *
             * Supports updates to the input names
             */
            nameUpdates: BitFlag(0)
        }
    });

    /**
     * A MediaInputCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * This list provides the media inputs supported by the device.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.3.1
             */
            inputList: Attribute(0, TlvArray(TlvInputInfoStruct), { default: [], readAcl: AccessLevel.View }),

            /**
             * This field contains the value of the index field of the currently selected InputInfoStruct.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.3.2
             */
            currentInput: Attribute(1, TlvUInt8, { default: 0, readAcl: AccessLevel.View })
        },

        commands: {
            /**
             * Upon receipt, this SHALL change the media input on the device to the input at a specific index in the
             * Input List.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.4.1
             */
            selectInput: Command(0, TlvSelectInputRequest, 0, TlvNoResponse),

            /**
             * Upon receipt, this SHALL display the active status of the input list on screen.
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
    });

    /**
     * A MediaInputCluster supports these elements if it supports feature NameUpdates.
     */
    export const NameUpdatesComponent = ClusterComponent({
        commands: {
            /**
             * Upon receipt, this SHALL rename the input at a specific index in the Input List. Updates to the input
             * name SHALL appear in the device’s settings menus.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.9.4.4
             */
            renameInput: Command(3, TlvRenameInputRequest, 3, TlvNoResponse)
        }
    });

    /**
     * This cluster supports all MediaInput features.  It may support illegal feature combinations.
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
