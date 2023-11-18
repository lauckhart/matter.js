/**
 * @license
 * Copyright 2022-2023 Project CHIP Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { MediaInput } from "../../../cluster/definitions/MediaInputCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { MediaInputInterface } from "./Interface.js";

/**
 * MediaInputBehavior is the base class for objects that support interaction with {@link MediaInput.Cluster}.
 *
 * This class does not have optional features of MediaInput.Cluster enabled. You can enable additional features using
 * MediaInputBehavior.with.
 */
export const MediaInputBehavior = ClusterBehavior
    .withInterface<MediaInputInterface>()
    .for(MediaInput.Cluster);

type MediaInputBehaviorType = InstanceType<typeof MediaInputBehavior>;
export interface MediaInputBehavior extends MediaInputBehaviorType {}
