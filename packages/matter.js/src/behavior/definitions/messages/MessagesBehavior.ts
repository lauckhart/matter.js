/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { Messages } from "../../../cluster/definitions/MessagesCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { MessagesInterface } from "./MessagesInterface.js";

/**
 * MessagesBehavior is the base class for objects that support interaction with {@link Messages.Cluster}.
 */
export const MessagesBehavior = ClusterBehavior
    .withInterface<MessagesInterface>()
    .for(Messages.Cluster);

export interface MessagesBehavior extends InstanceType<typeof MessagesBehavior> {}
export namespace MessagesBehavior { export interface State extends InstanceType<typeof MessagesBehavior.State> {} }
