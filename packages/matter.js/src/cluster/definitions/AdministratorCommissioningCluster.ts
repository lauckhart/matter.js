/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MutableCluster } from "../mutation/MutableCluster.js";
import { Command, TlvNoResponse, AccessLevel, Attribute } from "../Cluster.js";
import { TlvField, TlvObject } from "../../tlv/TlvObject.js";
import { TlvUInt16, TlvEnum, TlvUInt32 } from "../../tlv/TlvNumber.js";
import { TypeFromSchema } from "../../tlv/TlvSchema.js";
import { BitFlag } from "../../schema/BitmapSchema.js";
import { TlvFabricIndex } from "../../datatype/FabricIndex.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";
import { TlvVendorId } from "../../datatype/VendorId.js";
import { TlvByteString } from "../../tlv/TlvString.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { Identity } from "../../util/Type.js";
import { ClusterRegistry } from "../ClusterRegistry.js";

export namespace AdministratorCommissioning {
    /**
     * Input to the AdministratorCommissioning openBasicCommissioningWindow command
     *
     * @see {@link MatterSpecification.v13.Core} § 11.19.8.2
     */
    export const TlvOpenBasicCommissioningWindowRequest = TlvObject({
        /**
         * This field shall specify the time in seconds during which commissioning session establishment is allowed by
         * the Node. This is known as Open Basic Commissioning Window (OBCW). This timeout shall follow guidance as
         * specified in the initial Announcement Duration.
         *
         * When a Node receives the Open Basic Commissioning Window command, it shall begin advertising on DNS-SD as
         * described in Section 4.3.1, “Commissionable Node Discovery” and for a time period as described in Section
         * 11.19.8.2.1, “CommissioningTimeout Field”. When the command is received by a ICD, it shall enter into active
         * mode. The ICD shall remain in Active Mode as long as one of these conditions is met:
         *
         *   • A commissioning window is open.
         *
         *   • There is an armed fail-safe timer.
         *
         * @see {@link MatterSpecification.v13.Core} § 11.19.8.2.1
         */
        commissioningTimeout: TlvField(0, TlvUInt16)
    });

    /**
     * Input to the AdministratorCommissioning openBasicCommissioningWindow command
     *
     * @see {@link MatterSpecification.v13.Core} § 11.19.8.2
     */
    export interface OpenBasicCommissioningWindowRequest extends TypeFromSchema<typeof TlvOpenBasicCommissioningWindowRequest> {}

