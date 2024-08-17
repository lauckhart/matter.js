/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PowerSourceConfiguration } from "../../../cluster/definitions/PowerSourceConfigurationCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * PowerSourceConfigurationBehavior is the base class for objects that support interaction with {@link
 * PowerSourceConfiguration.Cluster}.
 */
export const PowerSourceConfigurationBehavior = ClusterBehavior.for(PowerSourceConfiguration.Cluster);

export interface PowerSourceConfigurationBehavior extends InstanceType<typeof PowerSourceConfigurationBehavior> {}
export namespace PowerSourceConfigurationBehavior {
    export interface State extends InstanceType<typeof PowerSourceConfigurationBehavior.State> {}
}
