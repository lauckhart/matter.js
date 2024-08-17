/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { RelativeHumidityMeasurement } from "../../../cluster/definitions/RelativeHumidityMeasurementCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * RelativeHumidityMeasurementBehavior is the base class for objects that support interaction with {@link
 * RelativeHumidityMeasurement.Cluster}.
 */
export const RelativeHumidityMeasurementBehavior = ClusterBehavior.for(RelativeHumidityMeasurement.Cluster);

export interface RelativeHumidityMeasurementBehavior extends InstanceType<typeof RelativeHumidityMeasurementBehavior> {}
export namespace RelativeHumidityMeasurementBehavior {
    export interface State extends InstanceType<typeof RelativeHumidityMeasurementBehavior.State> {}
}
