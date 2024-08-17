/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { LaundryWasherControls } from "../../../cluster/definitions/LaundryWasherControlsCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * LaundryWasherControlsBehavior is the base class for objects that support interaction with {@link
 * LaundryWasherControls.Cluster}.
 *
 * This class does not have optional features of LaundryWasherControls.Cluster enabled. You can enable additional
 * features using LaundryWasherControlsBehavior.with.
 */
export const LaundryWasherControlsBehavior = ClusterBehavior.for(LaundryWasherControls.Cluster);

export interface LaundryWasherControlsBehavior extends InstanceType<typeof LaundryWasherControlsBehavior> {}
export namespace LaundryWasherControlsBehavior {
    export interface State extends InstanceType<typeof LaundryWasherControlsBehavior.State> {}
}
