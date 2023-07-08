/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { WritableAttribute } from "../../cluster/Cluster.js";
import { TlvArray } from "../../tlv/TlvArray.js";
import { TlvObject, TlvField } from "../../tlv/TlvObject.js";
import { TlvBoolean } from "../../tlv/TlvBoolean.js";
import { TlvUInt64 } from "../../tlv/TlvNumber.js";
import { TypeFromPartialBitSchema, BitFlags } from "../../schema/BitmapSchema.js";

/**
 * < Previous | Contents | Next >
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.15.14.4.1
 */
export const TlvConfigurationStruct = TlvObject({
    proxyAllNodes: TlvField(1, TlvBoolean),
    sourceList: TlvField(2, TlvArray(TlvUInt64))
});

/**
 * Standard ProxyConfiguration cluster properties.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.15.14
 */
export const ProxyConfigurationMetadata = ClusterMetadata({ id: 0x42, name: "ProxyConfiguration", revision: 1 });

/**
 * A ProxyConfigurationCluster supports these elements for all feature combinations.
 */
export const BaseComponent = ClusterComponent({
    attributes: {
        /**
         * List of proxy configurations. There SHALL NOT be multiple entries in this list for the same fabric.
         *
         * @see {@link MatterCoreSpecificationV1_1} § 9.15.14.5.1
         */
        configurationList: WritableAttribute(0, TlvArray(TlvConfigurationStruct), { persistent: true, default: [] })
    }
});

export type ProxyConfigurationCluster<T extends TypeFromPartialBitSchema<typeof ProxyConfigurationMetadata.features>> = 
    typeof ProxyConfigurationMetadata
    & { supportedFeatures: T }
    & typeof BaseComponent;

export function ProxyConfigurationCluster<T extends (keyof typeof ProxyConfigurationMetadata.features)[]>(...features: [ ...T ]) {
    const cluster = {
        ...ProxyConfigurationMetadata,
        supportedFeatures: BitFlags(ProxyConfigurationMetadata.features, ...features),
        ...BaseComponent
    };
    
    return cluster as unknown as ProxyConfigurationCluster<BitFlags<typeof ProxyConfigurationMetadata.features, T>>;
};