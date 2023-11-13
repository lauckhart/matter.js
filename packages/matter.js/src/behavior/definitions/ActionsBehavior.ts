/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Actions } from "../../cluster/definitions/ActionsCluster.js";
import { ClusterBehavior } from "../cluster/ClusterBehavior.js";
import { ActionsInterface } from "../cluster/definitions/ActionsInterface.js";

/**
 * ActionsBehavior is the base class for objects that support interaction with {@link Actions.Cluster}.
 */
export const ActionsBehavior = ClusterBehavior
    .withInterface<ActionsInterface>()
    .for(Actions.Cluster);

type ActionsBehaviorType = InstanceType<typeof ActionsBehavior>;
export interface ActionsBehavior extends ActionsBehaviorType {}
