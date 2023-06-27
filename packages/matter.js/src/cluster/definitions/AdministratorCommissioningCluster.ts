/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, Attribute, AccessLevel, Command, TlvNoResponse, OptionalCommand } from "../../cluster/Cluster.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { TlvEnum, TlvUInt8, TlvUInt16, TlvUInt32 } from "../../tlv/TlvNumber.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvByteString } from "../../tlv/TlvString.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

/**
 * This data type is derived from enum8.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.18.5.1
 */
export const enum CommissioningWindowStatusEnum {
    WindowNotOpen = 0,
    EnhancedWindowOpen = 1,
    BasicWindowOpen = 2
};

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.18.8
 */
export const OpenCommissioningWindowRequest = TlvObject({
    CommissioningTimeout: TlvField(0, TlvUInt16),
    PakePasscodeVerifier: TlvField(1, TlvByteString),
    Discriminator: TlvField(2, TlvUInt16),
    Iterations: TlvField(3, TlvUInt32),
    Salt: TlvField(4, TlvByteString)
});

/**
 * @see {@link MatterCoreSpecificationV1_1} § 11.18.8
 */
export const OpenBasicCommissioningWindowRequest = TlvObject({ CommissioningTimeout: TlvField(0, TlvUInt16) });

export namespace AdministratorCommissioningCluster {
    /**
     * Administrator Commissioning
     *
     * Commands to trigger a Node to allow a new Administrator to commission it.
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `AdministratorCommissioning.with()` and a
     * list of supported features.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 11.18
     */
    export const Complete = Cluster({
        id: 0x3c,
        name: "AdministratorCommissioning",
        revision: 1,
        features: { BC: BitFlag(0) },

        attributes: {
            /**
             * This attribute SHALL indicate whether a new Commissioning window
             * has been opened by an Administrator, using either the OCW
             * command or the OBCW command.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.18.7.1
             */
            windowStatus: Attribute(0, TlvEnum<CommissioningWindowStatusEnum>(), { readAcl: AccessLevel.View }),

            /**
             * When the WindowStatus attribute is not set to WindowNotOpen,
             * this attribute SHALL indicate the FabricIndex associated with
             * the Fabric scoping of the Administrator that opened the window.
             * This MAY be used to cross-reference in the Fabrics attribute of
             * the Node Operational Credentials cluster.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.18.7.2
             */
            adminFabricIndex: Attribute(1, TlvNullable(TlvUInt8), { readAcl: AccessLevel.View }),

            /**
             * When the WindowStatus attribute is not set to WindowNotOpen,
             * this attribute SHALL indicate the Vendor ID associated with the
             * Fabric scoping of the Administrator that opened the window. This
             * field SHALL match the VendorID field of the Fabrics attribute
             * list entry associated with the Administrator having opened the
             * window, at the time of window opening. If the fabric for the
             * Administrator that opened the window is removed from the node
             * while the commissioning window is still open, this attribute
             * SHALL NOT be updated.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.18.7.3
             */
            adminVendorId: Attribute(2, TlvNullable(TlvUInt16), { readAcl: AccessLevel.View })
        },

        commands: {
            /**
             * @see {@link MatterCoreSpecificationV1_1} § 11.18.8
             */
            openCommissioningWindow: Command(0, OpenCommissioningWindowRequest, 0, TlvNoResponse),

            /**
             * @see {@link MatterCoreSpecificationV1_1} § 11.18.8
             */
            openBasicCommissioningWindow: OptionalCommand(1, OpenBasicCommissioningWindowRequest, 1, TlvNoResponse),

            /**
             * This command is used by a current Administrator to instruct a
             * Node to revoke any active Open Commissioning Window or Open
             * Basic Commissioning Window command. This is an idempotent
             * command and the Node SHALL (for ECM) delete the temporary
             * PAKEPasscodeVerifier and associated data, and stop publishing
             * the DNS-SD record associated with the Open Commissioning Window
             * or Open Basic Commissioning Window command, see Section 4.3.1,
             * “Commissionable Node Discovery”.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 11.18.8.3
             */
            revokeCommissioning: Command(2, TlvNoArguments, 2, TlvNoResponse)
        }
    });
};