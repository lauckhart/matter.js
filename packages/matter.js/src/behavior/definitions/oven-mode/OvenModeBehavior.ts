/**
 * @license
 * Copyright 2022-2024 Matter.js Authors
 * SPDX-License-Identifier: Apache-2.0
 */

/*** THIS FILE IS GENERATED, DO NOT EDIT ***/

import { OvenMode } from "../../../cluster/definitions/OvenModeCluster.js";
import { ClusterBehavior } from "../../cluster/ClusterBehavior.js";

/**
 * OvenModeBehavior is the base class for objects that support interaction with {@link OvenMode.Cluster}.
 *
 * This class does not have optional features of OvenMode.Cluster enabled. You can enable additional features using
 * OvenModeBehavior.with.
 */
export const OvenModeBehavior = ClusterBehavior.for(OvenMode.Cluster);

export interface OvenModeBehavior extends InstanceType<typeof OvenModeBehavior> {}
export namespace OvenModeBehavior { export interface State extends InstanceType<typeof OvenModeBehavior.State> {} }
