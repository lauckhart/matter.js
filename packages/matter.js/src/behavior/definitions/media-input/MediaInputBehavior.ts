/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MediaInput } from "../../../cluster/definitions/MediaInputCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { MediaInputInterface } from "./MediaInputInterface.js";

/**
 * MediaInputBehavior is the base class for objects that support interaction with {@link MediaInput.Cluster}.
 *
 * This class does not have optional features of MediaInput.Cluster enabled. You can enable additional features using
 * MediaInputBehavior.with.
 */
export const MediaInputBehavior = ClusterBehavior
    .withInterface<MediaInputInterface>()
    .for(MediaInput.Cluster);

export interface MediaInputBehavior extends InstanceType<typeof MediaInputBehavior> {}
export namespace MediaInputBehavior { export interface State extends InstanceType<typeof MediaInputBehavior.State> {} }
