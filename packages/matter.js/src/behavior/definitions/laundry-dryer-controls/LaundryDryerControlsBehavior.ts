/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { LaundryDryerControls } from "../../../cluster/definitions/LaundryDryerControlsCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * LaundryDryerControlsBehavior is the base class for objects that support interaction with {@link
 * LaundryDryerControls.Cluster}.
 */
export const LaundryDryerControlsBehavior = ClusterBehavior.for(LaundryDryerControls.Cluster);

export interface LaundryDryerControlsBehavior extends InstanceType<typeof LaundryDryerControlsBehavior> {}
export namespace LaundryDryerControlsBehavior {
    export interface State extends InstanceType<typeof LaundryDryerControlsBehavior.State> {}
}
