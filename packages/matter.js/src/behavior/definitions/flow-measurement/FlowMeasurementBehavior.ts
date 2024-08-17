/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { FlowMeasurement } from "../../../cluster/definitions/FlowMeasurementCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * FlowMeasurementBehavior is the base class for objects that support interaction with {@link FlowMeasurement.Cluster}.
 */
export const FlowMeasurementBehavior = ClusterBehavior.for(FlowMeasurement.Cluster);

export interface FlowMeasurementBehavior extends InstanceType<typeof FlowMeasurementBehavior> {}
export namespace FlowMeasurementBehavior {
    export interface State extends InstanceType<typeof FlowMeasurementBehavior.State> {}
}
