/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { GeneralCommissioning } from "../../cluster/definitions/GeneralCommissioningCluster.js";
import { ClusterBehavior } from "../cluster/ClusterBehavior.js";
import { GeneralCommissioningInterface } from "../cluster/definitions/GeneralCommissioningInterface.js";

/**
 * GeneralCommissioningBehavior is the base class for objects that support interaction with {@link
 * GeneralCommissioning.Cluster}.
 */
export const GeneralCommissioningBehavior = ClusterBehavior
    .withInterface<GeneralCommissioningInterface>()
    .for(GeneralCommissioning.Cluster);

type GeneralCommissioningBehaviorType = InstanceType<typeof GeneralCommissioningBehavior>;
export interface GeneralCommissioningBehavior extends GeneralCommissioningBehaviorType {}
