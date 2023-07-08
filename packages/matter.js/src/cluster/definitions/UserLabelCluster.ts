/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlags, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { WritableAttribute, AccessLevel } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvString } from "../../tlv/TlvString.js";

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
    const cluster = { ...UserLabelCluster.Metadata, ...UserLabelCluster.BaseComponent };
    return cluster as unknown as UserLabelCluster.Type;
};

export const TlvLabelStruct = TlvObject({ label: TlvField(0, TlvString), value: TlvField(1, TlvString) });

export namespace UserLabelCluster {
    export type Type = 
        typeof Metadata
        & typeof BaseComponent;

    /**
     * UserLabel cluster metadata.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.9
     */
    export const Metadata = ClusterMetadata({ id: 0x41, name: "UserLabel", revision: 1 });

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
    export const Complete = { ...Metadata, attributes: { ...BaseComponent.attributes } };
};
