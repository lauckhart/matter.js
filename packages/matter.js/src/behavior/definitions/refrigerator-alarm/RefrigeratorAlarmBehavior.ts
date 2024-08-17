/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { RefrigeratorAlarm } from "../../../cluster/definitions/RefrigeratorAlarmCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { RefrigeratorAlarmInterface } from "./RefrigeratorAlarmInterface.js";

/**
 * RefrigeratorAlarmBehavior is the base class for objects that support interaction with {@link
 * RefrigeratorAlarm.Cluster}.
 *
 * This class does not have optional features of RefrigeratorAlarm.Cluster enabled. You can enable additional features
 * using RefrigeratorAlarmBehavior.with.
 */
export const RefrigeratorAlarmBehavior = ClusterBehavior
    .withInterface<RefrigeratorAlarmInterface>()
    .for(RefrigeratorAlarm.Cluster);

export interface RefrigeratorAlarmBehavior extends InstanceType<typeof RefrigeratorAlarmBehavior> {}
export namespace RefrigeratorAlarmBehavior {
    export interface State extends InstanceType<typeof RefrigeratorAlarmBehavior.State> {}
}
