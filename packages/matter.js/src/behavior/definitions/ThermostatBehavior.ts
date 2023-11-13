/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Thermostat } from "../../cluster/definitions/ThermostatCluster.js";
import { ClusterBehavior } from "../cluster/ClusterBehavior.js";
import { ThermostatInterface } from "../cluster/definitions/ThermostatInterface.js";
import { ClusterType } from "../../cluster/ClusterType.js";

/**
 * ThermostatBehavior is the base class for objects that support interaction with {@link Thermostat.Cluster}.
 *
 * Thermostat.Cluster requires you to enable one or more optional features. You can do so using {@link
 * ThermostatBehavior.with}.
 */
export const ThermostatBehavior = ClusterBehavior
    .withInterface<ThermostatInterface>()
    .for(ClusterType(Thermostat.Base));

type ThermostatBehaviorType = InstanceType<typeof ThermostatBehavior>;
export interface ThermostatBehavior extends ThermostatBehaviorType {}
