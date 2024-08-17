/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { TimeFormatLocalization } from "../../../cluster/definitions/TimeFormatLocalizationCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * TimeFormatLocalizationBehavior is the base class for objects that support interaction with {@link
 * TimeFormatLocalization.Cluster}.
 *
 * This class does not have optional features of TimeFormatLocalization.Cluster enabled. You can enable additional
 * features using TimeFormatLocalizationBehavior.with.
 */
export const TimeFormatLocalizationBehavior = ClusterBehavior.for(TimeFormatLocalization.Cluster);

export interface TimeFormatLocalizationBehavior extends InstanceType<typeof TimeFormatLocalizationBehavior> {}
export namespace TimeFormatLocalizationBehavior {
    export interface State extends InstanceType<typeof TimeFormatLocalizationBehavior.State> {}
}
