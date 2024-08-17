/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ContentControl } from "../../../cluster/definitions/ContentControlCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { ContentControlInterface } from "./ContentControlInterface.js";

/**
 * ContentControlBehavior is the base class for objects that support interaction with {@link ContentControl.Cluster}.
 *
 * This class does not have optional features of ContentControl.Cluster enabled. You can enable additional features
 * using ContentControlBehavior.with.
 */
export const ContentControlBehavior = ClusterBehavior
    .withInterface<ContentControlInterface>()
    .for(ContentControl.Cluster);

export interface ContentControlBehavior extends InstanceType<typeof ContentControlBehavior> {}
export namespace ContentControlBehavior {
    export interface State extends InstanceType<typeof ContentControlBehavior.State> {}
}
