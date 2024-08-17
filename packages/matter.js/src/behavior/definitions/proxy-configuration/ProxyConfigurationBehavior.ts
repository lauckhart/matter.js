/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ProxyConfiguration } from "../../../cluster/definitions/ProxyConfigurationCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * ProxyConfigurationBehavior is the base class for objects that support interaction with {@link
 * ProxyConfiguration.Cluster}.
 */
export const ProxyConfigurationBehavior = ClusterBehavior.for(ProxyConfiguration.Cluster);

export interface ProxyConfigurationBehavior extends InstanceType<typeof ProxyConfigurationBehavior> {}
export namespace ProxyConfigurationBehavior {
    export interface State extends InstanceType<typeof ProxyConfigurationBehavior.State> {}
}
