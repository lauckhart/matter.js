/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import {
    FormaldehydeConcentrationMeasurement
} from "../../../cluster/definitions/FormaldehydeConcentrationMeasurementCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { ClusterType } from "../../../cluster/ClusterType.js";

/**
 * FormaldehydeConcentrationMeasurementBehavior is the base class for objects that support interaction with {@link
 * FormaldehydeConcentrationMeasurement.Cluster}.
 *
 * FormaldehydeConcentrationMeasurement.Cluster requires you to enable one or more optional features. You can do so
 * using {@link FormaldehydeConcentrationMeasurementBehavior.with}.
 */
export const FormaldehydeConcentrationMeasurementBehavior = ClusterBehavior
    .for(ClusterType(FormaldehydeConcentrationMeasurement.Base));

export interface FormaldehydeConcentrationMeasurementBehavior extends InstanceType<typeof FormaldehydeConcentrationMeasurementBehavior> {}
export namespace FormaldehydeConcentrationMeasurementBehavior {
    export interface State extends InstanceType<typeof FormaldehydeConcentrationMeasurementBehavior.State> {}
}
