/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Pm10ConcentrationMeasurement } from "../../../cluster/definitions/Pm10ConcentrationMeasurementCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { ClusterType } from "../../../cluster/ClusterType.js";

/**
 * Pm10ConcentrationMeasurementBehavior is the base class for objects that support interaction with {@link
 * Pm10ConcentrationMeasurement.Cluster}.
 *
 * Pm10ConcentrationMeasurement.Cluster requires you to enable one or more optional features. You can do so using
 * {@link Pm10ConcentrationMeasurementBehavior.with}.
 */
export const Pm10ConcentrationMeasurementBehavior = ClusterBehavior.for(ClusterType(Pm10ConcentrationMeasurement.Base));

export interface Pm10ConcentrationMeasurementBehavior extends InstanceType<typeof Pm10ConcentrationMeasurementBehavior> {}
export namespace Pm10ConcentrationMeasurementBehavior {
    export interface State extends InstanceType<typeof Pm10ConcentrationMeasurementBehavior.State> {}
}
