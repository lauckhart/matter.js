/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ValveConfigurationAndControl } from "../../../cluster/definitions/ValveConfigurationAndControlCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { ValveConfigurationAndControlInterface } from "./ValveConfigurationAndControlInterface.js";

/**
 * ValveConfigurationAndControlBehavior is the base class for objects that support interaction with {@link
 * ValveConfigurationAndControl.Cluster}.
 *
 * This class does not have optional features of ValveConfigurationAndControl.Cluster enabled. You can enable
 * additional features using ValveConfigurationAndControlBehavior.with.
 */
export const ValveConfigurationAndControlBehavior = ClusterBehavior
    .withInterface<ValveConfigurationAndControlInterface>()
    .for(ValveConfigurationAndControl.Cluster);

export interface ValveConfigurationAndControlBehavior extends InstanceType<typeof ValveConfigurationAndControlBehavior> {}
export namespace ValveConfigurationAndControlBehavior {
    export interface State extends InstanceType<typeof ValveConfigurationAndControlBehavior.State> {}
}
