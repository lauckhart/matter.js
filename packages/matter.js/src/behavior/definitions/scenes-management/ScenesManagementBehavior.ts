/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ScenesManagement } from "../../../cluster/definitions/ScenesManagementCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { ScenesManagementInterface } from "./ScenesManagementInterface.js";

/**
 * ScenesManagementBehavior is the base class for objects that support interaction with {@link
 * ScenesManagement.Cluster}.
 */
export const ScenesManagementBehavior = ClusterBehavior
    .withInterface<ScenesManagementInterface>()
    .for(ScenesManagement.Cluster);

export interface ScenesManagementBehavior extends InstanceType<typeof ScenesManagementBehavior> {}
export namespace ScenesManagementBehavior {
    export interface State extends InstanceType<typeof ScenesManagementBehavior.State> {}
}
