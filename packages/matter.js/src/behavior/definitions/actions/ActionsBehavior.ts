/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Actions } from "../../../cluster/definitions/ActionsCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { ActionsInterface } from "./ActionsInterface.js";

/**
 * ActionsBehavior is the base class for objects that support interaction with {@link Actions.Cluster}.
 */
export const ActionsBehavior = ClusterBehavior
    .withInterface<ActionsInterface>()
    .for(Actions.Cluster);

export interface ActionsBehavior extends InstanceType<typeof ActionsBehavior> {}
export namespace ActionsBehavior { export interface State extends InstanceType<typeof ActionsBehavior.State> {} }
