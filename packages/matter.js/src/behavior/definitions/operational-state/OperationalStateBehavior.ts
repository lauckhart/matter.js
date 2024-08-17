/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OperationalState } from "../../../cluster/definitions/OperationalStateCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { OperationalStateInterface } from "./OperationalStateInterface.js";

/**
 * OperationalStateBehavior is the base class for objects that support interaction with {@link
 * OperationalState.Cluster}.
 */
export const OperationalStateBehavior = ClusterBehavior
    .withInterface<OperationalStateInterface>()
    .for(OperationalState.Cluster);

export interface OperationalStateBehavior extends InstanceType<typeof OperationalStateBehavior> {}
export namespace OperationalStateBehavior {
    export interface State extends InstanceType<typeof OperationalStateBehavior.State> {}
}
