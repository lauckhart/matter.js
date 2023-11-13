/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Identify } from "../../cluster/definitions/IdentifyCluster.js";
import { ClusterBehavior } from "../cluster/ClusterBehavior.js";
import { IdentifyInterface } from "../cluster/definitions/IdentifyInterface.js";

/**
 * IdentifyBehavior is the base class for objects that support interaction with {@link Identify.Cluster}.
 *
 * This class does not have optional features of Identify.Cluster enabled. You can enable additional features using
 * IdentifyBehavior.with.
 */
export const IdentifyBehavior = ClusterBehavior
    .withInterface<IdentifyInterface>()
    .for(Identify.Cluster);

type IdentifyBehaviorType = InstanceType<typeof IdentifyBehavior>;
export interface IdentifyBehavior extends IdentifyBehaviorType {}
