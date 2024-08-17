/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { GeneralCommissioning } from "../../../cluster/definitions/GeneralCommissioningCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { GeneralCommissioningInterface } from "./GeneralCommissioningInterface.js";

/**
 * GeneralCommissioningBehavior is the base class for objects that support interaction with {@link
 * GeneralCommissioning.Cluster}.
 */
export const GeneralCommissioningBehavior = ClusterBehavior
    .withInterface<GeneralCommissioningInterface>()
    .for(GeneralCommissioning.Cluster);

export interface GeneralCommissioningBehavior extends InstanceType<typeof GeneralCommissioningBehavior> {}
export namespace GeneralCommissioningBehavior {
    export interface State extends InstanceType<typeof GeneralCommissioningBehavior.State> {}
}
