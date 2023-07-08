/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { WritableAttribute, AccessLevel } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvString } from "../../tlv/TlvString.js";
import { TypeFromPartialBitSchema, BitFlags } from "../../schema/BitmapSchema.js";

export const TlvLabelStruct = TlvObject({ label: TlvField(0, TlvString), value: TlvField(1, TlvString) });

/**
 * Standard UserLabel cluster properties.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.9
 */
export const UserLabelMetadata = ClusterMetadata({ id: 0x41, name: "UserLabel", revision: 1 });

/**
 * A UserLabelCluster supports these elements for all feature combinations.
 */
export const BaseComponent = ClusterComponent({
    attributes: {
        /**
         * An implementation SHALL support at least 4 list entries per node for all User Label cluster instances on the
         * node.
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

export type UserLabelCluster<T extends TypeFromPartialBitSchema<typeof UserLabelMetadata.features>> = 
    typeof UserLabelMetadata
    & { supportedFeatures: T }
    & typeof BaseComponent;

export function UserLabelCluster<T extends (keyof typeof UserLabelMetadata.features)[]>(...features: [ ...T ]) {
    const cluster = {
        ...UserLabelMetadata,
        supportedFeatures: BitFlags(UserLabelMetadata.features, ...features),
        ...BaseComponent
    };
    
    return cluster as unknown as UserLabelCluster<BitFlags<typeof UserLabelMetadata.features, T>>;
};