/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { UnitLocalization } from "../../../cluster/definitions/UnitLocalizationCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * UnitLocalizationBehavior is the base class for objects that support interaction with {@link
 * UnitLocalization.Cluster}.
 *
 * This class does not have optional features of UnitLocalization.Cluster enabled. You can enable additional features
 * using UnitLocalizationBehavior.with.
 */
export const UnitLocalizationBehavior = ClusterBehavior.for(UnitLocalization.Cluster);

export interface UnitLocalizationBehavior extends InstanceType<typeof UnitLocalizationBehavior> {}
export namespace UnitLocalizationBehavior {
    export interface State extends InstanceType<typeof UnitLocalizationBehavior.State> {}
}
