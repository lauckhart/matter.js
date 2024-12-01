/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../cluster/mutation/MutableCluster.js";
import { BitFlag } from "../schema/BitmapSchema.js";
import { FixedAttribute, Attribute, Command, TlvNoResponse } from "../cluster/Cluster.js";
import { TlvArray } from "../tlv/TlvArray.js";
import { TlvField, TlvOptionalField, TlvObject } from "../tlv/TlvObject.js";
import { TlvEnum, TlvUInt8 } from "../tlv/TlvNumber.js";
import { TlvVendorId } from "../datatype/VendorId.js";
import { TypeFromSchema } from "../tlv/TlvSchema.js";
import { TlvString } from "../tlv/TlvString.js";
import { ModeBase } from "./mode-base.js";
import { Identity } from "#general";
import { ClusterRegistry } from "../cluster/ClusterRegistry.js";

export namespace RvcRunMode {
    /**
     * These are optional features supported by RvcRunModeCluster.
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
         * The device is not performing any of the main operations of the other modes. However, auxiliary actions, such
         * as seeking the charger or charging, may occur.
         *
         * For example, the device has completed cleaning, successfully or not, on its own or due to a command, or has
         * not been asked to clean after a restart.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.2.1
         */
        Idle = 16384,

        /**
         * The device was asked to clean so it may be actively running, or paused due to an error, due to a pause
         * command, or for recharging etc. If currently paused and the device can resume it will continue to clean.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.2.2
         */
        Cleaning = 16385,

        /**
         * The device was asked to create a map of the space it is located in, so it may be actively running, or paused
         * due to an error, due to a pause command, or for recharging etc. If currently paused and the device can
         * resume, it will continue to map.
         *
         * NOTE
         *
         * this mode is intended to be used so the current space can be mapped by the device if the robot has not
         * previously done that, or if the layout has substantially changed, for an optimal subsequent cleaning
         * experience.
         *
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.2.3
         */
        Mapping = 16386
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

    /**
     * The table below lists the changes relative to the Mode Base cluster for the fields of the ModeOptionStruct type.
     * A blank field indicates no change.
     *
     * At least one entry in the SupportedModes attribute shall include the Idle mode tag in the ModeTags field.
     *
     * At least one entry in the SupportedModes attribute (different from the one above) shall include the Cleaning
     * mode tag in the ModeTags field.
     *
     * The Mapping, Cleaning, and Idle mode tags are mutually exclusive and shall NOT be used together in a mode’s
     * ModeTags.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 7.2.5.1
     */
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

    /**
     * The table below lists the changes relative to the Mode Base cluster for the fields of the ModeOptionStruct type.
     * A blank field indicates no change.
     *
     * At least one entry in the SupportedModes attribute shall include the Idle mode tag in the ModeTags field.
     *
     * At least one entry in the SupportedModes attribute (different from the one above) shall include the Cleaning
     * mode tag in the ModeTags field.
     *
     * The Mapping, Cleaning, and Idle mode tags are mutually exclusive and shall NOT be used together in a mode’s
     * ModeTags.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 7.2.5.1
     */
    export interface ModeOption extends TypeFromSchema<typeof TlvModeOption> {}

    export enum ModeChangeStatus {
        /**
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.1
         */
        Stuck = 65,

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.1
         */
        DustBinMissing = 66,

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.1
         */
        DustBinFull = 67,

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.1
         */
        WaterTankEmpty = 68,

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.1
         */
        WaterTankMissing = 69,

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.1
         */
        WaterTankLidOpen = 70,

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.1
         */
        MopCleaningPadMissing = 71,

        /**
         * @see {@link MatterSpecification.v13.Cluster} § 7.2.7.1
         */
        BatteryLow = 72
    }

    /**
     * These elements and properties are present in all RvcRunMode clusters.
     */
    export const Base = MutableCluster.Component({
        id: 0x54,
        name: "RvcRunMode",
        revision: 2,

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
             * @see {@link MatterSpecification.v13.Cluster} § 7.2.6
             */
            currentMode: Attribute(0x1, TlvUInt8, { scene: true, persistent: true })
        },

        commands: {
            /**
             * This command is used to change device modes.
             *
             * On receipt of this command the device shall respond with a ChangeToModeResponse command.
             *
             * @see {@link MatterSpecification.v13.Cluster} § 1.10.7.1
             */
            changeToMode: Command(0x0, ModeBase.TlvChangeToModeRequest, 0x0, TlvNoResponse)
        },

        /**
         * This metadata controls which RvcRunModeCluster elements matter.js activates for specific feature
         * combinations.
         */
        extensions: MutableCluster.Extensions()
    });

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster(Base);

    /**
     * This cluster is derived from the Mode Base cluster to define specifics for Robotic Vacuum Cleaner devices. It
     * also defines a namespace for the running modes of these devices.
     *
     * RvcRunModeCluster supports optional features that you can enable with the RvcRunModeCluster.with() factory
     * method.
     *
     * @see {@link MatterSpecification.v13.Cluster} § 7.2
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    export const Complete = Cluster;
}

export type RvcRunModeCluster = RvcRunMode.Cluster;
export const RvcRunModeCluster = RvcRunMode.Cluster;
ClusterRegistry.register(RvcRunMode.Complete);
