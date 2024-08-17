/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ApplicationBasic } from "../../../cluster/definitions/ApplicationBasicCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * ApplicationBasicBehavior is the base class for objects that support interaction with {@link
 * ApplicationBasic.Cluster}.
 */
export const ApplicationBasicBehavior = ClusterBehavior.for(ApplicationBasic.Cluster);

export interface ApplicationBasicBehavior extends InstanceType<typeof ApplicationBasicBehavior> {}
export namespace ApplicationBasicBehavior {
    export interface State extends InstanceType<typeof ApplicationBasicBehavior.State> {}
}
