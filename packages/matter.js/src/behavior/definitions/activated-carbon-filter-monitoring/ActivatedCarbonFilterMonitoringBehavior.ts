/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ActivatedCarbonFilterMonitoring } from "../../../cluster/definitions/ActivatedCarbonFilterMonitoringCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { ResourceMonitoringInterface } from "../resource-monitoring/ResourceMonitoringInterface.js";

/**
 * ActivatedCarbonFilterMonitoringBehavior is the base class for objects that support interaction with {@link
 * ActivatedCarbonFilterMonitoring.Cluster}.
 *
 * This class does not have optional features of ActivatedCarbonFilterMonitoring.Cluster enabled. You can enable
 * additional features using ActivatedCarbonFilterMonitoringBehavior.with.
 */
export const ActivatedCarbonFilterMonitoringBehavior = ClusterBehavior
    .withInterface<ResourceMonitoringInterface>()
    .for(ActivatedCarbonFilterMonitoring.Cluster);

export interface ActivatedCarbonFilterMonitoringBehavior extends InstanceType<typeof ActivatedCarbonFilterMonitoringBehavior> {}
export namespace ActivatedCarbonFilterMonitoringBehavior {
    export interface State extends InstanceType<typeof ActivatedCarbonFilterMonitoringBehavior.State> {}
}
