/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { Attribute, AccessLevel } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvUInt16 } from "../../tlv/TlvNumber.js";
import { TypeFromPartialBitSchema, BitFlags } from "../../schema/BitmapSchema.js";



/**
 * Standard PowerSourceConfiguration cluster properties.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 11.6
 */
export const PowerSourceConfigurationMetadata = ClusterMetadata({ id: 0x2e, name: "PowerSourceConfiguration", revision: 1 });

/**
 * A PowerSourceConfigurationCluster supports these elements for all feature combinations.
 */
export const BaseComponent = ClusterComponent({
    attributes: {
        /**
         * This list SHALL contain the set of all power sources capable of participating in the power system of this
         * Node. Each entry in the list SHALL be the endpoint number of an endpoint having a Power Source cluster,
         * which corresponds to a physical power source. The endpoint number SHALL be unique within the list.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 11.6.4.1
         */
        sources: Attribute(0, TlvArray(TlvUInt16), { persistent: true, default: [], readAcl: AccessLevel.View })
    }
});

export type PowerSourceConfigurationCluster<T extends TypeFromPartialBitSchema<typeof PowerSourceConfigurationMetadata.features>> = 
    typeof PowerSourceConfigurationMetadata
    & { supportedFeatures: T }
    & typeof BaseComponent;

export function PowerSourceConfigurationCluster<T extends (keyof typeof PowerSourceConfigurationMetadata.features)[]>(...features: [ ...T ]) {
    const cluster = {
        ...PowerSourceConfigurationMetadata,
        supportedFeatures: BitFlags(PowerSourceConfigurationMetadata.features, ...features),
        ...BaseComponent
    };
    
    return cluster as unknown as PowerSourceConfigurationCluster<BitFlags<typeof PowerSourceConfigurationMetadata.features, T>>;
};