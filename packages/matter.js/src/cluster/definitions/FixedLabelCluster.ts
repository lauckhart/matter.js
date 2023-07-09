/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { GlobalAttributes, Attribute, AccessLevel, Cluster } from "../../cluster/Cluster.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvLabelStruct } from "../../cluster/definitions/LabelCluster.js";

/**
 * Fixed Label
 *
 * The Fixed Label Cluster provides a feature for the device to tag an endpoint with zero or more read only labels.
 *
 * This function creates a FixedLabel cluster.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.8
 */
export function FixedLabelCluster() {
    const cluster = Cluster({ ...FixedLabelCluster.Metadata, ...FixedLabelCluster.BaseComponent });
    return cluster as unknown as FixedLabelCluster.Type;
};

export namespace FixedLabelCluster {
    export type Type = 
        typeof Metadata
        & { attributes: GlobalAttributes<{}> }
        & typeof BaseComponent;

    /**
     * FixedLabel cluster metadata.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.8
     */
    export const Metadata = ClusterMetadata({ id: 0x40, name: "FixedLabel", revision: 1, features: {} });

    /**
     * A FixedLabelCluster supports these elements for all feature combinations.
     */
    export const BaseComponent = ClusterComponent({
        attributes: {
            /**
             * @see {@link MatterCoreSpecificationV1_1} § 9.8.4
             */
            labelList: Attribute(0, TlvArray(TlvLabelStruct), { persistent: true, default: [], readAcl: AccessLevel.View })
        }
    });

    /**
     * This cluster supports all FixedLabel features.
     */
    export const Complete = Cluster({ ...Metadata, attributes: { ...BaseComponent.attributes } });
};
