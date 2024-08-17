/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Pm1ConcentrationMeasurement } from "../../../cluster/definitions/Pm1ConcentrationMeasurementCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { ClusterType } from "../../../cluster/ClusterType.js";

/**
 * Pm1ConcentrationMeasurementBehavior is the base class for objects that support interaction with {@link
 * Pm1ConcentrationMeasurement.Cluster}.
 *
 * Pm1ConcentrationMeasurement.Cluster requires you to enable one or more optional features. You can do so using {@link
 * Pm1ConcentrationMeasurementBehavior.with}.
 */
export const Pm1ConcentrationMeasurementBehavior = ClusterBehavior.for(ClusterType(Pm1ConcentrationMeasurement.Base));

export interface Pm1ConcentrationMeasurementBehavior extends InstanceType<typeof Pm1ConcentrationMeasurementBehavior> {}
export namespace Pm1ConcentrationMeasurementBehavior {
    export interface State extends InstanceType<typeof Pm1ConcentrationMeasurementBehavior.State> {}
}
