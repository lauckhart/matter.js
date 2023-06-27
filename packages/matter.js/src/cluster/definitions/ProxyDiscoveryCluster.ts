/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Cluster, Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";



export namespace ProxyDiscoveryCluster {
    /**
     * Proxy Discovery
     *
     * Cluster to control Proxy Discovery
     *
     * This cluster definition includes all elements an implementation may
     * support.  For type safety, use `ProxyDiscovery.with()` and a list of
     * supported features.
     *
     * @see {@link MatterCoreSpecificationV1_1} § 9.15.13
     */
    export const Complete = Cluster({
        id: 0x43,
        name: "ProxyDiscovery",
        revision: 1,

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
};