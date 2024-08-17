/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import {
    RefrigeratorAndTemperatureControlledCabinetMode
} from "../../../cluster/definitions/RefrigeratorAndTemperatureControlledCabinetModeCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * RefrigeratorAndTemperatureControlledCabinetModeBehavior is the base class for objects that support interaction with
 * {@link RefrigeratorAndTemperatureControlledCabinetMode.Cluster}.
 */
export const RefrigeratorAndTemperatureControlledCabinetModeBehavior = ClusterBehavior
    .for(RefrigeratorAndTemperatureControlledCabinetMode.Cluster);

export interface RefrigeratorAndTemperatureControlledCabinetModeBehavior extends InstanceType<typeof RefrigeratorAndTemperatureControlledCabinetModeBehavior> {}
export namespace RefrigeratorAndTemperatureControlledCabinetModeBehavior {
    export interface State extends InstanceType<typeof RefrigeratorAndTemperatureControlledCabinetModeBehavior.State> {}
}
