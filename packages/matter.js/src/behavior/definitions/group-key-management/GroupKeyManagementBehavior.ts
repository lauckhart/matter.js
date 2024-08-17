/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { GroupKeyManagement } from "../../../cluster/definitions/GroupKeyManagementCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { GroupKeyManagementInterface } from "./GroupKeyManagementInterface.js";

/**
 * GroupKeyManagementBehavior is the base class for objects that support interaction with {@link
 * GroupKeyManagement.Cluster}.
 */
export const GroupKeyManagementBehavior = ClusterBehavior
    .withInterface<GroupKeyManagementInterface>()
    .for(GroupKeyManagement.Cluster);

export interface GroupKeyManagementBehavior extends InstanceType<typeof GroupKeyManagementBehavior> {}
export namespace GroupKeyManagementBehavior {
    export interface State extends InstanceType<typeof GroupKeyManagementBehavior.State> {}
}
