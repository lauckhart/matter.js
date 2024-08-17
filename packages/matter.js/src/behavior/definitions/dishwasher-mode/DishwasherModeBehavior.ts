/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DishwasherMode } from "../../../cluster/definitions/DishwasherModeCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * DishwasherModeBehavior is the base class for objects that support interaction with {@link DishwasherMode.Cluster}.
 */
export const DishwasherModeBehavior = ClusterBehavior.for(DishwasherMode.Cluster);

export interface DishwasherModeBehavior extends InstanceType<typeof DishwasherModeBehavior> {}
export namespace DishwasherModeBehavior {
    export interface State extends InstanceType<typeof DishwasherModeBehavior.State> {}
}
