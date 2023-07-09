/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { GlobalAttributes, WritableAttribute, AccessLevel, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvLabelStruct } from "../../cluster/definitions/LabelCluster.js";

/**
 * User Label
 *
 * The User Label Cluster provides a feature to tag an endpoint with zero or more labels.
 *
 * This function creates a UserLabel cluster.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.9
 */
export function UserLabelCluster() {
    const cluster = Cluster({ ...UserLabelCluster.Metadata, ...UserLabelCluster.BaseComponent });
    return cluster as unknown as UserLabelCluster.Type;
};

export namespace UserLabelCluster {
    export type Type = 
        typeof Metadata
        & { attributes: GlobalAttributes<{}> }
        & typeof BaseComponent;

    /**
     * UserLabel cluster metadata.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.9
     */
    export const Metadata = ClusterMetadata({ id: 0x41, name: "UserLabel", revision: 1, features: {} });

    /**
     * A UserLabelCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * An implementation SHALL support at least 4 list entries per node for all User Label cluster instances on
             * the node.
             *
             * @see {@link MatterCoreSpecificationV1_1} § 9.9.4.1
             */
            labelList: WritableAttribute(
                0,
                TlvArray(TlvLabelStruct),
                { persistent: true, default: [], readAcl: AccessLevel.View, writeAcl: AccessLevel.Manage }
            )
        }
    });

    /**
     * This cluster supports all UserLabel features.
     */
    export const Complete = Cluster({ ...Metadata, attributes: { ...BaseComponent.attributes } });
};
