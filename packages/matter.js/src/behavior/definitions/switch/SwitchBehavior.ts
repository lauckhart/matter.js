/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Switch } from "../../../cluster/definitions/SwitchCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { ClusterType } from "../../../cluster/ClusterType.js";

/**
 * SwitchBehavior is the base class for objects that support interaction with {@link Switch.Cluster}.
 *
 * Switch.Cluster requires you to enable one or more optional features. You can do so using {@link SwitchBehavior.with}.
 */
export const SwitchBehavior = ClusterBehavior.for(ClusterType(Switch.Base));

export interface SwitchBehavior extends InstanceType<typeof SwitchBehavior> {}
export namespace SwitchBehavior { export interface State extends InstanceType<typeof SwitchBehavior.State> {} }
