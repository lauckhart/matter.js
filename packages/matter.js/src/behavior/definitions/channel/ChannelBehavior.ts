/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Channel } from "../../../cluster/definitions/ChannelCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { ChannelInterface } from "./ChannelInterface.js";

/**
 * ChannelBehavior is the base class for objects that support interaction with {@link Channel.Cluster}.
 *
 * This class does not have optional features of Channel.Cluster enabled. You can enable additional features using
 * ChannelBehavior.with.
 */
export const ChannelBehavior = ClusterBehavior
    .withInterface<ChannelInterface>()
    .for(Channel.Cluster);

export interface ChannelBehavior extends InstanceType<typeof ChannelBehavior> {}
export namespace ChannelBehavior { export interface State extends InstanceType<typeof ChannelBehavior.State> {} }
