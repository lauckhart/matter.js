/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import {
    TotalVolatileOrganicCompoundsConcentrationMeasurement
} from "@project-chip/matter.js-types";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { ClusterType } from "@project-chip/matter.js-types";

/**
 * TotalVolatileOrganicCompoundsConcentrationMeasurementBehavior is the base class for objects that support interaction
 * with {@link TotalVolatileOrganicCompoundsConcentrationMeasurement.Cluster}.
 *
 * TotalVolatileOrganicCompoundsConcentrationMeasurement.Cluster requires you to enable one or more optional features.
 * You can do so using {@link TotalVolatileOrganicCompoundsConcentrationMeasurementBehavior.with}.
 */
export const TotalVolatileOrganicCompoundsConcentrationMeasurementBehavior = ClusterBehavior
    .for(ClusterType(TotalVolatileOrganicCompoundsConcentrationMeasurement.Base));

type TotalVolatileOrganicCompoundsConcentrationMeasurementBehaviorType = InstanceType<typeof TotalVolatileOrganicCompoundsConcentrationMeasurementBehavior>;
export interface TotalVolatileOrganicCompoundsConcentrationMeasurementBehavior extends TotalVolatileOrganicCompoundsConcentrationMeasurementBehaviorType {}
type StateType = InstanceType<typeof TotalVolatileOrganicCompoundsConcentrationMeasurementBehavior.State>;
export namespace TotalVolatileOrganicCompoundsConcentrationMeasurementBehavior {
    export interface State extends StateType {}
}
