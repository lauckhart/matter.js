/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { TypeFromPartialBitSchema, BitFlags } from "../../schema/BitmapSchema.js";



/**
 * Standard ProxyDiscovery cluster properties.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.15.13
 */
export const ProxyDiscoveryMetadata = ClusterMetadata({ id: 0x43, name: "ProxyDiscovery", revision: 1 });

/**
 * A ProxyDiscoveryCluster supports these elements for all feature combinations.
 */
export const BaseComponent = ClusterComponent({
    commands: {
        /**
         * @see {@link MatterCoreSpecificationV1_1} § 9.15.13.5
         */
        proxyDiscoverRequest: Command(0, TlvNoArguments, 0, TlvNoResponse),

        /**
         * @see {@link MatterCoreSpecificationV1_1} § 9.15.13.5
         */
        proxyDiscoverResponse: Command(1, TlvNoArguments, 1, TlvNoResponse)
    }
});

export type ProxyDiscoveryCluster<T extends TypeFromPartialBitSchema<typeof ProxyDiscoveryMetadata.features>> = 
    typeof ProxyDiscoveryMetadata
    & { supportedFeatures: T }
    & typeof BaseComponent;

export function ProxyDiscoveryCluster<T extends (keyof typeof ProxyDiscoveryMetadata.features)[]>(...features: [ ...T ]) {
    const cluster = {
        ...ProxyDiscoveryMetadata,
        supportedFeatures: BitFlags(ProxyDiscoveryMetadata.features, ...features),
        ...BaseComponent
    };
    
    return cluster as unknown as ProxyDiscoveryCluster<BitFlags<typeof ProxyDiscoveryMetadata.features, T>>;
};