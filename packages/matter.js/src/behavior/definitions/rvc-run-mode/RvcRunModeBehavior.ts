/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { RvcRunMode } from "../../../cluster/definitions/RvcRunModeCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * RvcRunModeBehavior is the base class for objects that support interaction with {@link RvcRunMode.Cluster}.
 */
export const RvcRunModeBehavior = ClusterBehavior.for(RvcRunMode.Cluster);

export interface RvcRunModeBehavior extends InstanceType<typeof RvcRunModeBehavior> {}
export namespace RvcRunModeBehavior { export interface State extends InstanceType<typeof RvcRunModeBehavior.State> {} }
