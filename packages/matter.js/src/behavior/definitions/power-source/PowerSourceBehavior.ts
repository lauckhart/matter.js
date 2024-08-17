/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PowerSource } from "../../../cluster/definitions/PowerSourceCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * PowerSourceBehavior is the base class for objects that support interaction with {@link PowerSource.Cluster}.
 *
 * This class does not have optional features of PowerSource.Cluster enabled. You can enable additional features using
 * PowerSourceBehavior.with.
 */
export const PowerSourceBehavior = ClusterBehavior.for(PowerSource.Cluster);

export interface PowerSourceBehavior extends InstanceType<typeof PowerSourceBehavior> {}
export namespace PowerSourceBehavior { export interface State extends InstanceType<typeof PowerSourceBehavior.State> {} }
