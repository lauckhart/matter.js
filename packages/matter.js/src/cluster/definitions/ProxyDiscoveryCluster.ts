/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BitFlags, TypeFromPartialBitSchema } from "../../schema/BitmapSchema.js";
import { MatterCoreSpecificationV1_1 } from "../../spec/Specifications.js";
import { ClusterMetadata, ClusterComponent } from "../../cluster/ClusterFactory.js";
import { Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";

/**
 * Proxy Discovery
 *
 * Cluster to control Proxy Discovery
 *
 * This function creates a ProxyDiscovery cluster.
 *
 * @see {@link MatterCoreSpecificationV1_1} § 9.15.13
 */
export function ProxyDiscoveryCluster() {
    const cluster = { ...ProxyDiscoveryCluster.Metadata, ...ProxyDiscoveryCluster.BaseComponent };
    return cluster as unknown as ProxyDiscoveryCluster.Type;
};

export namespace ProxyDiscoveryCluster {
    export type Type = 
        typeof Metadata
        & typeof BaseComponent;

    /**
     * ProxyDiscovery cluster metadata.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.15.13
     */
    export const Metadata = ClusterMetadata({ id: 0x43, name: "ProxyDiscovery", revision: 1 });

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

    /**
     * This cluster supports all ProxyDiscovery features.
     */
    export const Complete = { ...Metadata, commands: { ...BaseComponent.commands } };
};
