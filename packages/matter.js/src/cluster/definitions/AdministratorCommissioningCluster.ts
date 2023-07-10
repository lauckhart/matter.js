/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { BitFlags, TypeFromPartialBitSchema, BitFlag } from "../../schema/BitmapSchema.js";
import { extendCluster, ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { GlobalAttributes, Attribute, Command, TlvNoResponse, Cluster } from "../../cluster/Cluster.js";
import { TlvEnum, TlvUInt8, TlvUInt16, TlvUInt32 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvVendorId } from "../../datatype/VendorId.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvByteString } from "../../tlv/TlvString.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

/**
 * Administrator Commissioning
 *
 * Commands to trigger a Node to allow a new Administrator to commission it.
 *
 * Use this factory function to create an AdministratorCommissioning cluster supporting a specific set of features.
 * Include each {@link AdministratorCommissioningCluster.Feature} you wish to support.
 *
 * @param features a list of {@link AdministratorCommissioningCluster.Feature} to support
 * @returns an AdministratorCommissioning cluster with specified features enabled
 * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.18
 */
export function AdministratorCommissioningCluster<T extends AdministratorCommissioningCluster.Feature[]>(...features: [...T]) {
    const cluster = Cluster({
        ...AdministratorCommissioningCluster.Metadata,
        supportedFeatures: BitFlags(AdministratorCommissioningCluster.Metadata.features, ...features),
        ...AdministratorCommissioningCluster.BaseComponent
    });
    extendCluster(cluster, AdministratorCommissioningCluster.BasicComponent, { basic: true });
    return cluster as unknown as AdministratorCommissioningCluster.Type<BitFlags<typeof AdministratorCommissioningCluster.Metadata.features, T>>;
}

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.18.5.1
 */
export const enum CommissioningWindowStatus {
    WindowNotOpen = 0,
    EnhancedWindowOpen = 1,
    BasicWindowOpen = 2
}

/**
 * Input to the AdministratorCommissioning openCommissioningWindow command
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.18.8
 */
export const TlvOpenCommissioningWindowRequest = TlvObject({
    commissioningTimeout: TlvField(0, TlvUInt16),
    pakePasscodeVerifier: TlvField(1, TlvByteString),
    discriminator: TlvField(2, TlvUInt16),
    iterations: TlvField(3, TlvUInt32),
    salt: TlvField(4, TlvByteString)
});

/**
 * Input to the AdministratorCommissioning openBasicCommissioningWindow command
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.18.8
 */
export const TlvOpenBasicCommissioningWindowRequest = TlvObject({ commissioningTimeout: TlvField(0, TlvUInt16) });

export namespace AdministratorCommissioningCluster {
    /**
     * These are optional features supported by AdministratorCommissioningCluster.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.18.4
     */
    export enum Feature {
        /**
         * Basic
         *
         * Node supports Basic Commissioning Method.
         */
        Basic = "Basic"
    }

    export type Type<T extends TypeFromPartialBitSchema<typeof Metadata.features>> =
        typeof Metadata
        & { attributes: GlobalAttributes<typeof Metadata.features> }
        & { supportedFeatures: T }
        & typeof BaseComponent
        & (T extends { basic: true } ? typeof BasicComponent : {});

    /**
     * AdministratorCommissioning cluster metadata.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.18
     */
    export const Metadata = ClusterMetadata({
        id: 0x3c,
        name: "AdministratorCommissioning",
        revision: 1,

        features: {
            /**
             * Basic
             *
             * Node supports Basic Commissioning Method.
             */
            basic: BitFlag(0)
        }
    });

    /**
     * A AdministratorCommissioningCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * This attribute shall indicate whether a new Commissioning window has been opened by an Administrator,
             * using either the OCW command or the OBCW command.
             *
             * This attribute shall revert to WindowNotOpen upon expiry of a commissioning window.
             *
             * Note that an initial commissioning window is not opened using either the OCW command or the OBCW
             * command, and therefore this attribute shall be set to WindowNotOpen on initial commissioning.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.18.7.1
             */
            windowStatus: Attribute(0, TlvEnum<CommissioningWindowStatus>()),

            /**
             * When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the
             * FabricIndex associated with the Fabric scoping of the Administrator that opened the window. This MAY be
             * used to cross-reference in the Fabrics attribute of the Node Operational Credentials cluster.
             *
             * If, during an open commissioning window, the fabric for the Administrator that opened the window is
             * removed, then this attribute shall be set to null.
             *
             * When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.18.7.2
             */
            adminFabricIndex: Attribute(1, TlvNullable(TlvUInt8)),

            /**
             * When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the Vendor ID
             * associated with the Fabric scoping of the Administrator that opened the window. This field shall match
             * the VendorID field of the Fabrics attribute list entry associated with the Administrator having opened
             * the window, at the time of window opening. If the fabric for the Administrator that opened the window is
             * removed from the node while the commissioning window is still open, this attribute shall NOT be updated.
             *
             * When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.18.7.3
             */
            adminVendorId: Attribute(2, TlvNullable(TlvVendorId))
        },

        commands: {
            /**
             * @see {@link MatterCoreSpecificationV1_1} § 11.18.8
             */
            openCommissioningWindow: Command(0, TlvOpenCommissioningWindowRequest, 0, TlvNoResponse),

            /**
             * This command is used by a current Administrator to instruct a Node to revoke any active Open
             * Commissioning Window or Open Basic Commissioning Window command. This is an idempotent command and the
             * Node shall (for ECM) delete the temporary PAKEPasscodeVerifier and associated data, and stop publishing
             * the DNS-SD record associated with the Open Commissioning Window or Open Basic Commissioning Window
             * command, see Section 4.3.1, “Commissionable Node Discovery”.
             *
             * If no commissioning window was open at time of receipt, this command shall fail with a cluster specific
             * status code of WindowNotOpen.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.18.8.3
             */
            revokeCommissioning: Command(2, TlvNoArguments, 2, TlvNoResponse)
        }
    });

    /**
     * A AdministratorCommissioningCluster supports these elements if it supports feature Basic.
     */
    export const BasicComponent = ClusterComponent({
        commands: {
            /**
             * @see {@link MatterCoreSpecificationV1_1} § 11.18.8
             */
            openBasicCommissioningWindow: Command(1, TlvOpenBasicCommissioningWindowRequest, 1, TlvNoResponse)
        }
    });

    /**
     * This cluster supports all AdministratorCommissioning features. It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export const Complete = Cluster({
        ...Metadata,
        attributes: { ...BaseComponent.attributes },
        commands: { ...BaseComponent.commands, ...BasicComponent.commands }
    });
}