    /**
     * @see {@link MatterSpecification.v13.Core} § 11.19.5.1
     */
    export enum CommissioningWindowStatus {
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
     * @see {@link MatterSpecification.v13.Core} § 11.19.8.1
     */
    export const TlvOpenCommissioningWindowRequest = TlvObject({
        /**
         * This field shall specify the time in seconds during which commissioning session establishment is allowed by
         * the Node. This is known as Open Commissioning Window (OCW). This timeout value shall follow guidance as
         * specified in the initial Announcement Duration. The CommissioningTimeout applies only to cessation of any
         * announcements and to accepting of new commissioning sessions; it does not apply to abortion of connections,
         * i.e., a commissioning session SHOULD NOT abort prematurely upon expiration of this timeout.
         *
         * @see {@link MatterSpecification.v13.Core} § 11.19.8.1.1
         */
        commissioningTimeout: TlvField(0, TlvUInt16),

        /**
         * This field shall specify an ephemeral PAKE passcode verifier (see Section 3.10, “Password-Authenticated Key
         * Exchange (PAKE)”) computed by the existing Administrator to be used for this commissioning. The field is
         * concatenation of two values (w0 || L) shall be (CRYPTO_GROUP_SIZE_BYTES +
         * CRYPTO_PUBLIC_KEY_SIZE_BYTES)-octets long as detailed in Crypto_PAKEValues_Responder. It shall be derived
         * from an ephemeral passcode (See PAKE). It shall be deleted by the Node at the end of commissioning or
         * expiration of OCW, and shall be deleted by the existing Administrator after sending it to the Node(s).
         *
         * @see {@link MatterSpecification.v13.Core} § 11.19.8.1.2
         */
        pakePasscodeVerifier: TlvField(1, TlvByteString.bound({ length: 97 })),

        /**
         * This field shall be used by the Node as the long discriminator for DNS-SD advertisement (see Commissioning
         * Discriminator) for discovery by the new Administrator. The new Administrator can find and filter DNS-SD
         * records by long discriminator to locate and initiate commissioning with the appropriate Node.
         *
         * @see {@link MatterSpecification.v13.Core} § 11.19.8.1.3
         */
        discriminator: TlvField(2, TlvUInt16.bound({ max: 4095 })),

        /**
         * This field shall be used by the Node as the PAKE iteration count associated with the ephemeral PAKE passcode
         * verifier to be used for this commissioning, which shall be sent by the Node to the new Administrator’s
         * software as response to the PBKDFParamRequest during PASE negotiation.
         *
         * The permitted range of values shall match the range specified in Section 3.9, “Password-Based Key Derivation
         * Function (PBKDF)”, within the definition of the Crypto_PBKDFParameterSet.
         *
         * @see {@link MatterSpecification.v13.Core} § 11.19.8.1.4
         */
        iterations: TlvField(3, TlvUInt32.bound({ min: 1000, max: 100000 })),

        /**
         * This field shall be used by the Node as the PAKE Salt associated with the ephemeral PAKE passcode verifier
         * to be used for this commissioning, which shall be sent by the Node to the new Administrator’s software as
         * response to the PBKDFParamRequest during PASE negotiation. The constraints on the value shall match those
         * specified in Section 3.9, “Password-Based Key Derivation Function (PBKDF)”, within the definition of the
         * Crypto_PBKDFParameterSet.
         *
         * When a Node receives the Open Commissioning Window command, it shall begin advertising on DNS-SD as
         * described in Section 4.3.1, “Commissionable Node Discovery” and for a time period as described in Section
         * 11.19.8.1.1, “CommissioningTimeout Field”. When the command is received by a ICD, it shall enter into active
         * mode. The ICD shall remain in Active Mode as long as one of these conditions is met:
         *
         *   • A commissioning window is open.
         *
         *   • There is an armed fail-safe timer.
         *
         * @see {@link MatterSpecification.v13.Core} § 11.19.8.1.5
         */
        salt: TlvField(4, TlvByteString.bound({ minLength: 16, maxLength: 32 }))
    });

    /**
     * Input to the AdministratorCommissioning openCommissioningWindow command
     *
     * @see {@link MatterSpecification.v13.Core} § 11.19.8.1
     */
    export interface OpenCommissioningWindowRequest extends TypeFromSchema<typeof TlvOpenCommissioningWindowRequest> {}

    /**
     * @see {@link MatterSpecification.v13.Core} § 11.19.6.1
     */
    export enum StatusCode {
        /**
         * Could not be completed because another commissioning is in progress
         */
        Busy = 2,

        /**
         * Provided PAKE parameters were incorrectly formatted or otherwise invalid
         */
        PakeParameterError = 3,

        /**
         * No commissioning window was currently open
         */
        WindowNotOpen = 4
    }

