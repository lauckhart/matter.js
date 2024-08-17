/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { TemperatureMeasurement } from "../../../cluster/definitions/TemperatureMeasurementCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * TemperatureMeasurementBehavior is the base class for objects that support interaction with {@link
 * TemperatureMeasurement.Cluster}.
 */
export const TemperatureMeasurementBehavior = ClusterBehavior.for(TemperatureMeasurement.Cluster);

export interface TemperatureMeasurementBehavior extends InstanceType<typeof TemperatureMeasurementBehavior> {}
export namespace TemperatureMeasurementBehavior {
    export interface State extends InstanceType<typeof TemperatureMeasurementBehavior.State> {}
}
