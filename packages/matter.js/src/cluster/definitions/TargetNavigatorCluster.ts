/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterApplicationClusterSpecificationV1_1 } from "../../spec/Specifications.js";
import { GlobalAttributes, Attribute, OptionalAttribute, Command, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField, TlvOptionalField } from "../../tlv/TlvObject.js";
import { TlvUInt8, TlvEnum } from "../../tlv/TlvNumber.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TlvNullable } from "../../tlv/TlvNullable.js";

/**
 * Target Navigator
 *
 * This cluster provides an interface for UX navigation within a set of targets on a device or endpoint.
 *
 * Use this factory function to create a TargetNavigator cluster.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.11
 */
export function TargetNavigatorCluster() {
    const cluster = Cluster({ ...TargetNavigatorCluster.Metadata, ...TargetNavigatorCluster.BaseComponent });
    return cluster as unknown as TargetNavigatorCluster.Type;
}

/**
 * This indicates an object describing the navigable target.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.11.5.1
 */
export const TlvTargetInfoStruct = TlvObject({
    /**
     * An unique id within the TargetList.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.11.5.1.1
     */
    identifier: TlvField(0, TlvUInt8),

    /**
     * A name string for the TargetInfoStruct.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.11.5.1.2
     */
    name: TlvField(1, TlvString)
});

/**
 * Input to the TargetNavigator navigateTarget command
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.11.4.1
 */
export const TlvNavigateTargetRequest = TlvObject({
    /**
     * This shall indicate the Identifier for the target for UX navigation. The Target shall be an Identifier value
     * contained within one of the TargetInfoStruct objects in the TargetList attribute list.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.11.4.1.1
     */
    target: TlvField(0, TlvUInt8),

    /**
     * This shall indicate Optional app-specific data.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.11.4.1.2
     */
    data: TlvOptionalField(1, TlvString)
});

/**
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.11.5.2
 */
export const enum Status {
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
}

/**
 * This command shall be generated in response to NavigateTarget command.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.11.4.2
 */
export const TlvNavigateTargetResponse = TlvObject({
    /**
     * This shall indicate the of the command.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.11.4.2.1
     */
    status: TlvField(0, TlvEnum<Status>()),

    /**
     * This shall indicate Optional app-specific data.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.11.4.2.2
     */
    data: TlvOptionalField(1, TlvString)
});

export namespace TargetNavigatorCluster {
    export type Type =
        typeof Metadata
        & { attributes: GlobalAttributes<{}> }
        & typeof BaseComponent;

    /**
     * TargetNavigator cluster metadata.
     *
     * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.11
     */
    export const Metadata = ClusterMetadata({ id: 0x505, name: "TargetNavigator", revision: 1, features: {} });

    /**
     * A TargetNavigatorCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * The TargetList attribute shall represent a list of targets that can be navigated to within the
             * experience presented to the user by the Endpoint (Video Player or Content App). The list shall not
             * contain any entries with the same Identifier in the TargetInfoStruct object.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.11.3.1
             */
            targetList: Attribute(0, TlvArray(TlvTargetInfoStruct), { default: [] }),

            /**
             * The CurrentTarget attribute shall represent the Identifier for the target which is currently in
             * foreground on the corresponding Endpoint (Video Player or Content App), or null to indicate that no
             * target is in the foreground.
             *
             * When not null, the CurrentTarget shall be an Identifier value contained within one of the
             * TargetInfoStruct objects in the TargetList attribute list.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.11.3.2
             */
            currentTarget: OptionalAttribute(1, TlvNullable(TlvUInt8), { default: 0 })
        },

        commands: {
            /**
             * Upon receipt, this shall navigation the UX to the target identified.
             *
             * @see {@link MatterApplicationClusterSpecificationV1_1} § 6.11.4.1
             */
            navigateTarget: Command(0, TlvNavigateTargetRequest, 1, TlvNavigateTargetResponse)
        }
    });

    /**
     * This cluster supports all TargetNavigator features.
     */
    export const Complete = Cluster({
        ...Metadata,
        attributes: { ...BaseComponent.attributes },
        commands: { ...BaseComponent.commands }
    });
}
