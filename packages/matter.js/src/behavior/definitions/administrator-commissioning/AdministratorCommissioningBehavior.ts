/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { AdministratorCommissioning } from "../../../cluster/definitions/AdministratorCommissioningCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { AdministratorCommissioningInterface } from "./AdministratorCommissioningInterface.js";

/**
 * AdministratorCommissioningBehavior is the base class for objects that support interaction with {@link
 * AdministratorCommissioning.Cluster}.
 *
 * This class does not have optional features of AdministratorCommissioning.Cluster enabled. You can enable additional
 * features using AdministratorCommissioningBehavior.with.
 */
export const AdministratorCommissioningBehavior = ClusterBehavior
    .withInterface<AdministratorCommissioningInterface>()
    .for(AdministratorCommissioning.Cluster);

export interface AdministratorCommissioningBehavior extends InstanceType<typeof AdministratorCommissioningBehavior> {}
export namespace AdministratorCommissioningBehavior {
    export interface State extends InstanceType<typeof AdministratorCommissioningBehavior.State> {}
}
