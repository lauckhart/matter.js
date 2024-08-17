/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DishwasherAlarm } from "../../../cluster/definitions/DishwasherAlarmCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * DishwasherAlarmBehavior is the base class for objects that support interaction with {@link DishwasherAlarm.Cluster}.
 *
 * This class does not have optional features of DishwasherAlarm.Cluster enabled. You can enable additional features
 * using DishwasherAlarmBehavior.with.
 */
export const DishwasherAlarmBehavior = ClusterBehavior.for(DishwasherAlarm.Cluster);

export interface DishwasherAlarmBehavior extends InstanceType<typeof DishwasherAlarmBehavior> {}
export namespace DishwasherAlarmBehavior {
    export interface State extends InstanceType<typeof DishwasherAlarmBehavior.State> {}
}
