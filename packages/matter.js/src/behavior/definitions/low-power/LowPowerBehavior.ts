/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { LowPower } from "../../../cluster/definitions/LowPowerCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { LowPowerInterface } from "./LowPowerInterface.js";

/**
 * LowPowerBehavior is the base class for objects that support interaction with {@link LowPower.Cluster}.
 */
export const LowPowerBehavior = ClusterBehavior
    .withInterface<LowPowerInterface>()
    .for(LowPower.Cluster);

export interface LowPowerBehavior extends InstanceType<typeof LowPowerBehavior> {}
export namespace LowPowerBehavior { export interface State extends InstanceType<typeof LowPowerBehavior.State> {} }
