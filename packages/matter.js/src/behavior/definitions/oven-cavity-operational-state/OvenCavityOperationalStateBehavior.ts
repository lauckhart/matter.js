/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OvenCavityOperationalState } from "../../../cluster/definitions/OvenCavityOperationalStateCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * OvenCavityOperationalStateBehavior is the base class for objects that support interaction with {@link
 * OvenCavityOperationalState.Cluster}.
 */
export const OvenCavityOperationalStateBehavior = ClusterBehavior.for(OvenCavityOperationalState.Cluster);

export interface OvenCavityOperationalStateBehavior extends InstanceType<typeof OvenCavityOperationalStateBehavior> {}
export namespace OvenCavityOperationalStateBehavior {
    export interface State extends InstanceType<typeof OvenCavityOperationalStateBehavior.State> {}
}
