/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { NetworkCommissioning } from "../../../cluster/definitions/NetworkCommissioningCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { NetworkCommissioningInterface } from "./NetworkCommissioningInterface.js";
import { ClusterType } from "../../../cluster/ClusterType.js";

/**
 * NetworkCommissioningBehavior is the base class for objects that support interaction with {@link
 * NetworkCommissioning.Cluster}.
 *
 * NetworkCommissioning.Cluster requires you to enable one or more optional features. You can do so using {@link
 * NetworkCommissioningBehavior.with}.
 */
export const NetworkCommissioningBehavior = ClusterBehavior
    .withInterface<NetworkCommissioningInterface>()
    .for(ClusterType(NetworkCommissioning.Base));

export interface NetworkCommissioningBehavior extends InstanceType<typeof NetworkCommissioningBehavior> {}
export namespace NetworkCommissioningBehavior {
    export interface State extends InstanceType<typeof NetworkCommissioningBehavior.State> {}
}
