/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import {
    ThermostatUserInterfaceConfiguration
} from "../../../cluster/definitions/ThermostatUserInterfaceConfigurationCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * ThermostatUserInterfaceConfigurationBehavior is the base class for objects that support interaction with {@link
 * ThermostatUserInterfaceConfiguration.Cluster}.
 */
export const ThermostatUserInterfaceConfigurationBehavior = ClusterBehavior
    .for(ThermostatUserInterfaceConfiguration.Cluster);

export interface ThermostatUserInterfaceConfigurationBehavior extends InstanceType<typeof ThermostatUserInterfaceConfigurationBehavior> {}
export namespace ThermostatUserInterfaceConfigurationBehavior {
    export interface State extends InstanceType<typeof ThermostatUserInterfaceConfigurationBehavior.State> {}
}
