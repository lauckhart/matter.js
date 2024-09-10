/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OvenCavityOperationalState } from "@project-chip/matter.js-types";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * OvenCavityOperationalStateBehavior is the base class for objects that support interaction with {@link
 * OvenCavityOperationalState.Cluster}.
 */
export const OvenCavityOperationalStateBehavior = ClusterBehavior.for(OvenCavityOperationalState.Cluster);

type OvenCavityOperationalStateBehaviorType = InstanceType<typeof OvenCavityOperationalStateBehavior>;
export interface OvenCavityOperationalStateBehavior extends OvenCavityOperationalStateBehaviorType {}
type StateType = InstanceType<typeof OvenCavityOperationalStateBehavior.State>;
export namespace OvenCavityOperationalStateBehavior { export interface State extends StateType {} }
