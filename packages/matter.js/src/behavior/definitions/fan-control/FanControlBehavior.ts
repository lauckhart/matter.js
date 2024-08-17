/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { FanControl } from "../../../cluster/definitions/FanControlCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { FanControlInterface } from "./FanControlInterface.js";

/**
 * FanControlBehavior is the base class for objects that support interaction with {@link FanControl.Cluster}.
 *
 * This class does not have optional features of FanControl.Cluster enabled. You can enable additional features using
 * FanControlBehavior.with.
 */
export const FanControlBehavior = ClusterBehavior
    .withInterface<FanControlInterface>()
    .for(FanControl.Cluster);

export interface FanControlBehavior extends InstanceType<typeof FanControlBehavior> {}
export namespace FanControlBehavior { export interface State extends InstanceType<typeof FanControlBehavior.State> {} }
