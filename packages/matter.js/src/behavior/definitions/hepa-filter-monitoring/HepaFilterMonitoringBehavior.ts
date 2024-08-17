/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { HepaFilterMonitoring } from "../../../cluster/definitions/HepaFilterMonitoringCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { ResourceMonitoringInterface } from "../resource-monitoring/ResourceMonitoringInterface.js";

/**
 * HepaFilterMonitoringBehavior is the base class for objects that support interaction with {@link
 * HepaFilterMonitoring.Cluster}.
 *
 * This class does not have optional features of HepaFilterMonitoring.Cluster enabled. You can enable additional
 * features using HepaFilterMonitoringBehavior.with.
 */
export const HepaFilterMonitoringBehavior = ClusterBehavior
    .withInterface<ResourceMonitoringInterface>()
    .for(HepaFilterMonitoring.Cluster);

export interface HepaFilterMonitoringBehavior extends InstanceType<typeof HepaFilterMonitoringBehavior> {}
export namespace HepaFilterMonitoringBehavior {
    export interface State extends InstanceType<typeof HepaFilterMonitoringBehavior.State> {}
}
