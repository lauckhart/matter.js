/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, Attribute, AccessLevel, OptionalAttribute, Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvUInt8, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";

/**
 * This indicates an object describing the navigable target.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.11.5.1
 */
export const TargetInfoStruct = TlvObject({
    /**
     * An unique id within the TargetList.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.11.5.1.1
     */
    Identifier: TlvField(0, TlvUInt8),

    /**
     * A name string for the TargetInfoStruct.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.11.5.1.2
     */
    Name: TlvField(1, TlvString)
});

/**
 * Status Data Type is derived from enum8.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.11.5.2
 */
export const enum StatusEnum {
    /**
     * Command succeeded
     */
    Success = 0,

    /**
     * Requested target was not found in the TargetList
     */
    TargetNotFound = 1,

    /**
     * Target request is not allowed in current state.
     */
    NotAllowed = 2
};

/**
 * This command SHALL be generated in response to NavigateTarget command.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.11.4.2
 */
export const NavigateTargetResponseRequest = TlvObject({
    /**
     * This SHALL indicate the status of the command.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.11.4.2.1
     */
    Status: TlvField(0, TlvEnum<StatusEnum>()),

    /**
     * This SHALL indicate Optional app-specific data.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.11.4.2.2
     */
    Data: TlvOptionalField(1, TlvString)
});

/**
 * Upon receipt, this SHALL navigation the UX to the target identified.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.11.4.1
 */
export const NavigateTargetRequest = TlvObject({
    /**
     * This SHALL indicate the Identifier for the target for UX navigation. The
     * Target SHALL be an Identifier value contained within one of the
     * TargetInfoStruct objects in the TargetList attribute list.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.11.4.1.1
     */
    Target: TlvField(0, TlvUInt8),

    /**
     * This SHALL indicate Optional app-specific data.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.11.4.1.2
     */
    Data: TlvOptionalField(1, TlvString)
});

export namespace TargetNavigatorCluster {
    /**
     * Target Navigator
     *
     * This cluster provides an interface for UX navigation within a set of
     * targets on a device or endpoint.
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `TargetNavigator.with()` and a list of
     * supported features.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.11
     */
    export const Complete = Cluster({
        id: 0x505,
        name: "TargetNavigator",
        revision: 1,

        attributes: {
            /**
             * The TargetList attribute SHALL represent a list of targets that
             * can be navigated to within the experience presented to the user
             * by the Endpoint (Video Player or Content App). The list SHALL
             * not contain any entries with the same Identifier in the
             * TargetInfoStruct object.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.11.3.1
             */
            targetList: Attribute(0, TlvArray(TargetInfoStruct), { readAcl: AccessLevel.View }),

            /**
             * The CurrentTarget attribute SHALL represent the Identifier for
             * the target which is currently in foreground on the corresponding
             * Endpoint (Video Player or Content App), or null to indicate that
             * no target is in the foreground.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.11.3.2
             */
            currentTarget: OptionalAttribute(1, TlvNullable(TlvUInt8), { readAcl: AccessLevel.View })
        },

        commands: {
            /**
             * Upon receipt, this SHALL navigation the UX to the target
             * identified.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.11.4.1
             */
            navigateTarget: Command(0, NavigateTargetRequest, 1, NavigateTargetResponseRequest),

            /**
             * This command SHALL be generated in response to NavigateTarget
             * command.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.11.4.2
             */
            navigateTargetResponse: Command(1, NavigateTargetResponseRequest, 1, TlvNoResponse)
        }
    });
};