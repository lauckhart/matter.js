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
 * Standard LowPower cluster properties.
 *
 * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.9
 */
export const LowPowerMetadata = ClusterMetadata({ id: 0x508, name: "LowPower", revision: 1 });

/**
 * A LowPowerCluster supports these elements for all feature combinations.
 */
export const BaseComponent = ClusterComponent({
    commands: {
        /**
         * This command shall put the device into low power mode.
         *
         * @see {@link MatterApplicationClusterSpecificationV1_1} § 1.9.3.1
         */
        sleep: Command(0, TlvNoArguments, 0, TlvNoResponse)
    }
});

export type LowPowerCluster<T extends TypeFromPartialBitSchema<typeof LowPowerMetadata.features>> = 
    typeof LowPowerMetadata
    & { supportedFeatures: T }
    & typeof BaseComponent;

export function LowPowerCluster<T extends (keyof typeof LowPowerMetadata.features)[]>(...features: [ ...T ]) {
    const cluster = {
        ...LowPowerMetadata,
        supportedFeatures: BitFlags(LowPowerMetadata.features, ...features),
        ...BaseComponent
    };
    
    return cluster as unknown as LowPowerCluster<BitFlags<typeof LowPowerMetadata.features, T>>;
};