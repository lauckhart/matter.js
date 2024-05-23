/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { LaundryWasherMode } from "../../../cluster/definitions/LaundryWasherModeCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * LaundryWasherModeBehavior is the base class for objects that support interaction with {@link
 * LaundryWasherMode.Cluster}.
 */
export const LaundryWasherModeBehavior = ClusterBehavior.for(LaundryWasherMode.Cluster);

type LaundryWasherModeBehaviorType = InstanceType<typeof LaundryWasherModeBehavior>;
export interface LaundryWasherModeBehavior extends LaundryWasherModeBehaviorType {}
type StateType = InstanceType<typeof LaundryWasherModeBehavior.State>;
export namespace LaundryWasherModeBehavior { export interface State extends StateType {} }
