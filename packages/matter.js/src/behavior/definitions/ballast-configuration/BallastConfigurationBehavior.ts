/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BallastConfiguration } from "../../../cluster/definitions/BallastConfigurationCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * BallastConfigurationBehavior is the base class for objects that support interaction with {@link
 * BallastConfiguration.Cluster}.
 */
export const BallastConfigurationBehavior = ClusterBehavior.for(BallastConfiguration.Cluster);

export interface BallastConfigurationBehavior extends InstanceType<typeof BallastConfigurationBehavior> {}
export namespace BallastConfigurationBehavior {
    export interface State extends InstanceType<typeof BallastConfigurationBehavior.State> {}
}
