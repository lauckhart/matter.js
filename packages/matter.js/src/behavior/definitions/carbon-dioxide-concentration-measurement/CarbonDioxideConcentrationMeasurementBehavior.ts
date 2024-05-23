/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import {
    CarbonDioxideConcentrationMeasurement
} from "../../../cluster/definitions/CarbonDioxideConcentrationMeasurementCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { ClusterType } from "../../../cluster/ClusterType.js";

/**
 * CarbonDioxideConcentrationMeasurementBehavior is the base class for objects that support interaction with {@link
 * CarbonDioxideConcentrationMeasurement.Cluster}.
 *
 * CarbonDioxideConcentrationMeasurement.Cluster requires you to enable one or more optional features. You can do so
 * using {@link CarbonDioxideConcentrationMeasurementBehavior.with}.
 */
export const CarbonDioxideConcentrationMeasurementBehavior = ClusterBehavior
    .for(ClusterType(CarbonDioxideConcentrationMeasurement.Base));

type CarbonDioxideConcentrationMeasurementBehaviorType = InstanceType<typeof CarbonDioxideConcentrationMeasurementBehavior>;
export interface CarbonDioxideConcentrationMeasurementBehavior extends CarbonDioxideConcentrationMeasurementBehaviorType {}
type StateType = InstanceType<typeof CarbonDioxideConcentrationMeasurementBehavior.State>;
export namespace CarbonDioxideConcentrationMeasurementBehavior { export interface State extends StateType {} }
