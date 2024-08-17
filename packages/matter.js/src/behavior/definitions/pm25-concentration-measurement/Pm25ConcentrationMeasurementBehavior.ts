/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Pm25ConcentrationMeasurement } from "../../../cluster/definitions/Pm25ConcentrationMeasurementCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { ClusterType } from "../../../cluster/ClusterType.js";

/**
 * Pm25ConcentrationMeasurementBehavior is the base class for objects that support interaction with {@link
 * Pm25ConcentrationMeasurement.Cluster}.
 *
 * Pm25ConcentrationMeasurement.Cluster requires you to enable one or more optional features. You can do so using
 * {@link Pm25ConcentrationMeasurementBehavior.with}.
 */
export const Pm25ConcentrationMeasurementBehavior = ClusterBehavior.for(ClusterType(Pm25ConcentrationMeasurement.Base));

export interface Pm25ConcentrationMeasurementBehavior extends InstanceType<typeof Pm25ConcentrationMeasurementBehavior> {}
export namespace Pm25ConcentrationMeasurementBehavior {
    export interface State extends InstanceType<typeof Pm25ConcentrationMeasurementBehavior.State> {}
}
