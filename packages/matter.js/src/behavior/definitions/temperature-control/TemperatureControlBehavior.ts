/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { TemperatureControl } from "@project-chip/matter.js-types";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { TemperatureControlInterface } from "./TemperatureControlInterface.js";
import { ClusterType } from "@project-chip/matter.js-types";

/**
 * TemperatureControlBehavior is the base class for objects that support interaction with {@link
 * TemperatureControl.Cluster}.
 *
 * TemperatureControl.Cluster requires you to enable one or more optional features. You can do so using {@link
 * TemperatureControlBehavior.with}.
 */
export const TemperatureControlBehavior = ClusterBehavior
    .withInterface<TemperatureControlInterface>()
    .for(ClusterType(TemperatureControl.Base));

type TemperatureControlBehaviorType = InstanceType<typeof TemperatureControlBehavior>;
export interface TemperatureControlBehavior extends TemperatureControlBehaviorType {}
type StateType = InstanceType<typeof TemperatureControlBehavior.State>;
export namespace TemperatureControlBehavior { export interface State extends StateType {} }
