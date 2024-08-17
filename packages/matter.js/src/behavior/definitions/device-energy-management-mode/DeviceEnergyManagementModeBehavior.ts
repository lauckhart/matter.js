/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DeviceEnergyManagementMode } from "../../../cluster/definitions/DeviceEnergyManagementModeCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * DeviceEnergyManagementModeBehavior is the base class for objects that support interaction with {@link
 * DeviceEnergyManagementMode.Cluster}.
 *
 * This class does not have optional features of DeviceEnergyManagementMode.Cluster enabled. You can enable additional
 * features using DeviceEnergyManagementModeBehavior.with.
 */
export const DeviceEnergyManagementModeBehavior = ClusterBehavior.for(DeviceEnergyManagementMode.Cluster);

export interface DeviceEnergyManagementModeBehavior extends InstanceType<typeof DeviceEnergyManagementModeBehavior> {}
export namespace DeviceEnergyManagementModeBehavior {
    export interface State extends InstanceType<typeof DeviceEnergyManagementModeBehavior.State> {}
}
