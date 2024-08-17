/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ContentLauncher } from "../../../cluster/definitions/ContentLauncherCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { ContentLauncherInterface } from "./ContentLauncherInterface.js";

/**
 * ContentLauncherBehavior is the base class for objects that support interaction with {@link ContentLauncher.Cluster}.
 *
 * This class does not have optional features of ContentLauncher.Cluster enabled. You can enable additional features
 * using ContentLauncherBehavior.with.
 */
export const ContentLauncherBehavior = ClusterBehavior
    .withInterface<ContentLauncherInterface>()
    .for(ContentLauncher.Cluster);

export interface ContentLauncherBehavior extends InstanceType<typeof ContentLauncherBehavior> {}
export namespace ContentLauncherBehavior {
    export interface State extends InstanceType<typeof ContentLauncherBehavior.State> {}
}
