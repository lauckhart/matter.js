/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PowerTopology } from "../../../cluster/definitions/PowerTopologyCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { ClusterType } from "../../../cluster/ClusterType.js";

/**
 * PowerTopologyBehavior is the base class for objects that support interaction with {@link PowerTopology.Cluster}.
 *
 * PowerTopology.Cluster requires you to enable one or more optional features. You can do so using {@link
 * PowerTopologyBehavior.with}.
 */
export const PowerTopologyBehavior = ClusterBehavior.for(ClusterType(PowerTopology.Base));

export interface PowerTopologyBehavior extends InstanceType<typeof PowerTopologyBehavior> {}
export namespace PowerTopologyBehavior {
    export interface State extends InstanceType<typeof PowerTopologyBehavior.State> {}
}
