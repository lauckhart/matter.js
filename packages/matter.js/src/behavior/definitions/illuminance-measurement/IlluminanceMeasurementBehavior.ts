/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { IlluminanceMeasurement } from "../../../cluster/definitions/IlluminanceMeasurementCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * IlluminanceMeasurementBehavior is the base class for objects that support interaction with {@link
 * IlluminanceMeasurement.Cluster}.
 */
export const IlluminanceMeasurementBehavior = ClusterBehavior.for(IlluminanceMeasurement.Cluster);

type IlluminanceMeasurementBehaviorType = InstanceType<typeof IlluminanceMeasurementBehavior>;
export interface IlluminanceMeasurementBehavior extends IlluminanceMeasurementBehaviorType {}
