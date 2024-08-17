/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { WindowCovering } from "../../../cluster/definitions/WindowCoveringCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { WindowCoveringInterface } from "./WindowCoveringInterface.js";
import { ClusterType } from "../../../cluster/ClusterType.js";

/**
 * WindowCoveringBehavior is the base class for objects that support interaction with {@link WindowCovering.Cluster}.
 *
 * WindowCovering.Cluster requires you to enable one or more optional features. You can do so using {@link
 * WindowCoveringBehavior.with}.
 */
export const WindowCoveringBehavior = ClusterBehavior
    .withInterface<WindowCoveringInterface>()
    .for(ClusterType(WindowCovering.Base));

export interface WindowCoveringBehavior extends InstanceType<typeof WindowCoveringBehavior> {}
export namespace WindowCoveringBehavior {
    export interface State extends InstanceType<typeof WindowCoveringBehavior.State> {}
}