    /**
     * A AdministratorCommissioningCluster supports these elements if it supports feature Basic.
     */
    export const BasicComponent = MutableCluster.Component({
        commands: {
            /**
             * This command may be used by a current Administrator to instruct a Node to go into commissioning mode, if
             * the node supports the Basic Commissioning Method. The Basic Commissioning Method specifies a window of
             * time during which an already commissioned Node accepts PASE sessions. The current Administrator shall
             * specify a timeout value for the duration of OBCW.
             *
             * If a commissioning window is already currently open, this command shall fail with a cluster specific
             * status code of Busy.
             *
             * If the fail-safe timer is currently armed, this command shall fail with a cluster specific status code
             * of Busy, since it is likely that concurrent commissioning operations from multiple separate
             * Commissioners are about to take place.
             *
             * In case of any other parameter error, this command shall fail with a status code of COMMAND_INVALID.
             *
             * The commissioning into a new Fabric completes when the Node successfully receives a
             * CommissioningComplete command, see Section 5.5, “Commissioning Flows”. The new Administrator shall
             * discover the Node on the IP network using DNS-based Service Discovery (DNS-SD) for commissioning.
             *
             * @see {@link MatterSpecification.v13.Core} § 11.19.8.2
             */
            openBasicCommissioningWindow: Command(
                0x1,
                TlvOpenBasicCommissioningWindowRequest,
                0x1,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Administer, timed: true }
            )
        }
    });

    /**
     * These are optional features supported by AdministratorCommissioningCluster.
     *
     * @see {@link MatterSpecification.v13.Core} § 11.19.4
     */
    export enum Feature {
        /**
         * Basic (BC)
         *
         * Node supports Basic Commissioning Method.
         */
        Basic = "Basic"
    }

    /**
     * These elements and properties are present in all AdministratorCommissioning clusters.
     */
    export const Base = MutableCluster.Component({
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
             * Indicates whether a new Commissioning window has been opened by an Administrator, using either the OCW
             * command or the OBCW command.
             *
             * This attribute shall revert to WindowNotOpen upon expiry of a commissioning window.
             *
             * Note that an initial commissioning window is not opened using either the OCW command or the OBCW
             * command, and therefore this attribute shall be set to WindowNotOpen on initial commissioning.
             *
             * @see {@link MatterSpecification.v13.Core} § 11.19.7.1
             */
            windowStatus: Attribute(0x0, TlvEnum<CommissioningWindowStatus>()),

            /**
             * When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the
             * FabricIndex associated with the Fabric scoping of the Administrator that opened the window. This may be
             * used to cross-reference in the Fabrics attribute of the Node Operational Credentials cluster.
             *
             * If, during an open commissioning window, the fabric for the Administrator that opened the window is
             * removed, then this attribute shall be set to null.
             *
             * When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null.
             *
             * @see {@link MatterSpecification.v13.Core} § 11.19.7.2
             */
            adminFabricIndex: Attribute(0x1, TlvNullable(TlvFabricIndex)),

            /**
             * When the WindowStatus attribute is not set to WindowNotOpen, this attribute shall indicate the Vendor ID
             * associated with the Fabric scoping of the Administrator that opened the window. This field shall match
             * the VendorID field of the Fabrics attribute list entry associated with the Administrator having opened
             * the window, at the time of window opening. If the fabric for the Administrator that opened the window is
             * removed from the node while the commissioning window is still open, this attribute shall NOT be updated.
             *
             * When the WindowStatus attribute is set to WindowNotOpen, this attribute shall be set to null.
             *
             * @see {@link MatterSpecification.v13.Core} § 11.19.7.3
             */
            adminVendorId: Attribute(0x2, TlvNullable(TlvVendorId))
        },

        commands: {
            /**
             * This command is used by a current Administrator to instruct a Node to go into commissioning mode. The
             * Enhanced Commissioning Method specifies a window of time during which an already commissioned Node
             * accepts PASE sessions. The current Administrator MUST specify a timeout value for the duration of OCW.
             *
             * When OCW expires or commissioning completes, the Node shall remove the Passcode by deleting the PAKE
             * passcode verifier as well as stop publishing the DNS-SD record corresponding to this command as
             * described in Section 4.3.1, “Commissionable Node Discovery”. The commissioning into a new Fabric
             * completes when the Node successfully receives a CommissioningComplete command, see Section 5.5,
             * “Commissioning Flows”.
             *
             * The parameters for OpenCommissioningWindow command are as follows:
             *
             * A current Administrator may invoke this command to put a node in commissioning mode for the next
             * Administrator. On completion, the command shall return a cluster specific status code from the Section
             * 11.19.6, “Status Codes” below reflecting success or reasons for failure of the operation. The new
             * Administrator shall discover the Node on the IP network using DNS-based Service Discovery (DNS-SD) for
             * commissioning.
             *
             * If any format or validity errors related to the PAKEPasscodeVerifier, Iterations or Salt arguments
             * arise, this command shall fail with a cluster specific status code of PAKEParameterError.
             *
             * If a commissioning window is already currently open, this command shall fail with a cluster specific
             * status code of Busy.
             *
             * If the fail-safe timer is currently armed, this command shall fail with a cluster specific status code
             * of Busy, since it is likely that concurrent commissioning operations from multiple separate
             * Commissioners are about to take place.
             *
             * In case of any other parameter error, this command shall fail with a status code of COMMAND_INVALID.
             *
             * @see {@link MatterSpecification.v13.Core} § 11.19.8.1
             */
            openCommissioningWindow: Command(
                0x0,
                TlvOpenCommissioningWindowRequest,
                0x0,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Administer, timed: true }
            ),

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
             * If the commissioning window was open and the fail-safe was armed when this command is received, the
             * device shall immediately expire the fail-safe and perform the cleanup steps outlined in Section
             * 11.10.6.2.2, “Behavior on expiry of Fail-Safe timer”.
             *
             * @see {@link MatterSpecification.v13.Core} § 11.19.8.3
             */
            revokeCommissioning: Command(
                0x2,
                TlvNoArguments,
                0x2,
                TlvNoResponse,
                { invokeAcl: AccessLevel.Administer, timed: true }
            )
        },

