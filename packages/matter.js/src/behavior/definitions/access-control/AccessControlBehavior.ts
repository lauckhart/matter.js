/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { AccessControl } from "../../../cluster/definitions/AccessControlCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * AccessControlBehavior is the base class for objects that support interaction with {@link AccessControl.Cluster}.
 */
export const AccessControlBehavior = ClusterBehavior.for(AccessControl.Cluster);

export interface AccessControlBehavior extends InstanceType<typeof AccessControlBehavior> {}
export namespace AccessControlBehavior {
    export interface State extends InstanceType<typeof AccessControlBehavior.State> {}
}
