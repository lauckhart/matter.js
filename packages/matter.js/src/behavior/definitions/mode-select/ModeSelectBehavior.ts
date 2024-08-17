/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { ModeSelect } from "../../../cluster/definitions/ModeSelectCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";
import { ModeSelectInterface } from "./ModeSelectInterface.js";

/**
 * ModeSelectBehavior is the base class for objects that support interaction with {@link ModeSelect.Cluster}.
 *
 * This class does not have optional features of ModeSelect.Cluster enabled. You can enable additional features using
 * ModeSelectBehavior.with.
 */
export const ModeSelectBehavior = ClusterBehavior
    .withInterface<ModeSelectInterface>()
    .for(ModeSelect.Cluster);

export interface ModeSelectBehavior extends InstanceType<typeof ModeSelectBehavior> {}
export namespace ModeSelectBehavior { export interface State extends InstanceType<typeof ModeSelectBehavior.State> {} }
