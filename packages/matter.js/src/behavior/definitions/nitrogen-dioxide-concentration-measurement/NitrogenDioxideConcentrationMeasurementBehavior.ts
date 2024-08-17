/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import {
    NitrogenDioxideConcentrationMeasurement
} from "../../../cluster/definitions/NitrogenDioxideConcentrationMeasurementCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { ClusterType } from "../../../cluster/ClusterType.js";

/**
 * NitrogenDioxideConcentrationMeasurementBehavior is the base class for objects that support interaction with {@link
 * NitrogenDioxideConcentrationMeasurement.Cluster}.
 *
 * NitrogenDioxideConcentrationMeasurement.Cluster requires you to enable one or more optional features. You can do so
 * using {@link NitrogenDioxideConcentrationMeasurementBehavior.with}.
 */
export const NitrogenDioxideConcentrationMeasurementBehavior = ClusterBehavior
    .for(ClusterType(NitrogenDioxideConcentrationMeasurement.Base));

export interface NitrogenDioxideConcentrationMeasurementBehavior extends InstanceType<typeof NitrogenDioxideConcentrationMeasurementBehavior> {}
export namespace NitrogenDioxideConcentrationMeasurementBehavior {
    export interface State extends InstanceType<typeof NitrogenDioxideConcentrationMeasurementBehavior.State> {}
}
