/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { BooleanStateConfiguration } from "../../../cluster/definitions/BooleanStateConfigurationCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { BooleanStateConfigurationInterface } from "./BooleanStateConfigurationInterface.js";

/**
 * BooleanStateConfigurationBehavior is the base class for objects that support interaction with {@link
 * BooleanStateConfiguration.Cluster}.
 *
 * This class does not have optional features of BooleanStateConfiguration.Cluster enabled. You can enable additional
 * features using BooleanStateConfigurationBehavior.with.
 */
export const BooleanStateConfigurationBehavior = ClusterBehavior
    .withInterface<BooleanStateConfigurationInterface>()
    .for(BooleanStateConfiguration.Cluster);

export interface BooleanStateConfigurationBehavior extends InstanceType<typeof BooleanStateConfigurationBehavior> {}
export namespace BooleanStateConfigurationBehavior {
    export interface State extends InstanceType<typeof BooleanStateConfigurationBehavior.State> {}
}
