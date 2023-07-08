/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { Attribute, AccessLevel, Cluster } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvString } from "../../tlv/TlvString.js";

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
    const cluster = { ...FixedLabelCluster.Metadata, ...FixedLabelCluster.BaseComponent };
    return cluster as unknown as FixedLabelCluster.Type;
};

export const TlvLabelStruct = TlvObject({ label: TlvField(0, TlvString), value: TlvField(1, TlvString) });

export namespace FixedLabelCluster {
    export type Type = 
        typeof Metadata
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
