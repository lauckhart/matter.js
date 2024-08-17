/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { RadonConcentrationMeasurement } from "../../../cluster/definitions/RadonConcentrationMeasurementCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { ClusterType } from "../../../cluster/ClusterType.js";

/**
 * RadonConcentrationMeasurementBehavior is the base class for objects that support interaction with {@link
 * RadonConcentrationMeasurement.Cluster}.
 *
 * RadonConcentrationMeasurement.Cluster requires you to enable one or more optional features. You can do so using
 * {@link RadonConcentrationMeasurementBehavior.with}.
 */
export const RadonConcentrationMeasurementBehavior = ClusterBehavior
    .for(ClusterType(RadonConcentrationMeasurement.Base));

export interface RadonConcentrationMeasurementBehavior extends InstanceType<typeof RadonConcentrationMeasurementBehavior> {}
export namespace RadonConcentrationMeasurementBehavior {
    export interface State extends InstanceType<typeof RadonConcentrationMeasurementBehavior.State> {}
}
