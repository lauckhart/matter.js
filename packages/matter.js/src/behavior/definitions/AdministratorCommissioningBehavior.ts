/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { AdministratorCommissioning } from "../../cluster/definitions/AdministratorCommissioningCluster.js";
import { ClusterBehavior } from "../cluster/ClusterBehavior.js";
import { AdministratorCommissioningInterface } from "../cluster/definitions/AdministratorCommissioningInterface.js";

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

type AdministratorCommissioningBehaviorType = InstanceType<typeof AdministratorCommissioningBehavior>;
export interface AdministratorCommissioningBehavior extends AdministratorCommissioningBehaviorType {}
