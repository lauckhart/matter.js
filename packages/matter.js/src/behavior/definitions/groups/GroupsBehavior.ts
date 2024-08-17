/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Groups } from "../../../cluster/definitions/GroupsCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { GroupsInterface } from "./GroupsInterface.js";

/**
 * GroupsBehavior is the base class for objects that support interaction with {@link Groups.Cluster}.
 */
export const GroupsBehavior = ClusterBehavior
    .withInterface<GroupsInterface>()
    .for(Groups.Cluster);

export interface GroupsBehavior extends InstanceType<typeof GroupsBehavior> {}
export namespace GroupsBehavior { export interface State extends InstanceType<typeof GroupsBehavior.State> {} }
