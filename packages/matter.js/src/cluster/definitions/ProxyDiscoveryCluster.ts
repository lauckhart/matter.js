/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Command, TlvNoResponse } from "../../cluster/Cluster.js";
import { TlvNoArguments } from "../../tlv/TlvNoArguments.js";
import { BuildCluster } from "../../cluster/ClusterBuilder.js";



export namespace ProxyDiscoveryCluster {
    export const id = 0x43;
    export const name = "ProxyDiscovery";
    export const revision = 1;

    const Base = {
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
    };

    export const Complete = BuildCluster({ id, name, revision, elements: [ Base ] });
};