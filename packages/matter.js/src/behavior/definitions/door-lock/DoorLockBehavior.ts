/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { DoorLock } from "../../../cluster/definitions/DoorLockCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { DoorLockInterface } from "./DoorLockInterface.js";

/**
 * DoorLockBehavior is the base class for objects that support interaction with {@link DoorLock.Cluster}.
 *
 * This class does not have optional features of DoorLock.Cluster enabled. You can enable additional features using
 * DoorLockBehavior.with.
 */
export const DoorLockBehavior = ClusterBehavior
    .withInterface<DoorLockInterface>()
    .for(DoorLock.Cluster);

export interface DoorLockBehavior extends InstanceType<typeof DoorLockBehavior> {}
export namespace DoorLockBehavior { export interface State extends InstanceType<typeof DoorLockBehavior.State> {} }
