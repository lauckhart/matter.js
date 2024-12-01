/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../cluster/mutation/MutableCluster.js";
import { BitFlag } from "../schema/BitmapSchema.js";
import { FixedAttribute, Attribute } from "../cluster/Cluster.js";
import { TlvArray } from "../tlv/TlvArray.js";
import { TlvField, TlvOptionalField, TlvObject } from "../tlv/TlvObject.js";
import { TlvEnum, TlvUInt8 } from "../tlv/TlvNumber.js";
import { TlvVendorId } from "../datatype/VendorId.js";
import { TypeFromSchema } from "../tlv/TlvSchema.js";
import { TlvString } from "../tlv/TlvString.js";
import { Identity } from "#general";
import { ClusterRegistry } from "../cluster/ClusterRegistry.js";

export namespace MicrowaveOvenMode {
    /**
     * These are optional features supported by MicrowaveOvenModeCluster.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 1.10.4
     */
    export enum Feature {
        /**
         * OnOff (DEPONOFF)
         *
         * This feature creates a dependency between an OnOff cluster instance and this cluster instance on the same
         * endpoint. See OnMode for more information.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.10.4.1
         */
        OnOff = "OnOff"
    }

    export enum ModeTag {
        /**
         * The normal mode of operation
         *
         * @see {@link MatterSpecification.v13.Cluster} § 8.12.6.1
         */
        Normal = 16384,

        /**
         * A mode optimized for defrosting foods
         *
         * @see {@link MatterSpecification.v13.Cluster} § 8.12.6.1
         */
        Defrost = 16385
    }

    export const TlvModeTagStruct = TlvObject({
        value: TlvOptionalField(0, TlvEnum<ModeTag>()),

        /**
         * If the MfgCode field exists, the Value field shall be in the manufacturer-specific value range (see Section
         * 1.10.8, “Mode Namespace”).
         *
         * This field shall indicate the manufacturer’s VendorID and it shall determine the meaning of the Value field.
         *
         * The same manufacturer code and mode tag value in separate cluster instances are part of the same namespace
         * and have the same meaning. For example: a manufacturer tag meaning "pinch" can be used both in a cluster
         * whose purpose is to choose the amount of sugar, or in a cluster whose purpose is to choose the amount of
         * salt.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.10.5.1.1
         */
        mfgCode: TlvOptionalField(0, TlvVendorId)
    });

    export interface ModeTagStruct extends TypeFromSchema<typeof TlvModeTagStruct> {}

    export const TlvModeOption = TlvObject({
        modeTags: TlvField(0, TlvArray(TlvModeTagStruct, { maxLength: 8 })),

        /**
         * This field shall indicate readable text that describes the mode option, so that a client can provide it to
         * the user to indicate what this option means. This field is meant to be readable and understandable by the
         * user.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.10.5.2.1
         */
        label: TlvField(0, TlvString.bound({ maxLength: 64 })),

        /**
         * This field is used to identify the mode option.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 1.10.5.2.2
         */
        mode: TlvField(1, TlvUInt8)
    });

    export interface ModeOption extends TypeFromSchema<typeof TlvModeOption> {}

    /**
     * These elements and properties are present in all MicrowaveOvenMode clusters.
     */
    export const Base = MutableCluster.Component({
        id: 0x5e,
        name: "MicrowaveOvenMode",
        revision: 1,

        features: {
            /**
             * OnOff
             *
             * This feature creates a dependency between an OnOff cluster instance and this cluster instance on the
             * same endpoint. See OnMode for more information.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.10.4.1
             */
            onOff: BitFlag(0)
        },

        attributes: {
            /**
             * This attribute shall contain the list of supported modes that may be selected for the CurrentMode
             * attribute. Each item in this list represents a unique mode as indicated by the Mode field of the
             * ModeOptionStruct.
             *
             * Each entry in this list shall have a unique value for the Mode field. Each entry in this list shall have
             * a unique value for the Label field.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.10.6.2
             */
            supportedModes: FixedAttribute(0x0, TlvArray(TlvModeOption, { minLength: 2, maxLength: 255 })),

            /**
             * @see {@link MatterSpecification.v13.Cluster} § 8.12.4
             */
            currentMode: Attribute(0x1, TlvUInt8, { scene: true, persistent: true })
        },

        /**
         * This metadata controls which MicrowaveOvenModeCluster elements matter.js activates for specific feature
         * combinations.
         */
        extensions: MutableCluster.Extensions()
    });

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster(Base);

    /**
     * This cluster is derived from the Mode Base cluster, defining additional mode tags and namespaced enumerated
     * values for Microwave Oven devices.
     *
     * MicrowaveOvenModeCluster supports optional features that you can enable with the MicrowaveOvenModeCluster.with()
     * factory method.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 8.12
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    export const Complete = Cluster;
}

export type MicrowaveOvenModeCluster = MicrowaveOvenMode.Cluster;
export const MicrowaveOvenModeCluster = MicrowaveOvenMode.Cluster;
ClusterRegistry.register(MicrowaveOvenMode.Complete);
