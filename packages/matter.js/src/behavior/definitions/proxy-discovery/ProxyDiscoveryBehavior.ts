/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ProxyDiscovery } from "../../../cluster/definitions/ProxyDiscoveryCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { ProxyDiscoveryInterface } from "./ProxyDiscoveryInterface.js";

/**
 * ProxyDiscoveryBehavior is the base class for objects that support interaction with {@link ProxyDiscovery.Cluster}.
 */
export const ProxyDiscoveryBehavior = ClusterBehavior
    .withInterface<ProxyDiscoveryInterface>()
    .for(ProxyDiscovery.Cluster);

export interface ProxyDiscoveryBehavior extends InstanceType<typeof ProxyDiscoveryBehavior> {}
export namespace ProxyDiscoveryBehavior {
    export interface State extends InstanceType<typeof ProxyDiscoveryBehavior.State> {}
}
