/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { BaseClusterComponent, ClusterComponent, ExtensibleCluster, validateFeatureSelection, ClusterForBaseCluster } from "../../cluster/ClusterFactory.js";
import { BitFlag, BitFlags, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import { Attribute, Command, TlvNoResponse, Cluster } from "../../cluster/Cluster.js";
import { TlvEnum, TlvUInt8, TlvUInt16, TlvUInt32 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvVendorId } from "../../datatype/VendorId.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvByteString } from "../../tlv/TlvString.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.18.5.1
 */
export const enum CommissioningWindowStatus {
    /**
     * Commissioning window not open
     */
    WindowNotOpen = 0,

    /**
     * An Enhanced Commissioning Method window is open
     */
    EnhancedWindowOpen = 1,

    /**
     * A Basic Commissioning Method window is open
     */
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

/**
 * These are optional features supported by AdministratorCommissioningCluster.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.18.4
 */
export enum AdministratorCommissioningFeature {
    /**
     * Basic
     *
     * Node supports Basic Commissioning Method.
     */
    Basic = "Basic"
}

/**
 * These elements and properties are present in all AdministratorCommissioning clusters.
 */
export const AdministratorCommissioningBase = BaseClusterComponent({
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
    },

    attributes: {
        /**
         * This attribute shall indicate whether a new Commissioning window has been opened by an Administrator, using
         * either the OCW command or the OBCW command.
         *
         * This attribute shall revert to WindowNotOpen upon expiry of a commissioning window.
         *
         * Note that an initial commissioning window is not opened using either the OCW command or the OBCW command,
         * and therefore this attribute shall be set to WindowNotOpen on initial commissioning.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.18.7.1
         */
        windowStatus: Attribute(0, TlvEnum<CommissioningWindowStatus>()),

        /**
         * When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the FabricIndex
         * associated with the Fabric scoping of the Administrator that opened the window. This may be used to
         * cross-reference in the Fabrics attribute of the Node Operational Credentials cluster.
         *
         * If, during an open commissioning window, the fabric for the Administrator that opened the window is removed,
         * then this attribute shall be set to null.
         *
         * When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.18.7.2
         */
        adminFabricIndex: Attribute(1, TlvNullable(TlvUInt8)),

        /**
         * When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the Vendor ID
         * associated with the Fabric scoping of the Administrator that opened the window. This field shall match the
         * VendorID field of the Fabrics attribute list entry associated with the Administrator having opened the
         * window, at the time of window opening. If the fabric for the Administrator that opened the window is removed
         * from the node while the commissioning window is still open, this attribute shall NOT be updated.
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
         * This command is used by a current Administrator to instruct a Node to revoke any active Open Commissioning
         * Window or Open Basic Commissioning Window command. This is an idempotent command and the Node shall (for
         * ECM) delete the temporary PAKEPasscodeVerifier and associated data, and stop publishing the DNS-SD record
         * associated with the Open Commissioning Window or Open Basic Commissioning Window command, see Section 4.3.1,
         * “Commissionable Node Discovery”.
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
 * Administrator Commissioning
 *
 * This cluster is used to trigger a Node to allow a new Administrator to commission it. It defines Attributes,
 * Commands and Responses needed for this purpose.
 *
 * For the management of Operational Credentials and Trusted Root Certificates, the Node Operational Credentials
 * cluster is used.
 *
 * AdministratorCommissioningCluster supports optional features that you can enable with the
 * AdministratorCommissioningCluster.with factory method.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.18
 */
export const AdministratorCommissioningCluster = ExtensibleCluster({
    ...AdministratorCommissioningBase,

    /**
     * Use this factory method to create an AdministratorCommissioning cluster with support for optional features.
     * Include each {@link AdministratorCommissioningFeature} you wish to support.
     *
     * @param features the optional features to support
     * @returns an AdministratorCommissioning cluster with specified features enabled
     * @throws {IllegalClusterError} if the feature combination is disallowed by the Matter specification
     */
    factory: <T extends `${AdministratorCommissioningFeature}`[]>(...features: [...T]) => {
        validateFeatureSelection(features, AdministratorCommissioningFeature);
        const cluster = Cluster({
            ...AdministratorCommissioningBase,
            supportedFeatures: BitFlags(AdministratorCommissioningBase.features, ...features)
        });
        return cluster as unknown as AdministratorCommissioningExtension<BitFlags<typeof AdministratorCommissioningBase.features, T>>;
    }
});

export type AdministratorCommissioningExtension<SF extends TypeFromPartialBitSchema<typeof AdministratorCommissioningBase.features>> =
    ClusterForBaseCluster<typeof AdministratorCommissioningBase, SF>
    & { supportedFeatures: SF }
    & (SF extends { basic: true } ? typeof BasicComponent : {});

/**
 * This cluster supports all AdministratorCommissioning features. It may support illegal feature combinations.
 *
 * If you use this cluster you must manually specify which features are active and ensure the set of active features is
 * legal per the Matter specification.
 */
export const AdministratorCommissioningComplete = Cluster({
    ...AdministratorCommissioningCluster,
    commands: { ...BasicComponent.commands }
});
