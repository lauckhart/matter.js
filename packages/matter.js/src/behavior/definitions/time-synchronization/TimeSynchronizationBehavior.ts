/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { TimeSynchronization } from "../../../cluster/definitions/TimeSynchronizationCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { TimeSynchronizationInterface } from "./TimeSynchronizationInterface.js";

/**
 * TimeSynchronizationBehavior is the base class for objects that support interaction with {@link
 * TimeSynchronization.Cluster}.
 *
 * This class does not have optional features of TimeSynchronization.Cluster enabled. You can enable additional
 * features using TimeSynchronizationBehavior.with.
 */
export const TimeSynchronizationBehavior = ClusterBehavior
    .withInterface<TimeSynchronizationInterface>()
    .for(TimeSynchronization.Cluster);

export interface TimeSynchronizationBehavior extends InstanceType<typeof TimeSynchronizationBehavior> {}
export namespace TimeSynchronizationBehavior {
    export interface State extends InstanceType<typeof TimeSynchronizationBehavior.State> {}
}
