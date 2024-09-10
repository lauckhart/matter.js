/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import {
    FormaldehydeConcentrationMeasurement
} from "@project-chip/matter.js-types";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { ClusterType } from "@project-chip/matter.js-types";

/**
 * FormaldehydeConcentrationMeasurementBehavior is the base class for objects that support interaction with {@link
 * FormaldehydeConcentrationMeasurement.Cluster}.
 *
 * FormaldehydeConcentrationMeasurement.Cluster requires you to enable one or more optional features. You can do so
 * using {@link FormaldehydeConcentrationMeasurementBehavior.with}.
 */
export const FormaldehydeConcentrationMeasurementBehavior = ClusterBehavior
    .for(ClusterType(FormaldehydeConcentrationMeasurement.Base));

type FormaldehydeConcentrationMeasurementBehaviorType = InstanceType<typeof FormaldehydeConcentrationMeasurementBehavior>;
export interface FormaldehydeConcentrationMeasurementBehavior extends FormaldehydeConcentrationMeasurementBehaviorType {}
type StateType = InstanceType<typeof FormaldehydeConcentrationMeasurementBehavior.State>;
export namespace FormaldehydeConcentrationMeasurementBehavior { export interface State extends StateType {} }
