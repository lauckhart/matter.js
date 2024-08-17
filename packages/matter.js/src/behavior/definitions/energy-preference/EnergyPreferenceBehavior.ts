/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { EnergyPreference } from "../../../cluster/definitions/EnergyPreferenceCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { ClusterType } from "../../../cluster/ClusterType.js";

/**
 * EnergyPreferenceBehavior is the base class for objects that support interaction with {@link
 * EnergyPreference.Cluster}.
 *
 * EnergyPreference.Cluster requires you to enable one or more optional features. You can do so using {@link
 * EnergyPreferenceBehavior.with}.
 */
export const EnergyPreferenceBehavior = ClusterBehavior.for(ClusterType(EnergyPreference.Base));

export interface EnergyPreferenceBehavior extends InstanceType<typeof EnergyPreferenceBehavior> {}
export namespace EnergyPreferenceBehavior {
    export interface State extends InstanceType<typeof EnergyPreferenceBehavior.State> {}
}
