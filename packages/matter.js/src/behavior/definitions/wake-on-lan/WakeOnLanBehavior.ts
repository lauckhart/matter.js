/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { WakeOnLan } from "../../../cluster/definitions/WakeOnLanCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * WakeOnLanBehavior is the base class for objects that support interaction with {@link WakeOnLan.Cluster}.
 */
export const WakeOnLanBehavior = ClusterBehavior.for(WakeOnLan.Cluster);

export interface WakeOnLanBehavior extends InstanceType<typeof WakeOnLanBehavior> {}
export namespace WakeOnLanBehavior { export interface State extends InstanceType<typeof WakeOnLanBehavior.State> {} }