        /**
         * This metadata controls which AdministratorCommissioningCluster elements matter.js activates for specific
         * feature combinations.
         */
        extensions: MutableCluster.Extensions({ flags: { basic: true }, component: BasicComponent })
    });

    /**
     * @see {@link Cluster}
     */
    export const ClusterInstance = MutableCluster(Base);

    /**
     * This cluster is used to trigger a Node to allow a new Administrator to commission it. It defines Attributes,
     * Commands and Responses needed for this purpose.
     *
     * There are two methods of commissioning, Basic Commissioning which may be supported and is described in Section
     * 5.6.2, “Basic Commissioning Method (BCM)” and Enhanced Commissioning which shall be supported and is described
     * in Section 5.6.3, “Enhanced Commissioning Method (ECM)”.
     *
     * For the management of Operational Credentials and Trusted Root Certificates, the Node Operational Credentials
     * cluster is used.
     *
     * AdministratorCommissioningCluster supports optional features that you can enable with the
     * AdministratorCommissioningCluster.with() factory method.
     *
     * @see {@link MatterSpecification.v13.Core} § 11.19
     */
    export interface Cluster extends Identity<typeof ClusterInstance> {}

    export const Cluster: Cluster = ClusterInstance;
    const BC = { basic: true };

    /**
     * @see {@link Complete}
     */
    export const CompleteInstance = MutableCluster({
        id: Cluster.id,
        name: Cluster.name,
        revision: Cluster.revision,
        features: Cluster.features,
        attributes: Cluster.attributes,

        commands: {
            ...Cluster.commands,
            openBasicCommissioningWindow: MutableCluster.AsConditional(
                BasicComponent.commands.openBasicCommissioningWindow,
                { mandatoryIf: [BC] }
            )
        }
    });

    /**
     * This cluster supports all AdministratorCommissioning features. It may support illegal feature combinations.
     *
     * If you use this cluster you must manually specify which features are active and ensure the set of active
     * features is legal per the Matter specification.
     */
    export interface Complete extends Identity<typeof CompleteInstance> {}

    export const Complete: Complete = CompleteInstance;
}

export type AdministratorCommissioningCluster = AdministratorCommissioning.Cluster;
export const AdministratorCommissioningCluster = AdministratorCommissioning.Cluster;
ClusterRegistry.register(AdministratorCommissioning.Complete);
