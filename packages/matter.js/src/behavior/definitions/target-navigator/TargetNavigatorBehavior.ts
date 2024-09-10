/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { TargetNavigator } from "@project-chip/matter.js-types";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { TargetNavigatorInterface } from "./TargetNavigatorInterface.js";

/**
 * TargetNavigatorBehavior is the base class for objects that support interaction with {@link TargetNavigator.Cluster}.
 */
export const TargetNavigatorBehavior = ClusterBehavior
    .withInterface<TargetNavigatorInterface>()
    .for(TargetNavigator.Cluster);

type TargetNavigatorBehaviorType = InstanceType<typeof TargetNavigatorBehavior>;
export interface TargetNavigatorBehavior extends TargetNavigatorBehaviorType {}
type StateType = InstanceType<typeof TargetNavigatorBehavior.State>;
export namespace TargetNavigatorBehavior { export interface State extends StateType {} }
