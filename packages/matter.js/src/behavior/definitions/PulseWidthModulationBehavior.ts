/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { PulseWidthModulation } from "../../cluster/definitions/PulseWidthModulationCluster.js";
import { ClusterBehavior } from "../cluster/ClusterBehavior.js";
import { PulseWidthModulationInterface } from "../cluster/definitions/PulseWidthModulationInterface.js";

/**
 * PulseWidthModulationBehavior is the base class for objects that support interaction with {@link
 * PulseWidthModulation.Cluster}.
 *
 * This class does not have optional features of PulseWidthModulation.Cluster enabled. You can enable additional
 * features using PulseWidthModulationBehavior.with.
 */
export const PulseWidthModulationBehavior = ClusterBehavior
    .withInterface<PulseWidthModulationInterface>()
    .for(PulseWidthModulation.Cluster);

type PulseWidthModulationBehaviorType = InstanceType<typeof PulseWidthModulationBehavior>;
export interface PulseWidthModulationBehavior extends PulseWidthModulationBehaviorType {}
